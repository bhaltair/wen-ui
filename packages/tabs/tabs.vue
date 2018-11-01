<template>
  <div class="wen-tabs" :class="{ jsSticky }">
    <div class="wen-tabs-nav__wrap wen-hairline--bottom" ref="wrap" :style="tabsStyle" :class="{
        'page-top': position === 'page-top',
        'content-bottom': position === 'content-bottom',
        'content-top': position === 'content-top'
      }">
      <div class="wen-tabs-nav" ref="nav" >
        <div class="wen-tabs-line" :style="lineStyle" />
        <div v-for="(tab, index) in tabs" :key="index" ref="tabs" class="wen-tab"
            :class="{
              'wen-tab--active': index === curActive,
              'wen-tab--disabled': tab.disabled
            }"
            @click="onClick(index)"
        >
          <span class="wen-ellipsis" ref="title">{{ tab.title }}</span>
        </div>
      </div>
    </div>
    <div class="wen-tabs-content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
import { on, off } from '../../src/utils/event'
import scrollUtils from '../../src/utils/scroll'
import isSticky from '../../src/utils/isSticky'
export default {
  name: 'wen-tabs',
  data () {
    return {
      jsSticky: false,
      tabs: [],
      curActive: 0,
      lineStyle: {},
      tabsStyle: {},
      position: 'content-top'
    }
  },
  model: {
    prop: 'active'
  },
  watch: {
    curActive () {
      this.setLine()
    }
  },
  props: {
    duration: {
      type: Number,
      default: 0.2
    },
    active: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 0
    }
  },
  beforeDestroy () {
    if (this.sticky) {
      this.scrollHandler(false)
    }
  },
  methods: {
    onScroll () {
      // 是否支持sticky属性
      const scrollTop = scrollUtils.getScrollTop(this.scrollEl)
      const elTopToPageTop = scrollUtils.getElementTop(this.$el) // viewport 视口
      const elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight
      if (scrollTop > elBottomToPageTop) {
        this.position = 'content-bottom'
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'page-top'
      } else {
        this.position = 'content-top'
      }
    },
    scrollHandler (init) {
      this.scrollEl = this.scrollEl || scrollUtils.getScrollEventTarget(this.$el);
      (init ? on : off)(this.scrollEl, 'scroll', this.onScroll, true)
      if (init) {
        this.onScroll()
      }
    },
    setLine () {
      this.$nextTick(() => {
        if (!this.$refs.tabs) {
          return
        }
        const tab = this.$refs.tabs[this.curActive]
        const width = this.lineWidth || tab.offsetWidth
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2
        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        }
      })
    },
    onClick (index) {
      const { title } = this.tabs[index]
      this.$emit('click', index, title)
      this.setCurActive(index)
    },
    correctActive (active) {
      active = +active
      const exist = this.tabs.some(tab => tab.index === active)
      const defaultActive = (this.tabs[0] || {}).index || 0
      this.setCurActive(exist ? active : defaultActive)
    },
    setCurActive (active) {
      this.curActive = active
      this.$emit('input', active)
    }
  },
  mounted () {
    this.correctActive(this.active)
    this.setLine()
    this.$nextTick(() => {
      const isSupportSticky = isSticky()
      if (this.sticky) {
        if (!isSupportSticky) {
          this.jsSticky = true
          this.scrollHandler(true)
        } else {
          this.tabsStyle = {
            position: 'sticky',
            top: this.top + 'px'
          }
        }
      }
    })
  }
}
</script>
