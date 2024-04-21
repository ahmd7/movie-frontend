import axios from 'axios';

export default axios.create({
    baseURL: process.env.BACKEND:8080,
    headers: {"ngrok-skip-browser-warning": "true"}
});
