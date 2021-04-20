<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import request from "@/utils/request";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    const params = {
      page: 0,
      size: 9999,
      enabled: true,
      sort: "id,asc"
    };
    console.log(
      request({
        url: "api/tag/show",
        method: "get",
        params
      })
    );
    return {};
  }
};
</script>
