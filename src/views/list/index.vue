<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>文章</el-breadcrumb-item>
    <el-breadcrumb-item v-for="title in titles" v-bind:key="title">{{
      title
    }}</el-breadcrumb-item>
    <div>
      <span class="el-breadcrumb__inner" role="link">{{ word }}</span>
      <el-select
        v-model="value"
        size="mini"
        style="float: right"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </el-breadcrumb>
  <div
    class="infinite-list-wrapper"
    style="overflow:auto"
    @scroll="handleScroll"
  >
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="article in articles" v-bind:key="article.id" class="list-item">
        <el-card
          shadow="hover"
          style="width: 100%;"
          :body-style="{ padding: '10px 10px 5px 10px' }"
        >
          <router-link
            :to="{ path: `/single/${article.id}` }"
            style="text-decoration: none;color: #1b1f23"
          >
            <el-container>
              <el-aside width="160px">
                <el-image
                  style="width: 160px; height: 160px"
                  :src="baseURL + article.cover"
                  :fit="'cover'"
                />
              </el-aside>
              <el-main style="padding: 0 0 0 10px">
                <span>{{ article.title }}</span
                ><br /><br />
                <i class="el-icon-date"></i>
                <span>{{ getData(article.createTime) }}</span>
                <i class="el-icon-view"></i>
                <span>{{ article.view }}</span
                ><br /><br />
                <span>{{ article.id }}{{ article.introduce }}</span
                ><br /><br />
                <Tags :tags="article.tags"></Tags>
              </el-main>
            </el-container>
          </router-link>
        </el-card>
      </li>
    </ul>
  </div>
  <p>{{ count }}</p>
  <p>{{ loading }}</p>
  <p v-if="loading">加载中...</p>
  <p v-if="noMore">没有更多了</p>
</template>

<script>
import { getArticles } from "@/api/article";
import Config from "@/settings";
import Tags from "@/components/tags";

export default {
  name: "list",
  components: { Tags },
  data() {
    return {
      count: 6,
      countMax: 14,
      page: 0,
      size: 6,
      loading: false,
      articles: [],
      options: [
        {
          value: "id,desc",
          label: "按时间正序"
        },
        {
          value: "id,asc",
          label: "按时间逆序"
        },
        {
          value: "views,desc",
          label: "按访问量正序"
        },
        {
          value: "views,asc",
          label: "按访问量逆序"
        }
      ],
      value: "id,desc",
      baseURL: Config.baseURL
    };
  },
  props: {
    blurry: {
      type: String,
      default: function() {
        return "";
      }
    },
    tagId: {
      type: Number,
      default: function() {
        return -1;
      }
    },
    file: {
      type: Array,
      default: function() {
        return [];
      }
    },
    titles: {
      type: Array,
      default: function() {
        return [];
      }
    },
    word: {
      type: String,
      default: function() {
        return "全部";
      }
    }
  },
  async mounted() {
    let _this = this;
    _this.page = 0;
    _this.count = 6;
    _this.articles = await _this.getAPage();

    this.$nextTick(() => {
      window.addEventListener("scroll", _this.handleScroll, true);
    });
  },
  watch: {
    async value() {
      this.page = 0;
      this.count = 6;
      this.articles = await this.getAPage();
    }
  },
  computed: {
    noMore() {
      return this.count >= this.countMax;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      return this.loading;
    },
    async handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      if (this.noMore == false) {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        //滚动条到底部的条件
        if (scrollTop + windowHeight == scrollHeight) {
          //写后台加载数据的函数
          this.page += 1;
          this.articles = this.articles.concat(await this.getAPage());

          this.loading = true;
          setTimeout(() => {
            this.count += this.size;
            this.loading = false;
          }, 100);
        }
      }
    },
    async getAPage() {
      var articles = [];
      var params = {
        page: this.page,
        size: this.size,
        blurry: this.blurry,
        enabled: true,
        sort: this.value
      };

      console.log(this.file);

      if (this.blurry !== "") {
        params["blurry"] = this.blurry;
      } else if (this.tagId !== -1) {
        params["tagIds"] = this.tagId;
      } else if (this.file.length > 0) {
        params["createTime"] = this.file;
      }

      // params["createTime"] = "2021-1-1 00:00:00";
      // params["createTime"] = "2021-2-1 00:00:00";

      // params["createTime"] = ["2021-1-1 00:00:00", "2021-2-1 00:00:00"];

      await getArticles(params)
        .then(res => {
          articles = res.content;
          this.countMax = res.totalElements;
        })
        .catch(() => {});

      return articles;
    },
    getData(format) {
      var data = new Date(parseInt(format));
      return (
        data.getFullYear() +
        "-" +
        (data.getMonth() + 1) +
        "-" +
        data.getUTCDate()
      );
    }
  }
};
</script>

<style scoped>
.list {
  padding: 0;
  list-style: none;
}

.list-item {
  display: flex;
  margin: 10px 0;
  color: #7dbcfc;
}
</style>
