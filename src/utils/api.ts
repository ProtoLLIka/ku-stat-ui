import axios from 'axios';

const interceptor = axios.create({
  baseURL: API_URL,
});

export default interceptor;
