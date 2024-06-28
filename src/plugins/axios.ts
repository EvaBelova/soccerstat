import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
    headers: {
        "X-Auth-Token": import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json"
    }
})