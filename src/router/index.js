import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DogsView from '../views/DogsView.vue'
import CatsView from '../views/CatsView.vue'
import OtherAnimals from '../views/OtherAnimals.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
   component: AboutView
  },
  {
    path: '/dogs',
    name: 'dogs',
   component: DogsView
  },
  {
    path: '/cats',
    name: 'cats',
   component: CatsView
  },
  {
    path: '/other-animals',
    name: 'other-animals',
   component: OtherAnimals
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
