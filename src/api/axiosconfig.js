import axios from "axios";
export default axios.create({
    baseURL:'http://backend:8000',
    headers: { "Access-Control-Allow-Origin": "*"}
})
