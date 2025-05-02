<template>
    <div class="relative overflow-hidden" :style="{ minHeight: `${h}px` }">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
        <slot v-for="(item, idx) in items"
          :item="item"
          :index="idx"
          :key="idx"></slot>
      </div>
  
      <button @click="prev" class="absolute left-0 top-1/2 p-2 bg-white p-2 rounded-full shadow-md">
        <svg class="w-5 h-5 text-gray-700" fill="none" 
               stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" stroke-width="2"
                  d="M15 19l-7-7 7-7" />
          </svg>
      </button>
      <button @click="next" class="absolute right-0 top-1/2 p-2 bg-white p-2 rounded-full shadow-md">
        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5l7 7-7 7" />
          </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, toRefs } from 'vue'
  
  const props = defineProps({
    items: { type: Array, required: true },
    slideWidth: { type: Number, default: 176 },
    height: { type: Number, default: 96 }, // 24 * 4
  })
  const { items, slideWidth, height: h } = toRefs(props)
  const currentIndex = ref(0)
  
  function next() {
    currentIndex.value = (currentIndex.value + 1) % items.value.length
  }
  function prev() {
    currentIndex.value =
      (currentIndex.value - 1 + items.value.length) % items.value.length
  }
  </script>
  