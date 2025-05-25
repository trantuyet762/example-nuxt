<template>
  <div
    class="w-full flex flex-col items-center justify-center text-center mx-auto pb-44"
  >
    <p class="text-blue-600 text-2xl mt-32">Teamwork</p>

    <h1 class="text-4xl font-bold text-gray-900 mt-2 leading-snug">
      Collaborate in a team
    </h1>

    <!-- Tabs điều hướng -->
    <div class="mt-6 flex gap-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'px-5 py-2 rounded-md transition font-medium border ',
          activeTab === index
            ? 'border-blue-600 text-gray-900'
            : 'border-gray-300 text-gray-500 bg-gray-100',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Mô tả -->
    <div class="flex flex-row gap-10 text-left">
      <section class="mt-8 max-w-2xl mx-auto">
        <h2
          class="text-3xl font-semibold text-gray-900 mb-5 max-w-lg tracking-wide"
        >
          Set permissions to profiles and functionalities
        </h2>
        <p class="text-gray-600 mt-2 leading-relaxed max-w-sm">
          Assign specific roles and permissions, and control who can access each
          profile and certain functions for efficient and secure account
          management.
        </p>
        <button
          class="bg-orange-500 text-white px-6 py-3 mt-6 rounded-md shadow-md hover:bg-orange-600 transition"
        >
          Try now
        </button>
      </section>

      <div class="mt-10">
        <img
          src="https://www.geelark.com/wp-content/uploads/2024/11/Frame-50143.png"
          alt="Cloud Phones"
          class="w-full max-w-3xl rounded-lg mix-blend-multiply"
        />
      </div>
    </div>

    <!-- Ảnh minh họa -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import tabsData from "../assets/data/homepage-permisstions.json";

const tabs = ref(tabsData.tabs);
const activeTab = ref(0);
</script>

<style scoped>
/* Nếu cần chỉnh thêm CSS */
</style>
