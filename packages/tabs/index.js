import Tabs from './tabs.vue'

// 单独引用时调用
Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
}

export default Tabs
