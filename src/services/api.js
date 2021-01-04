import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.wiki4fit.com.br/api',
});

export default api;
