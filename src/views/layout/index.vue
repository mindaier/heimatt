<template>
  <div class="layout">
    <router-view></router-view>

    <!-- 底部导航条 -->
    <van-tabbar v-model="active" route class="tabbar">
      <van-tabbar-item name="home" icon="home-o" to="/company">
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_nor"></i>
        </template>
        公司</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search" to="/question">
        <template #icon>
          <i class="iconfont iconicon_footbar_st_nor"></i>
        </template>
        刷题</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="friends-o" to="/find">
        <template #icon>
          <i class="iconfont iconicon_footbar_fx_nor"></i>
        </template>
        发现</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="setting-o" to="/my">
        <template #icon>
          <i class="iconfont iconicon_footbar_wode_nor"></i>
        </template>
        我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.layout {
  .van-tabbar-item__icon i {
    font-size: 28px;
  }
  .van-tabbar-item {
    color: rgb(180, 180, 189);
  }
  .van-tabbar-item.van-tabbar-item--active {
    color: rgb(228, 1, 55);
  }
}
</style>
