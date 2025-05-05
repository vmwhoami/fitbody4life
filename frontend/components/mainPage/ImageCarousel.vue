<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="w-[1200px] max-w-full">
      <ul ref="wrapperRef" class="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]">
        <li
          v-for="(person, index) in galleryItems"
          :key="person.name"
          :aria-current="activeItem === index"
          :class="itemClasses(index)"
          @click="setActiveItem(index)"
        >
          <div class="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
            <img
              class="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover grayscale md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
              :src="person.img"
              :alt="person.name"
              width="590"
              height="640"
            />
            <div :class="overlayClasses(index)"></div>
            <div :class="infoClasses(index)">
              <p class="text-sm uppercase text-primary md:text-lg">{{ person.title }}</p>
              <p class="text-lg font-bold md:text-4xl">{{ person.name }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch, onBeforeUnmount } from 'vue'
  // -------------------FIX THIS YOU NEED A LOT OF IMAGES
  import { galleryItems } from '~/api/galleryItems'
  // -----------FIX THIS
  const activeItem = ref(5)
  const wrapperRef = ref(null)
  let timeoutId = null

  function setActiveItem(index) {
    activeItem.value = index
  }

  watch(activeItem, () => {
    const el = wrapperRef.value
    if (!el) return
    if (timeoutId) clearTimeout(timeoutId)

    el.style.setProperty('--transition', '600ms cubic-bezier(0.22, 0.61, 0.36, 1)')

    timeoutId = window.setTimeout(() => {
      el.style.removeProperty('--transition')
    }, 900)
  })

  onBeforeUnmount(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  function itemClasses(index) {
    return [
      'relative cursor-pointer md:w-[8%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current="true"]]:w-[48%]',
      'md:[transition:width_var(--transition,200ms_ease-in)]',
      'md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white',
      'md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]',
      'first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0',
    ]
  }

  function overlayClasses(index) {
    return [
      'inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity',
      activeItem.value === index ? 'md:opacity-25' : 'md:opacity-0',
    ]
  }

  function infoClasses(index) {
    return [
      'left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0',
      activeItem.value === index
        ? 'md:translate-x-0 md:opacity-100'
        : 'md:translate-x-4 md:opacity-0',
    ]
  }
</script>
