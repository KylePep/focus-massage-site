<script setup>
import { ref } from "vue";
import SectionLayout from "../layouts/SectionLayout.vue";
import SectionTitle from "./SectionTitle.vue";
import MissionIcon from "./Icons/MissionIcon.vue";
import VisionIcon from "./Icons/VisionIcon.vue";
import QualityIcon from "./Icons/QualityIcon.vue";

const activeFrame = ref('mission');

</script>


<template>
  <SectionLayout width="base">

    <div class="space-y-16">
      <SectionTitle>
        Why Focus Massage
        <template #subtitle>
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an cule dicta iriure at
          phaedrum.
        </template>
      </SectionTitle>

      <section class="flex flex-row justify-center border-b-2 border-gray-300 space-x-6 lg:space-x-16 ">
        <button @click="activeFrame = 'mission'" class="group relative lg:px-16">
          <div class="duration-300 pb-10 ">
            <div :class="activeFrame == 'mission' ? 'text-fm-blue' : ''"
              class="h-16 w-16 text-black group-hover:text-fm-blue mx-auto duration-500 mb-4">
              <MissionIcon />
            </div>
            <p class="font-semibold text-xs lg:text-lg">
              My Mission
            </p>
          </div>
          <div :style="activeFrame == 'mission' ? 'width: 100%' : 'width: 0'"
            class="absolute bottom-0 left-0 border-b-2 border-fm-blue duration-500">
          </div>
        </button>

        <button @click="activeFrame = 'values'" class="group relative lg:px-16">
          <div class=" duration-300 pb-10 ">
            <div :class="activeFrame == 'values' ? 'text-fm-blue' : ''"
              class=" h-16 w-16 text-black group-hover:text-fm-blue mx-auto duration-500 mb-4">
              <VisionIcon />
            </div>
            <p class="font-semibold text-xs lg:text-lg">
              My Vision & Values
            </p>
          </div>
          <div :style="activeFrame == 'values' ? 'width: 100%' : 'width: 0'"
            class="absolute bottom-0 left-0 border-b-2 border-fm-blue duration-500"></div>
        </button>

        <button @click="activeFrame = 'quality'" class="group relative lg:px-16">
          <div class=" duration-300 pb-10 ">
            <div :class="activeFrame == 'quality' ? 'text-fm-blue' : ''"
              class=" h-16 w-16 text-black group-hover:text-fm-blue mx-auto duration-500 mb-4">
              <QualityIcon />
            </div>
            <p class="font-semibold text-xs lg:text-lg">
              My Quality
            </p>
          </div>
          <div :style="activeFrame == 'quality' ? 'width: 100%' : 'width: 0'"
            class="absolute bottom-0 left-0 border-b-2 border-fm-blue duration-500"></div>
        </button>

      </section>

      <section class="lg:py-8">
        <transition name="fade" mode="out-in">
          <template v-if="activeFrame === 'mission'" key="mission">
            <div class="grid grid-cols-2 gap-8 min-h-96 ">
              <div class="col-span-2 lg:col-span-1 background-image bg-image-mission min-h-48"></div>
              <div class="col-span-2 lg:col-span-1 space-y-8">
                <h3 class="font-semibold text-2xl text-gray-600">
                  Our core and additional services
                </h3>
                <p class="font-light text-gray-600">
                  Our Vision is to promote a healthy lifestyle. To be a global health care leader by advancing the
                  science and practice of massage therapy. In supporting our members and serving our stakeholders. In
                  supporting our members and serving our stakeholders.
                </p>

                <ul>
                  <li class="text-fm-orange"><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Reducing
                    or
                    eliminating pain</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving joint mobility</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Circulatory problems</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving lymphatic drainage
                  </li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>reducing muscular tension</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Post-surgical rehabilitation
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <template v-else-if="activeFrame === 'values'" key="values">
            <div class="grid grid-cols-2 gap-8 min-h-96">
              <div class="col-span-2 lg:col-span-1 space-y-8">
                <h3 class="font-semibold text-2xl text-gray-600">
                  Our core and additional services
                </h3>
                <p class="font-light text-gray-600">
                  Our Vision is to promote a healthy lifestyle. To be a global health care leader by advancing the
                  science and practice of massage therapy. In supporting our members and serving our stakeholders. In
                  supporting our members and serving our stakeholders.
                </p>
                <ul>
                  <li class="text-fm-orange"><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Reducing
                    or
                    eliminating pain</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving joint mobility</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Circulatory problems</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving lymphatic drainage
                  </li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>reducing muscular tension</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Post-surgical rehabilitation
                  </li>
                </ul>
              </div>
              <div class="col-span-2 lg:col-span-1 background-image bg-image-vision min-h-48"></div>
            </div>
          </template>

          <template v-else-if="activeFrame === 'quality'" key="quality">
            <div class="grid grid-cols-2 gap-8 min-h-96">
              <div class="col-span-2 lg:col-span-1 background-image bg-image-quality min-h-48"></div>
              <div class="col-span-2 lg:col-span-1 space-y-8">
                <h3 class="font-semibold text-2xl text-gray-600">
                  Our core and additional services
                </h3>
                <p class="font-light text-gray-600">
                  Our Vision is to promote a healthy lifestyle. To be a global health care leader by advancing the
                  science and practice of massage therapy. In supporting our members and serving our stakeholders. In
                  supporting our members and serving our stakeholders.
                </p>
                <ul>
                  <li class="text-fm-orange"><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Reducing
                    or
                    eliminating pain</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving joint mobility</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Circulatory problems</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving lymphatic drainage
                  </li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>reducing muscular tension</li>
                  <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Post-surgical rehabilitation
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </transition>
      </section>

    </div>

  </SectionLayout>
</template>


<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}

.bg-image-mission {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 80%, rgba(255, 255, 255, 0.15)),
    url('https://images.unsplash.com/photo-1545463913-5083aa7359a6?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

.bg-image-quality {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 80%, rgba(255, 255, 255, 0.15)),
    url('https://images.unsplash.com/photo-1620051844584-15ac31d5fccd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

.bg-image-vision {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 80%, rgba(255, 255, 255, 0.15)),
    url('https://images.unsplash.com/photo-1570174006382-148305ce4972?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

.background-image {
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 70% 30% 30% 70% / 70% 70% 30% 30% !important;
}
</style>