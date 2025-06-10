<template>
  <div class=" relative bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-2xl hover:-translate-y-1 hover:z-10 animate-fade-in-down dark:shadow-gray-400">
    <img :src="image" alt="" class="w-full h-40 object-contain rounded-md mb-3"/>
    <h3 class="text-lg font-semibold mb-1 dark:text-white">{{ title }}</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-8">{{ description }}</p>

    <!-- Tech Chips: bottom-left corner -->
    <div class="absolute bottom-3 left-3 flex flex-wrap gap-2">
      <span
          v-for="tech in stack"
          :key="tech"
          class="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: {
    type: String,
    default: '#',
  },
  ctaText: {
    type: String,
    default: 'Coming Soon',
  },
  stack: []
})
</script>
