<template>
    <div class="flex gap-2">
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="switchLocale(locale.code)"
        :class="{
          'bg-blue-600 text-white': locale.code === currentLocale,
          'bg-gray-200 text-black': locale.code !== currentLocale
        }"
        class="px-4 py-2 rounded"
      >
        {{ locale.name }}
      </button>
    </div>
  </template>
  
  <script setup>
  const { locales, locale, setLocale } = useI18n();
  
  const availableLocales = locales.value;
  const currentLocale = locale.value;
  
  function switchLocale(code) {
    setLocale(code);
  }
  </script>
  