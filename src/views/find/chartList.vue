<template>
  <div class="shop-box">
    <van-cell title="市场数据" is-link value="查看更多" class="mycell" />
    <span class="tag">{{ city }}</span>
    <span class="tag">{{ position }}</span>
    <div class="list-container">
      <div class="item" v-for="(item, index) in chartList" :key="index">
        <span class="year">{{ item.year }}</span>
        <div class="progress">
          <div class="bar" :style="{width: (item.salary / chartData.topSalary) * 100 + '%' }">
            <span class="num">{{ item.salary }}</span>
          </div>
        </div>
        <div class="arrow-box">
          <i class="iconfont" :class="{
            iconicon_shangsheng: item.percent > 0,
            iconicon_xiajiang: item.percent < 0
          }"></i>
           <span class="percent-span">{{
            item.percent && item.percent + '%'
          }}</span>
        </div>
      </div>
    </div>
    <div class="more">
      <template>
        <span @click="toggleMore" v-html="chartList === chartData.yearSalary?'收起显示': '展开更多'"></span>
        <i class="iconfont" :class="{iconicon_zhankai: chartList === chartData.yearSalary,
        iconicon_shouqi: chartList !== chartData.yearSalary}"></i>
      </template>
    </div>
  </div>
</template>

<script>
import { getChart } from '@/api/find.js'
export default {
  data () {
    return {
      chartList: [],
      city: '',
      position: '',
      chartData: ''
    }
  },
  created () {
    this.getData()
  },
  mounted () {},
  methods: {
    async getData () {
      const res = await getChart()
      console.log(res)
      res.data.yearSalary.reverse()
      this.chartData = res.data
      // 默认显示4条数据
      this.chartList = res.data.yearSalary.slice(0, 4)
      this.city = res.data.city
      this.position = res.data.position
    },
    // 切换展开/ 收起
    toggleMore () {
      // 展开的时候
      if (this.chartList === this.chartData.yearSalary) {
        this.chartList = this.chartData.yearSalary.slice(0, 4)
      } else {
        this.chartList = this.chartData.yearSalary
      }
    }
  }
}
</script>

<style scoped lang="less">
.mycell {
  height: 70px;
  align-items: center;
  padding: 0;
  /deep/.van-cell__title {
    font-size: 18px;
  }
  .van-cell__value {
    font-size: 14px;
  }
  .van-cell__right-icon {
    font-size: 16px;
    color: #333;
  }
}
.van-cell::after {
  border-bottom: none;
}
.shop-box {
  background: #fff;
  padding: 0 15px 19px 15px;
  margin-bottom: 10px;
  .tag {
    display: inline-block;
    padding: 5px 6px;
    background-color: #eceaea;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 14px;
    margin-top: 5px;
  }
  .list-container {
    margin-top: 22px;
    .item {
      margin-bottom: 13px;
      display: flex;
      font-size: 14px;
      align-items: center;
      .year {
        display: inline-block;
      }
      .progress {
        width: 218px;
        height: 14px;
        background-color: #ebdfdf;
        border-radius: 4px;
        margin: 0 14px 0 11px;
        .bar {
          width: 48%;
          height: 100%;
          border-radius: 4px;
          background-color: #fe6d67;
          text-align: right;
          color: #666;
          box-sizing: border-box;
          padding-right: 6px;
          font-size: 12px;
          color: #fff;
        }
      }
      .arrow-box {
        .iconfont {
          color: #fe6d67 !important;
          margin-right: 8px;
        }
        .iconfont.iconicon_shangsheng {
          color: #60d183 !important;
        }
      }
    }
  }
  .more {
    margin-top: 25px;
    text-align: center;
    font-size: 14px;
    .iconfont {
      font-size: 12px;
      color: #666;
      margin-left: 6px;
    }
  }
}
</style>
