import Navbar from './navbar.vue'

// 单独引用时调用
Navbar.install = function (Vue) {
  Vue.component(Navbar.name, Navbar)
}

export default Navbar
