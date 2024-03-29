import request from "@/utils/request";

export function getArticles(params) {
  return request({
    url: "api/article/show",
    method: "get",
    //允许多个key相同的参数
    paramsSerializer: function(params) {
      return require('qs').stringify(params, {arrayFormat: 'repeat'})
    },
    params
  });
}

export function getArticle(id) {
  const params = {
    id: id,
    page: 0,
    size: 1
  };
  return request({
    url: "api/article/show",
    method: "get",
    params
  });
}

export function getArticlesByTagId(id, page, size) {
  const params = {
    tagIds: id,
    page: page,
    size: size
  };
  return request({
    url: "api/article/show",
    method: "get",
    params
  });
}

export function getFile() {
  return request({
    url: "api/article/file",
    method: "get"
  });
}
