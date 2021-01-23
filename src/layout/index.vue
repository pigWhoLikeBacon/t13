<template>
  <el-container>
    <el-header>
      <Menu :items="items"></Menu>
    </el-header>
    <el-container style="margin: 0 auto">
      <el-main style="padding: 1em 10px 10px 10px">
        <router-view />
      </el-main>
      <Aside></Aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Menu from "./menu/index";
import Aside from "./aside/index";

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
          index: 1,
          link: "/"
        },
        {
          title: "关于",
          index: 2,
          link: "/single?id=1"
        }
      ]
    };
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
