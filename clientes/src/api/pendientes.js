import axios from "./axios";

export const getPendientesRequest = async () => axios.get("/pendientes");

export const createPendienteRequest = async (pendiente) => axios.post("/pendientes", pendiente);

export const updatePendienteRequest = async (id, pendiente) =>
  axios.put(`/pendientes/${id}`, pendiente);

export const deletePendienteRequest = async (id) => axios.delete(`/pendientes/${id}`);

export const getPendienteRequest = async (id) => axios.get(`/pendientes/${id}`);
