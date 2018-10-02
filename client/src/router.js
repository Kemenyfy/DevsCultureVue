import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddForm from './views/AddForm.vue'
import Subcategories from './views/Subcategories'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/addForm',
      name: 'addForm',
      component: AddForm
    },
    {
      path: '/subcategories',
      name: 'subcategores',
      component: Subcategories
    },
  ]
})