import Loading from './loading.vue'

// 单独引用时调用
Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading)
}

export default Loading
