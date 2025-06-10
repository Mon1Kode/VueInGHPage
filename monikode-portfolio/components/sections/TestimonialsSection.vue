<template>
  <section class="py-20 bg-gray-100 dark:bg-gray-950 overflow-hidden font-sans dark:text-gray-400  dark:shadow-lg marquee-container">
    <div class="marquee-track">
      <div v-for="(item, i) in loopedTestimonials" :key="i" class="marquee-item">
        <TestimonialCard :quote="item.quote" :author="item.author" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TestimonialCard from '~/components/ui/TestimonialCard.vue'

const testimonials = [
  {
    quote: 'A really thoughtful app that helps our neighborhood stay green and connected.',
    author: '– Buurtwerf user',
  },
  {
    quote: 'Managing events with FestPocket is a breeze, intuitive and fast.',
    author: '– Raver',
  },
  {
    quote: 'La Passerelle helped me get support when I needed it most. Truly impactful.',
    author: '– Anonymous',
  },
]

const loopedTestimonials = computed(() => [...testimonials, ...testimonials])
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  width: 70%;
  animation: scroll 20s linear infinite;
}

/* **PAUSE** when hovering the container */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  flex: 0 0 calc(100% / 3);
}

/* scroll from 0 → –50% */
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
