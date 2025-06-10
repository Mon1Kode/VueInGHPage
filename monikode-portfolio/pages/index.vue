<template>
  <main class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <Default/>
    <div class="opacity-0 animate-fade-in-down">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <DesignSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  </main>
</template>

<script setup>
import Default from "~/layouts/default.vue";
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import DesignSection from "~/components/sections/DesignSection.vue";
</script>
