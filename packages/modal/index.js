import ModalComponent from './modal'
import Vue from 'vue'
import mergeOptions from '../../src/utils/merge'
import setBodyScroll from '../../src/utils/setBodyScroll'
let $vm

const Modal = Vue.extend(ModalComponent)

if (!$vm) {
  $vm = new Modal({
    el: document.createElement('div'),
    methods: {
      foo () {
        alert(1)
      }
    }
  })
  document.body.appendChild($vm.$el)
}

const defaults = {}
for (let i in $vm.$options.props) {
  if (i !== 'value') {
    defaults[i] = $vm.$options.props[i].default
  }
}

const modal = {
  show (options = {}) {
    if (typeof options === 'string') {
      $vm.text = options
    } else if (typeof options === 'object') {
      mergeOptions($vm, options)
    }

    setBodyScroll(true)

    $vm.$off('on-unbind')

    $vm.$slots.default = [ options.renderImage() ]

    $vm.$on('on-unbind', () => {
      options && options.onUnbind && options.onUnbind()
      setBodyScroll()
    })

    $vm.show = true
  },
  hide () {
    $vm.show = false
  }
}

export default modal
