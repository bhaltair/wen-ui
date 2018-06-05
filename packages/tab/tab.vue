<template>
  <div v-show="isSelected">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'wen-tab',
  props: ['title'],
  data() {
    return {
      parent: null
    }
  },
  created() {
    this.findParent('wen-tabs');
    this.parent.tabs.push(this);
  },
  destroyed() {
    // console.log('destroyed')
    // this.parent.tabs.splice(this.index, 1);
  },
  computed: {
    index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected() {
      return this.index === this.parent.curActive;
    }
  },
  methods: {
    findParent(name) {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }
        parent = parent.$parent;
      }
    }
  }
}
</script>
