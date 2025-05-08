<template>
  <section class="container mx-auto px-6 py-12 overflow-hidden relative">
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <!-- Carousel Container -->
      <div class="relative md:w-2/3 mb-6 md:mb-0">
        <Carousel :items="images" :height="600">
          <template #default="{ item }">
            <div class="w-full h-full mx-2 overflow-hidden rounded-md">
              <img :src="item" class="w-full h-full object-cover" alt="Trainer image" />
            </div>
          </template>
        </Carousel>

      </div>

      <!-- Text Description -->
      <div class="md:ml-8 md:w-1/3">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">Last Trainer Upload Post.</h2>
        <p class="text-gray-600">
          Exercise with certified personal trainers whether you’re at home or on the road.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import Carousel from '../Carousel.vue';
// Create a reactive list of images.
// Replace these string placeholders with actual image data or paths as needed.
const images = ref([]);

 

// Each slide width in pixels (w-40 = approx 160px + horizontal margin (mx-2 each side) ≈ 16px)
// Adjust this value to match your design exactly.

</script>

