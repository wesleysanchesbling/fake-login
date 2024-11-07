import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import { NAME_TOKEN } from '@/utils/constants';

vi.mock('@/infra/gateway/UserGatewayHttp', () => {
  const mockAuth = vi.fn().mockReturnValue({
    id: 1, name: 'Wesley Sanches', email: 'wesley.sanches@bling.com.br'
  });

  return {
    default: vi.fn(() => ({
      getMe: vi.fn().mockResolvedValue({ id: 1, name: 'Wesley Sanches', email: 'wesley.sanches@bling.com.br' }),
      auth: mockAuth,
      logout: vi.fn().mockResolvedValue(true),
    }))
  };
});

import UserGatewayHttp from '@/infra/gateway/UserGatewayHttp';

describe('useUserStore', () => {
  let mockUserGateway: { getMe: any; auth: any; logout: any };

  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();

    mockUserGateway = {
      getMe: vi.fn(),
      auth: vi.fn(),
      logout: vi.fn(),
    };
    (UserGatewayHttp as any).mockImplementation(() => mockUserGateway);
  });

  it('should initialize with empty user', () => {
    const store = useUserStore();
    expect(store.me).toEqual({ id: 0, name: '', email: '' });
  });

  it('should set isAuthenticated to false when no token exists', () => {
    const store = useUserStore();
    expect(store.isAuthenticated).toBe(false);
  });

  it('should set isAuthenticated to true when token exists', () => {
    localStorage.setItem(NAME_TOKEN, 'some-token');
    const store = useUserStore();
    expect(store.isAuthenticated).toBe(true);
  });

  it('should authenticate user with valid email', async () => {
    const mockUser = { id: 1, name: 'Wesley Sanches', email: 'wesley.sanches@bling.com.br' };
    
    // Mockando o método da classe UserGatewayHttp
    mockUserGateway.auth.mockReturnValue(mockUser);
    
    const store = useUserStore();
    await store.auth('wesley.sanches@bling.com.br', 'password');
    expect(store.me).toEqual(mockUser);
  });

  it('should throw error for invalid email', async () => {
    mockUserGateway.auth.mockRejectedValue(new Error('Email ou senha inválidos'));
    
    const store = useUserStore();
    await expect(store.auth('invalid@email.com', 'password')).rejects.toThrow('Email ou senha inválidos');
  });

  it('should call logout method and return its result', async () => {
    mockUserGateway.logout.mockResolvedValue(true);
    
    const store = useUserStore();
    await store.logout();
  
    expect(store.me).toEqual({ id: 0, name: '', email: '' });
    expect(localStorage.getItem(NAME_TOKEN)).toBeNull();
  });
});
