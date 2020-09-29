<template>
  <div class="avatar-box">
    <van-nav-bar
      title="修改头像"
      class="topbar"
      @click-left="$router.go(-1)"
    >
      <template #left>
        <i class="iconfont iconbtn_nav_back" ></i>
      </template>
      <template #right>
        <span v-if="isSave" @click="save">保存</span>
      </template>
    </van-nav-bar>
    <div class="main-box">
      <van-form ref="form">
        <van-uploader v-model="fileList" :max-count="1" preview-size="200" :after-read="afterRead"/>
      </van-form>
    </div>
  </div>
</template>

<script>
import { upload, editUserInfo } from '@/api/my.js'
export default {
  data () {
    return {
      imgId: '',
      isSave: false,
      // 修改的字段
      form: {
        nickname: '',
        intro: '',
        avatar: '',
        position: ''
      },
      // 上传文件信息
      fileList: [
        {
          url: this.$store.state.userInfo.avatar,
          status: 'done',
          message: '上传中...'
        }
      ]
    }
  },
  created () {
    console.log(this.info)
  },
  mounted () {},
  methods: {
    // 修改成功后的回调函数
    async afterRead (file) {
      // 上传时添加loading效果
      file.status = 'uploading'
      file.message = '上传中...'
      // 上传图片到服务器
      const res = await upload(file.file)
      // 保存上传成功后的图片id
      console.log(res)
      this.imgId = res.data[0].id
      // 显示保存按钮
      this.isSave = true
      // 清除加载动画效果
      file.status = 'done'
    },
    // 保存
    async save () {
      // 加载动画
      this.$toast.loading({
        duration: 0
      })

      // 修改用户信息中的头像
      await editUserInfo({
        avatar: this.imgId
      })
      // 重新获取用户信息
      this.$store.dispatch('setUserInfo')
      // 跳转到 person 页面
      this.$router.push('/person')
      this.$toast.success('修改头像成功')
    }
  }
}
</script>

<style scoped lang="less">
.avatar-box {
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
    text-align: center;
    margin-top: 15px;
    /deep/.van-image__img {
      border-radius: 10px;
    }
  }
}
</style>
