import axios from 'axios';

export const ApiBase = axios.create({
  baseURL: 'localhost:8080'
})
