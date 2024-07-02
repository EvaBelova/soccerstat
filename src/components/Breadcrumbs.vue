<script setup lang="ts">
import { PropType } from 'vue';
import { Breadcrumb } from '../types/Breadcrumbs.types';
const props = defineProps({
    data: {
        type: Array as PropType<Array<Breadcrumb>>,
        required: true
    }
})
</script>
<template>
    <nav>
        <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="item in props.data">
                <RouterLink v-if="item.name" :to="{name: item.name}">{{ item.title }}</RouterLink>
                <template v-else> {{ item.title }}</template>
            </li>
        </ol>
    </nav>
</template>