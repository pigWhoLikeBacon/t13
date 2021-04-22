<template>
  <List
    :titles="titles"
    :word="$route.params.id"
    :file="file"
  ></List>
</template>

<script>
import List from "@/views/list/index";
export default {
  name: "file",
  components: { List },
  data() {
    return {
      titles: ["归档"]
    };
  },
  computed: {
    file() {
      var str = this.$route.params.id;
      var arr = str.split('-');
      var year = arr[0];
      var month = parseInt(arr[1]);
      return [
        year + "-" + month + "-1 00:00:00",
        year + "-" + (month + 1) + "-1 00:00:00"
      ]
    }
  }
};
</script>

<style scoped></style>
