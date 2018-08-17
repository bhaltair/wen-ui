<template lang="html">
  <div class="">
    <wen-button type="primary" size="normal" @click.native="toggleSow">spinner show</wen-button>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    toggleSow() {
      // console.log(this.$spinner)
      this.$spinner.show('loading...');
      setTimeout(() => {
        this.$spinner.hide();
      }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
