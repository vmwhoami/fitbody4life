<template>
  <section class="container object-contain mt-20 mx-auto px-6 py-12">
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

         <!-- Limited slots – claim yours now! -->

        <section id="booking-calendar" class="py-20 dark:bg-gray-800">
          <div class="container mx-auto flex flex-col px-4">
            <!-- Headline -->
            <h2 class="text-[#DAB16B] text-center text-3xl mb-2">{{ t("hero.readyForChage") }}</h2>
            <p class="text-[#e3e3e3] text-center mb-12">{{ t("hero.selectTimezone") }}</p>
            
            <!-- Calendar Embed -->
             
            <NuxtLink href="https://calendly.com/olenikamv"
                      target="_blank"  
                      class="bg-[#DAB16B] hover:bg-opacity-90 
                             text-white  text-center font-semibold text-lg 
                             py-4 px-8 shadow-lg transition">
              {{ t("hero.buttonBookFreeSession") }}
            </NuxtLink>
           
          </div>
        </section>
      </div>

      <!-- Parallax Image Column -->
      <div id="scene"
           ref="sceneRef"
           data-relative-input="true"
           class="relative overflow-hidden w-full md:w-1/2
                  lg:w-2/5 h-[300px] sm:h-[400px]
                  md:h-[500px] mx-auto">
        <!-- Layer 1: small floating dots -->
        <div data-depth="0.2" class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-10 left-1/4 w-6 h-6 bg-gray-200 rounded-full opacity-40">
          </div>
          <div class="absolute top-[70%] right-1/3 w-4 h-4 bg-gray-300 rounded-full opacity-50"></div>
        </div>

        <!-- Layer 2: big translucent circle -->
        <div data-depth="0.2" class="absolute overflow-hidden inset-0 pointer-events-none z-0">
          <div class="absolute top-1/2 left-1/2 w-[300px]
                      sm:w-[400px] h-[300px] sm:h-[400px]
                      -translate-x-1/2 -translate-y-1/2 rounded-full 
                      bg-gray-200 opacity-50"
                      v-motion="{ initial: { opacity: 100, y: 0 }, enter: { opacity: 1, y: 0 } }">
          </div>
        </div>

        <!-- Layer 3: red bars -->
        <div data-depth="0.9" class="absolute overflow-hidden inset-0 pointer-events-none z-0">
          <div class="absolute bottom-9 translate-x-[300px]
                      box-border size-32 mask-y-from-70%
                      mask-y-to-90% sm:translate-x-80 translate-x-90  flex gap-1" >
            <div class="w-1.5 h-12 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-10 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-14 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-9 bg-red-500 rounded-sm"></div>
            <div class="w-1.5 h-11 bg-red-500 rounded-sm"></div>
          </div>
        </div>

        <!-- Layer 4: dancer image centered -->
        <div data-depth="0.8" 
             data-pointer-events="true"
             class="relative w-full md:w-1/2 
                    lg:w-2/5 h-[300px] sm:h-[400px] md:h-[500px]
                    sm:translate-x-35 translate-x-40  mx-auto overflow-hidden"
                     v-motion="{ initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0 } }">
          <img src="@/assets/images/oleafitess1920.png"
               :alt="t('hero.altText')"
               class="max-h-full max-w-full custom-fade overflow-hidden"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Parallax from "parallax-js";
import { NuxtLink } from "#components";
 
const { t } = useI18n();
const sceneRef = ref(1);

onMounted(() => {
  const instance = new Parallax(sceneRef.value, { relativeInput: true });
  instance.friction(0.5, 0.5);
  instance.scalar(1, 1);
});
</script>

<style scoped>
.custom-fade {
  mask: linear-gradient(to bottom, black 0%, black 70%, transparent 100%, transparent 100%);
  -webkit-mask: linear-gradient(to bottom, black 0%, black 70%, transparent 100%, transparent 100%);
}
</style>