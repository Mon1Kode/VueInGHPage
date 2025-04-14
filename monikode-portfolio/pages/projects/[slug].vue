<template>
  <div class="min-h-screen px-6 py-20 max-w-5xl mx-auto font-sans text-gray-900 dark:text-white">
    <NuxtLink to="/" class="text-blue-600 hover:underline text-sm">&larr; Back to home</NuxtLink>

    <!-- Header: Logo + Title -->
    <div class="flex flex-col sm:flex-row items-center gap-6 mt-8 mb-10">
      <img :src="project.logo" alt="App Logo" class="w-16 h-16 rounded-lg shadow-md dark:shadow-slate-500" />
      <div>
        <h1 class="text-3xl font-bold">{{ project.title }}</h1>
        <p class="text-gray-600 dark:text-gray-300 text-sm mt-1">{{ project.subtitle }}</p>
      </div>
    </div>

    <!-- Description -->
    <p class="text-base leading-relaxed mb-10">
      {{ project.description }}
    </p>

    <!-- Screenshot Slider -->
    <div class="overflow-x-auto whitespace-nowrap mb-12">
      <div class="flex gap-4">
        <img
            v-for="(img, i) in project.screenshots"
            :key="i"
            :src="img"
            class="w-[200px] md:w-[250px] h-auto rounded-xl shadow shrink-0 object-cover"
            alt="App Screenshot"
        />
      </div>
    </div>

    <!-- CTA -->
    <div v-if="project.link">
      <a
          :href="project.link"
          target="_blank"
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        {{ project.cta || 'View App' }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

const projectData = {
  buurtwerf: {
    title: 'Buurtwerf',
    subtitle: 'Greenup platform for eco-friendly neighborhoods',
    logo: '/logos/buurtwerf.png',
    description:
        'Buurtwerf helps communities plan and share green actions. Built with Flutter + Firebase to stay fast and simple.',
    screenshots: [
      '/screens/buurtwerf-1.png',
      '/screens/buurtwerf-2.png',
      '/screens/buurtwerf-3.png',
      '/screens/buurtwerf-4.png',
    ],
    link: '',
    cta: 'View on App Store',
  },

  festpocket: {
    title: 'FestPocket',
    subtitle: 'Greenup platform for eco-friendly neighborhoods',
    logo: '/logos/festpocket.png',
    description:
        'Buurtwerf helps communities plan and share green actions. Built with Flutter + Firebase to stay fast and simple.',
    screenshots: [
      '/screens/festpocket-1.png',
      '/screens/festpocket-2.png',
      '/screens/festpocket-3.png',
      '/screens/festpocket-4.png',
    ],
    link: 'https://apps.apple.com/fr/app/festpocket/id1560730734',
    cta: 'View on App Store',
  },

  lapasserelle: {
    title: 'La Passerelle',
    subtitle: 'Greenup platform for eco-friendly neighborhoods',
    logo: '/logos/lapasserelle.png',
    description:
        'La Passerelle helps communities plan and share green actions. Built with Flutter + Firebase to stay fast and simple.',
    screenshots: [
      '/screens/lapasserelle-1.png',
      '/screens/lapasserelle-2.png',
      '/screens/lapasserelle-3.png',
      '/screens/lapasserelle-4.png',
    ],
    link: 'https://apps.apple.com/us/app/la-passerelle-draw-your-fight/id6502902535',
    cta: 'View on App Store',
  },

}

const project = projectData[slug] || null
</script>
