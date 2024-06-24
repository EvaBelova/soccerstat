import { axiosInstance } from "../plugins/axios";

export default function leaguesApi() {
    const fetchLeagues = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_HOST}competitions/`, {
            headers: {
                'X-Auth-Token' : import.meta.env.VITE_API_KEY 
              }
        });
        console.log(res.json());
    }

    return { fetchLeagues }
}
