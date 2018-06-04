import Cell from './cell.vue'

// 单独引用时调用
Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell
