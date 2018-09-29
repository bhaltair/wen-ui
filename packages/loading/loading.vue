<template>
  <div class="wen-loading " :style="style"
    :class="{
      'wen-loading--black': color === 'black',
      'wen-loading--white': color === 'white',
    }"
  >
    <span class="wen-loading__spinner wen-loading__spinner--circular">
      <i v-for="item in (type === 'spinner' ? 12 : 0)" />
      <svg v-if="type === 'circular'" class="wen-loading__circular" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'wen-loading',
  props: {
    size: String,
    color: {
      type: String,
      default: 'black'
    },
    type: {
      type: String,
      default: 'circular'
    }
  },
  computed: {
    style () {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {}
    }
  }
}
</script>
