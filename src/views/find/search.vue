<template>
  <div class="sharesearch">
    <div class="top-box">
      <!-- 顶部 -->
      <van-nav-bar title="面经搜索">
        <template #left>
          <i class="iconfont iconbtn_nav_back" @click="$router.go(-1)"></i>
        </template>
      </van-nav-bar>
      <!-- 搜索框 -->
      <div class="search-box" @click="$router.push('/share/search')">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="getResult"
          @cancel="onCancel"
        />
      </div>
    </div>
    <div class="main-box" v-if="isResult === false">
      <div class="hot">
        <div class="title">
          <span>大家都在搜</span>
        </div>
        <div class="tags">
          <span
            class="tag"
            @click="getResult(item)"
            v-for="(item, index) in hotList"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="history">
        <div class="title">
          <span>历史记录</span>
          <span @click="clear">清空</span>
        </div>
        <div class="tags">
          <span
            class="tag"
            @click="getResult(item)"
            v-for="(item, index) in historyList"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
    <div v-else class="shareItem">
      <shareItem
        v-for="(item, index) in searchResult"
        :key="index"
        :item="item"
      ></shareItem>
    </div>
  </div>
</template>

<script>
import { getHotSearch, apiGetShare } from '@/api/find.js'
import shareItem from './shareItem.vue'
import { setToken, getToken, delToken } from '@/utils/local.js'

export default {
  components: {
    shareItem
  },
  data () {
    return {
      value: '',
      hotList: [],
      searchResult: [],
      isResult: false,
      historyList: JSON.parse(getToken('history')) || [] // 搜索的历史数据
    }
  },
  created () {
    this.getHot()
  },
  mounted () {},
  methods: {
    // 取消搜索
    onCancel () {
      this.value = ''
      this.isResult = false
    },
    // 删除历史数据
    clear () {
      this.$dialog
        .confirm({
          title: '警告',
          message: '是否清空历史'
        })
        .then(() => {
          // 清除数组
          this.historyList = []
          // 从 localstorage 中清空
          delToken('history')
        })
        .catch(() => {
          // on cancel
        })
    },

    // 热门搜索
    async getHot () {
      const resHot = await getHotSearch()
      this.hotList = resHot.data
    },
    // 点击热门搜索
    // 根据关键字搜索相应文件
    async getResult (key) {
      // 将搜搜的关键字存储到 historyList 中
      this.historyList.unshift(key)
      // 使用 set 对象去重
      this.historyList = [...new Set(this.historyList)]
      // 判断数组的长度是否大于 5
      if (this.historyList.length > 5) {
        // 截取前5个数据
        this.historyList = this.historyList.splice(0, 5)
      }
      // 将搜索的列表存入到 localStorage 中
      setToken('history', JSON.stringify(this.historyList))
      // 将搜索结果显示出来
      this.isResult = true
      this.value = key
      const res = await apiGetShare({ q: key })
      // console.log(res)
      // 将匹配的关键字 标红
      res.data.list.forEach(item => {
        item.title = item.title.replace(
          key,
          `<span style="color: red">${key}</span>`
        )
      })
      // console.log(res.data.list)
      this.searchResult = res.data.list
    }
  }
}
</script>

<style scoped lang="less">
.sharesearch {
  font-size: 12px;
  .top-box {
    padding-bottom: 10px;
    box-shadow: 0 2px 5px 0 rgba(24, 26, 57, 0.04);
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
      .van-search__content.van-search__content--square {
        border-radius: 20px;
        background: #f7f4f5;
        height: 40px;
        align-items: center;
        /deep/i.van-icon.van-icon-search {
          color: #999;
          font-size: 20px;
        }
      }
      /deep/.van-search__action {
        font-size: 16px;
        color: #666;
      }
    }
  }
  .main-box {
    padding: 20px;
    .hot {
      margin-bottom: 30px;
    }
    .title {
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 15px;
      span:nth-child(2) {
        font-size: 14px;
      }
    }
    .tags {
      display: flex;
      .tag {
        display: inline-block;
        padding: 8px;
        color: #545671;
        background-color: #eceaea;
        margin-right: 10px;
        border-radius: 4px;
        font-size: 12px;
      }
    }
  }
  .shareItem {
    padding: 20px;
  }
}
</style>
