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



## [Homepage ](https://breezeiii.github.io/numberoll/#/)

