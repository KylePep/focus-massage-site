<script setup>
import { ref, watch } from "vue";
import SectionLayout from "../layouts/SectionLayout.vue";
import CallOutCard from "./CallOutCard.vue";
import HappyIcon from "./Icons/HappyIcon.vue";
import TreatmentIcon from "./Icons/TreatmentIcon.vue";
import FiveStarIcon from "./Icons/FiveStarIcon.vue";



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

    <div id="screen-span"
      class="background-image-white relative top-auto grid grid-cols-8 gap-2 bg-fm-pink pt-24 lg:pt-32">

      <section class="col-span-8 lg:col-span-3 lg:col-start-2 flex flex-col justify-center space-y-6 px-8 py-12">
        <div>
          <h1 class="text-2xl lg:text-4xl font-semibold">Who I am</h1>
        </div>
        <p class="text-sm lg:text-base font-light text-gray-600">
          My philosophy is to provide individualised services for every client. Would we come to Dialia RMT therapy as
          clients? The profession of Registered Massage Therapy (RMT) has enlarge to become a primary health care
          modality.
        </p>

        <p class="text-sm lg:text-base font-light text-gray-600">
          Massage therapy can be used for the treatment of both acute and chronic conditions. The purpose of massage is
          generally for the treatment of body stress or pain. My services will help you reduce stress, relieve pain
          from headaches, reduce pain from injuries. Registered Massage Therapy is a safe and natural health care
          therapy that can help alleviate the discomfort associated with everyday. To book an appointment, please call
          us at:
        </p>

        <div class="flex flex-col lg:flex-row gap-8 items-start lg:items-center pb-8 lg:pb-0">
          <a href="tel:xxx-xxx-xxxx" class="flex items-center">
            <div class="border-2 border-fm-orange rounded-full p-1 shadow">
              <div class="h-10 w-10 bg-fm-orange rounded-full animate-pulse flex items-center justify-center">
                <i class="mdi mdi-phone  text-3xl text-white "></i>
              </div>
            </div>
            <span class="text-3xl text-fm-orange mx-2">234-567-8910</span>
          </a>
        </div>

      </section>

      <section class="image-wrapper col-span-8 lg:col-span-3 min-h-96 mx-4 lg:mx-0">
        <div class="background-image vc-image-1 relative h-full">
          <div class=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <button @click="videoPlayerShow = true"
              class="group z-10 bg-fm-teal h-16 w-16 rounded-full hover:h-20 hover:w-20 duration-300 border-4 border-white shadow"><i
                class="mdi mdi-play text-4xl text-white group-hover:text-5xl duration-300"></i>
            </button>
            <div class="absolute group bg-fm-teal h-14 w-14 rounded-full duration-300 shadow animate-ping">
            </div>
          </div>
        </div>
      </section>

      <section
        class="col-span-8 lg:col-span-6 lg:col-start-2 flex flex-col lg:flex-row justify-around space-y-8 lg:space-y-0 mt-16 mb-32">
        <CallOutCard>
          <template #icon>
            <HappyIcon />
          </template>
          <template #title>Happy Clients</template>
          <template #value>356</template>
        </CallOutCard>
        <CallOutCard>
          <template #icon>
            <TreatmentIcon />
          </template>
          <template #title>Treatments</template>
          <template #value>1000</template>
        </CallOutCard>
        <CallOutCard>
          <template #icon>
            <FiveStarIcon />
          </template>
          <template #title>5 Star Reviews</template>
          <template #value>350</template>
        </CallOutCard>
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
.background-image {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 80%, rgba(255, 255, 255, 0.25)),
    url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.background-image-white {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.9)),
    url('https://img.freepik.com/free-vector/cutout-purple-blue_78370-131.jpg');
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-fm-orange));
  opacity: 0.25;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  /* Match the image's border-radius */
  z-index: 0;
}

.vc-image-1 {
  border-radius: 70% 30% 30% 70% / 70% 70% 30% 30% !important;
}
</style>