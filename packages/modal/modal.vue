<template>
  <div>
    <div class="wen-modal-confirm" v-show="show" :class="{ 'wen-modal-toast' : type === 'toast' } ">
      <div class="wen-modal-confirm__content" :class="{ 'wen-modal-confirm__content-lines' : isArray(text) } ">
        <div class="content" >
          <h3>
            <slot></slot>
            {{title}}
          </h3>
          <template v-if="isArray(text)" >
            <p :style="{ fontSize }" v-for="(item, index) in text" :key="index">{{item}}</p>
          </template>
          <template v-else>
            <p v-if="text" :style="{ fontSize }">{{text}}</p>
          </template>
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
import { isArray } from '../../src/utils'
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
      type: [String, Array],
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
    isArray,
    hideClick () {
      this.show = false
      setBodyScroll()
      this.$emit('on-hide')
    },
    unbindClick () {
      this.hideClick()
      this.$emit('on-unbind')
    }
  }
}
</script>
