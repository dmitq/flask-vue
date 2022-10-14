import { createRouter, createWebHashHistory } from 'vue-router'
import Ping from '@/components/Ping'
import FilmList from '@/components/FilmList'

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: Ping
  },
  {
    path: '/films',
    name: 'films',
    component: FilmList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
