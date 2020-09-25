// 我的 页面接口
// 导入request.js
import _fetch from '@/utils/request.js'

// 用户信息
function getUserInfo (params) {
  return _fetch({
    url: '/au/info',
    params
  })
}

export { getUserInfo }
