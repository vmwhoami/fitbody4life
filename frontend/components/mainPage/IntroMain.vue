<template>
  <section class="container mt-30 mx-auto px-6 py-12">
    <div data-depth="0.2" class="flex flex-col-reverse md:flex-row items-center">
      <!-- Text Column -->
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ t('hero.heading') }}
        </h1>
        <p class="italic text-gray-500 mb-6">
          {{ t('hero.quote') }}
        </p>
        <p class="mb-6">
          {{ t('hero.description') }}
        </p>
       
      </div>

      <!-- Image Column -->
      <div id="scene"
        ref="sceneRef"
        data-relative-input="true"
        class="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div data-depth="0.9"
             data-pointer-events="true"
             v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0 } }"
             class="w-72 h-72 bg-gray-200 flex items-center
                   justify-center rounded shadow-md">
          <img src="@/assets/images/oleaup.jpeg"
               :alt="t('hero.altText')"
               class="object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Parallax from 'parallax-js'

const { t } = useI18n()
const sceneRef = ref(1)

onMounted(() => {
  const instance = new Parallax(sceneRef.value, { relativeInput: true })
  instance.friction(0.1, 0.1)
})
</script>
