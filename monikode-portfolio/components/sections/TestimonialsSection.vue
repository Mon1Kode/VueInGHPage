<template>
  <section
      class="py-20 bg-gray-100 dark:bg-gray-950 overflow-hidden font-sans dark:text-gray-400  dark:shadow-lg"
      @mouseenter="pause = true"
      @mouseleave="pause = false"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
  >
    <div class="max-w-6xl mx-auto text-center mb-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white ">What People Say</h2>
    </div>

    <div class="relative w-full overflow-hidden px-4">
      <div
          ref="scrollContainer"
          class="flex gap-6 whitespace-nowrap"
          :style="{ transform: `translateX(${scrollX}px)` }"
      >
        <TestimonialCard
            v-for="(t, i) in loopedTestimonials"
            :key="i"
            :quote="t.quote"
            :author="t.author"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import TestimonialCard from '~/components/ui/TestimonialCard.vue'

const testimonials = [
  {
    quote: 'A really thoughtful app that helps our neighborhood stay green and connected.',
    author: '– Buurtwerf user',
  },
  {
    quote: 'Managing events with FestPocket is a breeze – intuitive and fast.',
    author: '– Event Organizer',
  },
  {
    quote: 'La Passerelle helped me get support when I needed it most. Truly impactful.',
    author: '– Anonymous',
  },
]

const loopedTestimonials = computed(() => [...testimonials, ...testimonials])
const scrollContainer = ref(null)
const scrollX = ref(0)
const pause = ref(false)
let speed = 0.5
let animationFrame

// Auto-scroll
const animate = () => {
  if (!pause.value && scrollContainer.value) {
    scrollX.value -= speed
    const containerWidth = scrollContainer.value.scrollWidth / 2
    if (Math.abs(scrollX.value) >= containerWidth) {
      scrollX.value = 0
    }
  }
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animationFrame = requestAnimationFrame(animate)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})

// Mobile swipe support
let startX = 0
let currentX = 0

const handleTouchStart = (e) => {
  pause.value = true
  startX = e.touches[0].clientX
}
const handleTouchMove = (e) => {
  currentX = e.touches[0].clientX
  const deltaX = currentX - startX
  scrollX.value += deltaX
  startX = currentX
}
const handleTouchEnd = () => {
  pause.value = false
}
</script>
