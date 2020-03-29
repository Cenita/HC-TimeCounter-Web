import axios from 'axios';
import vue from 'vue'
import {main} from '../main';
import store from "../store";
import {Toast} from 'mint-ui'
const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: main.$url,
    timeout: 15000
});

service.interceptors.request.use( config => {
  const token = main.$store.state.Authorization;
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, error => {
    console.log(error);
    return Promise.reject();
});

service.interceptors.response.use(response => {
    if(response.status===200)
    {
      if(response.data.code === 200){
        return response.data;
      }else if(response.data.code === 401){
        main.$store.state.Authorization = "";
        main.$router.push('/login');
      }else{
        Promise.reject();
      }
    }else{
      Toast({
        message:"服务器请求错误"
      })
    }
}, error => {
    console.log(error);
    return Promise.reject();
})
export default service;
