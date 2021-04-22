<template>
  <div class="home">
    <div style="width: 100%; height: 200px"></div>
    <div>
      <img style="width: 200px; max-width: 30%" src="../assets/logo.png" />
      <h1>Welcome to My Blog</h1>
    </div>
    <div class="home-nav">
      <router-link to="/list">文章</router-link> |
      <router-link to="/single/1">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">

.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home-nav {
  padding: 30px;

  a {
    color: #81a6ed;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
