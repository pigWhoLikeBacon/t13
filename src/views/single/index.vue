<template>
  <el-card :body-style="{ padding: '0px' }" style="width: 100%">
    <el-image
      style="width: 100%; height: 200px"
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      fit="cover"
    ></el-image>
    <div style="padding: 14px;">
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <span>好吃的汉堡</span>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </div>
  </el-card>
  <Comment></Comment>
</template>

<script>
import Comment from "@/views/single/module/Comment";
export default {
  name: "index",
  components: {
    Comment
  },
};
</script>

<style scoped></style>
