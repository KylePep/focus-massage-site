<script setup>
import { computed } from 'vue';

const props = defineProps(['href', 'active']);

const classes = computed(() =>
    props.active
        ? 'border-fm-orange text-start text-base font-medium bg-teal-500 focus:outline-none focus:bg-teal-300 focus:border-fm-pink transition duration-150 ease-in-out'
        : 'block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium hover:bg-teal-500 hover:border-teal-300 focus:outline-none focus:bg-teal-300 focus:border-teal-300 transition duration-150 ease-in-out'
);
</script>

<template>
    <RouterLink :to="{ name: href }" :class="classes" class="block w-full ps-3 pe-4 py-2 border-l-4">
        <slot />
    </RouterLink>
</template>
