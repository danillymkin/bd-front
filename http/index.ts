import axios from 'axios';

export const API_URL = 'http://localhost:5000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  validateStatus: (status: number) => {
    return status < 500;
  },
});

export default $api;
