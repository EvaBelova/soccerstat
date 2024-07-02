type Team = {
    name: string,
}

type ScorePeriod = {
    home: number | null,
    away: number | null
}

type Score = {
    fullTime: ScorePeriod,
    halfTime: ScorePeriod
}

export type Matches = {
    utcDate: string,
    status: string,
    homeTeam: Team,
    awayTeam: Team
    score: Score
}