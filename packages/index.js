import Button from './button/index'

const components = [
  Button
]

const install = function (Vue, options) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  // Vue.prototype.$loading = Loading;
  // Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Button }

export default {
  install
}
