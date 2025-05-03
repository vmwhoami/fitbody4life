<template>
  <div class="relative overflow-hidden" :style="{ minHeight: `${h}px` }">
    <div
      class="flex transition-transform duration-300"
      :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }" >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex-shrink-0 flex items-center justify-center"
        :style="{ width: `${slideWidth}px`, height: `${h}px` }" >
        <!-- Now you have a container to render each slide -->
        <slot :item="item" :index="idx" />
      </div>
    </div>

    <button
      @click="prev"
      class="absolute left-2 top-1/2 p-2 bg-white rounded-full shadow-md">
      <!-- left arrow -->
      <IconRightArrow  />
    </button>
    <button
      @click="next"
      class="absolute right-2 top-1/2 p-2
             bg-white rounded-full shadow-md">
      <IconLeftArrow  />
    </button>
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

const { items, slideWidth, height: h } = toRefs(props);
const currentIndex = ref(0);

function next() {
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
}
function prev() {
  currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
}
</script>
