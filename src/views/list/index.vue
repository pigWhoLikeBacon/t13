<template>
  <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
    <li v-for="i in count" v-bind:key="i" class="list-item">
      <el-card shadow="hover" :body-style="{ padding: '10px 10px 5px 10px' }">
        <el-container>
          <el-aside width="160px">
            <el-image
              style="width: 160px; height: 160px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              :fit="'cover'"
            />
          </el-aside>
          <el-main style="padding: 0 0 0 10px">
            <span
              >卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽卧了个槽</span
            >
          </el-main>
        </el-container>
      </el-card>
    </li>
  </ul>
  <p v-if="loading">加载中...</p>
  <p v-if="noMore">没有更多了</p>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.list {
  padding: 0;
  list-style: none;
}

.list-item {
  display: flex;
  margin: 10px 0;
  color: #7dbcfc;
}
</style>
