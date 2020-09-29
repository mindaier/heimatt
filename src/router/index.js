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
import info from '@/views/my/info.vue'
import avatar from '@/views/my/avatar.vue'
import faceskill from '@/views/find/faceSkill.vue'
import fssearch from '@/views/find/fssearch.vue'
import share from '@/views/find/share.vue'
import sharesearch from '@/views/find/sharesearch.vue'

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
        component: Question,
        meta: {
          needLogin: true
        }
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
    component: person,
    meta: {
      needLogin: true
    }
  },
  {
    path: '/info',
    name: 'info',
    component: info,
    meta: {
      needLogin: true
    }
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: avatar,
    meta: {
      needLogin: true
    }
  },
  {
    path: '/faceskill',
    name: 'faceskill',
    component: faceskill
  },
  {
    path: '/fssearch',
    name: 'fssearch',
    component: fssearch
  },
  {
    path: '/share',
    name: 'share',
    component: share
  },
  {
    path: '/share/search',
    name: 'sharesearch',
    component: sharesearch
  }
]

const router = new VueRouter({
  routes
})

// 路由 前置导航守卫
router.beforeEach(async (to, from, next) => {
  // 获取 跳转路由元信息
  const needLogin = to.meta.needLogin
  // 如果不需要权限(登录) 直接往下执行
  if (!needLogin) {
    next()
  } else {
    // 判断token是否存在
    const token = getToken('token')
    if (token) {
      // 判断vuex中 userInfo 是否有数据
      // 有 next()
      // 没有 根据 token 发送请求到服务器获取用户数据 保存信息到 vuex
      const userInfo = store.state.userInfo
      if (userInfo) {
        next()
      } else {
        const resUser = await getUserInfo()
        // console.log(resUser.data)
        const baseUrl = process.env.VUE_APP_URL
        // 修改用户头头像地址
        resUser.data.avatar = baseUrl + resUser.data.avatar
        store.commit('setUserInfo', resUser.data)
        next()
      }
    } else {
      Toast.fail('你还未登录')
      // 跳转登录页
      router.push('/login?_redirect=' + to.fullPath)
    }
  }
})

// 解决 vue-router 不允许两次跳转到同一页面
const originalPush = VueRouter.prototype.push // 将 router 中的 push 方法保存起来
VueRouter.prototype.push = function push (location) {
  // 重新给 router 中的 push 方法赋值
  return originalPush.call(this, location).catch(err => err) // catch 捕获错误
}

export default router
