import axios from 'axios';
import JWTToken from './token';
import { IsSSR } from '../utils';

JWTToken.setup();

const client = axios.create();

client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = JWTToken.getToken();

    if (token && !IsSSR()) {
      // config.headers!['Authorization'] = token;
      config.headers!['Content-Type'] = 'application/json';
      // config.headers!["Cookie"] = "csrftoken=gJUaxtoOPkKk0RT4QUACaIoJBc1miFSg; ig_did=5A739C41-4B2C-465D-8958-6455B0F7A0CA; ig_nrcb=1; mid=Y7XK-QAEAAGtxX4q-dRqckAGp2e3"
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default client;
