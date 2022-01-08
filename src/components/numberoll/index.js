import numeral from "numeral";

import numberoll from "./index.vue";

const name = "numberoll";

const __default = {
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
};

export default {
  install: (app, options = {}) => {
    const defaultFormat = options.defaultFormat || __default.defaultFormat;
    const locale = options.locale || __default.locale;

    numeral.defaultFormat(defaultFormat);

    const LOCAL_NAME = locale?.name || "CustomLocal";
    numeral.register("locale", LOCAL_NAME, Object.assign(locale));
    numeral.locale(LOCAL_NAME);

    app.component(name, numberoll);
  }
};
