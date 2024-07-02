export type Area = {
    id: Number,
    name: String,
    code: String,
    flag: string | null
}

export type Season = {
    id: number,
    startDate: String,
    endDate: String,
    currentMatchday: number,
    winner: String | null
}

export type League =  {
    id: Number,
    area: Area,
    name: String,
    code: String,
    type: String,
    emblem: String | null,
    plan: String,
    currentSeason: Season,
    numberOfAvailableSeasons: Number,
    lastUpdated: String | null
}