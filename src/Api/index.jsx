import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api",
});

export const insertGame = (payload) => api.post(`/game`, payload);
export const getAllGames = () => api.get(`/games`);
export const updateGameById = (id, payload) => api.put(`/game/${id}`, payload);
export const deleteGAmeById = (id) => api.delete(`/game/${id}`);
export const getGameById = (id) => api.get(`/game/${id}`);
export const getUsers = () => api.get(`/users`);

const apis = {
  insertGame,
  getAllGames,
  updateGameById,
  deleteGAmeById,
  getGameById,
  getUsers,
};

export default apis;
