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

// 修改用户信息
function editUserInfo ({ data }) {
  return _fetch({
    url: '/au/edit',
    method: 'POST',
    data,
    headers: { authorization: 'Bearer ' + getToken('token') }
  })
}

// 文件上传接口
function upload (data) {
  return _fetch({
    url: '/upload',
    method: 'POST',
    data,
    headers: { authorization: 'Bearer ' + getToken('token') }
  })
}

export { getUserInfo, editUserInfo, upload }
