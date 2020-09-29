<template>
  <div class="faceskill">
    <!-- 顶部 -->
    <van-nav-bar title="面试技巧">
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
    </van-nav-bar>
    <!-- 搜索框 -->
    <div class="search-box">
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" input-align="center" background="#f7f4f5" class="search"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.faceskill {
  font-size: 12px;
  .van-nav-bar__left,
  .van-nav-bar__right {
    padding-left: 0;
    .iconbtn_nav_back {
      font-size: 50px;
    }
  }
  /deep/.van-nav-bar__title {
    font-size: 20px;
  }
  .search-box {
    .van-search__content.van-search__content--square {
      // border-radius: 20px;
    }
  }

}
</style>
