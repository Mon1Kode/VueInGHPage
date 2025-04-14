<template>
  <div
      class="bg-white dark:bg-gray-800 w-[280px] md:w-[320px] p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex-shrink-0"
  >
    <p class="text-gray-700 dark:text-gray-400 italic text-sm leading-relaxed break-words whitespace-normal">
      “{{ quote }}”
    </p>
    <span class="block mt-4 text-sm font-medium text-gray-500 dark:text-gray-200  ">{{ author }}</span>
  </div>
</template>

<script setup>
defineProps({
  quote: String,
  author: String,
})
</script>
