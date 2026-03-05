import axios from "axios";

const API = axios.create({
  baseURL: "https://login-backend-r91o.onrender.com"
});

export const loginUser = (data) => API.post("/login", data);