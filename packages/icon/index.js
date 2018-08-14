import Icon from './icon.vue'

// 单独引用时调用
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

export default Icon
