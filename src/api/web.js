import request from '../utils/request';
import qs from 'qs'

export const timeList = (query) => {
    return request({
        url: '/api/web/getTime',
        method: 'GET',
        params: query
    })
};

export const Login = (query) => {
    return request({
        url: '/api/web/login',
        method: 'POST',
        data: query
    })
};

export const getServerStatus = (query) => {
    return request({
        url: '/api/web/server',
        method: 'GET',
        data: query
    })
};
export const getUser = (query) => {
    return request({
        url: '/api/web/user',
        method: 'GET',
        data: query
    })
};

export const getMac = (query) => {
    return request({
        url: '/api/web/mac',
        method: 'GET',
        data: query
    })
};
export const getMap = (query) => {
    return request({
        url: '/api/web/getMap',
        method: 'GET',
        data: query
    })
};
export const getGrade = (query) => {
    return request({
        url: '/api/web/getGrade',
        method: 'GET',
        data: query
    })
};

export const sendRegiter = (query) => {
    return request({
        url: '/api/web/register',
        method: 'PUT',
        data: query
    })
};
export const getCode = (query) => {
    return request({
        url: '/api/web/getCode',
        method: 'GET',
        data: query
    })
};
export const setMac = (query) => {
  return request({
      url:'/api/web/mac',
      method:'POST',
      data:query
  })
}
export const setAvatar = (query) => {
  return request({
    url:'/api/web/setAvatar',
    method:'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data:query
  })
}
