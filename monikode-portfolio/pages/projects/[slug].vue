<template>
  <div class="min-h-screen px-6 py-20 max-w-5xl mx-auto font-sans text-gray-900 dark:text-white">
    <NuxtLink to="/" class="text-blue-600 dark:text-blue-300 hover:underline text-sm">&larr; Back to home</NuxtLink>

    <!-- Header: Logo + Title -->
    <div class="flex flex-col sm:flex-row items-center gap-6 mt-8 mb-10">
      <img :src="project.logo" alt="App Logo" class="w-16 h-16 rounded-lg shadow-md dark:shadow-slate-500"/>
      <div>
        <h1 class="text-3xl font-bold">{{ project.title }}</h1>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ project.subtitle }}</p>
      </div>
    </div>

    <div v-if="project.stack && project.stack.length" class="flex flex-wrap gap-3 mb-12">
  <span
      v-for="tech in project.stack"
      :key="tech"
      :class="[
  'px-3 py-1 rounded-full text-sm font-medium border',
  techColors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
]"
  >
    {{ tech }}
  </span>
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
            class="w-[200px] md:w-[250px] h-auto rounded-xl shadow-lg shrink-0 object-cover"
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

const techColors = {
  Flutter: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Firebase: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  Figma: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100',
  Riverpod: 'bg-blue-900 text-blue-200 dark:bg-blue-200 dark:text-blue-800',
}
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const slug = useRoute().params.slug
const project = projects.find(p => p.slug === slug)
</script>
