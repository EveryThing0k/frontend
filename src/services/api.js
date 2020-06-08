import axios from 'axios';

// http://127.0.0.1:3333

const api = axios.create({
  baseURL: 'https://api-everythingok.herokuapp.com',
});

export default api;
