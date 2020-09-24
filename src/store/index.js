import Vue from 'vue'
import Vuex from 'vuex'

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
  // actions: {
  //   setUserInfo (context) {
  //     context.commit('setUserInfo')
  //   }
  // },
  modules: {
  }
})
