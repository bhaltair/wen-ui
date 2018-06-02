import Button from './button/index'
import Spinner from './spinner/index'
import Navbar from './navbar/index'
const components = [
  Button,
  Navbar
]

const install = function (Vue, options) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$spinner = Spinner
  // Vue.prototype.$loading = Loading;
  // Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Navbar,
  Button
}
