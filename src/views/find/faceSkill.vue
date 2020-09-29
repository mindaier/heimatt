<template>
  <div class="faceskill">
    <!-- 顶部 -->
    <van-nav-bar title="面试技巧">
      <template #left>
        <i class="iconfont iconbtn_nav_back" @click="$router.go(-1)"></i>
      </template>
    </van-nav-bar>
    <!-- 搜索框 -->
    <div class="search-box" @click="$router.push('/fssearch')">
      <i class="iconfont iconicon_search"></i>
      请输入关键字
    </div>
    <!-- 列表区域 -->
    <div class="main-box">
      <technicIItem
        v-for="(item, index) in faceList"
        :key="index"
        :item="item"
      ></technicIItem>
    </div>
    <!-- 更多 -->
    <div class="more">没有更多了</div>
  </div>
</template>

<script>
// 引入详情列表组件
import technicIItem from './technicIItem.vue'
import { getTechnic } from '@/api/find.js'

export default {
  components: {
    technicIItem
  },
  data () {
    return {
      faceList: []
    }
  },
  created () {
    this.getFaceList()
  },
  mounted () {},
  methods: {
    async getFaceList () {
      // 获取面试技巧列表数据
      const res = await getTechnic()
      this.faceList = res.data.list
    }
  }
}
</script>

<style scoped lang="less">
.faceskill {
  font-size: 12px;
  /deep/.van-nav-bar__left {
    padding-left: 0;
    .iconbtn_nav_back {
      font-size: 50px;
    }
  }
  /deep/.van-nav-bar__title {
    font-size: 20px;
  }
  .search-box {
    width: 380px;
    height: 40px;
    background: #f7f4f5;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    color: #999;
    font-size: 14px;
    .iconfont {
      font-size: 19px;
      margin-right: 2px;
    }
  }
  .main-box {
    padding: 15px;
  }
  .more {
    text-align: center;
    font-size: 18px;
    color: #999;
    height: 40px;
    margin-top: 20px;
  }
}
</style>
