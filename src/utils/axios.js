import axios from "axios";
import AuthHelper from "./authHelper";

export const baseURL = import.meta.env.VITE_BASE_URL;

const token = new AuthHelper().getToken();

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
