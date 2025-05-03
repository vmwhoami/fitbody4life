<template>
  <IconBase
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :iconColor="iconColor"
    :fill="myFill"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 19l-7-7 7-7"
    />
  </IconBase>
</template>

<script setup>
import IconBase from "./IconBase.vue";
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
    default: "##e3e3e3",
  },
  myFill: {
    type: [Number, String],
    default: "#e3e3e3",
  },
  viewBox: {
    default: "0 0 24 24",
  },
});
</script>
