import axios from 'axios';

const tokenInstance = axios.create({
  baseURL: 'https://dev-pos.digibird.io/api/v1/front/self', 
});

tokenInstance.interceptors.request.use(
  (config) => {
    
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wb3MuZGlnaWJpcmQuaW8vYXBpL3YxL2Zyb250L3NpZ24tdXAtemFsbyIsImlhdCI6MTY5Nzc4MTcyNiwiZXhwIjoxNjk3ODAzNjI2LCJuYmYiOjE2OTc3ODE3MjYsImp0aSI6IldlekFMUVpCaHpQVjdWdFEiLCJzdWIiOiIxMDIwIiwicHJ2IjoiOTU1OWZhNmZlNDJiNGYxMzE3MDExN2ZkYTAwMTRlNjcyYTkwNjY1NiJ9.e6Plic4_cA4bVp2cXkIM8B2oUz40UjcuQIIpSEQv1RU'; 
    console.log(token)
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