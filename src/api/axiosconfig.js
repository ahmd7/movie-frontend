import axios from 'axios';

const baseURL = process.env.BACKEND ? `http://${process.env.BACKEND}:8080` : 'http://localhost:8080';

export default axios.create({
    baseURL,
    headers: {"ngrok-skip-browser-warning": "true"}
});
