import Button from './button/index'
import Spinner from './spinner/index'
import Navbar from './navbar/index'
import Toast from './toast/index'
import Cell from './cell/index'
import Tab from './tab/index'
import Tabs from './tabs/index'
import List from './list/index'
import Loading from './loading/index'
import Switch from './switch/index'
import SwitchCell from './switch-cell/index'
import Icon from './icon/index'
import Upload from './upload/index'
import Actionsheet from './actionsheet/index'
import Modal from './modal/index'
const components = [
  Button,
  Navbar,
  Cell,
  Tabs,
  Tab,
  List,
  Loading,
  Switch,
  SwitchCell,
  Icon,
  Upload,
  Actionsheet
]

const install = function (Vue, options) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$spinner = Spinner
  Vue.prototype.$toast = Toast
  Vue.prototype.$modal = Modal
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Navbar,
  Button,
  Cell,
  Tabs,
  Tab,
  List,
  Loading,
  Switch,
  SwitchCell,
  Icon,
  Upload,
  Actionsheet
}
