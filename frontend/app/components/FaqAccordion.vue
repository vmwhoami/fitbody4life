// FaqAccordion.vue
<template>
  <div class="bg-[#1a1a1a] rounded shadow-md divide-y divide-gray-700">
    <div v-for="(item, idx) in faqs" :key="idx" class="text-white">
      <button class="w-full text-left px-6 py-5 
                     flex justify-between 
                     items-center hover:bg-[#262626] 
                     transition-all"
        @click="toggle(idx)">
        <span :class="{ 'text-[#e11d48] font-semibold': idx === faqs.length - 1 }"
              class="text-lg font-bold">
          {{ item.question }}
        </span>
        <span class="text-[#e11d48] text-xl transform 
                     transition-transform duration-300"
                     :class="{ 'rotate-45': activeIndex === idx }">
          +
        </span>
      </button>
      <div v-show="activeIndex === idx" class="px-6 pb-5 text-sm text-gray-300">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    faqs: Array,
  })

  const activeIndex = ref(-1)

  function toggle(idx) {activeIndex.value = activeIndex.value === idx ? -1 : idx}
</script>
