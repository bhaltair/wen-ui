<template>
  <div class="wen-button " :class="{
    'wen-button--default': type === 'default',
    'wen-button--primary': type === 'primary',
    'wen-button--normal': size === 'normal',
    'wen-button--large': size === 'large',
    'wen-button--small': size === 'small'
    }" @click="onClick">
    <slot>Fallback Content</slot>
  </div>
</template>

<script>
export default {
  name: 'wen-button',
  props: {
    type: String,
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
  .wen-button {
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    font-size: 15pt;
    height: 45px;
    line-height: 45px;
    text-align: center;
    -webkit-appearance: none;
    user-select: none;
  }

  /* .wen-button:active::before {
    opacity: .3;
  }
  */

  .wen-button:active {
    opacity: .8;
  }

  .wen-button--default {
    color: #333;
    background-color: #fff;
    border: 1px solid #eee;
  }
  .wen-button--primary {
    background-color: #4b0;
    color: #fff;
  }
  .wen-button--normal {
    padding: 0 15px;
    font-size: 14px;
  }
  .wen-button--large {
    width: 100%;
    height: 50px;
    line-height: 48px;
  }

  .wen-button--small {
    height: 30px;
    padding: 0 8px;
    min-width: 60px;
    font-size: 12px;
    line-height: 28px;
  }

</style>
