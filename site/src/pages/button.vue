<template lang="html">
  <div class="">
    <p>不同尺寸Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。 额外的尺寸：medium、small，通过设置size属性来配置它们。</p>
    <div class="demo-block">
      <wen-button type="primary" size="normal">normal按钮</wen-button>
      <wen-button type="primary" size="large">large按钮</wen-button>
      <wen-button type="primary" size="small">small按钮</wen-button>
    </div>
  </div>
</template>

<script>
import WenUI from '../../packages/index'
export default {
  components: {
    [WenUI.Button.name]: WenUI.Button
  }
}
</script>

<style lang="css">

</style>
