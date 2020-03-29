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
const developer = () => import('@/components/setter/Developer')
const setIndex = () => import('@/components/setter/Index')
const setAvatar = () => import('@/components/setter/setAvatar')
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
        component: setter,
        children:[{
          path:'/set',
          component: setIndex
        },{
          path:'/set/developer',
          meta:{
            requireAuth:true
          },
          component: developer,
        },{
          path:'/set/avatar',
          meta:{
            requireAuth:true
          },
          component: setAvatar,
        }]
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

