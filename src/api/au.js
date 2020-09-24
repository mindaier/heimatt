// 封装所有与登录相关的所有请求
// 导入request.js
import _fetch from '@/utils/request.js'

// 获取验证码 api
// 这里的data 方便了解传入的参数的类型
function apiGetCode (mobile) {
  return _fetch({
    url: '/au/code',
    method: 'POST',
    data: {
      mobile: mobile
    }
  })
}

// 登录 api
function apiLogin (data) {
  return _fetch({
    url: '/au/login',
    method: 'POST',
    data
  })
}

export { apiGetCode, apiLogin }
