<template>
  <el-drawer v-model="drawer" direction="ltr" :with-header="false">
    <el-menu :default-active="1">
      <el-menu-item>
        <el-input v-model="input" placeholder="请输入内容" @keyup.enter="search"></el-input>
      </el-menu-item>
      <el-menu-item
          v-for="item in items"
          :index="item.index"
          :key="item.index"
      >
        {{item.title}}
      </el-menu-item>
    </el-menu>
  </el-drawer>
  <el-menu :default-active="1" class="el-menu-pc" mode="horizontal">
    <el-menu-item
        v-for="item in items"
        :index="item.index"
        :key="item.index"
    >
      {{item.title}}
    </el-menu-item>
    <el-menu-item style="float: right">
      <el-input v-model="input" placeholder="请输入内容" @keyup.enter="search"></el-input>
    </el-menu-item>
  </el-menu>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-m"
    mode="horizontal"
    active-text-color="none"
  >
    <el-menu-item @click="drawer = true" type="primary">
      <i class="el-icon-s-unfold"></i>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Menu",
  setup() {
    return {
      input: ref("")
    };
  },
  data() {
    return {
      drawer: false
    };
  },
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    search() {
      this.$router.push(({path:"/search/" + this.input}))
    }
  },
});
</script>

<style scoped>
.el-menu-pc {
  display: block;
}

.el-menu-m {
  display: none;
}

@media (max-width: 767px) {
  .el-menu-m {
    display: block;
  }

  .el-menu-pc {
    display: none;
  }
}
</style>
