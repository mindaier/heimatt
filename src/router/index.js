import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'
import Login from '../views/login/login.vue'
import Company from '../views/company'
import Question from '../views/question'
import Find from '../views/find'
import My from '../views/my'

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
        component: My
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
