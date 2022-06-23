import axios from 'axios';

const client = axios.create({
  baseURL: `https://empty-coffee-cups-backend.herokuapp.com`,
  timeout: 9000,
});

export default client;