<template>
  <div class="numberoll-group">
    <h3 class="title">css设置大小、颜色等</h3>
    <numberoll class="numberoll-1" v-model="num" format="0,0.00" />
    <br />
    <numberoll class="numberoll-2" v-model="num" format="$0,0.00" />
    <br />
    <numberoll class="numberoll-3" v-model="num" format="0,0$" />
    <br />
    <numberoll
      class="numberoll-4"
      :class="percent > 0 ? 'color-success' : 'color-danger'"
      v-model="percent"
      format="+0.[0]%"
    />
    <br />
    <numberoll
      class="numberoll-5"
      :class="percent > 0 ? 'color-success' : 'color-danger'"
      v-model="percent"
      format="+0.00%"
    />
  </div>

  <div class="numberoll-group numberoll-custom">
    <h3 class="title">自定义数字格式</h3>
    <numberoll class="numberoll-3" :custom-value="customValue" />
  </div>

  <div>nnn: <nnn v-model="num" /></div>
</template>

<script setup>
// import numberoll from "@lib";
import { Numberoll as nnn } from "/dist/numberoll";
// import  "/dist/style.css";

import { ref } from "vue";
const num = ref(123.456);
const percent = ref(0);
setInterval(() => {
  num.value += 123 * Math.random() * 100;
  percent.value = Math.random() * (Math.random() > 0.5 ? 1 : -1);
}, 3000);

const customValue = ref("123#456$678*9.123.456.789.0");
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
$color-success: #42b983;
$color-danger: #ff0000;
.color-success {
  color: $color-success;
}
.color-danger {
  color: $color-danger;
}
@for $i from 0 through 10 {
  .numberoll-#{$i} {
    font-size: 18px + $i * 10;
  }
}
.numberoll-group {
  padding: 20px 0;
}
.theme-dark {
  background-color: #000;
  color: #fff;
}
</style>
