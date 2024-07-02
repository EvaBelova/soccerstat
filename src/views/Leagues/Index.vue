<script setup lang="ts">
const state = reactive({leagues: [], query: null, count: null, current: 1})

import { reactive } from 'vue';
import leaguesApi from '../../api/leaguesApi';
import { filter } from '../../utils';
import LeaguesCard from './components/LeaguesCard.vue';
import Pagination from "../../components/Pagination.vue";

const { fetchLeagues } = leaguesApi();
const setLeagues = async () => {
    const data = await fetchLeagues()
    state.leagues = data.competitions;
    state.count = data.count;
}

const perPage = 8;

const filteredLeagues = () => {
    const start = (state.current - 1) * perPage;
    const end = state.current * perPage;
    return filter(state.leagues, state.query).slice(start, end)
}

const setCurrent = (value: number) => {
    state.current = value;
}

setLeagues();
</script>
<template>
    <div class="container">
        <div class="search row my-4">
            <div class="col-12 col-md-4">
                <input type="search" class="form-control" v-model="state.query" placeholder="Поиск" />
            </div>
        </div>
        <div class="leagues-list row">
            <div class="col-12 col-md-4 col-lg-3 mb-3" v-for="league in filteredLeagues()">
                <LeaguesCard :card="league" />
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