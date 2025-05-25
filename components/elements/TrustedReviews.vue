<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import reviewsData from "../assets/data/homepage-trustedreviews.json";
SwiperCore.use([Autoplay]);
const reviews = ref(reviewsData.reviews);
</script>

<template>
  <section class="py-32">
    <div class="w-full mx-auto text-center">
      <p class="text-blue-500 font-medium text-2xl">
        Verified industry feedback
      </p>
      <h2 class="text-5xl font-bold text-gray-900 mt-5">Trusted reviews</h2>
    </div>

    <div class="mt-8 max-w-6xl mx-auto">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000 }"
        :loop="true"
        class="relative"
      >
        <SwiperSlide v-for="(review, index) in reviews" :key="index">
          <div
            class="bg-white p-8 shadow-emerald-50 min-h-96 flex flex-col justify-center text-center rounded-3xl"
          >
            <p class="text-3xl text-gray-700 leading-relaxed">
              {{ review.text }}
            </p>
            <p class="mt-4 text-gray-900 text-2xl">{{ review.author }}</p>
            <p class="text-gray-500 text-base">{{ review.position }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: black !important;
}
</style>
