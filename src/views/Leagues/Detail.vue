<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import leaguesApi from '../../api/leaguesApi';
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import Pagination from '../../components/Pagination.vue';
import { Breadcrumb } from '../../types/Breadcrumbs.types';
import { Filter } from '../../types/Filter.types';
import { Matches } from '../../types/Matches.types';
import FilterComponent from "../../components/Filter.vue";
const state = reactive({matches: [], count: 0, competition: { name: ""}, loaded: false, current: 1})
const filter : Filter = reactive({dateFrom: null, dateTo: null})
const route = useRoute();
const router = useRouter()
const { fetchLeague } = leaguesApi();
const perPage = 20;

const setMatches = async () => {
    const data = await fetchLeague(route.params.id, filter);
    state.competition = data.competition;
    state.matches = data.matches;
    state.count = data.resultSet.count;    
    state.loaded = true;
}

const setFilter = () => {
    filter.dateFrom = route.query.dateFrom ? route.query.dateFrom.toString() : null;
    filter.dateTo = route.query.dateTo ? route.query.dateTo.toString() : null;
}

const getBreadcrumbs = (): Breadcrumb[] => {
    return [
        {
            name: "leaguesList",
            title: "Лиги"
        },
        {
            name: null,
            title: state.competition.name,
        }
    ];
}

const getMatchStatus = (status: string) => {
    switch (status) {
        case "TIMED":
            return "Запланирован";
        case "SCHEDULED":
            return "Запланирован";
        
        case "LIVE":
            return "В прямом эфире";

        case "IN_PLAY":
            return "В игре";

        case "PAUSED":
            return "Пауза";

        case "FINISHED":
            return "Завершен";
        
        case "POSTPONED":
            return "Отложен";

        case "SUSPENDED":
            return "Приостановлен";

        case "CANCELED":
            return "Отменен";

        default:
            return status;
    }
}

const setFilteredValue = (filter: Filter) => {
    state.current = 1;
    router.push({
        name: 'leaguesDetail',
        params: {
            id: route.params.id
        },
        query: filter
    })
    setFilter();
    setMatches();
}

const getPaginateMatches = (): Matches[] => {
    const start = (state.current - 1) * perPage;
    const end = state.current * perPage;
    return state.matches.slice(start, end)
}

const setCurrent = (value: number) => {
    state.current = value;
}

setFilter()
setMatches();
</script>
<template>
    <div class="container" v-if="state.loaded">
        <Breadcrumbs :data="getBreadcrumbs()" />
        <h1>Матчи</h1>
        <FilterComponent @update="setFilteredValue" />
        <div class="row mb-3">
            <div class="col-12 mb-3">
                <div class="row text-bold">
                    <div class="col-2">Дата матча</div>
                    <div class="col-2">Время матча</div>
                    <div class="col-2">Статус матча</div>
                    <div class="col-4">Команды</div>
                    <div class="col-2">Результат матча</div>
                </div>
            </div>
            <div class="col-12 mb-2" v-for="match in getPaginateMatches()">
                <div class="card">
                    <div class="card-body row">
                        <div class="col-2">
                            {{ new Date(match.utcDate).toLocaleDateString("ru") }}
                        </div>
                        <div class="col-2">
                            {{ new Date(match.utcDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }}
                        </div>
                        <div class="col-2">{{ getMatchStatus(match.status) }}</div>
                        <div class="col-4">{{ `${match.homeTeam.name} - ${match.awayTeam.name}` }}</div>
                        <div class="col-2">
                            <template v-if="match.score.fullTime.home !== null && match.score.fullTime.away !==  null">{{ `${match.score.fullTime.home} : ${match.score.fullTime.away}` }}</template>
                            <template v-if="match.score.halfTime.home !== null && match.score.halfTime.away !== null" >{{ ` (${match.score.halfTime.home} : ${match.score.halfTime.away})` }}</template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination
            :count="Math.ceil(state.count / perPage)" 
            :current="state.current" 
            @set="setCurrent"
        />
    </div>
</template>