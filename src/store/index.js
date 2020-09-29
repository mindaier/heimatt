import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo } from '@/api/my.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: '' // 存储用户信息
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async setUserInfo (context) {
      // 发送请求获取数据
      const res = await getUserInfo()
      // 拼接头像
      res.data.avatar = process.env.VUE_APP_URL + res.data.avatar
      // 修改数据
      context.commit('setUserInfo', res.data)
    }
  },
  modules: {
  }
})
