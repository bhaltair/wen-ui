<template>
  <div class="toast" v-show="show">
    <div class="toast__container">
      <div class="toast__text">{{text}}</div>
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
    }
  }
}
</script>
