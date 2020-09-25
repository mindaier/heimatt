// 我的 页面接口
// 导入request.js
import _fetch from '@/utils/request.js'
import { getToken } from '@/utils/local.js'

// 用户信息 根据 token 得到用户信息
function getUserInfo () {
  return _fetch({
    url: '/au/info',
    headers: { authorization: 'Bearer ' + getToken('token') }
  })
}

export { getUserInfo }
