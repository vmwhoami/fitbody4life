<!-- About.vue -->
<template>
  <section class="container mx-auto px-12 py-12">
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
        <p class="text-gray-600 mb-4">{{ $t('about.roles') }}</p>

        <!-- Specialization -->
        <p class="text-gray-600 mb-6 italic">
          {{ $t('about.specialize') }}
        </p>

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
        <NuxtLink href="https://calendly.com/olenikamv"
                  target="_blank"
                  class="bg-[#DAB16B] hover:bg-opacity-90 
                        text-white font-semibold text-lg py-4 
                        px-8 shadow-lg transition">
          {{ $t('about.bookButton') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '@/components/Carousel.vue';

// Import all images explicitly

import Oleaporvupirvupirvu from '@/assets/images/slider_images/Oleaporvupirvupirvu.jpg'
import audionehand from '@/assets/images/slider_images/audionehand.jpg';
import olea2 from '@/assets/images/slider_images/olea2.jpg';
import olea1 from '@/assets/images/slider_images/olea1.jpeg';
import OLEA3 from '@/assets/images/slider_images/OLEA3.jpg';
import olea4 from '@/assets/images/slider_images/olea4.jpg';
import olea5 from '@/assets/images/slider_images/olea5.jpeg';
import bigstageDance from '@/assets/images/slider_images/bigstageDance.jpg';
import budwiserChinatour from '@/assets/images/slider_images/budwiserChinatour.JPG';
import carshownoarms from '@/assets/images/slider_images/carshownoarms.jpg';
import Olea_brighton_UK from '@/assets/images/slider_images/Olea_brighton_UK.jpg';
import oleafashion from '@/assets/images/slider_images/oleafashion.jpg';
import oleaFashion from '@/assets/images/slider_images/oleaFashion.jpg';
import OleaLopata from '@/assets/images/slider_images/OleaLopata.jpg';
import tvshowdindu from '@/assets/images/slider_images/tvshowdindu.jpg';
import girlsSchooter from '@/assets/images/slider_images/girlsSchooter.jpg';
import alex_wang from '@/assets/images/slider_images/alex_wang.jpg'
import { NuxtLink } from '#components';
// Create reactive image list in desired order
const images = ref([
  Oleaporvupirvupirvu,
  audionehand,
  olea2,
  OLEA3,
  olea4,
  olea5,
  bigstageDance,
  budwiserChinatour,
  carshownoarms,
  Olea_brighton_UK,
  oleafashion,
  oleaFashion,
  OleaLopata,
  tvshowdindu,
  olea1,
  girlsSchooter,
  alex_wang
]);
</script>
