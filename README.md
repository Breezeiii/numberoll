# numberoll

Vue3数字滚动，用css3和vue特性完成动画效果。

### 安装

```js
npm i numberoll --save

import numberoll from "numberoll";
app.use(numberoll);
```

### 全局options

```js
// 默认
const options = {
  defaultFormat: "0,0.00",

  locale: {
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
    <h3>自定义数字格式</h3>
    <numberoll :custom-value="customValue" />
</template>

<script setup>
import { ref } from "vue";

const customValue = ref("123#456$678*9.123.456.789.0");
</script>
```

### 使用示例

```vue
<template>
	<numberoll v-model="num" />
    <br />
	<!-- $货币占位符，固定为$，最终显示请配置全局options -->
    <numberoll v-model="num" format="$0,0" />
    <br />
    <numberoll v-model="num" format="0,0$" />
    <br />
    <numberoll v-model="percent" format="+0.[0]%"/>
</template>

<script setup>
import { ref } from "vue";
const num = ref(0);
const percent = ref(0);

setInterval(() => {
  num.value += 555555 * Math.random() * 100;
  percent.value = Math.random() * (Math.random() > 0.5 ? 1 : -1);
}, 3000);
</script>
```

