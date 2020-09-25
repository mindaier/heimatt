<template>
  <div class="my-container">
    <!-- 头部 -->
    <div class="top-bar">
      <div class="user-box">
        <div class="info-box">
          <p>{{ userInfo.nickname }}</p>
          <span>{{ userInfo.intro }}</span>
        </div>
        <img :src="userInfo.avatar" alt="" @click="person"/>
      </div>
      <div class="data-box">
        <div class="item">
          <span>{{ userInfo.submitNum }}</span>
          <p>累计答题</p>
        </div>
        <div class="item">
          <span>{{ userInfo.collectQuestions.length }}</span>
          <p>收藏题目</p>
        </div>
        <div class="item">
          <span>{{ userInfo.errorNum }}</span>
          <p>我的错题</p>
        </div>
        <div class="item">
          <span>{{
            (
              ((userInfo.submitNum - userInfo.errorNum) / userInfo.submitNum) *
              100
            ).toFixed(0) + '%'
          }}</span>
          <p>正确率</p>
        </div>
      </div>
    </div>
    <div class="main-container">
      <van-cell title="我的岗位" :value="userInfo.position" class="job-cell" is-link>
        <template #icon>
          <i class="iconfont iconicon_mine_gangwei"></i>
        </template>
      </van-cell>
      <!-- 面经数据 -->
      <div class="experience-box">
        <div class="title">面经数据</div>
        <div class="chart-items">
          <div class="item">
            <p class="top">昨日阅读<span>{{userInfo.shareData.read.yesterday}}</span></p>
            <p class="num">{{userInfo.shareData.read.total}}</p>
            <p class="buttom">阅读总数</p>
          </div>
          <div class="item">
            <p class="top">昨日获赞<span>{{userInfo.shareData.read.yesterday}}</span></p>
            <p class="num">{{userInfo.shareData.star.total}}</p>
            <p class="buttom">获赞总数</p>
          </div>
          <div class="item">
            <p class="top">昨日新增<span>{{userInfo.shareData.read.yesterday}}</span></p>
            <p class="num">{{userInfo.shareData.comment.total}}</p>
            <p class="buttom">评论总数</p>
          </div>
        </div>
      </div>
      <!-- 其他选项 -->
      <div class="other">
        <div class="van-cell-group van-hairline--top-bottom myitem">
          <div class=" my-cell van-cell van-cell--borderless">
            <i class="iconfont iconicon_mine_mianjing"></i>
            <div class="van-cell__title"><span>我的面经分享</span></div>
            <div class="van-cell__value"><span>21</span></div>
            <i class="iconfont iconicon_more"></i>
          </div>
          <div class=" my-cell van-cell van-cell--borderless">
            <i class="iconfont iconicon_mine_xiaoxi"></i>
            <div class="van-cell__title"><span>我的消息</span></div>
            <div class="van-cell__value"><span>98</span></div>
            <i class="iconfont iconicon_more"></i>
          </div>
          <div class=" my-cell van-cell van-cell--borderless">
            <i class="iconfont iconicon_mine_tikushoucang"></i>
            <div class="van-cell__title"><span>收藏的题库</span></div>
            <div class="van-cell__value"><span>29</span></div>
            <i class="iconfont iconicon_more"></i>
          </div>
          <div class=" my-cell van-cell van-cell--borderless">
            <i class="iconfont iconicon_mine_qiyeshoucang"></i>
            <div class="van-cell__title"><span>收藏的企业</span></div>
            <div class="van-cell__value"><span>32</span></div>
            <i class="iconfont iconicon_more"></i>
          </div>
          <div class=" my-cell van-cell van-cell--borderless">
            <i class="iconfont iconicon_mine_cuoti"></i>
            <div class="van-cell__title"><span>我的错题</span></div>
            <div class="van-cell__value"><span>123</span></div>
            <i class="iconfont iconicon_more"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created () {
  },
  mounted () {},
  methods: {
    person () {
      this.$router.push('/person')
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  font-size: 16px;
  .top-bar {
    height: 216px;
    background: linear-gradient(45deg, #ce0031, #b8002c);
    .user-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 31px;
      align-items: center;
      padding-left: 15px;
      padding-right: 37px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 6px solid rgba(255, 255, 255, 0.38);
      }
      .info-box {
        color: #fff;
        p {
          font-size: 22px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          letter-spacing: 0px;
          margin: 0 0 10px 0;
        }
        span {
          font-size: 12px;
        }
      }
    }
    .data-box {
      margin-top: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        text-align: center;
        font-size: 21px;
        color: #fff;
        p {
          font-size: 12px;
        }
      }
    }
  }
  .main-container {
    margin-bottom: 40px;
    background-color: #f7f4f5;
    position: relative;
    padding: 26px 15px;
    .job-cell {
      position: absolute;
      top: -39px;
      width: 345px;
      border-radius: 8px;
      height: 54px;
      align-items: center;
    }
    .van-cell {
      .iconicon_mine_gangwei {
        margin-right: 12px;
        font-size: 22px;
        color: #181a39;
      }
      .van-cell__title {
        color: #181a39;
      }
      .iconfont:last-child {
        font-size: 10px;
        margin-left: 9px;
        color: #5b5d75;
      }
    }
    .experience-box {
      background-color: #fff;
      margin-top: 10px;
      border-radius: 8px;
      .title {
        font-size: 14px;
        font-weight: 600;
        padding-left: 15px;
        padding-top: 15px;
        margin-bottom: 10px;
      }
      .chart-items {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .item {
          text-align: center;
          .top {
            font-size: 10px;
            color: #b4b4bd;
          }
          .num {
            font-size: 21px;
            font-weight: 700;
            margin-top: 9px;
          }
          .buttom {
            font-size: 12px;
            color: #545671;
            margin-top: 6px;
          }
        }
      }
    }
    .other {
      margin-top: 20px;
    }
  }
}
</style>
