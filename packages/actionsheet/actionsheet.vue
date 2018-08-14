<template>
  <transition name="van-slide-bottom">
    <div v-show="value">hello</div>
  </transition>
</template>

<script>
export default {
  name: 'wen-actionsheet',
  props: {
    value: Boolean,
    actions: {
      type: Array,
      default: []
    }
  }
}
</script>
