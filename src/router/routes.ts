import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import { useUserStore } from '@/stores/userStore';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const authGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> => {
  const userStore = useUserStore();
  if (!userStore.isAuthenticated) {
      next('/');
  }

  if (!userStore.me.id) {
    await userStore.getMe()
    .catch(() => {
      next('/');
    })
  }

  next();
}

export default [
  { path: '/', component: LoginView },
  { path: '/admin-products', component: HomeView, beforeEnter: authGuard },
];
