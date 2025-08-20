import axios from 'axios'

// for production we make it dynamic, as we dont know what will be the url
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"
const api = axios.create({
    baseURL: BASE_URL,
});

export default api;