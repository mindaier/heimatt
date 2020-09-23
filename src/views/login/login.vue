<template>
  <div class="login">
    <van-nav-bar left-arrow></van-nav-bar>
    <div class="main-box">
      <h2 class="title">您好, 请登录</h2>
      <van-form @submit="onSubmit">
        <van-field v-model="user.mobile" placeholder="请输入手机号">
          <template>
            <van-icon
              class="iconfont"
              class-prefix="icon"
              name="iconxingxing2"
            />
          </template>
        </van-field>
        <van-field
          v-model="user.code"
          left-icon="smile-o"
          placeholder="请输入验证码"
          class="codeBtn"
        >
          <template #button>
            <van-button size="small">获取验证码</van-button>
          </template>
        </van-field>
        <div class="consent">登录即同意《用户使用协议》和《隐私协议》</div>
        <div style="margin: 16px;" class="btnSubmit">
          <van-button round block type="info" native-type="submit"
            >确定</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style scoped lang="less">
.login {
  .title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    color: #222222;
    line-height: 50px;
    margin-left: 15px;
    margin-bottom: 50px;
  }
  .van-button--info {
    background-color: #e40137;
    border-color: #e40137;
  }
  .van-button--default {
    border-color: #fff;
    border-left-color: #ebedf0;
  }
  .codeBtn {
    .van-button__text {
      color: #00b8d4;
      font-size: 16px;
    }
  }
  .btnSubmit {
    margin-top: 20px;
    .van-button__text {
      font-size: 18px;
    }
  }
  .consent {
    margin-top: 15px;
    text-indent: 20px;
    font-size: 15px;
  }
}
</style>
