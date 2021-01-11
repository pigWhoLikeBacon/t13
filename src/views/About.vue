<template>
  <div id="gitalk-container"></div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  data() {
    return {};
  },
  mounted() {
    const gitalk = new Gitalk({
      clientID: "2ef9e8961eaca3d86802",
      clientSecret: "2d776abda15a07657410e9847f9c2d42044e15b8",
      repo: "gitalk-repo", // The repository of store comments,
      owner: "pig-who-like-bacon",
      admin: ["pig-who-like-bacon"],
      id: "comment",
      title: "hhd3",
      distractionFreeMode: false // Facebook-like distraction free mode
    });
    gitalk.render("gitalk-container");
    return;
  }
};
</script>
