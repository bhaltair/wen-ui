import Actionsheet from './actionsheet.vue'

// 单独引用时调用
Actionsheet.install = function (Vue) {
  Vue.component(Actionsheet.name, Actionsheet)
}

export default Actionsheet
