<template>
  <el-container>
    <el-header>
      <Menu :items="items"></Menu>
    </el-header>
    <el-container style="margin: 0 auto">
      <el-main style="padding: 1em 10px 10px 10px;min-width: 448px">
        <router-view/>
      </el-main>
      <Aside :tags="tags" :file="file"></Aside>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "./menu/index";
import Aside from "./aside/index";
import { getAllTag } from "@/api/tag";
import { getFile } from "@/api/article";

export default {
  name: "Layout",
  components: {
    Menu,
    Aside
  },
  data() {
    return {
      items: [
        {
          title: "首页",
          link: "/"
        },
        {
          title: "文章",
          link: "/list"
        },
        {
          title: "关于",
          link: "/single/1"
        }
      ],
      tags: [],
      file: {}
    };
  },
  mounted() {
    getAllTag()
      .then(res => {
        this.tags = res.content;
      })
      .catch(() => {});
    getFile()
      .then(res => {
        this.file = res;
      })
      .catch(() => {});
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

header {
  padding: 0 !important;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
}

main {
  max-width: 1000px;
}

.el-container {
  max-width: 100%;
}
</style>
