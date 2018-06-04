// import Toast from './toast.vue';
import ToastComponent from './toast'
import Vue from 'vue'
import mergeOptions from '../../src/utils/merge'

class Toast {
  constructor () {
    this.name = 'json'
    const Toast = Vue.extend(ToastComponent)
    this.vm = new Toast({
      el: document.createElement('div')
    })
    document.body.appendChild(this.vm.$el)
  }
  show (options) {
    if (typeof options === 'string') {
      this.vm.text = options
    } else if (typeof options === 'object') {
      mergeOptions(this.vm, options)
    }
    this.vm.show = true
  }
  hide () {
    this.vm.show = false
  }
}

export default new Toast()
