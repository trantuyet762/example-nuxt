<script setup>
import useCaseData from "../assets/data/homepage-usecase.json";
const useCases = useCaseData.industries;
</script>

<template>
  <section class="bg-gray-900 text-white py-16 text-center w-full">
    <h3 class="text-blue-400 text-lg mb-2">Use cases</h3>
    <h2 class="text-2xl md:text-3xl font-bold">
      Get ahead of the competition in your industry
    </h2>

    <div
      class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
    >
      <div
        v-for="(useCase, index) in useCases"
        :key="index"
        class="flex items-center justify-center bg-white text-gray-900 rounded-lg p-6 shadow-md hover:scale-105 transition-transform"
        :class="{
          'md:col-span-2 ':
            useCases.length % 3 === 2 && index === useCases.length - 1,
          'md:col-span-3 mx-auto':
            useCases.length % 3 === 1 && index === useCases.length - 1,
        }"
      >
        <img :src="useCase.icon" alt="icon" class="w-16 h-16 mr-3" />
        <span class="text-base text-start">{{ useCase.title }}</span>
      </div>
    </div>
  </section>
</template>
