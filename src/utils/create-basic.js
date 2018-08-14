import bem from '../mixins/bem'

const install = function (Vue) {
  Vue.component(this.name, this)
}

export default function(sfc)