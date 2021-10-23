import axios from 'axios';

export const api = axios.create({
  baseURL: '172.18.93.162:4000',
});
