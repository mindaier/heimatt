import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from './local'

// 创建 _fetch 的实例对象并设置基地址
const _fetch = axios.create({
  baseURL: process.env.VUE_APP_URL
  // withCredentials: true
})

// 添加 请求拦截器
_fetch.interceptors.request.use(function (config) {
  const token = getToken('token')
  // 判断是否需要 needToken
  if (config.needToken) {
    // 携带 token 到请求头中
    config.headers.authorization = 'Bearer ' + token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加 响应拦截器
_fetch.interceptors.response.use(function (response) {
  // 将相应回来的数据 处理一层data
  // console.log('响应内容:', response)
  // 得到状态码:
  const code = response.data.code
  if (code === 200) {
    return response.data // 成功 将响应的内容交给.then处理
  } else if (code === 400 || code === 401 || code === 403) {
    // 说明请求失败
    // 返回错误信息
    // 提示用户
    // console.log('响应错误信息:', response.data.message)
    Toast.fail(response.data.message)
    // new Error 创建一个新的错误
    // new Error(response.data.message)： 创建一个新的错误，错误的信息是 服务器返回的 message
    return Promise.reject(new Error(response.data.message))
  }
}, function (error) {
  return Promise.reject(error)
})

export default _fetch
