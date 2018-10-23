<template>
  <transition name="wen-fade">
    <div
      v-show="visible"
      class="wen-modal"
      :class="className"
      :style="style"
      @click="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style () {
      const obj = {}
      obj.zIndex = this.zIndex
      for (let i in this.customStyle) {
        obj[i] = this.customStyle[i]
      }
      return obj
    }
  }
}
</script>
