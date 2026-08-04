// src/api/vehicleApi.js
import api from "./api";

export const VehicleAPI = {
  getAll: () => api.get("/vehicles"),

  add: (vehicleData) => api.post("/vehicles", vehicleData),

  update: (id, vehicleData) => api.put(`/vehicles/${id}`, vehicleData),

  delete: (id) => api.delete(`/vehicles/${id}`),
};
