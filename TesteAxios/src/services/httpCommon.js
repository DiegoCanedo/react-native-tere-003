import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: 'http://api.github.com',
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
