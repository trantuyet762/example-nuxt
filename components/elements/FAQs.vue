<script setup>
import { ref, nextTick } from "vue";
import faqsData from "../assets/data/homepage-faqs.json";

const faqs = ref(faqsData.faqs);

const toggleFAQ = async (faq) => {
  faq.open = !faq.open;
  await nextTick();
};
</script>

<template>
  <div class="w-full mx-auto py-20 bg-white">
    <div class="max-w-2xl mx-auto py-20 bg-white">
      <p class="text-center text-xl text-blue-600 mb-7">FAQs</p>
      <h2 class="text-3xl font-semibold text-center mb-6 text-gray-800">
        Things you may want to know before getting started
      </h2>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white p-4 rounded-lg shadow-md border relative"
        >
          <button
            class="w-full flex justify-between items-start text-left font-medium text-gray-900"
            @click="toggleFAQ(faq)"
          >
            <span class="text-lg ml-5">{{ faq.question }}</span>
            <svg
              :class="{
                'rotate-180': faq.open,
                'transition-transform duration-300': true,
              }"
              class="w-5 h-5 text-gray-700 absolute left-2 top-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <transition name="accordion">
            <div v-show="faq.open" class="overflow-hidden">
              <p class="mt-3 text-gray-700 text-base">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
