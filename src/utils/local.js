// 添加 `localstorage`  token
function setToken (token) {
  window.localStorage.setItem('token', token)
}

// 获取 `localstorage`
function getToken () {
  return window.localStorage.getItem('token')
}

// 删除 `localstorage`
function delToken () {
  return window.localStorage.clear()
}

export { setToken, getToken, delToken }
