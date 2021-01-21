<template>
  <el-container>
    <el-header>
      <Menu :items="items"></Menu>
    </el-header>
    <el-container>
      <el-aside width="25%"></el-aside>
      <el-main style="background: #81a6ed; width: 300px">
        <p>hhd</p>
        <router-view />
      </el-main>
      <Aside></Aside>
      <el-aside width="25%"></el-aside>
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
          title: 'hhd1',
          index: 1,
          link: '/'
        },
        {
          title: 'hhd2',
          index: 2,
          link: '/'
        },
        {
          title: 'hhd3',
          index: 3,
          link: '/'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
</style>
