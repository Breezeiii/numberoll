<template>
  <span
    class="numberoll"
    :style="{
      'animation-duration': duration,
      'animation-delay': delay,
      'animation-timing-function': easing
    }"
  >
    <span class="numberoll-item" v-for="(item, index) in format" :key="index">
      <span
        :class="{
          'numberoll-placeholder': true,
          'numberoll-visible': isNumber(item)
        }"
      >
        {{ item }}
      </span>

      <span
        v-if="isNumber(item)"
        :class="['numberoll-slider', `numberoll-slider__to-${item}`]"
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

import { computed, defineProps, ref, watchEffect } from "vue";

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  customValue: [String, Number, Array],

  format: { type: String, default: "0,0" },
  duration: { type: String, default: "0.25s" },
  delay: String,
  easing: { type: String, default: "linear" }
});

const slider = Array.from({ length: 10 }, (val, key) => key);

function isNumber(target) {
  return /[0-9]/.test(target);
}

const format = computed(() => {
  return props.customValue || numeral(props.modelValue).format(props.format);
});
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
