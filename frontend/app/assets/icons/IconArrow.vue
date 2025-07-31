<template>
  <IconBase
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :iconColor="iconColor"
    :fill="myFill"
  >
    <path
      fill-rule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 
                 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 
                 0 01.02-1.06z"
      clip-rule="evenodd"
    />
  </IconBase>
</template>

<script setup>
  // IconProgramDiet
  import IconBase from './IconBase.vue'
  const props = defineProps({
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: '#000',
    },
    myFill: {
      type: [Number, String],
      default: '#000',
    },
    viewBox: {
      default: '0 0 20 20',
    },
  })
</script>
