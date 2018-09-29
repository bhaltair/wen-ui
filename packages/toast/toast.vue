<template>
  <div class="wen-toast" v-show="show">
    <div class="wen-toast__container">
      <div class="wen-toast__text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wen-toast',
  data () {
    return {
      show: false
    }
  },
  props: {
    text: {
      required: false,
      type: String,
      default: ''
    }
  },
  created () {
    this.show = false
  },
  watch: {
    show (val) {
      this.$emit('on-show')
      if (!val) return
      this.timeout && clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }
}
</script>
