<template>
  <el-aside width="300px" style="padding: 1em 10px 10px 10px">
    <div style="padding: 0 0 0 10px">
      <el-container>
        <el-aside width="60px">
          <el-image
            style="width: 60px; height: 60px"
            src="https://ss2.baidu.com/6ON1bjeh1BF3odCf/it/u=656660554,4053558082&fm=15&gp=0.jpg"
            :fit="'cover'"
          />
        </el-aside>
        <el-main style="padding: 0 0 0 10px; text-align: right; position: relative">
          <span>爱吃培根的猪</span>
          <div style="position: absolute; right: 0; bottom: 0;">
            <span>QQ</span>
            <el-divider direction="vertical"></el-divider>
            <span>Github</span>
          </div>
        </el-main>
      </el-container>
    </div>
    <el-divider style="margin: 10px 0"></el-divider>
    <div style="width: 100%">
      <p style="font-size: 18px; margin: 16px 0 16px 0; font-weight: bold">标签</p>
      <el-space wrap>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </el-space>
    </div>
    <el-divider style="margin: 10px 0"></el-divider>
    <div style="width: 100%">
      <p style="font-size: 18px; margin: 16px 0 16px 0; font-weight: bold">归档</p>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>

<style scoped></style>
