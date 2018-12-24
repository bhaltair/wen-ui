<template>
  <div class="wen-button " :class="{
    'wen-button--default': type === 'default',
    'wen-button--primary': type === 'primary',
    'wen-button--warn': type === 'warn',
    'wen-button--middle': size === 'middle',
    'wen-button--large': size === 'large',
    'wen-button--small': size === 'small',
    'wen-button--disabled': disabled === true
    }" @click="onClick">
    <slot>Fallback Content</slot>
  </div>
</template>

<script>
export default {
  name: 'wen-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'middle'
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
