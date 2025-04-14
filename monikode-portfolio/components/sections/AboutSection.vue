<template>
  <section id="about" class="py-20 px-6 bg-gray-50 text-center dark:bg-gray-950 dark:shadow-lg">
    <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
        class="max-w-3xl mx-auto text-center py-20"
    >
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-600 mb-4">About Me</h2>
        <p class="text-gray-700 dark:text-gray-100 text-lg mb-8">
          I'm a mobile developer who loves to build impactful applications using modern tools and intuitive design.
        </p>
        <div class="flex justify-center gap-12 flex-wrap">
          <div class="flex flex-col items-center">
            <img src="/flutter-icon.png" alt="Flutter" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 text-sm">Flutter</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/firebase-icon.png" alt="Firebase" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 text-sm">Firebase</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/figma-icon.png" alt="Figma" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 text-sm">Figma</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
