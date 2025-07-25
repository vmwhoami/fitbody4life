<template>
  <div class="bg-white p-6 rounded shadow-md text-center">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
        <span class="text-gray-500 text-sm">[Img]</span>
      </div>
    </div>
    <h3 class="font-semibold text-lg mb-2">{{ name }}</h3>
 
    <p class="text-gray-600 text-sm">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  rating: Number,
  text: String,
});
</script>
