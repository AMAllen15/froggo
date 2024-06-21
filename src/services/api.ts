import axios from 'axios';

const api = axios.create({
  baseURL: process.env.IP_ADDRESS,
});

export default api;