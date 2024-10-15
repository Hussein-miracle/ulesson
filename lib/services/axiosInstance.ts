
import axios from "axios";


const axiosInstance = axios.create({
  baseURL:"/api",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    // console.log({ storedToken })
    // You can modify the request config here, e.g., add authentication headers
    // if (storedToken) {
    // config.headers['Authorization'] = `Bearer ${storedToken}`;
    // }

    return config;
  },
  (error) => {
    // console.log({errorInRequestInterceptor: error})
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log({ responseInResponseINTERCEPTOR: response})
    // You can modify the response data here, e.g., handling pagination
    // if (response.status === 401 && window.location.pathname !== "/login") {
    //   return;
    // }

    return response.data;
  },
  async (error) => {
    // console.log({errorAxios:error});
    // const errorConfig = error?.config;
    // const errorResponse = error?.response;

    Promise.reject(error);
  },
)



export default axiosInstance;