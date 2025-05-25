<script setup lang="ts">
import { BsSearch } from "@kalimahapps/vue-icons";
const showSideDrawer = ref(false);
const router = useRouter();
const menuItems = ref([
  { name: "Blog", link: "/blog" },
  { name: "Partners", link: "/partners" },
  { name: "Pricing", link: "/pricing" },
  { name: "Help Center", link: "/help-center" },
  { name: "Download", link: "/download" },
]);

router.afterEach(() => {
  showSideDrawer.value = false;
});
</script>

<template>
  <div class="header py-5 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/img/logo.png" alt="UnionHub Logo" class="w-10 h-10" />
            <span class="text-2xl font-bold text-neutral-700 hidden sm:inline">
              UnionHub
            </span>
          </NuxtLink>
        </div>
        <!-- Navbar Links -->
        <nav class="hidden md:flex space-x-6 text-gray-600">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.link"
            class="hover:text-gray-900 font-sans text-[#4A5568]"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
        <div class="flex items-center space-x-4">
          <!-- Sign Up Button -->
          <button
            class="px-4 py-2 bg-[#00A275] text-white border border-[#00A275] rounded-md hover:bg-white hover:text-[#00A275] transition duration-300"
          >
            Sign up
          </button>
          <!-- Search Icon -->
          <button class="rounded-md">
            <BsSearch class="w-6 h-6 text-gray-600 hover:text-gray-900 ml-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
