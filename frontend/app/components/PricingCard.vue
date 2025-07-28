<template>
  <article class="bg-white  border
                  border-gray-200 shadow-sm 
                  hover:shadow-md transition-all 
                  duration-300 h-full flex flex-col"
                  :class="{
                    'ring-2 ring-amber-300 border-amber-200': highlight,
                    'transform hover:-translate-y-1': !highlight
                  }">
    <div class="p-6 flex-1 flex flex-col">
      <div v-if="highlight" class="mb-2">
        <span class="inline-block px-3 py-1 text-xs 
                    font-semibold text-amber-800 bg-amber-100">
          MOST POPULAR
        </span>
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-3">{{ title }}</h3>
      <p class="text-gray-600 mb-5 flex-1">{{ description }}</p>
      
      <div class="mt-auto">
        <div class="text-gray-900 mb-6">
          <span class="text-4xl font-extrabold">${{ price }}</span>
          <span v-if="price < 1000" class="text-gray-500">/session</span>
        </div>
        
        <button 
          class="w-full font-semibold p-3 transition"
                :class="highlight 
                  ? 'bg-amber-500 text-white hover:bg-amber-600' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'"
          @click="$emit('click')"
          :aria-label="`Select ${title} plan`">
          {{ cta }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  cta: { type: String, default: "Get Started" },
  highlight: { type: Boolean, default: false }
});

defineEmits(['click']);
</script>

<style scoped>
article {
  transition-property: transform, box-shadow;
  transition-duration: 300ms;
}
</style>
