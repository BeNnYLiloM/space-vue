import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Launchpads from '@/views/Launchpads'
import Launchpad from '@/views/Launchpad'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
