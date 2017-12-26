import axios from 'axios';

export const ApiBase = axios.create({
    baseURL: `http://localhost:8080`
})