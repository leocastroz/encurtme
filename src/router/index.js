import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import PainelPage from '../pages/PainelPage.vue'
import Guard from '../services/middleware.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/painel',
      name: 'painel',
      beforeEnter: Guard.auth,
      component: PainelPage
    }
  ]
})

export default router
