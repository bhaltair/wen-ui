<template>
  <div>
    <div class="modal-confirm" v-show="show" :class="{ 'modal-toast' : type === 'toast' } ">
      <div class="modal-confirm__content">
        <div class="content">
          <h3>
            <slot></slot>
            {{title}}
          </h3>
          <p v-if="text" :style="{ fontSize }">{{text}}</p>
        </div>
        <div class="bar">
          <div @click="unbindClick" v-if="leftBtnText">{{ leftBtnText }}</div>
          <div @click="hideClick">
            <span :style="{ color: color }">{{btnText}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setBodyScroll from '../../src/utils/setBodyScroll'
export default {
  name: 'WenModal',
  data () {
    return {
      show: false
    }
  },
  props: {
    fontSize: {
      type: String
    },
    leftBtnText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: '确认'
    },
    type: {
      type: String
    },
    color: {
      type: String
    }
  },
  methods: {
    hideClick () {
      this.show = false
      setBodyScroll()
    },
    unbindClick () {
      this.hideClick()
      this.$emit('on-unbind')
    }
  }
}
</script>
