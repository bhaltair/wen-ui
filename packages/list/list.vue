<template>
  <div class="wen-list">
    <slot />
    <div class="wen-list-loading" >
      <span class="wen-list-loading-text">加载中...</span>
    </div>
  </div>
</template>

<script>
import utils from '../../src/utils/scroll';
import { on, off } from '../../src/utils/event';
export default {
  name: 'wen-list',
  data() {
    return {}
  },
  model: {
    prop: 'loading'
  },
  watch: {
    loading() {
      this.$nextTick(this.onScroll);
    },
    finished() {
      this.$nextTick(this.onScroll);
    }
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    offset: {
      type: Number,
      default: 300
    },
  },
  mounted() {
    this.scroller = utils.getScrollEventTarget(this.$el);
    this.handler(true)
    this.$nextTick(this.onScroll);
  },
  activated() {
    this.handler(true);
  },
  deactivated() {
    this.handler(false);
  },
  destroyed() {
    this.handler(false);
  },
  methods: {
    onScroll() {
      // 计算高度
      if (this.loading || this.finished) {
        return;
      }
      const el = this.$el;
      const { scroller } = this; 
      const scrollerHeight = utils.getVisibleHeight(scroller);
      if (!scrollerHeight || utils.getComputedStyle(el).display === 'none') {
        return;
      }
      const scrollTop = utils.getScrollTop(scroller);
      const targetBottom = scrollTop + scrollerHeight;
      let reachBottom = false;
      if (el === scroller) {
        reachBottom = scroller.scrollerHeight - targetBottom < this.offset
      } else {
        // get distance from element top to page top
        const elBottom = utils.getElementTop(el) - utils.getElementTop(scroller) + utils.getVisibleHeight(el);
        reachBottom = elBottom - targetBottom < this.offset
      }
      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler(bind) {
      (bind ? on : off)(this.scroller, 'scroll', this.onScroll);
    }
  }
}
</script>
