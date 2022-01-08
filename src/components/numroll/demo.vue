<template>
  <div class="numroll-group">
    <numroll class="numroll-1" v-model="num" />
    <br />
    <numroll class="numroll-2" v-model="num" format="$0,0" />
    <br />
    <numroll class="numroll-3" v-model="num" format="0,0$" />
    <br />
    <numroll
      class="numroll-4"
      :class="percent > 0 ? 'color-success' : 'color-danger'"
      v-model="percent"
      format="+0.[0]%"
    />
  </div>

  <div class="numroll-group theme-dark">
    <numroll class="numroll-1" v-model="num" />
    <br />
    <numroll class="numroll-2" v-model="num" format="$0,0" />
    <br />
    <numroll class="numroll-3" v-model="num" format="0,0$" />
    <br />
    <numroll
      class="numroll-4"
      :class="percent > 0 ? 'color-success' : 'color-danger'"
      v-model="percent"
      format="+0.00%"
    />
  </div>
</template>

<script setup>
import numroll from "@/components/numroll/index.vue";

import { ref } from "vue";
const num = ref(0);
const percent = ref(0);
setInterval(() => {
  num.value += 555555 * Math.random() * 100;
  percent.value = Math.random() * (Math.random() > 0.5 ? 1 : -1);
}, 3000);
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
@for $i from 0 through 4 {
  .numroll-#{$i} {
    font-size: 18px + $i * 4;
  }
}
.numroll-group {
  padding: 20px 0;
  background-color: rgba($color: #000000, $alpha: 0.1);
}
.theme-dark {
  background-color: #000;
  color: #fff;
}
</style>