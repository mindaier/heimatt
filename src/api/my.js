// 我的 页面接口
// 导入request.js
import _fetch from '@/utils/request.js'
// import { getToken } from '@/utils/local.js'

// 用户信息 根据 token 得到用户信息
function getUserInfo () {
  return _fetch({
    url: '/au/info',
    needToken: true // 添加一个标识属性 axios自定义属性
    // headers: { authorization: 'Bearer ' + getToken('token') }
  })
}

// 修改用户信息
function editUserInfo ({ nickname, intro, gender, avatar, position, area }) {
  return _fetch({
    url: '/au/edit',
    method: 'POST',
    data: {
      nickname,
      intro,
      gender,
      avatar,
      position,
      area
    },
    needToken: true
    // headers: { authorization: 'Bearer ' + getToken('token') }
  })
}

// 文件上传接口
function upload (file) {
  // 创建 formData
  const fd = new FormData()
  // 添加参数
  fd.append('files', file)
  return _fetch({
    url: '/upload',
    method: 'POST',
    needToken: true,
    data: fd
    // headers: { authorization: 'Bearer ' + getToken('token') }
  })
}

export { getUserInfo, editUserInfo, upload }
