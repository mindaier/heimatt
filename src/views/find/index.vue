<template>
  <div class="find-container">
    <van-nav-bar title="发现" />
    <!-- 面试技巧 -->
    <div class="interview-box">
      <van-cell title="面试技巧" is-link value="查看更多" class="mycell" @click="$router.push('/faceskill')"/>
      <!-- 列表区域 -->
      <div class="item-box">
        <technicIItem v-for="(item,index) in faceList" :key="index" :item="item"></technicIItem>
      </div>
    </div>
    <!-- 市场数据 -->
    <chartList></chartList>
    <!-- 面经分享 -->
    <div class="experience-box">
      <van-cell title="面经分享" is-link value="查看更多" class="mycell" @click="$router.push('/share')"/>
      <div class="experience-list">
        <shareItem v-for="(item, index) in shareList" :key="index" :item="item"></shareItem>
      </div>
    </div>
  </div>
</template>

<script>
import { getTechnic, getShare } from '@/api/find.js'
// 导入面试技巧 列表组件
import technicIItem from './technicIItem'
// 导入面经分享 列表组件
import shareItem from './shareItem'
// 市场数据
import chartList from './chartList'
export default {
  name: 'find',
  components: {
    technicIItem,
    shareItem,
    chartList
  },
  data () {
    return {
      limit: 3,
      faceList: [],
      shareList: []
    }
  },
  created () {
    this.getFaceList()
  },
  mounted () {},
  methods: {
    async getFaceList () {
      // 获取面试技巧列表数据
      const res = await getTechnic({
        limit: this.limit
      })
      // console.log(res.data.list)
      this.faceList = res.data.list
      // 获取面经分享 列表数据
      const resShare = await getShare({ limit: this.limit })
      // console.log(resShare)
      this.shareList = resShare.data.list
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
.find-container {
  background-color: #f7f4f5;
  font-size: 12px;
  padding-bottom: 40px;
  /deep/.van-nav-bar__title {
    font-size: 18px;
  }
  .interview-box {
    background: #fff;
    padding: 0 15px;
    margin-bottom: 10px;
  }
  .experience-box {
    background: #fff;
    padding: 0 15px;
    margin-bottom: 10px;
  }
}
</style>
