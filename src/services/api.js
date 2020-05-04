import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-everythingok.herokuapp.com',
});

export default api;
