
import { League } from "../types/Leagues.types";

export const filter = (list: League[], query: String | null) => {
    if(!query) 
        return list;
    
    return list.filter((item: League) => item.name.toLowerCase().includes(query.toLowerCase()))
}