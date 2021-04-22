<template>
  <List
    :tagId="$route.params.id"
    :titles="titles"
    :word="word"
  ></List>
</template>

<script>
import List from "@/views/list/index";
import { getTagById } from "@/api/tag";
export default {
  name: "tag",
  components: { List },
  data() {
    return {
      titles: ["标签"],
      word: "tag"
    };
  },
  mounted() {
    var tagId = this.$route.params.id;
    getTagById(tagId)
      .then(res => {
        this.word = res.content[0].content;
      })
      .catch(() => {});
  }
};
</script>

<style scoped></style>
