import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'
import Login from '../views/login/login.vue'
import Company from '../views/company'
import Question from '../views/question'
import Find from '../views/find'
import My from '../views/my'
import person from '@/views/my/person.vue'
import { getToken } from '@/utils/local.js'
import { Toast } from 'vant'
import store from '@/store/index.js'
import { getUserInfo } from '@/api/my.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/company',
        name: 'Company',
        component: Company
      },
      {
        path: '/question',
        name: 'Question',
        component: Question
      },
      {
        path: '/find',
        name: 'Find',
        component: Find
      },
      {
        path: '/my',
        name: 'My',
        component: My,
        meta: {
          needLogin: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/person',
    name: 'person',
    component: person
  }
]

const router = new VueRouter({
  routes
})

// 路由 前置导航守卫
router.beforeEach(async (to, from, next) => {
  // 获取 跳转路由元信息
  const needLogin = to.meta.needLogin
  // 如果不需要权限 直接往下执行
  if (!needLogin) {
    next()
  } else {
    // 判断token是否存在
    const token = getToken('token')
    if (token) {
      // 判断 userInfo 中是否有数据
      // 有 next()
      // 没有 根据 token 发送请求到服务器获取用户数据 保存信息到 vuex
      const userInfo = store.state.userInfo
      if (userInfo) {
        next()
      } else {
        const resUser = await getUserInfo()
        console.log(resUser.data)
        const baseUrl = process.env.VUE_APP_URL
        // 修改用户头头像地址
        resUser.data.avatar = baseUrl + resUser.data.avatar
        store.commit('setUserInfo', resUser.data)
        next()
      }
    } else {
      Toast.fail('你还未登录')
      // 跳转登录页
      router.push('/login')
    }
  }
  next()
})

export default router
