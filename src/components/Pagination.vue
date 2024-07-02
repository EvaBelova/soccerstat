<script setup lang="ts">
const props = defineProps({
    count: {type: Number, required: true},
    current: {type: Number, required: true},
})

</script>
<template>
    <nav>
        <ul class="pagination justify-content-center">
            <li class="list-item">
                <a class="page-link" :class="{'disabled': props.current === 1}" @click.prevent="$emit('set', props.current - 1)" href="#">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="list-item disabled" v-if="props.count > 5 && props.current > 3">
                <span class="page-link">...</span>
            </li>
            <template v-for="i in props.count">
                <li class="list-item" v-if="props.count < 6 || (i > props.current - 3 && i < props.current + 3)" :class="{'active': props.current === i}">
                    <a class="page-link" @click.prevent="$emit('set', i)" href="#">{{ i }}</a>
                </li>
            </template>
            <li class="list-item disabled" v-if="props.count > 5 && props.count - props.current > 3">
                <span class="page-link">...</span>
            </li>
            <li class="list-item">
                <a class="page-link" :class="{'disabled': props.current === props.count}" @click.prevent="$emit('set', props.current + 1)" href="#">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>