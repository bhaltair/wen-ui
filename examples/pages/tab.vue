<template lang="html">
  <div class="demo-block">
    <div class="mobile-page">
      <wen-tabs v-model="active" @click="onClick">
        <wen-tab title="内容1">
          <p>
            我是内容1
          </p>
        </wen-tab>
        <wen-tab title="内容2">
          <p>
            我是内容2
          </p>
        </wen-tab>
        <wen-tab title="内容3">
          <p>
            我是内容3
          </p>
        </wen-tab>
      </wen-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  created() {
  },
  methods: {
    onClick(index, title) {
      // console.log(index, title)
    }
  }
}
</script>
