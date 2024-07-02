<script setup lang="ts">
import { reactive } from 'vue';
import teamsApi from '../../api/teamsApi';
import { filter } from '../../utils';
import TeamsCard from './components/TeamsCard.vue';
import Pagination from '../../components/Pagination.vue';

const state = reactive({query: null, teams: [], count: 0, current: 1});
const perPage = 16;

const {fetchTeams} = teamsApi();

const setTeams = async () => {
    const data = await fetchTeams();
    state.count += data.count;
    state.teams = data.teams;
}

const filteredTeams = () => {
    const start = (state.current - 1) * perPage;
    const end = state.current * perPage;
    return filter(state.teams, state.query).slice(start, end);
}

const setCurrent = (value: number) => {
    state.current = value;
}

setTeams();
</script>
<template>
    <div class="container">
        <div class="search row my-4">
            <div class="col-12 col-md-4">
                <input type="search" class="form-control" v-model="state.query" placeholder="Поиск" />
            </div>
        </div>
        <div class="teams-list row">
            <div class="col-12 col-md-4 col-lg-3 mb-3" v-for="team in filteredTeams()">
                <TeamsCard :card="team" />
            </div>
        </div>
        <Pagination
            v-if="state.count"
            :count="Math.ceil(state.count / perPage)" 
            :current="state.current" 
            @set="setCurrent"
        />
    </div>
</template>