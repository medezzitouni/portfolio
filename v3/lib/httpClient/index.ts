import axios from 'axios';
import { API_URL } from './constants';
import JWTToken from './token';
import { IsSSR } from '../utils';

JWTToken.setup();

const client = axios.create({
  baseURL: API_URL,
});

client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = JWTToken.getToken();

    if (token && !IsSSR()) {
      config.headers!['Authorization'] = token;
      // config.headers!['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default client;
