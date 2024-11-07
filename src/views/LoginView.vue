<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import { Ref, ref } from 'vue';

const router = useRouter();
const userStore = useUserStore();

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const loading: Ref<boolean> = ref(false);

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return alert('Credenciais inválidas');
  }

  if (password.value.length < 6) {
    return alert('A senha deve ter pelo menos 6(seis) caracteres');
  }

  loading.value = true;
  await userStore.auth(email.value, password.value)
  .then(() => router.push('/admin-products'))
  .catch(() => alert('Credenciais inválidas'))
  .finally(() => loading.value = false)
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 w-full">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email"
            required
            placeholder="Email"
            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            minlength="6"
            type="password" 
            id="password" 
            v-model="password"
            required
            placeholder="Password"
            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          :disabled="loading"
          type="submit" 
          class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <span>
          <template v-if="loading">
            Carregando...
          </template>
          <template v-else>
            Log In
          </template>
        </span>
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-500">
        Don't have an account? <a href="#" cjlass="text-blue-600 hover:text-blue-800">Sign up</a>
      </p>
    </div>
  </div>
</template>