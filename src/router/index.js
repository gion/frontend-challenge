/* istanbul ignore file */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/list/:id',
    name: 'List',
    component: List,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    // will match everything
    path: '/*',
    name: 'Home alias',
    redirect: '/home',
  },
]

const router = new VueRouter({
  routes,
})

export default router
