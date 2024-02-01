import axios from "axios";
import { baseUrl } from "./Endpoint";

import store from "../redux/Store";
import { logout } from "../redux/slices/AuthSlicer";

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials:true
});

instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (err) => {
      if (err.response?.status === 401 && err.response?.data?.tokenFlag) {
          store.dispatch(logout())
      }
  
      return Promise.reject(err);
    }
  );
  

export default instance;
