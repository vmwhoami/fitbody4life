<template>
  <div id="faq-accordion">
    <div
      v-for="(item, idx) in faqs"
      :key="idx"
      class="border border-gray-200 rounded-lg mb-2 overflow-hidden"
    >
      <h2>
        <button
          :id="`faq-heading-${idx}`"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-t"
          :aria-expanded="activeIndex === idx"
          :aria-controls="`faq-body-${idx}`"
          @click="toggle(idx)"
        >
          {{ item.question }}
          <svg
            class="w-6 h-6 shrink-0 transition-transform"
            :class="{ 'rotate-180': activeIndex === idx }"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <!-- Full chevron path -->
            <path fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 
                 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 
                 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <div
        :id="`faq-body-${idx}`"
        class="p-5 border-t border-gray-200"
        v-show="activeIndex === idx"
        :aria-labelledby="`faq-heading-${idx}`"
      >
        <p class="text-gray-500">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);

function toggle(idx) {
  activeIndex.value = activeIndex.value === idx ? -1 : idx;
}
</script>
