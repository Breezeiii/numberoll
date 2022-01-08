<template>
  <span
    class="numroll"
    :style="{
      'animation-duration': duration,
      'animation-delay': delay,
      'animation-timing-function': easing
    }"
  >
    <span class="numroll-col" v-for="(item, index) in value" :key="index">
      <span
        :class="[
          'numroll-placeholder',
          isNumber(item) ? 'numroll-placeholder-visible' : ''
        ]"
      >
        {{ item }}
      </span>

      <span
        :class="['numroll-slider', 'numroll-slider-' + item]"
        v-if="isNumber(item)"
      >
        <span
          class="numroll-slider__item"
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
import "numeral/locales/chs";
numeral.locale("chs");

import { defineProps, ref, watchEffect } from "vue";

const props = defineProps({
  modelValue: { type: Number, default: 0 }, // 持续时间

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
  value.value = numeral(props.modelValue).format(props.format).split("");
});
</script>

<style scoped>
@import url("./style.min.css");
</style>
