<template>
  <section class="container mx-auto px-6 py-12">
    <div class="flex flex-col md:flex-row items-center">
      <!-- Profile Image -->
      <!-- <div class="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div class="w-100 h-150 bg-gray-200 rounded shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <img src="@/assets/images/oleaFit.jpeg" alt="Olya Melnic" class="object-cover w-full h-full" />
        </div>
      </div> -->
      



      <div class="relative md:w-2/3 mb-6 md:mb-0">
        <div class="overflow-hidden relative min-h-[7rem]">
          <div class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
            <div v-for="(img, index) in images"
              :key="index"
              class="flex-shrink-0 w-40 h-24 bg-gray-300 
                     flex items-center justify-center rounded-md mx-2">
              <span class="text-gray-500 text-sm"><img :src="img" alt="" class="w-full h-full object-cover" /></span>
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



      <!-- About Content -->
      <div class="md:w-1/2 md:ml-8">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ $t('about.title') }}</h2>

        <!-- Introduction -->
        <p class="text-gray-800 mb-2">
          <strong>{{ $t('about.intro') }} <span class="text-blue-600">Olya Melnic</span></strong>
        </p>
        <p class="text-gray-600 mb-6">{{ $t('about.roles') }}</p>

        <!-- Journey -->
        <p class="text-gray-600 mb-4">{{ $t('about.journey1') }}</p>
        <p class="text-gray-600 mb-4">{{ $t('about.journey2') }}</p>
        <p class="text-gray-600 mb-6">{{ $t('about.journey3') }}</p>

        <!-- Why Train With Me -->
        <h3 class="text-xl font-semibold mb-2">{{ $t('about.whyTrainTitle') }}</h3>
        <ul class="list-disc list-inside text-gray-600 mb-6">
          <li><strong>{{ $t('about.personalized.title') }}</strong> {{ $t('about.personalized.desc') }}</li>
          <li><strong>{{ $t('about.holistic.title') }}</strong> {{ $t('about.holistic.desc') }}</li>
          <li><strong>{{ $t('about.flexible.title') }}</strong> {{ $t('about.flexible.desc') }}</li>
        </ul>

        <!-- Call to Action -->
        <h3 class="text-xl font-semibold mb-2">{{ $t('about.connectTitle') }}</h3>
        <p class="text-gray-600 mb-4">{{ $t('about.connectDesc') }}</p>
        <a href="#" class="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-600 transition">
          {{ $t('about.bookButton') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import oleaFit1 from '~/assets/images/oleaFit.jpeg'
 
// Create a reactive list of images.
// Replace these string placeholders with actual image data or paths as needed.
const images = ref([oleaFit1 ]);

const currentIndex = ref(0);
const slideWidth = 176;
function nextSlide() {
  // If not on the last slide, slide to the next; else, loop back to first.
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}
// No dynamic imports needed for now.
</script>
