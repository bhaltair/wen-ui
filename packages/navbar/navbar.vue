<template lang="html">
  <div class="wen-navbar wen-hairline--bottom">
    <div class="wen-navbar__left" @click="$emit('onLeftClick')">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="wen-navbar__center">
      {{ title }}
    </div>
    <div class="wen-navbar__right" @click="$emit('onRightClick')">
      <span class="wen-navbar__text">{{ right }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wen-navbar',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    right: {
      type: String,
      default: '按钮'
    }
  }
}
</script>
