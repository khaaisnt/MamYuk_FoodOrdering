import { getTokenFromCookie, removeAllFromCookie } from "@/app/helper/cookies";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    const makerID = process.env.NEXT_PUBLIC_MAKER_ID || "1";
    config.headers["makerID"] = makerID;
    
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const is401 = error.response && (error.response.status === 401 || error.response.status === 403);
    const isLoginEndpoint = error.config.url.includes("/login") ?? false;
    if (
      is401 && !isLoginEndpoint
    ) {
      removeAllFromCookie();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;