import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnpnv80osifze.cloudfront.net/',
});

export default api;
