<script setup>
import { computed } from 'vue';

const props = defineProps(['href', 'active']);

const classes = computed(() =>
    props.active
        ? 'font-bold leading-5 text-fm-orange focus:outline-none transition duration-150 ease-in-out'
        : 'font-medium leading-5 hover:border-light focus:outline-none transition duration-150 ease-in-out'
);
</script>

<template>
    <RouterLink :to="{ name: href }" :class="classes" class="inline-flex items-center px-1 py-1 uppercase">
        <slot />
    </RouterLink>
</template>
