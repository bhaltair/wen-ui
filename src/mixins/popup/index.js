import Modal from './Modal.vue'
import Vue from 'vue'
export default {
  props: {
    overlay: Boolean,
    zIndex: [String, Number]
  },
  watch: {
    value (val) {
      this[val ? 'open' : 'close']()
    },
    overlay () {
      this.renderPopup()
    }
  },
  mounted () {
    if (this.value) {
      this.open()
    }
  },
  activated () {
    if (this.value) {
      this.open()
    }
  },
  beforeDestroy () {
    this.close()
  },
  methods: {
    renderOverlay () {
      if (this.overlay) {
        if (!this.vm) {
          this.vm = new (Vue.extend(Modal))({
            el: document.createElement('div')
          })
          document.body.appendChild(this.vm.$el)
          this.vm.$on('click', e => {
            this.vm.visible = false
            this.$emit('input', false)
          })
        }
        this.vm.visible = true
      } else {
      }
    },
    open () {
      if (this.opened) {
        return false
      }
      this.opened = true
      this.renderOverlay()
    },
    close () {
      if (!this.opened) {
        return false
      }
      this.opened = false
      this.vm.visible = false
    }
  }
}
