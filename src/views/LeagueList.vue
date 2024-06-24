<script setup lang="ts">
let searchQuery: string | null = null;
let leagues: Object[] | [] = [];

import leaguesApi from '../api/leaguesApi';

const { fetchLeagues } = leaguesApi();

fetchLeagues();

</script>
<template>
    <div class="container">
        <div class="search">
            Search here
        </div>
        <div class="leagues-list">
            <div class="leagues-item" v-for="league in leagues">
                <pre> {{ league }}</pre>
            </div>
        </div>
    </div>
</template>