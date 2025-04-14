<script setup>
import ProjectCard from '~/components/ui/ProjectCard.vue'
const projects = [
  {
    slug: 'buurtwerf',
    title: 'Buurtwerf',
    description: 'A greenup platform to support eco-friendly initiatives.',
    image: '/logos/buurtwerf.png',
  },
  {
    slug: 'festpocket',
    title: 'FestPocket',
    description: 'Event and ticket management.',
    image: '/logos/festpocket.png',
  },
  {
    slug: 'lapasserelle',
    title: 'La Passerelle',
    description: 'Social support network.',
    image: '/logos/lapasserelle.png',
  },
]
</script>

<template>
  <section id="projects" class="py-20 px-6 bg-white text-center font-sans  dark:bg-gray-800 dark:shadow-lg">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-600  mb-12 animate-fade-in-down">My Projects</h2>
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
            v-for="project in projects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="block"
        >
          <ProjectCard
              :title="project.title"
              :description="project.description"
              :image="project.image"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
