<template>
  <div class="flex flex-col md:flex-row items-center justify-between pb-32">
    <!-- Left Section -->
    <div class="max-w-lg">
      <div class="flex space-x-6 text-gray-600 pb-2">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selectedTab = tab"
          :class="{
            'text-blue-500 border-b-2 border-blue-500': selectedTab === tab,
          }"
        >
          {{ tab }}
        </button>
      </div>
      <h1 class="text-3xl font-bold mt-10">GeeLark for {{ selectedTab }}</h1>
      <p class="text-gray-500 mt-10">1st Antidetect Phone</p>
      <button class="bg-orange-500 text-white px-6 py-2 rounded-lg my-16">
        Download
      </button>
      <p class="text-gray-400 text-sm mt-2">
        System Requirements: {{ requirements[selectedTab] }}
      </p>
    </div>

    <!-- Right Section (Image) -->
    <div class="mt-10 md:mt-0 md:w-1/2 relative">
      <img
        src="https://www.geelark.com/wp-content/uploads/2024/10/GeeLark_app_interface_with_profiles.png"
        alt="GeeLark UI"
        class="rounded-lg shadow-2xl max-w-lg h-auto"
      />
    </div>
  </div>
</template>

<script>
import datas from '../../assets/data/DownloadScreen/download-intro.json'
export default {
  data() {
    return datas.data
  },
}
</script>

<style>
button {
  transition: all 0.3s ease;
}
</style>
