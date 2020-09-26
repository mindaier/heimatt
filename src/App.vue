<template>
    <div class="app">
      <router-view />
    </div>
</template>

<script>
import '@/assets/js/rem.js'
export default {
  data () {
    return {
      name: 'App'
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less">
html, body,#app {
  height: 100%;
}
.app {
  height: 100%;
}
</style>
