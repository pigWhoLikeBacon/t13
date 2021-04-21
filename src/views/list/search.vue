<template>
  <List
    :blurry="$route.params.id"
    :titles="titles"
    :word="$route.params.id"
  ></List>
</template>

<script>
import List from "@/views/list/index";
export default {
  name: "search",
  components: { List },
  data() {
    return {
      titles: ["搜索"]
    };
  }
};
</script>

<style scoped></style>
