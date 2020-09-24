// 封装所有与登录相关的所有请求
// 导入request.js
import _fetch from '@/utils/request.js'

// 封装方法 获取验证码
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

export { apiGetCode }
