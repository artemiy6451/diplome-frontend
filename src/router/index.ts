import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '@/views/AdminPage.vue'
import UserPage from '@/views/UserPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPage,
    },
    {
      path: '/user',
      name: 'UserPage',
      component: UserPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
  ],
})

export default router
