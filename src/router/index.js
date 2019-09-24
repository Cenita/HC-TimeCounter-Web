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
          component: login
        },{
          path:'/register',
          component:register
        },{
          path:'/forget',
          component:forget
        }]
      },{
        path:'/set',
        component: setter
      },{
        path:'/weekGraphy',
        component:weekGraphy
      },{
        path:'/rank',
        component:rank
      }
      ]
    }
  ]
})
