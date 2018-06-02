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
* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}
:-webkit-autofill {
  box-shadow: 0 0 0 100px #fff inset;
  -webkit-text-fill-color: #574751;
  color: #574751;
}

#app {
}
.demo-block {
  margin-bottom: 10px;
}

.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc('100% - 215px');
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
