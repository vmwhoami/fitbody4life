<!-- About.vue -->
<template>
  <section class="container mx-auto px-6 py-6">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- CAROUSEL -->  
      <div class="w-full md:w-1/2">
        <Carousel :items="images" :height="600">
          <template #default="{ item }">
            <div class="w-full h-full mx-2 overflow-hidden rounded-md">
              <img :src="item" class="w-full h-full object-cover" alt="Trainer image" />
            </div>
          </template>
        </Carousel>
      </div>
   
      <!-- About Content -->
      <div class="w-full md:w-1/2">
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
        <a href="https://calendly.com/olenikamv" class="bg-[#DAB16B] hover:bg-opacity-90 text-white font-semibold text-lg py-4 px-8 shadow-lg transitiontext-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-600 transition">
          {{ $t('about.bookButton') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '../components/Carousel.vue';
 
import oleaFit from '~/assets/images/oleaFit.jpeg';
import olea_fit_template from '~/assets/images/olea_fit_template.jpg';
import oleaup from '~/assets/images/oleaup.jpeg';
import right_side_layout from '~/assets/images/right_side_layout.jpg';

// Create a reactive list of images
const images = ref([oleaFit, olea_fit_template, oleaup, right_side_layout]);
</script>