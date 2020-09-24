import axios from 'axios'

// 创建 _fetch 的实例对象并设置基地址
const _fetch = axios.create({
  baseURL: 'http://localhost:1337'
})

// Add a request interceptor
_fetch.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
_fetch.interceptors.response.use(function (response) {
  // 将相应回来的数据 处理一层data
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default _fetch
