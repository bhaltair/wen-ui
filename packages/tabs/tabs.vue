<template>
  <div>
    <div class="wen-tabs-nav wen-hairline--bottom">
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
    <div class="wen-tabs-content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'wen-tabs',
  data() {
    return {
      tabs: [],
      curActive: 0,
      lineStyle: {}
    }
  },
  model: {
    prop: 'active'
  },
  watch: {
    curActive() {
      this.setLine();
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
    }
  },
  methods: {
    setLine() {
      this.$nextTick(() => {
        if (!this.$refs.tabs) {
          return;
        }
        const tab = this.$refs.tabs[this.curActive];
        const width = this.lineWidth || tab.offsetWidth;
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;
        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        };
      })
    },
    onClick(index) {
      const { title, disabled } = this.tabs[index];
      this.$emit('click', index, title)
      this.setCurActive(index);
    },
    correctActive(active) {
      active = +active;
      const exist = this.tabs.some(tab => tab.index === active);
      const defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive(active) {
      this.curActive = active;
      this.$emit('input', active);
    }
  },
  mounted() {
    this.correctActive(this.active);
    this.setLine();
  }
}
</script>