import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

console.log(`to aqui`, routes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
