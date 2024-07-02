import { axiosInstance } from "../plugins/axios";

export default function leaguesApi() {
    const fetchLeagues = async () => {
        return await axiosInstance.get(`${import.meta.env.VITE_API_HOST}competitions/`).then(res => res?.data)
    }

    const fetchLeague = async (id: string | string[], query: Object = {}) => {
        return await axiosInstance.get(`${import.meta.env.VITE_API_HOST}competitions/${id}/matches`, {params: query}).then(res => res?.data);
    }

    return { fetchLeagues, fetchLeague }
}
