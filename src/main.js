// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mdui/dist/css/mdui.min.css';
import 'mdui/dist/js/mdui.min.js';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false;
import store from './store'
import axios from 'axios'
import {Navbar,Tabbar, TabItem} from 'mint-ui';
Vue.prototype.$url = 'http://jb.hclab.cn';
Vue.config.devtools = true
//给所有请求头部加上token
Vue.component(Navbar.name, Navbar);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(BootstrapVue)
/* eslint-disable no-new */
export const main = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth){
    if(store.state.Authorization==''){
        next({
          path:'/login',
        })
    }else{
      next()
    }
  }else if(to.meta.noLogin){
    if(store.state.Authorization!=''){
      next({
        path:'/set',
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
