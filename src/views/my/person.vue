<template>
  <div class="person">
    <!-- topbar -->
    <van-nav-bar title="我的资料" class="topbar" @click-left="goUser">
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
    </van-nav-bar>
    <!-- 主体内容 -->
    <div class="main-box">
      <van-cell title="头像" is-link class="userImg" url="/avatar" to="/avatar?property=avatar">
        <template>
          <img :src="userInfo.avatar" alt="" />
        </template>
      </van-cell>
      <van-cell-group class="userInfo">
        <van-cell
          title="昵称"
          :value="userInfo.nickname"
          is-link
          class="my-cell"
          to="/info?property=nickname"
        />
        <van-cell
          title="性别"
          is-link
          class="my-cell"
          @click="genderShow = true"
        >
          <template>
            <span v-if="userInfo.gender === 0">未知</span>
            <span v-if="userInfo.gender === 1">男孩子</span>
            <span v-if="userInfo.gender === 2">女孩子</span>
          </template>
        </van-cell>
        <van-cell title="地区" :value="areaList.city_list[userInfo.area]" is-link class="my-cell" @click="areaShow=true"/>
        <van-cell
          title="个人简介"
          :value="userInfo.intro"
          is-link
          class="my-cell"
          to="/info?property=intro"
        />
      </van-cell-group>
      <van-button type="primary" class="logout" size="large" @click="logout"
        >退出登录</van-button
      >
    </div>
    <!-- 性别修改面板 -->
    <van-popup v-model="genderShow" position="bottom" :style="{ height: '40%' }" :close-on-click-overlay="false"
    >
      <van-picker show-toolbar :columns="columns" @confirm="saveGender" title="性别" :default-index="userInfo.gender"  @cancel="genderShow = false"></van-picker>
    </van-popup>
    <!-- 地区修改面板 -->
     <van-popup v-model="areaShow" position="bottom" :style="{ height: '40%' }" :close-on-click-overlay="false">
      <van-area title="地区" :area-list="areaList" :columns-num="2" @confirm="saveArea" @cancel="areaShow = false"/>
    </van-popup>
  </div>
</template>

<script>
import { editUserInfo } from '@/api/my.js'
import { delToken } from '@/utils/local.js'
import { mapState } from 'vuex'
import areaList from '@/utils/area.js'
export default {
  data () {
    return {
      genderShow: false,
      areaShow: false,
      nickShow: false,
      columns: ['未知', '男孩子', '女孩子'],
      baseUrl: process.env.VUE_APP_URL,
      areaList: areaList
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created () {
  },
  mounted () {},
  methods: {
    goUser () {
      this.$router.push('/my')
    },
    // 保存性别 (选中的文本 下标)
    async saveGender (value, index) {
      this.$toast.loading({
        duration: 0
      })
      this.genderShow = false
      // 将修改后的数据提交服务器
      await editUserInfo({ gender: index })
      this.$store.dispatch('setUserInfo')
      // 关闭 弹窗
      this.$toast.success('性别修改成功')
    },
    // 保存地区
    async saveArea (value, index) {
      this.$toast.loading({
        duration: 0
      })
      this.areaShow = false
      await editUserInfo({ area: value[1].code })
      this.$store.dispatch('setUserInfo')
      // 关闭 弹窗
      this.$toast.success('地区修改成功')
    },
    // 昵称修改
    // 退出登录
    logout () {
      this.$dialog.confirm({
        title: '提示',
        message: '您确定要退出吗?'
      })
        .then(() => {
          // on confirm
          // 清除token
          delToken('token')
          // 清除 vuex 中的 userInfo 数据
          this.$store.commit('setUserInfo', '')
          // 跳转至登录页
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style scoped lang="less">
.person {
  background-color: #f7f4f5;
  height: 100%;
  .topbar {
    /deep/.van-nav-bar__title {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #222222;
      line-height: 50px;
      letter-spacing: 0px;
    }
    .van-nav-bar__left {
      padding-left: 0;
      .iconbtn_nav_back {
        font-size: 44px;
      }
    }
  }
  .main-box {
    padding: 0 15px;
    margin-top: 18px;
    .userImg {
      height: 60px;
      align-items: center;
      font-size: 15px;
      border-radius: 8px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .userInfo {
      margin-top: 10px;
      background-color: #fff;
      border-radius: 8px;
      .van-cell {
        align-items: center;
      }
      .my-cell {
        height: 55px;
        .van-cell__title {
          font-size: 15px;
          color: #333;
        }
        .van-cell__value {
          font-size: 14px;
          color: #555;
        }
      }
      .my-cell:first-child {
        border-radius: 8px 8px 0 0;
      }
      .my-cell:last-child {
        border-radius: 0 0 8px 8px;
      }
    }
    .logout {
      margin-top: 15px;
      font-size: 16px;
      color: #e40137;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 8px;
    }
  }
}
</style>
