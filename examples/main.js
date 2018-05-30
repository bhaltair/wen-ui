// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import WENUI from '../packages/index'
// Vue.use(WENUI)

// 当作插件引入
import Button from '../packages/button'
Vue.use(Button)

// import '../packages/theme-default/lib/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
