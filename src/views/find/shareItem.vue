<template>
  <div class="item">
    <h3 class="title">{{item.title}}</h3>
    <p class="content">
      {{item.content}}
    </p>
    <div class="info">
      <div class="info-l">
        <img
          class="avatar"
          :src="baseUrl+ item.author.avatar"
          alt=""
        />
        <span class="name">{{item.author.nickname}}</span>
      </div>
      <div class="info-r">
        <span class="time">{{item.updated_at | timeFormat}}</span>
        <i class="iconfont iconicon_pinglunliang"></i>
        <span>{{item.share}}</span>
        <i class="iconfont iconbtn_dianzan_small_nor"></i>
        <span>{{item.star}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      baseUrl: process.env.VUE_APP_URL
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.item {
  padding: 8px 0 25px;
  border-bottom: 1px solid #eee;
  .title {
    font-size: 16px;
    color: #333;
    font-weight: normal;
    margin: 0;
  }
  .content {
    font-size: 13px;
    color: #545671;
    max-height: 42px;
    line-height: 1.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info-l {
      display: flex;
      align-items: center;
      .avatar {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 10px;
        .name {
          color: #545671;
        }
      }
    }
    .info-r {
      display: flex;
      align-items: center;
      color: #b4b4bd;
      .iconfont {
        margin: 0 4px 0 22px;
      }
    }
  }
}
.item:first-child {
  padding-top: 0;
}
</style>
