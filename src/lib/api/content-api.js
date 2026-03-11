import { publicApi } from "./http";

const unwrap = (response) => response.data.data;

export const contentApi = {
  getContentByKey: (key) => publicApi.get(`/content/${key}`).then(unwrap),
};
