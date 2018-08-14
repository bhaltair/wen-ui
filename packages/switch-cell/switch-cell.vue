<template>
  <div class="wen-cell wen-cell-switch wen-hairline--bottom">
    <div class="wen-cell__left">
      {{title}}
    </div>
    <wen-switch v-model="status" :color="color"></wen-switch>
  </div>
</template>
<script>
export default {
  name: 'wen-switch-cell',
  props: ['title', 'color'],
  data() {
    return {
      status: false
    }
  },
  watch: {
    status(newVal) {
      this.$emit('input', this.status);
      this.$emit('change', this.status);
    }
  }
}
</script>
