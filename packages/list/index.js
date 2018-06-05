import List from './list.vue'

// 单独引用时调用
List.install = function (Vue) {
  Vue.component(List.name, List)
}

export default List
