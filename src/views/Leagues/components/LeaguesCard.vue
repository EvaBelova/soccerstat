<script setup lang="ts">
    const props = defineProps({
        card: { type: Object, required: true }
    })
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>
<template>
    <div class="leagues-item card" @click="router.push({name: 'leaguesDetail', params: {id: props.card.id}})">
        <div class="leagues-img d-flex flex-1 p-3">
            <img class="p-0 img-thumbnail mx-auto" :src="props.card.emblem" />
        </div>
        <div class="card-body text-center">
            <h5 class="card-title">{{ props.card.name }}</h5>
            <p class="card-text">{{ props.card.area.name }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped >
.leagues {
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
        }
    }
}
</style>