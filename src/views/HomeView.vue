<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';
  const router = useRouter();
  const userStore = useUserStore();
  const hadlerLogout = async () => {
    await userStore.logout().then(() => {
      router.push('/');
    })
  }
</script>

<template>
  <body class="w-full">
    <header class="bg-white shadow-sm">
  <div class="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
    <div class="font-black text-xl text-gray-800">
      LOGO
    </div>

    <nav class="ml-auto">

      <ul class="flex space-x-4">
        <li> Olá <span class="font-bold"> {{ userStore.me.name }} </span> </li>
        <li>
          <a href="#" 
          class="text-sm text-gray-600 hover:text-gray-800 hover:underline transition duration-150 ease-in-out"
          @click.prevent="hadlerLogout"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            Logout
          </a>
        </li>
        <!-- Add more navigation items here -->
      </ul>
    </nav>
  </div>
</header>
  </body>
</template>