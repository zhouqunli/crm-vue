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
    component: () => import( '../views/main/index.vue'),
    /*显示在了main里面，的一个路由部分*/
    children:[
        {
          /*带/表示从跟路径下访问，可以直接http://localhost:8081/index
          * 如果不带/则表示拼接maim http://localhost:8081/main/index*/
      path:'index',
          name:'index',
          component: () => import( '../views/index/index.vue'),
    },
      {

        path:'supplier',
        name:'supplier',
        component: () => import( '../views/supplier/index.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
