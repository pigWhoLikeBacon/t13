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
