import Vue from 'vue'
import Router from 'vue-router'
const base = () => import('@/views/BaseIndex')
const index = () => import('@/views/Index')
const panel = () => import('@/views/Panel')
const login = () => import('@/views/Login')
const register = () => import('@/views/Register')
const forget = () => import('@/views/Forget')
const setter = () => import('@/views/Setter')
const weekGraphy = () => import('@/components/index/weekGraphy')
const rank = () => import('@/components/index/rank')

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path:'/',
      component: base,
      children:[{
        path:'/',
        component: index
      },{
        path:'/panel',
        component: panel,
        children:[{
          path:'/login',
          meta:{
            noLogin:true
          },
          component: login
        },{
          path:'/register',
          meta:{
            noLogin:true
          },
          component:register
        },{
          path:'/forget',
          meta:{
            noLogin:true
          },
          component:forget
        }]
      },{
        path:'/set',
        meta:{
          requireAuth:true
        },
        component: setter
      },{
        path:'/weekGraphy',
        meta:{
          requireAuth:true
        },
        component:weekGraphy
      },{
        path:'/rank',
        meta:{
          requireAuth:true
        },
        component:rank
      }
      ]
    }
  ]
})

