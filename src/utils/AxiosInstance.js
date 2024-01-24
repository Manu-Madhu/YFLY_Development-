import axios from "axios";
import { baseUrl } from "./Endpoint";

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials:true
});

let retryCount = 0;

instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (err) => {
      console.log(err);
  
      // let retryCount = 0;
      const maxRetries = 3;
  
      if (err.response?.status === 401) {
        if (retryCount < maxRetries) {
          try {
            if(err.config.url !== '/api/auth/refresh-token'){
              await instance.get('/api/auth/refresh-token');
              console.log("New access token generated");
              console.log("Retry count",retryCount)
    
              const originalRequest = err.config;
              retryCount++; 
              return instance(originalRequest);
            }else{
              console.log("Error in refresh token generating")
            }
          } catch (refreshErr) {
            console.log(refreshErr);
            console.log("Failed to regenerate new access token");
          }
        } else {
          console.log("Maximum retry limit reached. Aborting.");
        }
      }
  
      return Promise.reject(err);
    }
  );
  

export default instance;
