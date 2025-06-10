<script setup>
import { designs } from '@/data/design.js'
import ProjectCard from "~/components/ui/ProjectCard.vue";
</script>

<template>
  <section id="projects" class="py-20 px-6 bg-white text-center font-sans  dark:bg-gray-800 dark:shadow-lg">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100  mb-12 animate-fade-in-down">Designs challenges</h2>
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
            v-for="design in designs"
            :key="design.slug"
            :to="`/designs/${design.slug}`"
        >
          <ProjectCard
              :title="design.title"
              :description="design.subtitle"
              :image="design.cover"
              :stack="design.tools"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
