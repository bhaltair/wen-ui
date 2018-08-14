<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
    <mainFooter v-if="!isIndex"></mainFooter>
  </div>
</template>

<script type="text/javascript">
import mainHeader from './components/header.vue'
import sideNav from './components/side-nav.vue'
import mainFooter from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {
      init: false,
      isIndex: true
    }
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  },
  mounted () {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true
    }, 250)

    // this.$spinner.show({
    //   text: '加载中...'
    // })
  },
  components: {
    sideNav,
    mainFooter,
    mainHeader
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/index";
</style>
