import { createRouter, createWebHashHistory } from 'vue-router'
import Ping from '@/components/Ping'

const routes = [
  {
    path: '/',
    name: 'Ping',
    component: Ping
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
