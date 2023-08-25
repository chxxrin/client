import axios from 'axios';
import { envConfig } from 'src/config';

const instance = axios.create({
  baseURL: envConfig.GITHUB_URL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  // 인터셉터 로직 추가 가능
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // 인터셉터 로직 추가 가능
    return response;
  },
  (error) => {
    // 인터셉터 로직 추가 가능
    return Promise.reject(error);
  }
);

const Service = {
  getUser: (id) => instance.get(`/users/${id}`),
  // 다른 API 호출 메서드들 추가
};

export default Service;
