<script setup lang="ts">
let searchQuery: string | null = null;
const state = reactive({leagues: []})

import { reactive } from 'vue';
import leaguesApi from '../api/leaguesApi';

const { fetchLeagues } = leaguesApi();
const setLeagues = async () => {
    state.leagues = await fetchLeagues()
    console.log(state.leagues)
}


setLeagues();
</script>
<template>
    <div class="container">
        <div class="search">
            Search here
        </div>
        <div class="leagues-list">
            <div class="leagues-item" v-for="league in state.leagues">
                <pre> {{ league }}</pre>
            </div>
        </div>
    </div>
</template>