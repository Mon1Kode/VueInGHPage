<template>
  <main>
    <Default/>
    <div class="opacity-0 animate-fade-in-down">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  </main>
</template>

<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import Default from "~/layouts/default.vue";
</script>
