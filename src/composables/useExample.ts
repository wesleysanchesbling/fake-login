import { ref } from 'vue';

export default function useExample() {
  const example = ref('Example Text');

  function updateExample(newExample: string) {
    example.value = newExample;
  }

  return {
    example,
    updateExample,
  };
}
