<template>
  <nav >
    <div class="max-w-7xl mx-auto flex 
                justify-between items-center">
    
      <!-- Language Switcher Dropdown -->
      <div class="relative">
        <button @click="toggleDropdown"
                type="button"
                class="inline-flex items-center 
                       rounded-md border border-gray-300 
                       shadow-sm px-4 py-2 bg-white text-sm 
                       font-medium text-gray-700 
                       hover:bg-gray-50 focus:outline-none">
          {{ currentLanguage.toUpperCase() }}
          <svg class="ml-2 h-5 w-5"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 20 20"
                troke="currentColor">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7l3-3m0 0l3 3m-3-3v12" />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <transition name="fade">
          <div v-if="dropdownOpen"
               class="origin-top-right absolute right-0 mt-2 w-36
                      rounded-md shadow-lg bg-white ring-1 
                      ring-black ring-opacity-5 focus:outline-none z-10">
            <div class="py-1">
              <button v-for="localeOption in availableLocales"
                      :key="localeOption.code"
                      @click="switchLanguage(localeOption.code)"
                      type="button"
                      class="block w-full text-left px-4 py-2 text-sm 
                             text-gray-700 hover:bg-gray-100">
                {{ localeOption.name }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

// Pull locale data from your i18n setup
const { locales, locale, setLocale } = useI18n();

// We assume your i18n locales are objects with at least "code" and "name" properties.
// For example: [{ code: 'en', name: 'English' }, { code: 'ru', name: 'Russian' }, { code: 'ro', name: 'Romanian' }].
const availableLocales = locales.value;

// The currentLanguage computed property automatically updates when locale.value changes.
const currentLanguage = computed(() => locale.value);

const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function switchLanguage(langCode) {
  setLocale(langCode); // Update the current locale via i18n
  dropdownOpen.value = false;
  console.log("Switched language to", langCode);
}
</script>
 
