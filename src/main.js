import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
// 导入 页面适配 - normalize.css
import 'normalize.css'
// 导入字体图标
import './style/index.css'

// 使用 vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
