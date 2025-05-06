<template>
  <div class="relative" :style="{ minHeight: `${he}px` }">
    <!-- 1) New flex wrapper for arrows + track -->
    <div class="flex items-center">
      <!-- Prev button on the left -->
      <button @click="prev" class="p-2 bg-white rounded-full shadow-md">
        <IconRightArrow />
      </button>

      <!-- Your sliding track -->
      <div class="flex transition-transform duration-300 flex-1"
           :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }" >
        <div v-for="(item, idx) in items"
             :key="idx"
             class="flex-shrink-0 flex items-center justify-center"
             :style="{ width: `${slideWidth}px`, height: `${he}px` }">
            <slot :item="item" :index="idx" />
        </div>
      </div>

      <!-- Next button on the right -->
      <button @click="next" class="p-2 bg-white rounded-full shadow-md">
        <IconLeftArrow />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import IconLeftArrow from "~/assets/icons/IconLeftArrow.vue";
import IconRightArrow from "~/assets/icons/IconRightArrow.vue";

const props = defineProps({
  items: { type: Array, required: true },
  slideWidth: { type: Number, default: 400 },
  height: { type: Number, default: 600 },
});

function next() {
    if (items.value.length === 0) return;
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
}
function prev() {
    if (items.value.length === 0) return;
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
}

const { items, slideWidth, height: he } = toRefs(props);
const currentIndex = ref(0);

</script>
