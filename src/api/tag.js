import request from "@/utils/request";

export function getAllTag() {
  const params = {
    page: 0,
    size: 9999
  };
  return request({
    url: "api/tag/show",
    method: "get",
    params
  });
}

export function getTagById(id) {
  const params = {
    id: id,
    page: 0,
    size: 1
  };
  return request({
    url: "api/tag/show",
    method: "get",
    params
  });
}
