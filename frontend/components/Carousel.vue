<!-- Carousel.vue -->
<template>
  <div class="relative w-full" ref="carouselContainer">
    <!-- Carousel wrapper -->
    <div class="flex items-center w-full">
      <!-- Prev button -->
      <button @click="prev" class="z-10 p-2 bg-white rounded-full shadow-md flex-shrink-0">
        <IconLeftArrow />
      </button>

      <!-- Images container with overflow control -->
      <div class="flex-1 overflow-hidden">
        <div class="flex transition-transform duration-300"
             :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
          <div v-for="(item, idx) in items"
               :key="idx"
               class="flex-shrink-0 flex items-center justify-center"
               :style="{ width: `${slideWidth}px`, height: `${height}px` }">
            <slot :item="item" :index="idx" />
          </div>
        </div>
      </div>

      <!-- Next button -->
      <button @click="next" class="z-10 p-2 bg-white rounded-full shadow-md flex-shrink-0">
        <IconRightArrow />
      </button>
    </div>
    
    <!-- Indicators -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      <button v-for="(_, idx) in items"
              :key="idx"
              @click="currentIndex = idx"
              class="w-3 h-3 rounded-full"
              :class="idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'"/>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted, computed, watch, nextTick } from "vue";
import IconLeftArrow from "~/assets/icons/IconLeftArrow.vue";
import IconRightArrow from "~/assets/icons/IconRightArrow.vue";

const props = defineProps({
  items: { type: Array, required: true },
  height: { type: Number, default: 600 },
});

const { items, height } = toRefs(props);
const currentIndex = ref(0);
const carouselContainer = ref(null);
const slideWidth = ref(400); // Default value, will be updated

// Calculate the available width for slides
const calculateSlideWidth = async () => {
  await nextTick();
  if (!carouselContainer.value) return;
  
  // Get container width, subtract space for buttons (approx 64px for both buttons)
  const containerWidth = carouselContainer.value.clientWidth;
  const buttonSpace = 64; // Adjust this value based on your button sizes
  slideWidth.value = Math.max(200, containerWidth - buttonSpace);
};

// Update slide width on resize
const setupResizeObserver = () => {
  if (typeof window === 'undefined') return;
  
  const resizeObserver = new ResizeObserver(() => {
    calculateSlideWidth();
  });
  
  if (carouselContainer.value) {
    resizeObserver.observe(carouselContainer.value);
  }
  
  return () => {
    if (carouselContainer.value) {
      resizeObserver.unobserve(carouselContainer.value);
    }
  };
};

// Navigation functions
function next() {
  if (items.value.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
}

function prev() {
  if (items.value.length === 0) return;
  currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
}

// Calculate slide width on mount and when container changes
onMounted(() => {
  calculateSlideWidth();
  setupResizeObserver();
});

// Recalculate when items change
watch(() => items.value, () => {
  calculateSlideWidth();
});
</script>