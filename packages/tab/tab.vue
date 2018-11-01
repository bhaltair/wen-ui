<template>
  <div v-show="isSelected">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'wen-tab',
  props: ['title'],
  data () {
    return {
      parent: null
    }
  },
  created () {
    this.findParent('wen-tabs')
    this.parent.tabs.push(this)
  },
  computed: {
    index () {
      return this.parent.tabs.indexOf(this)
    },
    isSelected () {
      return this.index === this.parent.curActive
    }
  },
  methods: {
    findParent (name) {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent
          break
        }
        parent = parent.$parent
      }
    }
  }
}
</script>
