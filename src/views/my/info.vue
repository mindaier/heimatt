<template>
  <div class="nickname">
    <van-nav-bar
      :title="title"
      class="topbar"
      @click-left="$router.go(-1)"
      @click-right="save"
    >
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
      <template #right>
        <span v-if="isSave">保存</span>
      </template>
    </van-nav-bar>
    <div class="main-box">
      <van-field v-model="value" @input="isSave = true" class="username" :rules="[{ required: true, message: '请填写昵称', trigger: 'onBlur' }]"/>
    </div>
  </div>
</template>

<script>
import { editUserInfo } from '@/api/my.js'
export default {
  data () {
    return {
      isSave: false,
      // 头部标题
      title: '',
      // 输入框的值
      value: '',
      prop: this.$route.query.property
    }
  },

  created () {
    if (this.prop === 'nickname') {
      this.title = '修改昵称'
    } else if (this.prop === 'intro') {
      this.title = '修改简介'
    }
    // 修改输入框的值
    this.value = this.$store.state.userInfo[this.prop]
  },
  mounted () {},
  methods: {
    // 昵称修改
    async save () {
      // 加载中动画
      this.$toast.loading({
        duration: 0
      })
      // 提交数据到服务器 修改昵称/个人简介
      await editUserInfo({ [this.prop]: this.value })
      // 更新 vuex中的值
      this.$store.dispatch('setUserInfo')
      // 跳转至个人资料页面
      this.$router.push('/person')
      this.$toast.success('修改成功')
    }
  }
}
</script>

<style scoped lang="less">
.nickname {
  font-size: 12px;
  .topbar {
    /deep/.van-nav-bar__title {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 400;
      text-align: left;
      color: #222222;
      line-height: 50px;
      letter-spacing: 0px;
    }
    /deep/.van-nav-bar__left {
      padding-left: 0;
      .iconbtn_nav_back {
        font-size: 44px;
      }
    }
    /deep/.van-nav-bar__text {
      color: #333;
    }
  }
  .main-box {
    /deep/.username {
      background-color: #f7f4f5;
      margin: 15px auto;
      width: 92%;
      border-radius: 5px;
    }
  }
}
</style>
