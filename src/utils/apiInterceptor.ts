import axios from 'axios';
console.log(process.env.API_URL);

const interceptor = axios.create({
  baseURL: process.env.API_URL,
});

export default interceptor;
