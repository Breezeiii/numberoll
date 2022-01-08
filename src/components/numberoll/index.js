import numeral from "numeral";

import numberoll from "./index.vue";

const name = "numberoll";

const __default = {
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
};

export default {
  install: (app, options) => {
    options = Object.assign(__default, options);

    const LOCAL_NAME = options?.name || "CustomLocal";
    numeral.register("locale", LOCAL_NAME, options);
    numeral.locale(LOCAL_NAME);

    app.component(name, numberoll);
  }
};
