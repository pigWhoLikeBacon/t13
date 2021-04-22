<template>
<!--  添加':key="this.$route.path"',防止路由跳转不刷新-->
  <router-view :key="this.$route.path"/>
</template>

<script>
export default {
  name: 'App'
}
</script>
