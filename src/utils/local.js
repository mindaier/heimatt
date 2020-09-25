// 添加 `localstorage`  token
function setToken (key, value) {
  window.localStorage.setItem(key, value)
}

// 获取 `localstorage`
function getToken (key) {
  return window.localStorage.getItem(key)
}

// 删除 `localstorage`
function delToken (key) {
  return window.localStorage.removeItem(key)
}

export { setToken, getToken, delToken }
