# Numberoll 

```js
npm i Numberoll -S
```

#### 全局引入

```js
import { createApp } from "vue";
import Numberoll from "Numberoll";
import "Numberoll/dist/style.css";

createApp(App).use(Numberoll ,{/* options */});
```

#### options

默认值，文档查看[numeral](http://numeraljs.com/)

```json
{
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
```



#### 局部引入

```javascript
import {Numberoll} from "Numberoll";
import "Numberoll/dist/style.css";

// 引入numeral，修改格式画样式
```



#### Props

```js
const props = defineProps({
  modelValue: { type: Number, default: 0 },
  customValue: [String, Number, Array],

  format: { type: String, default: "0,0" },
  duration: { type: String, default: "0.25s" },
  delay: String,
  easing: { type: String, default: "linear" }
});
```



#### Example

```vue
/**
* 内置numeral格式化插件，文档查看：http://numeraljs.com
*/
<numberoll v-model="num" format="0,0$" />

/**
* custom 自由度极高，可以是：
* 123*123
* 我123|33
* 你fjksdh234938
* [1,2,'我','A']
* 自己选择格式化工具，传递给Numberoll一个custom value，这样数字部分就会有滑动效果啦
*/
<numberoll :custom-value="customValue" />
```



## [Homepage ](https://breezeiii.github.io/numberoll/#/)

