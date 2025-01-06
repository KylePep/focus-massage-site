<script setup>
import Categories from "../components/Categories.vue";
import SalesPitch from "../components/SalesPitch.vue";
import Services from "../components/Services.vue";

</script>


<template>

  <div class="space-y-32 my-8">


    <Categories />

    <SalesPitch />

    <Services />
  </div>
</template>


<style>
.background-image {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.9)),
    url('https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.vc-image-1 img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
}
</style>