<template>
  <IconBase
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :iconColor="iconColor"
    :fill="myFill"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
  </IconBase>
</template>

<script setup>
import IconBase from "./IconBase.vue";
const props = defineProps({
  width: {
    type: [Number, String],
    default: 20,
  },
  height: {
    type: [Number, String],
    default: 20,
  },
  iconColor: {
    type: String,
    default: "#000",
  },
  myFill: {
    type: [Number, String],
    default: "#000",
  },
  viewBox: {
    default: "0 0 24 24",
  },
});
</script>

