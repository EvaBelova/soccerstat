import { axiosInstance } from "../plugins/axios";

export default function leaguesApi() {
    const fetchLeagues = async () => {
        // const res = await fetch(`${import.meta.env.VITE_API_HOST}competitions/`, {
        //     headers: {
        //         'X-Auth-Token' : '60164710cc374616ab8d342f26155142',
        //         'Sec-Fetch-Mode': 'cors'
        //       }
        // });
        // console.log(res.json());
        // return await res.json();
        return  await axiosInstance.get(`${import.meta.env.VITE_API_HOST}competitions/`).then(res => res?.data.competitions)
    }

    return { fetchLeagues }
}
