import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Launchpads from '@/views/Launchpads'
import Launchpad from '@/views/Launchpad'
import Satellites from '@/views/Satellites'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/launchpads',
    name: 'launchpads',
    component: Launchpads
  },
  {
    path: '/launchpads/:id',
    name: 'launchpad',
    component: Launchpad
  },
  {
    path: '/satellites',
    name: 'satellites',
    component: Satellites
  }
]

const router = new VueRouter({
  routes
})

export default router
