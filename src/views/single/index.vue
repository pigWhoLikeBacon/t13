<template>
  <el-card :body-style="{ padding: '0px' }" style="width: 100%">
    <el-image
      style="width: 100%; height: 200px"
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      fit="cover"
    ></el-image>
    <div style="padding: 14px;">
      <span>{{ article.title }}</span><br /><br />
      <i class="el-icon-date"></i>
      <span>{{ getData(article.createTime) }}</span>
      <i class="el-icon-view"></i>
      <span>{{ article.view }}</span><br /><br />
      <Tags :tags="article.tags"></Tags>
      {{article.content}}
    </div>
  </el-card>
  <Comment></Comment>
</template>

<script>
import Comment from "@/views/single/module/Comment";
import { getArticle } from "@/api/article";
export default {
  components: {
    Comment
  },
  data() {
    return {
      article: {}
    };
  },
  mounted() {
    getArticle(this.$route.params.id)
      .then(res => {
        this.article = res.content[0];
      })
      .catch(() => {});
  },
  methods: {
    getData(format) {
      var data = new Date(parseInt(format));
      return data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getUTCDate();
    }
  }
};
</script>

<style scoped></style>
