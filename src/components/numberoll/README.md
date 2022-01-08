# numberoll

Vue3数字滚动，用css3和vue特性完成动画效果。

### 安装

```js
npm i numberoll --save

import numberoll from "numberoll";
app.use(numberoll);
```

### local

```js
/* options修改格式化全局参数 */
// 默认
const options = { 
  delimiters: {
    thousands: ",",
    decimal: "."
  },
  abbreviations: {
    thousand: "千",
    million: "百万",
    billion: "十亿",
    trillion: "兆"
  },
  ordinal: function () {
    return ".";
  },
  currency: {
    symbol: "¥"
  }
}

app.use(numberoll , options);
```

### props

```js
modelValue: { type: Number, default: 0 }, // v-model
duration: { type: String, default: "0.25s" }, // 持续时间
delay: String, // 等待时间
easing: { type: String, default: "linear" }, // 规定动画的速度曲线
format: { type: String, default: "0,0.00" }, // 格式化
customValue: [String, Number], // 自定义数字格式
```

**format**参考[numeraljs](http://numeraljs.com/)

### customValue示例

组件只负责数字动画效果

```vue
<template>
    <h3 class="title">自定义数字格式</h3>
    <numberoll class="numberoll-3" :custom-value="customValue" />
</template>

<script setup>
import { ref } from "vue";

const customValue = ref("123#456$678*9.123.456.789.0");
</script>
 

```

## Project setup



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
