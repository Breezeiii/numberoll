<template>
  <span
    class="numberoll"
    :style="{
      'animation-duration': duration,
      'animation-delay': delay,
      'animation-timing-function': easing
    }"
  >
    <span class="numberoll-col" v-for="(item, index) in value" :key="index">
      <span
        :class="[
          'numberoll-placeholder',
          isNumber(item) ? 'numberoll-placeholder-visible' : ''
        ]"
      >
        {{ item }}
      </span>

      <span
        :class="['numberoll-slider', 'numberoll-slider-' + item]"
        v-if="isNumber(item)"
      >
        <span
          class="numberoll-slider__item"
          v-for="sliderNum in slider"
          :key="sliderNum"
        >
          {{ sliderNum }}
        </span>
      </span>
    </span>
  </span>
</template>

<script setup>
import numeral from "numeral";

import { defineProps, ref, watchEffect } from "vue";

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  customValue: [String, Number],

  duration: { type: String, default: "0.25s" },
  delay: String,
  easing: { type: String, default: "linear" },

  format: { type: String, default: "0,0.00" }
});

const value = ref(null);
const slider = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function isNumber(num) {
  return /\d/.test(num);
}

watchEffect(() => {
  const valueStr =
    props.customValue || numeral(props.modelValue).format(props.format);

  value.value = valueStr.split("");
});
</script>

<style scoped>
@import url("./lib/style.min.css");
</style>
