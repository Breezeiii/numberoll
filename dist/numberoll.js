import { computed as j, openBlock as k, createElementBlock as S, normalizeStyle as C, Fragment as z, renderList as R, unref as A, createElementVNode as D, normalizeClass as V, toDisplayString as I, createCommentVNode as G } from "vue";
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $ = {}, K = {
  get exports() {
    return $;
  },
  set exports(b) {
    $ = b;
  }
};
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(b) {
  (function(n, f) {
    b.exports ? b.exports = f() : n.numeral = f();
  })(Z, function() {
    var n, f, B = "2.0.6", p = {}, x = {}, F = {
      currentLocale: "en",
      zeroFormat: null,
      nullFormat: null,
      defaultFormat: "0,0",
      scalePercentBy100: !0
    }, u = {
      currentLocale: F.currentLocale,
      zeroFormat: F.zeroFormat,
      nullFormat: F.nullFormat,
      defaultFormat: F.defaultFormat,
      scalePercentBy100: F.scalePercentBy100
    };
    function T(e, r) {
      this._input = e, this._value = r;
    }
    return n = function(e) {
      var r, l, i, t;
      if (n.isNumeral(e))
        r = e.value();
      else if (e === 0 || typeof e > "u")
        r = 0;
      else if (e === null || f.isNaN(e))
        r = null;
      else if (typeof e == "string")
        if (u.zeroFormat && e === u.zeroFormat)
          r = 0;
        else if (u.nullFormat && e === u.nullFormat || !e.replace(/[^0-9]+/g, "").length)
          r = null;
        else {
          for (l in p)
            if (t = typeof p[l].regexps.unformat == "function" ? p[l].regexps.unformat() : p[l].regexps.unformat, t && e.match(t)) {
              i = p[l].unformat;
              break;
            }
          i = i || n._.stringToNumber, r = i(e);
        }
      else
        r = Number(e) || null;
      return new T(e, r);
    }, n.version = B, n.isNumeral = function(e) {
      return e instanceof T;
    }, n._ = f = {
      // formats numbers separators, decimals places, signs, abbreviations
      numberToFormat: function(e, r, l) {
        var i = x[n.options.currentLocale], t = !1, o = !1, a = 0, s = "", m = 1e12, c = 1e9, h = 1e6, v = 1e3, g = "", M = !1, _, N, d, y, E, L, w;
        if (e = e || 0, N = Math.abs(e), n._.includes(r, "(") ? (t = !0, r = r.replace(/[\(|\)]/g, "")) : (n._.includes(r, "+") || n._.includes(r, "-")) && (E = n._.includes(r, "+") ? r.indexOf("+") : e < 0 ? r.indexOf("-") : -1, r = r.replace(/[\+|\-]/g, "")), n._.includes(r, "a") && (_ = r.match(/a(k|m|b|t)?/), _ = _ ? _[1] : !1, n._.includes(r, " a") && (s = " "), r = r.replace(new RegExp(s + "a[kmbt]?"), ""), N >= m && !_ || _ === "t" ? (s += i.abbreviations.trillion, e = e / m) : N < m && N >= c && !_ || _ === "b" ? (s += i.abbreviations.billion, e = e / c) : N < c && N >= h && !_ || _ === "m" ? (s += i.abbreviations.million, e = e / h) : (N < h && N >= v && !_ || _ === "k") && (s += i.abbreviations.thousand, e = e / v)), n._.includes(r, "[.]") && (o = !0, r = r.replace("[.]", ".")), d = e.toString().split(".")[0], y = r.split(".")[1], L = r.indexOf(","), a = (r.split(".")[0].split(",")[0].match(/0/g) || []).length, y ? (n._.includes(y, "[") ? (y = y.replace("]", ""), y = y.split("["), g = n._.toFixed(e, y[0].length + y[1].length, l, y[1].length)) : g = n._.toFixed(e, y.length, l), d = g.split(".")[0], n._.includes(g, ".") ? g = i.delimiters.decimal + g.split(".")[1] : g = "", o && Number(g.slice(1)) === 0 && (g = "")) : d = n._.toFixed(e, 0, l), s && !_ && Number(d) >= 1e3 && s !== i.abbreviations.trillion)
          switch (d = String(Number(d) / 1e3), s) {
            case i.abbreviations.thousand:
              s = i.abbreviations.million;
              break;
            case i.abbreviations.million:
              s = i.abbreviations.billion;
              break;
            case i.abbreviations.billion:
              s = i.abbreviations.trillion;
              break;
          }
        if (n._.includes(d, "-") && (d = d.slice(1), M = !0), d.length < a)
          for (var P = a - d.length; P > 0; P--)
            d = "0" + d;
        return L > -1 && (d = d.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + i.delimiters.thousands)), r.indexOf(".") === 0 && (d = ""), w = d + g + (s || ""), t ? w = (t && M ? "(" : "") + w + (t && M ? ")" : "") : E >= 0 ? w = E === 0 ? (M ? "-" : "+") + w : w + (M ? "-" : "+") : M && (w = "-" + w), w;
      },
      // unformats numbers separators, decimals places, signs, abbreviations
      stringToNumber: function(e) {
        var r = x[u.currentLocale], l = e, i = {
          thousand: 3,
          million: 6,
          billion: 9,
          trillion: 12
        }, t, o, a;
        if (u.zeroFormat && e === u.zeroFormat)
          o = 0;
        else if (u.nullFormat && e === u.nullFormat || !e.replace(/[^0-9]+/g, "").length)
          o = null;
        else {
          o = 1, r.delimiters.decimal !== "." && (e = e.replace(/\./g, "").replace(r.delimiters.decimal, "."));
          for (t in i)
            if (a = new RegExp("[^a-zA-Z]" + r.abbreviations[t] + "(?:\\)|(\\" + r.currency.symbol + ")?(?:\\))?)?$"), l.match(a)) {
              o *= Math.pow(10, i[t]);
              break;
            }
          o *= (e.split("-").length + Math.min(e.split("(").length - 1, e.split(")").length - 1)) % 2 ? 1 : -1, e = e.replace(/[^0-9\.]+/g, ""), o *= Number(e);
        }
        return o;
      },
      isNaN: function(e) {
        return typeof e == "number" && isNaN(e);
      },
      includes: function(e, r) {
        return e.indexOf(r) !== -1;
      },
      insert: function(e, r, l) {
        return e.slice(0, l) + r + e.slice(l);
      },
      reduce: function(e, r) {
        if (this === null)
          throw new TypeError("Array.prototype.reduce called on null or undefined");
        if (typeof r != "function")
          throw new TypeError(r + " is not a function");
        var l = Object(e), i = l.length >>> 0, t = 0, o;
        if (arguments.length === 3)
          o = arguments[2];
        else {
          for (; t < i && !(t in l); )
            t++;
          if (t >= i)
            throw new TypeError("Reduce of empty array with no initial value");
          o = l[t++];
        }
        for (; t < i; t++)
          t in l && (o = r(o, l[t], t, l));
        return o;
      },
      /**
       * Computes the multiplier necessary to make x >= 1,
       * effectively eliminating miscalculations caused by
       * finite precision.
       */
      multiplier: function(e) {
        var r = e.toString().split(".");
        return r.length < 2 ? 1 : Math.pow(10, r[1].length);
      },
      /**
       * Given a variable number of arguments, returns the maximum
       * multiplier that must be used to normalize an operation involving
       * all of them.
       */
      correctionFactor: function() {
        var e = Array.prototype.slice.call(arguments);
        return e.reduce(function(r, l) {
          var i = f.multiplier(l);
          return r > i ? r : i;
        }, 1);
      },
      /**
       * Implementation of toFixed() that treats floats more like decimals
       *
       * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
       * problems for accounting- and finance-related software.
       */
      toFixed: function(e, r, l, i) {
        var t = e.toString().split("."), o = r - (i || 0), a, s, m, c;
        return t.length === 2 ? a = Math.min(Math.max(t[1].length, o), r) : a = o, m = Math.pow(10, a), c = (l(e + "e+" + a) / m).toFixed(a), i > r - a && (s = new RegExp("\\.?0{1," + (i - (r - a)) + "}$"), c = c.replace(s, "")), c;
      }
    }, n.options = u, n.formats = p, n.locales = x, n.locale = function(e) {
      return e && (u.currentLocale = e.toLowerCase()), u.currentLocale;
    }, n.localeData = function(e) {
      if (!e)
        return x[u.currentLocale];
      if (e = e.toLowerCase(), !x[e])
        throw new Error("Unknown locale : " + e);
      return x[e];
    }, n.reset = function() {
      for (var e in F)
        u[e] = F[e];
    }, n.zeroFormat = function(e) {
      u.zeroFormat = typeof e == "string" ? e : null;
    }, n.nullFormat = function(e) {
      u.nullFormat = typeof e == "string" ? e : null;
    }, n.defaultFormat = function(e) {
      u.defaultFormat = typeof e == "string" ? e : "0.0";
    }, n.register = function(e, r, l) {
      if (r = r.toLowerCase(), this[e + "s"][r])
        throw new TypeError(r + " " + e + " already registered.");
      return this[e + "s"][r] = l, l;
    }, n.validate = function(e, r) {
      var l, i, t, o, a, s, m, c;
      if (typeof e != "string" && (e += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", e)), e = e.trim(), e.match(/^\d+$/))
        return !0;
      if (e === "")
        return !1;
      try {
        m = n.localeData(r);
      } catch {
        m = n.localeData(n.locale());
      }
      return t = m.currency.symbol, a = m.abbreviations, l = m.delimiters.decimal, m.delimiters.thousands === "." ? i = "\\." : i = m.delimiters.thousands, c = e.match(/^[^\d]+/), c !== null && (e = e.substr(1), c[0] !== t) || (c = e.match(/[^\d]+$/), c !== null && (e = e.slice(0, -1), c[0] !== a.thousand && c[0] !== a.million && c[0] !== a.billion && c[0] !== a.trillion)) ? !1 : (s = new RegExp(i + "{2}"), e.match(/[^\d.,]/g) ? !1 : (o = e.split(l), o.length > 2 ? !1 : o.length < 2 ? !!o[0].match(/^\d+.*\d$/) && !o[0].match(s) : o[0].length === 1 ? !!o[0].match(/^\d+$/) && !o[0].match(s) && !!o[1].match(/^\d+$/) : !!o[0].match(/^\d+.*\d$/) && !o[0].match(s) && !!o[1].match(/^\d+$/)));
    }, n.fn = T.prototype = {
      clone: function() {
        return n(this);
      },
      format: function(e, r) {
        var l = this._value, i = e || u.defaultFormat, t, o, a;
        if (r = r || Math.round, l === 0 && u.zeroFormat !== null)
          o = u.zeroFormat;
        else if (l === null && u.nullFormat !== null)
          o = u.nullFormat;
        else {
          for (t in p)
            if (i.match(p[t].regexps.format)) {
              a = p[t].format;
              break;
            }
          a = a || n._.numberToFormat, o = a(l, i, r);
        }
        return o;
      },
      value: function() {
        return this._value;
      },
      input: function() {
        return this._input;
      },
      set: function(e) {
        return this._value = Number(e), this;
      },
      add: function(e) {
        var r = f.correctionFactor.call(null, this._value, e);
        function l(i, t, o, a) {
          return i + Math.round(r * t);
        }
        return this._value = f.reduce([this._value, e], l, 0) / r, this;
      },
      subtract: function(e) {
        var r = f.correctionFactor.call(null, this._value, e);
        function l(i, t, o, a) {
          return i - Math.round(r * t);
        }
        return this._value = f.reduce([e], l, Math.round(this._value * r)) / r, this;
      },
      multiply: function(e) {
        function r(l, i, t, o) {
          var a = f.correctionFactor(l, i);
          return Math.round(l * a) * Math.round(i * a) / Math.round(a * a);
        }
        return this._value = f.reduce([this._value, e], r, 1), this;
      },
      divide: function(e) {
        function r(l, i, t, o) {
          var a = f.correctionFactor(l, i);
          return Math.round(l * a) / Math.round(i * a);
        }
        return this._value = f.reduce([this._value, e], r), this;
      },
      difference: function(e) {
        return Math.abs(n(this._value).subtract(e).value());
      }
    }, n.register("locale", "en", {
      delimiters: {
        thousands: ",",
        decimal: "."
      },
      abbreviations: {
        thousand: "k",
        million: "m",
        billion: "b",
        trillion: "t"
      },
      ordinal: function(e) {
        var r = e % 10;
        return ~~(e % 100 / 10) === 1 ? "th" : r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th";
      },
      currency: {
        symbol: "$"
      }
    }), function() {
      n.register("format", "bps", {
        regexps: {
          format: /(BPS)/,
          unformat: /(BPS)/
        },
        format: function(e, r, l) {
          var i = n._.includes(r, " BPS") ? " " : "", t;
          return e = e * 1e4, r = r.replace(/\s?BPS/, ""), t = n._.numberToFormat(e, r, l), n._.includes(t, ")") ? (t = t.split(""), t.splice(-1, 0, i + "BPS"), t = t.join("")) : t = t + i + "BPS", t;
        },
        unformat: function(e) {
          return +(n._.stringToNumber(e) * 1e-4).toFixed(15);
        }
      });
    }(), function() {
      var e = {
        base: 1e3,
        suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      }, r = {
        base: 1024,
        suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
      }, l = e.suffixes.concat(r.suffixes.filter(function(t) {
        return e.suffixes.indexOf(t) < 0;
      })), i = l.join("|");
      i = "(" + i.replace("B", "B(?!PS)") + ")", n.register("format", "bytes", {
        regexps: {
          format: /([0\s]i?b)/,
          unformat: new RegExp(i)
        },
        format: function(t, o, a) {
          var s, m = n._.includes(o, "ib") ? r : e, c = n._.includes(o, " b") || n._.includes(o, " ib") ? " " : "", h, v, g;
          for (o = o.replace(/\s?i?b/, ""), h = 0; h <= m.suffixes.length; h++)
            if (v = Math.pow(m.base, h), g = Math.pow(m.base, h + 1), t === null || t === 0 || t >= v && t < g) {
              c += m.suffixes[h], v > 0 && (t = t / v);
              break;
            }
          return s = n._.numberToFormat(t, o, a), s + c;
        },
        unformat: function(t) {
          var o = n._.stringToNumber(t), a, s;
          if (o) {
            for (a = e.suffixes.length - 1; a >= 0; a--) {
              if (n._.includes(t, e.suffixes[a])) {
                s = Math.pow(e.base, a);
                break;
              }
              if (n._.includes(t, r.suffixes[a])) {
                s = Math.pow(r.base, a);
                break;
              }
            }
            o *= s || 1;
          }
          return o;
        }
      });
    }(), function() {
      n.register("format", "currency", {
        regexps: {
          format: /(\$)/
        },
        format: function(e, r, l) {
          var i = n.locales[n.options.currentLocale], t = {
            before: r.match(/^([\+|\-|\(|\s|\$]*)/)[0],
            after: r.match(/([\+|\-|\)|\s|\$]*)$/)[0]
          }, o, a, s;
          for (r = r.replace(/\s?\$\s?/, ""), o = n._.numberToFormat(e, r, l), e >= 0 ? (t.before = t.before.replace(/[\-\(]/, ""), t.after = t.after.replace(/[\-\)]/, "")) : e < 0 && !n._.includes(t.before, "-") && !n._.includes(t.before, "(") && (t.before = "-" + t.before), s = 0; s < t.before.length; s++)
            switch (a = t.before[s], a) {
              case "$":
                o = n._.insert(o, i.currency.symbol, s);
                break;
              case " ":
                o = n._.insert(o, " ", s + i.currency.symbol.length - 1);
                break;
            }
          for (s = t.after.length - 1; s >= 0; s--)
            switch (a = t.after[s], a) {
              case "$":
                o = s === t.after.length - 1 ? o + i.currency.symbol : n._.insert(o, i.currency.symbol, -(t.after.length - (1 + s)));
                break;
              case " ":
                o = s === t.after.length - 1 ? o + " " : n._.insert(o, " ", -(t.after.length - (1 + s) + i.currency.symbol.length - 1));
                break;
            }
          return o;
        }
      });
    }(), function() {
      n.register("format", "exponential", {
        regexps: {
          format: /(e\+|e-)/,
          unformat: /(e\+|e-)/
        },
        format: function(e, r, l) {
          var i, t = typeof e == "number" && !n._.isNaN(e) ? e.toExponential() : "0e+0", o = t.split("e");
          return r = r.replace(/e[\+|\-]{1}0/, ""), i = n._.numberToFormat(Number(o[0]), r, l), i + "e" + o[1];
        },
        unformat: function(e) {
          var r = n._.includes(e, "e+") ? e.split("e+") : e.split("e-"), l = Number(r[0]), i = Number(r[1]);
          i = n._.includes(e, "e-") ? i *= -1 : i;
          function t(o, a, s, m) {
            var c = n._.correctionFactor(o, a), h = o * c * (a * c) / (c * c);
            return h;
          }
          return n._.reduce([l, Math.pow(10, i)], t, 1);
        }
      });
    }(), function() {
      n.register("format", "ordinal", {
        regexps: {
          format: /(o)/
        },
        format: function(e, r, l) {
          var i = n.locales[n.options.currentLocale], t, o = n._.includes(r, " o") ? " " : "";
          return r = r.replace(/\s?o/, ""), o += i.ordinal(e), t = n._.numberToFormat(e, r, l), t + o;
        }
      });
    }(), function() {
      n.register("format", "percentage", {
        regexps: {
          format: /(%)/,
          unformat: /(%)/
        },
        format: function(e, r, l) {
          var i = n._.includes(r, " %") ? " " : "", t;
          return n.options.scalePercentBy100 && (e = e * 100), r = r.replace(/\s?\%/, ""), t = n._.numberToFormat(e, r, l), n._.includes(t, ")") ? (t = t.split(""), t.splice(-1, 0, i + "%"), t = t.join("")) : t = t + i + "%", t;
        },
        unformat: function(e) {
          var r = n._.stringToNumber(e);
          return n.options.scalePercentBy100 ? r * 0.01 : r;
        }
      });
    }(), function() {
      n.register("format", "time", {
        regexps: {
          format: /(:)/,
          unformat: /(:)/
        },
        format: function(e, r, l) {
          var i = Math.floor(e / 60 / 60), t = Math.floor((e - i * 60 * 60) / 60), o = Math.round(e - i * 60 * 60 - t * 60);
          return i + ":" + (t < 10 ? "0" + t : t) + ":" + (o < 10 ? "0" + o : o);
        },
        unformat: function(e) {
          var r = e.split(":"), l = 0;
          return r.length === 3 ? (l = l + Number(r[0]) * 60 * 60, l = l + Number(r[1]) * 60, l = l + Number(r[2])) : r.length === 2 && (l = l + Number(r[0]) * 60, l = l + Number(r[1])), Number(l);
        }
      });
    }(), n;
  });
})(K);
const O = $;
const Y = (b, n) => {
  const f = b.__vccOpts || b;
  for (const [B, p] of n)
    f[B] = p;
  return f;
}, U = {
  __name: "index",
  props: {
    modelValue: { type: Number, default: 0 },
    customValue: [String, Number, Array],
    format: { type: String, default: "0,0" },
    duration: { type: String, default: "0.25s" },
    delay: String,
    easing: { type: String, default: "linear" }
  },
  setup(b) {
    const n = b, f = Array.from({ length: 10 }, (x, F) => F);
    function B(x) {
      return /[0-9]/.test(x);
    }
    const p = j(() => n.customValue || O(n.modelValue).format(n.format));
    return (x, F) => (k(), S("span", {
      class: "numberoll",
      style: C({
        "animation-duration": b.duration,
        "animation-delay": b.delay,
        "animation-timing-function": b.easing
      })
    }, [
      (k(!0), S(z, null, R(A(p), (u, T) => (k(), S("span", {
        class: "numberoll-item",
        key: T
      }, [
        D("span", {
          class: V({
            "numberoll-placeholder": !0,
            "numberoll-visible": B(u)
          })
        }, I(u), 3),
        B(u) ? (k(), S("span", {
          key: 0,
          class: V(["numberoll-slider", `numberoll-slider__to-${u}`])
        }, [
          (k(!0), S(z, null, R(A(f), (e) => (k(), S("span", {
            class: "numberoll-slider__item",
            key: e
          }, I(e), 1))), 128))
        ], 2)) : G("", !0)
      ]))), 128))
    ], 4));
  }
}, q = /* @__PURE__ */ Y(U, [["__scopeId", "data-v-46ea8c09"]]);
function J(b, n) {
  b.component("Numberoll", q);
  const f = "custom";
  O.register(
    "locale",
    f,
    n || {
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
      ordinal: function() {
        return ".";
      },
      currency: {
        symbol: "¥"
      }
    }
  ), O.locale(f);
}
export {
  q as Numberoll,
  J as default
};
