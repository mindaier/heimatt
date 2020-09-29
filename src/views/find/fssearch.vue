<template>
  <div class="fssearch">
    <div class="top-box">
      <!-- 顶部 -->
      <van-nav-bar title="面试技巧搜索">
        <template #left>
          <i class="iconfont iconbtn_nav_back" @click="$router.go(-1)"></i>
        </template>
      </van-nav-bar>
      <!-- 搜索框 -->
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" />
    </div>
    <!-- 热门搜索 -->
    <div class="option-box">
      <div class="hot">
        <div class="title">大家都在搜索</div>
        <ul>
          <li>面试</li>
          <li>掌握</li>
          <li>前端</li>
          <li>新媒体</li>
        </ul>
      </div>
      <div class="history">
        <div class="title">
          <span class="text">历史记录</span>
          <span class="clear">清空</span>
        </div>
      </div>
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
.fssearch {
  font-size: 12px;
  .top-box {
    padding-bottom: 10px;
    box-shadow: 0 2px 4px 0 rgba(24, 26, 57, 0.04);
    /deep/.van-nav-bar__left {
      padding-left: 0;
      .iconbtn_nav_back {
        font-size: 50px;
      }
    }
    /deep/.van-nav-bar__title {
      font-size: 20px;
    }
    /deep/.van-search__content.van-search__content--square {
      border-radius: 20px;
      width: 400px;
      height: 40px;
      background: #f7f4f5;
      align-items: center;
      margin-top: 5px;
      .van-icon.van-icon-search {
        font-size: 22px;
        color: #ccc;
        margin-left: 6px;
      }
    }
    /deep/.van-search__action {
      font-size: 16px;
    }
    .van-hairline--bottom::after {
      border-bottom: none;
    }
  }
  .option-box {
    margin-top: 20px;
    padding: 0 15px;
    .title {
      font-size: 20px;
    }
    .hot {
    }
  }
}
</style>
