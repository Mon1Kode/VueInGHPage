<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-extrabold text-white sm:text-4xl mb-8">{{ project.name }}</h1>
    <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover mb-8">
    <p class="text-gray-600 mb-8">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2 mb-8">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
      >
        {{ tech }}
      </span>
    </div>
    <div class="flex space-x-4">
      <a
        v-if="project.appStore"
        :href="project.appStore"
        class="text-primary hover:text-secondary"
        target="_blank"
      >
        App Store
      </a>
      <a
        v-if="project.github"
        :href="project.github"
        class="text-primary hover:text-secondary"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
