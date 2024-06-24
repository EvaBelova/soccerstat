import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Auth-Token": import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json"
    }
})