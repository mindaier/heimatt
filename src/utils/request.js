import axios from 'axios'
// import { getToken } from './local'

// 创建 _fetch 的实例对象并设置基地址
const _fetch = axios.create({
  baseURL: 'http://localhost:1337'
  // withCredentials: true
})

// 添加 请求拦截器
_fetch.interceptors.request.use(function (config) {
  // config.headers.token = 'Bearer ' + getToken('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加 响应拦截器
_fetch.interceptors.response.use(function (response) {
  // 将相应回来的数据 处理一层data
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default _fetch
