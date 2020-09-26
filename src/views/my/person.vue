<template>
  <div class="person">
    <!-- topbar -->
    <van-nav-bar title="我的资料" class="topbar" @click-left="goUser">
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
    </van-nav-bar>
    <!-- 主体内容 -->
    <div class="main-box">
      <van-cell title="头像" is-link class="userImg" url="/avatar" >
        <template>
          <img :src="baseUrl + person.avatar" alt="" />
        </template>
      </van-cell>
      <van-cell-group class="userInfo">
        <van-cell
          title="昵称"
          :value="person.nickname"
          is-link
          class="my-cell"
        />
        <van-cell
          title="性别"
          :value="person.gender == 1 ? '男' : '女'"
          is-link
          class="my-cell"
        />
        <van-cell title="地区" :value="person.area" is-link class="my-cell" />
        <van-cell
          title="个人简介"
          :value="person.intro"
          is-link
          class="my-cell"
        />
      </van-cell-group>
      <van-button type="primary" class="logout" size="large" @click="logout"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/my.js'
import { delToken } from '@/utils/local.js'
export default {
  data () {
    return {
      baseUrl: process.env.VUE_APP_URL,
      person: {
        nickname: '', // 否string昵称
        intro: '', // 否string个性签名
        gender: '', // 否number性别:0(未知) 1(男) 2(女)
        avatar: '', // 否number头像id，通过文件上传接口获取
        position: '', // 否string职位名
        area: '' // 否string城市编码
      }
    }
  },
  created () {
    // 从 vuex 中获取用户信息
    this.getData()
  },
  mounted () {},
  methods: {
    goUser () {
      this.$router.push('/my')
    },
    async getData () {
      const res = await getUserInfo()
      // console.log(res)
      this.person = res.data
    },
    // 退出登录
    logout () {
      // 清除token
      delToken('token')
      // 跳转至登录页
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
.person {
  background-color: #f7f4f5;
  height: 100%;
  .topbar {
    /deep/.van-nav-bar__title {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #222222;
      line-height: 50px;
      letter-spacing: 0px;
    }
    .van-nav-bar__left {
      padding-left: 0;
      .iconbtn_nav_back {
        font-size: 44px;
      }
    }
  }
  .main-box {
    padding: 0 15px;
    margin-top: 18px;
    .userImg {
      height: 60px;
      align-items: center;
      font-size: 15px;
      border-radius: 8px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .userInfo {
      margin-top: 10px;
      background-color: #fff;
      border-radius: 8px;
      .van-cell {
        align-items: center;
      }
      .my-cell {
        height: 55px;
        .van-cell__title {
          font-size: 15px;
          color: #333;
        }
        .van-cell__value {
          font-size: 14px;
          color: #555;
        }
      }
      .my-cell:first-child {
        border-radius: 8px 8px 0 0;
      }
      .my-cell:last-child {
        border-radius: 0 0 8px 8px;
      }
    }
    .logout {
      margin-top: 15px;
      font-size: 16px;
      color: #e40137;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 8px;
    }
  }
}
</style>
