import axios from 'axios';

const interceptor = axios.create({
  baseURL: process.env.API_URL,
});

export default interceptor;
