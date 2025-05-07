<template>
  <section class="container mx-auto px-6 py-12 overflow-hidden relative">
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <!-- Carousel Container -->
      <div class="relative md:w-2/3 mb-6 md:mb-0">
        <div class="overflow-hidden relative min-h-[7rem]">
          <div class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
            <div v-for="(img, index) in images"
              :key="index"
              class="flex-shrink-0 w-40 h-24 bg-gray-300 
                     flex items-center justify-center rounded-md mx-2">
              <span class="text-gray-500 text-sm">{{ img }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide" 
          class="absolute left-0 top-1/2 sm:top-1/2 top-[40%]
                 bg-white p-2 rounded-full shadow-md focus:outline-none">
          <svg class="w-5 h-5 text-gray-700" fill="none" 
               stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" stroke-width="2"
                  d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 
                 bg-white p-2 rounded-full shadow-md focus:outline-none">
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5l7 7-7 7" />
          </svg>
        </button>
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

// Define reactive carousel state.
const currentIndex = ref(0);

// Each slide width in pixels (w-40 = approx 160px + horizontal margin (mx-2 each side) ≈ 16px)
// Adjust this value to match your design exactly.
const slideWidth = 176;

function nextSlide() {
  // If not on the last slide, slide to the next; else, loop back to first.
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function prevSlide() {
  // If not at the beginning, slide to the previous; else, loop to the last.
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.value.length - 1;
  }
}
</script>

