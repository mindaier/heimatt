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
function getShare ({ start, limit, q }) {
  return _fetch({
    url: '/articles/share',
    method: 'GET',
    params: {
      start, limit, q
    },
    needToken: true
  })
}

// 面经热搜 得到热门历史数据
function getHotSearch () {
  return _fetch({
    url: '/articles/shareTopSearch'
  })
}

// 封装方法：得到面经数据
function apiGetShare ({ start, limit, q }) {
  return _fetch({
    url: '/articles/share',
    needToken: true,
    params: {
      start,
      limit,
      q
    }
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

export { getTechnic, getShare, getChart, getHotSearch, apiGetShare }
