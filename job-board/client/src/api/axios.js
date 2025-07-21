// ✅ Import the axios package from node_modules
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // your backend base URL
  withCredentials: true, // optional
});

export default instance;
