<template lang="html">
  <div class="">
    <wen-button type="primary" size="normal" @click.native="toggleSow">toast show</wen-button>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    toggleSow() {
      // console.log(this.$spinner)
      this.$toast.show('我是提示文案，建议不超过十五字');
      setTimeout(() => {
        this.$toast.hide();
      }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
