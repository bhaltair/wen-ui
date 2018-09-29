<template>
    <transition name="wen-slide-bottom">
      <div class="wen-actionsheet" v-show="value">
        <ul>
          <li class="wen-hairline--bottom" v-for="(item, index) in actions" :key="index" @click="onClick(index)">{{item.name}}</li>
        </ul>
      </div>
    </transition>
</template>

<script>
import Popup from '../../src/mixins/popup'

export default {
  name: 'wen-actionsheet',
  mixins: [Popup],
  props: {
    value: Boolean,
    actions: {
      type: Array
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick (index) {
      this.$emit('input', false)
      this.$emit('select', {
        which: index,
        name: this.actions[index].name
      })
    }
  }
}
</script>
