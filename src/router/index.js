import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
/* {
    path: '/',
    name: 'Home',
    component: Home
  },*/
    /*
    * path:表示的是请求路径
    *name：表示名称，可以不要 */
  {
    path: '/login',
    //重定向
    redirect:'/login',
    /*name: 'login',
    component: () => import( '../views/login/index.vue')*/
  },
  {
    path: '/main',
    name: 'mian',
    component: () => import( '../views/main/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
