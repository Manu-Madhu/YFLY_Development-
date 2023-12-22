import axios from "axios";
import { baseUrl } from "./Endpoint";

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: baseUrl
});

// const refreshToken = async () => {
//     try {
//         const response = await axios.post('/api/auth/refresh-token', {
//             // Add any necessary data for refreshing the token
//         });
//         const newToken = response.data.accessToken;
//         // Update the authorization header with the new token
//         instance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
//         return Promise.resolve(newToken);
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };

// const getTokenFromCookie = () => {
//     const cookies = document.cookie.split(';');
//     const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('refresh_token'));
//     console.log(tokenCookie)
//     if (tokenCookie) {
//         return tokenCookie.split('=')[1];
//     }
//     return null;
// };

// const getExpirationTimeFromToken = (token) => {
//     try {
//         const decodedToken = jwtDecode(token);
//         if (decodedToken && decodedToken.exp) {
//             // 'exp' contains the expiration time in seconds since Unix epoch
//             return decodedToken.exp;
//         }
//     } catch (error) {
//         console.error('Error decoding token:', error);
//     }
//     return null; // Return null or handle the error case
// };

// // Intercept any request and attach the token before sending
// instance.interceptors.request.use(async (config) => {
//     // Assuming you have the token available somewhere in your application
//     const yourToken = getTokenFromCookie(); // Replace with your token

//     // Check if the token is expired or about to expire
//     const tokenExpirationThreshold = 60 * 5; // 5 minutes before expiry

//     const tokenExpirationTime = getExpirationTimeFromToken(yourToken); // Pass your actual token here

//     if (tokenExpirationTime - Date.now() / 1000 < tokenExpirationThreshold) {
//         // Token is about to expire or expired, refresh the token
//         try {
//             const newToken = await refreshToken();
//             config.headers['Authorization'] = `Bearer ${newToken}`;
//         } catch (error) {
//             // Handle token refresh error (e.g., redirect to login)
//             console.error("Token refresh failed:", error);
//             // Redirect to login or handle the error appropriately
//         }
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (err) => {
      console.log(err);
  
      let retryCount = 0;
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
