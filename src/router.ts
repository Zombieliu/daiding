import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/about/',
    component: About,
    meta: {
      title: 'About',
    },
  },
  {
    path: '/home/',
    component: Index,
    meta: {
      title: 'Home',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
