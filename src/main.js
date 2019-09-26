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
import { Tabbar, TabItem } from 'mint-ui';
Vue.prototype.$axios = axios
Vue.config.devtools = true
axios.defaults.baseURL='http://192.168.99.137:1500'
//给所有请求头部加上token
axios.interceptors.request.use(
  config => {
    //在所有请求头部添加token值
    const token = store.state.Authorization;
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
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
