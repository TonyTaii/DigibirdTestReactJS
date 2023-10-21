import axios from 'axios';

const tokenInstance = axios.create({
  baseURL: 'https://dev-pos.digibird.io/api/v1/front/self', 
});

tokenInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token') ;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default tokenInstance;