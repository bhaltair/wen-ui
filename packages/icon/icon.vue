<template>
  <div class="wen-icon">
    <i class="iconfont " :class="[iconClass]" ></i>
  </div>
</template>

<script>
export default {
  name: 'wen-icon',
  props: ['name'],
  computed: {
    iconClass() {
      return 'icon-' + this.name
    }
  }
}
</script>
