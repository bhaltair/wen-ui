<template>
  <div class="wen-cell wen-hairline--bottom">
    <div class="wen-cell__left">
      {{title}}
    </div>
    <div class="wen-cell__right">
      <span>{{value}}</span>    
    </div>
    <i class="iconfont icon-more wen-cell__icon"></i>  
  </div>
</template>

<script>
export default {
  name: 'wen-cell',
  props: ['title', 'value']
}
</script>
