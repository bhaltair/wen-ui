import Button from './button.vue'

// 单独引用时调用
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
