<template>
  <div class="wen-cell wen-hairline--bottom" :class="{ 'wen-cell-active': active}">
    <div class="wen-cell__left">
      {{title}}
    </div>
    <div class="wen-cell__right">
      <span v-if="value">{{value}}</span>    
      <slot></slot>
    </div>
    <!-- <i class="iconfont icon-more wen-cell__icon"></i>   -->
  </div>
</template>

<script>
export default {
  name: 'wen-cell',
  props: ['title', 'value', 'active']
}
</script>
