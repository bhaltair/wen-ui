import Tab from './tab.vue'

// 单独引用时调用
Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}

export default Tab
