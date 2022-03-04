import axios from 'axios';

export const STATIC_URL = 'http://localhost:5000';
export const API_URL = `${STATIC_URL}/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  validateStatus: (status: number) => {
    return status < 500;
  },
});

export default $api;
