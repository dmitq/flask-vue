import { createRouter, createWebHashHistory } from 'vue-router'
import Ping from '@/components/Ping'
import FilmList from '@/components/FilmList'
import HomePage from '@/components/HomePage'
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
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
