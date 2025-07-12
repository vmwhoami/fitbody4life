<template>
  <section class="container mt-30 mx-auto px-6 py-12">
    <div data-depth="0.1" class="flex flex-col-reverse md:flex-row items-center">
      <!-- Text Column -->
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ t("hero.heading") }}
        </h1>
        <p class="italic text-gray-500 mb-6">
          {{ t("hero.quote") }}
        </p>
        <p class="mb-6">
          {{ t("hero.description") }}
        </p>
      </div>

      <!-- Image Column -->
      <!-- Image Column -->
      <div
        id="scene"
        ref="sceneRef"
        data-relative-input="true"
        class="md:w-4/8 flex justify-center mb-8 md:mb-0 w-2/4 relative"
      >
        <!-- Background Overlay -->
        <div class="absolute inset-0 z-0">
          <!-- Background Circles -->
          <div
            class="absolute top-20 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full bg-gray-200 opacity-50"
          ></div>
          <div
            class="absolute top-1/3 left-1/3 w-10 h-10 rounded-full bg-gray-300 opacity-60"
          ></div>
          <div
            class="absolute top-[60%] right-1/4 w-6 h-6 rounded-full bg-gray-300 opacity-60"
          ></div>
          <div
            class="absolute bottom-10 right-5 w-3 h-3 rounded-full bg-gray-400 opacity-40"
          ></div>

          <!-- Vertical Red Bars (Group Time) -->
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
            <div class="w-1.5 h-12 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-10 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-14 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-9 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-11 bg-red-500 rounded-sm"></div>
          </div>
        </div>

        <!-- Foreground Content -->
        <div
          data-depth="0.7"
          data-pointer-events="true"
          v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0 } }"
          class="w-80 h-80 flex items-center justify-center relative z-10"
        >
          <img
            src="@/assets/images/oleafitess1920.png"
            :alt="t('hero.altText')"
            class="h-100 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Parallax from "parallax-js";

const { t } = useI18n();
const sceneRef = ref(1);

onMounted(() => {
  const instance = new Parallax(sceneRef.value, { relativeInput: true });
  instance.friction(0.5, 0.5);
  instance.scalar(1, 1);
});
</script>
