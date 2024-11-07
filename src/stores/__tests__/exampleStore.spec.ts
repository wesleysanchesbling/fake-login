import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/exampleStore';

describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should initialize count with 0', () => {
    const store = useCounterStore();
    expect(store.count).toBe(0);
  });

  it('should compute doubleCount correctly', () => {
    const store = useCounterStore();
    expect(store.doubleCount).toBe(0);
    store.count = 2;
    expect(store.doubleCount).toBe(4);
  });

  it('should increment count value when increment is called', () => {
    const store = useCounterStore();
    store.increment();
    expect(store.count).toBe(1);
  });
});
