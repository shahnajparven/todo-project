import axios from 'axios';

const apiInstance = axios.create({
    baseURL: process.env.URL,
    timeout: 1000,
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
    withCredentials: true,
});
export default apiInstance;
