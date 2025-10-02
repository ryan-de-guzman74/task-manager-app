import axios from "axios";

const api = axios.create({
  baseURL: "/",   // relative, so proxy forwards it
});

export default api;