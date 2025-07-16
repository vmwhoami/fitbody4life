<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="w-[1200px] max-w-full">
      <!-- <ul  ref="wrapperRef"
        class="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]">
        <li
          v-for="(person, index) in persons"
          :key="person.name"
          @click="setActiveItem(index)"
          :aria-current="activeItem === index"
          :class="[
            'relative cursor-pointer md:w-[8%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current=\'true\']]:w-[48%]',
            'md:[transition:width_var(--transition,200ms_ease-in)]',
            'md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white',
            'md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]',
            'first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0'
          ]">
          <div class="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
            <img
              class="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover grayscale md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
              :src="person.img"
              :alt="person.name"
              width="590"
              height="640"/>
            <div :class="['inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity',
                activeItem === index ? 'md:opacity-25' : 'md:opacity-0']" />
            <div :class="['left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0',
                activeItem === index ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-4 md:opacity-0'
              ]" >
              <p class="text-sm uppercase text-primary md:text-lg">
                {{ person.title }}
              </p>
              <p class="text-lg font-bold md:text-4xl">{{ person.name }}</p>
            </div>
          </div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
 
// Local persons data with imported images - no empty spacers
const persons = [
 
];

// State
const wrapperRef = ref(null);
const activeItem = ref(5);
let timeoutId = null;

/**
 * Sets the active item index
 * @param {number} index - The index to set as active
 */
const setActiveItem = (index) => {
  activeItem.value = index;
};

// Watch for changes to activeItem and apply transition effect
watch(activeItem, () => {
  if (!wrapperRef.value) return;
  
  // Clear any existing timeout
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  
  // Set transition property with smooth easing
  wrapperRef.value.style.setProperty(
    '--transition',
    '600ms cubic-bezier(0.22, 0.61, 0.36, 1)'
  );
  
  // Remove property after animation completes
  timeoutId = setTimeout(() => {
    if (wrapperRef.value) {
      wrapperRef.value.style.removeProperty('--transition');
    }
  }, 900);
});

// Cleanup on component unmount
onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>

<style scoped>
/* Component-specific styles could go here */
</style>