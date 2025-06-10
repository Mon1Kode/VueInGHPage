<script setup lang="ts">
import {designs} from '@/data/design'
import {useRoute} from 'vue-router'

const slug = useRoute().params.slug
const design = designs.find((d => d.slug === slug))
const copiedColor = ref<string | null>(null)
let clearCopyTimeout: ReturnType<typeof setTimeout>

// copy handler
function copyColor(hex: string) {
  navigator.clipboard.writeText(hex).then(() => {
    copiedColor.value = hex
    clearTimeout(clearCopyTimeout)
    clearCopyTimeout = setTimeout(() => {
      copiedColor.value = null
    }, 1500)
  })
}

// Define colors for specific technologies
const techColors: Record<string, string> = {
  Figma: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100',
  "June 2025": 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
  "July 2025": 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  "August 2025": 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  "September 2025": 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  "October 2025": 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  "November 2025": 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
}


// Optional: Add page metadata
// useHead({
//   title: `${design.value.title} - Design`,
//   meta: [
//     { name: 'description', content: design.value.description }
//   ]
// })
</script>

<template>
  <main v-if="design" class="container mx-auto px-4 py-8">
    <div class="min-h-screen px-6 py-20 max-w-5xl mx-auto font-sans text-gray-900 dark:text-white">
      <NuxtLink to="/" class="text-blue-600 dark:text-blue-300 hover:underline text-sm">&larr; Back to home</NuxtLink>

      <!-- Header: Logo + Title -->
      <div class="flex flex-col sm:flex-row items-center gap-6 mt-8 mb-10">
        <img :src="design.cover" alt="App Logo" class="w-auto h-16 shadow-md dark:shadow-slate-500"/>
        <div>
          <h1 class="text-3xl font-bold">{{ design.title }}</h1>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ design.subtitle }}</p>
        </div>
      </div>

      <div v-if="design.tools && design.tools.length" class="flex flex-wrap gap-3 mb-12">
  <span
      v-for="tech in design.tools"
      :key="tech"
      :class="[
  'px-3 py-1 rounded-full text-sm font-medium border',
  techColors[tech] || 'bg-black-100 text-black-800 dark:bg-grey-900 dark:text-grey-100'
]"
  >
    {{ tech }}
  </span>
      </div>

      <!-- Description -->
      <p class="text-base leading-relaxed mb-10">
        {{ design.description }}
      </p>

      <!-- Colors -->
      <div v-if="design.colors?.length" class="flex items-center gap-2 mb-8">
        <span class="font-medium mr-2">Palette:</span>
        <div
            v-for="(hex, i) in design.colors"
            :key="i"
            class="relative group"
        >
          <!-- color swatch button -->
          <button
              @click="copyColor(hex)"
              class="w-6 h-6 rounded-full border focus:outline-none"
              :style="{ backgroundColor: hex }"
          />
          <!-- custom tooltip, hidden until hover -->
          <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-400 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {{ hex }}
          </div>
          <!-- “Copied!” toast -->
          <div
              v-if="copiedColor === hex"
              class="absolute top-8 px-2 py-1 bg-gray-400 text-white text-xs rounded"
          >
            Copied!
          </div>
        </div>
      </div>

      <!-- Reference Images -->
      <div v-if="design.references?.length" class="mb-12">
        <span class="font-medium block mb-2">References & Inspiration:</span>
        <div class="flex gap-4 overflow-x-auto">
          <img
              v-for="(ref, i) in design.references"
              :key="i"
              :src="ref"
              alt="Reference image"
              class="w-[500px] h-auto rounded-lg shadow-sm shrink-0 object-cover"
          />
        </div>
      </div>

      <!-- Screenshot Slider -->
      <span class="font-medium block mb-2">Screenshots:</span>
      <div class="overflow-x-auto whitespace-nowrap mb-12">
        <div class="flex divide-x divide-gray-300">
          <div
              v-for="(img, i) in design.screenshots"
              :key="i"
              class="px-4 shrink-0"
          >
            <img
                :src="img"
                class="w-[200px] md:w-[250px] h-auto rounded-xl shadow-lg object-cover"
                alt="App Screenshot"
            />
          </div>
        </div>
      </div>

      <!--      &lt;!&ndash; CTA &ndash;&gt;-->
      <!--      <div v-if="design.link">-->
      <!--        <a-->
      <!--            :href="design.link"-->
      <!--            target="_blank"-->
      <!--            class="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"-->
      <!--        >-->
      <!--          {{ design.cta || 'View App' }}-->
      <!--        </a>-->
      <!--      </div>-->
    </div>
  </main>
</template>
