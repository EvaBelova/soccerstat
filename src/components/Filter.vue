<script setup lang="ts">
import { reactive } from 'vue';
import { Filter } from '../types/Filter.types';
import { useRoute } from 'vue-router';

const emit = defineEmits(['update'])
const route = useRoute();

const filter: Filter = reactive({dateFrom: null, dateTo: null})

const update = () => {
    if (!filter.dateFrom || !filter.dateTo) return;
    if(Date.parse(filter.dateFrom) > Date.parse(filter.dateTo)) {
        const tmp = filter.dateTo;
        filter.dateTo = filter.dateFrom;
        filter.dateFrom = tmp;
    }
    emit("update", filter)
}
const setFilter = () => {
    filter.dateFrom = route.query.dateFrom ? route.query.dateFrom.toString() : null;
    filter.dateTo = route.query.dateTo ? route.query.dateTo.toString() : null;
}

setFilter();
</script>
<template>
    <div class="input-group my-3">
            <span class="input-group-text">c</span>
            <input type="date" class="form-control" v-model="filter.dateFrom" placeholder="ДД.ММ.ГГГГ" />
            <span class="input-group-text"> по </span>
            <input type="date" class="form-control" v-model="filter.dateTo" placeholder="ДД.ММ.ГГГГ" />
            <button class="btn btn-outline-primary" :disabled="!filter.dateFrom || !filter.dateTo" @click="update">Найти</button>
        </div>
</template>