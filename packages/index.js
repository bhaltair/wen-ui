import Button from './button/index'
import Spinner from './spinner/index'
import Navbar from './navbar/index'
import Toast from './toast/index'
import Cell from './cell/index'
const components = [
  Button,
  Navbar,
  Cell
]

const install = function (Vue, options) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$spinner = Spinner
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Navbar,
  Button,
  Cell
}
