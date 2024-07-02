import { axiosInstance } from "../plugins/axios";

export default function teamsApi() {
    const fetchTeams = async () => {
        return await axiosInstance.get(`${import.meta.env.VITE_API_HOST}teams/?competitions=2013,2016,2021,2001,2018,2015,2002,2019,2003,2017,2152,2014,2000&limit=500`).then(res => res.data)
    }

    const fetchTeamDetail = async (id: string | string[]) => {
        return await axiosInstance.get(`${import.meta.env.VITE_API_HOST}teams/${id}/`).then(res => res.data)
    }

    const fetchTeamMatches = async (id: string | string[], query: Object = {}) => {
        return await axiosInstance.get(`${import.meta.env.VITE_API_HOST}teams/${id}/matches/`, {params: query}).then(res => res.data)
    }

    return {fetchTeams, fetchTeamDetail, fetchTeamMatches}
}