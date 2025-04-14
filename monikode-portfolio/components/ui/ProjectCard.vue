<template>
  <div
      class="bg-white dark:bg-gray-600  rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-down"
  >
    <img
        :src="image"
        :alt="title"
        class="w-20 h-20 object-contain mb-4"
    />
    <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 ">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">{{ description }}</p>
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
})
</script>
