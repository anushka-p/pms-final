// Composables
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/UserLogin.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  { path: '/user/registration', component: () => import('../views/UserRegistraion.vue') },
  { path: '/user/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
