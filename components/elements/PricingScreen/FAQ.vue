<script setup>
import { ref, nextTick } from "vue";
import faqsData from "../../assets/data/PricingScreen/pricing-faqs.json";

const faqs = ref(faqsData.faqs);

const toggleFAQ = async (faq) => {
  faq.open = !faq.open;
  await nextTick();
};
</script>

<template>
  <div class="w-full mx-auto py-20">
    <div class="max-w-3xl mx-auto py-20">
      <h1 class="text-center text-2xl text-blue-600 mb-7 font-bold">FAQs</h1>

      <div class="space-y-2">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="p-4 border relative"
        >
          <button
            class="w-full flex justify-between items-start text-left font-medium text-gray-900"
            @click="toggleFAQ(faq)"
          >
            <span class="text-base text-gray-600 ml-5">{{ faq.question }}</span>
            <svg
              :class="{
                'rotate-180': faq.open,
                'transition-transform duration-300': true,
              }"
              class="w-5 h-5 text-gray-700 absolute left-2 top-4"
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
              <p class="my-4 text-gray-700 text-sm">{{ faq.answer }}</p>
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
