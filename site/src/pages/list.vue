<template>
  <div class="demo-block">
    <section>
      <h1 >无限滚动</h1>
      <hr />
    </section>
    <div class="mobile-page">
      <wen-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :offset="offset"
      >
        <wen-cell v-for="item in list" :key="item" :title="item + ''" />
      </wen-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      loading: false,
      finished: false,
      offset: 200
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 200);
    }
  }
}
</script>

<style>

</style>
