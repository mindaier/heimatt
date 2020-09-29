// 导入 _fetch
import _fetch from '@/utils/request.js'
// 封装 find 页获取数据 api
// 面试技巧
function getTechnic (params) {
  return _fetch({
    url: '/articles/technic',
    method: 'GET',
    params,
    needToken: true
  })
}
// 面经分享
function getShare (params) {
  return _fetch({
    url: '/articles/share',
    method: 'GET',
    params,
    needToken: true
  })
}

// 市场统计 热门职位数据
function getChart (params) {
  return _fetch({
    url: '/chart-data/hot',
    method: 'GET',
    params
  })
}

export { getTechnic, getShare, getChart }
