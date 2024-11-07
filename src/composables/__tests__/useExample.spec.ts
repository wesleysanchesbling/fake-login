import { describe, it, expect } from 'vitest';
import useExample from '@/composables/useExample';

describe('useExample composable', () => {
  it('should initialize example with "Example Text"', () => {
    const { example } = useExample();
    expect(example.value).toBe('Example Text');
  });

  it('should update example value when updateExample is called', () => {
    const { example, updateExample } = useExample();
    const newExample = 'New Example Text';
    updateExample(newExample);
    expect(example.value).toBe(newExample);
  });
});
