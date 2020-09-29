<template>
  <div class="item">
    <div class="item-l">
      <div class="title">
        {{ item.title }}
      </div>
      <p>
        <span class="time">{{ item.updated_at | timeFormat }}</span>
        <span class="read"
          ><i class="iconfont iconicon_liulanliang"></i>{{ item.read }}</span
        >
        <span class="star"
          ><i class="iconfont iconbtn_dianzan_small_nor"></i
          >{{ item.star }}</span
        >
      </p>
    </div>
    <div class="item-r">
      <img :src="baseUrl + item.cover" alt="" />
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
        min-height: 67px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #181a39;
        padding-bottom: 30px;
        .item-l {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title {
            height: 52px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          p {
            font-size: 12px;
            color: #b4b4bd;
            margin: 0;
            .read {
              margin: 0 21px 0 51px;
            }
            i {
              margin-right: 7px;
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
        .item-r {
          width: 113px;
          height: 75px;
          margin-left: 15px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
</style>
