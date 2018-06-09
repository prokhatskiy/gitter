import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/',
  responseType: 'json'
});

export default axiosClient;