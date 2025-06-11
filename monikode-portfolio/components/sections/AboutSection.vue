<template>
  <section id="about" class="py-20 px-6 bg-gray-50 text-center dark:bg-gray-950 dark:shadow-lg">
    <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
        class="max-w-3xl mx-auto text-center py-20"
    >
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
        <p class="text-gray-700 dark:text-gray-400 text-lg mb-8 text-left">
          Hi, I’m Victor Delamonica, a mobile developer passionate about creating beautiful and functional applications that make a difference. With years of experience in mobile development, I've worked on various projects that have helped me grow as a developer.
          <br/>
          <br/>
          When I'm not coding, you'll find me exploring new festivals and events in different cities. Music and food are my two favorite things, and I love trying new style of music.
          <br/>
          PS: For my ongoing UX/UI practice, see my <span @click="$emit('scrollTo', 'designs')" class="text-blue-300 dark:text-gray-50 hover:underline cursor-pointer">designs</span> section.
        </p>
        <div class="flex justify-center gap-12 flex-wrap">
          <div class="flex flex-col items-center">
            <img src="/flutter-icon.png" alt="Flutter" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 dark:text-gray-300 text-sm">Flutter</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/firebase-icon.png" alt="Firebase" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 dark:text-gray-300 text-sm">Firebase</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/figma-icon.png" alt="Figma" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 dark:text-gray-300 text-sm">Figma</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/riverpod-icon.png" alt="Riverpod" class="w-14 h-14 object-contain mb-2"/>
            <span class="text-gray-600 dark:text-gray-300 text-sm">Riverpod</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
