import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/hello/home'
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/hello',
    name: 'helloIndex',
    redirect: '/hello/home',
    component: () => import('../views/hello/index.vue'),
    children: [
      {
        path: 'home',
        name: 'helloHome',
        component: () => import('../views/hello/Home.vue')
      },
      {
        path: 'about',
        name: 'helloAbout',
        component: () => import('../views/hello/About.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
