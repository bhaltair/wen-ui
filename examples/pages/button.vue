<template lang="html">
  <div class="">
    <wen-button type="default" size="normal">默认按钮</wen-button>
    <wen-button type="primary" size="normal">主要按钮</wen-button>
  </div>
</template>

<script>
// import { Button } from '../../packages/index'
import { Button } from '../../packages/index'
export default {
  components: {
    [Button.name]: Button
  }
}
</script>

<style lang="css">
</style>
