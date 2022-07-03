/* eslint-disable import/no-cycle */
import axios from 'axios';


const loginBaseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const instance = axios.create({
  baseURL: loginBaseUrl,
  timeout: 200000,
  headers: {
    'content-type': 'application/json',
}
});


const responseOk = (response) => response;

const responseError = async (error) => {
  return Promise.reject(error);
};

instance.interceptors.response.use(responseOk, responseError);

export const APIService = {
  get(endpoint, config = null) {
    return config ? instance.get(endpoint, config) : instance.get(endpoint);
  },

  post(endpoint, data) {
    return instance.post(endpoint, data);
  },

  patch(endpoint, data) {
    return instance.patch(endpoint, data);
  },

  delete(endpoint) {
    return instance.delete(endpoint);
  },

  put(endpoint, data) {
    return instance.put(endpoint, data);
  },
};

