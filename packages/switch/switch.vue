<template>
  <div class="wen-switch" @click="onClick" :class="{
    'wen-switch--on' : value === true,
    'wen-switch--disabled': disabled
  }" :style="switchStyle">
    <div class="wen-switch__node">
    </div>
  </div>
</template>

<script>
export default {
  name: 'wen-switch',
  data() {
    return {
      switchStyle: {
        'font-size': this.size
      }
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.setColor()
      } else {
        this.resetColor()
      }
    }
  },
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '30px'
    },
    color: {
      type: String,
      default: '#44db5e'
    }
  },
  created() {
    if (this.color && this.value) {
      this.setColor()
    }
  },
  methods: {
    setColor() {
      this.switchStyle = Object.assign(this.switchStyle, {
        'background-color': this.color
      })
    },
    resetColor() {
      this.switchStyle = Object.assign(this.switchStyle, {
        'background-color': '#fff'
      })
    },
    onClick() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
}
</script>
