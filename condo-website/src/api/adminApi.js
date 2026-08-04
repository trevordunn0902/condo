// src/api/adminApi.js
import api from "./api";

export const AdminAPI = {
  login: (credentials) => api.post("/admin/login", credentials),
};
