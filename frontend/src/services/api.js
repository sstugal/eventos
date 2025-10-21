import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const getEventos = () => axios.get(`${API_URL}/eventos`);
export const getGanadores = () => axios.get(`${API_URL}/ganadores`);
export const getUltimos5Ganadores = (deporte) =>
  axios.get(`${API_URL}/ganadores/ultimos5/${encodeURIComponent(deporte)}`);
