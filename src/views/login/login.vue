<template>
  <div class="login">
    <van-nav-bar class="navBar">
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
    </van-nav-bar>
    <div class="content">
      <h2 class="title">您好, 请登录</h2>
      <van-form @submit="onSubmit" ref="myForm">
        <van-field
          v-model="user.mobile"
          placeholder="请输入手机号"
          name="mobile"
          autofocus
          :rules="rules.mobile"
        >
          <template #left-icon>
            <i class="iconfont iconbianzu1"></i>
          </template>
        </van-field>
        <van-field
          v-model="user.code"
          placeholder="请输入验证码"
          class="codeBtn"
          :rules="rules.code"
        >
          <template #left-icon>
            <i class="iconfont iconyanzhengma"></i>
          </template>
          <template #button>
            <span @click="getCode">{{
              isBack ? time + 's后重新获取' : '获取验证码'
            }}</span>
          </template>
        </van-field>
        <p class="consent">
          登录即同意<strong>《用户使用协议》</strong>和<strong
            >《隐私协议》</strong
          >
        </p>
        <div style="margin: 16px;" class="btnSubmit">
          <van-button
            round
            block
            type="danger"
            native-type="submit"
            >确定</van-button
          >
        </div>
      </van-form>
    </div>

    <!-- <div>
      <i class="iconfont iconxingxing2"></i>
      <i class="iconfont iconbianzu4"></i>
      <i class="iconfont iconbianzu2"></i>
      <i class="iconfont iconbianzu3"></i>
      <i class="iconfont iconbianzu1"></i>
      <br />
      <i class="iconfont iconyanzhengma"></i>
      <i class="iconfont iconbianzu"></i>
      <i class="iconfont iconsanjiaoxing2"></i>
      <i class="iconfont iconbtn_delete_sel"></i>
      <i class="iconfont iconbtn_delete_nor"></i>
      <br />
      <i class="iconfont iconicon_zhengque"></i>
      <i class="iconfont iconicon_cuowu"></i>
      <i class="iconfont iconbtn_shuati_fankui"></i>
      <i class="iconfont iconicon_city"></i>
      <i class="iconfont iconicon_xueli"></i>
      <i class="iconfont iconicon_nian"></i>
      <br />
      <i class="iconfont iconicon_gongsi_jiaban"></i>
      <i class="iconfont iconicon_gongsi_sx"></i>
      <i class="iconfont iconicon_gongsi_time"></i>
      <i class="iconfont iconicon_gongsi_buchongyiliao"></i>
      <i class="iconfont iconicon_gongsi_gongfeilvyou"></i>
      <i class="iconfont iconicon_gongsi_daohang"></i>
      <br />
      <i class="iconfont iconicon_pingfen_nor"></i>
      <i class="iconfont iconicon_pingfen_sel"></i>
      <i class="iconfont iconicon_gongsi_qingqitijian"></i>
      <i class="iconfont iconicon_gongsi_nianzhongjiang"></i>
      <i class="iconfont iconicon_pinglunliang"></i>
      <i class="iconfont iconicon_paixu_shengxu"></i>
      <br />
      <i class="iconfont iconicon_paixu_jiangxu"></i>
      <i class="iconfont iconicon_paixu_weipai"></i>
      <i class="iconfont iconbtn_nav_back"></i>
      <i class="iconfont iconbtn_dianzan_big_nor"></i>
      <i class="iconfont iconbtn_dianzan_small_nor"></i>
      <i class="iconfont iconicon_footbar_fx_nor"></i>
      <i class="iconfont iconicon_footbar_gs_sel"></i>
      <i class="iconfont iconbtn_shoucang_nor"></i>
      <br />
      <i class="iconfont iconicon_footbar_gs_nor"></i>
      <i class="iconfont iconbtn_share"></i>
      <i class="iconfont iconicon_footbar_st_sel"></i>
      <i class="iconfont iconicon_clean"></i>
      <i class="iconfont iconbtn_dianzan_small_sel"></i>
      <i class="iconfont iconicon_footbar_st_nor"></i>
      <i class="iconfont iconbtn_share_close"></i>
      <i class="iconfont iconicon_liulanliang"></i>
      <br />
      <i class="iconfont iconicon_footbar_wode_nor"></i>
      <i class="iconfont iconicon_footbar_fx_sel"></i>
      <i class="iconfont iconicon_search"></i>
      <i class="iconfont iconicon_mine_qiyeshoucang"></i>
      <i class="iconfont iconbtn_shoucang_sel"></i>
      <i class="iconfont iconicon_xuanze_sel"></i>
      <i class="iconfont iconicon_footbar_wode_sel"></i>
      <i class="iconfont iconicon_xuanze_nor"></i>
      <br />
      <i class="iconfont iconicon_mine_gangwei"></i>
      <i class="iconfont iconicon_xiajiang"></i>
      <i class="iconfont iconicon_mine_cuoti"></i>
      <i class="iconfont iconicon_dianzanliang"></i>
      <i class="iconfont iconicon_shangsheng"></i>
      <i class="iconfont iconicon_zhankai"></i>
      <i class="iconfont iconicon_more"></i>
      <br />
      <i class="iconfont iconicon_mine_tikushoucang"></i>
      <i class="iconfont iconicon_mine_mianjing"></i>
      <i class="iconfont iconicon_mine_xiaoxi"></i>
      <i class="iconfont iconbtn_dianzan_big_sel"></i>
    </div> -->
  </div>
</template>

<script>
// 导入axios
import { apiGetCode, apiLogin } from '@/api/au.js'
import { setToken } from '@/utils/local.js'
export default {
  data () {
    return {
      baseUrl: process.env.VUE_APP_URL,
      // 是否处于倒计时
      isBack: false,
      // 倒计时时长
      time: 60,
      // 定义倒计时的定时器
      timer: null,
      user: {
        mobile: '18888881111',
        code: '',
        checked: false
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'onBlur' },
          {
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: '请输入正确的手机号',
            trigger: 'onBlur'
          }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'onBlur' }, // 非空判断
          {
            pattern: /^\d{4}$/,
            message: '请输入正确的验证码',
            trigger: 'onBlur'
          }
        ]
      }
    }
  },
  methods: {
    // 得到服务器中的验证码
    async getCode () {
      // 判断是否处于倒计时
      if (this.isBack) {
        return false
      }
      try {
        // 校验手机号是否合法
        await this.$refs.myForm.validate('mobile')
        // 开启倒计时
        this.isBack = true
        this.timer = setInterval(() => {
          this.time--
          if (this.time < 0) {
            clearInterval(this.timer)
            // 关闭倒计时状态
            this.isBack = false
            // 重置倒计时时间
            this.time = 60
          }
        }, 1000)
        // 添加加载动画
        await this.$toast.loading({
          duration: 0, // 一直显示
          message: '加载中', // 加载的文本
          forbidClick: true // 禁止点击背景
        })
        const resCode = await apiGetCode(this.user.mobile)
        // 提示验证码
        this.$toast.success(resCode.data)
      } catch (error) {
        this.$toast.fail(error.message)
      }
    },
    submit () {
      // console.log('提交')
    },
    async onSubmit () {
      // 添加加载效果
      this.$toast.loading({
        duration: 0
      })
      try {
        const resLogin = await apiLogin(this.user)
        // console.log(resLogin.data.jwt)
        // 保存token
        setToken('token', resLogin.data.jwt)
        // 将得到的用户信息中的头像 地址拼接完整
        resLogin.data.user.avatar = this.baseUrl + resLogin.data.user.avatar
        // 保存用户信息到 vuex 中
        this.$store.commit('setUserInfo', resLogin.data.user)
        // 页面跳转
        this.$router.push('/my')
        this.$toast.success('欢迎')
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {}
}
</script>

<style scoped lang="less">
.login {
  font-size: 12px;
  .navBar {
    /deep/.van-nav-bar__left {
      padding: 0;
    }
    i {
      font-size: 44px;
    }
  }
  .content {
    padding: 0 15px;
    .title {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #222;
      margin-top: 50px;
      margin-bottom: 63px;
      font-size: 18px;
    }
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
    /deep/ .van-field__left-icon {
      margin-top: 4px;
    }
  }
  .btnSubmit {
    margin-top: 40px !important;
    .van-button__text {
      font-size: 18px;
    }
  }
  .consent {
    font-size: 12px;
    margin-top: 15px;
    strong {
      color: #00b8d4;
      font-weight: normal;
    }
    /deep/ .van-checkbox__icon--checked .van-icon {
      background-color: #00b8d4;
      border-color: #00b8d4;
    }
  }
  input::-webkit-input-placeholder {
    color: #ccc;
  }
  input::-moz-input-placeholder {
    color: #ccc;
  }
  input::-ms-input-placeholder {
    color: #ccc;
  }
}
</style>
