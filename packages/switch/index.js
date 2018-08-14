import Switch from './switch.vue'

// 单独引用时调用
Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch)
}

export default Switch
