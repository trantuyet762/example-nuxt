<script setup lang="ts">
import { onMounted } from 'vue'

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})

useHead({
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
})

onMounted(() => {
  const header = document.querySelector('.header')
  if (header) {
    const headerElement = header as HTMLElement
    const headerHeight = headerElement.offsetHeight
    document.body.style.paddingTop = `${headerHeight}px`
  }
})
</script>
<template>
  <NuxtLayout>
    <div class="min-h-screen">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
