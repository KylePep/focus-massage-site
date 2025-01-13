<script setup>
import { ref, watch } from "vue";
import SectionLayout from "../layouts/SectionLayout.vue";
import { RouterLink } from "vue-router";



const videoPlayerShow = ref(false);
const close = () => {
  videoPlayerShow.value = false;
}

watch(
  () => videoPlayerShow.value,
  () => {
    if (videoPlayerShow.value) {
      document.body.style.overflow = 'hidden';
    } else {
      // @ts-ignore
      document.body.style.overflow = null;
    }
  }
);

</script>


<template>
  <SectionLayout width="xl">

    <div id="screen-span" class=" relative top-auto grid grid-cols-2 gap-2 bg-white">

      <section class="background-image-white relative col-span-2 lg:col-span-1 min-h-96">

        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <button @click="videoPlayerShow = true"
            class="group z-10 bg-blue-600 h-16 w-16 rounded-full hover:h-20 hover:w-20 duration-300 border-4 border-white shadow"><i
              class="mdi mdi-play text-4xl text-white group-hover:text-5xl duration-300"></i>
          </button>
          <div class="absolute group bg-blue-500 h-14 w-14 rounded-full duration-300 shadow animate-ping">
          </div>
        </div>
      </section>

      <section class="flex flex-col justify-center col-span-2 lg:col-span-1 space-y-6 px-8 py-12">
        <div>
          <h1 class="text-2xl font-semibold"><span class="text-blue-500">Positive Effects</span> of </h1>
          <h2 class="text-3xl font-semibold">
            Dialia Registered Massage Therapy
          </h2>
        </div>
        <p class="text-sm lg:text-base font-light text-gray-600">
          The health care profession of Dialia Registered Massage Therapy is far more advanced than typical bodywork or
          relaxation massage. <br><br>

          Registered Massage therapy can be used for the treatment of both acute and chronic conditions. The purpose of
          massage is generally for the treatment of body stress or pain. My services will help you reduce stress,
          relieve
          pain from headaches, reduce pain from injuries. Registered Massage Therapy is a safe and natural health care
          therapy that can help alleviate the discomfort associated with everyday.
        </p>

        <div class="flex flex-col lg:flex-row gap-8 items-start lg:items-center pb-8 lg:pb-0">
          <RouterLink :to="{ name: 'About' }"
            class="bg-blue-500 px-6 lg:px-12 py-2 rounded-sm text-white font-bold hover:bg-blue-800 duration-300">Read
            more</RouterLink>
          <a href="tel:xxx-xxx-xxxx" class="flex items-center">
            <div class="border-2 border-gray-400 rounded-full p-1 shadow">
              <div class="h-10 w-10 bg-blue-500 rounded-full animate-pulse flex items-center justify-center">
                <i class="mdi mdi-phone  text-3xl text-white "></i>
              </div>
            </div>
            <span class="text-3xl text-blue-500 mx-2">234-567-8910</span>
          </a>
        </div>

      </section>
    </div>

    <div v-show="videoPlayerShow" class="fixed inset-0 overflow-y-auto z-50" scroll-region>
      <div v-show="videoPlayerShow" class="fixed inset-0 transform transition-all" @click="close">
        <button v-if="videoPlayerShow" type="button" @click="close"
          class="absolute z-20 mdi mdi-close-thick bg-gray-800 text-white text-xl top-0 right-0 p-2"></button>
        <div class="absolute inset-0 bg-black opacity-75" />
      </div>


      <div v-show="videoPlayerShow" class="relative transform transition-all max-w-4xl sm:mx-auto ">

        <div v-if="videoPlayerShow" class="my-24">
          <video controls src="https://videos.pexels.com/video-files/854399/854399-hd_1280_720_24fps.mp4">
            <source src="https://videos.pexels.com/video-files/854399/854399-hd_1280_720_24fps.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </SectionLayout>

</template>


<style scoped>
.background-image-white {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 80%, rgba(255, 255, 255, 0.25)),
    url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>