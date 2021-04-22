<template>
  <el-space wrap>
    <router-link
      v-for="tag in tags"
      :key="tag.id"
      :to="{ path: `/tag/${tag.id}` }"
    >
      <el-tag :type="tag.color">
        {{ tag.content }}
      </el-tag>
    </router-link>
  </el-space>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tags: Array
  }
};
</script>
