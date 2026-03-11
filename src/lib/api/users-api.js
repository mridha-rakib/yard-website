import { apiClient } from "./http";

const unwrap = (response) => response.data.data;

export const usersApi = {
  getProfile: () => apiClient.get("/users/profile").then(unwrap),
  updateProfile: (payload) => apiClient.patch("/users/profile", payload).then(unwrap),
  changePassword: (payload) =>
    apiClient.patch("/users/profile/password", payload).then(unwrap),
};
