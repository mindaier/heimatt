<template>
  <div>
    <div class="my-container">
      <!-- 头部 -->
      <div class="top-bar">
        <div class="user-box">
          <div class="info-box">
            <span>用户13455556666</span>
            <span></span>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.top-bar {
    height: 216px;
    background: linear-gradient(45deg, #ce0031, #b8002c);
    .user-box {
      .info-box {
        display: flex;
        align-items: space-between;
        &span {
          width: 85px;
          height: 29px;
          font-size: 21px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 29px;
          letter-spacing: 0px;
        }
      }
    }
  }
</style>
