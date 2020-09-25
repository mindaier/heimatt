<template>
  <div class="my-container">
    <!-- 头部 -->
    <div class="top-bar">
      <div class="user-box">
        <div class="info-box">
          <span>用户13455556666</span>
          <span>面试不求人，我有面试宝典</span>
        </div>
        <img src="../../assets/img/11.jpg" alt="" />
      </div>
      <div class="data-box">
        <div class="item">
          <span>298</span>
          <p>累计答题</p>
        </div>
        <div class="item">
          <span>298</span>
          <p>累计答题</p>
        </div>
        <div class="item">
          <span>298</span>
          <p>累计答题</p>
        </div>
        <div class="item">
          <span>298</span>
          <p>累计答题</p>
        </div>
      </div>
    </div>
    <div class="main-container">
      <van-cell title="我的岗位" value="产品经理" class="job-cell ">
        <template #icon>
          <i class="iconfont iconicon_mine_gangwei"></i>
        </template>
        <template #right-icon>
          <i class="iconfont iconicon_more"></i>
        </template>
      </van-cell>
      <!-- 面经数据 -->
      <div class="experience-box">
        <div class="title">面经数据</div>
        <div class="chart-items">
          <div class="item">
            <p class="top">昨日阅读<span>+300</span></p>
            <p class="num">17</p>
            <p class="buttom">阅读总数</p>
          </div>
          <div class="item">
            <p class="top">昨日阅读<span>+300</span></p>
            <p class="num">17</p>
            <p class="buttom">阅读总数</p>
          </div>
          <div class="item">
            <p class="top">昨日阅读<span>+300</span></p>
            <p class="num">17</p>
            <p class="buttom">阅读总数</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/local.js'
import { getUserInfo } from '@/api/my.js'
export default {
  data () {
    return {}
  },
  created () {
    const tokenRes = 'Bearer ' + getToken('token')
    console.log(tokenRes)
    getUserInfo(tokenRes).then(res => {
      console.log(res)
    })
  },
  mounted () {},
  methods: {}
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
        span:first-child {
          width: 85px;
          height: 29px;
          font-size: 21px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 29px;
          letter-spacing: 0px;
        }
        span:last-child {
          font-size: 12px;
          margin-top: 6px;
          display: inline-block;
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
          .bottom {
            font-size: 12px;
            color: #545671;
            margin-top: 6px;
          }
        }
      }
    }
  }
}
</style>
