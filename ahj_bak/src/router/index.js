import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/hello/HelloWorld'
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/hello/HelloWorld',
    name: 'HelloWorld',
    // component: HelloWorld,
    component: () => import('@/views/hello/HelloWorld.vue')
  },
  {
    path: '/page/index',
    name: 'index',
    component: () => import('@/views/page/index.vue')
  },
  {
    path: '/page/form',
    name: 'form',
    component: () => import('@/views/page/form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
