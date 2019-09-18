import Vue from 'vue'
import Router from 'vue-router'
import base from '@/views/BaseIndex'
import index from '@/views/Index'
import login from '@/views/Login'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component: base,
      children:[{
        path:'/',
        component: index
      },{
        path:'/login',
        component: login
      }
      ]
    }
  ]
})
