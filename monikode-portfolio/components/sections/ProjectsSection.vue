<script setup>
import { projects } from '@/data/projects'
import ProjectCard from "~/components/ui/ProjectCard.vue";
</script>

<template>
  <section id="projects" class="py-20 px-6 bg-white text-center font-sans  dark:bg-gray-800 dark:shadow-lg">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100  mb-12 animate-fade-in-down">My Projects</h2>
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
            v-for="project in projects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
        >
          <ProjectCard
              :title="project.title"
              :description="project.subtitle"
              :image="project.logo"
              :stack="project.stack"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
