<template>
  <div class="question">
    <van-dropdown-menu>
      <van-dropdown-item>
        <template #title>
          <span>面试宝典</span>
          {{ selectedCity }}
          </template>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      selectedCity: '全国',
      option1: [
        { text: '全国', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
