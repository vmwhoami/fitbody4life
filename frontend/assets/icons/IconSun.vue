<template>
  <IconBase
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :iconColor="iconColor"
    :fill="myFill"
  >
    <circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle>
    <path d="M14 8.5V6.5" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M19.5 14L21.5 14" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M14 21.5V19.5" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M6.5 14L8.5 14" stroke="currentColor" stroke-linecap="round"></path>
    <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" stroke-linecap="round"></path>
  </IconBase>
</template>

<script setup>
  import IconBase from './IconBase.vue'
  const props = defineProps({
    width: {
      type: [Number, String],
      default: 115,
    },
    height: {
      type: [Number, String],
      default: 40,
    },
    iconColor: {
      type: String,
      default: '##e3e3e3',
    },
    myFill: {
      type: [Number, String],
      default: '#e3e3e3',
    },
    viewBox: {
      default: '0 0 28 28',
    },
  })
</script>
