<template>
  <div class="wen-spinner" v-show="show">
    <div class="wen-spinner__container">
      <div class="wen-lds-spinner" style="100%;height:100%"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div class="wen-spinner__text">{{text}}</div>
    </div>
    <div class="wen-spinner__overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'wen-spinner',
  data () {
    return {
      show: false
    }
  },
  props: {
    text: {
      required: false,
      type: String,
      default: '绑定成功'
    },
    time: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    toastClass () {
      if (this.mode === 'success') {
        return {
          'toast-success': true,
          'toast': true
        }
      } else {
        return {
          'toast-success': false,
          'toast': true
        }
      }
    }
  },
  created () {
    this.show = false
  },
  watch: {
    show (val) {
      this.$emit('on-show')
    }
  }
}
</script>
