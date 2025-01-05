<script setup>
import { computed } from 'vue';

const props = defineProps(['href', 'active']);

const classes = computed(() =>
    props.active
        ? ' border-fm-orange font-bold leading-5 text-fm-orange focus:outline-none focus:border-light transition duration-150 ease-in-out'
        : ' border-transparent font-medium leading-5 hover:border-light focus:outline-none focus:border-light transition duration-150 ease-in-out'
);
</script>

<template>
    <RouterLink :to="{ name: href }" :class="classes" class="inline-flex items-center px-1 py-1 border-b-2 uppercase">
        <slot />
    </RouterLink>
</template>
