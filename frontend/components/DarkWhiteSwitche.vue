<template>
  <div class="z-10 inline-grid grid-cols-2 gap-0.5 
          rounded-full bg-gray-950/5 p-0.75 
          text-gray-950 dark:bg-white/10 
          dark:text-white"
    id="headlessui-radiogroup-«R65elb»"
    role="radiogroup">
    
    <span class="rounded-full p-1.5 *:size-7 
                 data-checked:bg-white data-checked:ring
                 data-checked:inset-ring data-checked:ring-gray-950/10
                 data-checked:inset-ring-white/10 sm:p-0
                 dark:data-checked:bg-gray-700 dark:data-checked:text-white
                  dark:data-checked:ring-transparent"
      aria-label="Light theme"
      id="headlessui-radio-«Ram5elb»"
      role="radio"
      aria-checked="true"
      tabindex="0"
      data-headlessui-state="checked"
      data-checked="">
        <IconSon />
    </span>
    <span class="rounded-full p-1.5 *:size-7 data-checked:bg-white
                 data-checked:ring data-checked:inset-ring 
                 data-checked:ring-gray-950/10 data-checked:inset-ring-white/10
                 sm:p-0 dark:data-checked:bg-gray-700 
                 dark:data-checked:text-white 
                 dark:data-checked:ring-transparent"
      aria-label="Dark theme"
      id="headlessui-radio-«Rem5elb»"
      role="radio"
      aria-checked="false"
      tabindex="-1"
      data-headlessui-state="">
        <IconMoon />
    </span>
  </div>
</template>

<script setup>
  import IconSon from '~/assets/icons/IconSon.vue'
  import IconMoon from '~/assets/icons/IconMoon.vue'
</script>
