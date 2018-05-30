<template>
  <div id="app">
    <router-view class="page">
    </router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'app',
  data () {
    return {
      init: false,
      isIndex: true
    }
  },
  watch: {
  },
  mounted () {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true
    }, 250)
  },
  components: {
  }
}
</script>

<style lang="scss">
* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  &:focus {
    outline: 0;
  }
  &::before,
  &::after {
    box-sizing: border-box;
  }
}
:-webkit-autofill {
  box-shadow: 0 0 0 100px #fff inset;
  -webkit-text-fill-color: #574751;
  color: #574751;
}

#app {
  padding: 20px;
}
.demo-block {
  padding: 20px;
}
</style>
