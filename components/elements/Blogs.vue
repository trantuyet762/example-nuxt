<template>
  <div class="container mx-auto py-20">
    <p class="text-xl text-blue-600 text-center mb-7">Blog</p>
    <h2 class="text-center text-3xl font-bold mb-20">
      Learn more about antidetect phones
    </h2>
    <div class="flex justify-center gap-6 mt-6">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="p-4 w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer hover:border-1 hover:rounded-[10px] hover:shadow-xl"
      >
        <img :src="article.image" alt="Article image" class="rounded-lg mb-4" />
        <h1 class="font-bold text-2xl tracking-wide mb-7">
          {{ article.title }}
        </h1>
        <p class="text-gray-600 text-lg">{{ article.description }}</p>
      </div>
    </div>
    <div class="text-center mt-6">
      <button
        class="border border-orange-500 text-orange-500 px-4 py-5 rounded-md transition-all duration-300 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:shadow-lg mt-10"
      >
        More articles
      </button>
    </div>
  </div>
</template>

<script>
import articlesData from "../assets/data/homepage-blogs.json";
export default {
  data() {
    return {
      articles: articlesData.articles,
    };
  },
};
</script>
