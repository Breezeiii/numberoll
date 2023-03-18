import numeral from "numeral";

import Numberoll from "./Numberoll/index.vue";

export { Numberoll };

export default function (app, options) {
  app.component("Numberoll", Numberoll);

  const LOCAL_NAME = "custom";

  numeral.register(
    "locale",
    LOCAL_NAME,
    options || {
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
  );
  numeral.locale(LOCAL_NAME);
}
