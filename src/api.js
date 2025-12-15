import axios from "axios";
const API = axios.create({
  baseURL: "https://skill-stack-backend-production.up.railway.app",
});
export default API;