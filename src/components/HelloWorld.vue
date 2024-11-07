<template>
  <h1 class="text-4xl font-bold">{{ msg }}</h1>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue';

  // Definição das props
  const props = defineProps<{ msg: string }>();

  // Usamos `toRefs` para criar refs reativas a partir das props
  const { msg } = toRefs(props);
</script>
