<script setup lang="ts">
import SecondIntroduceProduction from '~/components/elements/SecondIntroduceProduction.vue'
import TrustedReviews from '~/components/elements/TrustedReviews.vue'
import AutomationSection from '~/components/elements/AutomationSection.vue'
import Permisstions from '~/components/elements/Permisstions.vue'
import UseCases from '~/components/elements/UseCases.vue'
import FAQs from '~/components/elements/FAQs.vue'
import Blogs from '~/components/elements/Blogs.vue'
import SimpleCTA from '~/components/elements/SimpleCTA.vue'
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="relative w-full min-h-screen flex flex-col items-center text-center bg-gradient-to-b from-white to-blue-50"
    >
      <!-- Ảnh nền -->
      <div class="absolute inset-0 w-full h-full left-0 right-0">
        <img
          src="https://www.geelark.com/wp-content/uploads/2024/11/资源-1@4x.png"
          alt="Background"
          class="w-full h-full"
        />
      </div>

      <!-- Nội dung chính -->
      <div
        class="container relative z-10 flex flex-col items-center justify-center text-center max-w-4xl"
      >
        <!-- Logo -->
        <img
          src="https://www.geelark.com/wp-content/uploads/2024/11/1st.png"
          alt="Logo"
          class="w-60 h-40 mt-32 mb-5"
        />

        <!-- Tiêu đề -->
        <h1
          class="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight"
        >
          Multiple mobile accounts without restrictions
        </h1>

        <!-- Mô tả -->
        <p class="text-gray-700 text-lg mt-6 max-w-2xl">
          Create, manage and automate accounts in mobile apps with cloud phones
          that have unique parameters.
        </p>

        <!-- Nút CTA -->
        <button
          class="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Try for free
        </button>

        <!-- Ghi chú -->
        <p class="text-gray-500 text-sm mt-2">*No credit card required.</p>
      </div>
      <!-- Ảnh minh họa -->
      <div class="mt-8 w-full">
        <img
          src="https://www.geelark.com/wp-content/uploads/2024/11/Hero-2x.png"
          alt="Hero"
          class="w-full max-w-6xl mx-auto mix-blend-multiply"
        />
      </div>
    </div>
    <SecondIntroduceProduction />
    <ClientOnly>
      <TrustedReviews />
    </ClientOnly>
    <AutomationSection />
    <Permisstions />
    <UseCases />
    <FAQs />
    <Blogs />
    <SimpleCTA />
  </div>
</template>
