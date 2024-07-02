<script setup lang="ts">
const props = defineProps({
    card: {type: Object, required: true}
})
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
<div class="teams-item card" @click="router.push({name: 'teamsDetail', params: {id: props.card.id}})">
    <div class="teams-img d-flex flex-1 p-3">
        <img class="p-0 img-thumbnail mx-auto" :src="props.card.crest" />
    </div>
    <div class="card-body teams-body text-center">
        <h5 class="card-title">{{ props.card.name }}</h5>
    </div>
</div>
</template>
<style scoped lang="scss">
.teams {
    &-item {
        height: 100%;
        cursor: pointer;
    }
    &-img {
        align-items: center;
        justify-content: center;
        flex: 1;
        & > img {
            border: 0;
            border-radius: 0;
            height: auto;
            width: 200px;
            max-width: 100%;
        }
    }
    &-body {
        flex: 0
    }
}
</style>