<template>
  <section class="container mx-auto px-6 py-12">
    <div class="flex flex-col md:flex-row items-center">
      <!-- Profile Image -->
      <div class="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div class="w-100 h-150 bg-gray-200 rounded shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <img src="@/assets/images/oleaFit.jpeg" alt="Olya Melnic" class="object-cover w-full h-full" />
        </div>
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
// No dynamic imports needed for now.
</script>
