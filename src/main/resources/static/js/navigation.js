/*! @kyobobook/kbb-js v1.0.10 (build 20240228-094720) */
!function (A, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.__KbbJS__ = e() : (A.__KbbJS__ = A.__KbbJS__ || {},
        A.__KbbJS__.vendors = e())
}(self, (function () {
        return function () {
            var A, e = {
                7665: function (A, e, t) {
                    "use strict";

                    function r(A, e) {
                        if ((t = (A = e ? A.toExponential(e - 1) : A.toExponential()).indexOf("e")) < 0)
                            return null;
                        var t, r = A.slice(0, t);
                        return [r.length > 1 ? r[0] + r.slice(2) : r, +A.slice(t + 1)]
                    }

                    t.d(e, {
                        WU: function () {
                            return l
                        }
                    });
                    var n, u = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

                    function s(A) {
                        if (!(e = u.exec(A)))
                            throw new Error("invalid format: " + A);
                        var e;
                        return new o({
                            fill: e[1],
                            align: e[2],
                            sign: e[3],
                            symbol: e[4],
                            zero: e[5],
                            width: e[6],
                            comma: e[7],
                            precision: e[8] && e[8].slice(1),
                            trim: e[9],
                            type: e[10]
                        })
                    }

                    function o(A) {
                        this.fill = void 0 === A.fill ? " " : A.fill + "",
                            this.align = void 0 === A.align ? ">" : A.align + "",
                            this.sign = void 0 === A.sign ? "-" : A.sign + "",
                            this.symbol = void 0 === A.symbol ? "" : A.symbol + "",
                            this.zero = !!A.zero,
                            this.width = void 0 === A.width ? void 0 : +A.width,
                            this.comma = !!A.comma,
                            this.precision = void 0 === A.precision ? void 0 : +A.precision,
                            this.trim = !!A.trim,
                            this.type = void 0 === A.type ? "" : A.type + ""
                    }

                    function i(A, e) {
                        var t = r(A, e);
                        if (!t)
                            return A + "";
                        var n = t[0]
                            , u = t[1];
                        return u < 0 ? "0." + new Array(-u).join("0") + n : n.length > u + 1 ? n.slice(0, u + 1) + "." + n.slice(u + 1) : n + new Array(u - n.length + 2).join("0")
                    }

                    s.prototype = o.prototype,
                        o.prototype.toString = function () {
                            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
                        }
                    ;
                    var a = {
                        "%": function (A, e) {
                            return (100 * A).toFixed(e)
                        },
                        b: function (A) {
                            return Math.round(A).toString(2)
                        },
                        c: function (A) {
                            return A + ""
                        },
                        d: function (A) {
                            return Math.abs(A = Math.round(A)) >= 1e21 ? A.toLocaleString("en").replace(/,/g, "") : A.toString(10)
                        },
                        e: function (A, e) {
                            return A.toExponential(e)
                        },
                        f: function (A, e) {
                            return A.toFixed(e)
                        },
                        g: function (A, e) {
                            return A.toPrecision(e)
                        },
                        o: function (A) {
                            return Math.round(A).toString(8)
                        },
                        p: function (A, e) {
                            return i(100 * A, e)
                        },
                        r: i,
                        s: function (A, e) {
                            var t = r(A, e);
                            if (!t)
                                return A + "";
                            var u = t[0]
                                , s = t[1]
                                , o = s - (n = 3 * Math.max(-8, Math.min(8, Math.floor(s / 3)))) + 1
                                , i = u.length;
                            return o === i ? u : o > i ? u + new Array(o - i + 1).join("0") : o > 0 ? u.slice(0, o) + "." + u.slice(o) : "0." + new Array(1 - o).join("0") + r(A, Math.max(0, e + o - 1))[0]
                        },
                        X: function (A) {
                            return Math.round(A).toString(16).toUpperCase()
                        },
                        x: function (A) {
                            return Math.round(A).toString(16)
                        }
                    };

                    function B(A) {
                        return A
                    }

                    var c, l, g = Array.prototype.map,
                        w = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

                    function C(A) {
                        var e, t,
                            u = void 0 === A.grouping || void 0 === A.thousands ? B : (e = g.call(A.grouping, Number),
                                    t = A.thousands + "",
                                    function (A, r) {
                                        for (var n = A.length, u = [], s = 0, o = e[0], i = 0; n > 0 && o > 0 && (i + o + 1 > r && (o = Math.max(1, r - i)),
                                            u.push(A.substring(n -= o, n + o)),
                                            !((i += o + 1) > r));)
                                            o = e[s = (s + 1) % e.length];
                                        return u.reverse().join(t)
                                    }
                            ), o = void 0 === A.currency ? "" : A.currency[0] + "",
                            i = void 0 === A.currency ? "" : A.currency[1] + "",
                            c = void 0 === A.decimal ? "." : A.decimal + "",
                            l = void 0 === A.numerals ? B : function (A) {
                                return function (e) {
                                    return e.replace(/[0-9]/g, (function (e) {
                                            return A[+e]
                                        }
                                    ))
                                }
                            }(g.call(A.numerals, String)), C = void 0 === A.percent ? "%" : A.percent + "",
                            Q = void 0 === A.minus ? "-" : A.minus + "", F = void 0 === A.nan ? "NaN" : A.nan + "";

                        function d(A) {
                            var e = (A = s(A)).fill
                                , t = A.align
                                , r = A.sign
                                , B = A.symbol
                                , g = A.zero
                                , d = A.width
                                , h = A.comma
                                , f = A.precision
                                , p = A.trim
                                , U = A.type;
                            "n" === U ? (h = !0,
                                U = "g") : a[U] || (void 0 === f && (f = 12),
                                p = !0,
                                U = "g"),
                            (g || "0" === e && "=" === t) && (g = !0,
                                e = "0",
                                t = "=");
                            var D = "$" === B ? o : "#" === B && /[boxX]/.test(U) ? "0" + U.toLowerCase() : ""
                                , E = "$" === B ? i : /[%p]/.test(U) ? C : ""
                                , m = a[U]
                                , y = /[defgprs%]/.test(U);

                            function H(A) {
                                var s, o, i, a = D, B = E;
                                if ("c" === U)
                                    B = m(A) + B,
                                        A = "";
                                else {
                                    var C = (A = +A) < 0 || 1 / A < 0;
                                    if (A = isNaN(A) ? F : m(Math.abs(A), f),
                                    p && (A = function (A) {
                                        A: for (var e, t = A.length, r = 1, n = -1; r < t; ++r)
                                            switch (A[r]) {
                                                case ".":
                                                    n = e = r;
                                                    break;
                                                case "0":
                                                    0 === n && (n = r),
                                                        e = r;
                                                    break;
                                                default:
                                                    if (!+A[r])
                                                        break A;
                                                    n > 0 && (n = 0)
                                            }
                                        return n > 0 ? A.slice(0, n) + A.slice(e + 1) : A
                                    }(A)),
                                    C && 0 == +A && "+" !== r && (C = !1),
                                        a = (C ? "(" === r ? r : Q : "-" === r || "(" === r ? "" : r) + a,
                                        B = ("s" === U ? w[8 + n / 3] : "") + B + (C && "(" === r ? ")" : ""),
                                        y)
                                        for (s = -1,
                                                 o = A.length; ++s < o;)
                                            if (48 > (i = A.charCodeAt(s)) || i > 57) {
                                                B = (46 === i ? c + A.slice(s + 1) : A.slice(s)) + B,
                                                    A = A.slice(0, s);
                                                break
                                            }
                                }
                                h && !g && (A = u(A, 1 / 0));
                                var H = a.length + A.length + B.length
                                    , v = H < d ? new Array(d - H + 1).join(e) : "";
                                switch (h && g && (A = u(v + A, v.length ? d - B.length : 1 / 0),
                                    v = ""),
                                    t) {
                                    case "<":
                                        A = a + A + B + v;
                                        break;
                                    case "=":
                                        A = a + v + A + B;
                                        break;
                                    case "^":
                                        A = v.slice(0, H = v.length >> 1) + a + A + B + v.slice(H);
                                        break;
                                    default:
                                        A = v + a + A + B
                                }
                                return l(A)
                            }

                            return f = void 0 === f ? 6 : /[gprs]/.test(U) ? Math.max(1, Math.min(21, f)) : Math.max(0, Math.min(20, f)),
                                H.toString = function () {
                                    return A + ""
                                }
                                ,
                                H
                        }

                        return {
                            format: d,
                            formatPrefix: function (A, e) {
                                var t, n = d(((A = s(A)).type = "f",
                                    A)), u = 3 * Math.max(-8, Math.min(8, Math.floor((t = e,
                                ((t = r(Math.abs(t))) ? t[1] : NaN) / 3)))), o = Math.pow(10, -u), i = w[8 + u / 3];
                                return function (A) {
                                    return n(o * A) + i
                                }
                            }
                        }
                    }

                    c = C({
                        decimal: ".",
                        thousands: ",",
                        grouping: [3],
                        currency: ["$", ""],
                        minus: "-"
                    }),
                        l = c.format,
                        c.formatPrefix
                },
                5594: function (A, e, t) {
                    "use strict";
                    t(7665)
                },
                7484: function (A) {
                    A.exports = function () {
                        "use strict";
                        var A = 1e3
                            , e = 6e4
                            , t = 36e5
                            , r = "millisecond"
                            , n = "second"
                            , u = "minute"
                            , s = "hour"
                            , o = "day"
                            , i = "week"
                            , a = "month"
                            , B = "quarter"
                            , c = "year"
                            , l = "date"
                            , g = "Invalid Date"
                            ,
                            w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
                            , C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
                            , Q = {
                                name: "en",
                                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                                ordinal: function (A) {
                                    var e = ["th", "st", "nd", "rd"]
                                        , t = A % 100;
                                    return "[" + A + (e[(t - 20) % 10] || e[t] || e[0]) + "]"
                                }
                            }
                            , F = function (A, e, t) {
                                var r = String(A);
                                return !r || r.length >= e ? A : "" + Array(e + 1 - r.length).join(t) + A
                            }
                            , d = {
                                s: F,
                                z: function (A) {
                                    var e = -A.utcOffset()
                                        , t = Math.abs(e)
                                        , r = Math.floor(t / 60)
                                        , n = t % 60;
                                    return (e <= 0 ? "+" : "-") + F(r, 2, "0") + ":" + F(n, 2, "0")
                                },
                                m: function A(e, t) {
                                    if (e.date() < t.date())
                                        return -A(t, e);
                                    var r = 12 * (t.year() - e.year()) + (t.month() - e.month())
                                        , n = e.clone().add(r, a)
                                        , u = t - n < 0
                                        , s = e.clone().add(r + (u ? -1 : 1), a);
                                    return +(-(r + (t - n) / (u ? n - s : s - n)) || 0)
                                },
                                a: function (A) {
                                    return A < 0 ? Math.ceil(A) || 0 : Math.floor(A)
                                },
                                p: function (A) {
                                    return {
                                        M: a,
                                        y: c,
                                        w: i,
                                        d: o,
                                        D: l,
                                        h: s,
                                        m: u,
                                        s: n,
                                        ms: r,
                                        Q: B
                                    }[A] || String(A || "").toLowerCase().replace(/s$/, "")
                                },
                                u: function (A) {
                                    return void 0 === A
                                }
                            }
                            , h = "en"
                            , f = {};
                        f[h] = Q;
                        var p = "$isDayjsObject"
                            , U = function (A) {
                            return A instanceof y || !(!A || !A[p])
                        }
                            , D = function A(e, t, r) {
                            var n;
                            if (!e)
                                return h;
                            if ("string" == typeof e) {
                                var u = e.toLowerCase();
                                f[u] && (n = u),
                                t && (f[u] = t,
                                    n = u);
                                var s = e.split("-");
                                if (!n && s.length > 1)
                                    return A(s[0])
                            } else {
                                var o = e.name;
                                f[o] = e,
                                    n = o
                            }
                            return !r && n && (h = n),
                            n || !r && h
                        }
                            , E = function (A, e) {
                            if (U(A))
                                return A.clone();
                            var t = "object" == typeof e ? e : {};
                            return t.date = A,
                                t.args = arguments,
                                new y(t)
                        }
                            , m = d;
                        m.l = D,
                            m.i = U,
                            m.w = function (A, e) {
                                return E(A, {
                                    locale: e.$L,
                                    utc: e.$u,
                                    x: e.$x,
                                    $offset: e.$offset
                                })
                            }
                        ;
                        var y = function () {
                            function Q(A) {
                                this.$L = D(A.locale, null, !0),
                                    this.parse(A),
                                    this.$x = this.$x || A.x || {},
                                    this[p] = !0
                            }

                            var F = Q.prototype;
                            return F.parse = function (A) {
                                this.$d = function (A) {
                                    var e = A.date
                                        , t = A.utc;
                                    if (null === e)
                                        return new Date(NaN);
                                    if (m.u(e))
                                        return new Date;
                                    if (e instanceof Date)
                                        return new Date(e);
                                    if ("string" == typeof e && !/Z$/i.test(e)) {
                                        var r = e.match(w);
                                        if (r) {
                                            var n = r[2] - 1 || 0
                                                , u = (r[7] || "0").substring(0, 3);
                                            return t ? new Date(Date.UTC(r[1], n, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, u)) : new Date(r[1], n, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, u)
                                        }
                                    }
                                    return new Date(e)
                                }(A),
                                    this.init()
                            }
                                ,
                                F.init = function () {
                                    var A = this.$d;
                                    this.$y = A.getFullYear(),
                                        this.$M = A.getMonth(),
                                        this.$D = A.getDate(),
                                        this.$W = A.getDay(),
                                        this.$H = A.getHours(),
                                        this.$m = A.getMinutes(),
                                        this.$s = A.getSeconds(),
                                        this.$ms = A.getMilliseconds()
                                }
                                ,
                                F.$utils = function () {
                                    return m
                                }
                                ,
                                F.isValid = function () {
                                    return !(this.$d.toString() === g)
                                }
                                ,
                                F.isSame = function (A, e) {
                                    var t = E(A);
                                    return this.startOf(e) <= t && t <= this.endOf(e)
                                }
                                ,
                                F.isAfter = function (A, e) {
                                    return E(A) < this.startOf(e)
                                }
                                ,
                                F.isBefore = function (A, e) {
                                    return this.endOf(e) < E(A)
                                }
                                ,
                                F.$g = function (A, e, t) {
                                    return m.u(A) ? this[e] : this.set(t, A)
                                }
                                ,
                                F.unix = function () {
                                    return Math.floor(this.valueOf() / 1e3)
                                }
                                ,
                                F.valueOf = function () {
                                    return this.$d.getTime()
                                }
                                ,
                                F.startOf = function (A, e) {
                                    var t = this
                                        , r = !!m.u(e) || e
                                        , B = m.p(A)
                                        , g = function (A, e) {
                                        var n = m.w(t.$u ? Date.UTC(t.$y, e, A) : new Date(t.$y, e, A), t);
                                        return r ? n : n.endOf(o)
                                    }
                                        , w = function (A, e) {
                                        return m.w(t.toDate()[A].apply(t.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), t)
                                    }
                                        , C = this.$W
                                        , Q = this.$M
                                        , F = this.$D
                                        , d = "set" + (this.$u ? "UTC" : "");
                                    switch (B) {
                                        case c:
                                            return r ? g(1, 0) : g(31, 11);
                                        case a:
                                            return r ? g(1, Q) : g(0, Q + 1);
                                        case i:
                                            var h = this.$locale().weekStart || 0
                                                , f = (C < h ? C + 7 : C) - h;
                                            return g(r ? F - f : F + (6 - f), Q);
                                        case o:
                                        case l:
                                            return w(d + "Hours", 0);
                                        case s:
                                            return w(d + "Minutes", 1);
                                        case u:
                                            return w(d + "Seconds", 2);
                                        case n:
                                            return w(d + "Milliseconds", 3);
                                        default:
                                            return this.clone()
                                    }
                                }
                                ,
                                F.endOf = function (A) {
                                    return this.startOf(A, !1)
                                }
                                ,
                                F.$set = function (A, e) {
                                    var t, i = m.p(A), B = "set" + (this.$u ? "UTC" : ""), g = (t = {},
                                        t[o] = B + "Date",
                                        t[l] = B + "Date",
                                        t[a] = B + "Month",
                                        t[c] = B + "FullYear",
                                        t[s] = B + "Hours",
                                        t[u] = B + "Minutes",
                                        t[n] = B + "Seconds",
                                        t[r] = B + "Milliseconds",
                                        t)[i], w = i === o ? this.$D + (e - this.$W) : e;
                                    if (i === a || i === c) {
                                        var C = this.clone().set(l, 1);
                                        C.$d[g](w),
                                            C.init(),
                                            this.$d = C.set(l, Math.min(this.$D, C.daysInMonth())).$d
                                    } else
                                        g && this.$d[g](w);
                                    return this.init(),
                                        this
                                }
                                ,
                                F.set = function (A, e) {
                                    return this.clone().$set(A, e)
                                }
                                ,
                                F.get = function (A) {
                                    return this[m.p(A)]()
                                }
                                ,
                                F.add = function (r, B) {
                                    var l, g = this;
                                    r = Number(r);
                                    var w = m.p(B)
                                        , C = function (A) {
                                        var e = E(g);
                                        return m.w(e.date(e.date() + Math.round(A * r)), g)
                                    };
                                    if (w === a)
                                        return this.set(a, this.$M + r);
                                    if (w === c)
                                        return this.set(c, this.$y + r);
                                    if (w === o)
                                        return C(1);
                                    if (w === i)
                                        return C(7);
                                    var Q = (l = {},
                                        l[u] = e,
                                        l[s] = t,
                                        l[n] = A,
                                        l)[w] || 1
                                        , F = this.$d.getTime() + r * Q;
                                    return m.w(F, this)
                                }
                                ,
                                F.subtract = function (A, e) {
                                    return this.add(-1 * A, e)
                                }
                                ,
                                F.format = function (A) {
                                    var e = this
                                        , t = this.$locale();
                                    if (!this.isValid())
                                        return t.invalidDate || g;
                                    var r = A || "YYYY-MM-DDTHH:mm:ssZ"
                                        , n = m.z(this)
                                        , u = this.$H
                                        , s = this.$m
                                        , o = this.$M
                                        , i = t.weekdays
                                        , a = t.months
                                        , B = t.meridiem
                                        , c = function (A, t, n, u) {
                                            return A && (A[t] || A(e, r)) || n[t].slice(0, u)
                                        }
                                        , l = function (A) {
                                            return m.s(u % 12 || 12, A, "0")
                                        }
                                        , w = B || function (A, e, t) {
                                            var r = A < 12 ? "AM" : "PM";
                                            return t ? r.toLowerCase() : r
                                        }
                                    ;
                                    return r.replace(C, (function (A, r) {
                                            return r || function (A) {
                                                switch (A) {
                                                    case "YY":
                                                        return String(e.$y).slice(-2);
                                                    case "YYYY":
                                                        return m.s(e.$y, 4, "0");
                                                    case "M":
                                                        return o + 1;
                                                    case "MM":
                                                        return m.s(o + 1, 2, "0");
                                                    case "MMM":
                                                        return c(t.monthsShort, o, a, 3);
                                                    case "MMMM":
                                                        return c(a, o);
                                                    case "D":
                                                        return e.$D;
                                                    case "DD":
                                                        return m.s(e.$D, 2, "0");
                                                    case "d":
                                                        return String(e.$W);
                                                    case "dd":
                                                        return c(t.weekdaysMin, e.$W, i, 2);
                                                    case "ddd":
                                                        return c(t.weekdaysShort, e.$W, i, 3);
                                                    case "dddd":
                                                        return i[e.$W];
                                                    case "H":
                                                        return String(u);
                                                    case "HH":
                                                        return m.s(u, 2, "0");
                                                    case "h":
                                                        return l(1);
                                                    case "hh":
                                                        return l(2);
                                                    case "a":
                                                        return w(u, s, !0);
                                                    case "A":
                                                        return w(u, s, !1);
                                                    case "m":
                                                        return String(s);
                                                    case "mm":
                                                        return m.s(s, 2, "0");
                                                    case "s":
                                                        return String(e.$s);
                                                    case "ss":
                                                        return m.s(e.$s, 2, "0");
                                                    case "SSS":
                                                        return m.s(e.$ms, 3, "0");
                                                    case "Z":
                                                        return n
                                                }
                                                return null
                                            }(A) || n.replace(":", "")
                                        }
                                    ))
                                }
                                ,
                                F.utcOffset = function () {
                                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                                }
                                ,
                                F.diff = function (r, l, g) {
                                    var w, C = this, Q = m.p(l), F = E(r), d = (F.utcOffset() - this.utcOffset()) * e,
                                        h = this - F, f = function () {
                                            return m.m(C, F)
                                        };
                                    switch (Q) {
                                        case c:
                                            w = f() / 12;
                                            break;
                                        case a:
                                            w = f();
                                            break;
                                        case B:
                                            w = f() / 3;
                                            break;
                                        case i:
                                            w = (h - d) / 6048e5;
                                            break;
                                        case o:
                                            w = (h - d) / 864e5;
                                            break;
                                        case s:
                                            w = h / t;
                                            break;
                                        case u:
                                            w = h / e;
                                            break;
                                        case n:
                                            w = h / A;
                                            break;
                                        default:
                                            w = h
                                    }
                                    return g ? w : m.a(w)
                                }
                                ,
                                F.daysInMonth = function () {
                                    return this.endOf(a).$D
                                }
                                ,
                                F.$locale = function () {
                                    return f[this.$L]
                                }
                                ,
                                F.locale = function (A, e) {
                                    if (!A)
                                        return this.$L;
                                    var t = this.clone()
                                        , r = D(A, e, !0);
                                    return r && (t.$L = r),
                                        t
                                }
                                ,
                                F.clone = function () {
                                    return m.w(this.$d, this)
                                }
                                ,
                                F.toDate = function () {
                                    return new Date(this.valueOf())
                                }
                                ,
                                F.toJSON = function () {
                                    return this.isValid() ? this.toISOString() : null
                                }
                                ,
                                F.toISOString = function () {
                                    return this.$d.toISOString()
                                }
                                ,
                                F.toString = function () {
                                    return this.$d.toUTCString()
                                }
                                ,
                                Q
                        }()
                            , H = y.prototype;
                        return E.prototype = H,
                            [["$ms", r], ["$s", n], ["$m", u], ["$H", s], ["$W", o], ["$M", a], ["$y", c], ["$D", l]].forEach((function (A) {
                                    H[A[1]] = function (e) {
                                        return this.$g(e, A[0], A[1])
                                    }
                                }
                            )),
                            E.extend = function (A, e) {
                                return A.$i || (A(e, y, E),
                                    A.$i = !0),
                                    E
                            }
                            ,
                            E.locale = D,
                            E.isDayjs = U,
                            E.unix = function (A) {
                                return E(1e3 * A)
                            }
                            ,
                            E.en = f[h],
                            E.Ls = f,
                            E.p = {},
                            E
                    }()
                },
                7187: function (A) {
                    "use strict";
                    var e, t = "object" == typeof Reflect ? Reflect : null,
                        r = t && "function" == typeof t.apply ? t.apply : function (A, e, t) {
                            return Function.prototype.apply.call(A, e, t)
                        }
                    ;
                    e = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function (A) {
                            return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A))
                        }
                        : function (A) {
                            return Object.getOwnPropertyNames(A)
                        }
                    ;
                    var n = Number.isNaN || function (A) {
                            return A != A
                        }
                    ;

                    function u() {
                        u.init.call(this)
                    }

                    A.exports = u,
                        A.exports.once = function (A, e) {
                            return new Promise((function (t, r) {
                                    function n(t) {
                                        A.removeListener(e, u),
                                            r(t)
                                    }

                                    function u() {
                                        "function" == typeof A.removeListener && A.removeListener("error", n),
                                            t([].slice.call(arguments))
                                    }

                                    C(A, e, u, {
                                        once: !0
                                    }),
                                    "error" !== e && function (A, e, t) {
                                        "function" == typeof A.on && C(A, "error", e, t)
                                    }(A, n, {
                                        once: !0
                                    })
                                }
                            ))
                        }
                        ,
                        u.EventEmitter = u,
                        u.prototype._events = void 0,
                        u.prototype._eventsCount = 0,
                        u.prototype._maxListeners = void 0;
                    var s = 10;

                    function o(A) {
                        if ("function" != typeof A)
                            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof A)
                    }

                    function i(A) {
                        return void 0 === A._maxListeners ? u.defaultMaxListeners : A._maxListeners
                    }

                    function a(A, e, t, r) {
                        var n, u, s, a;
                        if (o(t),
                            void 0 === (u = A._events) ? (u = A._events = Object.create(null),
                                A._eventsCount = 0) : (void 0 !== u.newListener && (A.emit("newListener", e, t.listener ? t.listener : t),
                                u = A._events),
                                s = u[e]),
                        void 0 === s)
                            s = u[e] = t,
                                ++A._eventsCount;
                        else if ("function" == typeof s ? s = u[e] = r ? [t, s] : [s, t] : r ? s.unshift(t) : s.push(t),
                        (n = i(A)) > 0 && s.length > n && !s.warned) {
                            s.warned = !0;
                            var B = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                            B.name = "MaxListenersExceededWarning",
                                B.emitter = A,
                                B.type = e,
                                B.count = s.length,
                                a = B,
                            console && console.warn && console.warn(a)
                        }
                        return A
                    }

                    function B() {
                        if (!this.fired)
                            return this.target.removeListener(this.type, this.wrapFn),
                                this.fired = !0,
                                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                    }

                    function c(A, e, t) {
                        var r = {
                            fired: !1,
                            wrapFn: void 0,
                            target: A,
                            type: e,
                            listener: t
                        }
                            , n = B.bind(r);
                        return n.listener = t,
                            r.wrapFn = n,
                            n
                    }

                    function l(A, e, t) {
                        var r = A._events;
                        if (void 0 === r)
                            return [];
                        var n = r[e];
                        return void 0 === n ? [] : "function" == typeof n ? t ? [n.listener || n] : [n] : t ? function (A) {
                            for (var e = new Array(A.length), t = 0; t < e.length; ++t)
                                e[t] = A[t].listener || A[t];
                            return e
                        }(n) : w(n, n.length)
                    }

                    function g(A) {
                        var e = this._events;
                        if (void 0 !== e) {
                            var t = e[A];
                            if ("function" == typeof t)
                                return 1;
                            if (void 0 !== t)
                                return t.length
                        }
                        return 0
                    }

                    function w(A, e) {
                        for (var t = new Array(e), r = 0; r < e; ++r)
                            t[r] = A[r];
                        return t
                    }

                    function C(A, e, t, r) {
                        if ("function" == typeof A.on)
                            r.once ? A.once(e, t) : A.on(e, t);
                        else {
                            if ("function" != typeof A.addEventListener)
                                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof A);
                            A.addEventListener(e, (function n(u) {
                                    r.once && A.removeEventListener(e, n),
                                        t(u)
                                }
                            ))
                        }
                    }

                    Object.defineProperty(u, "defaultMaxListeners", {
                        enumerable: !0,
                        get: function () {
                            return s
                        },
                        set: function (A) {
                            if ("number" != typeof A || A < 0 || n(A))
                                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + A + ".");
                            s = A
                        }
                    }),
                        u.init = function () {
                            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                                this._eventsCount = 0),
                                this._maxListeners = this._maxListeners || void 0
                        }
                        ,
                        u.prototype.setMaxListeners = function (A) {
                            if ("number" != typeof A || A < 0 || n(A))
                                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + A + ".");
                            return this._maxListeners = A,
                                this
                        }
                        ,
                        u.prototype.getMaxListeners = function () {
                            return i(this)
                        }
                        ,
                        u.prototype.emit = function (A) {
                            for (var e = [], t = 1; t < arguments.length; t++)
                                e.push(arguments[t]);
                            var n = "error" === A
                                , u = this._events;
                            if (void 0 !== u)
                                n = n && void 0 === u.error;
                            else if (!n)
                                return !1;
                            if (n) {
                                var s;
                                if (e.length > 0 && (s = e[0]),
                                s instanceof Error)
                                    throw s;
                                var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                                throw o.context = s,
                                    o
                            }
                            var i = u[A];
                            if (void 0 === i)
                                return !1;
                            if ("function" == typeof i)
                                r(i, this, e);
                            else {
                                var a = i.length
                                    , B = w(i, a);
                                for (t = 0; t < a; ++t)
                                    r(B[t], this, e)
                            }
                            return !0
                        }
                        ,
                        u.prototype.addListener = function (A, e) {
                            return a(this, A, e, !1)
                        }
                        ,
                        u.prototype.on = u.prototype.addListener,
                        u.prototype.prependListener = function (A, e) {
                            return a(this, A, e, !0)
                        }
                        ,
                        u.prototype.once = function (A, e) {
                            return o(e),
                                this.on(A, c(this, A, e)),
                                this
                        }
                        ,
                        u.prototype.prependOnceListener = function (A, e) {
                            return o(e),
                                this.prependListener(A, c(this, A, e)),
                                this
                        }
                        ,
                        u.prototype.removeListener = function (A, e) {
                            var t, r, n, u, s;
                            if (o(e),
                            void 0 === (r = this._events))
                                return this;
                            if (void 0 === (t = r[A]))
                                return this;
                            if (t === e || t.listener === e)
                                0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[A],
                                r.removeListener && this.emit("removeListener", A, t.listener || e));
                            else if ("function" != typeof t) {
                                for (n = -1,
                                         u = t.length - 1; u >= 0; u--)
                                    if (t[u] === e || t[u].listener === e) {
                                        s = t[u].listener,
                                            n = u;
                                        break
                                    }
                                if (n < 0)
                                    return this;
                                0 === n ? t.shift() : function (A, e) {
                                    for (; e + 1 < A.length; e++)
                                        A[e] = A[e + 1];
                                    A.pop()
                                }(t, n),
                                1 === t.length && (r[A] = t[0]),
                                void 0 !== r.removeListener && this.emit("removeListener", A, s || e)
                            }
                            return this
                        }
                        ,
                        u.prototype.off = u.prototype.removeListener,
                        u.prototype.removeAllListeners = function (A) {
                            var e, t, r;
                            if (void 0 === (t = this._events))
                                return this;
                            if (void 0 === t.removeListener)
                                return 0 === arguments.length ? (this._events = Object.create(null),
                                    this._eventsCount = 0) : void 0 !== t[A] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[A]),
                                    this;
                            if (0 === arguments.length) {
                                var n, u = Object.keys(t);
                                for (r = 0; r < u.length; ++r)
                                    "removeListener" !== (n = u[r]) && this.removeAllListeners(n);
                                return this.removeAllListeners("removeListener"),
                                    this._events = Object.create(null),
                                    this._eventsCount = 0,
                                    this
                            }
                            if ("function" == typeof (e = t[A]))
                                this.removeListener(A, e);
                            else if (void 0 !== e)
                                for (r = e.length - 1; r >= 0; r--)
                                    this.removeListener(A, e[r]);
                            return this
                        }
                        ,
                        u.prototype.listeners = function (A) {
                            return l(this, A, !0)
                        }
                        ,
                        u.prototype.rawListeners = function (A) {
                            return l(this, A, !1)
                        }
                        ,
                        u.listenerCount = function (A, e) {
                            return "function" == typeof A.listenerCount ? A.listenerCount(e) : g.call(A, e)
                        }
                        ,
                        u.prototype.listenerCount = g,
                        u.prototype.eventNames = function () {
                            return this._eventsCount > 0 ? e(this._events) : []
                        }
                },
                9111: function (A, e, t) {
                    "use strict";
                    var r = this && this.__assign || function () {
                            return r = Object.assign || function (A) {
                                for (var e, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in e = arguments[t])
                                        Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
                                return A
                            }
                                ,
                                r.apply(this, arguments)
                        }
                    ;
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = t(7206)
                        , u = t(2642)
                        , s = t(9726)
                        , o = r(r({}, n.namedReferences), {
                        all: n.namedReferences.html5
                    })
                        , i = {
                        specialChars: /[<>'"&]/g,
                        nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
                        nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
                        nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
                        extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
                    }
                        , a = {
                        mode: "specialChars",
                        level: "all",
                        numeric: "decimal"
                    };
                    e.encode = function (A, e) {
                        var t = void 0 === (B = (u = void 0 === e ? a : e).mode) ? "specialChars" : B
                            , r = void 0 === (w = u.numeric) ? "decimal" : w
                            , n = u.level;
                        if (!A)
                            return "";
                        var u, B, c = i[t], l = o[void 0 === n ? "all" : n].characters, g = "hexadecimal" === r;
                        if (c.lastIndex = 0,
                            u = c.exec(A)) {
                            B = "";
                            var w = 0;
                            do {
                                w !== u.index && (B += A.substring(w, u.index));
                                var C = l[n = u[0]];
                                if (!C) {
                                    var Q = n.length > 1 ? s.getCodePoint(n, 0) : n.charCodeAt(0);
                                    C = (g ? "&#x" + Q.toString(16) : "&#" + Q) + ";"
                                }
                                B += C,
                                    w = u.index + n.length
                            } while (u = c.exec(A));
                            w !== A.length && (B += A.substring(w))
                        } else
                            B = A;
                        return B
                    }
                    ;
                    var B = {
                        scope: "body",
                        level: "all"
                    }
                        , c = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g
                        , l = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g
                        , g = {
                        xml: {
                            strict: c,
                            attribute: l,
                            body: n.bodyRegExps.xml
                        },
                        html4: {
                            strict: c,
                            attribute: l,
                            body: n.bodyRegExps.html4
                        },
                        html5: {
                            strict: c,
                            attribute: l,
                            body: n.bodyRegExps.html5
                        }
                    }
                        , w = r(r({}, g), {
                        all: g.html5
                    })
                        , C = String.fromCharCode
                        , Q = C(65533)
                        , F = {
                        level: "all"
                    };
                    e.decodeEntity = function (A, e) {
                        var t = void 0 === (r = (void 0 === e ? F : e).level) ? "all" : r;
                        if (!A)
                            return "";
                        var r = A
                            , n = (A[A.length - 1],
                            o[t].entities[A]);
                        if (n)
                            r = n;
                        else if ("&" === A[0] && "#" === A[1]) {
                            var i = A[2]
                                , a = "x" == i || "X" == i ? parseInt(A.substr(3), 16) : parseInt(A.substr(2));
                            r = a >= 1114111 ? Q : a > 65535 ? s.fromCodePoint(a) : C(u.numericUnicodeMap[a] || a)
                        }
                        return r
                    }
                        ,
                        e.decode = function (A, e) {
                            var t = void 0 === e ? B : e
                                , r = t.level
                                , n = void 0 === r ? "all" : r
                                , i = t.scope
                                , a = void 0 === i ? "xml" === n ? "strict" : "body" : i;
                            if (!A)
                                return "";
                            var c = w[n][a]
                                , l = o[n].entities
                                , g = "attribute" === a
                                , F = "strict" === a;
                            c.lastIndex = 0;
                            var d, h = c.exec(A);
                            if (h) {
                                d = "";
                                var f = 0;
                                do {
                                    f !== h.index && (d += A.substring(f, h.index));
                                    var p = h[0]
                                        , U = p
                                        , D = p[p.length - 1];
                                    if (g && "=" === D)
                                        U = p;
                                    else if (F && ";" !== D)
                                        U = p;
                                    else {
                                        var E = l[p];
                                        if (E)
                                            U = E;
                                        else if ("&" === p[0] && "#" === p[1]) {
                                            var m = p[2]
                                                ,
                                                y = "x" == m || "X" == m ? parseInt(p.substr(3), 16) : parseInt(p.substr(2));
                                            U = y >= 1114111 ? Q : y > 65535 ? s.fromCodePoint(y) : C(u.numericUnicodeMap[y] || y)
                                        }
                                    }
                                    d += U,
                                        f = h.index + p.length
                                } while (h = c.exec(A));
                                f !== A.length && (d += A.substring(f))
                            } else
                                d = A;
                            return d
                        }
                },
                7206: function (A, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.bodyRegExps = {
                            xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                            html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                            html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
                        },
                        e.namedReferences = {
                            xml: {
                                entities: {
                                    "&lt;": "<",
                                    "&gt;": ">",
                                    "&quot;": '"',
                                    "&apos;": "'",
                                    "&amp;": "&"
                                },
                                characters: {
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&apos;",
                                    "&": "&amp;"
                                }
                            },
                            html4: {
                                entities: {
                                    "&apos;": "'",
                                    "&nbsp": " ",
                                    "&nbsp;": " ",
                                    "&iexcl": "¡",
                                    "&iexcl;": "¡",
                                    "&cent": "¢",
                                    "&cent;": "¢",
                                    "&pound": "£",
                                    "&pound;": "£",
                                    "&curren": "¤",
                                    "&curren;": "¤",
                                    "&yen": "¥",
                                    "&yen;": "¥",
                                    "&brvbar": "¦",
                                    "&brvbar;": "¦",
                                    "&sect": "§",
                                    "&sect;": "§",
                                    "&uml": "¨",
                                    "&uml;": "¨",
                                    "&copy": "©",
                                    "&copy;": "©",
                                    "&ordf": "ª",
                                    "&ordf;": "ª",
                                    "&laquo": "«",
                                    "&laquo;": "«",
                                    "&not": "¬",
                                    "&not;": "¬",
                                    "&shy": "­",
                                    "&shy;": "­",
                                    "&reg": "®",
                                    "&reg;": "®",
                                    "&macr": "¯",
                                    "&macr;": "¯",
                                    "&deg": "°",
                                    "&deg;": "°",
                                    "&plusmn": "±",
                                    "&plusmn;": "±",
                                    "&sup2": "²",
                                    "&sup2;": "²",
                                    "&sup3": "³",
                                    "&sup3;": "³",
                                    "&acute": "´",
                                    "&acute;": "´",
                                    "&micro": "µ",
                                    "&micro;": "µ",
                                    "&para": "¶",
                                    "&para;": "¶",
                                    "&middot": "·",
                                    "&middot;": "·",
                                    "&cedil": "¸",
                                    "&cedil;": "¸",
                                    "&sup1": "¹",
                                    "&sup1;": "¹",
                                    "&ordm": "º",
                                    "&ordm;": "º",
                                    "&raquo": "»",
                                    "&raquo;": "»",
                                    "&frac14": "¼",
                                    "&frac14;": "¼",
                                    "&frac12": "½",
                                    "&frac12;": "½",
                                    "&frac34": "¾",
                                    "&frac34;": "¾",
                                    "&iquest": "¿",
                                    "&iquest;": "¿",
                                    "&Agrave": "À",
                                    "&Agrave;": "À",
                                    "&Aacute": "Á",
                                    "&Aacute;": "Á",
                                    "&Acirc": "Â",
                                    "&Acirc;": "Â",
                                    "&Atilde": "Ã",
                                    "&Atilde;": "Ã",
                                    "&Auml": "Ä",
                                    "&Auml;": "Ä",
                                    "&Aring": "Å",
                                    "&Aring;": "Å",
                                    "&AElig": "Æ",
                                    "&AElig;": "Æ",
                                    "&Ccedil": "Ç",
                                    "&Ccedil;": "Ç",
                                    "&Egrave": "È",
                                    "&Egrave;": "È",
                                    "&Eacute": "É",
                                    "&Eacute;": "É",
                                    "&Ecirc": "Ê",
                                    "&Ecirc;": "Ê",
                                    "&Euml": "Ë",
                                    "&Euml;": "Ë",
                                    "&Igrave": "Ì",
                                    "&Igrave;": "Ì",
                                    "&Iacute": "Í",
                                    "&Iacute;": "Í",
                                    "&Icirc": "Î",
                                    "&Icirc;": "Î",
                                    "&Iuml": "Ï",
                                    "&Iuml;": "Ï",
                                    "&ETH": "Ð",
                                    "&ETH;": "Ð",
                                    "&Ntilde": "Ñ",
                                    "&Ntilde;": "Ñ",
                                    "&Ograve": "Ò",
                                    "&Ograve;": "Ò",
                                    "&Oacute": "Ó",
                                    "&Oacute;": "Ó",
                                    "&Ocirc": "Ô",
                                    "&Ocirc;": "Ô",
                                    "&Otilde": "Õ",
                                    "&Otilde;": "Õ",
                                    "&Ouml": "Ö",
                                    "&Ouml;": "Ö",
                                    "&times": "×",
                                    "&times;": "×",
                                    "&Oslash": "Ø",
                                    "&Oslash;": "Ø",
                                    "&Ugrave": "Ù",
                                    "&Ugrave;": "Ù",
                                    "&Uacute": "Ú",
                                    "&Uacute;": "Ú",
                                    "&Ucirc": "Û",
                                    "&Ucirc;": "Û",
                                    "&Uuml": "Ü",
                                    "&Uuml;": "Ü",
                                    "&Yacute": "Ý",
                                    "&Yacute;": "Ý",
                                    "&THORN": "Þ",
                                    "&THORN;": "Þ",
                                    "&szlig": "ß",
                                    "&szlig;": "ß",
                                    "&agrave": "à",
                                    "&agrave;": "à",
                                    "&aacute": "á",
                                    "&aacute;": "á",
                                    "&acirc": "â",
                                    "&acirc;": "â",
                                    "&atilde": "ã",
                                    "&atilde;": "ã",
                                    "&auml": "ä",
                                    "&auml;": "ä",
                                    "&aring": "å",
                                    "&aring;": "å",
                                    "&aelig": "æ",
                                    "&aelig;": "æ",
                                    "&ccedil": "ç",
                                    "&ccedil;": "ç",
                                    "&egrave": "è",
                                    "&egrave;": "è",
                                    "&eacute": "é",
                                    "&eacute;": "é",
                                    "&ecirc": "ê",
                                    "&ecirc;": "ê",
                                    "&euml": "ë",
                                    "&euml;": "ë",
                                    "&igrave": "ì",
                                    "&igrave;": "ì",
                                    "&iacute": "í",
                                    "&iacute;": "í",
                                    "&icirc": "î",
                                    "&icirc;": "î",
                                    "&iuml": "ï",
                                    "&iuml;": "ï",
                                    "&eth": "ð",
                                    "&eth;": "ð",
                                    "&ntilde": "ñ",
                                    "&ntilde;": "ñ",
                                    "&ograve": "ò",
                                    "&ograve;": "ò",
                                    "&oacute": "ó",
                                    "&oacute;": "ó",
                                    "&ocirc": "ô",
                                    "&ocirc;": "ô",
                                    "&otilde": "õ",
                                    "&otilde;": "õ",
                                    "&ouml": "ö",
                                    "&ouml;": "ö",
                                    "&divide": "÷",
                                    "&divide;": "÷",
                                    "&oslash": "ø",
                                    "&oslash;": "ø",
                                    "&ugrave": "ù",
                                    "&ugrave;": "ù",
                                    "&uacute": "ú",
                                    "&uacute;": "ú",
                                    "&ucirc": "û",
                                    "&ucirc;": "û",
                                    "&uuml": "ü",
                                    "&uuml;": "ü",
                                    "&yacute": "ý",
                                    "&yacute;": "ý",
                                    "&thorn": "þ",
                                    "&thorn;": "þ",
                                    "&yuml": "ÿ",
                                    "&yuml;": "ÿ",
                                    "&quot": '"',
                                    "&quot;": '"',
                                    "&amp": "&",
                                    "&amp;": "&",
                                    "&lt": "<",
                                    "&lt;": "<",
                                    "&gt": ">",
                                    "&gt;": ">",
                                    "&OElig;": "Œ",
                                    "&oelig;": "œ",
                                    "&Scaron;": "Š",
                                    "&scaron;": "š",
                                    "&Yuml;": "Ÿ",
                                    "&circ;": "ˆ",
                                    "&tilde;": "˜",
                                    "&ensp;": " ",
                                    "&emsp;": " ",
                                    "&thinsp;": " ",
                                    "&zwnj;": "‌",
                                    "&zwj;": "‍",
                                    "&lrm;": "‎",
                                    "&rlm;": "‏",
                                    "&ndash;": "–",
                                    "&mdash;": "—",
                                    "&lsquo;": "‘",
                                    "&rsquo;": "’",
                                    "&sbquo;": "‚",
                                    "&ldquo;": "“",
                                    "&rdquo;": "”",
                                    "&bdquo;": "„",
                                    "&dagger;": "†",
                                    "&Dagger;": "‡",
                                    "&permil;": "‰",
                                    "&lsaquo;": "‹",
                                    "&rsaquo;": "›",
                                    "&euro;": "€",
                                    "&fnof;": "ƒ",
                                    "&Alpha;": "Α",
                                    "&Beta;": "Β",
                                    "&Gamma;": "Γ",
                                    "&Delta;": "Δ",
                                    "&Epsilon;": "Ε",
                                    "&Zeta;": "Ζ",
                                    "&Eta;": "Η",
                                    "&Theta;": "Θ",
                                    "&Iota;": "Ι",
                                    "&Kappa;": "Κ",
                                    "&Lambda;": "Λ",
                                    "&Mu;": "Μ",
                                    "&Nu;": "Ν",
                                    "&Xi;": "Ξ",
                                    "&Omicron;": "Ο",
                                    "&Pi;": "Π",
                                    "&Rho;": "Ρ",
                                    "&Sigma;": "Σ",
                                    "&Tau;": "Τ",
                                    "&Upsilon;": "Υ",
                                    "&Phi;": "Φ",
                                    "&Chi;": "Χ",
                                    "&Psi;": "Ψ",
                                    "&Omega;": "Ω",
                                    "&alpha;": "α",
                                    "&beta;": "β",
                                    "&gamma;": "γ",
                                    "&delta;": "δ",
                                    "&epsilon;": "ε",
                                    "&zeta;": "ζ",
                                    "&eta;": "η",
                                    "&theta;": "θ",
                                    "&iota;": "ι",
                                    "&kappa;": "κ",
                                    "&lambda;": "λ",
                                    "&mu;": "μ",
                                    "&nu;": "ν",
                                    "&xi;": "ξ",
                                    "&omicron;": "ο",
                                    "&pi;": "π",
                                    "&rho;": "ρ",
                                    "&sigmaf;": "ς",
                                    "&sigma;": "σ",
                                    "&tau;": "τ",
                                    "&upsilon;": "υ",
                                    "&phi;": "φ",
                                    "&chi;": "χ",
                                    "&psi;": "ψ",
                                    "&omega;": "ω",
                                    "&thetasym;": "ϑ",
                                    "&upsih;": "ϒ",
                                    "&piv;": "ϖ",
                                    "&bull;": "•",
                                    "&hellip;": "…",
                                    "&prime;": "′",
                                    "&Prime;": "″",
                                    "&oline;": "‾",
                                    "&frasl;": "⁄",
                                    "&weierp;": "℘",
                                    "&image;": "ℑ",
                                    "&real;": "ℜ",
                                    "&trade;": "™",
                                    "&alefsym;": "ℵ",
                                    "&larr;": "←",
                                    "&uarr;": "↑",
                                    "&rarr;": "→",
                                    "&darr;": "↓",
                                    "&harr;": "↔",
                                    "&crarr;": "↵",
                                    "&lArr;": "⇐",
                                    "&uArr;": "⇑",
                                    "&rArr;": "⇒",
                                    "&dArr;": "⇓",
                                    "&hArr;": "⇔",
                                    "&forall;": "∀",
                                    "&part;": "∂",
                                    "&exist;": "∃",
                                    "&empty;": "∅",
                                    "&nabla;": "∇",
                                    "&isin;": "∈",
                                    "&notin;": "∉",
                                    "&ni;": "∋",
                                    "&prod;": "∏",
                                    "&sum;": "∑",
                                    "&minus;": "−",
                                    "&lowast;": "∗",
                                    "&radic;": "√",
                                    "&prop;": "∝",
                                    "&infin;": "∞",
                                    "&ang;": "∠",
                                    "&and;": "∧",
                                    "&or;": "∨",
                                    "&cap;": "∩",
                                    "&cup;": "∪",
                                    "&int;": "∫",
                                    "&there4;": "∴",
                                    "&sim;": "∼",
                                    "&cong;": "≅",
                                    "&asymp;": "≈",
                                    "&ne;": "≠",
                                    "&equiv;": "≡",
                                    "&le;": "≤",
                                    "&ge;": "≥",
                                    "&sub;": "⊂",
                                    "&sup;": "⊃",
                                    "&nsub;": "⊄",
                                    "&sube;": "⊆",
                                    "&supe;": "⊇",
                                    "&oplus;": "⊕",
                                    "&otimes;": "⊗",
                                    "&perp;": "⊥",
                                    "&sdot;": "⋅",
                                    "&lceil;": "⌈",
                                    "&rceil;": "⌉",
                                    "&lfloor;": "⌊",
                                    "&rfloor;": "⌋",
                                    "&lang;": "〈",
                                    "&rang;": "〉",
                                    "&loz;": "◊",
                                    "&spades;": "♠",
                                    "&clubs;": "♣",
                                    "&hearts;": "♥",
                                    "&diams;": "♦"
                                },
                                characters: {
                                    "'": "&apos;",
                                    " ": "&nbsp;",
                                    "¡": "&iexcl;",
                                    "¢": "&cent;",
                                    "£": "&pound;",
                                    "¤": "&curren;",
                                    "¥": "&yen;",
                                    "¦": "&brvbar;",
                                    "§": "&sect;",
                                    "¨": "&uml;",
                                    "©": "&copy;",
                                    "ª": "&ordf;",
                                    "«": "&laquo;",
                                    "¬": "&not;",
                                    "­": "&shy;",
                                    "®": "&reg;",
                                    "¯": "&macr;",
                                    "°": "&deg;",
                                    "±": "&plusmn;",
                                    "²": "&sup2;",
                                    "³": "&sup3;",
                                    "´": "&acute;",
                                    "µ": "&micro;",
                                    "¶": "&para;",
                                    "·": "&middot;",
                                    "¸": "&cedil;",
                                    "¹": "&sup1;",
                                    "º": "&ordm;",
                                    "»": "&raquo;",
                                    "¼": "&frac14;",
                                    "½": "&frac12;",
                                    "¾": "&frac34;",
                                    "¿": "&iquest;",
                                    "À": "&Agrave;",
                                    "Á": "&Aacute;",
                                    "Â": "&Acirc;",
                                    "Ã": "&Atilde;",
                                    "Ä": "&Auml;",
                                    "Å": "&Aring;",
                                    "Æ": "&AElig;",
                                    "Ç": "&Ccedil;",
                                    "È": "&Egrave;",
                                    "É": "&Eacute;",
                                    "Ê": "&Ecirc;",
                                    "Ë": "&Euml;",
                                    "Ì": "&Igrave;",
                                    "Í": "&Iacute;",
                                    "Î": "&Icirc;",
                                    "Ï": "&Iuml;",
                                    "Ð": "&ETH;",
                                    "Ñ": "&Ntilde;",
                                    "Ò": "&Ograve;",
                                    "Ó": "&Oacute;",
                                    "Ô": "&Ocirc;",
                                    "Õ": "&Otilde;",
                                    "Ö": "&Ouml;",
                                    "×": "&times;",
                                    "Ø": "&Oslash;",
                                    "Ù": "&Ugrave;",
                                    "Ú": "&Uacute;",
                                    "Û": "&Ucirc;",
                                    "Ü": "&Uuml;",
                                    "Ý": "&Yacute;",
                                    "Þ": "&THORN;",
                                    "ß": "&szlig;",
                                    "à": "&agrave;",
                                    "á": "&aacute;",
                                    "â": "&acirc;",
                                    "ã": "&atilde;",
                                    "ä": "&auml;",
                                    "å": "&aring;",
                                    "æ": "&aelig;",
                                    "ç": "&ccedil;",
                                    "è": "&egrave;",
                                    "é": "&eacute;",
                                    "ê": "&ecirc;",
                                    "ë": "&euml;",
                                    "ì": "&igrave;",
                                    "í": "&iacute;",
                                    "î": "&icirc;",
                                    "ï": "&iuml;",
                                    "ð": "&eth;",
                                    "ñ": "&ntilde;",
                                    "ò": "&ograve;",
                                    "ó": "&oacute;",
                                    "ô": "&ocirc;",
                                    "õ": "&otilde;",
                                    "ö": "&ouml;",
                                    "÷": "&divide;",
                                    "ø": "&oslash;",
                                    "ù": "&ugrave;",
                                    "ú": "&uacute;",
                                    "û": "&ucirc;",
                                    "ü": "&uuml;",
                                    "ý": "&yacute;",
                                    "þ": "&thorn;",
                                    "ÿ": "&yuml;",
                                    '"': "&quot;",
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    "Œ": "&OElig;",
                                    "œ": "&oelig;",
                                    "Š": "&Scaron;",
                                    "š": "&scaron;",
                                    "Ÿ": "&Yuml;",
                                    "ˆ": "&circ;",
                                    "˜": "&tilde;",
                                    " ": "&ensp;",
                                    " ": "&emsp;",
                                    " ": "&thinsp;",
                                    "‌": "&zwnj;",
                                    "‍": "&zwj;",
                                    "‎": "&lrm;",
                                    "‏": "&rlm;",
                                    "–": "&ndash;",
                                    "—": "&mdash;",
                                    "‘": "&lsquo;",
                                    "’": "&rsquo;",
                                    "‚": "&sbquo;",
                                    "“": "&ldquo;",
                                    "”": "&rdquo;",
                                    "„": "&bdquo;",
                                    "†": "&dagger;",
                                    "‡": "&Dagger;",
                                    "‰": "&permil;",
                                    "‹": "&lsaquo;",
                                    "›": "&rsaquo;",
                                    "€": "&euro;",
                                    "ƒ": "&fnof;",
                                    "Α": "&Alpha;",
                                    "Β": "&Beta;",
                                    "Γ": "&Gamma;",
                                    "Δ": "&Delta;",
                                    "Ε": "&Epsilon;",
                                    "Ζ": "&Zeta;",
                                    "Η": "&Eta;",
                                    "Θ": "&Theta;",
                                    "Ι": "&Iota;",
                                    "Κ": "&Kappa;",
                                    "Λ": "&Lambda;",
                                    "Μ": "&Mu;",
                                    "Ν": "&Nu;",
                                    "Ξ": "&Xi;",
                                    "Ο": "&Omicron;",
                                    "Π": "&Pi;",
                                    "Ρ": "&Rho;",
                                    "Σ": "&Sigma;",
                                    "Τ": "&Tau;",
                                    "Υ": "&Upsilon;",
                                    "Φ": "&Phi;",
                                    "Χ": "&Chi;",
                                    "Ψ": "&Psi;",
                                    "Ω": "&Omega;",
                                    "α": "&alpha;",
                                    "β": "&beta;",
                                    "γ": "&gamma;",
                                    "δ": "&delta;",
                                    "ε": "&epsilon;",
                                    "ζ": "&zeta;",
                                    "η": "&eta;",
                                    "θ": "&theta;",
                                    "ι": "&iota;",
                                    "κ": "&kappa;",
                                    "λ": "&lambda;",
                                    "μ": "&mu;",
                                    "ν": "&nu;",
                                    "ξ": "&xi;",
                                    "ο": "&omicron;",
                                    "π": "&pi;",
                                    "ρ": "&rho;",
                                    "ς": "&sigmaf;",
                                    "σ": "&sigma;",
                                    "τ": "&tau;",
                                    "υ": "&upsilon;",
                                    "φ": "&phi;",
                                    "χ": "&chi;",
                                    "ψ": "&psi;",
                                    "ω": "&omega;",
                                    "ϑ": "&thetasym;",
                                    "ϒ": "&upsih;",
                                    "ϖ": "&piv;",
                                    "•": "&bull;",
                                    "…": "&hellip;",
                                    "′": "&prime;",
                                    "″": "&Prime;",
                                    "‾": "&oline;",
                                    "⁄": "&frasl;",
                                    "℘": "&weierp;",
                                    "ℑ": "&image;",
                                    "ℜ": "&real;",
                                    "™": "&trade;",
                                    "ℵ": "&alefsym;",
                                    "←": "&larr;",
                                    "↑": "&uarr;",
                                    "→": "&rarr;",
                                    "↓": "&darr;",
                                    "↔": "&harr;",
                                    "↵": "&crarr;",
                                    "⇐": "&lArr;",
                                    "⇑": "&uArr;",
                                    "⇒": "&rArr;",
                                    "⇓": "&dArr;",
                                    "⇔": "&hArr;",
                                    "∀": "&forall;",
                                    "∂": "&part;",
                                    "∃": "&exist;",
                                    "∅": "&empty;",
                                    "∇": "&nabla;",
                                    "∈": "&isin;",
                                    "∉": "&notin;",
                                    "∋": "&ni;",
                                    "∏": "&prod;",
                                    "∑": "&sum;",
                                    "−": "&minus;",
                                    "∗": "&lowast;",
                                    "√": "&radic;",
                                    "∝": "&prop;",
                                    "∞": "&infin;",
                                    "∠": "&ang;",
                                    "∧": "&and;",
                                    "∨": "&or;",
                                    "∩": "&cap;",
                                    "∪": "&cup;",
                                    "∫": "&int;",
                                    "∴": "&there4;",
                                    "∼": "&sim;",
                                    "≅": "&cong;",
                                    "≈": "&asymp;",
                                    "≠": "&ne;",
                                    "≡": "&equiv;",
                                    "≤": "&le;",
                                    "≥": "&ge;",
                                    "⊂": "&sub;",
                                    "⊃": "&sup;",
                                    "⊄": "&nsub;",
                                    "⊆": "&sube;",
                                    "⊇": "&supe;",
                                    "⊕": "&oplus;",
                                    "⊗": "&otimes;",
                                    "⊥": "&perp;",
                                    "⋅": "&sdot;",
                                    "⌈": "&lceil;",
                                    "⌉": "&rceil;",
                                    "⌊": "&lfloor;",
                                    "⌋": "&rfloor;",
                                    "〈": "&lang;",
                                    "〉": "&rang;",
                                    "◊": "&loz;",
                                    "♠": "&spades;",
                                    "♣": "&clubs;",
                                    "♥": "&hearts;",
                                    "♦": "&diams;"
                                }
                            },
                            html5: {
                                entities: {
                                    "&AElig": "Æ",
                                    "&AElig;": "Æ",
                                    "&AMP": "&",
                                    "&AMP;": "&",
                                    "&Aacute": "Á",
                                    "&Aacute;": "Á",
                                    "&Abreve;": "Ă",
                                    "&Acirc": "Â",
                                    "&Acirc;": "Â",
                                    "&Acy;": "А",
                                    "&Afr;": "𝔄",
                                    "&Agrave": "À",
                                    "&Agrave;": "À",
                                    "&Alpha;": "Α",
                                    "&Amacr;": "Ā",
                                    "&And;": "⩓",
                                    "&Aogon;": "Ą",
                                    "&Aopf;": "𝔸",
                                    "&ApplyFunction;": "⁡",
                                    "&Aring": "Å",
                                    "&Aring;": "Å",
                                    "&Ascr;": "𝒜",
                                    "&Assign;": "≔",
                                    "&Atilde": "Ã",
                                    "&Atilde;": "Ã",
                                    "&Auml": "Ä",
                                    "&Auml;": "Ä",
                                    "&Backslash;": "∖",
                                    "&Barv;": "⫧",
                                    "&Barwed;": "⌆",
                                    "&Bcy;": "Б",
                                    "&Because;": "∵",
                                    "&Bernoullis;": "ℬ",
                                    "&Beta;": "Β",
                                    "&Bfr;": "𝔅",
                                    "&Bopf;": "𝔹",
                                    "&Breve;": "˘",
                                    "&Bscr;": "ℬ",
                                    "&Bumpeq;": "≎",
                                    "&CHcy;": "Ч",
                                    "&COPY": "©",
                                    "&COPY;": "©",
                                    "&Cacute;": "Ć",
                                    "&Cap;": "⋒",
                                    "&CapitalDifferentialD;": "ⅅ",
                                    "&Cayleys;": "ℭ",
                                    "&Ccaron;": "Č",
                                    "&Ccedil": "Ç",
                                    "&Ccedil;": "Ç",
                                    "&Ccirc;": "Ĉ",
                                    "&Cconint;": "∰",
                                    "&Cdot;": "Ċ",
                                    "&Cedilla;": "¸",
                                    "&CenterDot;": "·",
                                    "&Cfr;": "ℭ",
                                    "&Chi;": "Χ",
                                    "&CircleDot;": "⊙",
                                    "&CircleMinus;": "⊖",
                                    "&CirclePlus;": "⊕",
                                    "&CircleTimes;": "⊗",
                                    "&ClockwiseContourIntegral;": "∲",
                                    "&CloseCurlyDoubleQuote;": "”",
                                    "&CloseCurlyQuote;": "’",
                                    "&Colon;": "∷",
                                    "&Colone;": "⩴",
                                    "&Congruent;": "≡",
                                    "&Conint;": "∯",
                                    "&ContourIntegral;": "∮",
                                    "&Copf;": "ℂ",
                                    "&Coproduct;": "∐",
                                    "&CounterClockwiseContourIntegral;": "∳",
                                    "&Cross;": "⨯",
                                    "&Cscr;": "𝒞",
                                    "&Cup;": "⋓",
                                    "&CupCap;": "≍",
                                    "&DD;": "ⅅ",
                                    "&DDotrahd;": "⤑",
                                    "&DJcy;": "Ђ",
                                    "&DScy;": "Ѕ",
                                    "&DZcy;": "Џ",
                                    "&Dagger;": "‡",
                                    "&Darr;": "↡",
                                    "&Dashv;": "⫤",
                                    "&Dcaron;": "Ď",
                                    "&Dcy;": "Д",
                                    "&Del;": "∇",
                                    "&Delta;": "Δ",
                                    "&Dfr;": "𝔇",
                                    "&DiacriticalAcute;": "´",
                                    "&DiacriticalDot;": "˙",
                                    "&DiacriticalDoubleAcute;": "˝",
                                    "&DiacriticalGrave;": "`",
                                    "&DiacriticalTilde;": "˜",
                                    "&Diamond;": "⋄",
                                    "&DifferentialD;": "ⅆ",
                                    "&Dopf;": "𝔻",
                                    "&Dot;": "¨",
                                    "&DotDot;": "⃜",
                                    "&DotEqual;": "≐",
                                    "&DoubleContourIntegral;": "∯",
                                    "&DoubleDot;": "¨",
                                    "&DoubleDownArrow;": "⇓",
                                    "&DoubleLeftArrow;": "⇐",
                                    "&DoubleLeftRightArrow;": "⇔",
                                    "&DoubleLeftTee;": "⫤",
                                    "&DoubleLongLeftArrow;": "⟸",
                                    "&DoubleLongLeftRightArrow;": "⟺",
                                    "&DoubleLongRightArrow;": "⟹",
                                    "&DoubleRightArrow;": "⇒",
                                    "&DoubleRightTee;": "⊨",
                                    "&DoubleUpArrow;": "⇑",
                                    "&DoubleUpDownArrow;": "⇕",
                                    "&DoubleVerticalBar;": "∥",
                                    "&DownArrow;": "↓",
                                    "&DownArrowBar;": "⤓",
                                    "&DownArrowUpArrow;": "⇵",
                                    "&DownBreve;": "̑",
                                    "&DownLeftRightVector;": "⥐",
                                    "&DownLeftTeeVector;": "⥞",
                                    "&DownLeftVector;": "↽",
                                    "&DownLeftVectorBar;": "⥖",
                                    "&DownRightTeeVector;": "⥟",
                                    "&DownRightVector;": "⇁",
                                    "&DownRightVectorBar;": "⥗",
                                    "&DownTee;": "⊤",
                                    "&DownTeeArrow;": "↧",
                                    "&Downarrow;": "⇓",
                                    "&Dscr;": "𝒟",
                                    "&Dstrok;": "Đ",
                                    "&ENG;": "Ŋ",
                                    "&ETH": "Ð",
                                    "&ETH;": "Ð",
                                    "&Eacute": "É",
                                    "&Eacute;": "É",
                                    "&Ecaron;": "Ě",
                                    "&Ecirc": "Ê",
                                    "&Ecirc;": "Ê",
                                    "&Ecy;": "Э",
                                    "&Edot;": "Ė",
                                    "&Efr;": "𝔈",
                                    "&Egrave": "È",
                                    "&Egrave;": "È",
                                    "&Element;": "∈",
                                    "&Emacr;": "Ē",
                                    "&EmptySmallSquare;": "◻",
                                    "&EmptyVerySmallSquare;": "▫",
                                    "&Eogon;": "Ę",
                                    "&Eopf;": "𝔼",
                                    "&Epsilon;": "Ε",
                                    "&Equal;": "⩵",
                                    "&EqualTilde;": "≂",
                                    "&Equilibrium;": "⇌",
                                    "&Escr;": "ℰ",
                                    "&Esim;": "⩳",
                                    "&Eta;": "Η",
                                    "&Euml": "Ë",
                                    "&Euml;": "Ë",
                                    "&Exists;": "∃",
                                    "&ExponentialE;": "ⅇ",
                                    "&Fcy;": "Ф",
                                    "&Ffr;": "𝔉",
                                    "&FilledSmallSquare;": "◼",
                                    "&FilledVerySmallSquare;": "▪",
                                    "&Fopf;": "𝔽",
                                    "&ForAll;": "∀",
                                    "&Fouriertrf;": "ℱ",
                                    "&Fscr;": "ℱ",
                                    "&GJcy;": "Ѓ",
                                    "&GT": ">",
                                    "&GT;": ">",
                                    "&Gamma;": "Γ",
                                    "&Gammad;": "Ϝ",
                                    "&Gbreve;": "Ğ",
                                    "&Gcedil;": "Ģ",
                                    "&Gcirc;": "Ĝ",
                                    "&Gcy;": "Г",
                                    "&Gdot;": "Ġ",
                                    "&Gfr;": "𝔊",
                                    "&Gg;": "⋙",
                                    "&Gopf;": "𝔾",
                                    "&GreaterEqual;": "≥",
                                    "&GreaterEqualLess;": "⋛",
                                    "&GreaterFullEqual;": "≧",
                                    "&GreaterGreater;": "⪢",
                                    "&GreaterLess;": "≷",
                                    "&GreaterSlantEqual;": "⩾",
                                    "&GreaterTilde;": "≳",
                                    "&Gscr;": "𝒢",
                                    "&Gt;": "≫",
                                    "&HARDcy;": "Ъ",
                                    "&Hacek;": "ˇ",
                                    "&Hat;": "^",
                                    "&Hcirc;": "Ĥ",
                                    "&Hfr;": "ℌ",
                                    "&HilbertSpace;": "ℋ",
                                    "&Hopf;": "ℍ",
                                    "&HorizontalLine;": "─",
                                    "&Hscr;": "ℋ",
                                    "&Hstrok;": "Ħ",
                                    "&HumpDownHump;": "≎",
                                    "&HumpEqual;": "≏",
                                    "&IEcy;": "Е",
                                    "&IJlig;": "Ĳ",
                                    "&IOcy;": "Ё",
                                    "&Iacute": "Í",
                                    "&Iacute;": "Í",
                                    "&Icirc": "Î",
                                    "&Icirc;": "Î",
                                    "&Icy;": "И",
                                    "&Idot;": "İ",
                                    "&Ifr;": "ℑ",
                                    "&Igrave": "Ì",
                                    "&Igrave;": "Ì",
                                    "&Im;": "ℑ",
                                    "&Imacr;": "Ī",
                                    "&ImaginaryI;": "ⅈ",
                                    "&Implies;": "⇒",
                                    "&Int;": "∬",
                                    "&Integral;": "∫",
                                    "&Intersection;": "⋂",
                                    "&InvisibleComma;": "⁣",
                                    "&InvisibleTimes;": "⁢",
                                    "&Iogon;": "Į",
                                    "&Iopf;": "𝕀",
                                    "&Iota;": "Ι",
                                    "&Iscr;": "ℐ",
                                    "&Itilde;": "Ĩ",
                                    "&Iukcy;": "І",
                                    "&Iuml": "Ï",
                                    "&Iuml;": "Ï",
                                    "&Jcirc;": "Ĵ",
                                    "&Jcy;": "Й",
                                    "&Jfr;": "𝔍",
                                    "&Jopf;": "𝕁",
                                    "&Jscr;": "𝒥",
                                    "&Jsercy;": "Ј",
                                    "&Jukcy;": "Є",
                                    "&KHcy;": "Х",
                                    "&KJcy;": "Ќ",
                                    "&Kappa;": "Κ",
                                    "&Kcedil;": "Ķ",
                                    "&Kcy;": "К",
                                    "&Kfr;": "𝔎",
                                    "&Kopf;": "𝕂",
                                    "&Kscr;": "𝒦",
                                    "&LJcy;": "Љ",
                                    "&LT": "<",
                                    "&LT;": "<",
                                    "&Lacute;": "Ĺ",
                                    "&Lambda;": "Λ",
                                    "&Lang;": "⟪",
                                    "&Laplacetrf;": "ℒ",
                                    "&Larr;": "↞",
                                    "&Lcaron;": "Ľ",
                                    "&Lcedil;": "Ļ",
                                    "&Lcy;": "Л",
                                    "&LeftAngleBracket;": "⟨",
                                    "&LeftArrow;": "←",
                                    "&LeftArrowBar;": "⇤",
                                    "&LeftArrowRightArrow;": "⇆",
                                    "&LeftCeiling;": "⌈",
                                    "&LeftDoubleBracket;": "⟦",
                                    "&LeftDownTeeVector;": "⥡",
                                    "&LeftDownVector;": "⇃",
                                    "&LeftDownVectorBar;": "⥙",
                                    "&LeftFloor;": "⌊",
                                    "&LeftRightArrow;": "↔",
                                    "&LeftRightVector;": "⥎",
                                    "&LeftTee;": "⊣",
                                    "&LeftTeeArrow;": "↤",
                                    "&LeftTeeVector;": "⥚",
                                    "&LeftTriangle;": "⊲",
                                    "&LeftTriangleBar;": "⧏",
                                    "&LeftTriangleEqual;": "⊴",
                                    "&LeftUpDownVector;": "⥑",
                                    "&LeftUpTeeVector;": "⥠",
                                    "&LeftUpVector;": "↿",
                                    "&LeftUpVectorBar;": "⥘",
                                    "&LeftVector;": "↼",
                                    "&LeftVectorBar;": "⥒",
                                    "&Leftarrow;": "⇐",
                                    "&Leftrightarrow;": "⇔",
                                    "&LessEqualGreater;": "⋚",
                                    "&LessFullEqual;": "≦",
                                    "&LessGreater;": "≶",
                                    "&LessLess;": "⪡",
                                    "&LessSlantEqual;": "⩽",
                                    "&LessTilde;": "≲",
                                    "&Lfr;": "𝔏",
                                    "&Ll;": "⋘",
                                    "&Lleftarrow;": "⇚",
                                    "&Lmidot;": "Ŀ",
                                    "&LongLeftArrow;": "⟵",
                                    "&LongLeftRightArrow;": "⟷",
                                    "&LongRightArrow;": "⟶",
                                    "&Longleftarrow;": "⟸",
                                    "&Longleftrightarrow;": "⟺",
                                    "&Longrightarrow;": "⟹",
                                    "&Lopf;": "𝕃",
                                    "&LowerLeftArrow;": "↙",
                                    "&LowerRightArrow;": "↘",
                                    "&Lscr;": "ℒ",
                                    "&Lsh;": "↰",
                                    "&Lstrok;": "Ł",
                                    "&Lt;": "≪",
                                    "&Map;": "⤅",
                                    "&Mcy;": "М",
                                    "&MediumSpace;": " ",
                                    "&Mellintrf;": "ℳ",
                                    "&Mfr;": "𝔐",
                                    "&MinusPlus;": "∓",
                                    "&Mopf;": "𝕄",
                                    "&Mscr;": "ℳ",
                                    "&Mu;": "Μ",
                                    "&NJcy;": "Њ",
                                    "&Nacute;": "Ń",
                                    "&Ncaron;": "Ň",
                                    "&Ncedil;": "Ņ",
                                    "&Ncy;": "Н",
                                    "&NegativeMediumSpace;": "​",
                                    "&NegativeThickSpace;": "​",
                                    "&NegativeThinSpace;": "​",
                                    "&NegativeVeryThinSpace;": "​",
                                    "&NestedGreaterGreater;": "≫",
                                    "&NestedLessLess;": "≪",
                                    "&NewLine;": "\n",
                                    "&Nfr;": "𝔑",
                                    "&NoBreak;": "⁠",
                                    "&NonBreakingSpace;": " ",
                                    "&Nopf;": "ℕ",
                                    "&Not;": "⫬",
                                    "&NotCongruent;": "≢",
                                    "&NotCupCap;": "≭",
                                    "&NotDoubleVerticalBar;": "∦",
                                    "&NotElement;": "∉",
                                    "&NotEqual;": "≠",
                                    "&NotEqualTilde;": "≂̸",
                                    "&NotExists;": "∄",
                                    "&NotGreater;": "≯",
                                    "&NotGreaterEqual;": "≱",
                                    "&NotGreaterFullEqual;": "≧̸",
                                    "&NotGreaterGreater;": "≫̸",
                                    "&NotGreaterLess;": "≹",
                                    "&NotGreaterSlantEqual;": "⩾̸",
                                    "&NotGreaterTilde;": "≵",
                                    "&NotHumpDownHump;": "≎̸",
                                    "&NotHumpEqual;": "≏̸",
                                    "&NotLeftTriangle;": "⋪",
                                    "&NotLeftTriangleBar;": "⧏̸",
                                    "&NotLeftTriangleEqual;": "⋬",
                                    "&NotLess;": "≮",
                                    "&NotLessEqual;": "≰",
                                    "&NotLessGreater;": "≸",
                                    "&NotLessLess;": "≪̸",
                                    "&NotLessSlantEqual;": "⩽̸",
                                    "&NotLessTilde;": "≴",
                                    "&NotNestedGreaterGreater;": "⪢̸",
                                    "&NotNestedLessLess;": "⪡̸",
                                    "&NotPrecedes;": "⊀",
                                    "&NotPrecedesEqual;": "⪯̸",
                                    "&NotPrecedesSlantEqual;": "⋠",
                                    "&NotReverseElement;": "∌",
                                    "&NotRightTriangle;": "⋫",
                                    "&NotRightTriangleBar;": "⧐̸",
                                    "&NotRightTriangleEqual;": "⋭",
                                    "&NotSquareSubset;": "⊏̸",
                                    "&NotSquareSubsetEqual;": "⋢",
                                    "&NotSquareSuperset;": "⊐̸",
                                    "&NotSquareSupersetEqual;": "⋣",
                                    "&NotSubset;": "⊂⃒",
                                    "&NotSubsetEqual;": "⊈",
                                    "&NotSucceeds;": "⊁",
                                    "&NotSucceedsEqual;": "⪰̸",
                                    "&NotSucceedsSlantEqual;": "⋡",
                                    "&NotSucceedsTilde;": "≿̸",
                                    "&NotSuperset;": "⊃⃒",
                                    "&NotSupersetEqual;": "⊉",
                                    "&NotTilde;": "≁",
                                    "&NotTildeEqual;": "≄",
                                    "&NotTildeFullEqual;": "≇",
                                    "&NotTildeTilde;": "≉",
                                    "&NotVerticalBar;": "∤",
                                    "&Nscr;": "𝒩",
                                    "&Ntilde": "Ñ",
                                    "&Ntilde;": "Ñ",
                                    "&Nu;": "Ν",
                                    "&OElig;": "Œ",
                                    "&Oacute": "Ó",
                                    "&Oacute;": "Ó",
                                    "&Ocirc": "Ô",
                                    "&Ocirc;": "Ô",
                                    "&Ocy;": "О",
                                    "&Odblac;": "Ő",
                                    "&Ofr;": "𝔒",
                                    "&Ograve": "Ò",
                                    "&Ograve;": "Ò",
                                    "&Omacr;": "Ō",
                                    "&Omega;": "Ω",
                                    "&Omicron;": "Ο",
                                    "&Oopf;": "𝕆",
                                    "&OpenCurlyDoubleQuote;": "“",
                                    "&OpenCurlyQuote;": "‘",
                                    "&Or;": "⩔",
                                    "&Oscr;": "𝒪",
                                    "&Oslash": "Ø",
                                    "&Oslash;": "Ø",
                                    "&Otilde": "Õ",
                                    "&Otilde;": "Õ",
                                    "&Otimes;": "⨷",
                                    "&Ouml": "Ö",
                                    "&Ouml;": "Ö",
                                    "&OverBar;": "‾",
                                    "&OverBrace;": "⏞",
                                    "&OverBracket;": "⎴",
                                    "&OverParenthesis;": "⏜",
                                    "&PartialD;": "∂",
                                    "&Pcy;": "П",
                                    "&Pfr;": "𝔓",
                                    "&Phi;": "Φ",
                                    "&Pi;": "Π",
                                    "&PlusMinus;": "±",
                                    "&Poincareplane;": "ℌ",
                                    "&Popf;": "ℙ",
                                    "&Pr;": "⪻",
                                    "&Precedes;": "≺",
                                    "&PrecedesEqual;": "⪯",
                                    "&PrecedesSlantEqual;": "≼",
                                    "&PrecedesTilde;": "≾",
                                    "&Prime;": "″",
                                    "&Product;": "∏",
                                    "&Proportion;": "∷",
                                    "&Proportional;": "∝",
                                    "&Pscr;": "𝒫",
                                    "&Psi;": "Ψ",
                                    "&QUOT": '"',
                                    "&QUOT;": '"',
                                    "&Qfr;": "𝔔",
                                    "&Qopf;": "ℚ",
                                    "&Qscr;": "𝒬",
                                    "&RBarr;": "⤐",
                                    "&REG": "®",
                                    "&REG;": "®",
                                    "&Racute;": "Ŕ",
                                    "&Rang;": "⟫",
                                    "&Rarr;": "↠",
                                    "&Rarrtl;": "⤖",
                                    "&Rcaron;": "Ř",
                                    "&Rcedil;": "Ŗ",
                                    "&Rcy;": "Р",
                                    "&Re;": "ℜ",
                                    "&ReverseElement;": "∋",
                                    "&ReverseEquilibrium;": "⇋",
                                    "&ReverseUpEquilibrium;": "⥯",
                                    "&Rfr;": "ℜ",
                                    "&Rho;": "Ρ",
                                    "&RightAngleBracket;": "⟩",
                                    "&RightArrow;": "→",
                                    "&RightArrowBar;": "⇥",
                                    "&RightArrowLeftArrow;": "⇄",
                                    "&RightCeiling;": "⌉",
                                    "&RightDoubleBracket;": "⟧",
                                    "&RightDownTeeVector;": "⥝",
                                    "&RightDownVector;": "⇂",
                                    "&RightDownVectorBar;": "⥕",
                                    "&RightFloor;": "⌋",
                                    "&RightTee;": "⊢",
                                    "&RightTeeArrow;": "↦",
                                    "&RightTeeVector;": "⥛",
                                    "&RightTriangle;": "⊳",
                                    "&RightTriangleBar;": "⧐",
                                    "&RightTriangleEqual;": "⊵",
                                    "&RightUpDownVector;": "⥏",
                                    "&RightUpTeeVector;": "⥜",
                                    "&RightUpVector;": "↾",
                                    "&RightUpVectorBar;": "⥔",
                                    "&RightVector;": "⇀",
                                    "&RightVectorBar;": "⥓",
                                    "&Rightarrow;": "⇒",
                                    "&Ropf;": "ℝ",
                                    "&RoundImplies;": "⥰",
                                    "&Rrightarrow;": "⇛",
                                    "&Rscr;": "ℛ",
                                    "&Rsh;": "↱",
                                    "&RuleDelayed;": "⧴",
                                    "&SHCHcy;": "Щ",
                                    "&SHcy;": "Ш",
                                    "&SOFTcy;": "Ь",
                                    "&Sacute;": "Ś",
                                    "&Sc;": "⪼",
                                    "&Scaron;": "Š",
                                    "&Scedil;": "Ş",
                                    "&Scirc;": "Ŝ",
                                    "&Scy;": "С",
                                    "&Sfr;": "𝔖",
                                    "&ShortDownArrow;": "↓",
                                    "&ShortLeftArrow;": "←",
                                    "&ShortRightArrow;": "→",
                                    "&ShortUpArrow;": "↑",
                                    "&Sigma;": "Σ",
                                    "&SmallCircle;": "∘",
                                    "&Sopf;": "𝕊",
                                    "&Sqrt;": "√",
                                    "&Square;": "□",
                                    "&SquareIntersection;": "⊓",
                                    "&SquareSubset;": "⊏",
                                    "&SquareSubsetEqual;": "⊑",
                                    "&SquareSuperset;": "⊐",
                                    "&SquareSupersetEqual;": "⊒",
                                    "&SquareUnion;": "⊔",
                                    "&Sscr;": "𝒮",
                                    "&Star;": "⋆",
                                    "&Sub;": "⋐",
                                    "&Subset;": "⋐",
                                    "&SubsetEqual;": "⊆",
                                    "&Succeeds;": "≻",
                                    "&SucceedsEqual;": "⪰",
                                    "&SucceedsSlantEqual;": "≽",
                                    "&SucceedsTilde;": "≿",
                                    "&SuchThat;": "∋",
                                    "&Sum;": "∑",
                                    "&Sup;": "⋑",
                                    "&Superset;": "⊃",
                                    "&SupersetEqual;": "⊇",
                                    "&Supset;": "⋑",
                                    "&THORN": "Þ",
                                    "&THORN;": "Þ",
                                    "&TRADE;": "™",
                                    "&TSHcy;": "Ћ",
                                    "&TScy;": "Ц",
                                    "&Tab;": "\t",
                                    "&Tau;": "Τ",
                                    "&Tcaron;": "Ť",
                                    "&Tcedil;": "Ţ",
                                    "&Tcy;": "Т",
                                    "&Tfr;": "𝔗",
                                    "&Therefore;": "∴",
                                    "&Theta;": "Θ",
                                    "&ThickSpace;": "  ",
                                    "&ThinSpace;": " ",
                                    "&Tilde;": "∼",
                                    "&TildeEqual;": "≃",
                                    "&TildeFullEqual;": "≅",
                                    "&TildeTilde;": "≈",
                                    "&Topf;": "𝕋",
                                    "&TripleDot;": "⃛",
                                    "&Tscr;": "𝒯",
                                    "&Tstrok;": "Ŧ",
                                    "&Uacute": "Ú",
                                    "&Uacute;": "Ú",
                                    "&Uarr;": "↟",
                                    "&Uarrocir;": "⥉",
                                    "&Ubrcy;": "Ў",
                                    "&Ubreve;": "Ŭ",
                                    "&Ucirc": "Û",
                                    "&Ucirc;": "Û",
                                    "&Ucy;": "У",
                                    "&Udblac;": "Ű",
                                    "&Ufr;": "𝔘",
                                    "&Ugrave": "Ù",
                                    "&Ugrave;": "Ù",
                                    "&Umacr;": "Ū",
                                    "&UnderBar;": "_",
                                    "&UnderBrace;": "⏟",
                                    "&UnderBracket;": "⎵",
                                    "&UnderParenthesis;": "⏝",
                                    "&Union;": "⋃",
                                    "&UnionPlus;": "⊎",
                                    "&Uogon;": "Ų",
                                    "&Uopf;": "𝕌",
                                    "&UpArrow;": "↑",
                                    "&UpArrowBar;": "⤒",
                                    "&UpArrowDownArrow;": "⇅",
                                    "&UpDownArrow;": "↕",
                                    "&UpEquilibrium;": "⥮",
                                    "&UpTee;": "⊥",
                                    "&UpTeeArrow;": "↥",
                                    "&Uparrow;": "⇑",
                                    "&Updownarrow;": "⇕",
                                    "&UpperLeftArrow;": "↖",
                                    "&UpperRightArrow;": "↗",
                                    "&Upsi;": "ϒ",
                                    "&Upsilon;": "Υ",
                                    "&Uring;": "Ů",
                                    "&Uscr;": "𝒰",
                                    "&Utilde;": "Ũ",
                                    "&Uuml": "Ü",
                                    "&Uuml;": "Ü",
                                    "&VDash;": "⊫",
                                    "&Vbar;": "⫫",
                                    "&Vcy;": "В",
                                    "&Vdash;": "⊩",
                                    "&Vdashl;": "⫦",
                                    "&Vee;": "⋁",
                                    "&Verbar;": "‖",
                                    "&Vert;": "‖",
                                    "&VerticalBar;": "∣",
                                    "&VerticalLine;": "|",
                                    "&VerticalSeparator;": "❘",
                                    "&VerticalTilde;": "≀",
                                    "&VeryThinSpace;": " ",
                                    "&Vfr;": "𝔙",
                                    "&Vopf;": "𝕍",
                                    "&Vscr;": "𝒱",
                                    "&Vvdash;": "⊪",
                                    "&Wcirc;": "Ŵ",
                                    "&Wedge;": "⋀",
                                    "&Wfr;": "𝔚",
                                    "&Wopf;": "𝕎",
                                    "&Wscr;": "𝒲",
                                    "&Xfr;": "𝔛",
                                    "&Xi;": "Ξ",
                                    "&Xopf;": "𝕏",
                                    "&Xscr;": "𝒳",
                                    "&YAcy;": "Я",
                                    "&YIcy;": "Ї",
                                    "&YUcy;": "Ю",
                                    "&Yacute": "Ý",
                                    "&Yacute;": "Ý",
                                    "&Ycirc;": "Ŷ",
                                    "&Ycy;": "Ы",
                                    "&Yfr;": "𝔜",
                                    "&Yopf;": "𝕐",
                                    "&Yscr;": "𝒴",
                                    "&Yuml;": "Ÿ",
                                    "&ZHcy;": "Ж",
                                    "&Zacute;": "Ź",
                                    "&Zcaron;": "Ž",
                                    "&Zcy;": "З",
                                    "&Zdot;": "Ż",
                                    "&ZeroWidthSpace;": "​",
                                    "&Zeta;": "Ζ",
                                    "&Zfr;": "ℨ",
                                    "&Zopf;": "ℤ",
                                    "&Zscr;": "𝒵",
                                    "&aacute": "á",
                                    "&aacute;": "á",
                                    "&abreve;": "ă",
                                    "&ac;": "∾",
                                    "&acE;": "∾̳",
                                    "&acd;": "∿",
                                    "&acirc": "â",
                                    "&acirc;": "â",
                                    "&acute": "´",
                                    "&acute;": "´",
                                    "&acy;": "а",
                                    "&aelig": "æ",
                                    "&aelig;": "æ",
                                    "&af;": "⁡",
                                    "&afr;": "𝔞",
                                    "&agrave": "à",
                                    "&agrave;": "à",
                                    "&alefsym;": "ℵ",
                                    "&aleph;": "ℵ",
                                    "&alpha;": "α",
                                    "&amacr;": "ā",
                                    "&amalg;": "⨿",
                                    "&amp": "&",
                                    "&amp;": "&",
                                    "&and;": "∧",
                                    "&andand;": "⩕",
                                    "&andd;": "⩜",
                                    "&andslope;": "⩘",
                                    "&andv;": "⩚",
                                    "&ang;": "∠",
                                    "&ange;": "⦤",
                                    "&angle;": "∠",
                                    "&angmsd;": "∡",
                                    "&angmsdaa;": "⦨",
                                    "&angmsdab;": "⦩",
                                    "&angmsdac;": "⦪",
                                    "&angmsdad;": "⦫",
                                    "&angmsdae;": "⦬",
                                    "&angmsdaf;": "⦭",
                                    "&angmsdag;": "⦮",
                                    "&angmsdah;": "⦯",
                                    "&angrt;": "∟",
                                    "&angrtvb;": "⊾",
                                    "&angrtvbd;": "⦝",
                                    "&angsph;": "∢",
                                    "&angst;": "Å",
                                    "&angzarr;": "⍼",
                                    "&aogon;": "ą",
                                    "&aopf;": "𝕒",
                                    "&ap;": "≈",
                                    "&apE;": "⩰",
                                    "&apacir;": "⩯",
                                    "&ape;": "≊",
                                    "&apid;": "≋",
                                    "&apos;": "'",
                                    "&approx;": "≈",
                                    "&approxeq;": "≊",
                                    "&aring": "å",
                                    "&aring;": "å",
                                    "&ascr;": "𝒶",
                                    "&ast;": "*",
                                    "&asymp;": "≈",
                                    "&asympeq;": "≍",
                                    "&atilde": "ã",
                                    "&atilde;": "ã",
                                    "&auml": "ä",
                                    "&auml;": "ä",
                                    "&awconint;": "∳",
                                    "&awint;": "⨑",
                                    "&bNot;": "⫭",
                                    "&backcong;": "≌",
                                    "&backepsilon;": "϶",
                                    "&backprime;": "‵",
                                    "&backsim;": "∽",
                                    "&backsimeq;": "⋍",
                                    "&barvee;": "⊽",
                                    "&barwed;": "⌅",
                                    "&barwedge;": "⌅",
                                    "&bbrk;": "⎵",
                                    "&bbrktbrk;": "⎶",
                                    "&bcong;": "≌",
                                    "&bcy;": "б",
                                    "&bdquo;": "„",
                                    "&becaus;": "∵",
                                    "&because;": "∵",
                                    "&bemptyv;": "⦰",
                                    "&bepsi;": "϶",
                                    "&bernou;": "ℬ",
                                    "&beta;": "β",
                                    "&beth;": "ℶ",
                                    "&between;": "≬",
                                    "&bfr;": "𝔟",
                                    "&bigcap;": "⋂",
                                    "&bigcirc;": "◯",
                                    "&bigcup;": "⋃",
                                    "&bigodot;": "⨀",
                                    "&bigoplus;": "⨁",
                                    "&bigotimes;": "⨂",
                                    "&bigsqcup;": "⨆",
                                    "&bigstar;": "★",
                                    "&bigtriangledown;": "▽",
                                    "&bigtriangleup;": "△",
                                    "&biguplus;": "⨄",
                                    "&bigvee;": "⋁",
                                    "&bigwedge;": "⋀",
                                    "&bkarow;": "⤍",
                                    "&blacklozenge;": "⧫",
                                    "&blacksquare;": "▪",
                                    "&blacktriangle;": "▴",
                                    "&blacktriangledown;": "▾",
                                    "&blacktriangleleft;": "◂",
                                    "&blacktriangleright;": "▸",
                                    "&blank;": "␣",
                                    "&blk12;": "▒",
                                    "&blk14;": "░",
                                    "&blk34;": "▓",
                                    "&block;": "█",
                                    "&bne;": "=⃥",
                                    "&bnequiv;": "≡⃥",
                                    "&bnot;": "⌐",
                                    "&bopf;": "𝕓",
                                    "&bot;": "⊥",
                                    "&bottom;": "⊥",
                                    "&bowtie;": "⋈",
                                    "&boxDL;": "╗",
                                    "&boxDR;": "╔",
                                    "&boxDl;": "╖",
                                    "&boxDr;": "╓",
                                    "&boxH;": "═",
                                    "&boxHD;": "╦",
                                    "&boxHU;": "╩",
                                    "&boxHd;": "╤",
                                    "&boxHu;": "╧",
                                    "&boxUL;": "╝",
                                    "&boxUR;": "╚",
                                    "&boxUl;": "╜",
                                    "&boxUr;": "╙",
                                    "&boxV;": "║",
                                    "&boxVH;": "╬",
                                    "&boxVL;": "╣",
                                    "&boxVR;": "╠",
                                    "&boxVh;": "╫",
                                    "&boxVl;": "╢",
                                    "&boxVr;": "╟",
                                    "&boxbox;": "⧉",
                                    "&boxdL;": "╕",
                                    "&boxdR;": "╒",
                                    "&boxdl;": "┐",
                                    "&boxdr;": "┌",
                                    "&boxh;": "─",
                                    "&boxhD;": "╥",
                                    "&boxhU;": "╨",
                                    "&boxhd;": "┬",
                                    "&boxhu;": "┴",
                                    "&boxminus;": "⊟",
                                    "&boxplus;": "⊞",
                                    "&boxtimes;": "⊠",
                                    "&boxuL;": "╛",
                                    "&boxuR;": "╘",
                                    "&boxul;": "┘",
                                    "&boxur;": "└",
                                    "&boxv;": "│",
                                    "&boxvH;": "╪",
                                    "&boxvL;": "╡",
                                    "&boxvR;": "╞",
                                    "&boxvh;": "┼",
                                    "&boxvl;": "┤",
                                    "&boxvr;": "├",
                                    "&bprime;": "‵",
                                    "&breve;": "˘",
                                    "&brvbar": "¦",
                                    "&brvbar;": "¦",
                                    "&bscr;": "𝒷",
                                    "&bsemi;": "⁏",
                                    "&bsim;": "∽",
                                    "&bsime;": "⋍",
                                    "&bsol;": "\\",
                                    "&bsolb;": "⧅",
                                    "&bsolhsub;": "⟈",
                                    "&bull;": "•",
                                    "&bullet;": "•",
                                    "&bump;": "≎",
                                    "&bumpE;": "⪮",
                                    "&bumpe;": "≏",
                                    "&bumpeq;": "≏",
                                    "&cacute;": "ć",
                                    "&cap;": "∩",
                                    "&capand;": "⩄",
                                    "&capbrcup;": "⩉",
                                    "&capcap;": "⩋",
                                    "&capcup;": "⩇",
                                    "&capdot;": "⩀",
                                    "&caps;": "∩︀",
                                    "&caret;": "⁁",
                                    "&caron;": "ˇ",
                                    "&ccaps;": "⩍",
                                    "&ccaron;": "č",
                                    "&ccedil": "ç",
                                    "&ccedil;": "ç",
                                    "&ccirc;": "ĉ",
                                    "&ccups;": "⩌",
                                    "&ccupssm;": "⩐",
                                    "&cdot;": "ċ",
                                    "&cedil": "¸",
                                    "&cedil;": "¸",
                                    "&cemptyv;": "⦲",
                                    "&cent": "¢",
                                    "&cent;": "¢",
                                    "&centerdot;": "·",
                                    "&cfr;": "𝔠",
                                    "&chcy;": "ч",
                                    "&check;": "✓",
                                    "&checkmark;": "✓",
                                    "&chi;": "χ",
                                    "&cir;": "○",
                                    "&cirE;": "⧃",
                                    "&circ;": "ˆ",
                                    "&circeq;": "≗",
                                    "&circlearrowleft;": "↺",
                                    "&circlearrowright;": "↻",
                                    "&circledR;": "®",
                                    "&circledS;": "Ⓢ",
                                    "&circledast;": "⊛",
                                    "&circledcirc;": "⊚",
                                    "&circleddash;": "⊝",
                                    "&cire;": "≗",
                                    "&cirfnint;": "⨐",
                                    "&cirmid;": "⫯",
                                    "&cirscir;": "⧂",
                                    "&clubs;": "♣",
                                    "&clubsuit;": "♣",
                                    "&colon;": ":",
                                    "&colone;": "≔",
                                    "&coloneq;": "≔",
                                    "&comma;": ",",
                                    "&commat;": "@",
                                    "&comp;": "∁",
                                    "&compfn;": "∘",
                                    "&complement;": "∁",
                                    "&complexes;": "ℂ",
                                    "&cong;": "≅",
                                    "&congdot;": "⩭",
                                    "&conint;": "∮",
                                    "&copf;": "𝕔",
                                    "&coprod;": "∐",
                                    "&copy": "©",
                                    "&copy;": "©",
                                    "&copysr;": "℗",
                                    "&crarr;": "↵",
                                    "&cross;": "✗",
                                    "&cscr;": "𝒸",
                                    "&csub;": "⫏",
                                    "&csube;": "⫑",
                                    "&csup;": "⫐",
                                    "&csupe;": "⫒",
                                    "&ctdot;": "⋯",
                                    "&cudarrl;": "⤸",
                                    "&cudarrr;": "⤵",
                                    "&cuepr;": "⋞",
                                    "&cuesc;": "⋟",
                                    "&cularr;": "↶",
                                    "&cularrp;": "⤽",
                                    "&cup;": "∪",
                                    "&cupbrcap;": "⩈",
                                    "&cupcap;": "⩆",
                                    "&cupcup;": "⩊",
                                    "&cupdot;": "⊍",
                                    "&cupor;": "⩅",
                                    "&cups;": "∪︀",
                                    "&curarr;": "↷",
                                    "&curarrm;": "⤼",
                                    "&curlyeqprec;": "⋞",
                                    "&curlyeqsucc;": "⋟",
                                    "&curlyvee;": "⋎",
                                    "&curlywedge;": "⋏",
                                    "&curren": "¤",
                                    "&curren;": "¤",
                                    "&curvearrowleft;": "↶",
                                    "&curvearrowright;": "↷",
                                    "&cuvee;": "⋎",
                                    "&cuwed;": "⋏",
                                    "&cwconint;": "∲",
                                    "&cwint;": "∱",
                                    "&cylcty;": "⌭",
                                    "&dArr;": "⇓",
                                    "&dHar;": "⥥",
                                    "&dagger;": "†",
                                    "&daleth;": "ℸ",
                                    "&darr;": "↓",
                                    "&dash;": "‐",
                                    "&dashv;": "⊣",
                                    "&dbkarow;": "⤏",
                                    "&dblac;": "˝",
                                    "&dcaron;": "ď",
                                    "&dcy;": "д",
                                    "&dd;": "ⅆ",
                                    "&ddagger;": "‡",
                                    "&ddarr;": "⇊",
                                    "&ddotseq;": "⩷",
                                    "&deg": "°",
                                    "&deg;": "°",
                                    "&delta;": "δ",
                                    "&demptyv;": "⦱",
                                    "&dfisht;": "⥿",
                                    "&dfr;": "𝔡",
                                    "&dharl;": "⇃",
                                    "&dharr;": "⇂",
                                    "&diam;": "⋄",
                                    "&diamond;": "⋄",
                                    "&diamondsuit;": "♦",
                                    "&diams;": "♦",
                                    "&die;": "¨",
                                    "&digamma;": "ϝ",
                                    "&disin;": "⋲",
                                    "&div;": "÷",
                                    "&divide": "÷",
                                    "&divide;": "÷",
                                    "&divideontimes;": "⋇",
                                    "&divonx;": "⋇",
                                    "&djcy;": "ђ",
                                    "&dlcorn;": "⌞",
                                    "&dlcrop;": "⌍",
                                    "&dollar;": "$",
                                    "&dopf;": "𝕕",
                                    "&dot;": "˙",
                                    "&doteq;": "≐",
                                    "&doteqdot;": "≑",
                                    "&dotminus;": "∸",
                                    "&dotplus;": "∔",
                                    "&dotsquare;": "⊡",
                                    "&doublebarwedge;": "⌆",
                                    "&downarrow;": "↓",
                                    "&downdownarrows;": "⇊",
                                    "&downharpoonleft;": "⇃",
                                    "&downharpoonright;": "⇂",
                                    "&drbkarow;": "⤐",
                                    "&drcorn;": "⌟",
                                    "&drcrop;": "⌌",
                                    "&dscr;": "𝒹",
                                    "&dscy;": "ѕ",
                                    "&dsol;": "⧶",
                                    "&dstrok;": "đ",
                                    "&dtdot;": "⋱",
                                    "&dtri;": "▿",
                                    "&dtrif;": "▾",
                                    "&duarr;": "⇵",
                                    "&duhar;": "⥯",
                                    "&dwangle;": "⦦",
                                    "&dzcy;": "џ",
                                    "&dzigrarr;": "⟿",
                                    "&eDDot;": "⩷",
                                    "&eDot;": "≑",
                                    "&eacute": "é",
                                    "&eacute;": "é",
                                    "&easter;": "⩮",
                                    "&ecaron;": "ě",
                                    "&ecir;": "≖",
                                    "&ecirc": "ê",
                                    "&ecirc;": "ê",
                                    "&ecolon;": "≕",
                                    "&ecy;": "э",
                                    "&edot;": "ė",
                                    "&ee;": "ⅇ",
                                    "&efDot;": "≒",
                                    "&efr;": "𝔢",
                                    "&eg;": "⪚",
                                    "&egrave": "è",
                                    "&egrave;": "è",
                                    "&egs;": "⪖",
                                    "&egsdot;": "⪘",
                                    "&el;": "⪙",
                                    "&elinters;": "⏧",
                                    "&ell;": "ℓ",
                                    "&els;": "⪕",
                                    "&elsdot;": "⪗",
                                    "&emacr;": "ē",
                                    "&empty;": "∅",
                                    "&emptyset;": "∅",
                                    "&emptyv;": "∅",
                                    "&emsp13;": " ",
                                    "&emsp14;": " ",
                                    "&emsp;": " ",
                                    "&eng;": "ŋ",
                                    "&ensp;": " ",
                                    "&eogon;": "ę",
                                    "&eopf;": "𝕖",
                                    "&epar;": "⋕",
                                    "&eparsl;": "⧣",
                                    "&eplus;": "⩱",
                                    "&epsi;": "ε",
                                    "&epsilon;": "ε",
                                    "&epsiv;": "ϵ",
                                    "&eqcirc;": "≖",
                                    "&eqcolon;": "≕",
                                    "&eqsim;": "≂",
                                    "&eqslantgtr;": "⪖",
                                    "&eqslantless;": "⪕",
                                    "&equals;": "=",
                                    "&equest;": "≟",
                                    "&equiv;": "≡",
                                    "&equivDD;": "⩸",
                                    "&eqvparsl;": "⧥",
                                    "&erDot;": "≓",
                                    "&erarr;": "⥱",
                                    "&escr;": "ℯ",
                                    "&esdot;": "≐",
                                    "&esim;": "≂",
                                    "&eta;": "η",
                                    "&eth": "ð",
                                    "&eth;": "ð",
                                    "&euml": "ë",
                                    "&euml;": "ë",
                                    "&euro;": "€",
                                    "&excl;": "!",
                                    "&exist;": "∃",
                                    "&expectation;": "ℰ",
                                    "&exponentiale;": "ⅇ",
                                    "&fallingdotseq;": "≒",
                                    "&fcy;": "ф",
                                    "&female;": "♀",
                                    "&ffilig;": "ﬃ",
                                    "&fflig;": "ﬀ",
                                    "&ffllig;": "ﬄ",
                                    "&ffr;": "𝔣",
                                    "&filig;": "ﬁ",
                                    "&fjlig;": "fj",
                                    "&flat;": "♭",
                                    "&fllig;": "ﬂ",
                                    "&fltns;": "▱",
                                    "&fnof;": "ƒ",
                                    "&fopf;": "𝕗",
                                    "&forall;": "∀",
                                    "&fork;": "⋔",
                                    "&forkv;": "⫙",
                                    "&fpartint;": "⨍",
                                    "&frac12": "½",
                                    "&frac12;": "½",
                                    "&frac13;": "⅓",
                                    "&frac14": "¼",
                                    "&frac14;": "¼",
                                    "&frac15;": "⅕",
                                    "&frac16;": "⅙",
                                    "&frac18;": "⅛",
                                    "&frac23;": "⅔",
                                    "&frac25;": "⅖",
                                    "&frac34": "¾",
                                    "&frac34;": "¾",
                                    "&frac35;": "⅗",
                                    "&frac38;": "⅜",
                                    "&frac45;": "⅘",
                                    "&frac56;": "⅚",
                                    "&frac58;": "⅝",
                                    "&frac78;": "⅞",
                                    "&frasl;": "⁄",
                                    "&frown;": "⌢",
                                    "&fscr;": "𝒻",
                                    "&gE;": "≧",
                                    "&gEl;": "⪌",
                                    "&gacute;": "ǵ",
                                    "&gamma;": "γ",
                                    "&gammad;": "ϝ",
                                    "&gap;": "⪆",
                                    "&gbreve;": "ğ",
                                    "&gcirc;": "ĝ",
                                    "&gcy;": "г",
                                    "&gdot;": "ġ",
                                    "&ge;": "≥",
                                    "&gel;": "⋛",
                                    "&geq;": "≥",
                                    "&geqq;": "≧",
                                    "&geqslant;": "⩾",
                                    "&ges;": "⩾",
                                    "&gescc;": "⪩",
                                    "&gesdot;": "⪀",
                                    "&gesdoto;": "⪂",
                                    "&gesdotol;": "⪄",
                                    "&gesl;": "⋛︀",
                                    "&gesles;": "⪔",
                                    "&gfr;": "𝔤",
                                    "&gg;": "≫",
                                    "&ggg;": "⋙",
                                    "&gimel;": "ℷ",
                                    "&gjcy;": "ѓ",
                                    "&gl;": "≷",
                                    "&glE;": "⪒",
                                    "&gla;": "⪥",
                                    "&glj;": "⪤",
                                    "&gnE;": "≩",
                                    "&gnap;": "⪊",
                                    "&gnapprox;": "⪊",
                                    "&gne;": "⪈",
                                    "&gneq;": "⪈",
                                    "&gneqq;": "≩",
                                    "&gnsim;": "⋧",
                                    "&gopf;": "𝕘",
                                    "&grave;": "`",
                                    "&gscr;": "ℊ",
                                    "&gsim;": "≳",
                                    "&gsime;": "⪎",
                                    "&gsiml;": "⪐",
                                    "&gt": ">",
                                    "&gt;": ">",
                                    "&gtcc;": "⪧",
                                    "&gtcir;": "⩺",
                                    "&gtdot;": "⋗",
                                    "&gtlPar;": "⦕",
                                    "&gtquest;": "⩼",
                                    "&gtrapprox;": "⪆",
                                    "&gtrarr;": "⥸",
                                    "&gtrdot;": "⋗",
                                    "&gtreqless;": "⋛",
                                    "&gtreqqless;": "⪌",
                                    "&gtrless;": "≷",
                                    "&gtrsim;": "≳",
                                    "&gvertneqq;": "≩︀",
                                    "&gvnE;": "≩︀",
                                    "&hArr;": "⇔",
                                    "&hairsp;": " ",
                                    "&half;": "½",
                                    "&hamilt;": "ℋ",
                                    "&hardcy;": "ъ",
                                    "&harr;": "↔",
                                    "&harrcir;": "⥈",
                                    "&harrw;": "↭",
                                    "&hbar;": "ℏ",
                                    "&hcirc;": "ĥ",
                                    "&hearts;": "♥",
                                    "&heartsuit;": "♥",
                                    "&hellip;": "…",
                                    "&hercon;": "⊹",
                                    "&hfr;": "𝔥",
                                    "&hksearow;": "⤥",
                                    "&hkswarow;": "⤦",
                                    "&hoarr;": "⇿",
                                    "&homtht;": "∻",
                                    "&hookleftarrow;": "↩",
                                    "&hookrightarrow;": "↪",
                                    "&hopf;": "𝕙",
                                    "&horbar;": "―",
                                    "&hscr;": "𝒽",
                                    "&hslash;": "ℏ",
                                    "&hstrok;": "ħ",
                                    "&hybull;": "⁃",
                                    "&hyphen;": "‐",
                                    "&iacute": "í",
                                    "&iacute;": "í",
                                    "&ic;": "⁣",
                                    "&icirc": "î",
                                    "&icirc;": "î",
                                    "&icy;": "и",
                                    "&iecy;": "е",
                                    "&iexcl": "¡",
                                    "&iexcl;": "¡",
                                    "&iff;": "⇔",
                                    "&ifr;": "𝔦",
                                    "&igrave": "ì",
                                    "&igrave;": "ì",
                                    "&ii;": "ⅈ",
                                    "&iiiint;": "⨌",
                                    "&iiint;": "∭",
                                    "&iinfin;": "⧜",
                                    "&iiota;": "℩",
                                    "&ijlig;": "ĳ",
                                    "&imacr;": "ī",
                                    "&image;": "ℑ",
                                    "&imagline;": "ℐ",
                                    "&imagpart;": "ℑ",
                                    "&imath;": "ı",
                                    "&imof;": "⊷",
                                    "&imped;": "Ƶ",
                                    "&in;": "∈",
                                    "&incare;": "℅",
                                    "&infin;": "∞",
                                    "&infintie;": "⧝",
                                    "&inodot;": "ı",
                                    "&int;": "∫",
                                    "&intcal;": "⊺",
                                    "&integers;": "ℤ",
                                    "&intercal;": "⊺",
                                    "&intlarhk;": "⨗",
                                    "&intprod;": "⨼",
                                    "&iocy;": "ё",
                                    "&iogon;": "į",
                                    "&iopf;": "𝕚",
                                    "&iota;": "ι",
                                    "&iprod;": "⨼",
                                    "&iquest": "¿",
                                    "&iquest;": "¿",
                                    "&iscr;": "𝒾",
                                    "&isin;": "∈",
                                    "&isinE;": "⋹",
                                    "&isindot;": "⋵",
                                    "&isins;": "⋴",
                                    "&isinsv;": "⋳",
                                    "&isinv;": "∈",
                                    "&it;": "⁢",
                                    "&itilde;": "ĩ",
                                    "&iukcy;": "і",
                                    "&iuml": "ï",
                                    "&iuml;": "ï",
                                    "&jcirc;": "ĵ",
                                    "&jcy;": "й",
                                    "&jfr;": "𝔧",
                                    "&jmath;": "ȷ",
                                    "&jopf;": "𝕛",
                                    "&jscr;": "𝒿",
                                    "&jsercy;": "ј",
                                    "&jukcy;": "є",
                                    "&kappa;": "κ",
                                    "&kappav;": "ϰ",
                                    "&kcedil;": "ķ",
                                    "&kcy;": "к",
                                    "&kfr;": "𝔨",
                                    "&kgreen;": "ĸ",
                                    "&khcy;": "х",
                                    "&kjcy;": "ќ",
                                    "&kopf;": "𝕜",
                                    "&kscr;": "𝓀",
                                    "&lAarr;": "⇚",
                                    "&lArr;": "⇐",
                                    "&lAtail;": "⤛",
                                    "&lBarr;": "⤎",
                                    "&lE;": "≦",
                                    "&lEg;": "⪋",
                                    "&lHar;": "⥢",
                                    "&lacute;": "ĺ",
                                    "&laemptyv;": "⦴",
                                    "&lagran;": "ℒ",
                                    "&lambda;": "λ",
                                    "&lang;": "⟨",
                                    "&langd;": "⦑",
                                    "&langle;": "⟨",
                                    "&lap;": "⪅",
                                    "&laquo": "«",
                                    "&laquo;": "«",
                                    "&larr;": "←",
                                    "&larrb;": "⇤",
                                    "&larrbfs;": "⤟",
                                    "&larrfs;": "⤝",
                                    "&larrhk;": "↩",
                                    "&larrlp;": "↫",
                                    "&larrpl;": "⤹",
                                    "&larrsim;": "⥳",
                                    "&larrtl;": "↢",
                                    "&lat;": "⪫",
                                    "&latail;": "⤙",
                                    "&late;": "⪭",
                                    "&lates;": "⪭︀",
                                    "&lbarr;": "⤌",
                                    "&lbbrk;": "❲",
                                    "&lbrace;": "{",
                                    "&lbrack;": "[",
                                    "&lbrke;": "⦋",
                                    "&lbrksld;": "⦏",
                                    "&lbrkslu;": "⦍",
                                    "&lcaron;": "ľ",
                                    "&lcedil;": "ļ",
                                    "&lceil;": "⌈",
                                    "&lcub;": "{",
                                    "&lcy;": "л",
                                    "&ldca;": "⤶",
                                    "&ldquo;": "“",
                                    "&ldquor;": "„",
                                    "&ldrdhar;": "⥧",
                                    "&ldrushar;": "⥋",
                                    "&ldsh;": "↲",
                                    "&le;": "≤",
                                    "&leftarrow;": "←",
                                    "&leftarrowtail;": "↢",
                                    "&leftharpoondown;": "↽",
                                    "&leftharpoonup;": "↼",
                                    "&leftleftarrows;": "⇇",
                                    "&leftrightarrow;": "↔",
                                    "&leftrightarrows;": "⇆",
                                    "&leftrightharpoons;": "⇋",
                                    "&leftrightsquigarrow;": "↭",
                                    "&leftthreetimes;": "⋋",
                                    "&leg;": "⋚",
                                    "&leq;": "≤",
                                    "&leqq;": "≦",
                                    "&leqslant;": "⩽",
                                    "&les;": "⩽",
                                    "&lescc;": "⪨",
                                    "&lesdot;": "⩿",
                                    "&lesdoto;": "⪁",
                                    "&lesdotor;": "⪃",
                                    "&lesg;": "⋚︀",
                                    "&lesges;": "⪓",
                                    "&lessapprox;": "⪅",
                                    "&lessdot;": "⋖",
                                    "&lesseqgtr;": "⋚",
                                    "&lesseqqgtr;": "⪋",
                                    "&lessgtr;": "≶",
                                    "&lesssim;": "≲",
                                    "&lfisht;": "⥼",
                                    "&lfloor;": "⌊",
                                    "&lfr;": "𝔩",
                                    "&lg;": "≶",
                                    "&lgE;": "⪑",
                                    "&lhard;": "↽",
                                    "&lharu;": "↼",
                                    "&lharul;": "⥪",
                                    "&lhblk;": "▄",
                                    "&ljcy;": "љ",
                                    "&ll;": "≪",
                                    "&llarr;": "⇇",
                                    "&llcorner;": "⌞",
                                    "&llhard;": "⥫",
                                    "&lltri;": "◺",
                                    "&lmidot;": "ŀ",
                                    "&lmoust;": "⎰",
                                    "&lmoustache;": "⎰",
                                    "&lnE;": "≨",
                                    "&lnap;": "⪉",
                                    "&lnapprox;": "⪉",
                                    "&lne;": "⪇",
                                    "&lneq;": "⪇",
                                    "&lneqq;": "≨",
                                    "&lnsim;": "⋦",
                                    "&loang;": "⟬",
                                    "&loarr;": "⇽",
                                    "&lobrk;": "⟦",
                                    "&longleftarrow;": "⟵",
                                    "&longleftrightarrow;": "⟷",
                                    "&longmapsto;": "⟼",
                                    "&longrightarrow;": "⟶",
                                    "&looparrowleft;": "↫",
                                    "&looparrowright;": "↬",
                                    "&lopar;": "⦅",
                                    "&lopf;": "𝕝",
                                    "&loplus;": "⨭",
                                    "&lotimes;": "⨴",
                                    "&lowast;": "∗",
                                    "&lowbar;": "_",
                                    "&loz;": "◊",
                                    "&lozenge;": "◊",
                                    "&lozf;": "⧫",
                                    "&lpar;": "(",
                                    "&lparlt;": "⦓",
                                    "&lrarr;": "⇆",
                                    "&lrcorner;": "⌟",
                                    "&lrhar;": "⇋",
                                    "&lrhard;": "⥭",
                                    "&lrm;": "‎",
                                    "&lrtri;": "⊿",
                                    "&lsaquo;": "‹",
                                    "&lscr;": "𝓁",
                                    "&lsh;": "↰",
                                    "&lsim;": "≲",
                                    "&lsime;": "⪍",
                                    "&lsimg;": "⪏",
                                    "&lsqb;": "[",
                                    "&lsquo;": "‘",
                                    "&lsquor;": "‚",
                                    "&lstrok;": "ł",
                                    "&lt": "<",
                                    "&lt;": "<",
                                    "&ltcc;": "⪦",
                                    "&ltcir;": "⩹",
                                    "&ltdot;": "⋖",
                                    "&lthree;": "⋋",
                                    "&ltimes;": "⋉",
                                    "&ltlarr;": "⥶",
                                    "&ltquest;": "⩻",
                                    "&ltrPar;": "⦖",
                                    "&ltri;": "◃",
                                    "&ltrie;": "⊴",
                                    "&ltrif;": "◂",
                                    "&lurdshar;": "⥊",
                                    "&luruhar;": "⥦",
                                    "&lvertneqq;": "≨︀",
                                    "&lvnE;": "≨︀",
                                    "&mDDot;": "∺",
                                    "&macr": "¯",
                                    "&macr;": "¯",
                                    "&male;": "♂",
                                    "&malt;": "✠",
                                    "&maltese;": "✠",
                                    "&map;": "↦",
                                    "&mapsto;": "↦",
                                    "&mapstodown;": "↧",
                                    "&mapstoleft;": "↤",
                                    "&mapstoup;": "↥",
                                    "&marker;": "▮",
                                    "&mcomma;": "⨩",
                                    "&mcy;": "м",
                                    "&mdash;": "—",
                                    "&measuredangle;": "∡",
                                    "&mfr;": "𝔪",
                                    "&mho;": "℧",
                                    "&micro": "µ",
                                    "&micro;": "µ",
                                    "&mid;": "∣",
                                    "&midast;": "*",
                                    "&midcir;": "⫰",
                                    "&middot": "·",
                                    "&middot;": "·",
                                    "&minus;": "−",
                                    "&minusb;": "⊟",
                                    "&minusd;": "∸",
                                    "&minusdu;": "⨪",
                                    "&mlcp;": "⫛",
                                    "&mldr;": "…",
                                    "&mnplus;": "∓",
                                    "&models;": "⊧",
                                    "&mopf;": "𝕞",
                                    "&mp;": "∓",
                                    "&mscr;": "𝓂",
                                    "&mstpos;": "∾",
                                    "&mu;": "μ",
                                    "&multimap;": "⊸",
                                    "&mumap;": "⊸",
                                    "&nGg;": "⋙̸",
                                    "&nGt;": "≫⃒",
                                    "&nGtv;": "≫̸",
                                    "&nLeftarrow;": "⇍",
                                    "&nLeftrightarrow;": "⇎",
                                    "&nLl;": "⋘̸",
                                    "&nLt;": "≪⃒",
                                    "&nLtv;": "≪̸",
                                    "&nRightarrow;": "⇏",
                                    "&nVDash;": "⊯",
                                    "&nVdash;": "⊮",
                                    "&nabla;": "∇",
                                    "&nacute;": "ń",
                                    "&nang;": "∠⃒",
                                    "&nap;": "≉",
                                    "&napE;": "⩰̸",
                                    "&napid;": "≋̸",
                                    "&napos;": "ŉ",
                                    "&napprox;": "≉",
                                    "&natur;": "♮",
                                    "&natural;": "♮",
                                    "&naturals;": "ℕ",
                                    "&nbsp": " ",
                                    "&nbsp;": " ",
                                    "&nbump;": "≎̸",
                                    "&nbumpe;": "≏̸",
                                    "&ncap;": "⩃",
                                    "&ncaron;": "ň",
                                    "&ncedil;": "ņ",
                                    "&ncong;": "≇",
                                    "&ncongdot;": "⩭̸",
                                    "&ncup;": "⩂",
                                    "&ncy;": "н",
                                    "&ndash;": "–",
                                    "&ne;": "≠",
                                    "&neArr;": "⇗",
                                    "&nearhk;": "⤤",
                                    "&nearr;": "↗",
                                    "&nearrow;": "↗",
                                    "&nedot;": "≐̸",
                                    "&nequiv;": "≢",
                                    "&nesear;": "⤨",
                                    "&nesim;": "≂̸",
                                    "&nexist;": "∄",
                                    "&nexists;": "∄",
                                    "&nfr;": "𝔫",
                                    "&ngE;": "≧̸",
                                    "&nge;": "≱",
                                    "&ngeq;": "≱",
                                    "&ngeqq;": "≧̸",
                                    "&ngeqslant;": "⩾̸",
                                    "&nges;": "⩾̸",
                                    "&ngsim;": "≵",
                                    "&ngt;": "≯",
                                    "&ngtr;": "≯",
                                    "&nhArr;": "⇎",
                                    "&nharr;": "↮",
                                    "&nhpar;": "⫲",
                                    "&ni;": "∋",
                                    "&nis;": "⋼",
                                    "&nisd;": "⋺",
                                    "&niv;": "∋",
                                    "&njcy;": "њ",
                                    "&nlArr;": "⇍",
                                    "&nlE;": "≦̸",
                                    "&nlarr;": "↚",
                                    "&nldr;": "‥",
                                    "&nle;": "≰",
                                    "&nleftarrow;": "↚",
                                    "&nleftrightarrow;": "↮",
                                    "&nleq;": "≰",
                                    "&nleqq;": "≦̸",
                                    "&nleqslant;": "⩽̸",
                                    "&nles;": "⩽̸",
                                    "&nless;": "≮",
                                    "&nlsim;": "≴",
                                    "&nlt;": "≮",
                                    "&nltri;": "⋪",
                                    "&nltrie;": "⋬",
                                    "&nmid;": "∤",
                                    "&nopf;": "𝕟",
                                    "&not": "¬",
                                    "&not;": "¬",
                                    "&notin;": "∉",
                                    "&notinE;": "⋹̸",
                                    "&notindot;": "⋵̸",
                                    "&notinva;": "∉",
                                    "&notinvb;": "⋷",
                                    "&notinvc;": "⋶",
                                    "&notni;": "∌",
                                    "&notniva;": "∌",
                                    "&notnivb;": "⋾",
                                    "&notnivc;": "⋽",
                                    "&npar;": "∦",
                                    "&nparallel;": "∦",
                                    "&nparsl;": "⫽⃥",
                                    "&npart;": "∂̸",
                                    "&npolint;": "⨔",
                                    "&npr;": "⊀",
                                    "&nprcue;": "⋠",
                                    "&npre;": "⪯̸",
                                    "&nprec;": "⊀",
                                    "&npreceq;": "⪯̸",
                                    "&nrArr;": "⇏",
                                    "&nrarr;": "↛",
                                    "&nrarrc;": "⤳̸",
                                    "&nrarrw;": "↝̸",
                                    "&nrightarrow;": "↛",
                                    "&nrtri;": "⋫",
                                    "&nrtrie;": "⋭",
                                    "&nsc;": "⊁",
                                    "&nsccue;": "⋡",
                                    "&nsce;": "⪰̸",
                                    "&nscr;": "𝓃",
                                    "&nshortmid;": "∤",
                                    "&nshortparallel;": "∦",
                                    "&nsim;": "≁",
                                    "&nsime;": "≄",
                                    "&nsimeq;": "≄",
                                    "&nsmid;": "∤",
                                    "&nspar;": "∦",
                                    "&nsqsube;": "⋢",
                                    "&nsqsupe;": "⋣",
                                    "&nsub;": "⊄",
                                    "&nsubE;": "⫅̸",
                                    "&nsube;": "⊈",
                                    "&nsubset;": "⊂⃒",
                                    "&nsubseteq;": "⊈",
                                    "&nsubseteqq;": "⫅̸",
                                    "&nsucc;": "⊁",
                                    "&nsucceq;": "⪰̸",
                                    "&nsup;": "⊅",
                                    "&nsupE;": "⫆̸",
                                    "&nsupe;": "⊉",
                                    "&nsupset;": "⊃⃒",
                                    "&nsupseteq;": "⊉",
                                    "&nsupseteqq;": "⫆̸",
                                    "&ntgl;": "≹",
                                    "&ntilde": "ñ",
                                    "&ntilde;": "ñ",
                                    "&ntlg;": "≸",
                                    "&ntriangleleft;": "⋪",
                                    "&ntrianglelefteq;": "⋬",
                                    "&ntriangleright;": "⋫",
                                    "&ntrianglerighteq;": "⋭",
                                    "&nu;": "ν",
                                    "&num;": "#",
                                    "&numero;": "№",
                                    "&numsp;": " ",
                                    "&nvDash;": "⊭",
                                    "&nvHarr;": "⤄",
                                    "&nvap;": "≍⃒",
                                    "&nvdash;": "⊬",
                                    "&nvge;": "≥⃒",
                                    "&nvgt;": ">⃒",
                                    "&nvinfin;": "⧞",
                                    "&nvlArr;": "⤂",
                                    "&nvle;": "≤⃒",
                                    "&nvlt;": "<⃒",
                                    "&nvltrie;": "⊴⃒",
                                    "&nvrArr;": "⤃",
                                    "&nvrtrie;": "⊵⃒",
                                    "&nvsim;": "∼⃒",
                                    "&nwArr;": "⇖",
                                    "&nwarhk;": "⤣",
                                    "&nwarr;": "↖",
                                    "&nwarrow;": "↖",
                                    "&nwnear;": "⤧",
                                    "&oS;": "Ⓢ",
                                    "&oacute": "ó",
                                    "&oacute;": "ó",
                                    "&oast;": "⊛",
                                    "&ocir;": "⊚",
                                    "&ocirc": "ô",
                                    "&ocirc;": "ô",
                                    "&ocy;": "о",
                                    "&odash;": "⊝",
                                    "&odblac;": "ő",
                                    "&odiv;": "⨸",
                                    "&odot;": "⊙",
                                    "&odsold;": "⦼",
                                    "&oelig;": "œ",
                                    "&ofcir;": "⦿",
                                    "&ofr;": "𝔬",
                                    "&ogon;": "˛",
                                    "&ograve": "ò",
                                    "&ograve;": "ò",
                                    "&ogt;": "⧁",
                                    "&ohbar;": "⦵",
                                    "&ohm;": "Ω",
                                    "&oint;": "∮",
                                    "&olarr;": "↺",
                                    "&olcir;": "⦾",
                                    "&olcross;": "⦻",
                                    "&oline;": "‾",
                                    "&olt;": "⧀",
                                    "&omacr;": "ō",
                                    "&omega;": "ω",
                                    "&omicron;": "ο",
                                    "&omid;": "⦶",
                                    "&ominus;": "⊖",
                                    "&oopf;": "𝕠",
                                    "&opar;": "⦷",
                                    "&operp;": "⦹",
                                    "&oplus;": "⊕",
                                    "&or;": "∨",
                                    "&orarr;": "↻",
                                    "&ord;": "⩝",
                                    "&order;": "ℴ",
                                    "&orderof;": "ℴ",
                                    "&ordf": "ª",
                                    "&ordf;": "ª",
                                    "&ordm": "º",
                                    "&ordm;": "º",
                                    "&origof;": "⊶",
                                    "&oror;": "⩖",
                                    "&orslope;": "⩗",
                                    "&orv;": "⩛",
                                    "&oscr;": "ℴ",
                                    "&oslash": "ø",
                                    "&oslash;": "ø",
                                    "&osol;": "⊘",
                                    "&otilde": "õ",
                                    "&otilde;": "õ",
                                    "&otimes;": "⊗",
                                    "&otimesas;": "⨶",
                                    "&ouml": "ö",
                                    "&ouml;": "ö",
                                    "&ovbar;": "⌽",
                                    "&par;": "∥",
                                    "&para": "¶",
                                    "&para;": "¶",
                                    "&parallel;": "∥",
                                    "&parsim;": "⫳",
                                    "&parsl;": "⫽",
                                    "&part;": "∂",
                                    "&pcy;": "п",
                                    "&percnt;": "%",
                                    "&period;": ".",
                                    "&permil;": "‰",
                                    "&perp;": "⊥",
                                    "&pertenk;": "‱",
                                    "&pfr;": "𝔭",
                                    "&phi;": "φ",
                                    "&phiv;": "ϕ",
                                    "&phmmat;": "ℳ",
                                    "&phone;": "☎",
                                    "&pi;": "π",
                                    "&pitchfork;": "⋔",
                                    "&piv;": "ϖ",
                                    "&planck;": "ℏ",
                                    "&planckh;": "ℎ",
                                    "&plankv;": "ℏ",
                                    "&plus;": "+",
                                    "&plusacir;": "⨣",
                                    "&plusb;": "⊞",
                                    "&pluscir;": "⨢",
                                    "&plusdo;": "∔",
                                    "&plusdu;": "⨥",
                                    "&pluse;": "⩲",
                                    "&plusmn": "±",
                                    "&plusmn;": "±",
                                    "&plussim;": "⨦",
                                    "&plustwo;": "⨧",
                                    "&pm;": "±",
                                    "&pointint;": "⨕",
                                    "&popf;": "𝕡",
                                    "&pound": "£",
                                    "&pound;": "£",
                                    "&pr;": "≺",
                                    "&prE;": "⪳",
                                    "&prap;": "⪷",
                                    "&prcue;": "≼",
                                    "&pre;": "⪯",
                                    "&prec;": "≺",
                                    "&precapprox;": "⪷",
                                    "&preccurlyeq;": "≼",
                                    "&preceq;": "⪯",
                                    "&precnapprox;": "⪹",
                                    "&precneqq;": "⪵",
                                    "&precnsim;": "⋨",
                                    "&precsim;": "≾",
                                    "&prime;": "′",
                                    "&primes;": "ℙ",
                                    "&prnE;": "⪵",
                                    "&prnap;": "⪹",
                                    "&prnsim;": "⋨",
                                    "&prod;": "∏",
                                    "&profalar;": "⌮",
                                    "&profline;": "⌒",
                                    "&profsurf;": "⌓",
                                    "&prop;": "∝",
                                    "&propto;": "∝",
                                    "&prsim;": "≾",
                                    "&prurel;": "⊰",
                                    "&pscr;": "𝓅",
                                    "&psi;": "ψ",
                                    "&puncsp;": " ",
                                    "&qfr;": "𝔮",
                                    "&qint;": "⨌",
                                    "&qopf;": "𝕢",
                                    "&qprime;": "⁗",
                                    "&qscr;": "𝓆",
                                    "&quaternions;": "ℍ",
                                    "&quatint;": "⨖",
                                    "&quest;": "?",
                                    "&questeq;": "≟",
                                    "&quot": '"',
                                    "&quot;": '"',
                                    "&rAarr;": "⇛",
                                    "&rArr;": "⇒",
                                    "&rAtail;": "⤜",
                                    "&rBarr;": "⤏",
                                    "&rHar;": "⥤",
                                    "&race;": "∽̱",
                                    "&racute;": "ŕ",
                                    "&radic;": "√",
                                    "&raemptyv;": "⦳",
                                    "&rang;": "⟩",
                                    "&rangd;": "⦒",
                                    "&range;": "⦥",
                                    "&rangle;": "⟩",
                                    "&raquo": "»",
                                    "&raquo;": "»",
                                    "&rarr;": "→",
                                    "&rarrap;": "⥵",
                                    "&rarrb;": "⇥",
                                    "&rarrbfs;": "⤠",
                                    "&rarrc;": "⤳",
                                    "&rarrfs;": "⤞",
                                    "&rarrhk;": "↪",
                                    "&rarrlp;": "↬",
                                    "&rarrpl;": "⥅",
                                    "&rarrsim;": "⥴",
                                    "&rarrtl;": "↣",
                                    "&rarrw;": "↝",
                                    "&ratail;": "⤚",
                                    "&ratio;": "∶",
                                    "&rationals;": "ℚ",
                                    "&rbarr;": "⤍",
                                    "&rbbrk;": "❳",
                                    "&rbrace;": "}",
                                    "&rbrack;": "]",
                                    "&rbrke;": "⦌",
                                    "&rbrksld;": "⦎",
                                    "&rbrkslu;": "⦐",
                                    "&rcaron;": "ř",
                                    "&rcedil;": "ŗ",
                                    "&rceil;": "⌉",
                                    "&rcub;": "}",
                                    "&rcy;": "р",
                                    "&rdca;": "⤷",
                                    "&rdldhar;": "⥩",
                                    "&rdquo;": "”",
                                    "&rdquor;": "”",
                                    "&rdsh;": "↳",
                                    "&real;": "ℜ",
                                    "&realine;": "ℛ",
                                    "&realpart;": "ℜ",
                                    "&reals;": "ℝ",
                                    "&rect;": "▭",
                                    "&reg": "®",
                                    "&reg;": "®",
                                    "&rfisht;": "⥽",
                                    "&rfloor;": "⌋",
                                    "&rfr;": "𝔯",
                                    "&rhard;": "⇁",
                                    "&rharu;": "⇀",
                                    "&rharul;": "⥬",
                                    "&rho;": "ρ",
                                    "&rhov;": "ϱ",
                                    "&rightarrow;": "→",
                                    "&rightarrowtail;": "↣",
                                    "&rightharpoondown;": "⇁",
                                    "&rightharpoonup;": "⇀",
                                    "&rightleftarrows;": "⇄",
                                    "&rightleftharpoons;": "⇌",
                                    "&rightrightarrows;": "⇉",
                                    "&rightsquigarrow;": "↝",
                                    "&rightthreetimes;": "⋌",
                                    "&ring;": "˚",
                                    "&risingdotseq;": "≓",
                                    "&rlarr;": "⇄",
                                    "&rlhar;": "⇌",
                                    "&rlm;": "‏",
                                    "&rmoust;": "⎱",
                                    "&rmoustache;": "⎱",
                                    "&rnmid;": "⫮",
                                    "&roang;": "⟭",
                                    "&roarr;": "⇾",
                                    "&robrk;": "⟧",
                                    "&ropar;": "⦆",
                                    "&ropf;": "𝕣",
                                    "&roplus;": "⨮",
                                    "&rotimes;": "⨵",
                                    "&rpar;": ")",
                                    "&rpargt;": "⦔",
                                    "&rppolint;": "⨒",
                                    "&rrarr;": "⇉",
                                    "&rsaquo;": "›",
                                    "&rscr;": "𝓇",
                                    "&rsh;": "↱",
                                    "&rsqb;": "]",
                                    "&rsquo;": "’",
                                    "&rsquor;": "’",
                                    "&rthree;": "⋌",
                                    "&rtimes;": "⋊",
                                    "&rtri;": "▹",
                                    "&rtrie;": "⊵",
                                    "&rtrif;": "▸",
                                    "&rtriltri;": "⧎",
                                    "&ruluhar;": "⥨",
                                    "&rx;": "℞",
                                    "&sacute;": "ś",
                                    "&sbquo;": "‚",
                                    "&sc;": "≻",
                                    "&scE;": "⪴",
                                    "&scap;": "⪸",
                                    "&scaron;": "š",
                                    "&sccue;": "≽",
                                    "&sce;": "⪰",
                                    "&scedil;": "ş",
                                    "&scirc;": "ŝ",
                                    "&scnE;": "⪶",
                                    "&scnap;": "⪺",
                                    "&scnsim;": "⋩",
                                    "&scpolint;": "⨓",
                                    "&scsim;": "≿",
                                    "&scy;": "с",
                                    "&sdot;": "⋅",
                                    "&sdotb;": "⊡",
                                    "&sdote;": "⩦",
                                    "&seArr;": "⇘",
                                    "&searhk;": "⤥",
                                    "&searr;": "↘",
                                    "&searrow;": "↘",
                                    "&sect": "§",
                                    "&sect;": "§",
                                    "&semi;": ";",
                                    "&seswar;": "⤩",
                                    "&setminus;": "∖",
                                    "&setmn;": "∖",
                                    "&sext;": "✶",
                                    "&sfr;": "𝔰",
                                    "&sfrown;": "⌢",
                                    "&sharp;": "♯",
                                    "&shchcy;": "щ",
                                    "&shcy;": "ш",
                                    "&shortmid;": "∣",
                                    "&shortparallel;": "∥",
                                    "&shy": "­",
                                    "&shy;": "­",
                                    "&sigma;": "σ",
                                    "&sigmaf;": "ς",
                                    "&sigmav;": "ς",
                                    "&sim;": "∼",
                                    "&simdot;": "⩪",
                                    "&sime;": "≃",
                                    "&simeq;": "≃",
                                    "&simg;": "⪞",
                                    "&simgE;": "⪠",
                                    "&siml;": "⪝",
                                    "&simlE;": "⪟",
                                    "&simne;": "≆",
                                    "&simplus;": "⨤",
                                    "&simrarr;": "⥲",
                                    "&slarr;": "←",
                                    "&smallsetminus;": "∖",
                                    "&smashp;": "⨳",
                                    "&smeparsl;": "⧤",
                                    "&smid;": "∣",
                                    "&smile;": "⌣",
                                    "&smt;": "⪪",
                                    "&smte;": "⪬",
                                    "&smtes;": "⪬︀",
                                    "&softcy;": "ь",
                                    "&sol;": "/",
                                    "&solb;": "⧄",
                                    "&solbar;": "⌿",
                                    "&sopf;": "𝕤",
                                    "&spades;": "♠",
                                    "&spadesuit;": "♠",
                                    "&spar;": "∥",
                                    "&sqcap;": "⊓",
                                    "&sqcaps;": "⊓︀",
                                    "&sqcup;": "⊔",
                                    "&sqcups;": "⊔︀",
                                    "&sqsub;": "⊏",
                                    "&sqsube;": "⊑",
                                    "&sqsubset;": "⊏",
                                    "&sqsubseteq;": "⊑",
                                    "&sqsup;": "⊐",
                                    "&sqsupe;": "⊒",
                                    "&sqsupset;": "⊐",
                                    "&sqsupseteq;": "⊒",
                                    "&squ;": "□",
                                    "&square;": "□",
                                    "&squarf;": "▪",
                                    "&squf;": "▪",
                                    "&srarr;": "→",
                                    "&sscr;": "𝓈",
                                    "&ssetmn;": "∖",
                                    "&ssmile;": "⌣",
                                    "&sstarf;": "⋆",
                                    "&star;": "☆",
                                    "&starf;": "★",
                                    "&straightepsilon;": "ϵ",
                                    "&straightphi;": "ϕ",
                                    "&strns;": "¯",
                                    "&sub;": "⊂",
                                    "&subE;": "⫅",
                                    "&subdot;": "⪽",
                                    "&sube;": "⊆",
                                    "&subedot;": "⫃",
                                    "&submult;": "⫁",
                                    "&subnE;": "⫋",
                                    "&subne;": "⊊",
                                    "&subplus;": "⪿",
                                    "&subrarr;": "⥹",
                                    "&subset;": "⊂",
                                    "&subseteq;": "⊆",
                                    "&subseteqq;": "⫅",
                                    "&subsetneq;": "⊊",
                                    "&subsetneqq;": "⫋",
                                    "&subsim;": "⫇",
                                    "&subsub;": "⫕",
                                    "&subsup;": "⫓",
                                    "&succ;": "≻",
                                    "&succapprox;": "⪸",
                                    "&succcurlyeq;": "≽",
                                    "&succeq;": "⪰",
                                    "&succnapprox;": "⪺",
                                    "&succneqq;": "⪶",
                                    "&succnsim;": "⋩",
                                    "&succsim;": "≿",
                                    "&sum;": "∑",
                                    "&sung;": "♪",
                                    "&sup1": "¹",
                                    "&sup1;": "¹",
                                    "&sup2": "²",
                                    "&sup2;": "²",
                                    "&sup3": "³",
                                    "&sup3;": "³",
                                    "&sup;": "⊃",
                                    "&supE;": "⫆",
                                    "&supdot;": "⪾",
                                    "&supdsub;": "⫘",
                                    "&supe;": "⊇",
                                    "&supedot;": "⫄",
                                    "&suphsol;": "⟉",
                                    "&suphsub;": "⫗",
                                    "&suplarr;": "⥻",
                                    "&supmult;": "⫂",
                                    "&supnE;": "⫌",
                                    "&supne;": "⊋",
                                    "&supplus;": "⫀",
                                    "&supset;": "⊃",
                                    "&supseteq;": "⊇",
                                    "&supseteqq;": "⫆",
                                    "&supsetneq;": "⊋",
                                    "&supsetneqq;": "⫌",
                                    "&supsim;": "⫈",
                                    "&supsub;": "⫔",
                                    "&supsup;": "⫖",
                                    "&swArr;": "⇙",
                                    "&swarhk;": "⤦",
                                    "&swarr;": "↙",
                                    "&swarrow;": "↙",
                                    "&swnwar;": "⤪",
                                    "&szlig": "ß",
                                    "&szlig;": "ß",
                                    "&target;": "⌖",
                                    "&tau;": "τ",
                                    "&tbrk;": "⎴",
                                    "&tcaron;": "ť",
                                    "&tcedil;": "ţ",
                                    "&tcy;": "т",
                                    "&tdot;": "⃛",
                                    "&telrec;": "⌕",
                                    "&tfr;": "𝔱",
                                    "&there4;": "∴",
                                    "&therefore;": "∴",
                                    "&theta;": "θ",
                                    "&thetasym;": "ϑ",
                                    "&thetav;": "ϑ",
                                    "&thickapprox;": "≈",
                                    "&thicksim;": "∼",
                                    "&thinsp;": " ",
                                    "&thkap;": "≈",
                                    "&thksim;": "∼",
                                    "&thorn": "þ",
                                    "&thorn;": "þ",
                                    "&tilde;": "˜",
                                    "&times": "×",
                                    "&times;": "×",
                                    "&timesb;": "⊠",
                                    "&timesbar;": "⨱",
                                    "&timesd;": "⨰",
                                    "&tint;": "∭",
                                    "&toea;": "⤨",
                                    "&top;": "⊤",
                                    "&topbot;": "⌶",
                                    "&topcir;": "⫱",
                                    "&topf;": "𝕥",
                                    "&topfork;": "⫚",
                                    "&tosa;": "⤩",
                                    "&tprime;": "‴",
                                    "&trade;": "™",
                                    "&triangle;": "▵",
                                    "&triangledown;": "▿",
                                    "&triangleleft;": "◃",
                                    "&trianglelefteq;": "⊴",
                                    "&triangleq;": "≜",
                                    "&triangleright;": "▹",
                                    "&trianglerighteq;": "⊵",
                                    "&tridot;": "◬",
                                    "&trie;": "≜",
                                    "&triminus;": "⨺",
                                    "&triplus;": "⨹",
                                    "&trisb;": "⧍",
                                    "&tritime;": "⨻",
                                    "&trpezium;": "⏢",
                                    "&tscr;": "𝓉",
                                    "&tscy;": "ц",
                                    "&tshcy;": "ћ",
                                    "&tstrok;": "ŧ",
                                    "&twixt;": "≬",
                                    "&twoheadleftarrow;": "↞",
                                    "&twoheadrightarrow;": "↠",
                                    "&uArr;": "⇑",
                                    "&uHar;": "⥣",
                                    "&uacute": "ú",
                                    "&uacute;": "ú",
                                    "&uarr;": "↑",
                                    "&ubrcy;": "ў",
                                    "&ubreve;": "ŭ",
                                    "&ucirc": "û",
                                    "&ucirc;": "û",
                                    "&ucy;": "у",
                                    "&udarr;": "⇅",
                                    "&udblac;": "ű",
                                    "&udhar;": "⥮",
                                    "&ufisht;": "⥾",
                                    "&ufr;": "𝔲",
                                    "&ugrave": "ù",
                                    "&ugrave;": "ù",
                                    "&uharl;": "↿",
                                    "&uharr;": "↾",
                                    "&uhblk;": "▀",
                                    "&ulcorn;": "⌜",
                                    "&ulcorner;": "⌜",
                                    "&ulcrop;": "⌏",
                                    "&ultri;": "◸",
                                    "&umacr;": "ū",
                                    "&uml": "¨",
                                    "&uml;": "¨",
                                    "&uogon;": "ų",
                                    "&uopf;": "𝕦",
                                    "&uparrow;": "↑",
                                    "&updownarrow;": "↕",
                                    "&upharpoonleft;": "↿",
                                    "&upharpoonright;": "↾",
                                    "&uplus;": "⊎",
                                    "&upsi;": "υ",
                                    "&upsih;": "ϒ",
                                    "&upsilon;": "υ",
                                    "&upuparrows;": "⇈",
                                    "&urcorn;": "⌝",
                                    "&urcorner;": "⌝",
                                    "&urcrop;": "⌎",
                                    "&uring;": "ů",
                                    "&urtri;": "◹",
                                    "&uscr;": "𝓊",
                                    "&utdot;": "⋰",
                                    "&utilde;": "ũ",
                                    "&utri;": "▵",
                                    "&utrif;": "▴",
                                    "&uuarr;": "⇈",
                                    "&uuml": "ü",
                                    "&uuml;": "ü",
                                    "&uwangle;": "⦧",
                                    "&vArr;": "⇕",
                                    "&vBar;": "⫨",
                                    "&vBarv;": "⫩",
                                    "&vDash;": "⊨",
                                    "&vangrt;": "⦜",
                                    "&varepsilon;": "ϵ",
                                    "&varkappa;": "ϰ",
                                    "&varnothing;": "∅",
                                    "&varphi;": "ϕ",
                                    "&varpi;": "ϖ",
                                    "&varpropto;": "∝",
                                    "&varr;": "↕",
                                    "&varrho;": "ϱ",
                                    "&varsigma;": "ς",
                                    "&varsubsetneq;": "⊊︀",
                                    "&varsubsetneqq;": "⫋︀",
                                    "&varsupsetneq;": "⊋︀",
                                    "&varsupsetneqq;": "⫌︀",
                                    "&vartheta;": "ϑ",
                                    "&vartriangleleft;": "⊲",
                                    "&vartriangleright;": "⊳",
                                    "&vcy;": "в",
                                    "&vdash;": "⊢",
                                    "&vee;": "∨",
                                    "&veebar;": "⊻",
                                    "&veeeq;": "≚",
                                    "&vellip;": "⋮",
                                    "&verbar;": "|",
                                    "&vert;": "|",
                                    "&vfr;": "𝔳",
                                    "&vltri;": "⊲",
                                    "&vnsub;": "⊂⃒",
                                    "&vnsup;": "⊃⃒",
                                    "&vopf;": "𝕧",
                                    "&vprop;": "∝",
                                    "&vrtri;": "⊳",
                                    "&vscr;": "𝓋",
                                    "&vsubnE;": "⫋︀",
                                    "&vsubne;": "⊊︀",
                                    "&vsupnE;": "⫌︀",
                                    "&vsupne;": "⊋︀",
                                    "&vzigzag;": "⦚",
                                    "&wcirc;": "ŵ",
                                    "&wedbar;": "⩟",
                                    "&wedge;": "∧",
                                    "&wedgeq;": "≙",
                                    "&weierp;": "℘",
                                    "&wfr;": "𝔴",
                                    "&wopf;": "𝕨",
                                    "&wp;": "℘",
                                    "&wr;": "≀",
                                    "&wreath;": "≀",
                                    "&wscr;": "𝓌",
                                    "&xcap;": "⋂",
                                    "&xcirc;": "◯",
                                    "&xcup;": "⋃",
                                    "&xdtri;": "▽",
                                    "&xfr;": "𝔵",
                                    "&xhArr;": "⟺",
                                    "&xharr;": "⟷",
                                    "&xi;": "ξ",
                                    "&xlArr;": "⟸",
                                    "&xlarr;": "⟵",
                                    "&xmap;": "⟼",
                                    "&xnis;": "⋻",
                                    "&xodot;": "⨀",
                                    "&xopf;": "𝕩",
                                    "&xoplus;": "⨁",
                                    "&xotime;": "⨂",
                                    "&xrArr;": "⟹",
                                    "&xrarr;": "⟶",
                                    "&xscr;": "𝓍",
                                    "&xsqcup;": "⨆",
                                    "&xuplus;": "⨄",
                                    "&xutri;": "△",
                                    "&xvee;": "⋁",
                                    "&xwedge;": "⋀",
                                    "&yacute": "ý",
                                    "&yacute;": "ý",
                                    "&yacy;": "я",
                                    "&ycirc;": "ŷ",
                                    "&ycy;": "ы",
                                    "&yen": "¥",
                                    "&yen;": "¥",
                                    "&yfr;": "𝔶",
                                    "&yicy;": "ї",
                                    "&yopf;": "𝕪",
                                    "&yscr;": "𝓎",
                                    "&yucy;": "ю",
                                    "&yuml": "ÿ",
                                    "&yuml;": "ÿ",
                                    "&zacute;": "ź",
                                    "&zcaron;": "ž",
                                    "&zcy;": "з",
                                    "&zdot;": "ż",
                                    "&zeetrf;": "ℨ",
                                    "&zeta;": "ζ",
                                    "&zfr;": "𝔷",
                                    "&zhcy;": "ж",
                                    "&zigrarr;": "⇝",
                                    "&zopf;": "𝕫",
                                    "&zscr;": "𝓏",
                                    "&zwj;": "‍",
                                    "&zwnj;": "‌"
                                },
                                characters: {
                                    "Æ": "&AElig;",
                                    "&": "&amp;",
                                    "Á": "&Aacute;",
                                    "Ă": "&Abreve;",
                                    "Â": "&Acirc;",
                                    "А": "&Acy;",
                                    "𝔄": "&Afr;",
                                    "À": "&Agrave;",
                                    "Α": "&Alpha;",
                                    "Ā": "&Amacr;",
                                    "⩓": "&And;",
                                    "Ą": "&Aogon;",
                                    "𝔸": "&Aopf;",
                                    "⁡": "&af;",
                                    "Å": "&angst;",
                                    "𝒜": "&Ascr;",
                                    "≔": "&coloneq;",
                                    "Ã": "&Atilde;",
                                    "Ä": "&Auml;",
                                    "∖": "&ssetmn;",
                                    "⫧": "&Barv;",
                                    "⌆": "&doublebarwedge;",
                                    "Б": "&Bcy;",
                                    "∵": "&because;",
                                    "ℬ": "&bernou;",
                                    "Β": "&Beta;",
                                    "𝔅": "&Bfr;",
                                    "𝔹": "&Bopf;",
                                    "˘": "&breve;",
                                    "≎": "&bump;",
                                    "Ч": "&CHcy;",
                                    "©": "&copy;",
                                    "Ć": "&Cacute;",
                                    "⋒": "&Cap;",
                                    "ⅅ": "&DD;",
                                    "ℭ": "&Cfr;",
                                    "Č": "&Ccaron;",
                                    "Ç": "&Ccedil;",
                                    "Ĉ": "&Ccirc;",
                                    "∰": "&Cconint;",
                                    "Ċ": "&Cdot;",
                                    "¸": "&cedil;",
                                    "·": "&middot;",
                                    "Χ": "&Chi;",
                                    "⊙": "&odot;",
                                    "⊖": "&ominus;",
                                    "⊕": "&oplus;",
                                    "⊗": "&otimes;",
                                    "∲": "&cwconint;",
                                    "”": "&rdquor;",
                                    "’": "&rsquor;",
                                    "∷": "&Proportion;",
                                    "⩴": "&Colone;",
                                    "≡": "&equiv;",
                                    "∯": "&DoubleContourIntegral;",
                                    "∮": "&oint;",
                                    "ℂ": "&complexes;",
                                    "∐": "&coprod;",
                                    "∳": "&awconint;",
                                    "⨯": "&Cross;",
                                    "𝒞": "&Cscr;",
                                    "⋓": "&Cup;",
                                    "≍": "&asympeq;",
                                    "⤑": "&DDotrahd;",
                                    "Ђ": "&DJcy;",
                                    "Ѕ": "&DScy;",
                                    "Џ": "&DZcy;",
                                    "‡": "&ddagger;",
                                    "↡": "&Darr;",
                                    "⫤": "&DoubleLeftTee;",
                                    "Ď": "&Dcaron;",
                                    "Д": "&Dcy;",
                                    "∇": "&nabla;",
                                    "Δ": "&Delta;",
                                    "𝔇": "&Dfr;",
                                    "´": "&acute;",
                                    "˙": "&dot;",
                                    "˝": "&dblac;",
                                    "`": "&grave;",
                                    "˜": "&tilde;",
                                    "⋄": "&diamond;",
                                    "ⅆ": "&dd;",
                                    "𝔻": "&Dopf;",
                                    "¨": "&uml;",
                                    "⃜": "&DotDot;",
                                    "≐": "&esdot;",
                                    "⇓": "&dArr;",
                                    "⇐": "&lArr;",
                                    "⇔": "&iff;",
                                    "⟸": "&xlArr;",
                                    "⟺": "&xhArr;",
                                    "⟹": "&xrArr;",
                                    "⇒": "&rArr;",
                                    "⊨": "&vDash;",
                                    "⇑": "&uArr;",
                                    "⇕": "&vArr;",
                                    "∥": "&spar;",
                                    "↓": "&downarrow;",
                                    "⤓": "&DownArrowBar;",
                                    "⇵": "&duarr;",
                                    "̑": "&DownBreve;",
                                    "⥐": "&DownLeftRightVector;",
                                    "⥞": "&DownLeftTeeVector;",
                                    "↽": "&lhard;",
                                    "⥖": "&DownLeftVectorBar;",
                                    "⥟": "&DownRightTeeVector;",
                                    "⇁": "&rightharpoondown;",
                                    "⥗": "&DownRightVectorBar;",
                                    "⊤": "&top;",
                                    "↧": "&mapstodown;",
                                    "𝒟": "&Dscr;",
                                    "Đ": "&Dstrok;",
                                    "Ŋ": "&ENG;",
                                    "Ð": "&ETH;",
                                    "É": "&Eacute;",
                                    "Ě": "&Ecaron;",
                                    "Ê": "&Ecirc;",
                                    "Э": "&Ecy;",
                                    "Ė": "&Edot;",
                                    "𝔈": "&Efr;",
                                    "È": "&Egrave;",
                                    "∈": "&isinv;",
                                    "Ē": "&Emacr;",
                                    "◻": "&EmptySmallSquare;",
                                    "▫": "&EmptyVerySmallSquare;",
                                    "Ę": "&Eogon;",
                                    "𝔼": "&Eopf;",
                                    "Ε": "&Epsilon;",
                                    "⩵": "&Equal;",
                                    "≂": "&esim;",
                                    "⇌": "&rlhar;",
                                    "ℰ": "&expectation;",
                                    "⩳": "&Esim;",
                                    "Η": "&Eta;",
                                    "Ë": "&Euml;",
                                    "∃": "&exist;",
                                    "ⅇ": "&exponentiale;",
                                    "Ф": "&Fcy;",
                                    "𝔉": "&Ffr;",
                                    "◼": "&FilledSmallSquare;",
                                    "▪": "&squf;",
                                    "𝔽": "&Fopf;",
                                    "∀": "&forall;",
                                    "ℱ": "&Fscr;",
                                    "Ѓ": "&GJcy;",
                                    ">": "&gt;",
                                    "Γ": "&Gamma;",
                                    "Ϝ": "&Gammad;",
                                    "Ğ": "&Gbreve;",
                                    "Ģ": "&Gcedil;",
                                    "Ĝ": "&Gcirc;",
                                    "Г": "&Gcy;",
                                    "Ġ": "&Gdot;",
                                    "𝔊": "&Gfr;",
                                    "⋙": "&ggg;",
                                    "𝔾": "&Gopf;",
                                    "≥": "&geq;",
                                    "⋛": "&gtreqless;",
                                    "≧": "&geqq;",
                                    "⪢": "&GreaterGreater;",
                                    "≷": "&gtrless;",
                                    "⩾": "&ges;",
                                    "≳": "&gtrsim;",
                                    "𝒢": "&Gscr;",
                                    "≫": "&gg;",
                                    "Ъ": "&HARDcy;",
                                    "ˇ": "&caron;",
                                    "^": "&Hat;",
                                    "Ĥ": "&Hcirc;",
                                    "ℌ": "&Poincareplane;",
                                    "ℋ": "&hamilt;",
                                    "ℍ": "&quaternions;",
                                    "─": "&boxh;",
                                    "Ħ": "&Hstrok;",
                                    "≏": "&bumpeq;",
                                    "Е": "&IEcy;",
                                    "Ĳ": "&IJlig;",
                                    "Ё": "&IOcy;",
                                    "Í": "&Iacute;",
                                    "Î": "&Icirc;",
                                    "И": "&Icy;",
                                    "İ": "&Idot;",
                                    "ℑ": "&imagpart;",
                                    "Ì": "&Igrave;",
                                    "Ī": "&Imacr;",
                                    "ⅈ": "&ii;",
                                    "∬": "&Int;",
                                    "∫": "&int;",
                                    "⋂": "&xcap;",
                                    "⁣": "&ic;",
                                    "⁢": "&it;",
                                    "Į": "&Iogon;",
                                    "𝕀": "&Iopf;",
                                    "Ι": "&Iota;",
                                    "ℐ": "&imagline;",
                                    "Ĩ": "&Itilde;",
                                    "І": "&Iukcy;",
                                    "Ï": "&Iuml;",
                                    "Ĵ": "&Jcirc;",
                                    "Й": "&Jcy;",
                                    "𝔍": "&Jfr;",
                                    "𝕁": "&Jopf;",
                                    "𝒥": "&Jscr;",
                                    "Ј": "&Jsercy;",
                                    "Є": "&Jukcy;",
                                    "Х": "&KHcy;",
                                    "Ќ": "&KJcy;",
                                    "Κ": "&Kappa;",
                                    "Ķ": "&Kcedil;",
                                    "К": "&Kcy;",
                                    "𝔎": "&Kfr;",
                                    "𝕂": "&Kopf;",
                                    "𝒦": "&Kscr;",
                                    "Љ": "&LJcy;",
                                    "<": "&lt;",
                                    "Ĺ": "&Lacute;",
                                    "Λ": "&Lambda;",
                                    "⟪": "&Lang;",
                                    "ℒ": "&lagran;",
                                    "↞": "&twoheadleftarrow;",
                                    "Ľ": "&Lcaron;",
                                    "Ļ": "&Lcedil;",
                                    "Л": "&Lcy;",
                                    "⟨": "&langle;",
                                    "←": "&slarr;",
                                    "⇤": "&larrb;",
                                    "⇆": "&lrarr;",
                                    "⌈": "&lceil;",
                                    "⟦": "&lobrk;",
                                    "⥡": "&LeftDownTeeVector;",
                                    "⇃": "&downharpoonleft;",
                                    "⥙": "&LeftDownVectorBar;",
                                    "⌊": "&lfloor;",
                                    "↔": "&leftrightarrow;",
                                    "⥎": "&LeftRightVector;",
                                    "⊣": "&dashv;",
                                    "↤": "&mapstoleft;",
                                    "⥚": "&LeftTeeVector;",
                                    "⊲": "&vltri;",
                                    "⧏": "&LeftTriangleBar;",
                                    "⊴": "&trianglelefteq;",
                                    "⥑": "&LeftUpDownVector;",
                                    "⥠": "&LeftUpTeeVector;",
                                    "↿": "&upharpoonleft;",
                                    "⥘": "&LeftUpVectorBar;",
                                    "↼": "&lharu;",
                                    "⥒": "&LeftVectorBar;",
                                    "⋚": "&lesseqgtr;",
                                    "≦": "&leqq;",
                                    "≶": "&lg;",
                                    "⪡": "&LessLess;",
                                    "⩽": "&les;",
                                    "≲": "&lsim;",
                                    "𝔏": "&Lfr;",
                                    "⋘": "&Ll;",
                                    "⇚": "&lAarr;",
                                    "Ŀ": "&Lmidot;",
                                    "⟵": "&xlarr;",
                                    "⟷": "&xharr;",
                                    "⟶": "&xrarr;",
                                    "𝕃": "&Lopf;",
                                    "↙": "&swarrow;",
                                    "↘": "&searrow;",
                                    "↰": "&lsh;",
                                    "Ł": "&Lstrok;",
                                    "≪": "&ll;",
                                    "⤅": "&Map;",
                                    "М": "&Mcy;",
                                    " ": "&MediumSpace;",
                                    "ℳ": "&phmmat;",
                                    "𝔐": "&Mfr;",
                                    "∓": "&mp;",
                                    "𝕄": "&Mopf;",
                                    "Μ": "&Mu;",
                                    "Њ": "&NJcy;",
                                    "Ń": "&Nacute;",
                                    "Ň": "&Ncaron;",
                                    "Ņ": "&Ncedil;",
                                    "Н": "&Ncy;",
                                    "​": "&ZeroWidthSpace;",
                                    "\n": "&NewLine;",
                                    "𝔑": "&Nfr;",
                                    "⁠": "&NoBreak;",
                                    " ": "&nbsp;",
                                    "ℕ": "&naturals;",
                                    "⫬": "&Not;",
                                    "≢": "&nequiv;",
                                    "≭": "&NotCupCap;",
                                    "∦": "&nspar;",
                                    "∉": "&notinva;",
                                    "≠": "&ne;",
                                    "≂̸": "&nesim;",
                                    "∄": "&nexists;",
                                    "≯": "&ngtr;",
                                    "≱": "&ngeq;",
                                    "≧̸": "&ngeqq;",
                                    "≫̸": "&nGtv;",
                                    "≹": "&ntgl;",
                                    "⩾̸": "&nges;",
                                    "≵": "&ngsim;",
                                    "≎̸": "&nbump;",
                                    "≏̸": "&nbumpe;",
                                    "⋪": "&ntriangleleft;",
                                    "⧏̸": "&NotLeftTriangleBar;",
                                    "⋬": "&ntrianglelefteq;",
                                    "≮": "&nlt;",
                                    "≰": "&nleq;",
                                    "≸": "&ntlg;",
                                    "≪̸": "&nLtv;",
                                    "⩽̸": "&nles;",
                                    "≴": "&nlsim;",
                                    "⪢̸": "&NotNestedGreaterGreater;",
                                    "⪡̸": "&NotNestedLessLess;",
                                    "⊀": "&nprec;",
                                    "⪯̸": "&npreceq;",
                                    "⋠": "&nprcue;",
                                    "∌": "&notniva;",
                                    "⋫": "&ntriangleright;",
                                    "⧐̸": "&NotRightTriangleBar;",
                                    "⋭": "&ntrianglerighteq;",
                                    "⊏̸": "&NotSquareSubset;",
                                    "⋢": "&nsqsube;",
                                    "⊐̸": "&NotSquareSuperset;",
                                    "⋣": "&nsqsupe;",
                                    "⊂⃒": "&vnsub;",
                                    "⊈": "&nsubseteq;",
                                    "⊁": "&nsucc;",
                                    "⪰̸": "&nsucceq;",
                                    "⋡": "&nsccue;",
                                    "≿̸": "&NotSucceedsTilde;",
                                    "⊃⃒": "&vnsup;",
                                    "⊉": "&nsupseteq;",
                                    "≁": "&nsim;",
                                    "≄": "&nsimeq;",
                                    "≇": "&ncong;",
                                    "≉": "&napprox;",
                                    "∤": "&nsmid;",
                                    "𝒩": "&Nscr;",
                                    "Ñ": "&Ntilde;",
                                    "Ν": "&Nu;",
                                    "Œ": "&OElig;",
                                    "Ó": "&Oacute;",
                                    "Ô": "&Ocirc;",
                                    "О": "&Ocy;",
                                    "Ő": "&Odblac;",
                                    "𝔒": "&Ofr;",
                                    "Ò": "&Ograve;",
                                    "Ō": "&Omacr;",
                                    "Ω": "&ohm;",
                                    "Ο": "&Omicron;",
                                    "𝕆": "&Oopf;",
                                    "“": "&ldquo;",
                                    "‘": "&lsquo;",
                                    "⩔": "&Or;",
                                    "𝒪": "&Oscr;",
                                    "Ø": "&Oslash;",
                                    "Õ": "&Otilde;",
                                    "⨷": "&Otimes;",
                                    "Ö": "&Ouml;",
                                    "‾": "&oline;",
                                    "⏞": "&OverBrace;",
                                    "⎴": "&tbrk;",
                                    "⏜": "&OverParenthesis;",
                                    "∂": "&part;",
                                    "П": "&Pcy;",
                                    "𝔓": "&Pfr;",
                                    "Φ": "&Phi;",
                                    "Π": "&Pi;",
                                    "±": "&pm;",
                                    "ℙ": "&primes;",
                                    "⪻": "&Pr;",
                                    "≺": "&prec;",
                                    "⪯": "&preceq;",
                                    "≼": "&preccurlyeq;",
                                    "≾": "&prsim;",
                                    "″": "&Prime;",
                                    "∏": "&prod;",
                                    "∝": "&vprop;",
                                    "𝒫": "&Pscr;",
                                    "Ψ": "&Psi;",
                                    '"': "&quot;",
                                    "𝔔": "&Qfr;",
                                    "ℚ": "&rationals;",
                                    "𝒬": "&Qscr;",
                                    "⤐": "&drbkarow;",
                                    "®": "&reg;",
                                    "Ŕ": "&Racute;",
                                    "⟫": "&Rang;",
                                    "↠": "&twoheadrightarrow;",
                                    "⤖": "&Rarrtl;",
                                    "Ř": "&Rcaron;",
                                    "Ŗ": "&Rcedil;",
                                    "Р": "&Rcy;",
                                    "ℜ": "&realpart;",
                                    "∋": "&niv;",
                                    "⇋": "&lrhar;",
                                    "⥯": "&duhar;",
                                    "Ρ": "&Rho;",
                                    "⟩": "&rangle;",
                                    "→": "&srarr;",
                                    "⇥": "&rarrb;",
                                    "⇄": "&rlarr;",
                                    "⌉": "&rceil;",
                                    "⟧": "&robrk;",
                                    "⥝": "&RightDownTeeVector;",
                                    "⇂": "&downharpoonright;",
                                    "⥕": "&RightDownVectorBar;",
                                    "⌋": "&rfloor;",
                                    "⊢": "&vdash;",
                                    "↦": "&mapsto;",
                                    "⥛": "&RightTeeVector;",
                                    "⊳": "&vrtri;",
                                    "⧐": "&RightTriangleBar;",
                                    "⊵": "&trianglerighteq;",
                                    "⥏": "&RightUpDownVector;",
                                    "⥜": "&RightUpTeeVector;",
                                    "↾": "&upharpoonright;",
                                    "⥔": "&RightUpVectorBar;",
                                    "⇀": "&rightharpoonup;",
                                    "⥓": "&RightVectorBar;",
                                    "ℝ": "&reals;",
                                    "⥰": "&RoundImplies;",
                                    "⇛": "&rAarr;",
                                    "ℛ": "&realine;",
                                    "↱": "&rsh;",
                                    "⧴": "&RuleDelayed;",
                                    "Щ": "&SHCHcy;",
                                    "Ш": "&SHcy;",
                                    "Ь": "&SOFTcy;",
                                    "Ś": "&Sacute;",
                                    "⪼": "&Sc;",
                                    "Š": "&Scaron;",
                                    "Ş": "&Scedil;",
                                    "Ŝ": "&Scirc;",
                                    "С": "&Scy;",
                                    "𝔖": "&Sfr;",
                                    "↑": "&uparrow;",
                                    "Σ": "&Sigma;",
                                    "∘": "&compfn;",
                                    "𝕊": "&Sopf;",
                                    "√": "&radic;",
                                    "□": "&square;",
                                    "⊓": "&sqcap;",
                                    "⊏": "&sqsubset;",
                                    "⊑": "&sqsubseteq;",
                                    "⊐": "&sqsupset;",
                                    "⊒": "&sqsupseteq;",
                                    "⊔": "&sqcup;",
                                    "𝒮": "&Sscr;",
                                    "⋆": "&sstarf;",
                                    "⋐": "&Subset;",
                                    "⊆": "&subseteq;",
                                    "≻": "&succ;",
                                    "⪰": "&succeq;",
                                    "≽": "&succcurlyeq;",
                                    "≿": "&succsim;",
                                    "∑": "&sum;",
                                    "⋑": "&Supset;",
                                    "⊃": "&supset;",
                                    "⊇": "&supseteq;",
                                    "Þ": "&THORN;",
                                    "™": "&trade;",
                                    "Ћ": "&TSHcy;",
                                    "Ц": "&TScy;",
                                    "\t": "&Tab;",
                                    "Τ": "&Tau;",
                                    "Ť": "&Tcaron;",
                                    "Ţ": "&Tcedil;",
                                    "Т": "&Tcy;",
                                    "𝔗": "&Tfr;",
                                    "∴": "&therefore;",
                                    "Θ": "&Theta;",
                                    "  ": "&ThickSpace;",
                                    " ": "&thinsp;",
                                    "∼": "&thksim;",
                                    "≃": "&simeq;",
                                    "≅": "&cong;",
                                    "≈": "&thkap;",
                                    "𝕋": "&Topf;",
                                    "⃛": "&tdot;",
                                    "𝒯": "&Tscr;",
                                    "Ŧ": "&Tstrok;",
                                    "Ú": "&Uacute;",
                                    "↟": "&Uarr;",
                                    "⥉": "&Uarrocir;",
                                    "Ў": "&Ubrcy;",
                                    "Ŭ": "&Ubreve;",
                                    "Û": "&Ucirc;",
                                    "У": "&Ucy;",
                                    "Ű": "&Udblac;",
                                    "𝔘": "&Ufr;",
                                    "Ù": "&Ugrave;",
                                    "Ū": "&Umacr;",
                                    _: "&lowbar;",
                                    "⏟": "&UnderBrace;",
                                    "⎵": "&bbrk;",
                                    "⏝": "&UnderParenthesis;",
                                    "⋃": "&xcup;",
                                    "⊎": "&uplus;",
                                    "Ų": "&Uogon;",
                                    "𝕌": "&Uopf;",
                                    "⤒": "&UpArrowBar;",
                                    "⇅": "&udarr;",
                                    "↕": "&varr;",
                                    "⥮": "&udhar;",
                                    "⊥": "&perp;",
                                    "↥": "&mapstoup;",
                                    "↖": "&nwarrow;",
                                    "↗": "&nearrow;",
                                    "ϒ": "&upsih;",
                                    "Υ": "&Upsilon;",
                                    "Ů": "&Uring;",
                                    "𝒰": "&Uscr;",
                                    "Ũ": "&Utilde;",
                                    "Ü": "&Uuml;",
                                    "⊫": "&VDash;",
                                    "⫫": "&Vbar;",
                                    "В": "&Vcy;",
                                    "⊩": "&Vdash;",
                                    "⫦": "&Vdashl;",
                                    "⋁": "&xvee;",
                                    "‖": "&Vert;",
                                    "∣": "&smid;",
                                    "|": "&vert;",
                                    "❘": "&VerticalSeparator;",
                                    "≀": "&wreath;",
                                    " ": "&hairsp;",
                                    "𝔙": "&Vfr;",
                                    "𝕍": "&Vopf;",
                                    "𝒱": "&Vscr;",
                                    "⊪": "&Vvdash;",
                                    "Ŵ": "&Wcirc;",
                                    "⋀": "&xwedge;",
                                    "𝔚": "&Wfr;",
                                    "𝕎": "&Wopf;",
                                    "𝒲": "&Wscr;",
                                    "𝔛": "&Xfr;",
                                    "Ξ": "&Xi;",
                                    "𝕏": "&Xopf;",
                                    "𝒳": "&Xscr;",
                                    "Я": "&YAcy;",
                                    "Ї": "&YIcy;",
                                    "Ю": "&YUcy;",
                                    "Ý": "&Yacute;",
                                    "Ŷ": "&Ycirc;",
                                    "Ы": "&Ycy;",
                                    "𝔜": "&Yfr;",
                                    "𝕐": "&Yopf;",
                                    "𝒴": "&Yscr;",
                                    "Ÿ": "&Yuml;",
                                    "Ж": "&ZHcy;",
                                    "Ź": "&Zacute;",
                                    "Ž": "&Zcaron;",
                                    "З": "&Zcy;",
                                    "Ż": "&Zdot;",
                                    "Ζ": "&Zeta;",
                                    "ℨ": "&zeetrf;",
                                    "ℤ": "&integers;",
                                    "𝒵": "&Zscr;",
                                    "á": "&aacute;",
                                    "ă": "&abreve;",
                                    "∾": "&mstpos;",
                                    "∾̳": "&acE;",
                                    "∿": "&acd;",
                                    "â": "&acirc;",
                                    "а": "&acy;",
                                    "æ": "&aelig;",
                                    "𝔞": "&afr;",
                                    "à": "&agrave;",
                                    "ℵ": "&aleph;",
                                    "α": "&alpha;",
                                    "ā": "&amacr;",
                                    "⨿": "&amalg;",
                                    "∧": "&wedge;",
                                    "⩕": "&andand;",
                                    "⩜": "&andd;",
                                    "⩘": "&andslope;",
                                    "⩚": "&andv;",
                                    "∠": "&angle;",
                                    "⦤": "&ange;",
                                    "∡": "&measuredangle;",
                                    "⦨": "&angmsdaa;",
                                    "⦩": "&angmsdab;",
                                    "⦪": "&angmsdac;",
                                    "⦫": "&angmsdad;",
                                    "⦬": "&angmsdae;",
                                    "⦭": "&angmsdaf;",
                                    "⦮": "&angmsdag;",
                                    "⦯": "&angmsdah;",
                                    "∟": "&angrt;",
                                    "⊾": "&angrtvb;",
                                    "⦝": "&angrtvbd;",
                                    "∢": "&angsph;",
                                    "⍼": "&angzarr;",
                                    "ą": "&aogon;",
                                    "𝕒": "&aopf;",
                                    "⩰": "&apE;",
                                    "⩯": "&apacir;",
                                    "≊": "&approxeq;",
                                    "≋": "&apid;",
                                    "'": "&apos;",
                                    "å": "&aring;",
                                    "𝒶": "&ascr;",
                                    "*": "&midast;",
                                    "ã": "&atilde;",
                                    "ä": "&auml;",
                                    "⨑": "&awint;",
                                    "⫭": "&bNot;",
                                    "≌": "&bcong;",
                                    "϶": "&bepsi;",
                                    "‵": "&bprime;",
                                    "∽": "&bsim;",
                                    "⋍": "&bsime;",
                                    "⊽": "&barvee;",
                                    "⌅": "&barwedge;",
                                    "⎶": "&bbrktbrk;",
                                    "б": "&bcy;",
                                    "„": "&ldquor;",
                                    "⦰": "&bemptyv;",
                                    "β": "&beta;",
                                    "ℶ": "&beth;",
                                    "≬": "&twixt;",
                                    "𝔟": "&bfr;",
                                    "◯": "&xcirc;",
                                    "⨀": "&xodot;",
                                    "⨁": "&xoplus;",
                                    "⨂": "&xotime;",
                                    "⨆": "&xsqcup;",
                                    "★": "&starf;",
                                    "▽": "&xdtri;",
                                    "△": "&xutri;",
                                    "⨄": "&xuplus;",
                                    "⤍": "&rbarr;",
                                    "⧫": "&lozf;",
                                    "▴": "&utrif;",
                                    "▾": "&dtrif;",
                                    "◂": "&ltrif;",
                                    "▸": "&rtrif;",
                                    "␣": "&blank;",
                                    "▒": "&blk12;",
                                    "░": "&blk14;",
                                    "▓": "&blk34;",
                                    "█": "&block;",
                                    "=⃥": "&bne;",
                                    "≡⃥": "&bnequiv;",
                                    "⌐": "&bnot;",
                                    "𝕓": "&bopf;",
                                    "⋈": "&bowtie;",
                                    "╗": "&boxDL;",
                                    "╔": "&boxDR;",
                                    "╖": "&boxDl;",
                                    "╓": "&boxDr;",
                                    "═": "&boxH;",
                                    "╦": "&boxHD;",
                                    "╩": "&boxHU;",
                                    "╤": "&boxHd;",
                                    "╧": "&boxHu;",
                                    "╝": "&boxUL;",
                                    "╚": "&boxUR;",
                                    "╜": "&boxUl;",
                                    "╙": "&boxUr;",
                                    "║": "&boxV;",
                                    "╬": "&boxVH;",
                                    "╣": "&boxVL;",
                                    "╠": "&boxVR;",
                                    "╫": "&boxVh;",
                                    "╢": "&boxVl;",
                                    "╟": "&boxVr;",
                                    "⧉": "&boxbox;",
                                    "╕": "&boxdL;",
                                    "╒": "&boxdR;",
                                    "┐": "&boxdl;",
                                    "┌": "&boxdr;",
                                    "╥": "&boxhD;",
                                    "╨": "&boxhU;",
                                    "┬": "&boxhd;",
                                    "┴": "&boxhu;",
                                    "⊟": "&minusb;",
                                    "⊞": "&plusb;",
                                    "⊠": "&timesb;",
                                    "╛": "&boxuL;",
                                    "╘": "&boxuR;",
                                    "┘": "&boxul;",
                                    "└": "&boxur;",
                                    "│": "&boxv;",
                                    "╪": "&boxvH;",
                                    "╡": "&boxvL;",
                                    "╞": "&boxvR;",
                                    "┼": "&boxvh;",
                                    "┤": "&boxvl;",
                                    "├": "&boxvr;",
                                    "¦": "&brvbar;",
                                    "𝒷": "&bscr;",
                                    "⁏": "&bsemi;",
                                    "\\": "&bsol;",
                                    "⧅": "&bsolb;",
                                    "⟈": "&bsolhsub;",
                                    "•": "&bullet;",
                                    "⪮": "&bumpE;",
                                    "ć": "&cacute;",
                                    "∩": "&cap;",
                                    "⩄": "&capand;",
                                    "⩉": "&capbrcup;",
                                    "⩋": "&capcap;",
                                    "⩇": "&capcup;",
                                    "⩀": "&capdot;",
                                    "∩︀": "&caps;",
                                    "⁁": "&caret;",
                                    "⩍": "&ccaps;",
                                    "č": "&ccaron;",
                                    "ç": "&ccedil;",
                                    "ĉ": "&ccirc;",
                                    "⩌": "&ccups;",
                                    "⩐": "&ccupssm;",
                                    "ċ": "&cdot;",
                                    "⦲": "&cemptyv;",
                                    "¢": "&cent;",
                                    "𝔠": "&cfr;",
                                    "ч": "&chcy;",
                                    "✓": "&checkmark;",
                                    "χ": "&chi;",
                                    "○": "&cir;",
                                    "⧃": "&cirE;",
                                    "ˆ": "&circ;",
                                    "≗": "&cire;",
                                    "↺": "&olarr;",
                                    "↻": "&orarr;",
                                    "Ⓢ": "&oS;",
                                    "⊛": "&oast;",
                                    "⊚": "&ocir;",
                                    "⊝": "&odash;",
                                    "⨐": "&cirfnint;",
                                    "⫯": "&cirmid;",
                                    "⧂": "&cirscir;",
                                    "♣": "&clubsuit;",
                                    ":": "&colon;",
                                    ",": "&comma;",
                                    "@": "&commat;",
                                    "∁": "&complement;",
                                    "⩭": "&congdot;",
                                    "𝕔": "&copf;",
                                    "℗": "&copysr;",
                                    "↵": "&crarr;",
                                    "✗": "&cross;",
                                    "𝒸": "&cscr;",
                                    "⫏": "&csub;",
                                    "⫑": "&csube;",
                                    "⫐": "&csup;",
                                    "⫒": "&csupe;",
                                    "⋯": "&ctdot;",
                                    "⤸": "&cudarrl;",
                                    "⤵": "&cudarrr;",
                                    "⋞": "&curlyeqprec;",
                                    "⋟": "&curlyeqsucc;",
                                    "↶": "&curvearrowleft;",
                                    "⤽": "&cularrp;",
                                    "∪": "&cup;",
                                    "⩈": "&cupbrcap;",
                                    "⩆": "&cupcap;",
                                    "⩊": "&cupcup;",
                                    "⊍": "&cupdot;",
                                    "⩅": "&cupor;",
                                    "∪︀": "&cups;",
                                    "↷": "&curvearrowright;",
                                    "⤼": "&curarrm;",
                                    "⋎": "&cuvee;",
                                    "⋏": "&cuwed;",
                                    "¤": "&curren;",
                                    "∱": "&cwint;",
                                    "⌭": "&cylcty;",
                                    "⥥": "&dHar;",
                                    "†": "&dagger;",
                                    "ℸ": "&daleth;",
                                    "‐": "&hyphen;",
                                    "⤏": "&rBarr;",
                                    "ď": "&dcaron;",
                                    "д": "&dcy;",
                                    "⇊": "&downdownarrows;",
                                    "⩷": "&eDDot;",
                                    "°": "&deg;",
                                    "δ": "&delta;",
                                    "⦱": "&demptyv;",
                                    "⥿": "&dfisht;",
                                    "𝔡": "&dfr;",
                                    "♦": "&diams;",
                                    "ϝ": "&gammad;",
                                    "⋲": "&disin;",
                                    "÷": "&divide;",
                                    "⋇": "&divonx;",
                                    "ђ": "&djcy;",
                                    "⌞": "&llcorner;",
                                    "⌍": "&dlcrop;",
                                    $: "&dollar;",
                                    "𝕕": "&dopf;",
                                    "≑": "&eDot;",
                                    "∸": "&minusd;",
                                    "∔": "&plusdo;",
                                    "⊡": "&sdotb;",
                                    "⌟": "&lrcorner;",
                                    "⌌": "&drcrop;",
                                    "𝒹": "&dscr;",
                                    "ѕ": "&dscy;",
                                    "⧶": "&dsol;",
                                    "đ": "&dstrok;",
                                    "⋱": "&dtdot;",
                                    "▿": "&triangledown;",
                                    "⦦": "&dwangle;",
                                    "џ": "&dzcy;",
                                    "⟿": "&dzigrarr;",
                                    "é": "&eacute;",
                                    "⩮": "&easter;",
                                    "ě": "&ecaron;",
                                    "≖": "&eqcirc;",
                                    "ê": "&ecirc;",
                                    "≕": "&eqcolon;",
                                    "э": "&ecy;",
                                    "ė": "&edot;",
                                    "≒": "&fallingdotseq;",
                                    "𝔢": "&efr;",
                                    "⪚": "&eg;",
                                    "è": "&egrave;",
                                    "⪖": "&eqslantgtr;",
                                    "⪘": "&egsdot;",
                                    "⪙": "&el;",
                                    "⏧": "&elinters;",
                                    "ℓ": "&ell;",
                                    "⪕": "&eqslantless;",
                                    "⪗": "&elsdot;",
                                    "ē": "&emacr;",
                                    "∅": "&varnothing;",
                                    " ": "&emsp13;",
                                    " ": "&emsp14;",
                                    " ": "&emsp;",
                                    "ŋ": "&eng;",
                                    " ": "&ensp;",
                                    "ę": "&eogon;",
                                    "𝕖": "&eopf;",
                                    "⋕": "&epar;",
                                    "⧣": "&eparsl;",
                                    "⩱": "&eplus;",
                                    "ε": "&epsilon;",
                                    "ϵ": "&varepsilon;",
                                    "=": "&equals;",
                                    "≟": "&questeq;",
                                    "⩸": "&equivDD;",
                                    "⧥": "&eqvparsl;",
                                    "≓": "&risingdotseq;",
                                    "⥱": "&erarr;",
                                    "ℯ": "&escr;",
                                    "η": "&eta;",
                                    "ð": "&eth;",
                                    "ë": "&euml;",
                                    "€": "&euro;",
                                    "!": "&excl;",
                                    "ф": "&fcy;",
                                    "♀": "&female;",
                                    "ﬃ": "&ffilig;",
                                    "ﬀ": "&fflig;",
                                    "ﬄ": "&ffllig;",
                                    "𝔣": "&ffr;",
                                    "ﬁ": "&filig;",
                                    fj: "&fjlig;",
                                    "♭": "&flat;",
                                    "ﬂ": "&fllig;",
                                    "▱": "&fltns;",
                                    "ƒ": "&fnof;",
                                    "𝕗": "&fopf;",
                                    "⋔": "&pitchfork;",
                                    "⫙": "&forkv;",
                                    "⨍": "&fpartint;",
                                    "½": "&half;",
                                    "⅓": "&frac13;",
                                    "¼": "&frac14;",
                                    "⅕": "&frac15;",
                                    "⅙": "&frac16;",
                                    "⅛": "&frac18;",
                                    "⅔": "&frac23;",
                                    "⅖": "&frac25;",
                                    "¾": "&frac34;",
                                    "⅗": "&frac35;",
                                    "⅜": "&frac38;",
                                    "⅘": "&frac45;",
                                    "⅚": "&frac56;",
                                    "⅝": "&frac58;",
                                    "⅞": "&frac78;",
                                    "⁄": "&frasl;",
                                    "⌢": "&sfrown;",
                                    "𝒻": "&fscr;",
                                    "⪌": "&gtreqqless;",
                                    "ǵ": "&gacute;",
                                    "γ": "&gamma;",
                                    "⪆": "&gtrapprox;",
                                    "ğ": "&gbreve;",
                                    "ĝ": "&gcirc;",
                                    "г": "&gcy;",
                                    "ġ": "&gdot;",
                                    "⪩": "&gescc;",
                                    "⪀": "&gesdot;",
                                    "⪂": "&gesdoto;",
                                    "⪄": "&gesdotol;",
                                    "⋛︀": "&gesl;",
                                    "⪔": "&gesles;",
                                    "𝔤": "&gfr;",
                                    "ℷ": "&gimel;",
                                    "ѓ": "&gjcy;",
                                    "⪒": "&glE;",
                                    "⪥": "&gla;",
                                    "⪤": "&glj;",
                                    "≩": "&gneqq;",
                                    "⪊": "&gnapprox;",
                                    "⪈": "&gneq;",
                                    "⋧": "&gnsim;",
                                    "𝕘": "&gopf;",
                                    "ℊ": "&gscr;",
                                    "⪎": "&gsime;",
                                    "⪐": "&gsiml;",
                                    "⪧": "&gtcc;",
                                    "⩺": "&gtcir;",
                                    "⋗": "&gtrdot;",
                                    "⦕": "&gtlPar;",
                                    "⩼": "&gtquest;",
                                    "⥸": "&gtrarr;",
                                    "≩︀": "&gvnE;",
                                    "ъ": "&hardcy;",
                                    "⥈": "&harrcir;",
                                    "↭": "&leftrightsquigarrow;",
                                    "ℏ": "&plankv;",
                                    "ĥ": "&hcirc;",
                                    "♥": "&heartsuit;",
                                    "…": "&mldr;",
                                    "⊹": "&hercon;",
                                    "𝔥": "&hfr;",
                                    "⤥": "&searhk;",
                                    "⤦": "&swarhk;",
                                    "⇿": "&hoarr;",
                                    "∻": "&homtht;",
                                    "↩": "&larrhk;",
                                    "↪": "&rarrhk;",
                                    "𝕙": "&hopf;",
                                    "―": "&horbar;",
                                    "𝒽": "&hscr;",
                                    "ħ": "&hstrok;",
                                    "⁃": "&hybull;",
                                    "í": "&iacute;",
                                    "î": "&icirc;",
                                    "и": "&icy;",
                                    "е": "&iecy;",
                                    "¡": "&iexcl;",
                                    "𝔦": "&ifr;",
                                    "ì": "&igrave;",
                                    "⨌": "&qint;",
                                    "∭": "&tint;",
                                    "⧜": "&iinfin;",
                                    "℩": "&iiota;",
                                    "ĳ": "&ijlig;",
                                    "ī": "&imacr;",
                                    "ı": "&inodot;",
                                    "⊷": "&imof;",
                                    "Ƶ": "&imped;",
                                    "℅": "&incare;",
                                    "∞": "&infin;",
                                    "⧝": "&infintie;",
                                    "⊺": "&intercal;",
                                    "⨗": "&intlarhk;",
                                    "⨼": "&iprod;",
                                    "ё": "&iocy;",
                                    "į": "&iogon;",
                                    "𝕚": "&iopf;",
                                    "ι": "&iota;",
                                    "¿": "&iquest;",
                                    "𝒾": "&iscr;",
                                    "⋹": "&isinE;",
                                    "⋵": "&isindot;",
                                    "⋴": "&isins;",
                                    "⋳": "&isinsv;",
                                    "ĩ": "&itilde;",
                                    "і": "&iukcy;",
                                    "ï": "&iuml;",
                                    "ĵ": "&jcirc;",
                                    "й": "&jcy;",
                                    "𝔧": "&jfr;",
                                    "ȷ": "&jmath;",
                                    "𝕛": "&jopf;",
                                    "𝒿": "&jscr;",
                                    "ј": "&jsercy;",
                                    "є": "&jukcy;",
                                    "κ": "&kappa;",
                                    "ϰ": "&varkappa;",
                                    "ķ": "&kcedil;",
                                    "к": "&kcy;",
                                    "𝔨": "&kfr;",
                                    "ĸ": "&kgreen;",
                                    "х": "&khcy;",
                                    "ќ": "&kjcy;",
                                    "𝕜": "&kopf;",
                                    "𝓀": "&kscr;",
                                    "⤛": "&lAtail;",
                                    "⤎": "&lBarr;",
                                    "⪋": "&lesseqqgtr;",
                                    "⥢": "&lHar;",
                                    "ĺ": "&lacute;",
                                    "⦴": "&laemptyv;",
                                    "λ": "&lambda;",
                                    "⦑": "&langd;",
                                    "⪅": "&lessapprox;",
                                    "«": "&laquo;",
                                    "⤟": "&larrbfs;",
                                    "⤝": "&larrfs;",
                                    "↫": "&looparrowleft;",
                                    "⤹": "&larrpl;",
                                    "⥳": "&larrsim;",
                                    "↢": "&leftarrowtail;",
                                    "⪫": "&lat;",
                                    "⤙": "&latail;",
                                    "⪭": "&late;",
                                    "⪭︀": "&lates;",
                                    "⤌": "&lbarr;",
                                    "❲": "&lbbrk;",
                                    "{": "&lcub;",
                                    "[": "&lsqb;",
                                    "⦋": "&lbrke;",
                                    "⦏": "&lbrksld;",
                                    "⦍": "&lbrkslu;",
                                    "ľ": "&lcaron;",
                                    "ļ": "&lcedil;",
                                    "л": "&lcy;",
                                    "⤶": "&ldca;",
                                    "⥧": "&ldrdhar;",
                                    "⥋": "&ldrushar;",
                                    "↲": "&ldsh;",
                                    "≤": "&leq;",
                                    "⇇": "&llarr;",
                                    "⋋": "&lthree;",
                                    "⪨": "&lescc;",
                                    "⩿": "&lesdot;",
                                    "⪁": "&lesdoto;",
                                    "⪃": "&lesdotor;",
                                    "⋚︀": "&lesg;",
                                    "⪓": "&lesges;",
                                    "⋖": "&ltdot;",
                                    "⥼": "&lfisht;",
                                    "𝔩": "&lfr;",
                                    "⪑": "&lgE;",
                                    "⥪": "&lharul;",
                                    "▄": "&lhblk;",
                                    "љ": "&ljcy;",
                                    "⥫": "&llhard;",
                                    "◺": "&lltri;",
                                    "ŀ": "&lmidot;",
                                    "⎰": "&lmoustache;",
                                    "≨": "&lneqq;",
                                    "⪉": "&lnapprox;",
                                    "⪇": "&lneq;",
                                    "⋦": "&lnsim;",
                                    "⟬": "&loang;",
                                    "⇽": "&loarr;",
                                    "⟼": "&xmap;",
                                    "↬": "&rarrlp;",
                                    "⦅": "&lopar;",
                                    "𝕝": "&lopf;",
                                    "⨭": "&loplus;",
                                    "⨴": "&lotimes;",
                                    "∗": "&lowast;",
                                    "◊": "&lozenge;",
                                    "(": "&lpar;",
                                    "⦓": "&lparlt;",
                                    "⥭": "&lrhard;",
                                    "‎": "&lrm;",
                                    "⊿": "&lrtri;",
                                    "‹": "&lsaquo;",
                                    "𝓁": "&lscr;",
                                    "⪍": "&lsime;",
                                    "⪏": "&lsimg;",
                                    "‚": "&sbquo;",
                                    "ł": "&lstrok;",
                                    "⪦": "&ltcc;",
                                    "⩹": "&ltcir;",
                                    "⋉": "&ltimes;",
                                    "⥶": "&ltlarr;",
                                    "⩻": "&ltquest;",
                                    "⦖": "&ltrPar;",
                                    "◃": "&triangleleft;",
                                    "⥊": "&lurdshar;",
                                    "⥦": "&luruhar;",
                                    "≨︀": "&lvnE;",
                                    "∺": "&mDDot;",
                                    "¯": "&strns;",
                                    "♂": "&male;",
                                    "✠": "&maltese;",
                                    "▮": "&marker;",
                                    "⨩": "&mcomma;",
                                    "м": "&mcy;",
                                    "—": "&mdash;",
                                    "𝔪": "&mfr;",
                                    "℧": "&mho;",
                                    "µ": "&micro;",
                                    "⫰": "&midcir;",
                                    "−": "&minus;",
                                    "⨪": "&minusdu;",
                                    "⫛": "&mlcp;",
                                    "⊧": "&models;",
                                    "𝕞": "&mopf;",
                                    "𝓂": "&mscr;",
                                    "μ": "&mu;",
                                    "⊸": "&mumap;",
                                    "⋙̸": "&nGg;",
                                    "≫⃒": "&nGt;",
                                    "⇍": "&nlArr;",
                                    "⇎": "&nhArr;",
                                    "⋘̸": "&nLl;",
                                    "≪⃒": "&nLt;",
                                    "⇏": "&nrArr;",
                                    "⊯": "&nVDash;",
                                    "⊮": "&nVdash;",
                                    "ń": "&nacute;",
                                    "∠⃒": "&nang;",
                                    "⩰̸": "&napE;",
                                    "≋̸": "&napid;",
                                    "ŉ": "&napos;",
                                    "♮": "&natural;",
                                    "⩃": "&ncap;",
                                    "ň": "&ncaron;",
                                    "ņ": "&ncedil;",
                                    "⩭̸": "&ncongdot;",
                                    "⩂": "&ncup;",
                                    "н": "&ncy;",
                                    "–": "&ndash;",
                                    "⇗": "&neArr;",
                                    "⤤": "&nearhk;",
                                    "≐̸": "&nedot;",
                                    "⤨": "&toea;",
                                    "𝔫": "&nfr;",
                                    "↮": "&nleftrightarrow;",
                                    "⫲": "&nhpar;",
                                    "⋼": "&nis;",
                                    "⋺": "&nisd;",
                                    "њ": "&njcy;",
                                    "≦̸": "&nleqq;",
                                    "↚": "&nleftarrow;",
                                    "‥": "&nldr;",
                                    "𝕟": "&nopf;",
                                    "¬": "&not;",
                                    "⋹̸": "&notinE;",
                                    "⋵̸": "&notindot;",
                                    "⋷": "&notinvb;",
                                    "⋶": "&notinvc;",
                                    "⋾": "&notnivb;",
                                    "⋽": "&notnivc;",
                                    "⫽⃥": "&nparsl;",
                                    "∂̸": "&npart;",
                                    "⨔": "&npolint;",
                                    "↛": "&nrightarrow;",
                                    "⤳̸": "&nrarrc;",
                                    "↝̸": "&nrarrw;",
                                    "𝓃": "&nscr;",
                                    "⊄": "&nsub;",
                                    "⫅̸": "&nsubseteqq;",
                                    "⊅": "&nsup;",
                                    "⫆̸": "&nsupseteqq;",
                                    "ñ": "&ntilde;",
                                    "ν": "&nu;",
                                    "#": "&num;",
                                    "№": "&numero;",
                                    " ": "&numsp;",
                                    "⊭": "&nvDash;",
                                    "⤄": "&nvHarr;",
                                    "≍⃒": "&nvap;",
                                    "⊬": "&nvdash;",
                                    "≥⃒": "&nvge;",
                                    ">⃒": "&nvgt;",
                                    "⧞": "&nvinfin;",
                                    "⤂": "&nvlArr;",
                                    "≤⃒": "&nvle;",
                                    "<⃒": "&nvlt;",
                                    "⊴⃒": "&nvltrie;",
                                    "⤃": "&nvrArr;",
                                    "⊵⃒": "&nvrtrie;",
                                    "∼⃒": "&nvsim;",
                                    "⇖": "&nwArr;",
                                    "⤣": "&nwarhk;",
                                    "⤧": "&nwnear;",
                                    "ó": "&oacute;",
                                    "ô": "&ocirc;",
                                    "о": "&ocy;",
                                    "ő": "&odblac;",
                                    "⨸": "&odiv;",
                                    "⦼": "&odsold;",
                                    "œ": "&oelig;",
                                    "⦿": "&ofcir;",
                                    "𝔬": "&ofr;",
                                    "˛": "&ogon;",
                                    "ò": "&ograve;",
                                    "⧁": "&ogt;",
                                    "⦵": "&ohbar;",
                                    "⦾": "&olcir;",
                                    "⦻": "&olcross;",
                                    "⧀": "&olt;",
                                    "ō": "&omacr;",
                                    "ω": "&omega;",
                                    "ο": "&omicron;",
                                    "⦶": "&omid;",
                                    "𝕠": "&oopf;",
                                    "⦷": "&opar;",
                                    "⦹": "&operp;",
                                    "∨": "&vee;",
                                    "⩝": "&ord;",
                                    "ℴ": "&oscr;",
                                    "ª": "&ordf;",
                                    "º": "&ordm;",
                                    "⊶": "&origof;",
                                    "⩖": "&oror;",
                                    "⩗": "&orslope;",
                                    "⩛": "&orv;",
                                    "ø": "&oslash;",
                                    "⊘": "&osol;",
                                    "õ": "&otilde;",
                                    "⨶": "&otimesas;",
                                    "ö": "&ouml;",
                                    "⌽": "&ovbar;",
                                    "¶": "&para;",
                                    "⫳": "&parsim;",
                                    "⫽": "&parsl;",
                                    "п": "&pcy;",
                                    "%": "&percnt;",
                                    ".": "&period;",
                                    "‰": "&permil;",
                                    "‱": "&pertenk;",
                                    "𝔭": "&pfr;",
                                    "φ": "&phi;",
                                    "ϕ": "&varphi;",
                                    "☎": "&phone;",
                                    "π": "&pi;",
                                    "ϖ": "&varpi;",
                                    "ℎ": "&planckh;",
                                    "+": "&plus;",
                                    "⨣": "&plusacir;",
                                    "⨢": "&pluscir;",
                                    "⨥": "&plusdu;",
                                    "⩲": "&pluse;",
                                    "⨦": "&plussim;",
                                    "⨧": "&plustwo;",
                                    "⨕": "&pointint;",
                                    "𝕡": "&popf;",
                                    "£": "&pound;",
                                    "⪳": "&prE;",
                                    "⪷": "&precapprox;",
                                    "⪹": "&prnap;",
                                    "⪵": "&prnE;",
                                    "⋨": "&prnsim;",
                                    "′": "&prime;",
                                    "⌮": "&profalar;",
                                    "⌒": "&profline;",
                                    "⌓": "&profsurf;",
                                    "⊰": "&prurel;",
                                    "𝓅": "&pscr;",
                                    "ψ": "&psi;",
                                    " ": "&puncsp;",
                                    "𝔮": "&qfr;",
                                    "𝕢": "&qopf;",
                                    "⁗": "&qprime;",
                                    "𝓆": "&qscr;",
                                    "⨖": "&quatint;",
                                    "?": "&quest;",
                                    "⤜": "&rAtail;",
                                    "⥤": "&rHar;",
                                    "∽̱": "&race;",
                                    "ŕ": "&racute;",
                                    "⦳": "&raemptyv;",
                                    "⦒": "&rangd;",
                                    "⦥": "&range;",
                                    "»": "&raquo;",
                                    "⥵": "&rarrap;",
                                    "⤠": "&rarrbfs;",
                                    "⤳": "&rarrc;",
                                    "⤞": "&rarrfs;",
                                    "⥅": "&rarrpl;",
                                    "⥴": "&rarrsim;",
                                    "↣": "&rightarrowtail;",
                                    "↝": "&rightsquigarrow;",
                                    "⤚": "&ratail;",
                                    "∶": "&ratio;",
                                    "❳": "&rbbrk;",
                                    "}": "&rcub;",
                                    "]": "&rsqb;",
                                    "⦌": "&rbrke;",
                                    "⦎": "&rbrksld;",
                                    "⦐": "&rbrkslu;",
                                    "ř": "&rcaron;",
                                    "ŗ": "&rcedil;",
                                    "р": "&rcy;",
                                    "⤷": "&rdca;",
                                    "⥩": "&rdldhar;",
                                    "↳": "&rdsh;",
                                    "▭": "&rect;",
                                    "⥽": "&rfisht;",
                                    "𝔯": "&rfr;",
                                    "⥬": "&rharul;",
                                    "ρ": "&rho;",
                                    "ϱ": "&varrho;",
                                    "⇉": "&rrarr;",
                                    "⋌": "&rthree;",
                                    "˚": "&ring;",
                                    "‏": "&rlm;",
                                    "⎱": "&rmoustache;",
                                    "⫮": "&rnmid;",
                                    "⟭": "&roang;",
                                    "⇾": "&roarr;",
                                    "⦆": "&ropar;",
                                    "𝕣": "&ropf;",
                                    "⨮": "&roplus;",
                                    "⨵": "&rotimes;",
                                    ")": "&rpar;",
                                    "⦔": "&rpargt;",
                                    "⨒": "&rppolint;",
                                    "›": "&rsaquo;",
                                    "𝓇": "&rscr;",
                                    "⋊": "&rtimes;",
                                    "▹": "&triangleright;",
                                    "⧎": "&rtriltri;",
                                    "⥨": "&ruluhar;",
                                    "℞": "&rx;",
                                    "ś": "&sacute;",
                                    "⪴": "&scE;",
                                    "⪸": "&succapprox;",
                                    "š": "&scaron;",
                                    "ş": "&scedil;",
                                    "ŝ": "&scirc;",
                                    "⪶": "&succneqq;",
                                    "⪺": "&succnapprox;",
                                    "⋩": "&succnsim;",
                                    "⨓": "&scpolint;",
                                    "с": "&scy;",
                                    "⋅": "&sdot;",
                                    "⩦": "&sdote;",
                                    "⇘": "&seArr;",
                                    "§": "&sect;",
                                    ";": "&semi;",
                                    "⤩": "&tosa;",
                                    "✶": "&sext;",
                                    "𝔰": "&sfr;",
                                    "♯": "&sharp;",
                                    "щ": "&shchcy;",
                                    "ш": "&shcy;",
                                    "­": "&shy;",
                                    "σ": "&sigma;",
                                    "ς": "&varsigma;",
                                    "⩪": "&simdot;",
                                    "⪞": "&simg;",
                                    "⪠": "&simgE;",
                                    "⪝": "&siml;",
                                    "⪟": "&simlE;",
                                    "≆": "&simne;",
                                    "⨤": "&simplus;",
                                    "⥲": "&simrarr;",
                                    "⨳": "&smashp;",
                                    "⧤": "&smeparsl;",
                                    "⌣": "&ssmile;",
                                    "⪪": "&smt;",
                                    "⪬": "&smte;",
                                    "⪬︀": "&smtes;",
                                    "ь": "&softcy;",
                                    "/": "&sol;",
                                    "⧄": "&solb;",
                                    "⌿": "&solbar;",
                                    "𝕤": "&sopf;",
                                    "♠": "&spadesuit;",
                                    "⊓︀": "&sqcaps;",
                                    "⊔︀": "&sqcups;",
                                    "𝓈": "&sscr;",
                                    "☆": "&star;",
                                    "⊂": "&subset;",
                                    "⫅": "&subseteqq;",
                                    "⪽": "&subdot;",
                                    "⫃": "&subedot;",
                                    "⫁": "&submult;",
                                    "⫋": "&subsetneqq;",
                                    "⊊": "&subsetneq;",
                                    "⪿": "&subplus;",
                                    "⥹": "&subrarr;",
                                    "⫇": "&subsim;",
                                    "⫕": "&subsub;",
                                    "⫓": "&subsup;",
                                    "♪": "&sung;",
                                    "¹": "&sup1;",
                                    "²": "&sup2;",
                                    "³": "&sup3;",
                                    "⫆": "&supseteqq;",
                                    "⪾": "&supdot;",
                                    "⫘": "&supdsub;",
                                    "⫄": "&supedot;",
                                    "⟉": "&suphsol;",
                                    "⫗": "&suphsub;",
                                    "⥻": "&suplarr;",
                                    "⫂": "&supmult;",
                                    "⫌": "&supsetneqq;",
                                    "⊋": "&supsetneq;",
                                    "⫀": "&supplus;",
                                    "⫈": "&supsim;",
                                    "⫔": "&supsub;",
                                    "⫖": "&supsup;",
                                    "⇙": "&swArr;",
                                    "⤪": "&swnwar;",
                                    "ß": "&szlig;",
                                    "⌖": "&target;",
                                    "τ": "&tau;",
                                    "ť": "&tcaron;",
                                    "ţ": "&tcedil;",
                                    "т": "&tcy;",
                                    "⌕": "&telrec;",
                                    "𝔱": "&tfr;",
                                    "θ": "&theta;",
                                    "ϑ": "&vartheta;",
                                    "þ": "&thorn;",
                                    "×": "&times;",
                                    "⨱": "&timesbar;",
                                    "⨰": "&timesd;",
                                    "⌶": "&topbot;",
                                    "⫱": "&topcir;",
                                    "𝕥": "&topf;",
                                    "⫚": "&topfork;",
                                    "‴": "&tprime;",
                                    "▵": "&utri;",
                                    "≜": "&trie;",
                                    "◬": "&tridot;",
                                    "⨺": "&triminus;",
                                    "⨹": "&triplus;",
                                    "⧍": "&trisb;",
                                    "⨻": "&tritime;",
                                    "⏢": "&trpezium;",
                                    "𝓉": "&tscr;",
                                    "ц": "&tscy;",
                                    "ћ": "&tshcy;",
                                    "ŧ": "&tstrok;",
                                    "⥣": "&uHar;",
                                    "ú": "&uacute;",
                                    "ў": "&ubrcy;",
                                    "ŭ": "&ubreve;",
                                    "û": "&ucirc;",
                                    "у": "&ucy;",
                                    "ű": "&udblac;",
                                    "⥾": "&ufisht;",
                                    "𝔲": "&ufr;",
                                    "ù": "&ugrave;",
                                    "▀": "&uhblk;",
                                    "⌜": "&ulcorner;",
                                    "⌏": "&ulcrop;",
                                    "◸": "&ultri;",
                                    "ū": "&umacr;",
                                    "ų": "&uogon;",
                                    "𝕦": "&uopf;",
                                    "υ": "&upsilon;",
                                    "⇈": "&uuarr;",
                                    "⌝": "&urcorner;",
                                    "⌎": "&urcrop;",
                                    "ů": "&uring;",
                                    "◹": "&urtri;",
                                    "𝓊": "&uscr;",
                                    "⋰": "&utdot;",
                                    "ũ": "&utilde;",
                                    "ü": "&uuml;",
                                    "⦧": "&uwangle;",
                                    "⫨": "&vBar;",
                                    "⫩": "&vBarv;",
                                    "⦜": "&vangrt;",
                                    "⊊︀": "&vsubne;",
                                    "⫋︀": "&vsubnE;",
                                    "⊋︀": "&vsupne;",
                                    "⫌︀": "&vsupnE;",
                                    "в": "&vcy;",
                                    "⊻": "&veebar;",
                                    "≚": "&veeeq;",
                                    "⋮": "&vellip;",
                                    "𝔳": "&vfr;",
                                    "𝕧": "&vopf;",
                                    "𝓋": "&vscr;",
                                    "⦚": "&vzigzag;",
                                    "ŵ": "&wcirc;",
                                    "⩟": "&wedbar;",
                                    "≙": "&wedgeq;",
                                    "℘": "&wp;",
                                    "𝔴": "&wfr;",
                                    "𝕨": "&wopf;",
                                    "𝓌": "&wscr;",
                                    "𝔵": "&xfr;",
                                    "ξ": "&xi;",
                                    "⋻": "&xnis;",
                                    "𝕩": "&xopf;",
                                    "𝓍": "&xscr;",
                                    "ý": "&yacute;",
                                    "я": "&yacy;",
                                    "ŷ": "&ycirc;",
                                    "ы": "&ycy;",
                                    "¥": "&yen;",
                                    "𝔶": "&yfr;",
                                    "ї": "&yicy;",
                                    "𝕪": "&yopf;",
                                    "𝓎": "&yscr;",
                                    "ю": "&yucy;",
                                    "ÿ": "&yuml;",
                                    "ź": "&zacute;",
                                    "ž": "&zcaron;",
                                    "з": "&zcy;",
                                    "ż": "&zdot;",
                                    "ζ": "&zeta;",
                                    "𝔷": "&zfr;",
                                    "ж": "&zhcy;",
                                    "⇝": "&zigrarr;",
                                    "𝕫": "&zopf;",
                                    "𝓏": "&zscr;",
                                    "‍": "&zwj;",
                                    "‌": "&zwnj;"
                                }
                            }
                        }
                },
                2642: function (A, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.numericUnicodeMap = {
                            0: 65533,
                            128: 8364,
                            130: 8218,
                            131: 402,
                            132: 8222,
                            133: 8230,
                            134: 8224,
                            135: 8225,
                            136: 710,
                            137: 8240,
                            138: 352,
                            139: 8249,
                            140: 338,
                            142: 381,
                            145: 8216,
                            146: 8217,
                            147: 8220,
                            148: 8221,
                            149: 8226,
                            150: 8211,
                            151: 8212,
                            152: 732,
                            153: 8482,
                            154: 353,
                            155: 8250,
                            156: 339,
                            158: 382,
                            159: 376
                        }
                },
                9726: function (A, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.fromCodePoint = String.fromCodePoint || function (A) {
                            return String.fromCharCode(Math.floor((A - 65536) / 1024) + 55296, (A - 65536) % 1024 + 56320)
                        }
                        ,
                        e.getCodePoint = String.prototype.codePointAt ? function (A, e) {
                                return A.codePointAt(e)
                            }
                            : function (A, e) {
                                return 1024 * (A.charCodeAt(e) - 55296) + A.charCodeAt(e + 1) - 56320 + 65536
                            }
                        ,
                        e.highSurrogateFrom = 55296,
                        e.highSurrogateTo = 56319
                },
                1120: function (A) {
                    /*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
                    A.exports = function () {
                        "use strict";
                        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
                        var A = function (e, t) {
                            return A = Object.setPrototypeOf || {
                                    __proto__: []
                                } instanceof Array && function (A, e) {
                                    A.__proto__ = e
                                }
                                || function (A, e) {
                                    for (var t in e)
                                        Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
                                }
                                ,
                                A(e, t)
                        };

                        function e(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function r() {
                                this.constructor = e
                            }

                            A(e, t),
                                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                                    new r)
                        }

                        var t = function () {
                            return t = Object.assign || function (A) {
                                for (var e, t = 1, r = arguments.length; t < r; t++)
                                    for (var n in e = arguments[t])
                                        Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
                                return A
                            }
                                ,
                                t.apply(this, arguments)
                        };

                        function r(A, e, t, r) {
                            function n(A) {
                                return A instanceof t ? A : new t((function (e) {
                                        e(A)
                                    }
                                ))
                            }

                            return new (t || (t = Promise))((function (t, u) {
                                    function s(A) {
                                        try {
                                            i(r.next(A))
                                        } catch (A) {
                                            u(A)
                                        }
                                    }

                                    function o(A) {
                                        try {
                                            i(r.throw(A))
                                        } catch (A) {
                                            u(A)
                                        }
                                    }

                                    function i(A) {
                                        A.done ? t(A.value) : n(A.value).then(s, o)
                                    }

                                    i((r = r.apply(A, e || [])).next())
                                }
                            ))
                        }

                        function n(A, e) {
                            var t, r, n, u, s = {
                                label: 0,
                                sent: function () {
                                    if (1 & n[0])
                                        throw n[1];
                                    return n[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return u = {
                                next: o(0),
                                throw: o(1),
                                return: o(2)
                            },
                            "function" == typeof Symbol && (u[Symbol.iterator] = function () {
                                    return this
                                }
                            ),
                                u;

                            function o(A) {
                                return function (e) {
                                    return i([A, e])
                                }
                            }

                            function i(u) {
                                if (t)
                                    throw new TypeError("Generator is already executing.");
                                for (; s;)
                                    try {
                                        if (t = 1,
                                        r && (n = 2 & u[0] ? r.return : u[0] ? r.throw || ((n = r.return) && n.call(r),
                                            0) : r.next) && !(n = n.call(r, u[1])).done)
                                            return n;
                                        switch (r = 0,
                                        n && (u = [2 & u[0], n.value]),
                                            u[0]) {
                                            case 0:
                                            case 1:
                                                n = u;
                                                break;
                                            case 4:
                                                return s.label++,
                                                    {
                                                        value: u[1],
                                                        done: !1
                                                    };
                                            case 5:
                                                s.label++,
                                                    r = u[1],
                                                    u = [0];
                                                continue;
                                            case 7:
                                                u = s.ops.pop(),
                                                    s.trys.pop();
                                                continue;
                                            default:
                                                if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                                                    s.label = u[1];
                                                    break
                                                }
                                                if (6 === u[0] && s.label < n[1]) {
                                                    s.label = n[1],
                                                        n = u;
                                                    break
                                                }
                                                if (n && s.label < n[2]) {
                                                    s.label = n[2],
                                                        s.ops.push(u);
                                                    break
                                                }
                                                n[2] && s.ops.pop(),
                                                    s.trys.pop();
                                                continue
                                        }
                                        u = e.call(A, s)
                                    } catch (A) {
                                        u = [6, A],
                                            r = 0
                                    } finally {
                                        t = n = 0
                                    }
                                if (5 & u[0])
                                    throw u[1];
                                return {
                                    value: u[0] ? u[1] : void 0,
                                    done: !0
                                }
                            }
                        }

                        function u(A, e, t) {
                            if (t || 2 === arguments.length)
                                for (var r, n = 0, u = e.length; n < u; n++)
                                    !r && n in e || (r || (r = Array.prototype.slice.call(e, 0, n)),
                                        r[n] = e[n]);
                            return A.concat(r || e)
                        }

                        for (var s = function () {
                            function A(A, e, t, r) {
                                this.left = A,
                                    this.top = e,
                                    this.width = t,
                                    this.height = r
                            }

                            return A.prototype.add = function (e, t, r, n) {
                                return new A(this.left + e, this.top + t, this.width + r, this.height + n)
                            }
                                ,
                                A.fromClientRect = function (e, t) {
                                    return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height)
                                }
                                ,
                                A.fromDOMRectList = function (e, t) {
                                    var r = Array.from(t).find((function (A) {
                                            return 0 !== A.width
                                        }
                                    ));
                                    return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY
                                }
                                ,
                                A.EMPTY = new A(0, 0, 0, 0),
                                A
                        }(), o = function (A, e) {
                            return s.fromClientRect(A, e.getBoundingClientRect())
                        }, i = function (A) {
                            var e = A.body
                                , t = A.documentElement;
                            if (!e || !t)
                                throw new Error("Unable to get document size");
                            var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth))
                                ,
                                n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                            return new s(0, 0, r, n)
                        }, a = function (A) {
                            for (var e = [], t = 0, r = A.length; t < r;) {
                                var n = A.charCodeAt(t++);
                                if (n >= 55296 && n <= 56319 && t < r) {
                                    var u = A.charCodeAt(t++);
                                    56320 == (64512 & u) ? e.push(((1023 & n) << 10) + (1023 & u) + 65536) : (e.push(n),
                                        t--)
                                } else
                                    e.push(n)
                            }
                            return e
                        }, B = function () {
                            for (var A = [], e = 0; e < arguments.length; e++)
                                A[e] = arguments[e];
                            if (String.fromCodePoint)
                                return String.fromCodePoint.apply(String, A);
                            var t = A.length;
                            if (!t)
                                return "";
                            for (var r = [], n = -1, u = ""; ++n < t;) {
                                var s = A[n];
                                s <= 65535 ? r.push(s) : (s -= 65536,
                                    r.push(55296 + (s >> 10), s % 1024 + 56320)),
                                (n + 1 === t || r.length > 16384) && (u += String.fromCharCode.apply(String, r),
                                    r.length = 0)
                            }
                            return u
                        }, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), g = 0; g < c.length; g++)
                            l[c.charCodeAt(g)] = g;
                        for (var w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", C = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Q = 0; Q < w.length; Q++)
                            C[w.charCodeAt(Q)] = Q;
                        for (var F = function (A) {
                            var e, t, r, n, u, s = .75 * A.length, o = A.length, i = 0;
                            "=" === A[A.length - 1] && (s--,
                            "=" === A[A.length - 2] && s--);
                            var a = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s)
                                , B = Array.isArray(a) ? a : new Uint8Array(a);
                            for (e = 0; e < o; e += 4)
                                t = C[A.charCodeAt(e)],
                                    r = C[A.charCodeAt(e + 1)],
                                    n = C[A.charCodeAt(e + 2)],
                                    u = C[A.charCodeAt(e + 3)],
                                    B[i++] = t << 2 | r >> 4,
                                    B[i++] = (15 & r) << 4 | n >> 2,
                                    B[i++] = (3 & n) << 6 | 63 & u;
                            return a
                        }, d = function (A) {
                            for (var e = A.length, t = [], r = 0; r < e; r += 2)
                                t.push(A[r + 1] << 8 | A[r]);
                            return t
                        }, h = function (A) {
                            for (var e = A.length, t = [], r = 0; r < e; r += 4)
                                t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                            return t
                        }, f = 5, p = 11, U = 2, D = 65536 >> f, E = (1 << f) - 1, m = D + (1024 >> f) + 32, y = 65536 >> p, H = (1 << p - f) - 1, v = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
                        }, b = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
                        }, I = function (A, e) {
                            var t = F(A)
                                , r = Array.isArray(t) ? h(t) : new Uint32Array(t)
                                , n = Array.isArray(t) ? d(t) : new Uint16Array(t)
                                , u = 24
                                , s = v(n, u / 2, r[4] / 2)
                                , o = 2 === r[5] ? v(n, (u + r[4]) / 2) : b(r, Math.ceil((u + r[4]) / 4));
                            return new K(r[0], r[1], r[2], r[3], s, o)
                        }, K = function () {
                            function A(A, e, t, r, n, u) {
                                this.initialValue = A,
                                    this.errorValue = e,
                                    this.highStart = t,
                                    this.highValueIndex = r,
                                    this.index = n,
                                    this.data = u
                            }

                            return A.prototype.get = function (A) {
                                var e;
                                if (A >= 0) {
                                    if (A < 55296 || A > 56319 && A <= 65535)
                                        return e = ((e = this.index[A >> f]) << U) + (A & E),
                                            this.data[e];
                                    if (A <= 65535)
                                        return e = ((e = this.index[D + (A - 55296 >> f)]) << U) + (A & E),
                                            this.data[e];
                                    if (A < this.highStart)
                                        return e = m - y + (A >> p),
                                            e = this.index[e],
                                            e += A >> f & H,
                                            e = ((e = this.index[e]) << U) + (A & E),
                                            this.data[e];
                                    if (A <= 1114111)
                                        return this.data[this.highValueIndex]
                                }
                                return this.errorValue
                            }
                                ,
                                A
                        }(), L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", x = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), S = 0; S < L.length; S++)
                            x[L.charCodeAt(S)] = S;
                        var T = 50
                            , O = 1
                            , M = 2
                            , V = 3
                            , k = 4
                            , G = 5
                            , N = 7
                            , R = 8
                            , P = 9
                            , q = 10
                            , J = 11
                            , X = 12
                            , Y = 13
                            , W = 14
                            , Z = 15
                            , _ = 16
                            , j = 17
                            , z = 18
                            , $ = 19
                            , AA = 20
                            , eA = 21
                            , tA = 22
                            , rA = 23
                            , nA = 24
                            , uA = 25
                            , sA = 26
                            , oA = 27
                            , iA = 28
                            , aA = 29
                            , BA = 30
                            , cA = 31
                            , lA = 32
                            , gA = 33
                            , wA = 34
                            , CA = 35
                            , QA = 36
                            , FA = 37
                            , dA = 38
                            , hA = 39
                            , fA = 40
                            , pA = 41
                            , UA = 42
                            , DA = 43
                            , EA = [9001, 65288]
                            , mA = "!"
                            , yA = "×"
                            , HA = "÷"
                            ,
                            vA = I("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==")
                            , bA = [BA, QA]
                            , IA = [O, M, V, G]
                            , KA = [q, R]
                            , LA = [oA, sA]
                            , xA = IA.concat(KA)
                            , SA = [dA, hA, fA, wA, CA]
                            , TA = [Z, Y]
                            , OA = function (A, e) {
                                void 0 === e && (e = "strict");
                                var t = []
                                    , r = []
                                    , n = [];
                                return A.forEach((function (A, u) {
                                        var s = vA.get(A);
                                        if (s > T ? (n.push(!0),
                                            s -= T) : n.push(!1),
                                        -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))
                                            return r.push(u),
                                                t.push(_);
                                        if (s === k || s === J) {
                                            if (0 === u)
                                                return r.push(u),
                                                    t.push(BA);
                                            var o = t[u - 1];
                                            return -1 === xA.indexOf(o) ? (r.push(r[u - 1]),
                                                t.push(o)) : (r.push(u),
                                                t.push(BA))
                                        }
                                        return r.push(u),
                                            s === cA ? t.push("strict" === e ? eA : FA) : s === UA || s === aA ? t.push(BA) : s === DA ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? t.push(FA) : t.push(BA) : void t.push(s)
                                    }
                                )),
                                    [r, t, n]
                            }
                            , MA = function (A, e, t, r) {
                                var n = r[t];
                                if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
                                    for (var u = t; u <= r.length;) {
                                        if ((i = r[++u]) === e)
                                            return !0;
                                        if (i !== q)
                                            break
                                    }
                                if (n === q)
                                    for (u = t; u > 0;) {
                                        var s = r[--u];
                                        if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
                                            for (var o = t; o <= r.length;) {
                                                var i;
                                                if ((i = r[++o]) === e)
                                                    return !0;
                                                if (i !== q)
                                                    break
                                            }
                                        if (s !== q)
                                            break
                                    }
                                return !1
                            }
                            , VA = function (A, e) {
                                for (var t = A; t >= 0;) {
                                    var r = e[t];
                                    if (r !== q)
                                        return r;
                                    t--
                                }
                                return 0
                            }
                            , kA = function (A, e, t, r, n) {
                                if (0 === t[r])
                                    return yA;
                                var u = r - 1;
                                if (Array.isArray(n) && !0 === n[u])
                                    return yA;
                                var s = u - 1
                                    , o = u + 1
                                    , i = e[u]
                                    , a = s >= 0 ? e[s] : 0
                                    , B = e[o];
                                if (i === M && B === V)
                                    return yA;
                                if (-1 !== IA.indexOf(i))
                                    return mA;
                                if (-1 !== IA.indexOf(B))
                                    return yA;
                                if (-1 !== KA.indexOf(B))
                                    return yA;
                                if (VA(u, e) === R)
                                    return HA;
                                if (vA.get(A[u]) === J)
                                    return yA;
                                if ((i === lA || i === gA) && vA.get(A[o]) === J)
                                    return yA;
                                if (i === N || B === N)
                                    return yA;
                                if (i === P)
                                    return yA;
                                if (-1 === [q, Y, Z].indexOf(i) && B === P)
                                    return yA;
                                if (-1 !== [j, z, $, nA, iA].indexOf(B))
                                    return yA;
                                if (VA(u, e) === tA)
                                    return yA;
                                if (MA(rA, tA, u, e))
                                    return yA;
                                if (MA([j, z], eA, u, e))
                                    return yA;
                                if (MA(X, X, u, e))
                                    return yA;
                                if (i === q)
                                    return HA;
                                if (i === rA || B === rA)
                                    return yA;
                                if (B === _ || i === _)
                                    return HA;
                                if (-1 !== [Y, Z, eA].indexOf(B) || i === W)
                                    return yA;
                                if (a === QA && -1 !== TA.indexOf(i))
                                    return yA;
                                if (i === iA && B === QA)
                                    return yA;
                                if (B === AA)
                                    return yA;
                                if (-1 !== bA.indexOf(B) && i === uA || -1 !== bA.indexOf(i) && B === uA)
                                    return yA;
                                if (i === oA && -1 !== [FA, lA, gA].indexOf(B) || -1 !== [FA, lA, gA].indexOf(i) && B === sA)
                                    return yA;
                                if (-1 !== bA.indexOf(i) && -1 !== LA.indexOf(B) || -1 !== LA.indexOf(i) && -1 !== bA.indexOf(B))
                                    return yA;
                                if (-1 !== [oA, sA].indexOf(i) && (B === uA || -1 !== [tA, Z].indexOf(B) && e[o + 1] === uA) || -1 !== [tA, Z].indexOf(i) && B === uA || i === uA && -1 !== [uA, iA, nA].indexOf(B))
                                    return yA;
                                if (-1 !== [uA, iA, nA, j, z].indexOf(B))
                                    for (var c = u; c >= 0;) {
                                        if ((l = e[c]) === uA)
                                            return yA;
                                        if (-1 === [iA, nA].indexOf(l))
                                            break;
                                        c--
                                    }
                                if (-1 !== [oA, sA].indexOf(B))
                                    for (c = -1 !== [j, z].indexOf(i) ? s : u; c >= 0;) {
                                        var l;
                                        if ((l = e[c]) === uA)
                                            return yA;
                                        if (-1 === [iA, nA].indexOf(l))
                                            break;
                                        c--
                                    }
                                if (dA === i && -1 !== [dA, hA, wA, CA].indexOf(B) || -1 !== [hA, wA].indexOf(i) && -1 !== [hA, fA].indexOf(B) || -1 !== [fA, CA].indexOf(i) && B === fA)
                                    return yA;
                                if (-1 !== SA.indexOf(i) && -1 !== [AA, sA].indexOf(B) || -1 !== SA.indexOf(B) && i === oA)
                                    return yA;
                                if (-1 !== bA.indexOf(i) && -1 !== bA.indexOf(B))
                                    return yA;
                                if (i === nA && -1 !== bA.indexOf(B))
                                    return yA;
                                if (-1 !== bA.concat(uA).indexOf(i) && B === tA && -1 === EA.indexOf(A[o]) || -1 !== bA.concat(uA).indexOf(B) && i === z)
                                    return yA;
                                if (i === pA && B === pA) {
                                    for (var g = t[u], w = 1; g > 0 && e[--g] === pA;)
                                        w++;
                                    if (w % 2 != 0)
                                        return yA
                                }
                                return i === lA && B === gA ? yA : HA
                            }
                            , GA = function (A, e) {
                                e || (e = {
                                    lineBreak: "normal",
                                    wordBreak: "normal"
                                });
                                var t = OA(A, e.lineBreak)
                                    , r = t[0]
                                    , n = t[1]
                                    , u = t[2];
                                "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (n = n.map((function (A) {
                                        return -1 !== [uA, BA, UA].indexOf(A) ? FA : A
                                    }
                                )));
                                var s = "keep-all" === e.wordBreak ? u.map((function (e, t) {
                                        return e && A[t] >= 19968 && A[t] <= 40959
                                    }
                                )) : void 0;
                                return [r, n, s]
                            }
                            , NA = function () {
                                function A(A, e, t, r) {
                                    this.codePoints = A,
                                        this.required = e === mA,
                                        this.start = t,
                                        this.end = r
                                }

                                return A.prototype.slice = function () {
                                    return B.apply(void 0, this.codePoints.slice(this.start, this.end))
                                }
                                    ,
                                    A
                            }()
                            , RA = function (A, e) {
                                var t = a(A)
                                    , r = GA(t, e)
                                    , n = r[0]
                                    , u = r[1]
                                    , s = r[2]
                                    , o = t.length
                                    , i = 0
                                    , B = 0;
                                return {
                                    next: function () {
                                        if (B >= o)
                                            return {
                                                done: !0,
                                                value: null
                                            };
                                        for (var A = yA; B < o && (A = kA(t, u, n, ++B, s)) === yA;)
                                            ;
                                        if (A !== yA || B === o) {
                                            var e = new NA(t, A, i, B);
                                            return i = B,
                                                {
                                                    value: e,
                                                    done: !1
                                                }
                                        }
                                        return {
                                            done: !0,
                                            value: null
                                        }
                                    }
                                }
                            }
                            , PA = 1
                            , qA = 2
                            , JA = 4
                            , XA = 8
                            , YA = 10
                            , WA = 47
                            , ZA = 92
                            , _A = 9
                            , jA = 32
                            , zA = 34
                            , $A = 61
                            , Ae = 35
                            , ee = 36
                            , te = 37
                            , re = 39
                            , ne = 40
                            , ue = 41
                            , se = 95
                            , oe = 45
                            , ie = 33
                            , ae = 60
                            , Be = 62
                            , ce = 64
                            , le = 91
                            , ge = 93
                            , we = 61
                            , Ce = 123
                            , Qe = 63
                            , Fe = 125
                            , de = 124
                            , he = 126
                            , fe = 128
                            , pe = 65533
                            , Ue = 42
                            , De = 43
                            , Ee = 44
                            , me = 58
                            , ye = 59
                            , He = 46
                            , ve = 0
                            , be = 8
                            , Ie = 11
                            , Ke = 14
                            , Le = 31
                            , xe = 127
                            , Se = -1
                            , Te = 48
                            , Oe = 97
                            , Me = 101
                            , Ve = 102
                            , ke = 117
                            , Ge = 122
                            , Ne = 65
                            , Re = 69
                            , Pe = 70
                            , qe = 85
                            , Je = 90
                            , Xe = function (A) {
                                return A >= Te && A <= 57
                            }
                            , Ye = function (A) {
                                return A >= 55296 && A <= 57343
                            }
                            , We = function (A) {
                                return Xe(A) || A >= Ne && A <= Pe || A >= Oe && A <= Ve
                            }
                            , Ze = function (A) {
                                return A >= Oe && A <= Ge
                            }
                            , _e = function (A) {
                                return A >= Ne && A <= Je
                            }
                            , je = function (A) {
                                return Ze(A) || _e(A)
                            }
                            , ze = function (A) {
                                return A >= fe
                            }
                            , $e = function (A) {
                                return A === YA || A === _A || A === jA
                            }
                            , At = function (A) {
                                return je(A) || ze(A) || A === se
                            }
                            , et = function (A) {
                                return At(A) || Xe(A) || A === oe
                            }
                            , tt = function (A) {
                                return A >= ve && A <= be || A === Ie || A >= Ke && A <= Le || A === xe
                            }
                            , rt = function (A, e) {
                                return A === ZA && e !== YA
                            }
                            , nt = function (A, e, t) {
                                return A === oe ? At(e) || rt(e, t) : !!At(A) || !(A !== ZA || !rt(A, e))
                            }
                            , ut = function (A, e, t) {
                                return A === De || A === oe ? !!Xe(e) || e === He && Xe(t) : Xe(A === He ? e : A)
                            }
                            , st = function (A) {
                                var e = 0
                                    , t = 1;
                                A[e] !== De && A[e] !== oe || (A[e] === oe && (t = -1),
                                    e++);
                                for (var r = []; Xe(A[e]);)
                                    r.push(A[e++]);
                                var n = r.length ? parseInt(B.apply(void 0, r), 10) : 0;
                                A[e] === He && e++;
                                for (var u = []; Xe(A[e]);)
                                    u.push(A[e++]);
                                var s = u.length
                                    , o = s ? parseInt(B.apply(void 0, u), 10) : 0;
                                A[e] !== Re && A[e] !== Me || e++;
                                var i = 1;
                                A[e] !== De && A[e] !== oe || (A[e] === oe && (i = -1),
                                    e++);
                                for (var a = []; Xe(A[e]);)
                                    a.push(A[e++]);
                                var c = a.length ? parseInt(B.apply(void 0, a), 10) : 0;
                                return t * (n + o * Math.pow(10, -s)) * Math.pow(10, i * c)
                            }
                            , ot = {
                                type: 2
                            }
                            , it = {
                                type: 3
                            }
                            , at = {
                                type: 4
                            }
                            , Bt = {
                                type: 13
                            }
                            , ct = {
                                type: 8
                            }
                            , lt = {
                                type: 21
                            }
                            , gt = {
                                type: 9
                            }
                            , wt = {
                                type: 10
                            }
                            , Ct = {
                                type: 11
                            }
                            , Qt = {
                                type: 12
                            }
                            , Ft = {
                                type: 14
                            }
                            , dt = {
                                type: 23
                            }
                            , ht = {
                                type: 1
                            }
                            , ft = {
                                type: 25
                            }
                            , pt = {
                                type: 24
                            }
                            , Ut = {
                                type: 26
                            }
                            , Dt = {
                                type: 27
                            }
                            , Et = {
                                type: 28
                            }
                            , mt = {
                                type: 29
                            }
                            , yt = {
                                type: 31
                            }
                            , Ht = {
                                type: 32
                            }
                            , vt = function () {
                                function A() {
                                    this._value = []
                                }

                                return A.prototype.write = function (A) {
                                    this._value = this._value.concat(a(A))
                                }
                                    ,
                                    A.prototype.read = function () {
                                        for (var A = [], e = this.consumeToken(); e !== Ht;)
                                            A.push(e),
                                                e = this.consumeToken();
                                        return A
                                    }
                                    ,
                                    A.prototype.consumeToken = function () {
                                        var A = this.consumeCodePoint();
                                        switch (A) {
                                            case zA:
                                                return this.consumeStringToken(zA);
                                            case Ae:
                                                var e = this.peekCodePoint(0)
                                                    , t = this.peekCodePoint(1)
                                                    , r = this.peekCodePoint(2);
                                                if (et(e) || rt(t, r)) {
                                                    var n = nt(e, t, r) ? qA : PA;
                                                    return {
                                                        type: 5,
                                                        value: this.consumeName(),
                                                        flags: n
                                                    }
                                                }
                                                break;
                                            case ee:
                                                if (this.peekCodePoint(0) === $A)
                                                    return this.consumeCodePoint(),
                                                        Bt;
                                                break;
                                            case re:
                                                return this.consumeStringToken(re);
                                            case ne:
                                                return ot;
                                            case ue:
                                                return it;
                                            case Ue:
                                                if (this.peekCodePoint(0) === $A)
                                                    return this.consumeCodePoint(),
                                                        Ft;
                                                break;
                                            case De:
                                                if (ut(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                                    return this.reconsumeCodePoint(A),
                                                        this.consumeNumericToken();
                                                break;
                                            case Ee:
                                                return at;
                                            case oe:
                                                var u = A
                                                    , s = this.peekCodePoint(0)
                                                    , o = this.peekCodePoint(1);
                                                if (ut(u, s, o))
                                                    return this.reconsumeCodePoint(A),
                                                        this.consumeNumericToken();
                                                if (nt(u, s, o))
                                                    return this.reconsumeCodePoint(A),
                                                        this.consumeIdentLikeToken();
                                                if (s === oe && o === Be)
                                                    return this.consumeCodePoint(),
                                                        this.consumeCodePoint(),
                                                        pt;
                                                break;
                                            case He:
                                                if (ut(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                                    return this.reconsumeCodePoint(A),
                                                        this.consumeNumericToken();
                                                break;
                                            case WA:
                                                if (this.peekCodePoint(0) === Ue)
                                                    for (this.consumeCodePoint(); ;) {
                                                        var i = this.consumeCodePoint();
                                                        if (i === Ue && (i = this.consumeCodePoint()) === WA)
                                                            return this.consumeToken();
                                                        if (i === Se)
                                                            return this.consumeToken()
                                                    }
                                                break;
                                            case me:
                                                return Ut;
                                            case ye:
                                                return Dt;
                                            case ae:
                                                if (this.peekCodePoint(0) === ie && this.peekCodePoint(1) === oe && this.peekCodePoint(2) === oe)
                                                    return this.consumeCodePoint(),
                                                        this.consumeCodePoint(),
                                                        ft;
                                                break;
                                            case ce:
                                                var a = this.peekCodePoint(0)
                                                    , c = this.peekCodePoint(1)
                                                    , l = this.peekCodePoint(2);
                                                if (nt(a, c, l))
                                                    return {
                                                        type: 7,
                                                        value: this.consumeName()
                                                    };
                                                break;
                                            case le:
                                                return Et;
                                            case ZA:
                                                if (rt(A, this.peekCodePoint(0)))
                                                    return this.reconsumeCodePoint(A),
                                                        this.consumeIdentLikeToken();
                                                break;
                                            case ge:
                                                return mt;
                                            case we:
                                                if (this.peekCodePoint(0) === $A)
                                                    return this.consumeCodePoint(),
                                                        ct;
                                                break;
                                            case Ce:
                                                return Ct;
                                            case Fe:
                                                return Qt;
                                            case ke:
                                            case qe:
                                                var g = this.peekCodePoint(0)
                                                    , w = this.peekCodePoint(1);
                                                return g !== De || !We(w) && w !== Qe || (this.consumeCodePoint(),
                                                    this.consumeUnicodeRangeToken()),
                                                    this.reconsumeCodePoint(A),
                                                    this.consumeIdentLikeToken();
                                            case de:
                                                if (this.peekCodePoint(0) === $A)
                                                    return this.consumeCodePoint(),
                                                        gt;
                                                if (this.peekCodePoint(0) === de)
                                                    return this.consumeCodePoint(),
                                                        lt;
                                                break;
                                            case he:
                                                if (this.peekCodePoint(0) === $A)
                                                    return this.consumeCodePoint(),
                                                        wt;
                                                break;
                                            case Se:
                                                return Ht
                                        }
                                        return $e(A) ? (this.consumeWhiteSpace(),
                                            yt) : Xe(A) ? (this.reconsumeCodePoint(A),
                                            this.consumeNumericToken()) : At(A) ? (this.reconsumeCodePoint(A),
                                            this.consumeIdentLikeToken()) : {
                                            type: 6,
                                            value: B(A)
                                        }
                                    }
                                    ,
                                    A.prototype.consumeCodePoint = function () {
                                        var A = this._value.shift();
                                        return void 0 === A ? -1 : A
                                    }
                                    ,
                                    A.prototype.reconsumeCodePoint = function (A) {
                                        this._value.unshift(A)
                                    }
                                    ,
                                    A.prototype.peekCodePoint = function (A) {
                                        return A >= this._value.length ? -1 : this._value[A]
                                    }
                                    ,
                                    A.prototype.consumeUnicodeRangeToken = function () {
                                        for (var A = [], e = this.consumeCodePoint(); We(e) && A.length < 6;)
                                            A.push(e),
                                                e = this.consumeCodePoint();
                                        for (var t = !1; e === Qe && A.length < 6;)
                                            A.push(e),
                                                e = this.consumeCodePoint(),
                                                t = !0;
                                        if (t)
                                            return {
                                                type: 30,
                                                start: parseInt(B.apply(void 0, A.map((function (A) {
                                                        return A === Qe ? Te : A
                                                    }
                                                ))), 16),
                                                end: parseInt(B.apply(void 0, A.map((function (A) {
                                                        return A === Qe ? Pe : A
                                                    }
                                                ))), 16)
                                            };
                                        var r = parseInt(B.apply(void 0, A), 16);
                                        if (this.peekCodePoint(0) === oe && We(this.peekCodePoint(1))) {
                                            this.consumeCodePoint(),
                                                e = this.consumeCodePoint();
                                            for (var n = []; We(e) && n.length < 6;)
                                                n.push(e),
                                                    e = this.consumeCodePoint();
                                            return {
                                                type: 30,
                                                start: r,
                                                end: parseInt(B.apply(void 0, n), 16)
                                            }
                                        }
                                        return {
                                            type: 30,
                                            start: r,
                                            end: r
                                        }
                                    }
                                    ,
                                    A.prototype.consumeIdentLikeToken = function () {
                                        var A = this.consumeName();
                                        return "url" === A.toLowerCase() && this.peekCodePoint(0) === ne ? (this.consumeCodePoint(),
                                            this.consumeUrlToken()) : this.peekCodePoint(0) === ne ? (this.consumeCodePoint(),
                                            {
                                                type: 19,
                                                value: A
                                            }) : {
                                            type: 20,
                                            value: A
                                        }
                                    }
                                    ,
                                    A.prototype.consumeUrlToken = function () {
                                        var A = [];
                                        if (this.consumeWhiteSpace(),
                                        this.peekCodePoint(0) === Se)
                                            return {
                                                type: 22,
                                                value: ""
                                            };
                                        var e = this.peekCodePoint(0);
                                        if (e === re || e === zA) {
                                            var t = this.consumeStringToken(this.consumeCodePoint());
                                            return 0 === t.type && (this.consumeWhiteSpace(),
                                            this.peekCodePoint(0) === Se || this.peekCodePoint(0) === ue) ? (this.consumeCodePoint(),
                                                {
                                                    type: 22,
                                                    value: t.value
                                                }) : (this.consumeBadUrlRemnants(),
                                                dt)
                                        }
                                        for (; ;) {
                                            var r = this.consumeCodePoint();
                                            if (r === Se || r === ue)
                                                return {
                                                    type: 22,
                                                    value: B.apply(void 0, A)
                                                };
                                            if ($e(r))
                                                return this.consumeWhiteSpace(),
                                                    this.peekCodePoint(0) === Se || this.peekCodePoint(0) === ue ? (this.consumeCodePoint(),
                                                        {
                                                            type: 22,
                                                            value: B.apply(void 0, A)
                                                        }) : (this.consumeBadUrlRemnants(),
                                                        dt);
                                            if (r === zA || r === re || r === ne || tt(r))
                                                return this.consumeBadUrlRemnants(),
                                                    dt;
                                            if (r === ZA) {
                                                if (!rt(r, this.peekCodePoint(0)))
                                                    return this.consumeBadUrlRemnants(),
                                                        dt;
                                                A.push(this.consumeEscapedCodePoint())
                                            } else
                                                A.push(r)
                                        }
                                    }
                                    ,
                                    A.prototype.consumeWhiteSpace = function () {
                                        for (; $e(this.peekCodePoint(0));)
                                            this.consumeCodePoint()
                                    }
                                    ,
                                    A.prototype.consumeBadUrlRemnants = function () {
                                        for (; ;) {
                                            var A = this.consumeCodePoint();
                                            if (A === ue || A === Se)
                                                return;
                                            rt(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                                        }
                                    }
                                    ,
                                    A.prototype.consumeStringSlice = function (A) {
                                        for (var e = 5e4, t = ""; A > 0;) {
                                            var r = Math.min(e, A);
                                            t += B.apply(void 0, this._value.splice(0, r)),
                                                A -= r
                                        }
                                        return this._value.shift(),
                                            t
                                    }
                                    ,
                                    A.prototype.consumeStringToken = function (A) {
                                        for (var e = "", t = 0; ;) {
                                            var r = this._value[t];
                                            if (r === Se || void 0 === r || r === A)
                                                return {
                                                    type: 0,
                                                    value: e += this.consumeStringSlice(t)
                                                };
                                            if (r === YA)
                                                return this._value.splice(0, t),
                                                    ht;
                                            if (r === ZA) {
                                                var n = this._value[t + 1];
                                                n !== Se && void 0 !== n && (n === YA ? (e += this.consumeStringSlice(t),
                                                    t = -1,
                                                    this._value.shift()) : rt(r, n) && (e += this.consumeStringSlice(t),
                                                    e += B(this.consumeEscapedCodePoint()),
                                                    t = -1))
                                            }
                                            t++
                                        }
                                    }
                                    ,
                                    A.prototype.consumeNumber = function () {
                                        var A = []
                                            , e = JA
                                            , t = this.peekCodePoint(0);
                                        for (t !== De && t !== oe || A.push(this.consumeCodePoint()); Xe(this.peekCodePoint(0));)
                                            A.push(this.consumeCodePoint());
                                        t = this.peekCodePoint(0);
                                        var r = this.peekCodePoint(1);
                                        if (t === He && Xe(r))
                                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                                                     e = XA; Xe(this.peekCodePoint(0));)
                                                A.push(this.consumeCodePoint());
                                        t = this.peekCodePoint(0),
                                            r = this.peekCodePoint(1);
                                        var n = this.peekCodePoint(2);
                                        if ((t === Re || t === Me) && ((r === De || r === oe) && Xe(n) || Xe(r)))
                                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                                                     e = XA; Xe(this.peekCodePoint(0));)
                                                A.push(this.consumeCodePoint());
                                        return [st(A), e]
                                    }
                                    ,
                                    A.prototype.consumeNumericToken = function () {
                                        var A = this.consumeNumber()
                                            , e = A[0]
                                            , t = A[1]
                                            , r = this.peekCodePoint(0)
                                            , n = this.peekCodePoint(1)
                                            , u = this.peekCodePoint(2);
                                        return nt(r, n, u) ? {
                                            type: 15,
                                            number: e,
                                            flags: t,
                                            unit: this.consumeName()
                                        } : r === te ? (this.consumeCodePoint(),
                                            {
                                                type: 16,
                                                number: e,
                                                flags: t
                                            }) : {
                                            type: 17,
                                            number: e,
                                            flags: t
                                        }
                                    }
                                    ,
                                    A.prototype.consumeEscapedCodePoint = function () {
                                        var A = this.consumeCodePoint();
                                        if (We(A)) {
                                            for (var e = B(A); We(this.peekCodePoint(0)) && e.length < 6;)
                                                e += B(this.consumeCodePoint());
                                            $e(this.peekCodePoint(0)) && this.consumeCodePoint();
                                            var t = parseInt(e, 16);
                                            return 0 === t || Ye(t) || t > 1114111 ? pe : t
                                        }
                                        return A === Se ? pe : A
                                    }
                                    ,
                                    A.prototype.consumeName = function () {
                                        for (var A = ""; ;) {
                                            var e = this.consumeCodePoint();
                                            if (et(e))
                                                A += B(e);
                                            else {
                                                if (!rt(e, this.peekCodePoint(0)))
                                                    return this.reconsumeCodePoint(e),
                                                        A;
                                                A += B(this.consumeEscapedCodePoint())
                                            }
                                        }
                                    }
                                    ,
                                    A
                            }()
                            , bt = function () {
                                function A(A) {
                                    this._tokens = A
                                }

                                return A.create = function (e) {
                                    var t = new vt;
                                    return t.write(e),
                                        new A(t.read())
                                }
                                    ,
                                    A.parseValue = function (e) {
                                        return A.create(e).parseComponentValue()
                                    }
                                    ,
                                    A.parseValues = function (e) {
                                        return A.create(e).parseComponentValues()
                                    }
                                    ,
                                    A.prototype.parseComponentValue = function () {
                                        for (var A = this.consumeToken(); 31 === A.type;)
                                            A = this.consumeToken();
                                        if (32 === A.type)
                                            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                                        this.reconsumeToken(A);
                                        var e = this.consumeComponentValue();
                                        do {
                                            A = this.consumeToken()
                                        } while (31 === A.type);
                                        if (32 === A.type)
                                            return e;
                                        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                                    }
                                    ,
                                    A.prototype.parseComponentValues = function () {
                                        for (var A = []; ;) {
                                            var e = this.consumeComponentValue();
                                            if (32 === e.type)
                                                return A;
                                            A.push(e),
                                                A.push()
                                        }
                                    }
                                    ,
                                    A.prototype.consumeComponentValue = function () {
                                        var A = this.consumeToken();
                                        switch (A.type) {
                                            case 11:
                                            case 28:
                                            case 2:
                                                return this.consumeSimpleBlock(A.type);
                                            case 19:
                                                return this.consumeFunction(A)
                                        }
                                        return A
                                    }
                                    ,
                                    A.prototype.consumeSimpleBlock = function (A) {
                                        for (var e = {
                                            type: A,
                                            values: []
                                        }, t = this.consumeToken(); ;) {
                                            if (32 === t.type || Vt(t, A))
                                                return e;
                                            this.reconsumeToken(t),
                                                e.values.push(this.consumeComponentValue()),
                                                t = this.consumeToken()
                                        }
                                    }
                                    ,
                                    A.prototype.consumeFunction = function (A) {
                                        for (var e = {
                                            name: A.value,
                                            values: [],
                                            type: 18
                                        }; ;) {
                                            var t = this.consumeToken();
                                            if (32 === t.type || 3 === t.type)
                                                return e;
                                            this.reconsumeToken(t),
                                                e.values.push(this.consumeComponentValue())
                                        }
                                    }
                                    ,
                                    A.prototype.consumeToken = function () {
                                        var A = this._tokens.shift();
                                        return void 0 === A ? Ht : A
                                    }
                                    ,
                                    A.prototype.reconsumeToken = function (A) {
                                        this._tokens.unshift(A)
                                    }
                                    ,
                                    A
                            }()
                            , It = function (A) {
                                return 15 === A.type
                            }
                            , Kt = function (A) {
                                return 17 === A.type
                            }
                            , Lt = function (A) {
                                return 20 === A.type
                            }
                            , xt = function (A) {
                                return 0 === A.type
                            }
                            , St = function (A, e) {
                                return Lt(A) && A.value === e
                            }
                            , Tt = function (A) {
                                return 31 !== A.type
                            }
                            , Ot = function (A) {
                                return 31 !== A.type && 4 !== A.type
                            }
                            , Mt = function (A) {
                                var e = []
                                    , t = [];
                                return A.forEach((function (A) {
                                        if (4 === A.type) {
                                            if (0 === t.length)
                                                throw new Error("Error parsing function args, zero tokens for arg");
                                            return e.push(t),
                                                void (t = [])
                                        }
                                        31 !== A.type && t.push(A)
                                    }
                                )),
                                t.length && e.push(t),
                                    e
                            }
                            , Vt = function (A, e) {
                                return 11 === e && 12 === A.type || 28 === e && 29 === A.type || 2 === e && 3 === A.type
                            }
                            , kt = function (A) {
                                return 17 === A.type || 15 === A.type
                            }
                            , Gt = function (A) {
                                return 16 === A.type || kt(A)
                            }
                            , Nt = function (A) {
                                return A.length > 1 ? [A[0], A[1]] : [A[0]]
                            }
                            , Rt = {
                                type: 17,
                                number: 0,
                                flags: JA
                            }
                            , Pt = {
                                type: 16,
                                number: 50,
                                flags: JA
                            }
                            , qt = {
                                type: 16,
                                number: 100,
                                flags: JA
                            }
                            , Jt = function (A, e, t) {
                                var r = A[0]
                                    , n = A[1];
                                return [Xt(r, e), Xt(void 0 !== n ? n : r, t)]
                            }
                            , Xt = function (A, e) {
                                if (16 === A.type)
                                    return A.number / 100 * e;
                                if (It(A))
                                    switch (A.unit) {
                                        case "rem":
                                        case "em":
                                            return 16 * A.number;
                                        default:
                                            return A.number
                                    }
                                return A.number
                            }
                            , Yt = "deg"
                            , Wt = "grad"
                            , Zt = "rad"
                            , _t = "turn"
                            , jt = {
                                name: "angle",
                                parse: function (A, e) {
                                    if (15 === e.type)
                                        switch (e.unit) {
                                            case Yt:
                                                return Math.PI * e.number / 180;
                                            case Wt:
                                                return Math.PI / 200 * e.number;
                                            case Zt:
                                                return e.number;
                                            case _t:
                                                return 2 * Math.PI * e.number
                                        }
                                    throw new Error("Unsupported angle type")
                                }
                            }
                            , zt = function (A) {
                                return 15 === A.type && (A.unit === Yt || A.unit === Wt || A.unit === Zt || A.unit === _t)
                            }
                            , $t = function (A) {
                                switch (A.filter(Lt).map((function (A) {
                                        return A.value
                                    }
                                )).join(" ")) {
                                    case "to bottom right":
                                    case "to right bottom":
                                    case "left top":
                                    case "top left":
                                        return [Rt, Rt];
                                    case "to top":
                                    case "bottom":
                                        return Ar(0);
                                    case "to bottom left":
                                    case "to left bottom":
                                    case "right top":
                                    case "top right":
                                        return [Rt, qt];
                                    case "to right":
                                    case "left":
                                        return Ar(90);
                                    case "to top left":
                                    case "to left top":
                                    case "right bottom":
                                    case "bottom right":
                                        return [qt, qt];
                                    case "to bottom":
                                    case "top":
                                        return Ar(180);
                                    case "to top right":
                                    case "to right top":
                                    case "left bottom":
                                    case "bottom left":
                                        return [qt, Rt];
                                    case "to left":
                                    case "right":
                                        return Ar(270)
                                }
                                return 0
                            }
                            , Ar = function (A) {
                                return Math.PI * A / 180
                            }
                            , er = {
                                name: "color",
                                parse: function (A, e) {
                                    if (18 === e.type) {
                                        var t = ar[e.name];
                                        if (void 0 === t)
                                            throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                                        return t(A, e.values)
                                    }
                                    if (5 === e.type) {
                                        if (3 === e.value.length) {
                                            var r = e.value.substring(0, 1)
                                                , n = e.value.substring(1, 2)
                                                , u = e.value.substring(2, 3);
                                            return nr(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(u + u, 16), 1)
                                        }
                                        if (4 === e.value.length) {
                                            r = e.value.substring(0, 1),
                                                n = e.value.substring(1, 2),
                                                u = e.value.substring(2, 3);
                                            var s = e.value.substring(3, 4);
                                            return nr(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(u + u, 16), parseInt(s + s, 16) / 255)
                                        }
                                        if (6 === e.value.length)
                                            return r = e.value.substring(0, 2),
                                                n = e.value.substring(2, 4),
                                                u = e.value.substring(4, 6),
                                                nr(parseInt(r, 16), parseInt(n, 16), parseInt(u, 16), 1);
                                        if (8 === e.value.length)
                                            return r = e.value.substring(0, 2),
                                                n = e.value.substring(2, 4),
                                                u = e.value.substring(4, 6),
                                                s = e.value.substring(6, 8),
                                                nr(parseInt(r, 16), parseInt(n, 16), parseInt(u, 16), parseInt(s, 16) / 255)
                                    }
                                    if (20 === e.type) {
                                        var o = cr[e.value.toUpperCase()];
                                        if (void 0 !== o)
                                            return o
                                    }
                                    return cr.TRANSPARENT
                                }
                            }
                            , tr = function (A) {
                                return 0 == (255 & A)
                            }
                            , rr = function (A) {
                                var e = 255 & A
                                    , t = 255 & A >> 8
                                    , r = 255 & A >> 16
                                    , n = 255 & A >> 24;
                                return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")"
                            }
                            , nr = function (A, e, t, r) {
                                return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0
                            }
                            , ur = function (A, e) {
                                if (17 === A.type)
                                    return A.number;
                                if (16 === A.type) {
                                    var t = 3 === e ? 1 : 255;
                                    return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
                                }
                                return 0
                            }
                            , sr = function (A, e) {
                                var t = e.filter(Ot);
                                if (3 === t.length) {
                                    var r = t.map(ur)
                                        , n = r[0]
                                        , u = r[1]
                                        , s = r[2];
                                    return nr(n, u, s, 1)
                                }
                                if (4 === t.length) {
                                    var o = t.map(ur)
                                        , i = (n = o[0],
                                        u = o[1],
                                        s = o[2],
                                        o[3]);
                                    return nr(n, u, s, i)
                                }
                                return 0
                            };

                        function or(A, e, t) {
                            return t < 0 && (t += 1),
                            t >= 1 && (t -= 1),
                                t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
                        }

                        var ir = function (A, e) {
                            var t = e.filter(Ot)
                                , r = t[0]
                                , n = t[1]
                                , u = t[2]
                                , s = t[3]
                                , o = (17 === r.type ? Ar(r.number) : jt.parse(A, r)) / (2 * Math.PI)
                                , i = Gt(n) ? n.number / 100 : 0
                                , a = Gt(u) ? u.number / 100 : 0
                                , B = void 0 !== s && Gt(s) ? Xt(s, 1) : 1;
                            if (0 === i)
                                return nr(255 * a, 255 * a, 255 * a, 1);
                            var c = a <= .5 ? a * (i + 1) : a + i - a * i
                                , l = 2 * a - c
                                , g = or(l, c, o + 1 / 3)
                                , w = or(l, c, o)
                                , C = or(l, c, o - 1 / 3);
                            return nr(255 * g, 255 * w, 255 * C, B)
                        }
                            , ar = {
                            hsl: ir,
                            hsla: ir,
                            rgb: sr,
                            rgba: sr
                        }
                            , Br = function (A, e) {
                            return er.parse(A, bt.create(e).parseComponentValue())
                        }
                            , cr = {
                            ALICEBLUE: 4042850303,
                            ANTIQUEWHITE: 4209760255,
                            AQUA: 16777215,
                            AQUAMARINE: 2147472639,
                            AZURE: 4043309055,
                            BEIGE: 4126530815,
                            BISQUE: 4293182719,
                            BLACK: 255,
                            BLANCHEDALMOND: 4293643775,
                            BLUE: 65535,
                            BLUEVIOLET: 2318131967,
                            BROWN: 2771004159,
                            BURLYWOOD: 3736635391,
                            CADETBLUE: 1604231423,
                            CHARTREUSE: 2147418367,
                            CHOCOLATE: 3530104575,
                            CORAL: 4286533887,
                            CORNFLOWERBLUE: 1687547391,
                            CORNSILK: 4294499583,
                            CRIMSON: 3692313855,
                            CYAN: 16777215,
                            DARKBLUE: 35839,
                            DARKCYAN: 9145343,
                            DARKGOLDENROD: 3095837695,
                            DARKGRAY: 2846468607,
                            DARKGREEN: 6553855,
                            DARKGREY: 2846468607,
                            DARKKHAKI: 3182914559,
                            DARKMAGENTA: 2332068863,
                            DARKOLIVEGREEN: 1433087999,
                            DARKORANGE: 4287365375,
                            DARKORCHID: 2570243327,
                            DARKRED: 2332033279,
                            DARKSALMON: 3918953215,
                            DARKSEAGREEN: 2411499519,
                            DARKSLATEBLUE: 1211993087,
                            DARKSLATEGRAY: 793726975,
                            DARKSLATEGREY: 793726975,
                            DARKTURQUOISE: 13554175,
                            DARKVIOLET: 2483082239,
                            DEEPPINK: 4279538687,
                            DEEPSKYBLUE: 12582911,
                            DIMGRAY: 1768516095,
                            DIMGREY: 1768516095,
                            DODGERBLUE: 512819199,
                            FIREBRICK: 2988581631,
                            FLORALWHITE: 4294635775,
                            FORESTGREEN: 579543807,
                            FUCHSIA: 4278255615,
                            GAINSBORO: 3705462015,
                            GHOSTWHITE: 4177068031,
                            GOLD: 4292280575,
                            GOLDENROD: 3668254975,
                            GRAY: 2155905279,
                            GREEN: 8388863,
                            GREENYELLOW: 2919182335,
                            GREY: 2155905279,
                            HONEYDEW: 4043305215,
                            HOTPINK: 4285117695,
                            INDIANRED: 3445382399,
                            INDIGO: 1258324735,
                            IVORY: 4294963455,
                            KHAKI: 4041641215,
                            LAVENDER: 3873897215,
                            LAVENDERBLUSH: 4293981695,
                            LAWNGREEN: 2096890111,
                            LEMONCHIFFON: 4294626815,
                            LIGHTBLUE: 2916673279,
                            LIGHTCORAL: 4034953471,
                            LIGHTCYAN: 3774873599,
                            LIGHTGOLDENRODYELLOW: 4210742015,
                            LIGHTGRAY: 3553874943,
                            LIGHTGREEN: 2431553791,
                            LIGHTGREY: 3553874943,
                            LIGHTPINK: 4290167295,
                            LIGHTSALMON: 4288707327,
                            LIGHTSEAGREEN: 548580095,
                            LIGHTSKYBLUE: 2278488831,
                            LIGHTSLATEGRAY: 2005441023,
                            LIGHTSLATEGREY: 2005441023,
                            LIGHTSTEELBLUE: 2965692159,
                            LIGHTYELLOW: 4294959359,
                            LIME: 16711935,
                            LIMEGREEN: 852308735,
                            LINEN: 4210091775,
                            MAGENTA: 4278255615,
                            MAROON: 2147483903,
                            MEDIUMAQUAMARINE: 1724754687,
                            MEDIUMBLUE: 52735,
                            MEDIUMORCHID: 3126187007,
                            MEDIUMPURPLE: 2473647103,
                            MEDIUMSEAGREEN: 1018393087,
                            MEDIUMSLATEBLUE: 2070474495,
                            MEDIUMSPRINGGREEN: 16423679,
                            MEDIUMTURQUOISE: 1221709055,
                            MEDIUMVIOLETRED: 3340076543,
                            MIDNIGHTBLUE: 421097727,
                            MINTCREAM: 4127193855,
                            MISTYROSE: 4293190143,
                            MOCCASIN: 4293178879,
                            NAVAJOWHITE: 4292783615,
                            NAVY: 33023,
                            OLDLACE: 4260751103,
                            OLIVE: 2155872511,
                            OLIVEDRAB: 1804477439,
                            ORANGE: 4289003775,
                            ORANGERED: 4282712319,
                            ORCHID: 3664828159,
                            PALEGOLDENROD: 4008225535,
                            PALEGREEN: 2566625535,
                            PALETURQUOISE: 2951671551,
                            PALEVIOLETRED: 3681588223,
                            PAPAYAWHIP: 4293907967,
                            PEACHPUFF: 4292524543,
                            PERU: 3448061951,
                            PINK: 4290825215,
                            PLUM: 3718307327,
                            POWDERBLUE: 2967529215,
                            PURPLE: 2147516671,
                            REBECCAPURPLE: 1714657791,
                            RED: 4278190335,
                            ROSYBROWN: 3163525119,
                            ROYALBLUE: 1097458175,
                            SADDLEBROWN: 2336560127,
                            SALMON: 4202722047,
                            SANDYBROWN: 4104413439,
                            SEAGREEN: 780883967,
                            SEASHELL: 4294307583,
                            SIENNA: 2689740287,
                            SILVER: 3233857791,
                            SKYBLUE: 2278484991,
                            SLATEBLUE: 1784335871,
                            SLATEGRAY: 1887473919,
                            SLATEGREY: 1887473919,
                            SNOW: 4294638335,
                            SPRINGGREEN: 16744447,
                            STEELBLUE: 1182971135,
                            TAN: 3535047935,
                            TEAL: 8421631,
                            THISTLE: 3636451583,
                            TOMATO: 4284696575,
                            TRANSPARENT: 0,
                            TURQUOISE: 1088475391,
                            VIOLET: 4001558271,
                            WHEAT: 4125012991,
                            WHITE: 4294967295,
                            WHITESMOKE: 4126537215,
                            YELLOW: 4294902015,
                            YELLOWGREEN: 2597139199
                        }
                            , lr = {
                            name: "background-clip",
                            initialValue: "border-box",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e.map((function (A) {
                                        if (Lt(A))
                                            switch (A.value) {
                                                case "padding-box":
                                                    return 1;
                                                case "content-box":
                                                    return 2
                                            }
                                        return 0
                                    }
                                ))
                            }
                        }
                            , gr = {
                            name: "background-color",
                            initialValue: "transparent",
                            prefix: !1,
                            type: 3,
                            format: "color"
                        }
                            , wr = function (A, e) {
                            var t = er.parse(A, e[0])
                                , r = e[1];
                            return r && Gt(r) ? {
                                color: t,
                                stop: r
                            } : {
                                color: t,
                                stop: null
                            }
                        }
                            , Cr = function (A, e) {
                            var t = A[0]
                                , r = A[A.length - 1];
                            null === t.stop && (t.stop = Rt),
                            null === r.stop && (r.stop = qt);
                            for (var n = [], u = 0, s = 0; s < A.length; s++) {
                                var o = A[s].stop;
                                if (null !== o) {
                                    var i = Xt(o, e);
                                    i > u ? n.push(i) : n.push(u),
                                        u = i
                                } else
                                    n.push(null)
                            }
                            var a = null;
                            for (s = 0; s < n.length; s++) {
                                var B = n[s];
                                if (null === B)
                                    null === a && (a = s);
                                else if (null !== a) {
                                    for (var c = s - a, l = (B - n[a - 1]) / (c + 1), g = 1; g <= c; g++)
                                        n[a + g - 1] = l * g;
                                    a = null
                                }
                            }
                            return A.map((function (A, t) {
                                    return {
                                        color: A.color,
                                        stop: Math.max(Math.min(1, n[t] / e), 0)
                                    }
                                }
                            ))
                        }
                            , Qr = function (A, e, t) {
                            var r = e / 2
                                , n = t / 2
                                , u = Xt(A[0], e) - r
                                , s = n - Xt(A[1], t);
                            return (Math.atan2(s, u) + 2 * Math.PI) % (2 * Math.PI)
                        }
                            , Fr = function (A, e, t) {
                            var r = "number" == typeof A ? A : Qr(A, e, t)
                                , n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r))
                                , u = e / 2
                                , s = t / 2
                                , o = n / 2
                                , i = Math.sin(r - Math.PI / 2) * o
                                , a = Math.cos(r - Math.PI / 2) * o;
                            return [n, u - a, u + a, s - i, s + i]
                        }
                            , dr = function (A, e) {
                            return Math.sqrt(A * A + e * e)
                        }
                            , hr = function (A, e, t, r, n) {
                            return [[0, 0], [0, e], [A, 0], [A, e]].reduce((function (A, e) {
                                    var u = e[0]
                                        , s = e[1]
                                        , o = dr(t - u, r - s);
                                    return (n ? o < A.optimumDistance : o > A.optimumDistance) ? {
                                        optimumCorner: e,
                                        optimumDistance: o
                                    } : A
                                }
                            ), {
                                optimumDistance: n ? 1 / 0 : -1 / 0,
                                optimumCorner: null
                            }).optimumCorner
                        }
                            , fr = function (A, e, t, r, n) {
                            var u = 0
                                , s = 0;
                            switch (A.size) {
                                case 0:
                                    0 === A.shape ? u = s = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : 1 === A.shape && (u = Math.min(Math.abs(e), Math.abs(e - r)),
                                        s = Math.min(Math.abs(t), Math.abs(t - n)));
                                    break;
                                case 2:
                                    if (0 === A.shape)
                                        u = s = Math.min(dr(e, t), dr(e, t - n), dr(e - r, t), dr(e - r, t - n));
                                    else if (1 === A.shape) {
                                        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r))
                                            , i = hr(r, n, e, t, !0)
                                            , a = i[0]
                                            , B = i[1];
                                        s = o * (u = dr(a - e, (B - t) / o))
                                    }
                                    break;
                                case 1:
                                    0 === A.shape ? u = s = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : 1 === A.shape && (u = Math.max(Math.abs(e), Math.abs(e - r)),
                                        s = Math.max(Math.abs(t), Math.abs(t - n)));
                                    break;
                                case 3:
                                    if (0 === A.shape)
                                        u = s = Math.max(dr(e, t), dr(e, t - n), dr(e - r, t), dr(e - r, t - n));
                                    else if (1 === A.shape) {
                                        o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r));
                                        var c = hr(r, n, e, t, !1);
                                        a = c[0],
                                            B = c[1],
                                            s = o * (u = dr(a - e, (B - t) / o))
                                    }
                            }
                            return Array.isArray(A.size) && (u = Xt(A.size[0], r),
                                s = 2 === A.size.length ? Xt(A.size[1], n) : u),
                                [u, s]
                        }
                            , pr = function (A, e) {
                            var t = Ar(180)
                                , r = [];
                            return Mt(e).forEach((function (e, n) {
                                    if (0 === n) {
                                        var u = e[0];
                                        if (20 === u.type && -1 !== ["top", "left", "right", "bottom"].indexOf(u.value))
                                            return void (t = $t(e));
                                        if (zt(u))
                                            return void (t = (jt.parse(A, u) + Ar(270)) % Ar(360))
                                    }
                                    var s = wr(A, e);
                                    r.push(s)
                                }
                            )),
                                {
                                    angle: t,
                                    stops: r,
                                    type: 1
                                }
                        }
                            , Ur = "closest-side"
                            , Dr = "farthest-side"
                            , Er = "closest-corner"
                            , mr = "farthest-corner"
                            , yr = "circle"
                            , Hr = "ellipse"
                            , vr = "cover"
                            , br = "contain"
                            , Ir = function (A, e) {
                            var t = 0
                                , r = 3
                                , n = []
                                , u = [];
                            return Mt(e).forEach((function (e, s) {
                                    var o = !0;
                                    if (0 === s ? o = e.reduce((function (A, e) {
                                            if (Lt(e))
                                                switch (e.value) {
                                                    case "center":
                                                        return u.push(Pt),
                                                            !1;
                                                    case "top":
                                                    case "left":
                                                        return u.push(Rt),
                                                            !1;
                                                    case "right":
                                                    case "bottom":
                                                        return u.push(qt),
                                                            !1
                                                }
                                            else if (Gt(e) || kt(e))
                                                return u.push(e),
                                                    !1;
                                            return A
                                        }
                                    ), o) : 1 === s && (o = e.reduce((function (A, e) {
                                            if (Lt(e))
                                                switch (e.value) {
                                                    case yr:
                                                        return t = 0,
                                                            !1;
                                                    case Hr:
                                                        return t = 1,
                                                            !1;
                                                    case br:
                                                    case Ur:
                                                        return r = 0,
                                                            !1;
                                                    case Dr:
                                                        return r = 1,
                                                            !1;
                                                    case Er:
                                                        return r = 2,
                                                            !1;
                                                    case vr:
                                                    case mr:
                                                        return r = 3,
                                                            !1
                                                }
                                            else if (kt(e) || Gt(e))
                                                return Array.isArray(r) || (r = []),
                                                    r.push(e),
                                                    !1;
                                            return A
                                        }
                                    ), o)),
                                        o) {
                                        var i = wr(A, e);
                                        n.push(i)
                                    }
                                }
                            )),
                                {
                                    size: r,
                                    shape: t,
                                    stops: n,
                                    position: u,
                                    type: 2
                                }
                        }
                            , Kr = function (A) {
                            return 1 === A.type
                        }
                            , Lr = function (A) {
                            return 2 === A.type
                        }
                            , xr = {
                            name: "image",
                            parse: function (A, e) {
                                if (22 === e.type) {
                                    var t = {
                                        url: e.value,
                                        type: 0
                                    };
                                    return A.cache.addImage(e.value),
                                        t
                                }
                                if (18 === e.type) {
                                    var r = Or[e.name];
                                    if (void 0 === r)
                                        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
                                    return r(A, e.values)
                                }
                                throw new Error("Unsupported image type " + e.type)
                            }
                        };

                        function Sr(A) {
                            return !(20 === A.type && "none" === A.value || 18 === A.type && !Or[A.name])
                        }

                        var Tr, Or = {
                            "linear-gradient": function (A, e) {
                                var t = Ar(180)
                                    , r = [];
                                return Mt(e).forEach((function (e, n) {
                                        if (0 === n) {
                                            var u = e[0];
                                            if (20 === u.type && "to" === u.value)
                                                return void (t = $t(e));
                                            if (zt(u))
                                                return void (t = jt.parse(A, u))
                                        }
                                        var s = wr(A, e);
                                        r.push(s)
                                    }
                                )),
                                    {
                                        angle: t,
                                        stops: r,
                                        type: 1
                                    }
                            },
                            "-moz-linear-gradient": pr,
                            "-ms-linear-gradient": pr,
                            "-o-linear-gradient": pr,
                            "-webkit-linear-gradient": pr,
                            "radial-gradient": function (A, e) {
                                var t = 0
                                    , r = 3
                                    , n = []
                                    , u = [];
                                return Mt(e).forEach((function (e, s) {
                                        var o = !0;
                                        if (0 === s) {
                                            var i = !1;
                                            o = e.reduce((function (A, e) {
                                                    if (i)
                                                        if (Lt(e))
                                                            switch (e.value) {
                                                                case "center":
                                                                    return u.push(Pt),
                                                                        A;
                                                                case "top":
                                                                case "left":
                                                                    return u.push(Rt),
                                                                        A;
                                                                case "right":
                                                                case "bottom":
                                                                    return u.push(qt),
                                                                        A
                                                            }
                                                        else
                                                            (Gt(e) || kt(e)) && u.push(e);
                                                    else if (Lt(e))
                                                        switch (e.value) {
                                                            case yr:
                                                                return t = 0,
                                                                    !1;
                                                            case Hr:
                                                                return t = 1,
                                                                    !1;
                                                            case "at":
                                                                return i = !0,
                                                                    !1;
                                                            case Ur:
                                                                return r = 0,
                                                                    !1;
                                                            case vr:
                                                            case Dr:
                                                                return r = 1,
                                                                    !1;
                                                            case br:
                                                            case Er:
                                                                return r = 2,
                                                                    !1;
                                                            case mr:
                                                                return r = 3,
                                                                    !1
                                                        }
                                                    else if (kt(e) || Gt(e))
                                                        return Array.isArray(r) || (r = []),
                                                            r.push(e),
                                                            !1;
                                                    return A
                                                }
                                            ), o)
                                        }
                                        if (o) {
                                            var a = wr(A, e);
                                            n.push(a)
                                        }
                                    }
                                )),
                                    {
                                        size: r,
                                        shape: t,
                                        stops: n,
                                        position: u,
                                        type: 2
                                    }
                            },
                            "-moz-radial-gradient": Ir,
                            "-ms-radial-gradient": Ir,
                            "-o-radial-gradient": Ir,
                            "-webkit-radial-gradient": Ir,
                            "-webkit-gradient": function (A, e) {
                                var t = Ar(180)
                                    , r = []
                                    , n = 1
                                    , u = 0
                                    , s = 3
                                    , o = [];
                                return Mt(e).forEach((function (e, t) {
                                        var u = e[0];
                                        if (0 === t) {
                                            if (Lt(u) && "linear" === u.value)
                                                return void (n = 1);
                                            if (Lt(u) && "radial" === u.value)
                                                return void (n = 2)
                                        }
                                        if (18 === u.type)
                                            if ("from" === u.name) {
                                                var s = er.parse(A, u.values[0]);
                                                r.push({
                                                    stop: Rt,
                                                    color: s
                                                })
                                            } else if ("to" === u.name)
                                                s = er.parse(A, u.values[0]),
                                                    r.push({
                                                        stop: qt,
                                                        color: s
                                                    });
                                            else if ("color-stop" === u.name) {
                                                var o = u.values.filter(Ot);
                                                if (2 === o.length) {
                                                    s = er.parse(A, o[1]);
                                                    var i = o[0];
                                                    Kt(i) && r.push({
                                                        stop: {
                                                            type: 16,
                                                            number: 100 * i.number,
                                                            flags: i.flags
                                                        },
                                                        color: s
                                                    })
                                                }
                                            }
                                    }
                                )),
                                    1 === n ? {
                                        angle: (t + Ar(180)) % Ar(360),
                                        stops: r,
                                        type: n
                                    } : {
                                        size: s,
                                        shape: u,
                                        stops: r,
                                        position: o,
                                        type: n
                                    }
                            }
                        }, Mr = {
                            name: "background-image",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                if (0 === e.length)
                                    return [];
                                var t = e[0];
                                return 20 === t.type && "none" === t.value ? [] : e.filter((function (A) {
                                        return Ot(A) && Sr(A)
                                    }
                                )).map((function (e) {
                                        return xr.parse(A, e)
                                    }
                                ))
                            }
                        }, Vr = {
                            name: "background-origin",
                            initialValue: "border-box",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e.map((function (A) {
                                        if (Lt(A))
                                            switch (A.value) {
                                                case "padding-box":
                                                    return 1;
                                                case "content-box":
                                                    return 2
                                            }
                                        return 0
                                    }
                                ))
                            }
                        }, kr = {
                            name: "background-position",
                            initialValue: "0% 0%",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                return Mt(e).map((function (A) {
                                        return A.filter(Gt)
                                    }
                                )).map(Nt)
                            }
                        }, Gr = {
                            name: "background-repeat",
                            initialValue: "repeat",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return Mt(e).map((function (A) {
                                        return A.filter(Lt).map((function (A) {
                                                return A.value
                                            }
                                        )).join(" ")
                                    }
                                )).map(Nr)
                            }
                        }, Nr = function (A) {
                            switch (A) {
                                case "no-repeat":
                                    return 1;
                                case "repeat-x":
                                case "repeat no-repeat":
                                    return 2;
                                case "repeat-y":
                                case "no-repeat repeat":
                                    return 3;
                                default:
                                    return 0
                            }
                        };
                        !function (A) {
                            A.AUTO = "auto",
                                A.CONTAIN = "contain",
                                A.COVER = "cover"
                        }(Tr || (Tr = {}));
                        var Rr, Pr = {
                                name: "background-size",
                                initialValue: "0",
                                prefix: !1,
                                type: 1,
                                parse: function (A, e) {
                                    return Mt(e).map((function (A) {
                                            return A.filter(qr)
                                        }
                                    ))
                                }
                            }, qr = function (A) {
                                return Lt(A) || Gt(A)
                            }, Jr = function (A) {
                                return {
                                    name: "border-" + A + "-color",
                                    initialValue: "transparent",
                                    prefix: !1,
                                    type: 3,
                                    format: "color"
                                }
                            }, Xr = Jr("top"), Yr = Jr("right"), Wr = Jr("bottom"), Zr = Jr("left"), _r = function (A) {
                                return {
                                    name: "border-radius-" + A,
                                    initialValue: "0 0",
                                    prefix: !1,
                                    type: 1,
                                    parse: function (A, e) {
                                        return Nt(e.filter(Gt))
                                    }
                                }
                            }, jr = _r("top-left"), zr = _r("top-right"), $r = _r("bottom-right"), An = _r("bottom-left"),
                            en = function (A) {
                                return {
                                    name: "border-" + A + "-style",
                                    initialValue: "solid",
                                    prefix: !1,
                                    type: 2,
                                    parse: function (A, e) {
                                        switch (e) {
                                            case "none":
                                                return 0;
                                            case "dashed":
                                                return 2;
                                            case "dotted":
                                                return 3;
                                            case "double":
                                                return 4
                                        }
                                        return 1
                                    }
                                }
                            }, tn = en("top"), rn = en("right"), nn = en("bottom"), un = en("left"), sn = function (A) {
                                return {
                                    name: "border-" + A + "-width",
                                    initialValue: "0",
                                    type: 0,
                                    prefix: !1,
                                    parse: function (A, e) {
                                        return It(e) ? e.number : 0
                                    }
                                }
                            }, on = sn("top"), an = sn("right"), Bn = sn("bottom"), cn = sn("left"), ln = {
                                name: "color",
                                initialValue: "transparent",
                                prefix: !1,
                                type: 3,
                                format: "color"
                            }, gn = {
                                name: "direction",
                                initialValue: "ltr",
                                prefix: !1,
                                type: 2,
                                parse: function (A, e) {
                                    return "rtl" === e ? 1 : 0
                                }
                            }, wn = {
                                name: "display",
                                initialValue: "inline-block",
                                prefix: !1,
                                type: 1,
                                parse: function (A, e) {
                                    return e.filter(Lt).reduce((function (A, e) {
                                            return A | Cn(e.value)
                                        }
                                    ), 0)
                                }
                            }, Cn = function (A) {
                                switch (A) {
                                    case "block":
                                    case "-webkit-box":
                                        return 2;
                                    case "inline":
                                        return 4;
                                    case "run-in":
                                        return 8;
                                    case "flow":
                                        return 16;
                                    case "flow-root":
                                        return 32;
                                    case "table":
                                        return 64;
                                    case "flex":
                                    case "-webkit-flex":
                                        return 128;
                                    case "grid":
                                    case "-ms-grid":
                                        return 256;
                                    case "ruby":
                                        return 512;
                                    case "subgrid":
                                        return 1024;
                                    case "list-item":
                                        return 2048;
                                    case "table-row-group":
                                        return 4096;
                                    case "table-header-group":
                                        return 8192;
                                    case "table-footer-group":
                                        return 16384;
                                    case "table-row":
                                        return 32768;
                                    case "table-cell":
                                        return 65536;
                                    case "table-column-group":
                                        return 131072;
                                    case "table-column":
                                        return 262144;
                                    case "table-caption":
                                        return 524288;
                                    case "ruby-base":
                                        return 1048576;
                                    case "ruby-text":
                                        return 2097152;
                                    case "ruby-base-container":
                                        return 4194304;
                                    case "ruby-text-container":
                                        return 8388608;
                                    case "contents":
                                        return 16777216;
                                    case "inline-block":
                                        return 33554432;
                                    case "inline-list-item":
                                        return 67108864;
                                    case "inline-table":
                                        return 134217728;
                                    case "inline-flex":
                                        return 268435456;
                                    case "inline-grid":
                                        return 536870912
                                }
                                return 0
                            }, Qn = {
                                name: "float",
                                initialValue: "none",
                                prefix: !1,
                                type: 2,
                                parse: function (A, e) {
                                    switch (e) {
                                        case "left":
                                            return 1;
                                        case "right":
                                            return 2;
                                        case "inline-start":
                                            return 3;
                                        case "inline-end":
                                            return 4
                                    }
                                    return 0
                                }
                            }, Fn = {
                                name: "letter-spacing",
                                initialValue: "0",
                                prefix: !1,
                                type: 0,
                                parse: function (A, e) {
                                    return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type || 15 === e.type ? e.number : 0
                                }
                            };
                        !function (A) {
                            A.NORMAL = "normal",
                                A.STRICT = "strict"
                        }(Rr || (Rr = {}));
                        var dn, hn = {
                            name: "line-break",
                            initialValue: "normal",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                return "strict" === e ? Rr.STRICT : Rr.NORMAL
                            }
                        }, fn = {
                            name: "line-height",
                            initialValue: "normal",
                            prefix: !1,
                            type: 4
                        }, pn = function (A, e) {
                            return Lt(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : Gt(A) ? Xt(A, e) : e
                        }, Un = {
                            name: "list-style-image",
                            initialValue: "none",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return 20 === e.type && "none" === e.value ? null : xr.parse(A, e)
                            }
                        }, Dn = {
                            name: "list-style-position",
                            initialValue: "outside",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                return "inside" === e ? 0 : 1
                            }
                        }, En = {
                            name: "list-style-type",
                            initialValue: "none",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "disc":
                                        return 0;
                                    case "circle":
                                        return 1;
                                    case "square":
                                        return 2;
                                    case "decimal":
                                        return 3;
                                    case "cjk-decimal":
                                        return 4;
                                    case "decimal-leading-zero":
                                        return 5;
                                    case "lower-roman":
                                        return 6;
                                    case "upper-roman":
                                        return 7;
                                    case "lower-greek":
                                        return 8;
                                    case "lower-alpha":
                                        return 9;
                                    case "upper-alpha":
                                        return 10;
                                    case "arabic-indic":
                                        return 11;
                                    case "armenian":
                                        return 12;
                                    case "bengali":
                                        return 13;
                                    case "cambodian":
                                        return 14;
                                    case "cjk-earthly-branch":
                                        return 15;
                                    case "cjk-heavenly-stem":
                                        return 16;
                                    case "cjk-ideographic":
                                        return 17;
                                    case "devanagari":
                                        return 18;
                                    case "ethiopic-numeric":
                                        return 19;
                                    case "georgian":
                                        return 20;
                                    case "gujarati":
                                        return 21;
                                    case "gurmukhi":
                                    case "hebrew":
                                        return 22;
                                    case "hiragana":
                                        return 23;
                                    case "hiragana-iroha":
                                        return 24;
                                    case "japanese-formal":
                                        return 25;
                                    case "japanese-informal":
                                        return 26;
                                    case "kannada":
                                        return 27;
                                    case "katakana":
                                        return 28;
                                    case "katakana-iroha":
                                        return 29;
                                    case "khmer":
                                        return 30;
                                    case "korean-hangul-formal":
                                        return 31;
                                    case "korean-hanja-formal":
                                        return 32;
                                    case "korean-hanja-informal":
                                        return 33;
                                    case "lao":
                                        return 34;
                                    case "lower-armenian":
                                        return 35;
                                    case "malayalam":
                                        return 36;
                                    case "mongolian":
                                        return 37;
                                    case "myanmar":
                                        return 38;
                                    case "oriya":
                                        return 39;
                                    case "persian":
                                        return 40;
                                    case "simp-chinese-formal":
                                        return 41;
                                    case "simp-chinese-informal":
                                        return 42;
                                    case "tamil":
                                        return 43;
                                    case "telugu":
                                        return 44;
                                    case "thai":
                                        return 45;
                                    case "tibetan":
                                        return 46;
                                    case "trad-chinese-formal":
                                        return 47;
                                    case "trad-chinese-informal":
                                        return 48;
                                    case "upper-armenian":
                                        return 49;
                                    case "disclosure-open":
                                        return 50;
                                    case "disclosure-closed":
                                        return 51;
                                    default:
                                        return -1
                                }
                            }
                        }, mn = function (A) {
                            return {
                                name: "margin-" + A,
                                initialValue: "0",
                                prefix: !1,
                                type: 4
                            }
                        }, yn = mn("top"), Hn = mn("right"), vn = mn("bottom"), bn = mn("left"), In = {
                            name: "overflow",
                            initialValue: "visible",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e.filter(Lt).map((function (A) {
                                        switch (A.value) {
                                            case "hidden":
                                                return 1;
                                            case "scroll":
                                                return 2;
                                            case "clip":
                                                return 3;
                                            case "auto":
                                                return 4;
                                            default:
                                                return 0
                                        }
                                    }
                                ))
                            }
                        }, Kn = {
                            name: "overflow-wrap",
                            initialValue: "normal",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                return "break-word" === e ? "break-word" : "normal"
                            }
                        }, Ln = function (A) {
                            return {
                                name: "padding-" + A,
                                initialValue: "0",
                                prefix: !1,
                                type: 3,
                                format: "length-percentage"
                            }
                        }, xn = Ln("top"), Sn = Ln("right"), Tn = Ln("bottom"), On = Ln("left"), Mn = {
                            name: "text-align",
                            initialValue: "left",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "right":
                                        return 2;
                                    case "center":
                                    case "justify":
                                        return 1;
                                    default:
                                        return 0
                                }
                            }
                        }, Vn = {
                            name: "position",
                            initialValue: "static",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "relative":
                                        return 1;
                                    case "absolute":
                                        return 2;
                                    case "fixed":
                                        return 3;
                                    case "sticky":
                                        return 4
                                }
                                return 0
                            }
                        }, kn = {
                            name: "text-shadow",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                return 1 === e.length && St(e[0], "none") ? [] : Mt(e).map((function (e) {
                                        for (var t = {
                                            color: cr.TRANSPARENT,
                                            offsetX: Rt,
                                            offsetY: Rt,
                                            blur: Rt
                                        }, r = 0, n = 0; n < e.length; n++) {
                                            var u = e[n];
                                            kt(u) ? (0 === r ? t.offsetX = u : 1 === r ? t.offsetY = u : t.blur = u,
                                                r++) : t.color = er.parse(A, u)
                                        }
                                        return t
                                    }
                                ))
                            }
                        }, Gn = {
                            name: "text-transform",
                            initialValue: "none",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "uppercase":
                                        return 2;
                                    case "lowercase":
                                        return 1;
                                    case "capitalize":
                                        return 3
                                }
                                return 0
                            }
                        }, Nn = {
                            name: "transform",
                            initialValue: "none",
                            prefix: !0,
                            type: 0,
                            parse: function (A, e) {
                                if (20 === e.type && "none" === e.value)
                                    return null;
                                if (18 === e.type) {
                                    var t = Rn[e.name];
                                    if (void 0 === t)
                                        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                                    return t(e.values)
                                }
                                return null
                            }
                        }, Rn = {
                            matrix: function (A) {
                                var e = A.filter((function (A) {
                                        return 17 === A.type
                                    }
                                )).map((function (A) {
                                        return A.number
                                    }
                                ));
                                return 6 === e.length ? e : null
                            },
                            matrix3d: function (A) {
                                var e = A.filter((function (A) {
                                        return 17 === A.type
                                    }
                                )).map((function (A) {
                                        return A.number
                                    }
                                ))
                                    , t = e[0]
                                    , r = e[1];
                                e[2],
                                    e[3];
                                var n = e[4]
                                    , u = e[5];
                                e[6],
                                    e[7],
                                    e[8],
                                    e[9],
                                    e[10],
                                    e[11];
                                var s = e[12]
                                    , o = e[13];
                                return e[14],
                                    e[15],
                                    16 === e.length ? [t, r, n, u, s, o] : null
                            }
                        }, Pn = {
                            type: 16,
                            number: 50,
                            flags: JA
                        }, qn = [Pn, Pn], Jn = {
                            name: "transform-origin",
                            initialValue: "50% 50%",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                var t = e.filter(Gt);
                                return 2 !== t.length ? qn : [t[0], t[1]]
                            }
                        }, Xn = {
                            name: "visible",
                            initialValue: "none",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "hidden":
                                        return 1;
                                    case "collapse":
                                        return 2;
                                    default:
                                        return 0
                                }
                            }
                        };
                        !function (A) {
                            A.NORMAL = "normal",
                                A.BREAK_ALL = "break-all",
                                A.KEEP_ALL = "keep-all"
                        }(dn || (dn = {}));
                        for (var Yn = {
                            name: "word-break",
                            initialValue: "normal",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "break-all":
                                        return dn.BREAK_ALL;
                                    case "keep-all":
                                        return dn.KEEP_ALL;
                                    default:
                                        return dn.NORMAL
                                }
                            }
                        }, Wn = {
                            name: "z-index",
                            initialValue: "auto",
                            prefix: !1,
                            type: 0,
                            parse: function (A, e) {
                                if (20 === e.type)
                                    return {
                                        auto: !0,
                                        order: 0
                                    };
                                if (Kt(e))
                                    return {
                                        auto: !1,
                                        order: e.number
                                    };
                                throw new Error("Invalid z-index number parsed")
                            }
                        }, Zn = {
                            name: "time",
                            parse: function (A, e) {
                                if (15 === e.type)
                                    switch (e.unit.toLowerCase()) {
                                        case "s":
                                            return 1e3 * e.number;
                                        case "ms":
                                            return e.number
                                    }
                                throw new Error("Unsupported time type")
                            }
                        }, _n = {
                            name: "opacity",
                            initialValue: "1",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return Kt(e) ? e.number : 1
                            }
                        }, jn = {
                            name: "text-decoration-color",
                            initialValue: "transparent",
                            prefix: !1,
                            type: 3,
                            format: "color"
                        }, zn = {
                            name: "text-decoration-line",
                            initialValue: "none",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e.filter(Lt).map((function (A) {
                                        switch (A.value) {
                                            case "underline":
                                                return 1;
                                            case "overline":
                                                return 2;
                                            case "line-through":
                                                return 3;
                                            case "none":
                                                return 4
                                        }
                                        return 0
                                    }
                                )).filter((function (A) {
                                        return 0 !== A
                                    }
                                ))
                            }
                        }, $n = {
                            name: "font-family",
                            initialValue: "",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                var t = []
                                    , r = [];
                                return e.forEach((function (A) {
                                        switch (A.type) {
                                            case 20:
                                            case 0:
                                                t.push(A.value);
                                                break;
                                            case 17:
                                                t.push(A.number.toString());
                                                break;
                                            case 4:
                                                r.push(t.join(" ")),
                                                    t.length = 0
                                        }
                                    }
                                )),
                                t.length && r.push(t.join(" ")),
                                    r.map((function (A) {
                                            return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                                        }
                                    ))
                            }
                        }, Au = {
                            name: "font-size",
                            initialValue: "0",
                            prefix: !1,
                            type: 3,
                            format: "length"
                        }, eu = {
                            name: "font-weight",
                            initialValue: "normal",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return Kt(e) ? e.number : Lt(e) && "bold" === e.value ? 700 : 400
                            }
                        }, tu = {
                            name: "font-variant",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                return e.filter(Lt).map((function (A) {
                                        return A.value
                                    }
                                ))
                            }
                        }, ru = {
                            name: "font-style",
                            initialValue: "normal",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "oblique":
                                        return "oblique";
                                    case "italic":
                                        return "italic";
                                    default:
                                        return "normal"
                                }
                            }
                        }, nu = function (A, e) {
                            return 0 != (A & e)
                        }, uu = {
                            name: "content",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                if (0 === e.length)
                                    return [];
                                var t = e[0];
                                return 20 === t.type && "none" === t.value ? [] : e
                            }
                        }, su = {
                            name: "counter-increment",
                            initialValue: "none",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                if (0 === e.length)
                                    return null;
                                var t = e[0];
                                if (20 === t.type && "none" === t.value)
                                    return null;
                                for (var r = [], n = e.filter(Tt), u = 0; u < n.length; u++) {
                                    var s = n[u]
                                        , o = n[u + 1];
                                    if (20 === s.type) {
                                        var i = o && Kt(o) ? o.number : 1;
                                        r.push({
                                            counter: s.value,
                                            increment: i
                                        })
                                    }
                                }
                                return r
                            }
                        }, ou = {
                            name: "counter-reset",
                            initialValue: "none",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                if (0 === e.length)
                                    return [];
                                for (var t = [], r = e.filter(Tt), n = 0; n < r.length; n++) {
                                    var u = r[n]
                                        , s = r[n + 1];
                                    if (Lt(u) && "none" !== u.value) {
                                        var o = s && Kt(s) ? s.number : 0;
                                        t.push({
                                            counter: u.value,
                                            reset: o
                                        })
                                    }
                                }
                                return t
                            }
                        }, iu = {
                            name: "duration",
                            initialValue: "0s",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e.filter(It).map((function (e) {
                                        return Zn.parse(A, e)
                                    }
                                ))
                            }
                        }, au = {
                            name: "quotes",
                            initialValue: "none",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                if (0 === e.length)
                                    return null;
                                var t = e[0];
                                if (20 === t.type && "none" === t.value)
                                    return null;
                                var r = []
                                    , n = e.filter(xt);
                                if (n.length % 2 != 0)
                                    return null;
                                for (var u = 0; u < n.length; u += 2) {
                                    var s = n[u].value
                                        , o = n[u + 1].value;
                                    r.push({
                                        open: s,
                                        close: o
                                    })
                                }
                                return r
                            }
                        }, Bu = function (A, e, t) {
                            if (!A)
                                return "";
                            var r = A[Math.min(e, A.length - 1)];
                            return r ? t ? r.open : r.close : ""
                        }, cu = {
                            name: "box-shadow",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                return 1 === e.length && St(e[0], "none") ? [] : Mt(e).map((function (e) {
                                        for (var t = {
                                            color: 255,
                                            offsetX: Rt,
                                            offsetY: Rt,
                                            blur: Rt,
                                            spread: Rt,
                                            inset: !1
                                        }, r = 0, n = 0; n < e.length; n++) {
                                            var u = e[n];
                                            St(u, "inset") ? t.inset = !0 : kt(u) ? (0 === r ? t.offsetX = u : 1 === r ? t.offsetY = u : 2 === r ? t.blur = u : t.spread = u,
                                                r++) : t.color = er.parse(A, u)
                                        }
                                        return t
                                    }
                                ))
                            }
                        }, lu = {
                            name: "paint-order",
                            initialValue: "normal",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                var t = [0, 1, 2]
                                    , r = [];
                                return e.filter(Lt).forEach((function (A) {
                                        switch (A.value) {
                                            case "stroke":
                                                r.push(1);
                                                break;
                                            case "fill":
                                                r.push(0);
                                                break;
                                            case "markers":
                                                r.push(2)
                                        }
                                    }
                                )),
                                    t.forEach((function (A) {
                                            -1 === r.indexOf(A) && r.push(A)
                                        }
                                    )),
                                    r
                            }
                        }, gu = {
                            name: "-webkit-text-stroke-color",
                            initialValue: "currentcolor",
                            prefix: !1,
                            type: 3,
                            format: "color"
                        }, wu = {
                            name: "-webkit-text-stroke-width",
                            initialValue: "0",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return It(e) ? e.number : 0
                            }
                        }, Cu = function () {
                            function A(A, e) {
                                var t, r;
                                this.animationDuration = du(A, iu, e.animationDuration),
                                    this.backgroundClip = du(A, lr, e.backgroundClip),
                                    this.backgroundColor = du(A, gr, e.backgroundColor),
                                    this.backgroundImage = du(A, Mr, e.backgroundImage),
                                    this.backgroundOrigin = du(A, Vr, e.backgroundOrigin),
                                    this.backgroundPosition = du(A, kr, e.backgroundPosition),
                                    this.backgroundRepeat = du(A, Gr, e.backgroundRepeat),
                                    this.backgroundSize = du(A, Pr, e.backgroundSize),
                                    this.borderTopColor = du(A, Xr, e.borderTopColor),
                                    this.borderRightColor = du(A, Yr, e.borderRightColor),
                                    this.borderBottomColor = du(A, Wr, e.borderBottomColor),
                                    this.borderLeftColor = du(A, Zr, e.borderLeftColor),
                                    this.borderTopLeftRadius = du(A, jr, e.borderTopLeftRadius),
                                    this.borderTopRightRadius = du(A, zr, e.borderTopRightRadius),
                                    this.borderBottomRightRadius = du(A, $r, e.borderBottomRightRadius),
                                    this.borderBottomLeftRadius = du(A, An, e.borderBottomLeftRadius),
                                    this.borderTopStyle = du(A, tn, e.borderTopStyle),
                                    this.borderRightStyle = du(A, rn, e.borderRightStyle),
                                    this.borderBottomStyle = du(A, nn, e.borderBottomStyle),
                                    this.borderLeftStyle = du(A, un, e.borderLeftStyle),
                                    this.borderTopWidth = du(A, on, e.borderTopWidth),
                                    this.borderRightWidth = du(A, an, e.borderRightWidth),
                                    this.borderBottomWidth = du(A, Bn, e.borderBottomWidth),
                                    this.borderLeftWidth = du(A, cn, e.borderLeftWidth),
                                    this.boxShadow = du(A, cu, e.boxShadow),
                                    this.color = du(A, ln, e.color),
                                    this.direction = du(A, gn, e.direction),
                                    this.display = du(A, wn, e.display),
                                    this.float = du(A, Qn, e.cssFloat),
                                    this.fontFamily = du(A, $n, e.fontFamily),
                                    this.fontSize = du(A, Au, e.fontSize),
                                    this.fontStyle = du(A, ru, e.fontStyle),
                                    this.fontVariant = du(A, tu, e.fontVariant),
                                    this.fontWeight = du(A, eu, e.fontWeight),
                                    this.letterSpacing = du(A, Fn, e.letterSpacing),
                                    this.lineBreak = du(A, hn, e.lineBreak),
                                    this.lineHeight = du(A, fn, e.lineHeight),
                                    this.listStyleImage = du(A, Un, e.listStyleImage),
                                    this.listStylePosition = du(A, Dn, e.listStylePosition),
                                    this.listStyleType = du(A, En, e.listStyleType),
                                    this.marginTop = du(A, yn, e.marginTop),
                                    this.marginRight = du(A, Hn, e.marginRight),
                                    this.marginBottom = du(A, vn, e.marginBottom),
                                    this.marginLeft = du(A, bn, e.marginLeft),
                                    this.opacity = du(A, _n, e.opacity);
                                var n = du(A, In, e.overflow);
                                this.overflowX = n[0],
                                    this.overflowY = n[n.length > 1 ? 1 : 0],
                                    this.overflowWrap = du(A, Kn, e.overflowWrap),
                                    this.paddingTop = du(A, xn, e.paddingTop),
                                    this.paddingRight = du(A, Sn, e.paddingRight),
                                    this.paddingBottom = du(A, Tn, e.paddingBottom),
                                    this.paddingLeft = du(A, On, e.paddingLeft),
                                    this.paintOrder = du(A, lu, e.paintOrder),
                                    this.position = du(A, Vn, e.position),
                                    this.textAlign = du(A, Mn, e.textAlign),
                                    this.textDecorationColor = du(A, jn, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color),
                                    this.textDecorationLine = du(A, zn, null !== (r = e.textDecorationLine) && void 0 !== r ? r : e.textDecoration),
                                    this.textShadow = du(A, kn, e.textShadow),
                                    this.textTransform = du(A, Gn, e.textTransform),
                                    this.transform = du(A, Nn, e.transform),
                                    this.transformOrigin = du(A, Jn, e.transformOrigin),
                                    this.visibility = du(A, Xn, e.visibility),
                                    this.webkitTextStrokeColor = du(A, gu, e.webkitTextStrokeColor),
                                    this.webkitTextStrokeWidth = du(A, wu, e.webkitTextStrokeWidth),
                                    this.wordBreak = du(A, Yn, e.wordBreak),
                                    this.zIndex = du(A, Wn, e.zIndex)
                            }

                            return A.prototype.isVisible = function () {
                                return this.display > 0 && this.opacity > 0 && 0 === this.visibility
                            }
                                ,
                                A.prototype.isTransparent = function () {
                                    return tr(this.backgroundColor)
                                }
                                ,
                                A.prototype.isTransformed = function () {
                                    return null !== this.transform
                                }
                                ,
                                A.prototype.isPositioned = function () {
                                    return 0 !== this.position
                                }
                                ,
                                A.prototype.isPositionedWithZIndex = function () {
                                    return this.isPositioned() && !this.zIndex.auto
                                }
                                ,
                                A.prototype.isFloating = function () {
                                    return 0 !== this.float
                                }
                                ,
                                A.prototype.isInlineLevel = function () {
                                    return nu(this.display, 4) || nu(this.display, 33554432) || nu(this.display, 268435456) || nu(this.display, 536870912) || nu(this.display, 67108864) || nu(this.display, 134217728)
                                }
                                ,
                                A
                        }(), Qu = function () {
                            function A(A, e) {
                                this.content = du(A, uu, e.content),
                                    this.quotes = du(A, au, e.quotes)
                            }

                            return A
                        }(), Fu = function () {
                            function A(A, e) {
                                this.counterIncrement = du(A, su, e.counterIncrement),
                                    this.counterReset = du(A, ou, e.counterReset)
                            }

                            return A
                        }(), du = function (A, e, t) {
                            var r = new vt
                                , n = null != t ? t.toString() : e.initialValue;
                            r.write(n);
                            var u = new bt(r.read());
                            switch (e.type) {
                                case 2:
                                    var s = u.parseComponentValue();
                                    return e.parse(A, Lt(s) ? s.value : e.initialValue);
                                case 0:
                                    return e.parse(A, u.parseComponentValue());
                                case 1:
                                    return e.parse(A, u.parseComponentValues());
                                case 4:
                                    return u.parseComponentValue();
                                case 3:
                                    switch (e.format) {
                                        case "angle":
                                            return jt.parse(A, u.parseComponentValue());
                                        case "color":
                                            return er.parse(A, u.parseComponentValue());
                                        case "image":
                                            return xr.parse(A, u.parseComponentValue());
                                        case "length":
                                            var o = u.parseComponentValue();
                                            return kt(o) ? o : Rt;
                                        case "length-percentage":
                                            var i = u.parseComponentValue();
                                            return Gt(i) ? i : Rt;
                                        case "time":
                                            return Zn.parse(A, u.parseComponentValue())
                                    }
                            }
                        }, hu = "data-html2canvas-debug", fu = function (A) {
                            switch (A.getAttribute(hu)) {
                                case "all":
                                    return 1;
                                case "clone":
                                    return 2;
                                case "parse":
                                    return 3;
                                case "render":
                                    return 4;
                                default:
                                    return 0
                            }
                        }, pu = function (A, e) {
                            var t = fu(A);
                            return 1 === t || e === t
                        }, Uu = function () {
                            function A(A, e) {
                                this.context = A,
                                    this.textNodes = [],
                                    this.elements = [],
                                    this.flags = 0,
                                    pu(e, 3),
                                    this.styles = new Cu(A, window.getComputedStyle(e, null)),
                                ao(e) && (this.styles.animationDuration.some((function (A) {
                                        return A > 0
                                    }
                                )) && (e.style.animationDuration = "0s"),
                                null !== this.styles.transform && (e.style.transform = "none")),
                                    this.bounds = o(this.context, e),
                                pu(e, 4) && (this.flags |= 16)
                            }

                            return A
                        }(), Du = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Eu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mu = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), yu = 0; yu < Eu.length; yu++)
                            mu[Eu.charCodeAt(yu)] = yu;
                        for (var Hu = function (A) {
                            var e, t, r, n, u, s = .75 * A.length, o = A.length, i = 0;
                            "=" === A[A.length - 1] && (s--,
                            "=" === A[A.length - 2] && s--);
                            var a = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s)
                                , B = Array.isArray(a) ? a : new Uint8Array(a);
                            for (e = 0; e < o; e += 4)
                                t = mu[A.charCodeAt(e)],
                                    r = mu[A.charCodeAt(e + 1)],
                                    n = mu[A.charCodeAt(e + 2)],
                                    u = mu[A.charCodeAt(e + 3)],
                                    B[i++] = t << 2 | r >> 4,
                                    B[i++] = (15 & r) << 4 | n >> 2,
                                    B[i++] = (3 & n) << 6 | 63 & u;
                            return a
                        }, vu = function (A) {
                            for (var e = A.length, t = [], r = 0; r < e; r += 2)
                                t.push(A[r + 1] << 8 | A[r]);
                            return t
                        }, bu = function (A) {
                            for (var e = A.length, t = [], r = 0; r < e; r += 4)
                                t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                            return t
                        }, Iu = 5, Ku = 11, Lu = 2, xu = 65536 >> Iu, Su = (1 << Iu) - 1, Tu = xu + (1024 >> Iu) + 32, Ou = 65536 >> Ku, Mu = (1 << Ku - Iu) - 1, Vu = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
                        }, ku = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
                        }, Gu = function (A, e) {
                            var t = Hu(A)
                                , r = Array.isArray(t) ? bu(t) : new Uint32Array(t)
                                , n = Array.isArray(t) ? vu(t) : new Uint16Array(t)
                                , u = 24
                                , s = Vu(n, u / 2, r[4] / 2)
                                , o = 2 === r[5] ? Vu(n, (u + r[4]) / 2) : ku(r, Math.ceil((u + r[4]) / 4));
                            return new Nu(r[0], r[1], r[2], r[3], s, o)
                        }, Nu = function () {
                            function A(A, e, t, r, n, u) {
                                this.initialValue = A,
                                    this.errorValue = e,
                                    this.highStart = t,
                                    this.highValueIndex = r,
                                    this.index = n,
                                    this.data = u
                            }

                            return A.prototype.get = function (A) {
                                var e;
                                if (A >= 0) {
                                    if (A < 55296 || A > 56319 && A <= 65535)
                                        return e = ((e = this.index[A >> Iu]) << Lu) + (A & Su),
                                            this.data[e];
                                    if (A <= 65535)
                                        return e = ((e = this.index[xu + (A - 55296 >> Iu)]) << Lu) + (A & Su),
                                            this.data[e];
                                    if (A < this.highStart)
                                        return e = Tu - Ou + (A >> Ku),
                                            e = this.index[e],
                                            e += A >> Iu & Mu,
                                            e = ((e = this.index[e]) << Lu) + (A & Su),
                                            this.data[e];
                                    if (A <= 1114111)
                                        return this.data[this.highValueIndex]
                                }
                                return this.errorValue
                            }
                                ,
                                A
                        }(), Ru = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Pu = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), qu = 0; qu < Ru.length; qu++)
                            Pu[Ru.charCodeAt(qu)] = qu;
                        var Ju, Xu = 1, Yu = 2, Wu = 3, Zu = 4, _u = 5, ju = 7, zu = 8, $u = 9, As = 10, es = 11,
                            ts = 12, rs = 13, ns = 14, us = 15, ss = function (A) {
                                for (var e = [], t = 0, r = A.length; t < r;) {
                                    var n = A.charCodeAt(t++);
                                    if (n >= 55296 && n <= 56319 && t < r) {
                                        var u = A.charCodeAt(t++);
                                        56320 == (64512 & u) ? e.push(((1023 & n) << 10) + (1023 & u) + 65536) : (e.push(n),
                                            t--)
                                    } else
                                        e.push(n)
                                }
                                return e
                            }, os = function () {
                                for (var A = [], e = 0; e < arguments.length; e++)
                                    A[e] = arguments[e];
                                if (String.fromCodePoint)
                                    return String.fromCodePoint.apply(String, A);
                                var t = A.length;
                                if (!t)
                                    return "";
                                for (var r = [], n = -1, u = ""; ++n < t;) {
                                    var s = A[n];
                                    s <= 65535 ? r.push(s) : (s -= 65536,
                                        r.push(55296 + (s >> 10), s % 1024 + 56320)),
                                    (n + 1 === t || r.length > 16384) && (u += String.fromCharCode.apply(String, r),
                                        r.length = 0)
                                }
                                return u
                            }, is = Gu(Du), as = "×", Bs = "÷", cs = function (A) {
                                return is.get(A)
                            }, ls = function (A, e, t) {
                                var r = t - 2
                                    , n = e[r]
                                    , u = e[t - 1]
                                    , s = e[t];
                                if (u === Yu && s === Wu)
                                    return as;
                                if (u === Yu || u === Wu || u === Zu)
                                    return Bs;
                                if (s === Yu || s === Wu || s === Zu)
                                    return Bs;
                                if (u === zu && -1 !== [zu, $u, es, ts].indexOf(s))
                                    return as;
                                if (!(u !== es && u !== $u || s !== $u && s !== As))
                                    return as;
                                if ((u === ts || u === As) && s === As)
                                    return as;
                                if (s === rs || s === _u)
                                    return as;
                                if (s === ju)
                                    return as;
                                if (u === Xu)
                                    return as;
                                if (u === rs && s === ns) {
                                    for (; n === _u;)
                                        n = e[--r];
                                    if (n === ns)
                                        return as
                                }
                                if (u === us && s === us) {
                                    for (var o = 0; n === us;)
                                        o++,
                                            n = e[--r];
                                    if (o % 2 == 0)
                                        return as
                                }
                                return Bs
                            }, gs = function (A) {
                                var e = ss(A)
                                    , t = e.length
                                    , r = 0
                                    , n = 0
                                    , u = e.map(cs);
                                return {
                                    next: function () {
                                        if (r >= t)
                                            return {
                                                done: !0,
                                                value: null
                                            };
                                        for (var A = as; r < t && (A = ls(e, u, ++r)) === as;)
                                            ;
                                        if (A !== as || r === t) {
                                            var s = os.apply(null, e.slice(n, r));
                                            return n = r,
                                                {
                                                    value: s,
                                                    done: !1
                                                }
                                        }
                                        return {
                                            done: !0,
                                            value: null
                                        }
                                    }
                                }
                            }, ws = function (A) {
                                for (var e, t = gs(A), r = []; !(e = t.next()).done;)
                                    e.value && r.push(e.value.slice());
                                return r
                            }, Cs = function (A) {
                                var e = 123;
                                if (A.createRange) {
                                    var t = A.createRange();
                                    if (t.getBoundingClientRect) {
                                        var r = A.createElement("boundtest");
                                        r.style.height = e + "px",
                                            r.style.display = "block",
                                            A.body.appendChild(r),
                                            t.selectNode(r);
                                        var n = t.getBoundingClientRect()
                                            , u = Math.round(n.height);
                                        if (A.body.removeChild(r),
                                        u === e)
                                            return !0
                                    }
                                }
                                return !1
                            }, Qs = function (A) {
                                var e = A.createElement("boundtest");
                                e.style.width = "50px",
                                    e.style.display = "block",
                                    e.style.fontSize = "12px",
                                    e.style.letterSpacing = "0px",
                                    e.style.wordSpacing = "0px",
                                    A.body.appendChild(e);
                                var t = A.createRange();
                                e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                                var r = e.firstChild
                                    , n = a(r.data).map((function (A) {
                                        return B(A)
                                    }
                                ))
                                    , u = 0
                                    , s = {}
                                    , o = n.every((function (A, e) {
                                        t.setStart(r, u),
                                            t.setEnd(r, u + A.length);
                                        var n = t.getBoundingClientRect();
                                        u += A.length;
                                        var o = n.x > s.x || n.y > s.y;
                                        return s = n,
                                        0 === e || o
                                    }
                                ));
                                return A.body.removeChild(e),
                                    o
                            }, Fs = function () {
                                return void 0 !== (new Image).crossOrigin
                            }, ds = function () {
                                return "string" == typeof (new XMLHttpRequest).responseType
                            }, hs = function (A) {
                                var e = new Image
                                    , t = A.createElement("canvas")
                                    , r = t.getContext("2d");
                                if (!r)
                                    return !1;
                                e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                                try {
                                    r.drawImage(e, 0, 0),
                                        t.toDataURL()
                                } catch (A) {
                                    return !1
                                }
                                return !0
                            }, fs = function (A) {
                                return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
                            }, ps = function (A) {
                                var e = A.createElement("canvas")
                                    , t = 100;
                                e.width = t,
                                    e.height = t;
                                var r = e.getContext("2d");
                                if (!r)
                                    return Promise.reject(!1);
                                r.fillStyle = "rgb(0, 255, 0)",
                                    r.fillRect(0, 0, t, t);
                                var n = new Image
                                    , u = e.toDataURL();
                                n.src = u;
                                var s = Us(t, t, 0, 0, n);
                                return r.fillStyle = "red",
                                    r.fillRect(0, 0, t, t),
                                    Ds(s).then((function (e) {
                                            r.drawImage(e, 0, 0);
                                            var n = r.getImageData(0, 0, t, t).data;
                                            r.fillStyle = "red",
                                                r.fillRect(0, 0, t, t);
                                            var s = A.createElement("div");
                                            return s.style.backgroundImage = "url(" + u + ")",
                                                s.style.height = t + "px",
                                                fs(n) ? Ds(Us(t, t, 0, 0, s)) : Promise.reject(!1)
                                        }
                                    )).then((function (A) {
                                            return r.drawImage(A, 0, 0),
                                                fs(r.getImageData(0, 0, t, t).data)
                                        }
                                    )).catch((function () {
                                            return !1
                                        }
                                    ))
                            }, Us = function (A, e, t, r, n) {
                                var u = "http://www.w3.org/2000/svg"
                                    , s = document.createElementNS(u, "svg")
                                    , o = document.createElementNS(u, "foreignObject");
                                return s.setAttributeNS(null, "width", A.toString()),
                                    s.setAttributeNS(null, "height", e.toString()),
                                    o.setAttributeNS(null, "width", "100%"),
                                    o.setAttributeNS(null, "height", "100%"),
                                    o.setAttributeNS(null, "x", t.toString()),
                                    o.setAttributeNS(null, "y", r.toString()),
                                    o.setAttributeNS(null, "externalResourcesRequired", "true"),
                                    s.appendChild(o),
                                    o.appendChild(n),
                                    s
                            }, Ds = function (A) {
                                return new Promise((function (e, t) {
                                        var r = new Image;
                                        r.onload = function () {
                                            return e(r)
                                        }
                                            ,
                                            r.onerror = t,
                                            r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                                    }
                                ))
                            }, Es = {
                                get SUPPORT_RANGE_BOUNDS() {
                                    var A = Cs(document);
                                    return Object.defineProperty(Es, "SUPPORT_RANGE_BOUNDS", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_WORD_BREAKING() {
                                    var A = Es.SUPPORT_RANGE_BOUNDS && Qs(document);
                                    return Object.defineProperty(Es, "SUPPORT_WORD_BREAKING", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_SVG_DRAWING() {
                                    var A = hs(document);
                                    return Object.defineProperty(Es, "SUPPORT_SVG_DRAWING", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_FOREIGNOBJECT_DRAWING() {
                                    var A = "function" == typeof Array.from && "function" == typeof window.fetch ? ps(document) : Promise.resolve(!1);
                                    return Object.defineProperty(Es, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_CORS_IMAGES() {
                                    var A = Fs();
                                    return Object.defineProperty(Es, "SUPPORT_CORS_IMAGES", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_RESPONSE_TYPE() {
                                    var A = ds();
                                    return Object.defineProperty(Es, "SUPPORT_RESPONSE_TYPE", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_CORS_XHR() {
                                    var A = "withCredentials" in new XMLHttpRequest;
                                    return Object.defineProperty(Es, "SUPPORT_CORS_XHR", {
                                        value: A
                                    }),
                                        A
                                },
                                get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
                                    var A = !("undefined" == typeof Intl || !Intl.Segmenter);
                                    return Object.defineProperty(Es, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
                                        value: A
                                    }),
                                        A
                                }
                            }, ms = function () {
                                function A(A, e) {
                                    this.text = A,
                                        this.bounds = e
                                }

                                return A
                            }(), ys = function (A, e, t, r) {
                                var n = Ks(e, t)
                                    , u = []
                                    , o = 0;
                                return n.forEach((function (e) {
                                        if (t.textDecorationLine.length || e.trim().length > 0)
                                            if (Es.SUPPORT_RANGE_BOUNDS) {
                                                var n = vs(r, o, e.length).getClientRects();
                                                if (n.length > 1) {
                                                    var i = bs(e)
                                                        , a = 0;
                                                    i.forEach((function (e) {
                                                            u.push(new ms(e, s.fromDOMRectList(A, vs(r, a + o, e.length).getClientRects()))),
                                                                a += e.length
                                                        }
                                                    ))
                                                } else
                                                    u.push(new ms(e, s.fromDOMRectList(A, n)))
                                            } else {
                                                var B = r.splitText(e.length);
                                                u.push(new ms(e, Hs(A, r))),
                                                    r = B
                                            }
                                        else
                                            Es.SUPPORT_RANGE_BOUNDS || (r = r.splitText(e.length));
                                        o += e.length
                                    }
                                )),
                                    u
                            }, Hs = function (A, e) {
                                var t = e.ownerDocument;
                                if (t) {
                                    var r = t.createElement("html2canvaswrapper");
                                    r.appendChild(e.cloneNode(!0));
                                    var n = e.parentNode;
                                    if (n) {
                                        n.replaceChild(r, e);
                                        var u = o(A, r);
                                        return r.firstChild && n.replaceChild(r.firstChild, r),
                                            u
                                    }
                                }
                                return s.EMPTY
                            }, vs = function (A, e, t) {
                                var r = A.ownerDocument;
                                if (!r)
                                    throw new Error("Node has no owner document");
                                var n = r.createRange();
                                return n.setStart(A, e),
                                    n.setEnd(A, e + t),
                                    n
                            }, bs = function (A) {
                                if (Es.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                                    var e = new Intl.Segmenter(void 0, {
                                        granularity: "grapheme"
                                    });
                                    return Array.from(e.segment(A)).map((function (A) {
                                            return A.segment
                                        }
                                    ))
                                }
                                return ws(A)
                            }, Is = function (A, e) {
                                if (Es.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                                    var t = new Intl.Segmenter(void 0, {
                                        granularity: "word"
                                    });
                                    return Array.from(t.segment(A)).map((function (A) {
                                            return A.segment
                                        }
                                    ))
                                }
                                return xs(A, e)
                            }, Ks = function (A, e) {
                                return 0 !== e.letterSpacing ? bs(A) : Is(A, e)
                            }, Ls = [32, 160, 4961, 65792, 65793, 4153, 4241], xs = function (A, e) {
                                for (var t, r = RA(A, {
                                    lineBreak: e.lineBreak,
                                    wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
                                }), n = [], u = function () {
                                    if (t.value) {
                                        var A = t.value.slice()
                                            , e = a(A)
                                            , r = "";
                                        e.forEach((function (A) {
                                                -1 === Ls.indexOf(A) ? r += B(A) : (r.length && n.push(r),
                                                    n.push(B(A)),
                                                    r = "")
                                            }
                                        )),
                                        r.length && n.push(r)
                                    }
                                }; !(t = r.next()).done;)
                                    u();
                                return n
                            }, Ss = function () {
                                function A(A, e, t) {
                                    this.text = Ts(e.data, t.textTransform),
                                        this.textBounds = ys(A, this.text, t, e)
                                }

                                return A
                            }(), Ts = function (A, e) {
                                switch (e) {
                                    case 1:
                                        return A.toLowerCase();
                                    case 3:
                                        return A.replace(Os, Ms);
                                    case 2:
                                        return A.toUpperCase();
                                    default:
                                        return A
                                }
                            }, Os = /(^|\s|:|-|\(|\))([a-z])/g, Ms = function (A, e, t) {
                                return A.length > 0 ? e + t.toUpperCase() : A
                            }, Vs = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    return r.src = t.currentSrc || t.src,
                                        r.intrinsicWidth = t.naturalWidth,
                                        r.intrinsicHeight = t.naturalHeight,
                                        r.context.cache.addImage(r.src),
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), ks = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    return r.canvas = t,
                                        r.intrinsicWidth = t.width,
                                        r.intrinsicHeight = t.height,
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), Gs = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this
                                        , n = new XMLSerializer
                                        , u = o(e, t);
                                    return t.setAttribute("width", u.width + "px"),
                                        t.setAttribute("height", u.height + "px"),
                                        r.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(t)),
                                        r.intrinsicWidth = t.width.baseVal.value,
                                        r.intrinsicHeight = t.height.baseVal.value,
                                        r.context.cache.addImage(r.svg),
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), Ns = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    return r.value = t.value,
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), Rs = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    return r.start = t.start,
                                        r.reversed = "boolean" == typeof t.reversed && !0 === t.reversed,
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), Ps = [{
                                type: 15,
                                flags: 0,
                                unit: "px",
                                number: 3
                            }], qs = [{
                                type: 16,
                                flags: 0,
                                number: 50
                            }], Js = function (A) {
                                return A.width > A.height ? new s(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new s(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A
                            }, Xs = function (A) {
                                var e = A.type === Zs ? new Array(A.value.length + 1).join("•") : A.value;
                                return 0 === e.length ? A.placeholder || "" : e
                            }, Ys = "checkbox", Ws = "radio", Zs = "password", _s = 707406591, js = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    switch (r.type = t.type.toLowerCase(),
                                        r.checked = t.checked,
                                        r.value = Xs(t),
                                    r.type !== Ys && r.type !== Ws || (r.styles.backgroundColor = 3739148031,
                                        r.styles.borderTopColor = r.styles.borderRightColor = r.styles.borderBottomColor = r.styles.borderLeftColor = 2779096575,
                                        r.styles.borderTopWidth = r.styles.borderRightWidth = r.styles.borderBottomWidth = r.styles.borderLeftWidth = 1,
                                        r.styles.borderTopStyle = r.styles.borderRightStyle = r.styles.borderBottomStyle = r.styles.borderLeftStyle = 1,
                                        r.styles.backgroundClip = [0],
                                        r.styles.backgroundOrigin = [0],
                                        r.bounds = Js(r.bounds)),
                                        r.type) {
                                        case Ys:
                                            r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = Ps;
                                            break;
                                        case Ws:
                                            r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = qs
                                    }
                                    return r
                                }

                                return e(t, A),
                                    t
                            }(Uu), zs = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this
                                        , n = t.options[t.selectedIndex || 0];
                                    return r.value = n && n.text || "",
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), $s = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    return r.value = t.value,
                                        r
                                }

                                return e(t, A),
                                    t
                            }(Uu), Ao = function (A) {
                                function t(e, t) {
                                    var r = A.call(this, e, t) || this;
                                    r.src = t.src,
                                        r.width = parseInt(t.width, 10) || 0,
                                        r.height = parseInt(t.height, 10) || 0,
                                        r.backgroundColor = r.styles.backgroundColor;
                                    try {
                                        if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                                            r.tree = no(e, t.contentWindow.document.documentElement);
                                            var n = t.contentWindow.document.documentElement ? Br(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : cr.TRANSPARENT
                                                ,
                                                u = t.contentWindow.document.body ? Br(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : cr.TRANSPARENT;
                                            r.backgroundColor = tr(n) ? tr(u) ? r.styles.backgroundColor : u : n
                                        }
                                    } catch (A) {
                                    }
                                    return r
                                }

                                return e(t, A),
                                    t
                            }(Uu), eo = ["OL", "UL", "MENU"], to = function (A, e, t, r) {
                                for (var n = e.firstChild, u = void 0; n; n = u)
                                    if (u = n.nextSibling,
                                    oo(n) && n.data.trim().length > 0)
                                        t.textNodes.push(new Ss(A, n, t.styles));
                                    else if (io(n))
                                        if (yo(n) && n.assignedNodes)
                                            n.assignedNodes().forEach((function (e) {
                                                    return to(A, e, t, r)
                                                }
                                            ));
                                        else {
                                            var s = ro(A, n);
                                            s.styles.isVisible() && (uo(n, s, r) ? s.flags |= 4 : so(s.styles) && (s.flags |= 2),
                                            -1 !== eo.indexOf(n.tagName) && (s.flags |= 8),
                                                t.elements.push(s),
                                                n.slot,
                                                n.shadowRoot ? to(A, n.shadowRoot, s, r) : Eo(n) || Co(n) || mo(n) || to(A, n, s, r))
                                        }
                            }, ro = function (A, e) {
                                return fo(e) ? new Vs(A, e) : Fo(e) ? new ks(A, e) : Co(e) ? new Gs(A, e) : co(e) ? new Ns(A, e) : lo(e) ? new Rs(A, e) : go(e) ? new js(A, e) : mo(e) ? new zs(A, e) : Eo(e) ? new $s(A, e) : po(e) ? new Ao(A, e) : new Uu(A, e)
                            }, no = function (A, e) {
                                var t = ro(A, e);
                                return t.flags |= 4,
                                    to(A, e, t, t),
                                    t
                            }, uo = function (A, e, t) {
                                return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Qo(A) && t.styles.isTransparent()
                            }, so = function (A) {
                                return A.isPositioned() || A.isFloating()
                            }, oo = function (A) {
                                return A.nodeType === Node.TEXT_NODE
                            }, io = function (A) {
                                return A.nodeType === Node.ELEMENT_NODE
                            }, ao = function (A) {
                                return io(A) && void 0 !== A.style && !Bo(A)
                            }, Bo = function (A) {
                                return "object" == typeof A.className
                            }, co = function (A) {
                                return "LI" === A.tagName
                            }, lo = function (A) {
                                return "OL" === A.tagName
                            }, go = function (A) {
                                return "INPUT" === A.tagName
                            }, wo = function (A) {
                                return "HTML" === A.tagName
                            }, Co = function (A) {
                                return "svg" === A.tagName
                            }, Qo = function (A) {
                                return "BODY" === A.tagName
                            }, Fo = function (A) {
                                return "CANVAS" === A.tagName
                            }, ho = function (A) {
                                return "VIDEO" === A.tagName
                            }, fo = function (A) {
                                return "IMG" === A.tagName
                            }, po = function (A) {
                                return "IFRAME" === A.tagName
                            }, Uo = function (A) {
                                return "STYLE" === A.tagName
                            }, Do = function (A) {
                                return "SCRIPT" === A.tagName
                            }, Eo = function (A) {
                                return "TEXTAREA" === A.tagName
                            }, mo = function (A) {
                                return "SELECT" === A.tagName
                            }, yo = function (A) {
                                return "SLOT" === A.tagName
                            }, Ho = function (A) {
                                return A.tagName.indexOf("-") > 0
                            }, vo = function () {
                                function A() {
                                    this.counters = {}
                                }

                                return A.prototype.getCounterValue = function (A) {
                                    var e = this.counters[A];
                                    return e && e.length ? e[e.length - 1] : 1
                                }
                                    ,
                                    A.prototype.getCounterValues = function (A) {
                                        var e = this.counters[A];
                                        return e || []
                                    }
                                    ,
                                    A.prototype.pop = function (A) {
                                        var e = this;
                                        A.forEach((function (A) {
                                                return e.counters[A].pop()
                                            }
                                        ))
                                    }
                                    ,
                                    A.prototype.parse = function (A) {
                                        var e = this
                                            , t = A.counterIncrement
                                            , r = A.counterReset
                                            , n = !0;
                                        null !== t && t.forEach((function (A) {
                                                var t = e.counters[A.counter];
                                                t && 0 !== A.increment && (n = !1,
                                                t.length || t.push(1),
                                                    t[Math.max(0, t.length - 1)] += A.increment)
                                            }
                                        ));
                                        var u = [];
                                        return n && r.forEach((function (A) {
                                                var t = e.counters[A.counter];
                                                u.push(A.counter),
                                                t || (t = e.counters[A.counter] = []),
                                                    t.push(A.reset)
                                            }
                                        )),
                                            u
                                    }
                                    ,
                                    A
                            }(), bo = {
                                integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                                values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
                            }, Io = {
                                integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                                values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
                            }, Ko = {
                                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                                values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
                            }, Lo = {
                                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                                values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
                            }, xo = function (A, e, t, r, n, u) {
                                return A < e || A > t ? Xo(A, n, u.length > 0) : r.integers.reduce((function (e, t, n) {
                                        for (; A >= t;)
                                            A -= t,
                                                e += r.values[n];
                                        return e
                                    }
                                ), "") + u
                            }, So = function (A, e, t, r) {
                                var n = "";
                                do {
                                    t || A--,
                                        n = r(A) + n,
                                        A /= e
                                } while (A * e >= e);
                                return n
                            }, To = function (A, e, t, r, n) {
                                var u = t - e + 1;
                                return (A < 0 ? "-" : "") + (So(Math.abs(A), u, r, (function (A) {
                                        return B(Math.floor(A % u) + e)
                                    }
                                )) + n)
                            }, Oo = function (A, e, t) {
                                void 0 === t && (t = ". ");
                                var r = e.length;
                                return So(Math.abs(A), r, !1, (function (A) {
                                        return e[Math.floor(A % r)]
                                    }
                                )) + t
                            }, Mo = 1, Vo = 2, ko = 4, Go = 8, No = function (A, e, t, r, n, u) {
                                if (A < -9999 || A > 9999)
                                    return Xo(A, 4, n.length > 0);
                                var s = Math.abs(A)
                                    , o = n;
                                if (0 === s)
                                    return e[0] + o;
                                for (var i = 0; s > 0 && i <= 4; i++) {
                                    var a = s % 10;
                                    0 === a && nu(u, Mo) && "" !== o ? o = e[a] + o : a > 1 || 1 === a && 0 === i || 1 === a && 1 === i && nu(u, Vo) || 1 === a && 1 === i && nu(u, ko) && A > 100 || 1 === a && i > 1 && nu(u, Go) ? o = e[a] + (i > 0 ? t[i - 1] : "") + o : 1 === a && i > 0 && (o = t[i - 1] + o),
                                        s = Math.floor(s / 10)
                                }
                                return (A < 0 ? r : "") + o
                            }, Ro = "十百千萬", Po = "拾佰仟萬", qo = "マイナス", Jo = "마이너스", Xo = function (A, e, t) {
                                var r = t ? ". " : ""
                                    , n = t ? "、" : ""
                                    , u = t ? ", " : ""
                                    , s = t ? " " : "";
                                switch (e) {
                                    case 0:
                                        return "•" + s;
                                    case 1:
                                        return "◦" + s;
                                    case 2:
                                        return "◾" + s;
                                    case 5:
                                        var o = To(A, 48, 57, !0, r);
                                        return o.length < 4 ? "0" + o : o;
                                    case 4:
                                        return Oo(A, "〇一二三四五六七八九", n);
                                    case 6:
                                        return xo(A, 1, 3999, bo, 3, r).toLowerCase();
                                    case 7:
                                        return xo(A, 1, 3999, bo, 3, r);
                                    case 8:
                                        return To(A, 945, 969, !1, r);
                                    case 9:
                                        return To(A, 97, 122, !1, r);
                                    case 10:
                                        return To(A, 65, 90, !1, r);
                                    case 11:
                                        return To(A, 1632, 1641, !0, r);
                                    case 12:
                                    case 49:
                                        return xo(A, 1, 9999, Io, 3, r);
                                    case 35:
                                        return xo(A, 1, 9999, Io, 3, r).toLowerCase();
                                    case 13:
                                        return To(A, 2534, 2543, !0, r);
                                    case 14:
                                    case 30:
                                        return To(A, 6112, 6121, !0, r);
                                    case 15:
                                        return Oo(A, "子丑寅卯辰巳午未申酉戌亥", n);
                                    case 16:
                                        return Oo(A, "甲乙丙丁戊己庚辛壬癸", n);
                                    case 17:
                                    case 48:
                                        return No(A, "零一二三四五六七八九", Ro, "負", n, Vo | ko | Go);
                                    case 47:
                                        return No(A, "零壹貳參肆伍陸柒捌玖", Po, "負", n, Mo | Vo | ko | Go);
                                    case 42:
                                        return No(A, "零一二三四五六七八九", Ro, "负", n, Vo | ko | Go);
                                    case 41:
                                        return No(A, "零壹贰叁肆伍陆柒捌玖", Po, "负", n, Mo | Vo | ko | Go);
                                    case 26:
                                        return No(A, "〇一二三四五六七八九", "十百千万", qo, n, 0);
                                    case 25:
                                        return No(A, "零壱弐参四伍六七八九", "拾百千万", qo, n, Mo | Vo | ko);
                                    case 31:
                                        return No(A, "영일이삼사오육칠팔구", "십백천만", Jo, u, Mo | Vo | ko);
                                    case 33:
                                        return No(A, "零一二三四五六七八九", "十百千萬", Jo, u, 0);
                                    case 32:
                                        return No(A, "零壹貳參四五六七八九", "拾百千", Jo, u, Mo | Vo | ko);
                                    case 18:
                                        return To(A, 2406, 2415, !0, r);
                                    case 20:
                                        return xo(A, 1, 19999, Lo, 3, r);
                                    case 21:
                                        return To(A, 2790, 2799, !0, r);
                                    case 22:
                                        return To(A, 2662, 2671, !0, r);
                                    case 22:
                                        return xo(A, 1, 10999, Ko, 3, r);
                                    case 23:
                                        return Oo(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                                    case 24:
                                        return Oo(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                                    case 27:
                                        return To(A, 3302, 3311, !0, r);
                                    case 28:
                                        return Oo(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
                                    case 29:
                                        return Oo(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
                                    case 34:
                                        return To(A, 3792, 3801, !0, r);
                                    case 37:
                                        return To(A, 6160, 6169, !0, r);
                                    case 38:
                                        return To(A, 4160, 4169, !0, r);
                                    case 39:
                                        return To(A, 2918, 2927, !0, r);
                                    case 40:
                                        return To(A, 1776, 1785, !0, r);
                                    case 43:
                                        return To(A, 3046, 3055, !0, r);
                                    case 44:
                                        return To(A, 3174, 3183, !0, r);
                                    case 45:
                                        return To(A, 3664, 3673, !0, r);
                                    case 46:
                                        return To(A, 3872, 3881, !0, r);
                                    default:
                                        return To(A, 48, 57, !0, r)
                                }
                            }, Yo = "data-html2canvas-ignore", Wo = function () {
                                function A(A, e, t) {
                                    if (this.context = A,
                                        this.options = t,
                                        this.scrolledElements = [],
                                        this.referenceElement = e,
                                        this.counters = new vo,
                                        this.quoteDepth = 0,
                                        !e.ownerDocument)
                                        throw new Error("Cloned element does not have an owner document");
                                    this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1)
                                }

                                return A.prototype.toIFrame = function (A, e) {
                                    var t = this
                                        , u = _o(A, e);
                                    if (!u.contentWindow)
                                        return Promise.reject("Unable to find iframe window");
                                    var s = A.defaultView.pageXOffset
                                        , o = A.defaultView.pageYOffset
                                        , i = u.contentWindow
                                        , a = i.document
                                        , B = $o(u).then((function () {
                                            return r(t, void 0, void 0, (function () {
                                                    var A, t;
                                                    return n(this, (function (r) {
                                                            switch (r.label) {
                                                                case 0:
                                                                    return this.scrolledElements.forEach(ni),
                                                                    i && (i.scrollTo(e.left, e.top),
                                                                    !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === e.top && i.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                                                                        this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0))),
                                                                        A = this.options.onclone,
                                                                        void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
                                                                case 1:
                                                                    r.sent(),
                                                                        r.label = 2;
                                                                case 2:
                                                                    return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, zo(a)] : [3, 4];
                                                                case 3:
                                                                    r.sent(),
                                                                        r.label = 4;
                                                                case 4:
                                                                    return "function" == typeof A ? [2, Promise.resolve().then((function () {
                                                                            return A(a, t)
                                                                        }
                                                                    )).then((function () {
                                                                            return u
                                                                        }
                                                                    ))] : [2, u]
                                                            }
                                                        }
                                                    ))
                                                }
                                            ))
                                        }
                                    ));
                                    return a.open(),
                                        a.write(ti(document.doctype) + "<html></html>"),
                                        ri(this.referenceElement.ownerDocument, s, o),
                                        a.replaceChild(a.adoptNode(this.documentElement), a.documentElement),
                                        a.close(),
                                        B
                                }
                                    ,
                                    A.prototype.createElementClone = function (A) {
                                        if (pu(A, 2),
                                            Fo(A))
                                            return this.createCanvasClone(A);
                                        if (ho(A))
                                            return this.createVideoClone(A);
                                        if (Uo(A))
                                            return this.createStyleClone(A);
                                        var e = A.cloneNode(!1);
                                        return fo(e) && (fo(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc,
                                            e.srcset = ""),
                                        "lazy" === e.loading && (e.loading = "eager")),
                                            Ho(e) ? this.createCustomElementClone(e) : e
                                    }
                                    ,
                                    A.prototype.createCustomElementClone = function (A) {
                                        var e = document.createElement("html2canvascustomelement");
                                        return ei(A.style, e),
                                            e
                                    }
                                    ,
                                    A.prototype.createStyleClone = function (A) {
                                        try {
                                            var e = A.sheet;
                                            if (e && e.cssRules) {
                                                var t = [].slice.call(e.cssRules, 0).reduce((function (A, e) {
                                                        return e && "string" == typeof e.cssText ? A + e.cssText : A
                                                    }
                                                ), "")
                                                    , r = A.cloneNode(!1);
                                                return r.textContent = t,
                                                    r
                                            }
                                        } catch (A) {
                                            if (this.context.logger.error("Unable to access cssRules property", A),
                                            "SecurityError" !== A.name)
                                                throw A
                                        }
                                        return A.cloneNode(!1)
                                    }
                                    ,
                                    A.prototype.createCanvasClone = function (A) {
                                        var e;
                                        if (this.options.inlineImages && A.ownerDocument) {
                                            var t = A.ownerDocument.createElement("img");
                                            try {
                                                return t.src = A.toDataURL(),
                                                    t
                                            } catch (e) {
                                                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                                            }
                                        }
                                        var r = A.cloneNode(!1);
                                        try {
                                            r.width = A.width,
                                                r.height = A.height;
                                            var n = A.getContext("2d")
                                                , u = r.getContext("2d");
                                            if (u)
                                                if (!this.options.allowTaint && n)
                                                    u.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0);
                                                else {
                                                    var s = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
                                                    if (s) {
                                                        var o = s.getContextAttributes();
                                                        !1 === (null == o ? void 0 : o.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                                                    }
                                                    u.drawImage(A, 0, 0)
                                                }
                                            return r
                                        } catch (e) {
                                            this.context.logger.info("Unable to clone canvas as it is tainted", A)
                                        }
                                        return r
                                    }
                                    ,
                                    A.prototype.createVideoClone = function (A) {
                                        var e = A.ownerDocument.createElement("canvas");
                                        e.width = A.offsetWidth,
                                            e.height = A.offsetHeight;
                                        var t = e.getContext("2d");
                                        try {
                                            return t && (t.drawImage(A, 0, 0, e.width, e.height),
                                            this.options.allowTaint || t.getImageData(0, 0, e.width, e.height)),
                                                e
                                        } catch (e) {
                                            this.context.logger.info("Unable to clone video as it is tainted", A)
                                        }
                                        var r = A.ownerDocument.createElement("canvas");
                                        return r.width = A.offsetWidth,
                                            r.height = A.offsetHeight,
                                            r
                                    }
                                    ,
                                    A.prototype.appendChildNode = function (A, e, t) {
                                        io(e) && (Do(e) || e.hasAttribute(Yo) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && io(e) && Uo(e) || A.appendChild(this.cloneNode(e, t))
                                    }
                                    ,
                                    A.prototype.cloneChildNodes = function (A, e, t) {
                                        for (var r = this, n = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; n; n = n.nextSibling)
                                            if (io(n) && yo(n) && "function" == typeof n.assignedNodes) {
                                                var u = n.assignedNodes();
                                                u.length && u.forEach((function (A) {
                                                        return r.appendChildNode(e, A, t)
                                                    }
                                                ))
                                            } else
                                                this.appendChildNode(e, n, t)
                                    }
                                    ,
                                    A.prototype.cloneNode = function (A, e) {
                                        if (oo(A))
                                            return document.createTextNode(A.data);
                                        if (!A.ownerDocument)
                                            return A.cloneNode(!1);
                                        var t = A.ownerDocument.defaultView;
                                        if (t && io(A) && (ao(A) || Bo(A))) {
                                            var r = this.createElementClone(A);
                                            r.style.transitionProperty = "none";
                                            var n = t.getComputedStyle(A)
                                                , u = t.getComputedStyle(A, ":before")
                                                , s = t.getComputedStyle(A, ":after");
                                            this.referenceElement === A && ao(r) && (this.clonedReferenceElement = r),
                                            Qo(r) && Bi(r);
                                            var o = this.counters.parse(new Fu(this.context, n))
                                                , i = this.resolvePseudoContent(A, r, u, Ju.BEFORE);
                                            Ho(A) && (e = !0),
                                            ho(A) || this.cloneChildNodes(A, r, e),
                                            i && r.insertBefore(i, r.firstChild);
                                            var a = this.resolvePseudoContent(A, r, s, Ju.AFTER);
                                            return a && r.appendChild(a),
                                                this.counters.pop(o),
                                            (n && (this.options.copyStyles || Bo(A)) && !po(A) || e) && ei(n, r),
                                            0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]),
                                            (Eo(A) || mo(A)) && (Eo(r) || mo(r)) && (r.value = A.value),
                                                r
                                        }
                                        return A.cloneNode(!1)
                                    }
                                    ,
                                    A.prototype.resolvePseudoContent = function (A, e, t, r) {
                                        var n = this;
                                        if (t) {
                                            var u = t.content
                                                , s = e.ownerDocument;
                                            if (s && u && "none" !== u && "-moz-alt-content" !== u && "none" !== t.display) {
                                                this.counters.parse(new Fu(this.context, t));
                                                var o = new Qu(this.context, t)
                                                    , i = s.createElement("html2canvaspseudoelement");
                                                ei(t, i),
                                                    o.content.forEach((function (e) {
                                                            if (0 === e.type)
                                                                i.appendChild(s.createTextNode(e.value));
                                                            else if (22 === e.type) {
                                                                var t = s.createElement("img");
                                                                t.src = e.value,
                                                                    t.style.opacity = "1",
                                                                    i.appendChild(t)
                                                            } else if (18 === e.type) {
                                                                if ("attr" === e.name) {
                                                                    var r = e.values.filter(Lt);
                                                                    r.length && i.appendChild(s.createTextNode(A.getAttribute(r[0].value) || ""))
                                                                } else if ("counter" === e.name) {
                                                                    var u = e.values.filter(Ot)
                                                                        , a = u[0]
                                                                        , B = u[1];
                                                                    if (a && Lt(a)) {
                                                                        var c = n.counters.getCounterValue(a.value)
                                                                            ,
                                                                            l = B && Lt(B) ? En.parse(n.context, B.value) : 3;
                                                                        i.appendChild(s.createTextNode(Xo(c, l, !1)))
                                                                    }
                                                                } else if ("counters" === e.name) {
                                                                    var g = e.values.filter(Ot)
                                                                        , w = (a = g[0],
                                                                        g[1]);
                                                                    if (B = g[2],
                                                                    a && Lt(a)) {
                                                                        var C = n.counters.getCounterValues(a.value)
                                                                            ,
                                                                            Q = B && Lt(B) ? En.parse(n.context, B.value) : 3
                                                                            , F = w && 0 === w.type ? w.value : ""
                                                                            , d = C.map((function (A) {
                                                                                    return Xo(A, Q, !1)
                                                                                }
                                                                            )).join(F);
                                                                        i.appendChild(s.createTextNode(d))
                                                                    }
                                                                }
                                                            } else if (20 === e.type)
                                                                switch (e.value) {
                                                                    case "open-quote":
                                                                        i.appendChild(s.createTextNode(Bu(o.quotes, n.quoteDepth++, !0)));
                                                                        break;
                                                                    case "close-quote":
                                                                        i.appendChild(s.createTextNode(Bu(o.quotes, --n.quoteDepth, !1)));
                                                                        break;
                                                                    default:
                                                                        i.appendChild(s.createTextNode(e.value))
                                                                }
                                                        }
                                                    )),
                                                    i.className = oi + " " + ii;
                                                var a = r === Ju.BEFORE ? " " + oi : " " + ii;
                                                return Bo(e) ? e.className.baseValue += a : e.className += a,
                                                    i
                                            }
                                        }
                                    }
                                    ,
                                    A.destroy = function (A) {
                                        return !!A.parentNode && (A.parentNode.removeChild(A),
                                            !0)
                                    }
                                    ,
                                    A
                            }();
                        !function (A) {
                            A[A.BEFORE = 0] = "BEFORE",
                                A[A.AFTER = 1] = "AFTER"
                        }(Ju || (Ju = {}));
                        var Zo, _o = function (A, e) {
                                var t = A.createElement("iframe");
                                return t.className = "html2canvas-container",
                                    t.style.visibility = "hidden",
                                    t.style.position = "fixed",
                                    t.style.left = "-10000px",
                                    t.style.top = "0px",
                                    t.style.border = "0",
                                    t.width = e.width.toString(),
                                    t.height = e.height.toString(),
                                    t.scrolling = "no",
                                    t.setAttribute(Yo, "true"),
                                    A.body.appendChild(t),
                                    t
                            }, jo = function (A) {
                                return new Promise((function (e) {
                                        A.complete ? e() : A.src ? (A.onload = e,
                                            A.onerror = e) : e()
                                    }
                                ))
                            }, zo = function (A) {
                                return Promise.all([].slice.call(A.images, 0).map(jo))
                            }, $o = function (A) {
                                return new Promise((function (e, t) {
                                        var r = A.contentWindow;
                                        if (!r)
                                            return t("No window assigned for iframe");
                                        var n = r.document;
                                        r.onload = A.onload = function () {
                                            r.onload = A.onload = null;
                                            var t = setInterval((function () {
                                                    n.body.childNodes.length > 0 && "complete" === n.readyState && (clearInterval(t),
                                                        e(A))
                                                }
                                            ), 50)
                                        }
                                    }
                                ))
                            }, Ai = ["all", "d", "content"], ei = function (A, e) {
                                for (var t = A.length - 1; t >= 0; t--) {
                                    var r = A.item(t);
                                    -1 === Ai.indexOf(r) && e.style.setProperty(r, A.getPropertyValue(r))
                                }
                                return e
                            }, ti = function (A) {
                                var e = "";
                                return A && (e += "<!DOCTYPE ",
                                A.name && (e += A.name),
                                A.internalSubset && (e += A.internalSubset),
                                A.publicId && (e += '"' + A.publicId + '"'),
                                A.systemId && (e += '"' + A.systemId + '"'),
                                    e += ">"),
                                    e
                            }, ri = function (A, e, t) {
                                A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
                            }, ni = function (A) {
                                var e = A[0]
                                    , t = A[1]
                                    , r = A[2];
                                e.scrollLeft = t,
                                    e.scrollTop = r
                            }, ui = ":before", si = ":after", oi = "___html2canvas___pseudoelement_before",
                            ii = "___html2canvas___pseudoelement_after",
                            ai = '{\n    content: "" !important;\n    display: none !important;\n}', Bi = function (A) {
                                ci(A, "." + oi + ui + ai + "\n         ." + ii + si + ai)
                            }, ci = function (A, e) {
                                var t = A.ownerDocument;
                                if (t) {
                                    var r = t.createElement("style");
                                    r.textContent = e,
                                        A.appendChild(r)
                                }
                            }, li = function () {
                                function A() {
                                }

                                return A.getOrigin = function (e) {
                                    var t = A._link;
                                    return t ? (t.href = e,
                                        t.href = t.href,
                                    t.protocol + t.hostname + t.port) : "about:blank"
                                }
                                    ,
                                    A.isSameOrigin = function (e) {
                                        return A.getOrigin(e) === A._origin
                                    }
                                    ,
                                    A.setContext = function (e) {
                                        A._link = e.document.createElement("a"),
                                            A._origin = A.getOrigin(e.location.href)
                                    }
                                    ,
                                    A._origin = "about:blank",
                                    A
                            }(), gi = function () {
                                function A(A, e) {
                                    this.context = A,
                                        this._options = e,
                                        this._cache = {}
                                }

                                return A.prototype.addImage = function (A) {
                                    var e = Promise.resolve();
                                    return this.has(A) ? e : fi(A) || Fi(A) ? ((this._cache[A] = this.loadImage(A)).catch((function () {
                                        }
                                    )),
                                        e) : e
                                }
                                    ,
                                    A.prototype.match = function (A) {
                                        return this._cache[A]
                                    }
                                    ,
                                    A.prototype.loadImage = function (A) {
                                        return r(this, void 0, void 0, (function () {
                                                var e, t, r, u, s = this;
                                                return n(this, (function (n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                return e = li.isSameOrigin(A),
                                                                    t = !di(A) && !0 === this._options.useCORS && Es.SUPPORT_CORS_IMAGES && !e,
                                                                    r = !di(A) && !e && !fi(A) && "string" == typeof this._options.proxy && Es.SUPPORT_CORS_XHR && !t,
                                                                    e || !1 !== this._options.allowTaint || di(A) || fi(A) || r || t ? (u = A,
                                                                        r ? [4, this.proxy(u)] : [3, 2]) : [2];
                                                            case 1:
                                                                u = n.sent(),
                                                                    n.label = 2;
                                                            case 2:
                                                                return this.context.logger.debug("Added image " + A.substring(0, 256)),
                                                                    [4, new Promise((function (A, e) {
                                                                            var r = new Image;
                                                                            r.onload = function () {
                                                                                return A(r)
                                                                            }
                                                                                ,
                                                                                r.onerror = e,
                                                                            (hi(u) || t) && (r.crossOrigin = "anonymous"),
                                                                                r.src = u,
                                                                            !0 === r.complete && setTimeout((function () {
                                                                                    return A(r)
                                                                                }
                                                                            ), 500),
                                                                            s._options.imageTimeout > 0 && setTimeout((function () {
                                                                                    return e("Timed out (" + s._options.imageTimeout + "ms) loading image")
                                                                                }
                                                                            ), s._options.imageTimeout)
                                                                        }
                                                                    ))];
                                                            case 3:
                                                                return [2, n.sent()]
                                                        }
                                                    }
                                                ))
                                            }
                                        ))
                                    }
                                    ,
                                    A.prototype.has = function (A) {
                                        return void 0 !== this._cache[A]
                                    }
                                    ,
                                    A.prototype.keys = function () {
                                        return Promise.resolve(Object.keys(this._cache))
                                    }
                                    ,
                                    A.prototype.proxy = function (A) {
                                        var e = this
                                            , t = this._options.proxy;
                                        if (!t)
                                            throw new Error("No proxy defined");
                                        var r = A.substring(0, 256);
                                        return new Promise((function (n, u) {
                                                var s = Es.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
                                                    , o = new XMLHttpRequest;
                                                o.onload = function () {
                                                    if (200 === o.status)
                                                        if ("text" === s)
                                                            n(o.response);
                                                        else {
                                                            var A = new FileReader;
                                                            A.addEventListener("load", (function () {
                                                                    return n(A.result)
                                                                }
                                                            ), !1),
                                                                A.addEventListener("error", (function (A) {
                                                                        return u(A)
                                                                    }
                                                                ), !1),
                                                                A.readAsDataURL(o.response)
                                                        }
                                                    else
                                                        u("Failed to proxy resource " + r + " with status code " + o.status)
                                                }
                                                    ,
                                                    o.onerror = u;
                                                var i = t.indexOf("?") > -1 ? "&" : "?";
                                                if (o.open("GET", "" + t + i + "url=" + encodeURIComponent(A) + "&responseType=" + s),
                                                "text" !== s && o instanceof XMLHttpRequest && (o.responseType = s),
                                                    e._options.imageTimeout) {
                                                    var a = e._options.imageTimeout;
                                                    o.timeout = a,
                                                        o.ontimeout = function () {
                                                            return u("Timed out (" + a + "ms) proxying " + r)
                                                        }
                                                }
                                                o.send()
                                            }
                                        ))
                                    }
                                    ,
                                    A
                            }(), wi = /^data:image\/svg\+xml/i, Ci = /^data:image\/.*;base64,/i, Qi = /^data:image\/.*/i,
                            Fi = function (A) {
                                return Es.SUPPORT_SVG_DRAWING || !pi(A)
                            }, di = function (A) {
                                return Qi.test(A)
                            }, hi = function (A) {
                                return Ci.test(A)
                            }, fi = function (A) {
                                return "blob" === A.substr(0, 4)
                            }, pi = function (A) {
                                return "svg" === A.substr(-3).toLowerCase() || wi.test(A)
                            }, Ui = function () {
                                function A(A, e) {
                                    this.type = 0,
                                        this.x = A,
                                        this.y = e
                                }

                                return A.prototype.add = function (e, t) {
                                    return new A(this.x + e, this.y + t)
                                }
                                    ,
                                    A
                            }(), Di = function (A, e, t) {
                                return new Ui(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
                            }, Ei = function () {
                                function A(A, e, t, r) {
                                    this.type = 1,
                                        this.start = A,
                                        this.startControl = e,
                                        this.endControl = t,
                                        this.end = r
                                }

                                return A.prototype.subdivide = function (e, t) {
                                    var r = Di(this.start, this.startControl, e)
                                        , n = Di(this.startControl, this.endControl, e)
                                        , u = Di(this.endControl, this.end, e)
                                        , s = Di(r, n, e)
                                        , o = Di(n, u, e)
                                        , i = Di(s, o, e);
                                    return t ? new A(this.start, r, s, i) : new A(i, o, u, this.end)
                                }
                                    ,
                                    A.prototype.add = function (e, t) {
                                        return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t))
                                    }
                                    ,
                                    A.prototype.reverse = function () {
                                        return new A(this.end, this.endControl, this.startControl, this.start)
                                    }
                                    ,
                                    A
                            }(), mi = function (A) {
                                return 1 === A.type
                            }, yi = function () {
                                function A(A) {
                                    var e = A.styles
                                        , t = A.bounds
                                        , r = Jt(e.borderTopLeftRadius, t.width, t.height)
                                        , n = r[0]
                                        , u = r[1]
                                        , s = Jt(e.borderTopRightRadius, t.width, t.height)
                                        , o = s[0]
                                        , i = s[1]
                                        , a = Jt(e.borderBottomRightRadius, t.width, t.height)
                                        , B = a[0]
                                        , c = a[1]
                                        , l = Jt(e.borderBottomLeftRadius, t.width, t.height)
                                        , g = l[0]
                                        , w = l[1]
                                        , C = [];
                                    C.push((n + o) / t.width),
                                        C.push((g + B) / t.width),
                                        C.push((u + w) / t.height),
                                        C.push((i + c) / t.height);
                                    var Q = Math.max.apply(Math, C);
                                    Q > 1 && (n /= Q,
                                        u /= Q,
                                        o /= Q,
                                        i /= Q,
                                        B /= Q,
                                        c /= Q,
                                        g /= Q,
                                        w /= Q);
                                    var F = t.width - o
                                        , d = t.height - c
                                        , h = t.width - B
                                        , f = t.height - w
                                        , p = e.borderTopWidth
                                        , U = e.borderRightWidth
                                        , D = e.borderBottomWidth
                                        , E = e.borderLeftWidth
                                        , m = Xt(e.paddingTop, A.bounds.width)
                                        , y = Xt(e.paddingRight, A.bounds.width)
                                        , H = Xt(e.paddingBottom, A.bounds.width)
                                        , v = Xt(e.paddingLeft, A.bounds.width);
                                    this.topLeftBorderDoubleOuterBox = n > 0 || u > 0 ? Hi(t.left + E / 3, t.top + p / 3, n - E / 3, u - p / 3, Zo.TOP_LEFT) : new Ui(t.left + E / 3, t.top + p / 3),
                                        this.topRightBorderDoubleOuterBox = n > 0 || u > 0 ? Hi(t.left + F, t.top + p / 3, o - U / 3, i - p / 3, Zo.TOP_RIGHT) : new Ui(t.left + t.width - U / 3, t.top + p / 3),
                                        this.bottomRightBorderDoubleOuterBox = B > 0 || c > 0 ? Hi(t.left + h, t.top + d, B - U / 3, c - D / 3, Zo.BOTTOM_RIGHT) : new Ui(t.left + t.width - U / 3, t.top + t.height - D / 3),
                                        this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? Hi(t.left + E / 3, t.top + f, g - E / 3, w - D / 3, Zo.BOTTOM_LEFT) : new Ui(t.left + E / 3, t.top + t.height - D / 3),
                                        this.topLeftBorderDoubleInnerBox = n > 0 || u > 0 ? Hi(t.left + 2 * E / 3, t.top + 2 * p / 3, n - 2 * E / 3, u - 2 * p / 3, Zo.TOP_LEFT) : new Ui(t.left + 2 * E / 3, t.top + 2 * p / 3),
                                        this.topRightBorderDoubleInnerBox = n > 0 || u > 0 ? Hi(t.left + F, t.top + 2 * p / 3, o - 2 * U / 3, i - 2 * p / 3, Zo.TOP_RIGHT) : new Ui(t.left + t.width - 2 * U / 3, t.top + 2 * p / 3),
                                        this.bottomRightBorderDoubleInnerBox = B > 0 || c > 0 ? Hi(t.left + h, t.top + d, B - 2 * U / 3, c - 2 * D / 3, Zo.BOTTOM_RIGHT) : new Ui(t.left + t.width - 2 * U / 3, t.top + t.height - 2 * D / 3),
                                        this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? Hi(t.left + 2 * E / 3, t.top + f, g - 2 * E / 3, w - 2 * D / 3, Zo.BOTTOM_LEFT) : new Ui(t.left + 2 * E / 3, t.top + t.height - 2 * D / 3),
                                        this.topLeftBorderStroke = n > 0 || u > 0 ? Hi(t.left + E / 2, t.top + p / 2, n - E / 2, u - p / 2, Zo.TOP_LEFT) : new Ui(t.left + E / 2, t.top + p / 2),
                                        this.topRightBorderStroke = n > 0 || u > 0 ? Hi(t.left + F, t.top + p / 2, o - U / 2, i - p / 2, Zo.TOP_RIGHT) : new Ui(t.left + t.width - U / 2, t.top + p / 2),
                                        this.bottomRightBorderStroke = B > 0 || c > 0 ? Hi(t.left + h, t.top + d, B - U / 2, c - D / 2, Zo.BOTTOM_RIGHT) : new Ui(t.left + t.width - U / 2, t.top + t.height - D / 2),
                                        this.bottomLeftBorderStroke = g > 0 || w > 0 ? Hi(t.left + E / 2, t.top + f, g - E / 2, w - D / 2, Zo.BOTTOM_LEFT) : new Ui(t.left + E / 2, t.top + t.height - D / 2),
                                        this.topLeftBorderBox = n > 0 || u > 0 ? Hi(t.left, t.top, n, u, Zo.TOP_LEFT) : new Ui(t.left, t.top),
                                        this.topRightBorderBox = o > 0 || i > 0 ? Hi(t.left + F, t.top, o, i, Zo.TOP_RIGHT) : new Ui(t.left + t.width, t.top),
                                        this.bottomRightBorderBox = B > 0 || c > 0 ? Hi(t.left + h, t.top + d, B, c, Zo.BOTTOM_RIGHT) : new Ui(t.left + t.width, t.top + t.height),
                                        this.bottomLeftBorderBox = g > 0 || w > 0 ? Hi(t.left, t.top + f, g, w, Zo.BOTTOM_LEFT) : new Ui(t.left, t.top + t.height),
                                        this.topLeftPaddingBox = n > 0 || u > 0 ? Hi(t.left + E, t.top + p, Math.max(0, n - E), Math.max(0, u - p), Zo.TOP_LEFT) : new Ui(t.left + E, t.top + p),
                                        this.topRightPaddingBox = o > 0 || i > 0 ? Hi(t.left + Math.min(F, t.width - U), t.top + p, F > t.width + U ? 0 : Math.max(0, o - U), Math.max(0, i - p), Zo.TOP_RIGHT) : new Ui(t.left + t.width - U, t.top + p),
                                        this.bottomRightPaddingBox = B > 0 || c > 0 ? Hi(t.left + Math.min(h, t.width - E), t.top + Math.min(d, t.height - D), Math.max(0, B - U), Math.max(0, c - D), Zo.BOTTOM_RIGHT) : new Ui(t.left + t.width - U, t.top + t.height - D),
                                        this.bottomLeftPaddingBox = g > 0 || w > 0 ? Hi(t.left + E, t.top + Math.min(f, t.height - D), Math.max(0, g - E), Math.max(0, w - D), Zo.BOTTOM_LEFT) : new Ui(t.left + E, t.top + t.height - D),
                                        this.topLeftContentBox = n > 0 || u > 0 ? Hi(t.left + E + v, t.top + p + m, Math.max(0, n - (E + v)), Math.max(0, u - (p + m)), Zo.TOP_LEFT) : new Ui(t.left + E + v, t.top + p + m),
                                        this.topRightContentBox = o > 0 || i > 0 ? Hi(t.left + Math.min(F, t.width + E + v), t.top + p + m, F > t.width + E + v ? 0 : o - E + v, i - (p + m), Zo.TOP_RIGHT) : new Ui(t.left + t.width - (U + y), t.top + p + m),
                                        this.bottomRightContentBox = B > 0 || c > 0 ? Hi(t.left + Math.min(h, t.width - (E + v)), t.top + Math.min(d, t.height + p + m), Math.max(0, B - (U + y)), c - (D + H), Zo.BOTTOM_RIGHT) : new Ui(t.left + t.width - (U + y), t.top + t.height - (D + H)),
                                        this.bottomLeftContentBox = g > 0 || w > 0 ? Hi(t.left + E + v, t.top + f, Math.max(0, g - (E + v)), w - (D + H), Zo.BOTTOM_LEFT) : new Ui(t.left + E + v, t.top + t.height - (D + H))
                                }

                                return A
                            }();
                        !function (A) {
                            A[A.TOP_LEFT = 0] = "TOP_LEFT",
                                A[A.TOP_RIGHT = 1] = "TOP_RIGHT",
                                A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
                                A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
                        }(Zo || (Zo = {}));
                        var Hi = function (A, e, t, r, n) {
                            var u = (Math.sqrt(2) - 1) / 3 * 4
                                , s = t * u
                                , o = r * u
                                , i = A + t
                                , a = e + r;
                            switch (n) {
                                case Zo.TOP_LEFT:
                                    return new Ei(new Ui(A, a), new Ui(A, a - o), new Ui(i - s, e), new Ui(i, e));
                                case Zo.TOP_RIGHT:
                                    return new Ei(new Ui(A, e), new Ui(A + s, e), new Ui(i, a - o), new Ui(i, a));
                                case Zo.BOTTOM_RIGHT:
                                    return new Ei(new Ui(i, e), new Ui(i, e + o), new Ui(A + s, a), new Ui(A, a));
                                case Zo.BOTTOM_LEFT:
                                default:
                                    return new Ei(new Ui(i, a), new Ui(i - s, a), new Ui(A, e + o), new Ui(A, e))
                            }
                        }
                            , vi = function (A) {
                            return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
                        }
                            , bi = function (A) {
                            return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
                        }
                            , Ii = function (A) {
                            return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
                        }
                            , Ki = function () {
                            function A(A, e, t) {
                                this.offsetX = A,
                                    this.offsetY = e,
                                    this.matrix = t,
                                    this.type = 0,
                                    this.target = 6
                            }

                            return A
                        }()
                            , Li = function () {
                            function A(A, e) {
                                this.path = A,
                                    this.target = e,
                                    this.type = 1
                            }

                            return A
                        }()
                            , xi = function () {
                            function A(A) {
                                this.opacity = A,
                                    this.type = 2,
                                    this.target = 6
                            }

                            return A
                        }()
                            , Si = function (A) {
                            return 0 === A.type
                        }
                            , Ti = function (A) {
                            return 1 === A.type
                        }
                            , Oi = function (A) {
                            return 2 === A.type
                        }
                            , Mi = function (A, e) {
                            return A.length === e.length && A.some((function (A, t) {
                                    return A === e[t]
                                }
                            ))
                        }
                            , Vi = function (A, e, t, r, n) {
                            return A.map((function (A, u) {
                                    switch (u) {
                                        case 0:
                                            return A.add(e, t);
                                        case 1:
                                            return A.add(e + r, t);
                                        case 2:
                                            return A.add(e + r, t + n);
                                        case 3:
                                            return A.add(e, t + n)
                                    }
                                    return A
                                }
                            ))
                        }
                            , ki = function () {
                            function A(A) {
                                this.element = A,
                                    this.inlineLevel = [],
                                    this.nonInlineLevel = [],
                                    this.negativeZIndex = [],
                                    this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
                                    this.positiveZIndex = [],
                                    this.nonPositionedFloats = [],
                                    this.nonPositionedInlineLevel = []
                            }

                            return A
                        }()
                            , Gi = function () {
                            function A(A, e) {
                                if (this.container = A,
                                    this.parent = e,
                                    this.effects = [],
                                    this.curves = new yi(this.container),
                                this.container.styles.opacity < 1 && this.effects.push(new xi(this.container.styles.opacity)),
                                null !== this.container.styles.transform) {
                                    var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number
                                        ,
                                        r = this.container.bounds.top + this.container.styles.transformOrigin[1].number
                                        , n = this.container.styles.transform;
                                    this.effects.push(new Ki(t, r, n))
                                }
                                if (0 !== this.container.styles.overflowX) {
                                    var u = vi(this.curves)
                                        , s = Ii(this.curves);
                                    Mi(u, s) ? this.effects.push(new Li(u, 6)) : (this.effects.push(new Li(u, 2)),
                                        this.effects.push(new Li(s, 4)))
                                }
                            }

                            return A.prototype.getEffects = function (A) {
                                for (var e = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, r = this.effects.slice(0); t;) {
                                    var n = t.effects.filter((function (A) {
                                            return !Ti(A)
                                        }
                                    ));
                                    if (e || 0 !== t.container.styles.position || !t.parent) {
                                        if (r.unshift.apply(r, n),
                                            e = -1 === [2, 3].indexOf(t.container.styles.position),
                                        0 !== t.container.styles.overflowX) {
                                            var u = vi(t.curves)
                                                , s = Ii(t.curves);
                                            Mi(u, s) || r.unshift(new Li(s, 6))
                                        }
                                    } else
                                        r.unshift.apply(r, n);
                                    t = t.parent
                                }
                                return r.filter((function (e) {
                                        return nu(e.target, A)
                                    }
                                ))
                            }
                                ,
                                A
                        }()
                            , Ni = function (A, e, t, r) {
                            A.container.elements.forEach((function (n) {
                                    var u = nu(n.flags, 4)
                                        , s = nu(n.flags, 2)
                                        , o = new Gi(n, A);
                                    nu(n.styles.display, 2048) && r.push(o);
                                    var i = nu(n.flags, 8) ? [] : r;
                                    if (u || s) {
                                        var a = u || n.styles.isPositioned() ? t : e
                                            , B = new ki(o);
                                        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
                                            var c = n.styles.zIndex.order;
                                            if (c < 0) {
                                                var l = 0;
                                                a.negativeZIndex.some((function (A, e) {
                                                        return c > A.element.container.styles.zIndex.order ? (l = e,
                                                            !1) : l > 0
                                                    }
                                                )),
                                                    a.negativeZIndex.splice(l, 0, B)
                                            } else if (c > 0) {
                                                var g = 0;
                                                a.positiveZIndex.some((function (A, e) {
                                                        return c >= A.element.container.styles.zIndex.order ? (g = e + 1,
                                                            !1) : g > 0
                                                    }
                                                )),
                                                    a.positiveZIndex.splice(g, 0, B)
                                            } else
                                                a.zeroOrAutoZIndexOrTransformedOrOpacity.push(B)
                                        } else
                                            n.styles.isFloating() ? a.nonPositionedFloats.push(B) : a.nonPositionedInlineLevel.push(B);
                                        Ni(o, B, u ? B : t, i)
                                    } else
                                        n.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o),
                                            Ni(o, e, t, i);
                                    nu(n.flags, 8) && Ri(n, i)
                                }
                            ))
                        }
                            , Ri = function (A, e) {
                            for (var t = A instanceof Rs ? A.start : 1, r = A instanceof Rs && A.reversed, n = 0; n < e.length; n++) {
                                var u = e[n];
                                u.container instanceof Ns && "number" == typeof u.container.value && 0 !== u.container.value && (t = u.container.value),
                                    u.listValue = Xo(t, u.container.styles.listStyleType, !0),
                                    t += r ? -1 : 1
                            }
                        }
                            , Pi = function (A) {
                            var e = new Gi(A, null)
                                , t = new ki(e)
                                , r = [];
                            return Ni(e, t, t, r),
                                Ri(e.container, r),
                                t
                        }
                            , qi = function (A, e) {
                            switch (e) {
                                case 0:
                                    return Zi(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                                case 1:
                                    return Zi(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                                case 2:
                                    return Zi(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                                default:
                                    return Zi(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                            }
                        }
                            , Ji = function (A, e) {
                            switch (e) {
                                case 0:
                                    return Zi(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                                case 1:
                                    return Zi(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                                case 2:
                                    return Zi(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                                default:
                                    return Zi(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                            }
                        }
                            , Xi = function (A, e) {
                            switch (e) {
                                case 0:
                                    return Zi(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                                case 1:
                                    return Zi(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                                case 2:
                                    return Zi(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                                default:
                                    return Zi(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                            }
                        }
                            , Yi = function (A, e) {
                            switch (e) {
                                case 0:
                                    return Wi(A.topLeftBorderStroke, A.topRightBorderStroke);
                                case 1:
                                    return Wi(A.topRightBorderStroke, A.bottomRightBorderStroke);
                                case 2:
                                    return Wi(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                                default:
                                    return Wi(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                            }
                        }
                            , Wi = function (A, e) {
                            var t = [];
                            return mi(A) ? t.push(A.subdivide(.5, !1)) : t.push(A),
                                mi(e) ? t.push(e.subdivide(.5, !0)) : t.push(e),
                                t
                        }
                            , Zi = function (A, e, t, r) {
                            var n = [];
                            return mi(A) ? n.push(A.subdivide(.5, !1)) : n.push(A),
                                mi(t) ? n.push(t.subdivide(.5, !0)) : n.push(t),
                                mi(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r),
                                mi(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e),
                                n
                        }
                            , _i = function (A) {
                            var e = A.bounds
                                , t = A.styles;
                            return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
                        }
                            , ji = function (A) {
                            var e = A.styles
                                , t = A.bounds
                                , r = Xt(e.paddingLeft, t.width)
                                , n = Xt(e.paddingRight, t.width)
                                , u = Xt(e.paddingTop, t.width)
                                , s = Xt(e.paddingBottom, t.width);
                            return t.add(r + e.borderLeftWidth, u + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + u + s))
                        }
                            , zi = function (A, e) {
                            return 0 === A ? e.bounds : 2 === A ? ji(e) : _i(e)
                        }
                            , $i = function (A, e) {
                            return 0 === A ? e.bounds : 2 === A ? ji(e) : _i(e)
                        }
                            , Aa = function (A, e, t) {
                            var r = zi(na(A.styles.backgroundOrigin, e), A)
                                , n = $i(na(A.styles.backgroundClip, e), A)
                                , u = ra(na(A.styles.backgroundSize, e), t, r)
                                , s = u[0]
                                , o = u[1]
                                , i = Jt(na(A.styles.backgroundPosition, e), r.width - s, r.height - o);
                            return [ua(na(A.styles.backgroundRepeat, e), i, u, r, n), Math.round(r.left + i[0]), Math.round(r.top + i[1]), s, o]
                        }
                            , ea = function (A) {
                            return Lt(A) && A.value === Tr.AUTO
                        }
                            , ta = function (A) {
                            return "number" == typeof A
                        }
                            , ra = function (A, e, t) {
                            var r = e[0]
                                , n = e[1]
                                , u = e[2]
                                , s = A[0]
                                , o = A[1];
                            if (!s)
                                return [0, 0];
                            if (Gt(s) && o && Gt(o))
                                return [Xt(s, t.width), Xt(o, t.height)];
                            var i = ta(u);
                            if (Lt(s) && (s.value === Tr.CONTAIN || s.value === Tr.COVER))
                                return ta(u) ? t.width / t.height < u != (s.value === Tr.COVER) ? [t.width, t.width / u] : [t.height * u, t.height] : [t.width, t.height];
                            var a = ta(r)
                                , B = ta(n)
                                , c = a || B;
                            if (ea(s) && (!o || ea(o)))
                                return a && B ? [r, n] : i || c ? c && i ? [a ? r : n * u, B ? n : r / u] : [a ? r : t.width, B ? n : t.height] : [t.width, t.height];
                            if (i) {
                                var l = 0
                                    , g = 0;
                                return Gt(s) ? l = Xt(s, t.width) : Gt(o) && (g = Xt(o, t.height)),
                                    ea(s) ? l = g * u : o && !ea(o) || (g = l / u),
                                    [l, g]
                            }
                            var w = null
                                , C = null;
                            if (Gt(s) ? w = Xt(s, t.width) : o && Gt(o) && (C = Xt(o, t.height)),
                            null === w || o && !ea(o) || (C = a && B ? w / r * n : t.height),
                            null !== C && ea(s) && (w = a && B ? C / n * r : t.width),
                            null !== w && null !== C)
                                return [w, C];
                            throw new Error("Unable to calculate background-size for element")
                        }
                            , na = function (A, e) {
                            var t = A[e];
                            return void 0 === t ? A[0] : t
                        }
                            , ua = function (A, e, t, r, n) {
                            var u = e[0]
                                , s = e[1]
                                , o = t[0]
                                , i = t[1];
                            switch (A) {
                                case 2:
                                    return [new Ui(Math.round(r.left), Math.round(r.top + s)), new Ui(Math.round(r.left + r.width), Math.round(r.top + s)), new Ui(Math.round(r.left + r.width), Math.round(i + r.top + s)), new Ui(Math.round(r.left), Math.round(i + r.top + s))];
                                case 3:
                                    return [new Ui(Math.round(r.left + u), Math.round(r.top)), new Ui(Math.round(r.left + u + o), Math.round(r.top)), new Ui(Math.round(r.left + u + o), Math.round(r.height + r.top)), new Ui(Math.round(r.left + u), Math.round(r.height + r.top))];
                                case 1:
                                    return [new Ui(Math.round(r.left + u), Math.round(r.top + s)), new Ui(Math.round(r.left + u + o), Math.round(r.top + s)), new Ui(Math.round(r.left + u + o), Math.round(r.top + s + i)), new Ui(Math.round(r.left + u), Math.round(r.top + s + i))];
                                default:
                                    return [new Ui(Math.round(n.left), Math.round(n.top)), new Ui(Math.round(n.left + n.width), Math.round(n.top)), new Ui(Math.round(n.left + n.width), Math.round(n.height + n.top)), new Ui(Math.round(n.left), Math.round(n.height + n.top))]
                            }
                        }
                            , sa = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            , oa = "Hidden Text"
                            , ia = function () {
                            function A(A) {
                                this._data = {},
                                    this._document = A
                            }

                            return A.prototype.parseMetrics = function (A, e) {
                                var t = this._document.createElement("div")
                                    , r = this._document.createElement("img")
                                    , n = this._document.createElement("span")
                                    , u = this._document.body;
                                t.style.visibility = "hidden",
                                    t.style.fontFamily = A,
                                    t.style.fontSize = e,
                                    t.style.margin = "0",
                                    t.style.padding = "0",
                                    t.style.whiteSpace = "nowrap",
                                    u.appendChild(t),
                                    r.src = sa,
                                    r.width = 1,
                                    r.height = 1,
                                    r.style.margin = "0",
                                    r.style.padding = "0",
                                    r.style.verticalAlign = "baseline",
                                    n.style.fontFamily = A,
                                    n.style.fontSize = e,
                                    n.style.margin = "0",
                                    n.style.padding = "0",
                                    n.appendChild(this._document.createTextNode(oa)),
                                    t.appendChild(n),
                                    t.appendChild(r);
                                var s = r.offsetTop - n.offsetTop + 2;
                                t.removeChild(n),
                                    t.appendChild(this._document.createTextNode(oa)),
                                    t.style.lineHeight = "normal",
                                    r.style.verticalAlign = "super";
                                var o = r.offsetTop - t.offsetTop + 2;
                                return u.removeChild(t),
                                    {
                                        baseline: s,
                                        middle: o
                                    }
                            }
                                ,
                                A.prototype.getMetrics = function (A, e) {
                                    var t = A + " " + e;
                                    return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
                                        this._data[t]
                                }
                                ,
                                A
                        }()
                            , aa = function () {
                            function A(A, e) {
                                this.context = A,
                                    this.options = e
                            }

                            return A
                        }()
                            , Ba = 1e4
                            , ca = function (A) {
                            function t(e, t) {
                                var r = A.call(this, e, t) || this;
                                return r._activeEffects = [],
                                    r.canvas = t.canvas ? t.canvas : document.createElement("canvas"),
                                    r.ctx = r.canvas.getContext("2d"),
                                t.canvas || (r.canvas.width = Math.floor(t.width * t.scale),
                                    r.canvas.height = Math.floor(t.height * t.scale),
                                    r.canvas.style.width = t.width + "px",
                                    r.canvas.style.height = t.height + "px"),
                                    r.fontMetrics = new ia(document),
                                    r.ctx.scale(r.options.scale, r.options.scale),
                                    r.ctx.translate(-t.x, -t.y),
                                    r.ctx.textBaseline = "bottom",
                                    r._activeEffects = [],
                                    r.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale),
                                    r
                            }

                            return e(t, A),
                                t.prototype.applyEffects = function (A) {
                                    for (var e = this; this._activeEffects.length;)
                                        this.popEffect();
                                    A.forEach((function (A) {
                                            return e.applyEffect(A)
                                        }
                                    ))
                                }
                                ,
                                t.prototype.applyEffect = function (A) {
                                    this.ctx.save(),
                                    Oi(A) && (this.ctx.globalAlpha = A.opacity),
                                    Si(A) && (this.ctx.translate(A.offsetX, A.offsetY),
                                        this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]),
                                        this.ctx.translate(-A.offsetX, -A.offsetY)),
                                    Ti(A) && (this.path(A.path),
                                        this.ctx.clip()),
                                        this._activeEffects.push(A)
                                }
                                ,
                                t.prototype.popEffect = function () {
                                    this._activeEffects.pop(),
                                        this.ctx.restore()
                                }
                                ,
                                t.prototype.renderStack = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            return n(this, (function (e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                                                        case 1:
                                                            e.sent(),
                                                                e.label = 2;
                                                        case 2:
                                                            return [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderNode = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            return n(this, (function (e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return nu(A.container.flags, 16),
                                                                A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                                                        case 1:
                                                            return e.sent(),
                                                                [4, this.renderNodeContent(A)];
                                                        case 2:
                                                            e.sent(),
                                                                e.label = 3;
                                                        case 3:
                                                            return [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderTextWithLetterSpacing = function (A, e, t) {
                                    var r = this;
                                    0 === e ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t) : bs(A.text).reduce((function (e, n) {
                                            return r.ctx.fillText(n, e, A.bounds.top + t),
                                            e + r.ctx.measureText(n).width
                                        }
                                    ), A.bounds.left)
                                }
                                ,
                                t.prototype.createFontStyle = function (A) {
                                    var e = A.fontVariant.filter((function (A) {
                                                return "normal" === A || "small-caps" === A
                                            }
                                        )).join("")
                                        , t = Qa(A.fontFamily).join(", ")
                                        ,
                                        r = It(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                                    return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r]
                                }
                                ,
                                t.prototype.renderTextNode = function (A, e) {
                                    return r(this, void 0, void 0, (function () {
                                            var t, r, u, s, o, i, a, B, c = this;
                                            return n(this, (function (n) {
                                                    return t = this.createFontStyle(e),
                                                        r = t[0],
                                                        u = t[1],
                                                        s = t[2],
                                                        this.ctx.font = r,
                                                        this.ctx.direction = 1 === e.direction ? "rtl" : "ltr",
                                                        this.ctx.textAlign = "left",
                                                        this.ctx.textBaseline = "alphabetic",
                                                        o = this.fontMetrics.getMetrics(u, s),
                                                        i = o.baseline,
                                                        a = o.middle,
                                                        B = e.paintOrder,
                                                        A.textBounds.forEach((function (A) {
                                                                B.forEach((function (t) {
                                                                        switch (t) {
                                                                            case 0:
                                                                                c.ctx.fillStyle = rr(e.color),
                                                                                    c.renderTextWithLetterSpacing(A, e.letterSpacing, i);
                                                                                var r = e.textShadow;
                                                                                r.length && A.text.trim().length && (r.slice(0).reverse().forEach((function (t) {
                                                                                        c.ctx.shadowColor = rr(t.color),
                                                                                            c.ctx.shadowOffsetX = t.offsetX.number * c.options.scale,
                                                                                            c.ctx.shadowOffsetY = t.offsetY.number * c.options.scale,
                                                                                            c.ctx.shadowBlur = t.blur.number,
                                                                                            c.renderTextWithLetterSpacing(A, e.letterSpacing, i)
                                                                                    }
                                                                                )),
                                                                                    c.ctx.shadowColor = "",
                                                                                    c.ctx.shadowOffsetX = 0,
                                                                                    c.ctx.shadowOffsetY = 0,
                                                                                    c.ctx.shadowBlur = 0),
                                                                                e.textDecorationLine.length && (c.ctx.fillStyle = rr(e.textDecorationColor || e.color),
                                                                                    e.textDecorationLine.forEach((function (e) {
                                                                                            switch (e) {
                                                                                                case 1:
                                                                                                    c.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + i), A.bounds.width, 1);
                                                                                                    break;
                                                                                                case 2:
                                                                                                    c.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                                                                                    break;
                                                                                                case 3:
                                                                                                    c.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + a), A.bounds.width, 1)
                                                                                            }
                                                                                        }
                                                                                    )));
                                                                                break;
                                                                            case 1:
                                                                                e.webkitTextStrokeWidth && A.text.trim().length && (c.ctx.strokeStyle = rr(e.webkitTextStrokeColor),
                                                                                    c.ctx.lineWidth = e.webkitTextStrokeWidth,
                                                                                    c.ctx.lineJoin = window.chrome ? "miter" : "round",
                                                                                    c.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + i)),
                                                                                    c.ctx.strokeStyle = "",
                                                                                    c.ctx.lineWidth = 0,
                                                                                    c.ctx.lineJoin = "miter"
                                                                        }
                                                                    }
                                                                ))
                                                            }
                                                        )),
                                                        [2]
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderReplacedElement = function (A, e, t) {
                                    if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                                        var r = ji(A)
                                            , n = Ii(e);
                                        this.path(n),
                                            this.ctx.save(),
                                            this.ctx.clip(),
                                            this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height),
                                            this.ctx.restore()
                                    }
                                }
                                ,
                                t.prototype.renderNodeContent = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            var e, r, u, o, i, a, B, c, l, g, w, C, Q, F, d, h, f, p;
                                            return n(this, (function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            this.applyEffects(A.getEffects(4)),
                                                                e = A.container,
                                                                r = A.curves,
                                                                u = e.styles,
                                                                o = 0,
                                                                i = e.textNodes,
                                                                n.label = 1;
                                                        case 1:
                                                            return o < i.length ? (a = i[o],
                                                                [4, this.renderTextNode(a, u)]) : [3, 4];
                                                        case 2:
                                                            n.sent(),
                                                                n.label = 3;
                                                        case 3:
                                                            return o++,
                                                                [3, 1];
                                                        case 4:
                                                            if (!(e instanceof Vs))
                                                                return [3, 8];
                                                            n.label = 5;
                                                        case 5:
                                                            return n.trys.push([5, 7, , 8]),
                                                                [4, this.context.cache.match(e.src)];
                                                        case 6:
                                                            return d = n.sent(),
                                                                this.renderReplacedElement(e, r, d),
                                                                [3, 8];
                                                        case 7:
                                                            return n.sent(),
                                                                this.context.logger.error("Error loading image " + e.src),
                                                                [3, 8];
                                                        case 8:
                                                            if (e instanceof ks && this.renderReplacedElement(e, r, e.canvas),
                                                                !(e instanceof Gs))
                                                                return [3, 12];
                                                            n.label = 9;
                                                        case 9:
                                                            return n.trys.push([9, 11, , 12]),
                                                                [4, this.context.cache.match(e.svg)];
                                                        case 10:
                                                            return d = n.sent(),
                                                                this.renderReplacedElement(e, r, d),
                                                                [3, 12];
                                                        case 11:
                                                            return n.sent(),
                                                                this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)),
                                                                [3, 12];
                                                        case 12:
                                                            return e instanceof Ao && e.tree ? [4, new t(this.context, {
                                                                scale: this.options.scale,
                                                                backgroundColor: e.backgroundColor,
                                                                x: 0,
                                                                y: 0,
                                                                width: e.width,
                                                                height: e.height
                                                            }).render(e.tree)] : [3, 14];
                                                        case 13:
                                                            B = n.sent(),
                                                            e.width && e.height && this.ctx.drawImage(B, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height),
                                                                n.label = 14;
                                                        case 14:
                                                            if (e instanceof js && (c = Math.min(e.bounds.width, e.bounds.height),
                                                                e.type === Ys ? e.checked && (this.ctx.save(),
                                                                    this.path([new Ui(e.bounds.left + .39363 * c, e.bounds.top + .79 * c), new Ui(e.bounds.left + .16 * c, e.bounds.top + .5549 * c), new Ui(e.bounds.left + .27347 * c, e.bounds.top + .44071 * c), new Ui(e.bounds.left + .39694 * c, e.bounds.top + .5649 * c), new Ui(e.bounds.left + .72983 * c, e.bounds.top + .23 * c), new Ui(e.bounds.left + .84 * c, e.bounds.top + .34085 * c), new Ui(e.bounds.left + .39363 * c, e.bounds.top + .79 * c)]),
                                                                    this.ctx.fillStyle = rr(_s),
                                                                    this.ctx.fill(),
                                                                    this.ctx.restore()) : e.type === Ws && e.checked && (this.ctx.save(),
                                                                    this.ctx.beginPath(),
                                                                    this.ctx.arc(e.bounds.left + c / 2, e.bounds.top + c / 2, c / 4, 0, 2 * Math.PI, !0),
                                                                    this.ctx.fillStyle = rr(_s),
                                                                    this.ctx.fill(),
                                                                    this.ctx.restore())),
                                                            la(e) && e.value.length) {
                                                                switch (l = this.createFontStyle(u),
                                                                    f = l[0],
                                                                    g = l[1],
                                                                    w = this.fontMetrics.getMetrics(f, g).baseline,
                                                                    this.ctx.font = f,
                                                                    this.ctx.fillStyle = rr(u.color),
                                                                    this.ctx.textBaseline = "alphabetic",
                                                                    this.ctx.textAlign = wa(e.styles.textAlign),
                                                                    p = ji(e),
                                                                    C = 0,
                                                                    e.styles.textAlign) {
                                                                    case 1:
                                                                        C += p.width / 2;
                                                                        break;
                                                                    case 2:
                                                                        C += p.width
                                                                }
                                                                Q = p.add(C, 0, 0, -p.height / 2 + 1),
                                                                    this.ctx.save(),
                                                                    this.path([new Ui(p.left, p.top), new Ui(p.left + p.width, p.top), new Ui(p.left + p.width, p.top + p.height), new Ui(p.left, p.top + p.height)]),
                                                                    this.ctx.clip(),
                                                                    this.renderTextWithLetterSpacing(new ms(e.value, Q), u.letterSpacing, w),
                                                                    this.ctx.restore(),
                                                                    this.ctx.textBaseline = "alphabetic",
                                                                    this.ctx.textAlign = "left"
                                                            }
                                                            if (!nu(e.styles.display, 2048))
                                                                return [3, 20];
                                                            if (null === e.styles.listStyleImage)
                                                                return [3, 19];
                                                            if (0 !== (F = e.styles.listStyleImage).type)
                                                                return [3, 18];
                                                            d = void 0,
                                                                h = F.url,
                                                                n.label = 15;
                                                        case 15:
                                                            return n.trys.push([15, 17, , 18]),
                                                                [4, this.context.cache.match(h)];
                                                        case 16:
                                                            return d = n.sent(),
                                                                this.ctx.drawImage(d, e.bounds.left - (d.width + 10), e.bounds.top),
                                                                [3, 18];
                                                        case 17:
                                                            return n.sent(),
                                                                this.context.logger.error("Error loading list-style-image " + h),
                                                                [3, 18];
                                                        case 18:
                                                            return [3, 20];
                                                        case 19:
                                                            A.listValue && -1 !== e.styles.listStyleType && (f = this.createFontStyle(u)[0],
                                                                this.ctx.font = f,
                                                                this.ctx.fillStyle = rr(u.color),
                                                                this.ctx.textBaseline = "middle",
                                                                this.ctx.textAlign = "right",
                                                                p = new s(e.bounds.left, e.bounds.top + Xt(e.styles.paddingTop, e.bounds.width), e.bounds.width, pn(u.lineHeight, u.fontSize.number) / 2 + 1),
                                                                this.renderTextWithLetterSpacing(new ms(A.listValue, p), u.letterSpacing, pn(u.lineHeight, u.fontSize.number) / 2 + 2),
                                                                this.ctx.textBaseline = "bottom",
                                                                this.ctx.textAlign = "left"),
                                                                n.label = 20;
                                                        case 20:
                                                            return [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderStackContent = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            var e, t, r, u, s, o, i, a, B, c, l, g, w, C, Q;
                                            return n(this, (function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return nu(A.element.container.flags, 16),
                                                                [4, this.renderNodeBackgroundAndBorders(A.element)];
                                                        case 1:
                                                            n.sent(),
                                                                e = 0,
                                                                t = A.negativeZIndex,
                                                                n.label = 2;
                                                        case 2:
                                                            return e < t.length ? (Q = t[e],
                                                                [4, this.renderStack(Q)]) : [3, 5];
                                                        case 3:
                                                            n.sent(),
                                                                n.label = 4;
                                                        case 4:
                                                            return e++,
                                                                [3, 2];
                                                        case 5:
                                                            return [4, this.renderNodeContent(A.element)];
                                                        case 6:
                                                            n.sent(),
                                                                r = 0,
                                                                u = A.nonInlineLevel,
                                                                n.label = 7;
                                                        case 7:
                                                            return r < u.length ? (Q = u[r],
                                                                [4, this.renderNode(Q)]) : [3, 10];
                                                        case 8:
                                                            n.sent(),
                                                                n.label = 9;
                                                        case 9:
                                                            return r++,
                                                                [3, 7];
                                                        case 10:
                                                            s = 0,
                                                                o = A.nonPositionedFloats,
                                                                n.label = 11;
                                                        case 11:
                                                            return s < o.length ? (Q = o[s],
                                                                [4, this.renderStack(Q)]) : [3, 14];
                                                        case 12:
                                                            n.sent(),
                                                                n.label = 13;
                                                        case 13:
                                                            return s++,
                                                                [3, 11];
                                                        case 14:
                                                            i = 0,
                                                                a = A.nonPositionedInlineLevel,
                                                                n.label = 15;
                                                        case 15:
                                                            return i < a.length ? (Q = a[i],
                                                                [4, this.renderStack(Q)]) : [3, 18];
                                                        case 16:
                                                            n.sent(),
                                                                n.label = 17;
                                                        case 17:
                                                            return i++,
                                                                [3, 15];
                                                        case 18:
                                                            B = 0,
                                                                c = A.inlineLevel,
                                                                n.label = 19;
                                                        case 19:
                                                            return B < c.length ? (Q = c[B],
                                                                [4, this.renderNode(Q)]) : [3, 22];
                                                        case 20:
                                                            n.sent(),
                                                                n.label = 21;
                                                        case 21:
                                                            return B++,
                                                                [3, 19];
                                                        case 22:
                                                            l = 0,
                                                                g = A.zeroOrAutoZIndexOrTransformedOrOpacity,
                                                                n.label = 23;
                                                        case 23:
                                                            return l < g.length ? (Q = g[l],
                                                                [4, this.renderStack(Q)]) : [3, 26];
                                                        case 24:
                                                            n.sent(),
                                                                n.label = 25;
                                                        case 25:
                                                            return l++,
                                                                [3, 23];
                                                        case 26:
                                                            w = 0,
                                                                C = A.positiveZIndex,
                                                                n.label = 27;
                                                        case 27:
                                                            return w < C.length ? (Q = C[w],
                                                                [4, this.renderStack(Q)]) : [3, 30];
                                                        case 28:
                                                            n.sent(),
                                                                n.label = 29;
                                                        case 29:
                                                            return w++,
                                                                [3, 27];
                                                        case 30:
                                                            return [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.mask = function (A) {
                                    this.ctx.beginPath(),
                                        this.ctx.moveTo(0, 0),
                                        this.ctx.lineTo(this.canvas.width, 0),
                                        this.ctx.lineTo(this.canvas.width, this.canvas.height),
                                        this.ctx.lineTo(0, this.canvas.height),
                                        this.ctx.lineTo(0, 0),
                                        this.formatPath(A.slice(0).reverse()),
                                        this.ctx.closePath()
                                }
                                ,
                                t.prototype.path = function (A) {
                                    this.ctx.beginPath(),
                                        this.formatPath(A),
                                        this.ctx.closePath()
                                }
                                ,
                                t.prototype.formatPath = function (A) {
                                    var e = this;
                                    A.forEach((function (A, t) {
                                            var r = mi(A) ? A.start : A;
                                            0 === t ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y),
                                            mi(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderRepeat = function (A, e, t, r) {
                                    this.path(A),
                                        this.ctx.fillStyle = e,
                                        this.ctx.translate(t, r),
                                        this.ctx.fill(),
                                        this.ctx.translate(-t, -r)
                                }
                                ,
                                t.prototype.resizeImage = function (A, e, t) {
                                    var r;
                                    if (A.width === e && A.height === t)
                                        return A;
                                    var n = (null !== (r = this.canvas.ownerDocument) && void 0 !== r ? r : document).createElement("canvas");
                                    return n.width = Math.max(1, e),
                                        n.height = Math.max(1, t),
                                        n.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
                                        n
                                }
                                ,
                                t.prototype.renderBackgroundImage = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            var e, t, r, u, s, o;
                                            return n(this, (function (i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            e = A.styles.backgroundImage.length - 1,
                                                                t = function (t) {
                                                                    var u, s, o, i, a, B, c, l, g, w, C, Q, F, d, h, f,
                                                                        p, U, D, E, m, y, H, v, b, I, K, L, x, S, T;
                                                                    return n(this, (function (n) {
                                                                            switch (n.label) {
                                                                                case 0:
                                                                                    if (0 !== t.type)
                                                                                        return [3, 5];
                                                                                    u = void 0,
                                                                                        s = t.url,
                                                                                        n.label = 1;
                                                                                case 1:
                                                                                    return n.trys.push([1, 3, , 4]),
                                                                                        [4, r.context.cache.match(s)];
                                                                                case 2:
                                                                                    return u = n.sent(),
                                                                                        [3, 4];
                                                                                case 3:
                                                                                    return n.sent(),
                                                                                        r.context.logger.error("Error loading background-image " + s),
                                                                                        [3, 4];
                                                                                case 4:
                                                                                    return u && (o = Aa(A, e, [u.width, u.height, u.width / u.height]),
                                                                                        f = o[0],
                                                                                        y = o[1],
                                                                                        H = o[2],
                                                                                        D = o[3],
                                                                                        E = o[4],
                                                                                        d = r.ctx.createPattern(r.resizeImage(u, D, E), "repeat"),
                                                                                        r.renderRepeat(f, d, y, H)),
                                                                                        [3, 6];
                                                                                case 5:
                                                                                    Kr(t) ? (i = Aa(A, e, [null, null, null]),
                                                                                        f = i[0],
                                                                                        y = i[1],
                                                                                        H = i[2],
                                                                                        D = i[3],
                                                                                        E = i[4],
                                                                                        a = Fr(t.angle, D, E),
                                                                                        B = a[0],
                                                                                        c = a[1],
                                                                                        l = a[2],
                                                                                        g = a[3],
                                                                                        w = a[4],
                                                                                        (C = document.createElement("canvas")).width = D,
                                                                                        C.height = E,
                                                                                        Q = C.getContext("2d"),
                                                                                        F = Q.createLinearGradient(c, g, l, w),
                                                                                        Cr(t.stops, B).forEach((function (A) {
                                                                                                return F.addColorStop(A.stop, rr(A.color))
                                                                                            }
                                                                                        )),
                                                                                        Q.fillStyle = F,
                                                                                        Q.fillRect(0, 0, D, E),
                                                                                    D > 0 && E > 0 && (d = r.ctx.createPattern(C, "repeat"),
                                                                                        r.renderRepeat(f, d, y, H))) : Lr(t) && (h = Aa(A, e, [null, null, null]),
                                                                                        f = h[0],
                                                                                        p = h[1],
                                                                                        U = h[2],
                                                                                        D = h[3],
                                                                                        E = h[4],
                                                                                        m = 0 === t.position.length ? [Pt] : t.position,
                                                                                        y = Xt(m[0], D),
                                                                                        H = Xt(m[m.length - 1], E),
                                                                                        v = fr(t, y, H, D, E),
                                                                                        b = v[0],
                                                                                        I = v[1],
                                                                                    b > 0 && I > 0 && (K = r.ctx.createRadialGradient(p + y, U + H, 0, p + y, U + H, b),
                                                                                        Cr(t.stops, 2 * b).forEach((function (A) {
                                                                                                return K.addColorStop(A.stop, rr(A.color))
                                                                                            }
                                                                                        )),
                                                                                        r.path(f),
                                                                                        r.ctx.fillStyle = K,
                                                                                        b !== I ? (L = A.bounds.left + .5 * A.bounds.width,
                                                                                            x = A.bounds.top + .5 * A.bounds.height,
                                                                                            T = 1 / (S = I / b),
                                                                                            r.ctx.save(),
                                                                                            r.ctx.translate(L, x),
                                                                                            r.ctx.transform(1, 0, 0, S, 0, 0),
                                                                                            r.ctx.translate(-L, -x),
                                                                                            r.ctx.fillRect(p, T * (U - x) + x, D, E * T),
                                                                                            r.ctx.restore()) : r.ctx.fill())),
                                                                                        n.label = 6;
                                                                                case 6:
                                                                                    return e--,
                                                                                        [2]
                                                                            }
                                                                        }
                                                                    ))
                                                                }
                                                                ,
                                                                r = this,
                                                                u = 0,
                                                                s = A.styles.backgroundImage.slice(0).reverse(),
                                                                i.label = 1;
                                                        case 1:
                                                            return u < s.length ? (o = s[u],
                                                                [5, t(o)]) : [3, 4];
                                                        case 2:
                                                            i.sent(),
                                                                i.label = 3;
                                                        case 3:
                                                            return u++,
                                                                [3, 1];
                                                        case 4:
                                                            return [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderSolidBorder = function (A, e, t) {
                                    return r(this, void 0, void 0, (function () {
                                            return n(this, (function (r) {
                                                    return this.path(qi(t, e)),
                                                        this.ctx.fillStyle = rr(A),
                                                        this.ctx.fill(),
                                                        [2]
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderDoubleBorder = function (A, e, t, u) {
                                    return r(this, void 0, void 0, (function () {
                                            var r, s;
                                            return n(this, (function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return e < 3 ? [4, this.renderSolidBorder(A, t, u)] : [3, 2];
                                                        case 1:
                                                            return n.sent(),
                                                                [2];
                                                        case 2:
                                                            return r = Ji(u, t),
                                                                this.path(r),
                                                                this.ctx.fillStyle = rr(A),
                                                                this.ctx.fill(),
                                                                s = Xi(u, t),
                                                                this.path(s),
                                                                this.ctx.fill(),
                                                                [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderNodeBackgroundAndBorders = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            var e, t, r, u, s, o, i, a, B = this;
                                            return n(this, (function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return this.applyEffects(A.getEffects(2)),
                                                                e = A.container.styles,
                                                                t = !tr(e.backgroundColor) || e.backgroundImage.length,
                                                                r = [{
                                                                    style: e.borderTopStyle,
                                                                    color: e.borderTopColor,
                                                                    width: e.borderTopWidth
                                                                }, {
                                                                    style: e.borderRightStyle,
                                                                    color: e.borderRightColor,
                                                                    width: e.borderRightWidth
                                                                }, {
                                                                    style: e.borderBottomStyle,
                                                                    color: e.borderBottomColor,
                                                                    width: e.borderBottomWidth
                                                                }, {
                                                                    style: e.borderLeftStyle,
                                                                    color: e.borderLeftColor,
                                                                    width: e.borderLeftWidth
                                                                }],
                                                                u = ga(na(e.backgroundClip, 0), A.curves),
                                                                t || e.boxShadow.length ? (this.ctx.save(),
                                                                    this.path(u),
                                                                    this.ctx.clip(),
                                                                tr(e.backgroundColor) || (this.ctx.fillStyle = rr(e.backgroundColor),
                                                                    this.ctx.fill()),
                                                                    [4, this.renderBackgroundImage(A.container)]) : [3, 2];
                                                        case 1:
                                                            n.sent(),
                                                                this.ctx.restore(),
                                                                e.boxShadow.slice(0).reverse().forEach((function (e) {
                                                                        B.ctx.save();
                                                                        var t = vi(A.curves)
                                                                            , r = e.inset ? 0 : Ba
                                                                            ,
                                                                            n = Vi(t, -r + (e.inset ? 1 : -1) * e.spread.number, (e.inset ? 1 : -1) * e.spread.number, e.spread.number * (e.inset ? -2 : 2), e.spread.number * (e.inset ? -2 : 2));
                                                                        e.inset ? (B.path(t),
                                                                            B.ctx.clip(),
                                                                            B.mask(n)) : (B.mask(t),
                                                                            B.ctx.clip(),
                                                                            B.path(n)),
                                                                            B.ctx.shadowOffsetX = e.offsetX.number + r,
                                                                            B.ctx.shadowOffsetY = e.offsetY.number,
                                                                            B.ctx.shadowColor = rr(e.color),
                                                                            B.ctx.shadowBlur = e.blur.number,
                                                                            B.ctx.fillStyle = e.inset ? rr(e.color) : "rgba(0,0,0,1)",
                                                                            B.ctx.fill(),
                                                                            B.ctx.restore()
                                                                    }
                                                                )),
                                                                n.label = 2;
                                                        case 2:
                                                            s = 0,
                                                                o = 0,
                                                                i = r,
                                                                n.label = 3;
                                                        case 3:
                                                            return o < i.length ? 0 !== (a = i[o]).style && !tr(a.color) && a.width > 0 ? 2 !== a.style ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, s, A.curves, 2)] : [3, 11] : [3, 13];
                                                        case 4:
                                                            return n.sent(),
                                                                [3, 11];
                                                        case 5:
                                                            return 3 !== a.style ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, s, A.curves, 3)];
                                                        case 6:
                                                            return n.sent(),
                                                                [3, 11];
                                                        case 7:
                                                            return 4 !== a.style ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, s, A.curves)];
                                                        case 8:
                                                            return n.sent(),
                                                                [3, 11];
                                                        case 9:
                                                            return [4, this.renderSolidBorder(a.color, s, A.curves)];
                                                        case 10:
                                                            n.sent(),
                                                                n.label = 11;
                                                        case 11:
                                                            s++,
                                                                n.label = 12;
                                                        case 12:
                                                            return o++,
                                                                [3, 3];
                                                        case 13:
                                                            return [2]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.renderDashedDottedBorder = function (A, e, t, u, s) {
                                    return r(this, void 0, void 0, (function () {
                                            var r, o, i, a, B, c, l, g, w, C, Q, F, d, h, f, p;
                                            return n(this, (function (n) {
                                                    return this.ctx.save(),
                                                        r = Yi(u, t),
                                                        o = qi(u, t),
                                                    2 === s && (this.path(o),
                                                        this.ctx.clip()),
                                                        mi(o[0]) ? (i = o[0].start.x,
                                                            a = o[0].start.y) : (i = o[0].x,
                                                            a = o[0].y),
                                                        mi(o[1]) ? (B = o[1].end.x,
                                                            c = o[1].end.y) : (B = o[1].x,
                                                            c = o[1].y),
                                                        l = 0 === t || 2 === t ? Math.abs(i - B) : Math.abs(a - c),
                                                        this.ctx.beginPath(),
                                                        3 === s ? this.formatPath(r) : this.formatPath(o.slice(0, 2)),
                                                        g = e < 3 ? 3 * e : 2 * e,
                                                        w = e < 3 ? 2 * e : e,
                                                    3 === s && (g = e,
                                                        w = e),
                                                        C = !0,
                                                        l <= 2 * g ? C = !1 : l <= 2 * g + w ? (g *= Q = l / (2 * g + w),
                                                            w *= Q) : (F = Math.floor((l + w) / (g + w)),
                                                            d = (l - F * g) / (F - 1),
                                                            w = (h = (l - (F + 1) * g) / F) <= 0 || Math.abs(w - d) < Math.abs(w - h) ? d : h),
                                                    C && (3 === s ? this.ctx.setLineDash([0, g + w]) : this.ctx.setLineDash([g, w])),
                                                        3 === s ? (this.ctx.lineCap = "round",
                                                            this.ctx.lineWidth = e) : this.ctx.lineWidth = 2 * e + 1.1,
                                                        this.ctx.strokeStyle = rr(A),
                                                        this.ctx.stroke(),
                                                        this.ctx.setLineDash([]),
                                                    2 === s && (mi(o[0]) && (f = o[3],
                                                        p = o[0],
                                                        this.ctx.beginPath(),
                                                        this.formatPath([new Ui(f.end.x, f.end.y), new Ui(p.start.x, p.start.y)]),
                                                        this.ctx.stroke()),
                                                    mi(o[1]) && (f = o[1],
                                                        p = o[2],
                                                        this.ctx.beginPath(),
                                                        this.formatPath([new Ui(f.end.x, f.end.y), new Ui(p.start.x, p.start.y)]),
                                                        this.ctx.stroke())),
                                                        this.ctx.restore(),
                                                        [2]
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t.prototype.render = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            var e;
                                            return n(this, (function (t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return this.options.backgroundColor && (this.ctx.fillStyle = rr(this.options.backgroundColor),
                                                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                                                                e = Pi(A),
                                                                [4, this.renderStack(e)];
                                                        case 1:
                                                            return t.sent(),
                                                                this.applyEffects([]),
                                                                [2, this.canvas]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t
                        }(aa)
                            , la = function (A) {
                            return A instanceof $s || A instanceof zs || A instanceof js && A.type !== Ws && A.type !== Ys
                        }
                            , ga = function (A, e) {
                            switch (A) {
                                case 0:
                                    return vi(e);
                                case 2:
                                    return bi(e);
                                default:
                                    return Ii(e)
                            }
                        }
                            , wa = function (A) {
                            switch (A) {
                                case 1:
                                    return "center";
                                case 2:
                                    return "right";
                                default:
                                    return "left"
                            }
                        }
                            , Ca = ["-apple-system", "system-ui"]
                            , Qa = function (A) {
                            return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter((function (A) {
                                    return -1 === Ca.indexOf(A)
                                }
                            )) : A
                        }
                            , Fa = function (A) {
                            function t(e, t) {
                                var r = A.call(this, e, t) || this;
                                return r.canvas = t.canvas ? t.canvas : document.createElement("canvas"),
                                    r.ctx = r.canvas.getContext("2d"),
                                    r.options = t,
                                    r.canvas.width = Math.floor(t.width * t.scale),
                                    r.canvas.height = Math.floor(t.height * t.scale),
                                    r.canvas.style.width = t.width + "px",
                                    r.canvas.style.height = t.height + "px",
                                    r.ctx.scale(r.options.scale, r.options.scale),
                                    r.ctx.translate(-t.x, -t.y),
                                    r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale),
                                    r
                            }

                            return e(t, A),
                                t.prototype.render = function (A) {
                                    return r(this, void 0, void 0, (function () {
                                            var e, t;
                                            return n(this, (function (r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return e = Us(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A),
                                                                [4, da(e)];
                                                        case 1:
                                                            return t = r.sent(),
                                                            this.options.backgroundColor && (this.ctx.fillStyle = rr(this.options.backgroundColor),
                                                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                                                this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                                                [2, this.canvas]
                                                    }
                                                }
                                            ))
                                        }
                                    ))
                                }
                                ,
                                t
                        }(aa)
                            , da = function (A) {
                            return new Promise((function (e, t) {
                                    var r = new Image;
                                    r.onload = function () {
                                        e(r)
                                    }
                                        ,
                                        r.onerror = t,
                                        r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                                }
                            ))
                        }
                            , ha = function () {
                            function A(A) {
                                var e = A.id
                                    , t = A.enabled;
                                this.id = e,
                                    this.enabled = t,
                                    this.start = Date.now()
                            }

                            return A.prototype.debug = function () {
                                for (var A = [], e = 0; e < arguments.length; e++)
                                    A[e] = arguments[e];
                                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, u([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                            }
                                ,
                                A.prototype.getTime = function () {
                                    return Date.now() - this.start
                                }
                                ,
                                A.prototype.info = function () {
                                    for (var A = [], e = 0; e < arguments.length; e++)
                                        A[e] = arguments[e];
                                    this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, u([this.id, this.getTime() + "ms"], A))
                                }
                                ,
                                A.prototype.warn = function () {
                                    for (var A = [], e = 0; e < arguments.length; e++)
                                        A[e] = arguments[e];
                                    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, u([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                                }
                                ,
                                A.prototype.error = function () {
                                    for (var A = [], e = 0; e < arguments.length; e++)
                                        A[e] = arguments[e];
                                    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, u([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                                }
                                ,
                                A.instances = {},
                                A
                        }()
                            , fa = function () {
                            function A(e, t) {
                                var r;
                                this.windowBounds = t,
                                    this.instanceName = "#" + A.instanceCount++,
                                    this.logger = new ha({
                                        id: this.instanceName,
                                        enabled: e.logging
                                    }),
                                    this.cache = null !== (r = e.cache) && void 0 !== r ? r : new gi(this, e)
                            }

                            return A.instanceCount = 1,
                                A
                        }()
                            , pa = function (A, e) {
                            return void 0 === e && (e = {}),
                                Ua(A, e)
                        };
                        "undefined" != typeof window && li.setContext(window);
                        var Ua = function (A, e) {
                            return r(void 0, void 0, void 0, (function () {
                                    var r, u, a, B, c, l, g, w, C, Q, F, d, h, f, p, U, D, E, m, y, H, v, b, I, K, L, x,
                                        S, T, O, M, V, k, G, N, R, P, q;
                                    return n(this, (function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    if (!A || "object" != typeof A)
                                                        return [2, Promise.reject("Invalid element provided as first argument")];
                                                    if (!(r = A.ownerDocument))
                                                        throw new Error("Element is not attached to a Document");
                                                    if (!(u = r.defaultView))
                                                        throw new Error("Document is not attached to a Window");
                                                    return a = {
                                                        allowTaint: null !== (v = e.allowTaint) && void 0 !== v && v,
                                                        imageTimeout: null !== (b = e.imageTimeout) && void 0 !== b ? b : 15e3,
                                                        proxy: e.proxy,
                                                        useCORS: null !== (I = e.useCORS) && void 0 !== I && I
                                                    },
                                                        B = t({
                                                            logging: null === (K = e.logging) || void 0 === K || K,
                                                            cache: e.cache
                                                        }, a),
                                                        c = {
                                                            windowWidth: null !== (L = e.windowWidth) && void 0 !== L ? L : u.innerWidth,
                                                            windowHeight: null !== (x = e.windowHeight) && void 0 !== x ? x : u.innerHeight,
                                                            scrollX: null !== (S = e.scrollX) && void 0 !== S ? S : u.pageXOffset,
                                                            scrollY: null !== (T = e.scrollY) && void 0 !== T ? T : u.pageYOffset
                                                        },
                                                        l = new s(c.scrollX, c.scrollY, c.windowWidth, c.windowHeight),
                                                        g = new fa(B, l),
                                                        w = null !== (O = e.foreignObjectRendering) && void 0 !== O && O,
                                                        C = {
                                                            allowTaint: null !== (M = e.allowTaint) && void 0 !== M && M,
                                                            onclone: e.onclone,
                                                            ignoreElements: e.ignoreElements,
                                                            inlineImages: w,
                                                            copyStyles: w
                                                        },
                                                        g.logger.debug("Starting document clone with size " + l.width + "x" + l.height + " scrolled to " + -l.left + "," + -l.top),
                                                        Q = new Wo(g, A, C),
                                                        (F = Q.clonedReferenceElement) ? [4, Q.toIFrame(r, l)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                                                case 1:
                                                    return d = n.sent(),
                                                        h = Qo(F) || wo(F) ? i(F.ownerDocument) : o(g, F),
                                                        f = h.width,
                                                        p = h.height,
                                                        U = h.left,
                                                        D = h.top,
                                                        E = Da(g, F, e.backgroundColor),
                                                        m = {
                                                            canvas: e.canvas,
                                                            backgroundColor: E,
                                                            scale: null !== (k = null !== (V = e.scale) && void 0 !== V ? V : u.devicePixelRatio) && void 0 !== k ? k : 1,
                                                            x: (null !== (G = e.x) && void 0 !== G ? G : 0) + U,
                                                            y: (null !== (N = e.y) && void 0 !== N ? N : 0) + D,
                                                            width: null !== (R = e.width) && void 0 !== R ? R : Math.ceil(f),
                                                            height: null !== (P = e.height) && void 0 !== P ? P : Math.ceil(p)
                                                        },
                                                        w ? (g.logger.debug("Document cloned, using foreign object rendering"),
                                                            [4, new Fa(g, m).render(F)]) : [3, 3];
                                                case 2:
                                                    return y = n.sent(),
                                                        [3, 5];
                                                case 3:
                                                    return g.logger.debug("Document cloned, element located at " + U + "," + D + " with size " + f + "x" + p + " using computed rendering"),
                                                        g.logger.debug("Starting DOM parsing"),
                                                        H = no(g, F),
                                                    E === H.styles.backgroundColor && (H.styles.backgroundColor = cr.TRANSPARENT),
                                                        g.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height),
                                                        [4, new ca(g, m).render(H)];
                                                case 4:
                                                    y = n.sent(),
                                                        n.label = 5;
                                                case 5:
                                                    return (null === (q = e.removeContainer) || void 0 === q || q) && (Wo.destroy(d) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                                                        g.logger.debug("Finished rendering"),
                                                        [2, y]
                                            }
                                        }
                                    ))
                                }
                            ))
                        }
                            , Da = function (A, e, t) {
                            var r = e.ownerDocument
                                ,
                                n = r.documentElement ? Br(A, getComputedStyle(r.documentElement).backgroundColor) : cr.TRANSPARENT
                                , u = r.body ? Br(A, getComputedStyle(r.body).backgroundColor) : cr.TRANSPARENT
                                , s = "string" == typeof t ? Br(A, t) : null === t ? cr.TRANSPARENT : 4294967295;
                            return e === r.documentElement ? tr(n) ? tr(u) ? s : u : n : s
                        };
                        return pa
                    }()
                },
                8422: function () {
                }
            }, t = {};

            function r(A) {
                var n = t[A];
                if (void 0 !== n)
                    return n.exports;
                var u = t[A] = {
                    id: A,
                    loaded: !1,
                    exports: {}
                };
                return e[A].call(u.exports, u, u.exports, r),
                    u.loaded = !0,
                    u.exports
            }

            r.m = e,
                A = [],
                r.O = function (e, t, n, u) {
                    if (!t) {
                        var s = 1 / 0;
                        for (B = 0; B < A.length; B++) {
                            t = A[B][0],
                                n = A[B][1],
                                u = A[B][2];
                            for (var o = !0, i = 0; i < t.length; i++)
                                (!1 & u || s >= u) && Object.keys(r.O).every((function (A) {
                                        return r.O[A](t[i])
                                    }
                                )) ? t.splice(i--, 1) : (o = !1,
                                u < s && (s = u));
                            if (o) {
                                A.splice(B--, 1);
                                var a = n();
                                void 0 !== a && (e = a)
                            }
                        }
                        return e
                    }
                    u = u || 0;
                    for (var B = A.length; B > 0 && A[B - 1][2] > u; B--)
                        A[B] = A[B - 1];
                    A[B] = [t, n, u]
                }
                ,
                r.n = function (A) {
                    var e = A && A.__esModule ? function () {
                                return A.default
                            }
                            : function () {
                                return A
                            }
                    ;
                    return r.d(e, {
                        a: e
                    }),
                        e
                }
                ,
                r.d = function (A, e) {
                    for (var t in e)
                        r.o(e, t) && !r.o(A, t) && Object.defineProperty(A, t, {
                            enumerable: !0,
                            get: e[t]
                        })
                }
                ,
                r.g = function () {
                    if ("object" == typeof globalThis)
                        return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (A) {
                        if ("object" == typeof window)
                            return window
                    }
                }(),
                r.o = function (A, e) {
                    return Object.prototype.hasOwnProperty.call(A, e)
                }
                ,
                r.r = function (A) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
                        value: "Module"
                    }),
                        Object.defineProperty(A, "__esModule", {
                            value: !0
                        })
                }
                ,
                r.nmd = function (A) {
                    return A.paths = [],
                    A.children || (A.children = []),
                        A
                }
                ,
                function () {
                    var A = {
                        216: 0
                    };
                    r.O.j = function (e) {
                        return 0 === A[e]
                    }
                    ;
                    var e = function (e, t) {
                        var n, u, s = t[0], o = t[1], i = t[2], a = 0;
                        if (s.some((function (e) {
                                return 0 !== A[e]
                            }
                        ))) {
                            for (n in o)
                                r.o(o, n) && (r.m[n] = o[n]);
                            if (i)
                                var B = i(r)
                        }
                        for (e && e(t); a < s.length; a++)
                            u = s[a],
                            r.o(A, u) && A[u] && A[u][0](),
                                A[u] = 0;
                        return r.O(B)
                    }
                        , t = self.webpackChunk_KbbJS_ = self.webpackChunk_KbbJS_ || [];
                    t.forEach(e.bind(null, 0)),
                        t.push = e.bind(null, t.push.bind(t))
                }(),
                r(7187),
                r(8422),
                r(5594),
                r(1142),
                r(7484),
                r(1120);
            var n = r(9111);
            return n = r.O(n)
        }()
    }
));
/*
 * name : ui.js
 * desc : 공통 자바스크립트
 * writer : glim
 * create : 2021/11/12
 * update : 2022/05/12
 * -
 */

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

Element.prototype._getBoundingClientRect = Element.prototype.getBoundingClientRect
Element.prototype.getBoundingClientRect = function () {
    var rect = Element.prototype._getBoundingClientRect.call(this);
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}

var KyoboBookPub = KyoboBookPub || {};


$.widget("ui.selectmenu", $.ui.selectmenu, {
    calcMenuWidth: function () {
        var instance;
        instance = this;

        btnWidth = instance.button.outerWidth();
        menuWidth = instance.menuWrap.outerWidth();
        // console.log('calcMenuWidth', this, btnWidth, menuWidth);
        instance.menuWrap.css('width', btnWidth);
    }
});

// 상품 옵션 커스터마이징
$.widget('custom.selectProdOption', $.ui.selectmenu, {
    _renderItem: function (ul, item) {
        var li, wrapper, labelBox, priceBox, isPBProd;
        li = $('<li>');
        wrapper = $('<div>', {
            'class': 'prod_option',
        });

        if (item.disabled) {
            li.addClass('ui-state-disabled');
        }
        isPBProd = item.element.attr('data-prod-pb') !== undefined ? true : false;
        wrapper.data(item.element.data());

        labelBox = $('<span>', {
            'class': 'option_label_box',
            'text': item.label,
        });

        priceBox = $('<span>', {
            'class': 'option_price_box',
        });

        if (item.disabled && isPBProd) {
            $('<button>', {
                'class': 'btn_option_restock' + (isPBProd ? ' prod_pb' : ''),
                'text': '재입고알림',
            }).appendTo(priceBox);
        } else if (!item.disabled) {
            $('<span>', {
                'class': 'option_price' + (isPBProd ? ' prod_pb' : ''),
                'text': item.element.attr('data-price'),
            }).appendTo(priceBox);
            $('<span>', {
                'class': 'option_price_unit',
                'text': item.element.attr('data-unit'),
            }).appendTo(priceBox);
        }

        wrapper.append(labelBox).append(priceBox);
        return li.append(wrapper).appendTo(ul);
    }
});

KyoboBookPub.ink = (function () {
    var _front = {},
        _bodyMinWidth = 1440,
        _dialogCount = 0,
        _deviceWidth = 0,
        _deviceHeight = 0,
        _scrollLeft = 0,
        saveScrollLeft = 0,
        _scrollTop = 0,
        saveScrollTop = 0,
        _headerWrapper,
        _flyMenuEl,
        _floatingEl,
        _container,
        _btnGoTop,
        _loadingAni;

    /**
     * GNB 메뉴 엑티브 상태 이벤트 설정
     */
    function setGNB() {
        if (_headerWrapper === undefined) {
            return;
        }

        // console.log(_headerWrapper)
        var searchIp = $('.search_input_wrap');
        var anbWrap = $('.anb_wrap');
        var serviceMore = $('.gnb_sub_list .gnb_sub_item.more_service');
        var brandMore = $('.service_mall_list .service_mall_item.brand_more');
        var memberBenefitMore = $('.customer_service_list .customer_service_item.member_benefit');
        var autoCompleteLayer = $('.auto_complete_wrap', _headerWrapper);
        var saveScrollLeft = 0;
        var headerFixedOffset = 0;

        // header sps set
        if (_headerWrapper.hasClass('sps')) {
            _headerWrapper.attr('data-sps-offset', Math.round($('.gnb_wrap').offset()?.top || 0));
            headerFixedOffset = parseInt(_headerWrapper.attr('data-sps-offset'));

            $(window).off('scroll.uiGnb resize.uiGnb', headerScrollPosX).on('scroll.uiGnb resize.uiGnb', headerScrollPosX);

            function headerScrollPosX() {
                if (_scrollTop > headerFixedOffset) {
                    if (_bodyMinWidth > _deviceWidth && _deviceWidth > 0) {
                        _headerWrapper.css({
                            'transform': 'translateX(' + -_scrollLeft + 'px)'
                        });

                        saveScrollLeft = _scrollLeft;
                    }
                } else {
                    _headerWrapper.css({
                        'transform': ''
                    });
                }
            }
        }

        if (anbWrap.find('.anb_area .tab_wrap').length > 0) {
            // 서비스 전체보기 masonry 적용
            anbWrap.find('.anb_area .tab_wrap').on({
                'tabsactivate': function (event, ui) {
                    if ($(ui.newPanel).hasClass('anb_service')) {
                        var masonryContainer = $(ui.newPanel).find('.all_service_list');
                        var anbAllService = masonryContainer.masonry({
                            // options기
                            itemSelector: '.anb_service .all_service_list .all_service_item',
                            horizontalOrder: true,
                            transitionDuration: 0,
                            initLayout: false,
                        });

                        anbAllService.masonry();
                    }
                },
            });
        }

        // 통합검색 레이어창
        $('.btn_layer_close', autoCompleteLayer).on('click', function () {
            autoCompleteLayer.removeClass('active');
        });

        // 브랜드 리스트 height
        var brandMenu = $('.brand_more_list_box');
        var brandMenuHeight = 0;

        function setCalcBrandMenuHeight() {
            if (brandMenuHeight === 0) {
                $('.brand_more_list .brand_more_item', brandMenu).each(function (i) {
                    if (i % 2 === 0 && i < 10) {
                        brandMenuHeight += $(this).outerHeight(true);
                    }
                })

                brandMenu.height((brandMenuHeight));
            }
        }


        // 검색어 입력 시 검색창 x버튼(초기화버튼 노출)
        setSearchInput(searchIp, '.ip_gnb_search');

        // 서비스 더보기 on/off
        moreListToggle(serviceMore, serviceMore.find('.btn_more_service'));

        // 전체메뉴 on/off
        moreListToggle(anbWrap, anbWrap.find('.btn_anb'));

        // 브랜드 더보기 on/off
        moreListToggle(brandMore, brandMore.find('.btn_brand_more'), setCalcBrandMenuHeight);

        // 회원혜택 더보기 on/off
        moreListToggle(memberBenefitMore, memberBenefitMore.find('.btn_member_benefit'));

        // 커튼배너
        curtainBannerOnOff();

        function moreListToggle(container, tg, callback) {
            tg.on({
                'click': function () {
                    if (container.hasClass('active')) {
                        container.removeClass('active animated');
                    } else {
                        container.addClass('active');

                        setTimeout(function () {
                            container.addClass('animated');

                            if (callback != null && typeof callback === "function") {
                                callback.apply(null, [container]);
                            }
                        }, 30);
                    }
                },
            });
        }

        /* 수정 221006 커튼배너 1회 강제노출 (쿠키 사용) */

        /* 수정 221118 커튼배너 수정시 노출되도록 이미지src로 쿠키수정  (쿠키 사용) */
        function curtainBannerOnOff() {
            var curtainBanner = $('.curtain_banner_wrap');
            curtainBanner.find('.btn_curtain_expand').on('click', function () {
                curtainBanner.addClass('active');
            });

            curtainBanner.find('.btn_curtain_close').on('click', function () {
                curtainBanner.removeClass('active');
            });

            function getCookieVal(offset) {
                var endstr = document.cookie.indexOf(";", offset);
                if (endstr == -1)
                    endstr = document.cookie.length;
                return unescape(document.cookie.substring(offset, endstr));
            }

            function getCookie(name) {
                var arg = name + "=";
                var alen = arg.length;
                var clen = document.cookie.length;
                var i = 0;
                while (i < clen) {
                    var j = i + alen;
                    if (document.cookie.substring(i, j) == arg)
                        return getCookieVal(j);
                    i = document.cookie.indexOf(" ", i) + 1;
                    if (i == 0) break;
                }
                return null;
            }

            function setCookie(name, value, expiredays) {
                var todayDate = new Date();
                todayDate.setDate(todayDate.getDate() + expiredays);
                document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
            }

            const imgSrc = $('.curtain_banner_link img').attr('src')
            let chkText = ''
            if ($('.curtain_banner_link img').length > 0) {
                chkText = imgSrc.substring(imgSrc.lastIndexOf('/')).replace('/', '')
            }

            if ($('.wrapper').is('.welcome') && `${chkText}` !== '' && (getCookie('welBigBan') === null || getCookie('welBigBan') != `${chkText}`)) {
                curtainBanner.find('.btn_curtain_expand').trigger('click');
                var timer = setTimeout(function () {
                    curtainBanner.find('.btn_curtain_close').trigger('click');
                    timer = null;
                }, 3000);
                curtainBanner.find('.btn_curtain_expand').on('click', function () {
                    if (timer) clearTimeout(timer);
                });
                setCookie("welBigBan", `${chkText}`, 1);
            }
        }

        /* //수정 221006 커튼배너 1회 강제노출 (쿠키 사용) */
        /* //수정 221118 커튼배너 수정시 노출되도록 이미지src로 쿠키수정  (쿠키 사용) */


    }

    /**
     * 플라이 배너, 탑버튼 컨트롤
     */
    function setFloating() {
        if (_flyMenuEl.length <= 0 && _floatingEl.length <= 0) {
            return;
        }

        var headerFixedOffset = 0;
        if (!$('.wrapper').hasClass('member_login') && !$('.wrapper').hasClass('member_info') && !$('.wrapper').hasClass('member_kiosk') && !$('.wrapper').hasClass('member_kiosk_main')) {
            headerFixedOffset = Math.round($('.gnb_wrap').offset().top);

            if (_headerWrapper.hasClass('simple_header')) {
                headerFixedOffset = 80;
            }
            // 수정 220919 웰컴 위치조정(장운주 대리)
            if ($('.wrapper').hasClass('welcome')) {
                headerFixedOffset += 642;
            }
            // 윙배너 sps set
            _flyMenuEl.attr('data-sps-offset', headerFixedOffset);
        }

        setFloatingScrollPos();
        $(window).off('scroll.uiFloating resize.uiFloating', setFloatingScrollPos).on('scroll.uiFloating resize.uiFloating', setFloatingScrollPos);

        setFlyBannerEvtSwiper();

        function setFloatingScrollPos() {
            if (_scrollLeft < (_bodyMinWidth - _deviceWidth)) {
                _floatingEl.css('transform', 'translateX(' + ((_bodyMinWidth - _deviceWidth) - _scrollLeft) + 'px)');

                if (_scrollTop < headerFixedOffset) {
                    _flyMenuEl.css('transform', '');
                } else {
                    _flyMenuEl.add(_floatingEl).css('transform', 'translateX(' + ((_bodyMinWidth - _deviceWidth) - _scrollLeft) + 'px)');
                }
            } else {
                _flyMenuEl.add(_floatingEl).css('transform', '');
            }

            if (_headerWrapper.hasClass('sps')) {
                if (_headerWrapper.hasClass('sps-blw')) {
                    _btnGoTop.addClass('active');
                } else {
                    _btnGoTop.removeClass('active');
                }
            } else {
                if (_headerWrapper.height() < _scrollTop) {
                    _btnGoTop.addClass('active');
                } else {
                    _btnGoTop.removeClass('active');
                }
            }
        }

        function setFlyBannerEvtSwiper() {
            var flyEvtBanner = $('.fly_menu_wrapper .fly_event_banner');
            if ($('.swiper-slide', flyEvtBanner).length > 1) {
                var flyBannerEvtSwiper = new CustomSwiper($('.swiper-container', flyEvtBanner), {
                    slidesPerView: '1',
                    speed: 500,
                    navigation: {
                        nextEl: $('.swiper_control_box .swiper-button-next', flyEvtBanner)[0],
                        prevEl: $('.swiper_control_box .swiper-button-prev', flyEvtBanner)[0],
                    },
                    pagination: {
                        el: $('.swiper_control_box .swiper-pagination', flyEvtBanner)[0],
                        type: 'fraction',
                        formatFractionCurrent: function (number) {
                            return KyoboBookPub.ink.setPrependZero(number, 2);
                        },
                        formatFractionTotal: function (number) {
                            return KyoboBookPub.ink.setPrependZero(number, 2);
                        },
                    },
                });
            } else {
                $('.swiper_control_box', flyEvtBanner).remove();
            }
        }
    }

    /**
     * footer 패밀리 사이트 더보기
     */
    function setFamilySiteMore() {
        $('.btn_family_site').on('click', function () {
            if (!$('.family_site_box').hasClass('active')) {
                $('.family_site_box').addClass('active');

                setTimeout(function () {
                    $('.family_site_box').addClass('animated');
                }, 30);
            } else {
                $('.family_site_box').removeClass('active animated');
            }

        });
    }

    /**
     * 브래드크럼 메뉴 on/off
     */
    function setBreadCrumb() {
        $('.breadcrumb_item', '.breadcrumb_wrap').not('.no_sub').each(function () {
            $(this).on({
                'mouseenter focusin': function (event) {
                    var tg = $(this);
                    tg.siblings('.breadcrumb_item').removeClass('active');
                    tg.addClass('active');

                    setTimeout(function () {
                        tg.addClass('animated');
                    }, 30);
                },
                'mouseleave focusout': function (event) {
                    var item, that;
                    that = this;
                    item = $(that).closest('.breadcrumb_item');
                    setTimeout(function () {
                        if ($(item).find('a:focus').length < 1 && $(item).find('button:focus').length < 1) {
                            $(that).removeClass('active animated');
                        }
                    }, 50);
                },
            });
        });
    }

    /**
     * 검색창 input 입력 시 초기화 버튼 노출
     * @param wrap 컨테이너 DOM 셀렉터(default : .form_ip_search)
     * @param input input 셀렉터(default : .form_ip)
     * 한화면에서 동일 구조가 n개인 경우, 별도 처리 필요하므로 클래스명 각각 다르게 처리필요
     */
    function setSearchInput(wrap, input) {
        wrap = wrap || '.form_ip_search';
        input = input || '.form_ip';

        var searchWrap, searchIp, clearBtn;

        if ($(wrap).length > 0) {
            $(wrap).each(function () {
                searchWrap = $(this);
                searchIp = $(this).find(input);
                clearBtn = $(this).find('.btn_ip_clear');
                // console.log(searchIp);

                if (searchIp.length > 0) {
                    if (searchIp.val().length > 0) searchWrap.addClass('value');

                    clearBtn.off('click').on('click', function () {
                        searchWrap = $(this).closest(wrap);
                        searchWrap.find(input).val('').focus();
                        searchWrap.removeClass('value');

                    })

                    searchIp.data('placeholder', searchIp.attr('placeholder'));
                    searchIp.on({
                        'propertychange change input paste': function () {
                            searchWrap = $(this).closest(wrap);
                            if ($(this).val().length > 0) {
                                searchWrap.addClass('value');
                            } else {
                                searchWrap.removeClass('value');
                            }
                        },
                        'focusin': function () {
                            searchWrap = $(this).closest(wrap);

                            if (searchIp.hasClass('ip_gnb_search')) {
                                searchIp.attr('placeholder', '');
                            }

                            if (!searchWrap.hasClass('focus')) searchWrap.addClass('focus');
                        },
                        'focusout': function () {
                            searchWrap = $(this).closest(wrap);

                            if (searchIp.hasClass('ip_gnb_search')) {
                                searchIp.attr('placeholder', searchIp.data('placeholder'));
                            }

                            if (searchWrap.hasClass('focus')) searchWrap.removeClass('focus');
                        }
                    });
                }
            });

        }

    }

    /**
     * 커스텀 디자인 스크롤
     * @param container 컨테이너 DOM 셀렉터(default : .custom_scroll_wrap)
     */
    function setCustomScroll(container) {
        if (window.SimpleBar !== undefined) {
            var selector;
            SimpleBar.defaultOptions.autoHide = false;
            selector = container !== undefined ? container + ' .custom_scroll_wrap' : '.custom_scroll_wrap';

            $(selector).each(function (index) {
                if ($(this).closest('.dialog_contents').length === 0) {
                    setCustomScrollObj(this);
                }

                // var observer = new MutationObserver(function(mutations, observer) {
                // 	mutations.forEach(function(mutation) {
                // 		if(mutation.attributeName === 'style'){
                // 			target = mutation.target;
                // 			var scrollContWrap = $(target).closest('.custom_scroll_wrap');
                // 			var scrollCont = $(target).find('.custom_scroll_inner');
                // 			var currentHeight = scrollCont.height();
                //
                // 			if(scrollContWrap.height() < scrollCont.height()){
                // 				scrollContWrap.addClass('active');
                // 			} else{
                // 				scrollContWrap.removeClass('active');
                // 			}
                // 		}
                // 	});
                // });
                //
                // var config = { attributes: true, childList: true, characterData: true };
                //
                // if ($(scrollInner[0]).closest('.simplebar-content-wrapper')[0].getAttribute('style').match('overflow: hidden scroll')) {
                // 	$(this).addClass('active');
                // }
                // observer.observe($(scrollInner[0]).closest('.simplebar-content-wrapper')[0], config);

                // console.log(scrollInner[0]);
                // sensor = new ResizeSensor(scrollInner[0], function () {
                // 	simpleBar.recalculate();
                // });
                // this.sensor = sensor;
            });
        }
    }

    function setCustomScrollObj(target) {
        var simpleBar, options, child, scrollInner;
        child = $(target).children();
        $(target).prepend('<div class="custom_scroll_inner" tabIndex="0"></div>');
        scrollInner = $(target).find('.custom_scroll_inner');
        scrollInner.append(child);

        options = SimpleBar.getOptions(target);

        if ($(target).data('force')) {
            $(target).closest('.custom_scroll_wrap').addClass('active');
            options.forceVisible = 'y';
        }

        simpleBar = new SimpleBar(target, options);
        target.simpleBar = simpleBar;


        var observer = new MutationObserver(function (mutations, observer) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === 'style') {
                    target = mutation.target;
                    var scrollContWrap = $(target).closest('.custom_scroll_wrap');
                    var scrollCont = $(target).find('.custom_scroll_inner');
                    var currentHeight = scrollCont.height();

                    scrollCont.get(0).style.removeProperty('height');
                    if (scrollContWrap.height() < scrollCont.height()) {
                        scrollContWrap.addClass('active');
                    } else {
                        scrollCont.height(scrollContWrap.height());
                        scrollContWrap.removeClass('active');
                    }
                    updateChildComponent();
                }
            });
        });

        var config = {attributes: true, childList: true, characterData: true};

        // console.log($(scrollInner[0]).closest('.simplebar-content-wrapper')[0].getAttribute('style'));
        if ($(scrollInner[0]).closest('.simplebar-content-wrapper')[0].getAttribute('style').match('overflow: hidden scroll') !== null
            || $(scrollInner[0]).closest('.simplebar-content-wrapper')[0].getAttribute('style').match('-ms-overflow-y: scroll') !== null) {
            $(target).addClass('active');
            updateChildComponent();
        } else {

        }
        observer.observe($(scrollInner[0]).closest('.simplebar-content-wrapper')[0], config);

        $(target).off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function (event) {
            openSelectClose();
        });

        if ($(target).hasClass('horizontal')) {
            $(target).off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function (event) {
                var originEvent, delta, scrollElement;
                scrollElement = simpleBar.getScrollElement();

                originEvent = event.originalEvent;
                if (event.originalEvent.wheelDelta) {
                    delta = event.originalEvent.wheelDelta / 2;
                } else {
                    delta = -originEvent.detail * 20;
                }

                if ((scrollElement.scrollLeft -= delta) <= 0
                    || (scrollElement.getBoundingClientRect().width + scrollElement.scrollLeft - delta) >= scrollElement.scrollWidth) {
                    return;
                }

                event.preventDefault();
                scrollElement.scrollLeft -= delta;

            });
        }

        // 자식 컴포넌트 중 사이즈, 위치 등 업데이트가 필요 한 경우
        function updateChildComponent() {
            var uiSelect, spsElement;
            uiSelect = scrollInner.find('.form_sel select');
            spsElement = scrollInner.find('.custom_sps');
            // console.log(uiSelect);

            uiSelect.each(function () {
                var that;
                that = this;
                // console.log('updateChildComponent uiSelect');
                setTimeout(function () {
                    $(that).selectmenu('calcMenuWidth');
                }, 100);
            });

            spsElement.each(function () {
                var element = this;

                var observer = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        var isIntersecting;
                        isIntersecting = entry.isIntersecting;
                        if (isIntersecting) {
                            $(element).removeClass('sps-below').addClass('sps-abv');
                        } else {
                            // console.log('not intersecting');
                            if ($(element).offset().top - scrollInner.closest('.custom_scroll_wrap').offset().top < 0) {
                                $(element).removeClass('sps-abv').addClass('sps-below');
                            } else {
                                $(element).removeClass('sps-below').addClass('sps-abv');
                            }
                        }
                    });
                }, {
                    root: scrollInner.closest('.custom_scroll_wrap').get(0),
                    threshold: 1.0,
                });
                observer.observe(element);
            });
        }
    }

    /**
     * 테이블 캡션 생성
     */
    function setTableCaption() {
        $('table[class*="tbl_col"], table[class*="tbl_row"], table[class*="tbl_prod"], table[class*="tbl_spec_compare"]').each(function (index) {
            var table, tableClass, captionText, captionComplex, theadHeader, tbodyHeader, bodyToHeadIdxs, hasThead,
                captionSubFix;
            table = $(this);
            tableClass = $(this).attr('class');
            captionTextOrigin = $(this).find('caption').text();
            captionComplex = '';
            captionSubFix = '';
            theadHeader = [];
            tbodyHeader = [];
            bodyToHeadIdxs = [];
            hasThead = false;
            // 180123 수정 : match 값 수정
            if (tableClass.match('tbl-form') && tableClass.match('form-view') !== null) {
                /* console.log('has _ip!!'); */
                captionSubFix = '을(를) 입력하는 표입니다.';
            } else {
                /* console.log('no _ip!!'); */
                captionSubFix = '을(를) 나타낸 표입니다.';
            }


            // thead th값 추출
            if ($(this).find('thead th').length > 0) {
                $(this).find('thead th').each(function (index) {
                    theadHeader.push($(this).text());
                });
            }
            // tbody th값 추출
            if ($(this).find('tbody th').length > 0) {
                $(this).find('tbody th').each(function (index) {
                    // tbody th가 thead th의 서브 헤더인 경우(thead th와 tbody th가 둘 다 존재하는 경우)
                    if (theadHeader.length > 0) {
                        if (tbodyHeader[$(this).index()] === undefined) {
                            tbodyHeader[$(this).index()] = theadHeader[$(this).index()] + ' 컬럼의 하위로';
                        }
                        tbodyHeader[$(this).index()] += ' ' + $(this).text();
                    } else {
                        tbodyHeader.push($(this).text());
                    }
                });

                tbodyHeader = tbodyHeader.filter(function (n) {
                    return n !== undefined;
                });
            }
            // console.log(theadHeader);
            // console.log(tbodyHeader);

            if (theadHeader.length > 0 && tbodyHeader.length > 0) {
                captionComplex += theadHeader.join(', ') + ' ' + tbodyHeader.join(', ');
            } else if (theadHeader.length > 0) {
                captionComplex += theadHeader.join(', ');
            } else if (tbodyHeader.length > 0) {
                captionComplex += tbodyHeader.join(', ');
            }

            //console.log(captionTextOrigin + ' 목록이며 ' + captionComplex +  ' 을(를) 나타낸 표입니다.');
            $(this).find('caption').text(captionTextOrigin + ' 테이블로 ' + captionComplex + captionSubFix);
        });
    }

    /**
     * 별점 컴포넌트 생성
     */
    function setStarRating() {
        if ($('.form_rating').length <= 0) return false;

        $('.form_rating').each(function () {
            var that = $(this);

            that.rating({
                language: 'ko',
                theme: 'krajee-gly',
                clearCaption: '10점 중 0점<span class="val" aria-hidden="true">0</span><span class="total" aria-hidden="true">10</span></span>',
                stars: 4,
                min: 0,
                max: 10,
                step: 2.5,
                starCaptions: function (rating) {
                    var strCaption;
                    strCaption = '10점 중 ' + rating + '점';
                    if (that.data('caption') !== undefined) {
                        strCaption += '<span class="val" aria-hidden="true">' + rating + '</span>' + '<span class="total" aria-hidden="true">' + 10 + '</span>';
                    } else {
                        // return rating + ' / 10';
                    }
                    return strCaption;
                }
            });
            // that.on('rating:change', function(event, value, caption) {
            // 	console.log(`${value}/10`);
            // });

            if (that.data('caption') !== undefined) {
                that.prev('.rating-container').addClass('has_caption');
            }
        });
    }

    /**
     * 스크롤 동작시 해당 요소에 도달 시 엘리먼트 상단 고정(sps init)
     */
    function setSpsOffsetData(target) {
        /* 추가 221011 sps 실행 시점 변경 */
        if (setSpsOffsetData.count) {
            setSpsOffsetData.count++;
        } else {
            setSpsOffsetData.count = 1;
            if (window.ScrollPosStyler) {
                ScrollPosStyler.init({
                    classAbove: 'sps-abv',
                    classBelow: 'sps-blw',
                });
            }
        }
        var ignoreClassList = [];
        var spsElem;
        var headerH = $('.header_wrapper').hasClass('sps') || $('.header_wrapper').hasClass('fix_header') ? 80 : 0;

        target = target || '.sps';

        ignoreClassList = [
            // 'header_wrapper',
        ];

        spsElem = $(target, _container);

        // container_wrapper > sps 엘리먼트 타겟팅
        $(target, _container).each(function (index) {

            var that, isIgnore;
            that = this;
            isIgnore = ignoreClassList.some(function (element) {
                return $(that).hasClass(element);
            });
            if (!isIgnore) {
                spsElem.push(that);
            }
        });

        if (spsElem.length === 0) return false;

        spsElem.each(function (i) {
            var target = $(this);
            fixData(target);
            // heightChangeTarget.push(target.data('height-change'));

            if (i === spsElem.length - 1) {
                // ScrollPosStyler.init(); // 삭제 221004
                ScrollPosStyler.init(); // 수정 221011

                // 추가 221004 sps 실행 시점 변경
                // 삭제 221011 sps 실행 시점 변경
                // if (window.ScrollPosStyler) {
                // 	ScrollPosStyler.init({
                // 		classAbove: 'sps-abv',
                // 		classBelow: 'sps-blw',
                // 	});
                // }
            }
        });

        // heightChangeTarget.forEach(function (target, idx) {
        // 	var sensor = null;
        // 	sensor = new ResizeSensor( $('.' + target), function() {
        // 		fixData( $('.sps[data-height-change='+heightChangeTarget[idx]+']') );
        // 	});
        // });


        var sensor = null;
        sensor = new ResizeSensor(_container, function () {
            $('.sps[data-height-observe]').each(function (index) {
                // console.log('fixData');
                var that = this;
                setTimeout(function () {
                    fixData($(that));
                }, 100);
            })
        });

        // tab active 시, sps fixData 재계산
        $('.tab_wrap').on('tabsactivate', function (event, ui) {
            $(ui.newPanel).find('.sps').each(function () {
                fixData($(this));
            })
        });

        function fixData(tg) {
            var observerCont, addOfs, tgHeight;
            if (tg.find('.sps_observer').length === 0) {
                tg.append('<div class="sps_observer" style="top:' + tg.css('top') + ';"></div>');
            }

            // console.log('fixData', tg);

            observerCont = tg.find('.sps_observer');
            addOfs = (tg.data('add-offset') !== undefined && !isNaN(tg.data('add-offset'))) ? tg.data('add-offset') : 0;
            tgHeight = tg.outerHeight();

            if (tg.hasClass('sps_ofs_bottom')) {
                tg.attr('data-sps-offset', Math.round(observerCont.offset().top - headerH + tgHeight - addOfs));
                tg.data('sps-offset', Math.round(observerCont.offset().top - headerH + tgHeight - addOfs));
            } else {
                tg.attr('data-sps-offset', Math.round(observerCont.offset().top - headerH - tgHeight - addOfs));
                tg.data('sps-offset', Math.round(observerCont.offset().top - headerH - tgHeight - addOfs));
            }
            // console.log(tg.attr('data-sps-offset'));
            // console.log(observerCont.offset().top, headerH, tgHeight, addOfs);
        }
    }

    /**
     * fixed 컨텐츠 가로스크롤 시 left값 변경
     */
    function setFixedElementPosX() {
        var fixedDOMList, forceAddClassList, ignoreClassList;
        fixedDOMList = [];

        // sps를 가지지 않은 엘리먼트 중 추가할 class
        forceAddClassList = [
            'prod_detail_footer',
            'fix_header',
            'cart_top_wrap.sps-blw',
            'cart_info_wrap',
            'floating_event_wrapper', // 통합검색 플로팅 배너(SCR-BIZ03-04-P001)
            'wrapper .spec_compare_layer_wrap',
            'wrapper.member_kiosk .count_box', // 무인가입기 서브페이지 타이머 공통
            'event_sticky_banner', // 이벤트 플로팅 배너(SCR-BIZ04-01-P002)
            'burst_banner_wrap', // 베스트 마케팅 팝업(SCR-BIZ15-03-P002)
            'list_result_sps .sps_inner', // 전시 사은품(SCR-BIZ15-06-P001)
            'store_direction_wrap .scroll_fixed_target.scroll_fixed', // 매장안내(SCR-BIZ16-01-P001)
        ];

        // 제외할 class
        ignoreClassList = [
            'fly_menu_wrapper',
            'floating_wrapper',
            'tab_content',
        ];

        forceAddClassList.forEach(function (element) {
            // console.log(element);
            $('.' + element).each(function (index) {
                this.isForceTransformX = true;
                fixedDOMList.push(this);
            });
        });

        // sps.sps_scroll_fixed 가진 엘리먼트 중 ignoreClassList에 없는 경우 타겟팅
        $('.sps.sps_scroll_fixed').each(function (index) {
            var that, isIgnore;
            that = this;
            isIgnore = ignoreClassList.some(function (element) {
                return $(that).hasClass(element);
            });
            if (!isIgnore) {
                fixedDOMList.push(that);
            }
        });

        // 해상도 영역이 최소 넓이 값보다 작은 경우
        if (_bodyMinWidth > _deviceWidth && _deviceWidth > 0) {
            // 해상도 영역 작은 경우 : left 스크롤 변경시 작동
            if (saveScrollLeft !== _scrollLeft) {
                fixedDOMList.forEach(function (element) {
                    if (!$(element).hasClass('sps_scroll_fixed')) {
                        $(element).css({
                            'transform': 'translateX(' + -_scrollLeft + 'px)'
                        });
                    } else {
                        if ($(element).attr('data-sps-offset') <= _scrollTop) {
                            $(element).css({
                                'transform': 'translateX(' + -_scrollLeft + 'px)'
                            });
                        }
                    }

                });
                // 고정 컨텐츠 left change
                saveScrollLeft = _scrollLeft;
            }

            // 해상도 영역 작은 경우 : top 스크롤 변경시 작동
            if (saveScrollTop !== _scrollTop) {
                fixedDOMList.forEach(function (element) {
                    if ($(element).attr('data-sps-offset') <= _scrollTop && element.isForceTransformX) {
                        $(element).css({
                            'transform': 'translateX(' + -_scrollLeft + 'px)'
                        });
                        element.isForceTransformX = false;
                    } else if ($(element).attr('data-sps-offset') > _scrollTop && !element.isForceTransformX) {
                        element.isForceTransformX = true;
                    } else if ($(element).attr('data-sps-offset') > _scrollTop && element.isForceTransformX) {
                        $(element).css('transform', '');
                    }
                });

                saveScrollTop = _scrollTop;
            }


        }
    }

    /**
     * sps init
     */
    /* 삭제 221004 sps 실행 시점 변경
    if (window.ScrollPosStyler) {
        ScrollPosStyler.init({
            classAbove: 'sps-abv',
            classBelow: 'sps-blw',
        });
    }
    */

    /**
     * 레이어 팝업 설정 (jquery UI Dialog)
     * @param selector {string} 레이어 팝업으로 생성할 컨테이너 셀렉터(default: '.dialog_wrap')
     * @param btnOpen {string} 레이어 팝업을 띄우기 위한 버튼 셀렉터(default: [data-role=btn-dialog])
     * @param btnClose {string} 레이어 팝업을 띄우기 위한 버튼 셀렉터(default: [data-dialog-close])
     */
    var dialogHeight = {};

    function setUIDialog(selector, btnOpen, btnClose) {
        selector = selector || '.dialog_wrap';
        btnOpen = btnOpen || '[data-role=btn-dialog]';
        btnClose = btnClose || '[data-dialog-close]';

        if ($(selector).length > 0) {
            var dialogClass, containerId, dialogId, containerClasses;

            $(selector).each(function () {
                if ($(this).parents('.ui-dialog').length > 0) return false;
                var dialogWrap = this;

                containerId = 'body';
                containerClasses = 'dialog_wrapper';
                dialogClass = '';

                // dialog multi class 추가
                if ($(dialogWrap).data('class') !== undefined) {
                    if (isNaN(parseInt($(this).data('class')))) {
                        dialogClass = $(this).data('class');
                    } else {
                        dialogClass = 'auto';
                    }
                }
                $(dialogWrap).data('dialogClass', dialogClass);

                // resize시, popup 가운데 정렬 css제어를 위해 container append
                dialogId = containerId.replace('#', '') + 'Dialog' + _dialogCount;
                $(containerId).append('<div id="' + dialogId + '" class="' + containerClasses + '"></div>');

                _dialogCount++;

                // 팝업 기본 설정
                $(dialogWrap).dialog({
                    appendTo: containerId + ' #' + dialogId, // resize시, popup 가운데 정렬 css제어를 위해 container append
                    autoOpen: $(dialogWrap).is('[data-opened]'), // false,
                    width: 'none',
                    minHeight: 'none',
                    closeText: "닫기",
                    modal: true,
                    resize: false,
                    resizable: false,
                    draggable: false,
                    position: null,
                    classes: {
                        'ui-dialog': dialogClass, // popup case multi class 추가
                    },
                    open: function (event, ui) {
                        var that = $(this);
                        var papa = that.closest('.ui-dialog');
                        var container = that.closest('.' + containerClasses);

                        if (that.data('nodim') !== undefined) {
                            var dialogNoDim = true;
                        }

                        // 팝업 닫기 시, 기존 스크롤 위치로 이동위해 현재 스크롤값 저장(상단 이동 막기)
                        if (!dialogNoDim) {
                            var scrollTop = $(document).scrollTop();
                            container.css({'top': scrollTop,});
                            $('body').addClass('dialog_open');
                        } else {
                            container.addClass('no_dim');
                        }

                        // 팝업 2개 이상 노출 시 z-index 지정(팝업 위 팝업 미구현시 삭제)
                        var zNum = 999;
                        if ($('.dialog_wrapper:visible').length > 0) {
                            $('.dialog_wrapper:visible').each(function () {
                                var dialog;
                                dialog = $(this);
                                zNum = Math.max(zNum, parseInt(dialog.css('z-index')));
                            });
                        }
                        if (that.data('z-index') !== undefined) {
                            container.addClass('open').css('z-index', that.data('z-index'));
                        } else {
                            container.addClass('open').css('z-index', zNum + 2);
                        }
                        // console.log(container);

                        // popup 최소 높이보다 작은경우 100vh 처리
                        if (!dialogNoDim) {
                            setTimeout(function () {
                                dialogHeight[container.attr('id')] = papa.outerHeight();
                                dialogAutoHeight();
                            }, 50)
                        }

                        // 팝업 내 swiper 업데이트
                        if ($(this).parent().find('.swiper-container:visible').length > 0) { // 수정 221009 화면에 보일때만 실행
                            $(this).parent().find('.swiper-container:visible').each(function (index) { // 수정 221009 화면에 보일때만 실행
                                updateDialogSwiper(this);
                            });
                        }

                        if ($(this).parent().find('.custom_scroll_wrap').length > 0) {
                            $(this).parent().find('.custom_scroll_wrap').each(function (index) {
                                // console.log('!!', this.simpleBar);
                                if (this.simpleBar !== undefined) {
                                    this.simpleBar.recalculate();
                                } else {
                                    setCustomScrollObj(this);
                                }
                            });
                        }

                        // select 열려있으면 닫기
                        openSelectClose();

                        KyoboBookPub.ink.autoOverflowContents('.dialog_wrapper');

                        // 상품 리뷰 팝업 이미지 비율 체크 재실행
                        if ($(this).hasClass('dialog_review')) {
                            // 리뷰 이미지 비율 체크
                            $('.comment_wrap .comment_swiper_wrap .portrait_img_box').each(function () {
                                var imgTg = $(this);
                                KyoboBookPub.ink.checkImagePortrait(imgTg);
                            });
                        }
                    },
                    close: function (event, ui) {
                        var that = $(this);
                        var container = that.closest('.dialog_wrapper')
                        var scrollTopPos = container.css('top');
                        var dialogNoDim;

                        if ($('.dialog_wrapper.no_dim.open').length !== 0) {
                            dialogNoDim = true;
                        }

                        // z-index style 삭제
                        container.removeClass('open').removeAttr('style');
                        container.find('.ui-dialog').removeClass('h_auto');

                        // 팝업 닫기 시, 기존 스크롤 위치로 이동(상단 이동 막기)
                        if ($('.ui-dialog-content:visible').length === 0 || $('[data-nodim]:visible').length > 0) {
                            container.removeAttr('style');
                            $(containerId).removeClass('dialog_open');

                            if (!dialogNoDim) $(window).scrollTop(parseInt(scrollTopPos));
                        }

                        container.removeClass('no_dim');

                        if (!dialogNoDim) delete dialogHeight[container.attr('id')];
                    },
                    create: function (event, ui) {
                        $(this).get(0).style.display = '';
                        $(this).addClass('initialized');
                    }
                });

                // dim 없는경우 modal false 처리
                if ($(dialogWrap).data('nodim') !== undefined) {
                    var noDimPopupPos;
                    noDimPopupPos = {};
                    $(dialogWrap).dialog({modal: false});

                    if ($(dialogWrap).data('top')) {
                        noDimPopupPos.top = parseInt($(this).data('top'));
                    }
                    if ($(dialogWrap).data('left')) {
                        noDimPopupPos.left = parseInt($(this).data('left'));
                    }
                    if ($(dialogWrap).data('content-margin') !== undefined) {
                        // console.log($(this).data('content-margin'));
                        $(dialogWrap).closest('.dialog_wrapper').addClass('content_margin');
                    }
                    $(dialogWrap).closest('.ui-dialog').css(noDimPopupPos);
                }

                if ($(btnOpen).length > 0) {

                    $(btnOpen).each(function (index) {
                        if (($(this).data('target') === '#' + $(dialogWrap).attr('id')) && !$(this).data('initialized')) {
                            $(this).data('initialized', true);
                            $(this).on('click', function (event) {
                                var openTgId = $(this).data('target');

                                event.preventDefault();
                                dialogOnOff().popOpen(openTgId);
                            });
                        }
                    });
                }

                if ($(btnClose, selector).length > 0) {
                    $(btnClose, selector).each(function (index) {
                        $(this).off('click').on('click', function (event) {
                            var openTgId, closeTgId;
                            closeTgId = $(this).closest(selector).attr('id');
                            if (closeTgId === undefined) {
                                closeTgId = $(this).closest('.dialog_wrap').attr('id');
                            }

                            event.preventDefault();
                            dialogOnOff().popClose('#' + closeTgId);

                            if ($(this).data('role') === 'btn-dialog') {
                                openTgId = $(this).data('target');
                                dialogOnOff().popOpen(openTgId);
                            }
                        });
                    });
                }
            });
        }
    }

    /**
     * 레이어 팝업 최소 높이 지정
     */
    function dialogAutoHeight() {
        if ($('.dialog_wrapper.open').length > 0) {
            $('.dialog_wrapper.open').each(function () {
                var containerId = $(this).attr('id');
                if ($(window).height() < dialogHeight[containerId]) {
                    $(this).find('.ui-dialog').addClass('h_auto');

                    if ($(this).find('.custom_scroll_wrap').length > 0) {
                        $(this).find('.custom_scroll_wrap').each(function (index) {
                            this.simpleBar.recalculate();
                        });
                    }

                } else {
                    $(this).find('.ui-dialog').removeClass('h_auto');
                }
            })
        }
    }

    /**
     * 레이어 팝업 On/Off(외부 호출용)
     */
    function dialogOnOff() {
        var control = {
            /**
             * 레이어팝업 open
             * @param tgId {string} 팝업 타겟 id
             * @param callback {string} 팝업 open 후 callback 함수
             */
            popOpen: function (tgId, callback) {
                $(tgId).dialog('open');
                if (callback != null && typeof callback === "function") {
                    callback.apply(null, [tgId]);
                }

                // console.log($('.form_sel select', $(tgId)).selectmenu);
                $('.form_sel select', $(tgId)).selectmenu('calcMenuWidth');
            },

            /**
             * 레이어팝업 close
             * @param tgId {string} 팝업 타겟 id
             */
            popClose: function (tgId) {
                $(tgId).dialog('close');
            },
        }

        return control;
    }


    /**
     * 팝업이 오픈된 뒤 실제 브라우저 렌더링이 된 후 swiper 업데이트를 위한 재귀함수
     */
    function updateDialogSwiper(dialog) {
        if (dialog.clientWidth > 0) {
            if (dialog.swiper !== undefined) {
                // 썸네일 swiper update
                if (dialog.swiper.params.thumbs.swiper !== null) {
                    dialog.swiper.params.thumbs.swiper.update();
                }
                dialog.swiper.update();

                if ($(dialog.swiper.$el[0]).find('.custom_scroll_wrap').length > 0) {
                    $(dialog.swiper.$el[0]).find('.custom_scroll_wrap').each(function (index) {
                        this.simpleBar.recalculate();
                        // console.log(this.simpleBar);
                    });
                }
            }
        } else {
            setTimeout(function () {
                updateDialogSwiper(dialog);
            }, 10);
        }
    }


    /**
     * togglePassword : 비밀번호 숨김/보임 toggle
     * @param selector {string} 실행 대상 element
     * @param btnSelector {string} 실행 button
     */
    function togglePassword(wrap, btnSelector) {
        wrap = wrap || '.form_ip_pw';
        btnSelector = btnSelector || '.btn_toggle_pw';

        var that, toggleInput, btnBeforeText, btnAfterText;
        $(btnSelector).each(function (index) {
            that = $(this);

            if (that.closest(wrap).find('input').prop('disabled')) {
                that.attr("disabled", true);
            }

            that.off('click').on('click', function () {
                toggleInput = $(this).closest(wrap).find('input');
                btnBeforeText = $(this).text();

                if ($(this).hasClass('active') && toggleInput.attr('type') === 'text') {
                    $(this).removeClass('active');
                    toggleInput.attr('type', 'password');

                    btnAfterText = btnBeforeText.replace('보임', '숨김');
                    $(this).find('.hidden').text(btnAfterText);
                } else {
                    $(this).addClass('active');
                    toggleInput.attr('type', 'text');

                    btnAfterText = btnBeforeText.replace('숨김', '보임');
                    $(this).find('.hidden').text(btnAfterText);
                }
            });
        });
    }

    /**
     * select init
     * @param selector {string} 실행 element
     */
    function setUISelect(selector) {
        selector = selector || '.form_sel';
        if ($(selector).length > 0) {
            $(selector).each(function () {
                var selectMenuOption, selectClass, selectPosition, isArwType, isCalendarType;
                isArwType = ($(this).data('class') !== undefined && $(this).data('class').search('type_arw') !== -1);
                isCalendarType = ($(this).data('class') !== undefined && $(this).data('class').search('type_calendar') !== -1);
                selectMenuOption = {};
                selectClass = '';
                selectPosition = {my: 'left top', at: 'left bottom'};

                if (isArwType) {
                    selectPosition = {my: 'right top+6', at: 'right bottom'};
                } else if (isCalendarType) {
                    selectPosition = {my: 'right top+6', at: 'right bottom'};
                }
                selectMenuOption.position = selectPosition;

                if ($(this).data('append-to') !== undefined) {
                    selectMenuOption.appendTo = $(this).data('append-to');
                }

                // custom select 일 경우
                if ($(this).data('renderer')) {
                    setCustomSelect($(this), selectMenuOption);
                    return;
                }

                selectMenuOption.create = function (event) {
                    var that, instance, btnWidth, menuWidth;
                    that = this;

                    instance = $(that).selectmenu('instance');
                    selectClass = $(that).closest(selector).data('class');

                    if (selectClass) {
                        $(that).closest(selector).addClass(selectClass);
                        instance.menuWrap.addClass(selectClass);
                    }


                    $(that).selectmenu('open');

                    btnWidth = instance.button.outerWidth();
                    menuWidth = instance.menuWrap.outerWidth();

                    if (btnWidth !== menuWidth) {

                        if (selectClass !== undefined) {
                            if (selectClass.search('type_arw') !== -1) { // arw 타입은 버튼 크기 크기와 옵션 크기 다름
                                $(that).selectmenu('close');
                                return false;
                            } else if (selectClass.search('type_calendar') !== -1) {
                                $(that).selectmenu('close');
                                return false;
                            }
                        }

                        $(that).selectmenu('calcMenuWidth');
                    }

                    sensor = new ResizeSensor(instance.button, function () {
                        if (selectClass !== undefined) {
                            if (selectClass.search('type_arw') === -1) {
                                $(that).selectmenu('calcMenuWidth');
                            } else if (selectClass.search('type_calendar') !== -1) {
                                $(that).selectmenu('calcMenuWidth');
                            }
                        }
                    });
                    $(that).selectmenu('close');
                };

                $(this).find('select').selectmenu(selectMenuOption);
            });
        }

        // custom select
        function setCustomSelect(target, defaultOption) {
            var rendererName, widget, widgetClass;
            rendererName = target.data('renderer');
            widgetClass = target.data('widgetClass');

            defaultOption.open = function (event, ui) {
                widget.css('width', target.width());

                if (rendererName === 'selectProdOption') {
                    target.css('padding-bottom', widget.outerHeight());
                }
            };

            defaultOption.close = function (event, ui) {
                if (rendererName === 'selectProdOption') {
                    target.css('padding-bottom', 0);
                }
            }

            widget = target.find('select')[rendererName](defaultOption)[rendererName]('menuWidget').addClass(widgetClass);
        }
    }

    /**
     * openSelectClose : 열려있는 select 닫기 처리
     */
    function openSelectClose() {
        $('.form_sel .ui-selectmenu-button-open').each(function (index) {
            if ($(this).closest('.form_sel').attr('data-renderer') === 'selectProdOption') {
                $(this).closest('.form_sel').find('select').selectProdOption('close');
            } else {
                $(this).closest('.form_sel').find('select').selectmenu('close');
            }
        });
    }

    /**
     * setUISpinner : spinner set
     * @param selector {string} 실행 element
     */
    function setUISpinner(selector) {
        selector = selector || '.form_spinner';

        if ($(selector).length > 0) {
            $(selector).each(function (index) {
                var isDisabled = $(this).attr('disabled');

                $(this).spinner({
                    decreseText: '상품 수량 한 개 줄이기',
                    increseText: '상품 수량 한 개 늘리기',
                    min: $(this).data('min') === undefined ? 1 : $(this).data('min'),
                    max: $(this).data('max'),
                    disabled: isDisabled,
                });
            });

            // 한글 입력 막기
            $(selector).off('input').on('input', function (event) {
                var val, regExVal;
                val = $(this).spinner('value');
                if (val === null) {
                    val = 0;
                }
                regExVal = val.toString().replace(/[^\d+$]/g, '');
                $(this).spinner('value', regExVal);
            });
        }
    }

    /**
     * jQuery UI 탭 설정
     * @param selector Tab 생성 DOM 셀렉터(default : .tab_wrap)
     */
    function setTabs(selector) {
        selector = selector || '.tab_wrap';

        if ($(selector).length > 0) {
            $(selector).each(function (index) {
                var disabledTabs;
                disabledTabs = [];

                if ($(this).data('type-btn') !== undefined) {
                    return;
                }

                $(this).find('> .tab_list_wrap .tabs .tab_link').each(function (index) {
                    if ($(this).hasClass('tab_disabled')) {
                        disabledTabs.push(index);
                    }
                });

                $(this).tabs({
                    disabled: disabledTabs,
                    beforeActivate: function (event, ui) {
                        if ($(ui.newTab).find('a').attr('href').indexOf('#') !== 0) {
                            var tg = $(ui.newTab).find('a').attr('target') === undefined ? '_self' : $(ui.newTab).find('a').attr('target');
                            event.preventDefault();

                            // a 태그에 onclick 선언되어 있는 경우 onclick만 실행
                            if ($(ui.newTab).find('a').attr('onclick') !== undefined) {
                                // console.log('onClick first');
                                return false;
                            }

                            window.open($(ui.newTab).find('a').attr('href'), tg);
                            event.preventDefault();
                        }
                    },
                    activate: function (event, ui) {
                        if ($(event.target).closest('.custom_scroll_wrap').length > 0) {
                            $(event.target).closest('.custom_scroll_wrap').get(0).simpleBar.recalculate();
                        }
                        if (ui.newPanel.find('.swiper-container').length > 0) {
                            ui.newPanel.find('.swiper-container').each(function (index) {
                                if (this.swiper === undefined || this.swiper === null) return;
                                this.swiper.update();
                            });
                        }
                        if (ui.newPanel.find('.form_sel').length > 0) {
                            $('.form_sel:not(.type_arw) select', $(ui.newPanel)).selectmenu('calcMenuWidth');
                        }
                    },
                    // create: function( event, ui ) {
                    // 	$(this).addClass()
                    // }
                });

            });
        }
    }

    /**
     * tag tab swiper type인 경우
     * update : 20220512 activeSwiper 함수 추가 (선택된 카테고리 있을때 active 기능 추가)
     */
    function tabListFolding(selector) {
        var tagWrap = selector || $('.tab_wrap.type_tag.type_fold .tab_list_wrap');
        if (tagWrap.length === 0) return;
        tagWrap.each(function () {

            tagWrapTg = $(this);
            var tagSwiperEl = $('.tab_swiper_wrap', tagWrapTg);

            // 연관검색어 더보기 버튼 노출 체크
            function contOverflowCheck(el) {
                return el !== undefined && (el.offsetWidth < el.scrollWidth);
            }

            if (!contOverflowCheck(tagSwiperEl.get(0)) || tagSwiperEl.get(0).swiper !== undefined) return;

            tagWrapTg.addClass('active');

            var tagSwiper;

            function tagSwiperInit() {
                if (tagSwiperEl.length > 0 && tagSwiperEl.get(0).swiper === undefined) {
                    tagSwiper = new CustomSwiper(tagSwiperEl, {
                        slidesPerView: 'auto',
                        observer: true,
                        observeParents: true,
                        speed: 500,
                        threshold: 10, // 10px 이상 드래그해야 swiper 처리
                    });

                    activeSwiper();//20220512 activeSwiper 추가
                }
            }

            tagSwiperInit();

            /* 20220512 activeSwiper 추가, 선택된 탭 있을때 활성화 추가  */
            function activeSwiper() {
                var activeIndex = $(tagWrap).find('.ui-state-active').index();
                tagSwiper.slideTo(activeIndex);
            }

            $('.btn_tag_more', tagWrap).off().on('click.uiTagMore', function () {
                var papa = $(this).parent();
                if (papa.hasClass('more')) {
                    $(this).find('.hidden').text('더보기');
                    papa.removeClass('more');

                    // console.log('tagSwiperInit');
                    tagSwiperInit();
                } else {
                    $(this).find('.hidden').text('접기');
                    papa.addClass('more');

                    tagSwiper.destroy();
                    // console.log('tagSwiper', tagSwiper);
                    tagSwiper = tagSwiperEl.get(0).swiper = undefined;
                }
            });
        });
    }

    /**
     * jQuery UI Datepicker 생성
     * @날짜표기 마지막 . 삭제 by han 220426
     */
    function setDatepicker() {
        $.datepicker.setDefaults({
            dateFormat: 'yy. mm. dd',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            showOn: 'button',
            buttonImage: "/assets/common/images/datepicker_icon_button@2x.png",
            buttonImageOnly: true,
            buttonText: '날짜 선택',
            currentText: '오늘',
            // showOtherMonths: true,
            // selectOtherMonths: false,
            // yearSuffix: '년',
            changeMonth: true,
            changeYear: true,
        });

        if ($('.date_box').length > 0) {

            $('.date_box input').each(function (index) {
                var minDate, maxDate, isDisabled;
                minDate = $(this).data('minDate') !== undefined ? $(this).data('minDate') : null;
                maxDate = $(this).data('maxDate') !== undefined ? $(this).data('maxDate') : null;
                isDisabled = $(this).attr('disabled');

                $(this).off('input').on('input', function (event) {
                    this.value = this.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
                });

                $(this).datepicker({
                    minDate: minDate,
                    maxDate: maxDate,
                    disabled: isDisabled,
                    beforeShow: function (input, inst) {
                        setTimeout(function () {
                            inst.dpDiv.position({my: 'right top+6', at: 'right bottom', collision: 'none', of: input});
                        }, 1);
                    },
                    onClose: function (dateText, inst) {
                        // 20190908 형태의 날짜 입력에 대한 대응
                        if (dateText && dateText.length === 8) {
                            $(this).datepicker('setDate', new Date(dateText.substring(0, 4), dateText.substring(4, 6) - 1, dateText.substring(6, 8)));
                        }
                        // onClose 시 날짜형식을 유지하도록 하는 트릭
                        $(this).datepicker('option', 'dateFormat', $(this).datepicker('option', 'dateFormat'));
                    },
                });
            })
        }
    }

    /**
     * fold 설정
     * @param selector fold 생성 DOM 셀렉터(default : .fold_box_wrap)
     */
    function setFoldBox(selector) {
        selector = selector ? selector : '.fold_box_wrap';
        if ($(selector).length > 0) {
            $(selector).find('.fold_box .fold_box_header').each(function (index) {
                $(this).closest('.fold_box').data('btn', $(this).find('.btn_fold')); // 220427 폴드 다중구조 이슈 해결을 위한 스크립트 수정 by do
                $(this).find('.btn_fold').off('click.uiFold').on('click.uiFold', function (event) {
                    if ($(event.target).is('a') || $(event.currentTarget).closest('.fold_box').is('.no_fold') || $(event.target).is('input')) {
                        // console.log('setFoldBox', $(event.target).is('a'), $(event.target).is('button'))
                        // event.preventDefault();
                        return;
                    }

                    if ($(event.target).is('label')) {
                        if ($(event.target).is('label') || $(event.target).is('input')) {
                            return;
                        }
                    }

                    var foldBox = $(this).closest('.fold_box');
                    foldBox.btn = $(this);

                    var isExpanded;
                    isExpanded = foldBox.hasClass('expanded');

                    if (!($(event.currentTarget).closest('.fold_box_wrap').data('type') === 'multi')) {
                        var allFoldBox;
                        if (isExpanded) {
                            allFoldBox = $(this).closest('.fold_box_wrap').find('.fold_box').not('.expanded');
                        } else {
                            allFoldBox = $(this).closest('.fold_box_wrap').find('.fold_box');
                        }

                        allFoldBox.removeClass('expanded');
                        allFoldBox.each(function (index) {
                            $(this).data('btn').find('.hidden').text('컨텐츠 열기');
                        })
                        // allFoldBox.find('.hidden').text('컨텐츠 열기');

                        foldTransition(allFoldBox);
                    }

                    if (isExpanded) {
                        foldOnOff().foldClose(foldBox);
                    } else {
                        foldOnOff().foldOpen(foldBox);
                    }

                    var evtData = {
                        index: $(event.currentTarget).closest('.fold_box').index(),
                        isExpanded: $(event.currentTarget).closest('.fold_box').hasClass('expanded'),
                    };
                    var evt = new CustomEvent('headerClick', {'detail': evtData});


                    $(event.currentTarget).closest('.fold_box')[0].dispatchEvent(evt);
                });
            });
        }
    }

    /**
     * fold On/Off
     */
    function foldOnOff() {
        var control = {
            /**
             * fold open
             * @param selector {string} 타겟 foldbox
             * @param callback {string} fold open 후 callback 함수
             */
            foldOpen: function (selector, callback) {
                selector.addClass('expanded');
                selector.data('btn').find('.hidden').text('컨텐츠 닫기');

                if (!selector.hasClass('type_floating') && !selector.hasClass('no_fold')) {
                    foldTransition(selector);
                }

                if (callback != null && typeof callback === "function") {
                    callback.apply(null, [tgId]);
                }
            },

            /**
             * fold close
             * @param tgId {string} 타겟 foldbox
             */
            foldClose: function (selector) {
                selector.removeClass('expanded');
                selector.data('btn').find('.hidden').text('컨텐츠 열기');

                if (!selector.hasClass('type_floating') && !selector.hasClass('no_fold')) {
                    foldTransition(selector);
                }
            },
        }

        return control;
    }

    /**
     * fold transition
     * @param selector - foldbox
     */
    function foldTransition(selector, isForce) {
        if ($(selector).closest('.fold_box_wrap').hasClass('type_reservation')) return;
        var curHeight, changeHeight = 0;
        isForce = isForce || false;
        curHeight = selector.outerHeight();

        selector.css('height', 'auto');

        changeHeight = selector.outerHeight();
        selector.css('height', curHeight).stop().animate({height: changeHeight}, (isForce ? 0 : 150), function () {
            var that;
            that = $(this);
            if (that.closest('.fold_box_wrap').closest('.custom_scroll_wrap').length > 0
                && that.closest('.fold_box_wrap').closest('.custom_scroll_wrap')[0].simpleBar !== undefined) {
                that.closest('.fold_box_wrap').closest('.custom_scroll_wrap')[0].simpleBar.recalculate();
            }

            setTimeout(function () {
                if ((that.find('.fold_box_header').outerHeight() + that.find('.fold_box_contents').outerHeight() + 2) !== changeHeight) {
                    foldTransition(that, true);
                } else {
                    if (that.closest('.custom_scroll_inner').outerHeight() > that.closest('.custom_scroll_wrap').outerHeight()) {
                        that.closest('.custom_scroll_wrap').addClass('active');
                    } else {
                        that.closest('.custom_scroll_wrap').removeClass('active');
                    }
                }
            }, 200);
        });
    }

    /**
     * max-height 영역 안에 요소가 넘치는 경우 auto overflow 처리
     * @param wrap 컨테이너 DOM 셀렉터 (default: '.auto_overflow_wrap')
     * @param contents 늘어나는 컨텐츠 영역 (default: '.auto_overflow_contents')
     * @param inner 늘어나는 요소 셀렉터 (default: '.auto_overflow_inner')
     * @param btn 영역 펼침 버튼 셀렉터 (default: '[data-btn-toggle]')
     * @param container 컨텐츠영역 / 팝업영역 제어(default: '.wrapper', popup: '.dialog_wrapper')
     */
    function autoOverflowContents(container, wrap, contents, inner, btn) {
        wrap = wrap || '.auto_overflow_wrap';
        contents = contents || '.auto_overflow_contents';
        inner = inner || '.auto_overflow_inner';
        btn = btn || '> .auto_overflow_footer [data-btn-toggle]';
        container = container || '.wrapper';

        if ($(wrap, container).length > 0) {
            $(wrap, container).each(function () {
                var isToggle, isOpened, wrapMaxHeight, innerHeight, btnBeforeText, btnAfterText;
                wrapMaxHeight = parseInt($(this).find(contents).css('max-height').replace('px', ''));
                innerHeight = Math.max($(this).find(inner).outerHeight(), $(this).find(inner).get(0).scrollHeight);
                btnBeforeText = $(this).find(btn).text();

                if (innerHeight <= wrapMaxHeight) {
                    return;
                }
                $(this).addClass('overflow');

                if ($(this).hasClass('active')) {
                    isOpened = true;
                }
                if ($(this).find(btn).data('btn-toggle') !== undefined) {
                    isToggle = true;
                }
                if (isToggle) {
                    $(this).find(btn).off('.click.overflow').on('click.overflow', function (event) {
                        if (Boolean(btnBeforeText.match('펼치기'))) {
                            btnAfterText = btnBeforeText.replace('펼치기', '접기');
                        } else if (Boolean(btnBeforeText.match('더보기'))) {
                            btnAfterText = btnBeforeText.replace('더보기', '닫기');
                        } else if (Boolean(btnBeforeText.match('접기'))) {
                            btnAfterText = btnBeforeText.replace('접기', '펼치기');
                        } else if (Boolean(btnBeforeText.match('닫기'))) {
                            btnAfterText = btnBeforeText.replace('닫기', '더보기');
                        }

                        if ($(this).closest(wrap).hasClass('active')) {
                            $(this).closest(wrap).removeClass('active');
                            $(this).removeClass('active');

                            if (isOpened) {
                                $(this).find('.text').text(btnAfterText);
                            } else {
                                $(this).find('.text').text(btnBeforeText);
                            }
                        } else {
                            $(this).closest(wrap).addClass('active');
                            $(this).addClass('active');

                            if (isOpened) {
                                $(this).find('.text').text(btnBeforeText);
                            } else {
                                $(this).find('.text').text(btnAfterText);
                            }
                        }
                    });
                }
            });
        }
    }

    /**
     * selectmenu refresh
     */
    function callSelectRefresh(tgId) {
        // console.log($(tgId).selectmenu('instance'))
        $(tgId).selectmenu('refresh');

        // if($(tgId).parent().data('renderer') === 'selProdOpt') {
        // 	$(tgId).selProdOpt('refresh');
        // }else if($(tgId).parent().data('renderer') === 'selInteriorOpt') {
        // 	$(tgId).selInteriorOpt('refresh');
        // }else{
        // 	$(tgId).selectmenu('refresh');
        // }
    }

    /**
     * 숫자 number에 대해 n 자릿수 문자열로 치환하여 반환
     * @param number {number} 정수 숫자 값
     * @param digits {number} 자릿수(defalut: 2)
     * @returns {string} 치환 된 문자열
     */
    function setPrependZero(number, digits) {
        number = number + '';
        digits = digits || 2;
        return number.length >= digits ? number : new Array(digits - number.length + 1).join('0') + number;
    }


    /**
     * toast message
     * @param msg 노출되는 메세지 내용
     * @param timer toast 노출 시간 밀리세컨드로 계산(default: 2000)
     */
    function setToastMessage(msg, timer) {
        if (!timer) {
            timer = 2000;
        }

        if (msg) {
            msg = msg.replace(/[\r\n]+|\\n/g, '<br/>')
        }
        var toastCont = $("<div class='toast_wrap'><span class='toast_message'>" + msg + "</span></div>");

        if ($('body').find('.toast_wrap').length < 1) $('body').append(toastCont);
        toastPopupCalaPos();

        toastCont.slideToggle(200, function () {
            if (!isNaN(timer)) {
                setTimeout(function () {
                    toastCont.fadeOut(function () {
                        $(this).remove();
                    });
                }, timer);
            }
        });


        $(window).off('scroll.uiToast resize.uiToast', toastPopupCalaPos).on('scroll.uiToast resize.uiToast', toastPopupCalaPos);

        function toastPopupCalaPos() {
            if (_bodyMinWidth > _deviceWidth) {
                $('.toast_wrap').css({
                    'left': 600 + 'px',
                    'transform': 'translateX(' + -_scrollLeft + 'px)'
                });
            } else {
                $('.toast_wrap').css({
                    'left': '',
                    'transform': '',
                });
            }
        }
    }


    /**
     * tooltip hover type on off
     * @param container tooltip 컨테이너 영역 DOM 셀렉터 (default : .tooltip_wrap)
     */
    function tooltipOnOff(container) {
        container = container || '.tooltip_wrap';

        if ($(container).length > 0) {
            $(container).each(function () {
                var that, isToggle;
                that = $(this);

                $(this).find('.btn_tooltip').on('click', function () {
                    if ($(this).data('btn-toggle') !== undefined) {
                        isToggle = true;
                    }

                    if (isToggle) {
                        if (that.hasClass('active')) {
                            that.removeClass('active').addClass('hide');
                            $(this).find('.hidden').text('툴팁열기');
                        } else {
                            $('.tooltip_wrap.active').removeClass('active').addClass('hide');
                            that.removeClass('hide').addClass('active');
                            $(this).find('.hidden').text('툴팁닫기');
                        }
                        return;
                    }

                    if (that.hasClass('active')) return;
                    $('.tooltip_wrap.active').removeClass('active').addClass('hide');
                    that.removeClass('hide').addClass('active');
                });

                if (!isToggle) {
                    $(this).find('.btn_tooltip_close').on('click', function () {
                        that.removeClass('active').addClass('hide');
                    });
                }

                $(this).on('transitionend', function () {
                    $(this).removeClass('hide');
                });
            });
        }
    }


    /**
     * optMenuOnOff type on off
     * @param container tooltip 컨테이너 영역 DOM 셀렉터 (default : .opt_menu_wrap)
     */
    function optMenuOnOff(container) {
        container = container || '.opt_menu_wrap';

        if ($(container).length > 0) {
            $(container).each(function () {
                var that, isToggle;
                that = $(this);

                $(this).find('.btn_opt_menu').on('click', function () {
                    if ($(this).data('btn-toggle') !== undefined) {
                        isToggle = true;
                    }

                    if (isToggle) {
                        if (that.hasClass('active')) {
                            that.removeClass('active').addClass('hide');
                            $(this).find('.hidden').text('메뉴열기');
                        } else {
                            $(container + '.active').removeClass('active').addClass('hide');
                            that.removeClass('hide').addClass('active');
                            $(this).find('.hidden').text('메뉴닫기');
                        }
                        return;
                    }

                    if (that.hasClass('active')) return;
                    $('.opt_menu_wrap.active').removeClass('active').addClass('hide');
                    that.removeClass('hide').addClass('active');
                });

                if (!isToggle) {
                    $(this).find('.opt_menu_link').on('click', function () {
                        that.removeClass('active').addClass('hide');
                    });
                }

                $(this).on('transitionend', function () {
                    $(this).removeClass('hide');
                });
            });
        }
    }

    /**
     * img 가로형/세로형 체크
     * @param container imgTg : $(this)
     * @param container container : addClass되는 container 타겟
     */
    function checkImagePortrait(imgTg, container) {
        container === undefined ? container = imgTg : container = container;
        var chkImg = imgTg.find('img').get(0);

        if (chkImg !== undefined) {
            if (chkImg.naturalWidth > chkImg.naturalHeight) { // 가로형
                container.addClass('landscape');
            } else if (chkImg.naturalWidth < chkImg.naturalHeight) { //세로형
                container.addClass('portrait');
            } else { // 정사각형
                container.addClass('even');
            }
        }
    }

    /**
     * sns 공유하기 공통
     */
    function shsShareToggle() {
        $('.btn_share').on('click', function () {
            $(this).closest('.sns_share_wrap').addClass('active');
        });

        $('.btn_sns_share_close').on('click', function () {
            $(this).closest('.sns_share_wrap').removeClass('active');
        });
    }

    /**
     * 우편번호 검색 결과 상세주소보기 영역 on/off
     */
    function addressDetailAreaOnOff() {
        var btnRoad = $('.btn_road_name');
        var btnLand = $('.btn_land_number');
        var targetDetail = $('.success_detail')

        function DetailOpenClose(btn) {
            btn.on('click', function (v) {
                targetDetail.removeClass('active');
                targetDetail.eq(btn.index($(this))).addClass('active');
            });
        }

        // 수정 211126 상세검색 영역 없는 경우 조건 처리
        if (targetDetail.length > 0) {
            DetailOpenClose(btnRoad)
            DetailOpenClose(btnLand)
        }
    }

    /**
     * tag button on/off
     */
    function setTagToggle() {
        $('.tag_wrap').each(function () {
            if ($(this).data('tag-toggle') !== undefined) {
                $(this).find('.tag').on('click', function () {
                    $(this).closest('.tag_wrap').find('.tag').removeClass('active');
                    $(this).addClass('active');
                })
            }
        });
    }

    /**
     * tag multi button on/off
     */
    function setTagToggleMulti() {
        $('.tag_wrap').each(function () {
            if ($(this).data('tag-multi') !== undefined) {
                $(this).find('.tag').on('click', function () {
                    $(this).toggleClass('active');
                });
            }
        });
    }

    /**
     * 상품 리스트로보기/텍스트로보기 토글
     */
    function setSwitchListBtn(callback) {
        $('.switch_list_btn_wrap').each(function (index) {
            var btns, target;
            btns = $(this).find('button');
            target = $($(this).data('target'));

            btns.on('click.switch', function (event) {
                var type;
                btns.removeClass('active');
                $(this).addClass('active');
                type = 'view_type_' + $(this).data('type');
                // console.log(type);
                target.removeClass('view_type_img view_type_txt view_type_list').addClass(type);
                // console.log(target, type);

                if (callback != null && typeof callback === "function") {
                    callback(target, type);
                }
            });
        });
    }

    /**
     * 도메인 자동완성
     */
    function setDomainAutoComplete() {
        if ($('.form_ip[type="email"]').length > 0) {
            $('.form_ip[type="email"][data-autocomplete]').each(function () {
                var tg, wrapStr;
                tg = $(this);

                var awesomplete = new Awesomplete(tg.get(0), {
                    list: ['naver.com', 'hanmail.net', 'gmail.com', 'nate.com', 'yahoo.co.kr', 'hotmail.com', 'paran.com', 'dreamwiz.com', 'empal.com', 'korea.com', 'freechal.com'],
                    data: function (text, input) {
                        return input.slice(0, input.indexOf("@")) + "@" + text;
                    },
                    sort: false, // 수정 221009 길이순 정렬 비활성화
                    maxItems: 20, // 수정 221009 표시할 최대 제안 수
                });

                if (isNaN(parseInt(tg.data('autocomplete')))) {
                    wrapStr = '<div class="auto_complete_box"><div class="custom_scroll_wrap"></div></div>';
                } else {
                    var boxHeight;
                    boxHeight = parseInt(tg.data('autocomplete')) + 'px';
                    wrapStr = '<div class="auto_complete_box"><div class="custom_scroll_wrap" style="max-height: ' + boxHeight + '"></div></div>';
                }


                tg.closest('.awesomplete').find('ul').wrap(wrapStr);

                tg.on('awesomplete-open', function (e) {
                    // The popup just appeared.
                    tg.closest('.awesomplete').addClass('active');
                });

                tg.on('awesomplete-close', function (e) {
                    // The popup just closed.
                    tg.closest('.awesomplete').removeClass('active');
                });

                tg.on('awesomplete-highlight', function (e) {
                    var lists, scrollWrap, scrollTop;
                    lists = tg.closest('.awesomplete').find('ul');
                    scrollWrap = lists.closest('.custom_scroll_wrap').get(0);
                    scrollTop = lists.find('li[aria-selected="true"]').offset().top - lists.offset().top;
                    $(scrollWrap.simpleBar.getScrollElement()).scrollTop(scrollTop);
                    // console.log($(scrollWrap.simpleBar.getScrollElement()).scrollTop(), scrollTop);
                });
            });

            setCustomScroll('.awesomplete');
        }
    }

    // switch on off
    function setSwitchOnOff() {
        $('.btn_switch').on('click.uiSwitch', function () {
            var tgCont = $(this).attr('data-switch-tg');
            var allCont = $(this).closest('.switch_toggle_wrap').find('.switch_toggle_content');

            $(this).addClass('active');
            $(this).siblings('.btn_switch').removeClass('active');

            allCont.removeClass('active');
            $(tgCont).addClass('active');
        });
    }

    _front.setSpsOffsetData = setSpsOffsetData;
    _front.setCustomScroll = setCustomScroll;
    _front.setTableCaption = setTableCaption;
    _front.setStarRating = setStarRating;
    _front.setUIDialog = setUIDialog;
    _front.dialogOnOff = dialogOnOff;
    _front.setUISelect = setUISelect;
    _front.setUISpinner = setUISpinner;
    _front.setDatepicker = setDatepicker;
    _front.callSelectRefresh = callSelectRefresh;
    _front.togglePassword = togglePassword;
    _front.setTabs = setTabs;
    _front.tabListFolding = tabListFolding;
    _front.setFoldBox = setFoldBox;
    _front.setGNB = setGNB;
    _front.setFloating = setFloating;
    _front.setPrependZero = setPrependZero;
    _front.setToastMessage = setToastMessage;
    _front.tooltipOnOff = tooltipOnOff;
    _front.autoOverflowContents = autoOverflowContents;
    _front.checkImagePortrait = checkImagePortrait;
    _front.addressDetailAreaOnOff = addressDetailAreaOnOff;
    _front.setSwitchListBtn = setSwitchListBtn;
    _front.foldOnOff = foldOnOff;
    _front.setDomainAutoComplete = setDomainAutoComplete;
    _front.setSwitchOnOff = setSwitchOnOff;
    _front.setSearchInput = setSearchInput;
    _front.setBreadCrumb = setBreadCrumb;
    _front.setFamilySiteMore = setFamilySiteMore;

    $(window).on('load.uiCommon', function () {
        if (/Mac|iPhone|iPad|iPod/i.test(navigator.platform)) {
            $('html').addClass('ios');
        }
        if (/Edge\/\d./i.test(navigator.userAgent)) {
            $('html').addClass('edge');
        } else if (/trident\/\d./i.test(navigator.userAgent)) {
            $('html').addClass('ie');
        }
    });
    $(window).on('scroll.uiCommon resize.uiCommon', function () {
        _scrollLeft = Math.round(document.documentElement.scrollLeft || window.pageXOffset);
        _scrollTop = Math.round(document.documentElement.scrollTop || window.pageYOffset);

        setFixedElementPosX();
        openSelectClose();
    });

    $(window).on('resize.uiCommon', function () {
        _deviceWidth = $(window).width() || window.innerWidth || document.body.clientWidth;
        _deviceHeight = $(window).height() || window.innerHeight || document.body.clientHeight;
        _deviceHeight = $(window).height() || window.innerHeight || document.body.clientHeight;

        dialogAutoHeight();
    });

    // 페이지 공통 스크립트
    _front.page = {};

    // event swiper
    function setEventSwiper() {
        if ($('.event_swiper_wrap').length > 0) {
            $('.event_swiper_wrap').each(function () {
                var eventSwiperEl = $(this);
                if ($('.swiper-slide', eventSwiperEl).length > 1) {
                    var eventSwiper = new CustomSwiper(eventSwiperEl.find('.swiper-container').get(0), {
                        slidesPerView: 'auto',
                        speed: 500,
                        scrollbar: {
                            el: $('.swiper-scrollbar', eventSwiperEl)[0],
                        },
                    });
                } else {
                    $('.swiper-scrollbar', eventSwiperEl).remove();
                }
            });
        }
    }

    // 리뷰 내 리뷰 썸네일 swiper
    function setReviewThumbnailSwiper(len) {
        len = len ? len : 2;
        $('.comment_swiper_wrap .swiper-container').each(function () {
            if ($(this).find('.swiper-slide').length > len) {
                var reviewSwiper = new CustomSwiper(this, {
                    observer: true,
                    observeParents: true,
                    slidesPerView: 'auto',
                    navigation: {
                        nextEl: $(this).siblings('.swiper-button-next'),
                        prevEl: $(this).siblings('.swiper-button-prev'),
                    },
                });
            } else {
                $(this).siblings('.swiper-button-next, .swiper-button-prev').css('display', 'none');
            }
        });
    }

    // 문장수집
    function setKillingPartSwiper() {
        if ($('.killing_part_swiper').length > 0) {

            $('.killing_part_swiper').each(function () {
                var killingPartSwiperEl = $(this);
                var killingPartSwiper = new CustomSwiper($('.swiper-container', killingPartSwiperEl), {
                    slidesPerView: 'auto',
                    loop: killingPartSwiperEl.find('.swiper-slide').length > 1,
                    speed: 500,
                    observer: true,
                    observeParents: true,
                    navigation: {
                        nextEl: $('.swiper-button-next', killingPartSwiperEl).get(0),
                        prevEl: $('.swiper-button-prev', killingPartSwiperEl).get(0),
                    },
                });
            });
        }
    }

    function setCommentList() {
        var reviewContents, reviewText, contentsOverflow, textOverflow, btnToggle;
        if ($('.comment_wrap').closest('.dialog_wrap.dialog_review').length > 0) return false; // 리뷰 팝업 내에선 실행 X

        if ($('.comment_wrap .comment_item').length > 0) {
            $('.comment_wrap .comment_item').each(function () {
                var that = $(this);
                btnToggle = $(this).find('.comment_footer .btn_more_body');
                reviewContents = $(this).find('.comment_contents .comment_contents_inner');

                // 리뷰 목록 toggle overflow
                if (reviewContents.length > 0) {
                    reviewText = reviewContents.find('.comment_text');
                    textOverflow = reviewText[0].scrollHeight > reviewText.height();
                    contentsOverflow = reviewContents[0].scrollHeight > reviewContents.height();

                    // console.log($(this).index(), 'Contents : ', reviewContents[0].scrollHeight, reviewContents.height(), contentsOverflow, '///', 'Text : ', reviewText[0].scrollHeight, reviewText.height(), textOverflow);
                    if (contentsOverflow || textOverflow) {
                        that.addClass('overflow');

                        btnToggle.off('click').on('click', function () {
                            if (that.hasClass('active')) {
                                that.removeClass('active');
                                $(this).removeClass('active').find('.text').text('펼치기');
                            } else {
                                that.addClass('active');
                                $(this).addClass('active').find('.text').text('접기');
                            }
                        });
                    } else {
                        that.removeClass('overflow');
                    }
                }

                // 리뷰 이미지 비율 체크
                $(this).find('.comment_swiper_wrap .portrait_img_box').each(function () {
                    var imgTg = $(this);
                    KyoboBookPub.ink.checkImagePortrait(imgTg);
                });
            });
        }
    }

    _front.page.setEventSwiper = setEventSwiper;
    _front.page.setReviewThumbnailSwiper = setReviewThumbnailSwiper;
    _front.page.setKillingPartSwiper = setKillingPartSwiper;
    _front.page.setCommentList = setCommentList;
    // e : 페이지 공통 스크립트

    // s : Lottie Animation Data
    _front.lottie = {};
    _front.lottie.loading = '/cdn/data/loading_onk.json';
    _front.lottie.couponDownload = '/cdn/data/coupon_download_onk.json';
    _front.lottie.heartCasting = '/cdn/data/heart_casting_h20_onk.json';
    _front.lottie.heartDetail = '/cdn/data/heart_detail_h20_onk.json';
    _front.lottie.heartGray16 = '/cdn/data/heart_gray_h16_onk.json';
    _front.lottie.heartGray18 = '/cdn/data/heart_gray_h18_onk.json';
    _front.lottie.heartGray22 = '/cdn/data/heart_gray_h22_onk.json';
    _front.lottie.heart14 = '/cdn/data/heart_h14_onk.json';
    _front.lottie.heart18 = '/cdn/data/heart_h18_onk.json';
    _front.lottie.heartPurple18 = '/cdn/data/heart_purple_h18_onk.json';
    _front.lottie.liveBadge = '/cdn/data/live_badge_ink.json';
    _front.lottie.hotLine = '/cdn/data/hot_line_ink.json';
    // e : Lottie Animation Data


    $(document).ready(function () {
        _deviceWidth = $(window).width() || window.innerWidth || document.body.clientWidth;
        _deviceHeight = $(window).height() || window.innerHeight || document.body.clientHeight;
        _scrollLeft = Math.round(document.documentElement.scrollLeft || window.pageXOffset);
        _scrollTop = Math.round(document.documentElement.scrollTop || window.pageYOffset);

        _btnGoTop = $('.btn_go_top');
        _headerWrapper = $('.header_wrapper');
        _flyMenuEl = $('.fly_menu_wrapper');
        _floatingEl = $('.floating_wrapper');
        _container = $('.container_wrapper');

        _btnGoTop.off('click').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 200, function () {
                _btnGoTop.removeClass('active');
            });
        });

        // setGNB();
        // setFloating();
        // setSpsOffsetData();
        // setFixedElementPosX()
        // setCustomScroll();
        // setTableCaption();
        // setStarRating();
        // setUIDialog();
        // setBreadCrumb();
        // setUISelect();
        // togglePassword();
        // setUISpinner();
        // setDatepicker();
        // setTabs();
        // setFoldBox();
        // addressDetailAreaOnOff();
        // setFamilySiteMore();
        // setSearchInput();
        // tooltipOnOff();
        // shsShareToggle();
        // autoOverflowContents();
        // setTagToggle();
        // setTagToggleMulti();
        // setDomainAutoComplete();
        // setSwitchOnOff();
        // optMenuOnOff();
    });

    return _front;
})() || KyoboBookPub.ink;

// Custom Swiper
window.CustomSwiper = window.CustomSwiper || function (selector, options) {
// var CustomSwiper = function (selector, options) {
    options = $.extend({
        // s: 220822 최적화 관련 이미지 lazy 로드 추가 요청 반영
        lazy: {
            checkInView: true,
            loadOnTransitionStart: true,
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        // e: 220822 최적화 관련 이미지 lazy 로드 추가 요청 반영

        keyboard: false,
        on: {
            destroy: function () {
                $(selector).off('focusin.swiper').off('focusout.swiper');
            }
        }
    }, options);
    $(selector).on('focusin.swiper', function (event) {
        this.swiper.keyboard.enable();
    }).on('focusout.swiper', function (event) {
        this.swiper.keyboard.disable();
    })
    return new Swiper(selector, options);
};

/* eslint-disable no-var */
/* globals KbbJS */

// console.log('* [loaded] /CDN/js/ga360/util.js')
window.dataLayer = window.dataLayer || [];
window.ga360 = window.ga360 || {};

// IIFE
; (function () {
    const ga360 = KbbJS.getOption('ga360.welcome.var')
    class Ga360Class {
        constructor() {
            // this.init()
            this.domReady()
        }

        // init() {
        //   console.log('---init---')
        // }

        domReady() {
            this.render()
        }

        render() {
            const pageDict = {
                // 'https://kyobobook.co.kr/':'교보문고>웰컴>웰컴 메인',
                // 'https://mmbr.kyobobook.co.kr/join':'교보문고>회원가입>메인',
                // 'https://mmbr.kyobobook.co.kr/benefit':'교보문고>회원혜택>교보북클럽',
                'http://localhost:3100': '로컬용 동작 확인 타이틀',
                'https://product.ndev.kyobobook.co.kr': '테스트성공',
                'https://ebook.ndev.kyobobook.co.kr': 'ebook 테스트성공',
                // 공통 , 2022.10.17 수정
                'https://search.kyobobook.co.kr/search': '통합검색',
                'https://mmbr.kyobobook.co.kr/login': '로그인',
                'https://mmbr.kyobobook.co.kr/find/id-password': '아이디찾기/비밀번호찾기',
                'https://mmbr.kyobobook.co.kr/join': '회원가입>메인',
                'https://mmbr.kyobobook.co.kr/join/verify/self': '회원가입>본인인증',
                'https://mmbr.kyobobook.co.kr/join/form/self': '회원가입>정보입력',
                // 공통 , 2022.10.25 수정
                'https://mmbr.kyobobook.co.kr/join/finish': '회원가입>가입완료',
                'https://order.kyobobook.co.kr/cart': '장바구니>기본화면',
                'https://my.kyobobook.co.kr/main': '마이룸>메인',
                'https://order.kyobobook.co.kr/myroom/member/order-list': '마이룸>쇼핑내역>주문/배송목록',
                'https://order.kyobobook.co.kr/myroom/member/gift-detail': '마이룸>쇼핑내역>선물함',
                'https://order.kyobobook.co.kr/myroom/member/receipt': '마이룸>쇼핑내역>온오프라인영수증',
                'https://order.kyobobook.co.kr/myroom/member/receipt-benefit': '마이룸>쇼핑내역>영수증후적립',
                'https://order.kyobobook.co.kr/myroom/member/tax-invoice': '마이룸>쇼핑내역>세금계산서조회/신청',
                'https://my.kyobobook.co.kr/library': '마이룸>라이브러리>메인',
                'https://my.kyobobook.co.kr/library/list': '마이룸>라이브러리>리스트',
                'https://my.kyobobook.co.kr/library/comment': '마이룸>라이브러리>코멘트',
                'https://my.kyobobook.co.kr/library/review': '마이룸>라이브러리>클로버리뷰',
                'https://my.kyobobook.co.kr/library/sentences': '마이룸>라이브러리>문장수집',
                'https://my.kyobobook.co.kr/library/wish': '마이룸>라이브러리>찜',
                'https://my.kyobobook.co.kr/library/subscribe': '마이룸>라이브러리>구독',
                'https://my.kyobobook.co.kr/activity/community': '마이룸>활동내역>커뮤니티활동내역',
                'https://my.kyobobook.co.kr/activity/events': '마이룸>활동내역>이벤트참여내역',
                'https://my.kyobobook.co.kr/activity/culture': '마이룸>활동내역>문화공간이용내역',
                'https://order.kyobobook.co.kr/myroom/benefit/coupon-list': '마이룸>혜택/포인트>쿠폰',
                'https://order.kyobobook.co.kr/myroom/benefit/point': '마이룸>혜택/포인트>통합포인트',
                'https://order.kyobobook.co.kr/myroom/benefit/deposit': '마이룸>혜택/포인트>예치금',
                'https://order.kyobobook.co.kr/myroom/benefit/ecash': '마이룸>혜택/포인트>교보e캐시',
                'https://order.kyobobook.co.kr/myroom/benefit/kyobocash': '마이룸>혜택/포인트>교보캐시',
                'https://order.kyobobook.co.kr/myroom/benefit/ecoupon': '마이룸>혜택/포인트>e교환권',
                'https://order.kyobobook.co.kr/myroom/benefit/giftcard': '마이룸>혜택/포인트>기프트카드',
                'https://order.kyobobook.co.kr/myroom/benefit/mileage': '마이룸>혜택/포인트>마일리지',
                'https://my.kyobobook.co.kr/consult/inquiry': '마이룸>문의내역>1:1문의',
                'https://my.kyobobook.co.kr/consult/product': '마이룸>문의내역>상품문의',
                'https://order.kyobobook.co.kr/myroom/member/address': '마이룸>회원정보>배송주소록',
                'https://order.kyobobook.co.kr/myroom/member/regular-store': '마이룸>회원정보>MY매장',
                'https://mmbr.kyobobook.co.kr/member-info': '마이룸>회원정보>회원정보관리>회원정보수정',
                'https://mmbr.kyobobook.co.kr/member-info/sns': '마이룸>회원정보>회원정보관리>로그인설정',
                'https://mmbr.kyobobook.co.kr/member-info/login': '마이룸>회원정보>회원정보관리>로그인정보관리',
                'https://mmbr.kyobobook.co.kr/member-info/subscribe': '마이룸>회원정보>회원정보관리>마케팅수신및정보제공동의관리',
                'https://mmbr.kyobobook.co.kr/member-info/card': '마이룸>회원정보>교보북클럽카드관리',
                'https://mmbr.kyobobook.co.kr/member-info/benefit': '마이룸>회원정보>나의회원등급>나의회원등급혜택',
                'https://my.kyobobook.co.kr/notice': '마이룸>알림함',
                'https://my.kyobobook.co.kr/notice/history': '마이룸>알림신청내역>관심인물',
                'https://my.kyobobook.co.kr/notice/history/series': '마이룸>알림신청내역>관심시리즈/총서',
                'https://my.kyobobook.co.kr/notice/history/stock': '마이룸>알림신청내역>상품입고',
                'https://my.kyobobook.co.kr/notice/history/eBook': '마이룸>알림신청내역>ebook출시',
                'https://my.kyobobook.co.kr/notice/history/mail': '마이룸>알림신청내역>정기메일',
                'https://my.kyobobook.co.kr/notice/history/live': '마이룸>알림신청내역>라이브',
                'https://my.kyobobook.co.kr/notice/history/casting': '마이룸>알림신청내역>캐스팅',
                'https://mmbr.kyobobook.co.kr/benefit': '회원혜택>교보북클럽',
                'https://mmbr.kyobobook.co.kr/benefit/grade': '회원혜택>등급별혜택',
                'https://mmbr.kyobobook.co.kr/benefit/new': '회원혜택>신규회원혜택',
                'https://mmbr.kyobobook.co.kr/benefit/prestige': '회원혜택>PrestigeLounge',
                'https://mmbr.kyobobook.co.kr/benefit/discount': '회원혜택>제휴포인트/상품권',
                'https://mmbr.kyobobook.co.kr/benefit/service': '회원혜택>참좋은교보문고',
                'https://www.kyobobook.co.kr/cscenter': '고객센터>메인',
                'https://www.kyobobook.co.kr/cscenter/faq': '고객센터>자주묻는질문>BEST10',
                'https://www.kyobobook.co.kr/cscenter/qna-form': '고객센터>1:1문의접수',
                'https://www.kyobobook.co.kr/cscenter/notice/list': '고객센터>공지사항',
                'https://big.kyobobook.co.kr/user/main/r/go': '고객센터>법인회원대량주문안내',
                'https://www.kyobobook.co.kr/cscenter/ars': '고객센터>전화상담서비스안내도',
                'https://event.kyobobook.co.kr/winner': '이벤트>당첨자발표',
                'https://order.kyobobook.co.kr/order/order': '주문/결제>주문서>기본화면',
                'https://order.kyobobook.co.kr/order/order-complete': '주문/결제>주문서>주문완료',
                // if문 진행
                'https://www.kyobobook.co.kr/cscenter/notice/detail': '고객센터>공지사항>상세',
                'https://event.kyobobook.co.kr/winner/detail': '이벤트>당첨자발표>상세',
                'https://www.kyobobook.co.kr/cscenter/faq?unfyFaqLscCode={{메뉴코드}}': '고객센터>자주묻는질문>{{메뉴명}}',
                // 교보문고 , 2022.10.17 수정
                'https://www.kyobobook.co.kr/': '교보문고>웰컴>웰컴메인',
                'https://kyobobook.co.kr/': '교보문고>웰컴>웰컴메인',
                'https://onk.kyobobook.co.kr/': '교보문고>웰컴>웰컴메인',
                'https://product.kyobobook.co.kr/bestseller/total': '교보문고>베스트셀러>마케팅팝업',
                'https://product.kyobobook.co.kr/bestseller/online': '교보문고>베스트셀러>온라인베스트',
                'https://product.kyobobook.co.kr/bestseller/realtime': '교보문고>베스트셀러>실시간베스트',
                'https://product.kyobobook.co.kr/bestseller/store': '교보문고>베스트셀러>매장별베스트',
                'https://product.kyobobook.co.kr/bestseller/age': '교보문고>베스트셀러>연령대베스트',
                'https://product.kyobobook.co.kr/bestseller/sale': '교보문고>베스트셀러>특가베스트',
                'https://product.kyobobook.co.kr/bestseller/years': '교보문고>베스트셀러>연도별베스트',
                'https://product.kyobobook.co.kr/bestseller/person': '교보문고>베스트셀러>인물베스트',
                'https://product.kyobobook.co.kr/bestseller/steady': '교보문고>스테디셀러>국내도서/외국도서',
                'https://product.kyobobook.co.kr/new/': '교보문고>신상품>메인',
                'https://product.kyobobook.co.kr/new/KOR': '교보문고>신상품>국내도서',
                'https://product.kyobobook.co.kr/new/ENG': '교보문고>신상품>외국도서',
                'https://product.kyobobook.co.kr/new/culture': '교보문고>신상품>교보only>컬쳐',
                'https://product.kyobobook.co.kr/new/kyobo': '교보문고>신상품>교보only>교보문고굿즈',
                'https://product.kyobobook.co.kr/today-book': '교보문고>오늘의선택',
                'https://product.kyobobook.co.kr/booknflower/main': '교보문고>책그리고꽃',
                'https://www.kyobobook.co.kr/service/profile/main': '교보문고>인물&작품',
                'https://event.kyobobook.co.kr/': '교보문고>이벤트>이벤트메인',
                'https://www.kyobobook.co.kr/service/gift-promotion/main': '교보문고>사은품',
                'https://www.kyobobook.co.kr/present/main': '교보문고>선물하기',
                'https://www.kyobobook.co.kr/review': '교보문고>통합리뷰',
                'https://www.kyobobook.co.kr/handwriting': '교보문고>손글씨캠페인',
                'https://www.kyobobook.co.kr/spring/main': '교보문고>분철서비스',
                'https://www.kyobobook.co.kr/culture/main': '교보문고>문화공간',
                'https://www.kyobobook.co.kr/service/special-price': '교보문고>특가',
                'https://www.kyobobook.co.kr/service/re-price': '교보문고>정가인하',
                'https://www.kyobobook.co.kr/giftcard': '교보문고>기프트카드',
                'https://www.kyobobook.co.kr/read-index': '교보문고>수준별원서읽기',
                'https://www.kyobobook.co.kr/benefit': '교보문고>고객혜택>할인혜택',
                'https://event.kyobobook.co.kr/attendance': '교보문고>이벤트>출석체크',
                'https://kyobobook.co.kr/barodrim': '교보문고>바로드림>메인',
                // if문 진행
                'https://product.kyobobook.co.kr/detail': '교보문고>상품상세',
                'https://www.kyobobook.co.kr/picks/{{탭 주소}}': '교보문고>Picks>{{탭명}}',
                'https://product.kyobobook.co.kr/category/{{카테고리 2값}}/{{카테고리 3값}}': '교보문고>{{카테고리 1depth}}>{{카테고리 2depth}}>{{카테고리 3depth}}',
                // 핫트랙스
                'http://hottracks.kyobobook.co.kr/ht/welcomeMain': '핫트랙스>웰컴메인',
                'http://hottracks.kyobobook.co.kr/ht/coupon/cpnIncnt': '핫트랙스>쿠폰/혜택',
                'http://hottracks.kyobobook.co.kr/ht/product/storeRecv': '핫트랙스>바로드림',
                'https://hottracks.kyobobook.co.kr/ht/loginNouserForm': '핫트랙스>비회원주문조회',
                'http://hottracks.kyobobook.co.kr/ht/record/recordMain': '핫트랙스>음반/영상>음반메인',
                'http://hottracks.kyobobook.co.kr/ht/dvd/category/000401?mainYn=Y': '핫트랙스>음반/영상>DVD메인',
                'http://hottracks.kyobobook.co.kr/ht/dvd/category/000400?mainYn=Y': '핫트랙스>음반/영상>BLU-RAY메인',
                'https://hottracks.kyobobook.co.kr/ht/help/signMain': '핫트랙스>음반/영상>팬사인회목록',
                'http://hottracks.kyobobook.co.kr/ht/record/bestList/0003': '핫트랙스>음반/영상>베스트',
                'http://hottracks.kyobobook.co.kr/ht/record/newRecord/0003': '핫트랙스>음반/영상>신상품',
                'http://hottracks.kyobobook.co.kr/ht/record/audio': '핫트랙스>음반/영상>AUDIOPHILE',
                'http://hottracks.kyobobook.co.kr/ht/record/reserve/0003': '핫트랙스>음반/영상>예약상품',
                'http://hottracks.kyobobook.co.kr/ht/record/lp': '핫트랙스>음반/영상>LPSHOP',
                'http://hottracks.kyobobook.co.kr/ht/hot/hotdealMain?gnbIndex=2': '핫트랙스>오늘만특가',
                'http://hottracks.kyobobook.co.kr/ht/hot/best': '핫트랙스>베스트>{{탭명}}',
                'http://hottracks.kyobobook.co.kr/ht/hot/new': '핫트랙스>신상품>{{탭명}}',
                'http://hottracks.kyobobook.co.kr/ht/hot/freeDelivery': '핫트랙스>무료배송>{{탭명}}',
                'http://hottracks.kyobobook.co.kr/ht/brandDetail?brandId={{브랜드번호}}': '핫트랙스>브랜드샵',
                'http://hottracks.kyobobook.co.kr/ht/gftReco/gftRecoFav?gnbIndex=5': '핫트랙스>선물추천>인기선물',
                'http://hottracks.kyobobook.co.kr/ht/gftReco/gftRecoHot?gnbIndex=5': '핫트랙스>선물추천>핫트추천',
                'https://hottracks.kyobobook.co.kr/ht/gftReco/gftRecoWor?gnbIndex=3': '핫트랙스>선물추천>선물고민',
                'http://hottracks.kyobobook.co.kr/ht/live/liveMain': '핫트랙스>라이브>메인',
                'http://hottracks.kyobobook.co.kr/ht/live/liveDetail/': '핫트랙스>라이브>상세',
                'http://hottracks.kyobobook.co.kr/ht/curation/crtMain?gnbIndex=6': '핫트랙스>큐레이션>큐레이션메인',
                'http://hottracks.kyobobook.co.kr/ht/curation/crtDetail/': '핫트랙스>큐레이션>큐레이션상세',
                'https://hottracks.kyobobook.co.kr/ht/curation/crtMain?gnbIndex=4': '핫트랙스>큐레이션>취향발견',
                'https://hottracks.kyobobook.co.kr/ht/curation/crtMainP?gnbIndex=4': '핫트랙스>큐레이션>맞춤추천',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnExhMain': '핫트랙스>이벤트>기획전',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnExhMain/1': '핫트랙스>이벤트>쇼핑이벤트',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnExhMain/c': '핫트랙스>이벤트>쿠폰상품존',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnExhMain/s': '핫트랙스>이벤트>매장이벤트',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnExhMain/3': '핫트랙스>이벤트>컬쳐이벤트',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnExhMain/w': '핫트랙스>이벤트>당첨자발표',
                'http://hottracks.kyobobook.co.kr/ht/evnExh/evnWinDetail/': '핫트랙스>이벤트>당첨결과보기',
                'http://hottracks.kyobobook.co.kr/ht/{{카테고리}}/detail/': '핫트랙스>상품상세',
                'http://hottracks.kyobobook.co.kr/ht/help/helpMain': '핫트랙스>고객센터>메인',
                'http://hottracks.kyobobook.co.kr/ht/help/faqList': '핫트랙스>고객센터>FAQ',
                'http://hottracks.kyobobook.co.kr/ht/help/businessBuy': '핫트랙스>고객센터>대량구매상담',
                'http://hottracks.kyobobook.co.kr/ht/help/vendorInquiry': '핫트랙스>고객센터>상품입점문의',
                'http://hottracks.kyobobook.co.kr/ht/help/noticeList': '핫트랙스>고객센터>공지사항',
                'http://hottracks.kyobobook.co.kr/ht/help/noticeDetail?notiSeq=': '핫트랙스>고객센터>공지사항>상세',
                'http://hottracks.kyobobook.co.kr/ht/help/serviceInfo/cus_sv01': '핫트랙스>고객센터>서비스안내>각인서비스',
                'http://hottracks.kyobobook.co.kr/ht/help/serviceInfo/cus_sv02': '핫트랙스>고객센터>서비스안내>포장서비스',
                'http://hottracks.kyobobook.co.kr/ht/help/serviceInfo/cus_sv03': '핫트랙스>고객센터>서비스안내>제휴/할인카드',
                'http://hottracks.kyobobook.co.kr/ht/{{카테고리}}/category/': '핫트랙스>카테고리목록>',
                'https://ebook.kyobobook.co.kr/dig/pnd/welcome': '교보문고_eBook스토어>웰컴',
                // 신규 추가 ebook, 2022.10.17
                'https://ebook.kyobobook.co.kr/dig/cff/e-library': '교보문고_eBook스토어>전자도서관',
                'https://ebook-product.kyobobook.co.kr/dig/epd/ebook': '교보문고_eBook스토어>상품상세',
                'https://ebook.kyobobook.co.kr/dig/etc/rtspage': '교보문고_eBook스토어>RTS',
                'https://ebook.kyobobook.co.kr/dig/etc/landing/new': '교보문고_eBook스토어>신간',
                'https://ebook.kyobobook.co.kr/dig/etc/landing/best': '교보문고_eBook스토어>베스트',
                'https://ebook.kyobobook.co.kr/dig/etc/landing/rent': '교보문고_eBook스토어>대여',
                'https://ebook.kyobobook.co.kr/dig/evt/evtclltpage': '교보문고_eBook스토어>이벤트',
                'https://ebook.kyobobook.co.kr/dig/evt/evtclnd': '교보문고_eBook스토어>이벤트>캘린더보기',
                'https://ebook.kyobobook.co.kr/dig/evt/nwpbclnd': '교보문고_eBook스토어>이벤트>캘린더보기>신간',
                'https://ebook.kyobobook.co.kr/dig/cff/notice': '교보문고_eBook스토어>공지사항',
                'https://ebook.kyobobook.co.kr/dig/cff/note': '교보문고_eBook스토어>쪽지목록',
                'https://ebook.kyobobook.co.kr/dig/etc/ebookgdnc': '교보문고_eBook스토어>이용안내',
                'https://ebook.kyobobook.co.kr/dig/etc/ebookitem': '교보문고_eBook스토어>집중탐구',
                'https://elibrary.kyobobook.co.kr/dig/elb/elibrary': '교보문고_eBook스토어>e-라이브러리',
                'https://ecash.kyobobook.co.kr/dig/opr/ecash/guidance': '교보문고_eBook스토어>e캐시>이용안내',
                'https://ecash.kyobobook.co.kr/dig/opr/ecash/general': '교보문고_eBook스토어>e캐시>일반충전',
                'https://ecash.kyobobook.co.kr/dig/opr/ecash/auto': '교보문고_eBook스토어>e캐시>자동충전',
                'https://ecash.kyobobook.co.kr/dig/opr/ecash/description': '교보문고_eBook스토어>e캐시>충전/사용내역',
                'https://ecash.kyobobook.co.kr/dig/opr/ecash/exchange': '교보문고_eBook스토어>e캐시>교환번호등록',
                'https://ecash.kyobobook.co.kr/dig/opr/ecash/conversion': '교보문고_eBook스토어>e캐시>통합포인트전환',
                'https://ebook.kyobobook.co.kr/dig/etc/mmbrbnft': '교보문고_eBook스토어>회원혜택',
                'https://ebook.kyobobook.co.kr/dig/cff/partnership': '교보문고_eBook스토어>제휴문의',
                'https://ebook.kyobobook.co.kr/dig/etc/presentebook': '교보문고_eBook스토어>선물하기',
                // if문 추가
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=1': '교보문고_eBook스토어>일반',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=2': '교보문고_eBook스토어>로맨스',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=4': '교보문고_eBook스토어>BL>BL소설',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=5': '교보문고_eBook스토어>BL>BL만화',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=6': '교보문고_eBook스토어>판타지',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=8': '교보문고_eBook스토어>만화>단행본만화',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=9': '교보문고_eBook스토어>만화>웹툰',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=1372': '교보문고_eBook스토어>오디오',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=19': '교보문고_eBook스토어>교보오리지널',
                'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo={{카테고리 값}}&cmdt=EBK&clst1={{카테고리 값}}&clst2=&clst3=&landing=Y': '교보문고_eBook스토어>{{카테고리 1depth}}>{{카테고리 2depth}}>{{카테고리 3depth}}',
                'https://ebook.kyobobook.co.kr/dig/etc/keywordsrch?lscCtgr={{GNB값}}&mscCtgr={{GNB값}}&keyword={{키워드명}}': '교보문고_eBook스토어>{{GNB 명}}>키워드검색',
                // sam 추가
                'https://sam.kyobobook.co.kr/dig/sam/sambookcnfg': 'SAM>메인>그리고책',
                'https://sam.kyobobook.co.kr/dig/sam/pssbuy': 'SAM>메인>이용권구매',
                'https://sam.kyobobook.co.kr/dig/sam/my-pass/change-payment': 'SAM>My이용권>정기결제수단변경',
                'https://sam.kyobobook.co.kr/dig/sam/my-pass/rdng-register': 'SAM>My이용권>열람권등록',
                'https://ebook.kyobobook.co.kr/dig/evt/samclnd': 'SAM>프리미엄>샘통북통캘린더',
                // 'https://sam.kyobobook.co.kr/dig/sam/landing/new':'SAM>무제한>신간',
                // 'https://sam.kyobobook.co.kr/dig/sam/landing/best':'SAM>무제한>베스트',

                'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo={{카테고리1뎁스}}&cmdt=EBK&clst1={{카테고리 2뎁스}}&clst2={{카테고리 3뎁스}}&clst3=&landing=Y': 'SAM>{{카테고리 1depth}}>{{카테고리 2depth}}>{{카테고리 3depth}}',

                // if 문 추가필요(처리 완료 #L359~373)
                'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=12': 'SAM>메인',
                'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=13': 'SAM>메인>프리미엄',
                'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=326': 'SAM>메인>스페셜>세계문학',
                'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=327': 'SAM>메인>스페셜>판타지무협',
                // 처리 완료 (#L445~459)
                'https://sam.kyobobook.co.kr/dig/sam/my-pass?tabType=SAM': 'SAM>메인>My이용권',
                'https://sam.kyobobook.co.kr/dig/sam/samcnfg?tabType=SAM': 'SAM>sam소개',
                'https://sam.kyobobook.co.kr/dig/sam/samintro?tabType=SAM': 'SAM>14일무료체험',
                'https://sam.kyobobook.co.kr/dig/sam/landing/new?lsc=AUD': 'SAM>무제한>오디오북',
                'https://sam.kyobobook.co.kr/dig/sam/landing/new?pageDvsn=premium&lsc=AUD': 'SAM>프리미엄>오디오북',
                'https://sam.kyobobook.co.kr/dig/sam/landing/new?pageDvsn=premium': 'SAM>프리미엄>신간',
                'https://sam.kyobobook.co.kr/dig/sam/landing/best?pageDvsn=premium': 'SAM>프리미엄>베스트',
                'https://ebook-product.kyobobook.co.kr/dig/epd/sam/{{도서번호}}': 'SAM>상품상세',

                // 2023.10.18 이메일 수신거부 관련 추가
                'https://mmbr.kyobobook.co.kr/reject/mail': '이메일 수신거부',
                'https://mmbr.kyobobook.co.kr/reject/mail/result': '이메일 수신거부>결과',
            }

            // safari 에서는 window.cookieStore 를 사용할수없어 수정
            const user = navigator.userAgent;
            if ((window.safari !== undefined) || ( user.indexOf("iPhone") > -1) || (user.indexOf("iPad") > -1)){
                const pageviewObj = {}
                pageviewObj.ep_visit_channelOption = 'PC'
                let a = (navigator.userAgent || navigator.vendor || window.opera);
                if (ga360.browserInfo.indexOf("GA_Android") > -1 || ga360.browserInfo.indexOf("GA_iOS_WK") > -1) {
                    pageviewObj.ep_visit_channelOption = 'APP'
                }else if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    pageviewObj.ep_visit_channelOption = 'MOWEB'
                }
                pageviewObj.ep_visit_siteOption = '교보문고'
                if (window.location.href.indexOf("ebook.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'ebook'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("ebook-product.") != -1) {
                    if (window.location.pathname.indexOf("/sam/") != -1) {
                        pageviewObj.ep_visit_siteOption = 'sam'
                    } else {
                        pageviewObj.ep_visit_siteOption = 'ebook'
                    }
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("ecash.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'ebook'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("elibrary.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'ebook'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("sam.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'sam'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("hottracks.") != -1) {
                    pageviewObj.ep_visit_siteOption = '핫트랙스'
                } else if (window.location.href.indexOf("search.") != -1) {
                    // https://search.kyobobook.co.kr/search
                    if (window.location.search.indexOf("gbCode") != -1) {
                        // ebook_search : target=ebook
                        // sam_search : target=sam
                        var searchList = window.location.search.split("gbCode=")
                        var searchCode = searchList[1].split("&")[0]
                        // ebook, sam
                        if (searchCode == "EBK") {
                            pageviewObj.ep_visit_siteOption = "ebook"
                        } else if (searchCode == "SAM") {
                            pageviewObj.ep_visit_siteOption = 'sam'
                        } else if (searchCode == "HTS") {
                            pageviewObj.ep_visit_siteOption = '핫트랙스'
                        }
                    }
                }
                // /pod/ 가 들어가있는 모든 url 및 상품상세 페이지 > POD 표시가 있는 경우 "POD"로 데이터 수집
                if (window.location.pathname.indexOf("/pod/") != -1) {
                    pageviewObj.ep_visit_siteOption = 'POD'
                }

                // 검색어를 입력한 "https://search.kyobobook.co.kr/search?keyword=%EA%B2%80%EC%83%89%EC%96%B4&gbCode=TOT&target=total"
                // 와 같은 경우에 키워드를 수집
                if(window.location.origin.indexOf("search.") != -1){
                    if (window.location.pathname.indexOf("search") != -1) {
                        if(window.location.search.indexOf("keyword") != -1){
                            var searchList = window.location.search.split("keyword=")
                            var searchKeyword = searchList[1].split("&")[0]
                            pageviewObj.ep_search_internalSearchWord = decodeURIComponent(searchKeyword)
                            pageviewObj.ep_search_SearchResult = "Y"
                            if(document.getElementsByClassName("result_count")[0]){
                                if(document.getElementsByClassName("result_count")[0].getElementsByClassName("fc_green")[0].textContent.startsWith("0")){
                                    pageviewObj.ep_search_SearchResult = "N"
                                }
                            }
                        }
                    }
                }
                pageviewObj.ep_test_DevProd = "개발"
                pageviewObj.ep_page_fullUrl = window.location.href
                pageviewObj.ep_page_noParameterUrl = window.location.origin + window.location.pathname
                pageviewObj.title = window.document.title //'교보문고>웰컴>웰컴 메인'
                pageviewObj.location = window.location.href // 'https://onk.ndev.kyobobook.co.kr/dd/ee'
                if (pageDict[window.location.origin + window.location.pathname]) {
                    pageviewObj.ep_test_DevProd = "운영"
                    // 'https://www.kyobobook.co.kr/cscenter/faq?unfyFaqLscCode={{메뉴코드}}':'고객센터>자주묻는질문>{{메뉴명}}',
                    if (window.location.pathname.startsWith("/cscenter/faq")) {
                        if (window.location.search != '') {
                            // 2022.10.25 공통 수정
                            if (window.location.search.indexOf("unfyFaqLscCode") != -1) {
                                // unfyFaqLscCode
                                var searchList = window.location.search.split("&")
                                var menuCode = searchList[0].split("=")[1]
                                pageviewObj.title = "고객센터>자주묻는질문>" + menuCode
                            } else {
                                pageviewObj.title = "고객센터>자주묻는질문>BEST10"
                            }
                        } else {
                            pageviewObj.title = "고객센터>자주묻는질문>BEST10"
                        }
                    } else {
                        pageviewObj.title = pageDict[window.location.origin + window.location.pathname]
                    }
                }
                else {
                    // console.log('----- mapping pass ------')
                    if (window.location.origin.indexOf("ndev.") == -1) {
                        pageviewObj.ep_test_DevProd = "운영"
                    }
                    if (window.location.pathname.startsWith("/detail")) {
                        if (window.location.origin == "https://event.kyobobook.co.kr") {
                            pageviewObj.title = "교보문고>이벤트>" + window.document.title.split("|")[0]
                        } else {
                            pageviewObj.title = "교보문고>상품상세"
                        }
                    } else if (window.location.pathname.startsWith("/winner/detail")) {
                        pageviewObj.title = "이벤트>당첨자발표>상세"
                    } else if (window.location.pathname.startsWith("/cscenter/notice/detail")) {
                        pageviewObj.title = "고객센터>공지사항>상세"
                        // 'https://www.kyobobook.co.kr/picks/{{탭 주소}}':'교보문고>Picks>{{탭명}}',
                    } else if (window.location.pathname.startsWith("/picks")) {
                        var tapUrl = window.location.pathname.split("/")[2]
                        pageviewObj.title = "교보문고>Picks>" + tapUrl
                    } else if (window.location.pathname.startsWith("/dig/epd/ebook")) {
                        pageviewObj.title = "교보문고_eBook스토어>상품상세"
                    } else if (window.location.pathname.startsWith("/dig/elb/elibrary")) {
                        pageviewObj.title = "교보문고_eBook스토어>e-라이브러리"
                    } else if (window.location.pathname.startsWith("/dig/pnd/showcase")) {
                        if (((window.location.search != '') && (window.location.origin.indexOf('ebook.'))) != -1) {
                            var searchList = window.location.search.split("&")
                            var menuCode = searchList[0].split("=")[1]
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=1':'교보문고_eBook스토어>일반',
                            if (menuCode == "1")
                                pageviewObj.title = "교보문고_eBook스토어>일반"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=2':'교보문고_eBook스토어>로맨스',
                            else if (menuCode == "2")
                                pageviewObj.title = "교보문고_eBook스토어>로맨스"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=4':'교보문고_eBook스토어>BL>BL소설',
                            else if (menuCode == "4")
                                pageviewObj.title = "교보문고_eBook스토어>BL>BL소설"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=5':'교보문고_eBook스토어>BL>BL만화',
                            else if (menuCode == "5")
                                pageviewObj.title = "교보문고_eBook스토어>BL>BL만화"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=6':'교보문고_eBook스토어>판타지',
                            else if (menuCode == "6")
                                pageviewObj.title = "교보문고_eBook스토어>판타지"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=8':'교보문고_eBook스토어>만화>단행본만화',
                            else if (menuCode == "8")
                                pageviewObj.title = "교보문고_eBook스토어>만화>단행본만화"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=9':'교보문고_eBook스토어>만화>웹툰',
                            else if (menuCode == "9")
                                pageviewObj.title = "교보문고_eBook스토어>만화>웹툰"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=1372':'교보문고_eBook스토어>오디오',
                            else if (menuCode == "1372")
                                pageviewObj.title = "교보문고_eBook스토어>오디오"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=19':'교보문고_eBook스토어>교보오리지널',
                            else if (menuCode == "19")
                                pageviewObj.title = "교보문고_eBook스토어>교보오리지널"
                            // 금주 추후 진행
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo={{카테고리 값}}&cmdt=EBK&clst1={{카테고리 값}}&clst2=&clst3=&landing=Y':'교보문고_eBook스토어>{{카테고리 1depth}}>{{카테고리 2depth}}>{{카테고리 3depth}}',
                            if (window.location.search.split("&").length > 5) {
                                var oneMenu = window.location.search.split("&")[1].split("=")[1] == "EBK" ? "ebook" : window.location.search.split("&")[1].split("=")[1] == "AUD" ? "오디오북" : "동영상"
                                var twoMenu = window.location.search.split("&")[2].split("=")[1]
                                var threeMenu = window.location.search.split("&")[3].split("=")[1]
                                pageviewObj.title = "교보문고_eBook스토어>" + oneMenu + ">" + ebookCateDic[twoMenu] + ">" + ebookCateDic[threeMenu]
                            }
                        } else if (((window.location.search != '') && (window.location.origin.indexOf('sam.'))) != -1) {
                            var searchList = window.location.search.split("&")
                            var menuCode = searchList[0].split("=")[1]
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=12':'SAM>메인',,
                            if (menuCode == "12")
                                pageviewObj.title = 'SAM>메인'
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=13':'SAM>메인>프리미엄',
                            else if (menuCode == "13")
                                pageviewObj.title = 'SAM>메인>프리미엄'
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=326':'SAM>메인>스페셜>세계문학',
                            else if (menuCode == "326")
                                pageviewObj.title = 'SAM>메인>스페셜>세계문학'
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=327':'SAM>메인>스페셜>판타지무협',
                            else if (menuCode == "327")
                                pageviewObj.title = 'SAM>메인>스페셜>판타지무협'
                            if (window.location.search.split("&").length > 5) {
                                var oneMenu = window.location.search.split("&")[1].split("=")[1] == "EBK" ? "ebook" : window.location.search.split("&")[1].split("=")[1] == "AUD" ? "오디오북" : "동영상"
                                var twoMenu = window.location.search.split("&")[2].split("=")[1]
                                var threeMenu = window.location.search.split("&")[3].split("=")[1]
                                pageviewObj.title = "SAM>" + oneMenu + ">" + ebookCateDic[twoMenu] + ">" + ebookCateDic[threeMenu]
                            }
                        }

                        // 금주 추후 진행
                        // 'https://ebook.kyobobook.co.kr/dig/etc/keywordsrch?lscCtgr={{GNB값}}&mscCtgr={{GNB값}}&keyword={{키워드명}}':'교보문고_eBook스토어>{{GNB 명}}>키워드검색',
                    } else if (window.location.pathname.startsWith("/dig/etc/keywordsrch")) {
                        pageviewObj.title = "교보문고_eBook스토어>{{GNB 명}}>키워드검색"
                    }
                        // 금주 추후 진행
                        // 'https://product.kyobobook.co.kr/category/{{카테고리 1값}}/{{카테고리 2 or 3값}}':'교보문고>{{카테고리 1depth}}>{{카테고리 2depth }}> {{카테고리 3depth}}',
                    // }
                    else if (window.location.pathname.startsWith("/category")) {
                        var cateUrlSplit = window.location.pathname.split("/")
                        var cateCode = cateUrlSplit[2]
                        var cateNum = window.location.pathname.split("/")[3]
                        var cateNumLength = cateNum.length
                        cateNum = window.location.pathname.split("/")[3].slice(0, 2)
                        if (cateCode == "KOR") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>국내도서>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>국내도서>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "ENG") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>서양도서>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>서양도서>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "JAP") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>일본도서>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>일본도서>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "CUL") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>강연>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>강연>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "KYO") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>교보Only>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>교보Only>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "PBC") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>교보문고 굿즈>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>교보문고 굿즈>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "GFC") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>교보문고 기프트카드>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>교보문고 기프트카드>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                    } else if (window.location.pathname.startsWith("/dig/sam/my-pass")) {
                        pageviewObj.title = 'SAM>메인>My이용권'
                    } else if (window.location.pathname.startsWith("/dig/sam/samcnfg")) {
                        pageviewObj.title = 'SAM>sam소개'
                    } else if (window.location.pathname.startsWith("/dig/sam/samintro")) {
                        pageviewObj.title = 'SAM>14일무료체험'
                    } else if (window.location.pathname.startsWith("/dig/sam/landing/new")) {
                        if (window.location.search == '?lsc=AUD') {
                            pageviewObj.title = 'SAM>무제한>오디오북'
                        } else if (window.location.search == '?pageDvsn=premium&lsc=AUD') {
                            pageviewObj.title = 'SAM>프리미엄>오디오북'
                        } else if (window.location.search == '?pageDvsn=premium') {
                            pageviewObj.title = 'SAM>프리미엄>신간'
                        } else {
                            pageviewObj.title = 'SAM>무제한>신간'
                        }
                    } else if (window.location.pathname.startsWith("/dig/sam/landing/best")) {
                        if (window.location.search == '?pageDvsn=premium') {
                            pageviewObj.title = 'SAM>프리미엄>베스트'
                        } else {
                            pageviewObj.title = 'SAM>무제한>베스트'
                        }

                    } else if (window.location.pathname.startsWith("/dig/epd/sam/")) {
                        pageviewObj.title = 'SAM>상품상세'
                    }
                }
                pageviewObj.up_loginState = "N"

                if(document.cookie.split("accessToken=")[1]){
                    var accessToken = document.cookie.split("accessToken=")[1].split(";")[0];
                    if (accessToken) {
                        const tokenJson = parseToken(accessToken)
                        const mynum = tokenJson["sub"]
                        const objuid = SHA256(mynum)
                        pageviewObj.ep_uid = objuid
                        pageviewObj.up_loginState = "Y"
                    }
                }
                if(window.location.origin.indexOf("search.") != -1){
                    if (window.location.pathname.indexOf("search") != -1) {
                        if(window.location.search.indexOf("keyword") == -1){
                            // console.log('-------GA_Screen----------')
                            GA_Screen(pageviewObj)
                            // console.log('-------GA_Screen-EndEnd---------')
                        }else{
                            // console.log('-------GA_Screen_Search----------')
                        }
                    }else{
                        // console.log('-------GA_Screen----------')
                        GA_Screen(pageviewObj)
                        // console.log('-------GA_Screen-EndEnd---------')
                    }
                }else{
                    if (window.location.origin.indexOf("event.") != -1 && (window.location.href.indexOf("detail") != -1 || window.location.href.indexOf("make") != -1)) {
                        // console.log('-------GA_Screen_EventDetail----------')
                    } else {
                        // console.log('-------GA_Screen----------')
                        GA_Screen(pageviewObj)
                        // console.log('-------GA_Screen-EndEnd---------')
                    }
                }
            } else {
                // 2022.10.25 쿠키를 가져오기 위해 로직을 then 안으로 수정
                const pageviewObj = {}
                pageviewObj.ep_visit_channelOption = 'PC'
                let a = (navigator.userAgent || navigator.vendor || window.opera);
                if (ga360.browserInfo.indexOf("GA_Android") > -1 || ga360.browserInfo.indexOf("GA_iOS_WK") > -1) {
                    pageviewObj.ep_visit_channelOption = 'APP'
                }
                else if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    pageviewObj.ep_visit_channelOption = 'MOWEB'
                }
                pageviewObj.ep_visit_siteOption = '교보문고'
                if (window.location.href.indexOf("ebook.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'ebook'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("ebook-product.") != -1) {
                    if (window.location.pathname.indexOf("/sam/") != -1) {
                        pageviewObj.ep_visit_siteOption = 'sam'
                    } else {
                        pageviewObj.ep_visit_siteOption = 'ebook'
                    }
                } else if (window.location.href.indexOf("ecash.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'ebook'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("elibrary.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'ebook'
                    if (window.location.origin.indexOf("mmbr.kyobobook.co.kr") != -1) {
                        pageviewObj.ep_visit_siteOption = '교보문고'
                    }
                } else if (window.location.href.indexOf("sam.") != -1) {
                    pageviewObj.ep_visit_siteOption = 'sam'
                } else if (window.location.href.indexOf("hottracks.") != -1) {
                    pageviewObj.ep_visit_siteOption = '핫트랙스'
                } else if (window.location.href.indexOf("search.") != -1) {
                    // https://search.kyobobook.co.kr/search
                    if (window.location.search.indexOf("gbCode") != -1) {
                        // ebook_search : target=ebook
                        // sam_search : target=sam
                        var searchList = window.location.search.split("gbCode=")
                        var searchCode = searchList[1].split("&")[0]
                        // ebook, sam
                        if (searchCode == "EBK") {
                            pageviewObj.ep_visit_siteOption = "ebook"
                        } else if (searchCode == "SAM") {
                            pageviewObj.ep_visit_siteOption = 'sam'
                        } else if (searchCode == "HTS") {
                            pageviewObj.ep_visit_siteOption = '핫트랙스'
                        }
                    }
                }
                // /pod/ 가 들어가있는 모든 url 및 상품상세 페이지 > POD 표시가 있는 경우 "POD"로 데이터 수집
                if (window.location.pathname.indexOf("/pod/") != -1) {
                    pageviewObj.ep_visit_siteOption = 'POD'
                }
                // 검색어를 입력한 "https://search.kyobobook.co.kr/search?keyword=%EA%B2%80%EC%83%89%EC%96%B4&gbCode=TOT&target=total"
                // 와 같은 경우에 키워드를 수집
                if(window.location.origin.indexOf("search.") != -1){
                    if (window.location.pathname.indexOf("search") != -1) {
                        if(window.location.search.indexOf("keyword") != -1){
                            var searchList = window.location.search.split("keyword=")
                            var searchKeyword = searchList[1].split("&")[0]
                            pageviewObj.ep_search_internalSearchWord = decodeURIComponent(searchKeyword)
                            pageviewObj.ep_search_SearchResult = "Y"
                            if(document.getElementsByClassName("result_count")[0]){
                                if(document.getElementsByClassName("result_count")[0].getElementsByClassName("fc_green")[0].textContent.startsWith("0")){
                                    pageviewObj.ep_search_SearchResult = "N"
                                }
                            }
                        }
                    }
                }

                pageviewObj.ep_test_DevProd = "개발"
                pageviewObj.ep_page_fullUrl = window.location.href
                pageviewObj.ep_page_noParameterUrl = window.location.origin + window.location.pathname
                pageviewObj.title = window.document.title //'교보문고>웰컴>웰컴 메인'
                pageviewObj.location = window.location.href // 'https://onk.ndev.kyobobook.co.kr/dd/ee'
                if (pageDict[window.location.origin + window.location.pathname]) {
                    pageviewObj.ep_test_DevProd = "운영"
                    // 'https://www.kyobobook.co.kr/cscenter/faq?unfyFaqLscCode={{메뉴코드}}':'고객센터>자주묻는질문>{{메뉴명}}',
                    if (window.location.pathname.startsWith("/cscenter/faq")) {
                        if (window.location.search != '') {
                            // 2022.10.25 공통 수정
                            if (window.location.search.indexOf("unfyFaqLscCode") != -1) {
                                // unfyFaqLscCode
                                var searchList = window.location.search.split("&")
                                var menuCode = searchList[0].split("=")[1]
                                pageviewObj.title = "고객센터>자주묻는질문>" + menuCode
                            } else {
                                pageviewObj.title = "고객센터>자주묻는질문>BEST10"
                            }
                        } else {
                            pageviewObj.title = "고객센터>자주묻는질문>BEST10"
                        }
                    } else {
                        pageviewObj.title = pageDict[window.location.origin + window.location.pathname]
                    }
                }
                else {
                    // console.log('----- mapping pass ------')
                    if (window.location.origin.indexOf("ndev.") == -1) {
                        pageviewObj.ep_test_DevProd = "운영"
                    }
                    if (window.location.pathname.startsWith("/detail")) {
                        if (window.location.origin == "https://event.kyobobook.co.kr") {
                            pageviewObj.title = "교보문고>이벤트>" + window.document.title.split("|")[0]
                        } else {
                            pageviewObj.title = "교보문고>상품상세"
                        }
                    } else if (window.location.pathname.startsWith("/winner/detail")) {
                        pageviewObj.title = "이벤트>당첨자발표>상세"
                    } else if (window.location.pathname.startsWith("/cscenter/notice/detail")) {
                        pageviewObj.title = "고객센터>공지사항>상세"
                        // 'https://www.kyobobook.co.kr/picks/{{탭 주소}}':'교보문고>Picks>{{탭명}}',
                    } else if (window.location.pathname.startsWith("/picks")) {
                        var tapUrl = window.location.pathname.split("/")[2]
                        pageviewObj.title = "교보문고>Picks>" + tapUrl
                    } else if (window.location.pathname.startsWith("/dig/epd/ebook")) {
                        pageviewObj.title = "교보문고_eBook스토어>상품상세"
                    } else if (window.location.pathname.startsWith("/dig/elb/elibrary")) {
                        pageviewObj.title = "교보문고_eBook스토어>e-라이브러리"
                    } else if (window.location.pathname.startsWith("/dig/pnd/showcase")) {
                        if (((window.location.search != '') && (window.location.origin.indexOf('ebook.'))) != -1) {
                            var searchList = window.location.search.split("&")
                            var menuCode = searchList[0].split("=")[1]
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=1':'교보문고_eBook스토어>일반',
                            if (menuCode == "1")
                                pageviewObj.title = "교보문고_eBook스토어>일반"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=2':'교보문고_eBook스토어>로맨스',
                            else if (menuCode == "2")
                                pageviewObj.title = "교보문고_eBook스토어>로맨스"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=4':'교보문고_eBook스토어>BL>BL소설',
                            else if (menuCode == "4")
                                pageviewObj.title = "교보문고_eBook스토어>BL>BL소설"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=5':'교보문고_eBook스토어>BL>BL만화',
                            else if (menuCode == "5")
                                pageviewObj.title = "교보문고_eBook스토어>BL>BL만화"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=6':'교보문고_eBook스토어>판타지',
                            else if (menuCode == "6")
                                pageviewObj.title = "교보문고_eBook스토어>판타지"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=8':'교보문고_eBook스토어>만화>단행본만화',
                            else if (menuCode == "8")
                                pageviewObj.title = "교보문고_eBook스토어>만화>단행본만화"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=9':'교보문고_eBook스토어>만화>웹툰',
                            else if (menuCode == "9")
                                pageviewObj.title = "교보문고_eBook스토어>만화>웹툰"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=1372':'교보문고_eBook스토어>오디오',
                            else if (menuCode == "1372")
                                pageviewObj.title = "교보문고_eBook스토어>오디오"
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo=19':'교보문고_eBook스토어>교보오리지널',
                            else if (menuCode == "19")
                                pageviewObj.title = "교보문고_eBook스토어>교보오리지널"
                            // 금주 추후 진행
                            // 'https://ebook.kyobobook.co.kr/dig/pnd/showcase?pageNo={{카테고리 값}}&cmdt=EBK&clst1={{카테고리 값}}&clst2=&clst3=&landing=Y':'교보문고_eBook스토어>{{카테고리 1depth}}>{{카테고리 2depth}}>{{카테고리 3depth}}',
                            if (window.location.search.split("&").length > 5) {
                                var oneMenu = window.location.search.split("&")[1].split("=")[1] == "EBK" ? "ebook" : window.location.search.split("&")[1].split("=")[1] == "AUD" ? "오디오북" : "동영상"
                                var twoMenu = window.location.search.split("&")[2].split("=")[1]
                                var threeMenu = window.location.search.split("&")[3].split("=")[1]
                                pageviewObj.title = "교보문고_eBook스토어>" + oneMenu + ">" + ebookCateDic[twoMenu] + ">" + ebookCateDic[threeMenu]
                            }
                        } else if (((window.location.search != '') && (window.location.origin.indexOf('sam.'))) != -1) {
                            var searchList = window.location.search.split("&")
                            var menuCode = searchList[0].split("=")[1]
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=12':'SAM>메인',,
                            if (menuCode == "12")
                                pageviewObj.title = 'SAM>메인'
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=13':'SAM>메인>프리미엄',
                            else if (menuCode == "13")
                                pageviewObj.title = 'SAM>메인>프리미엄'
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=326':'SAM>메인>스페셜>세계문학',
                            else if (menuCode == "326")
                                pageviewObj.title = 'SAM>메인>스페셜>세계문학'
                            // 'https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=327':'SAM>메인>스페셜>판타지무협',
                            else if (menuCode == "327")
                                pageviewObj.title = 'SAM>메인>스페셜>판타지무협'
                            if (window.location.search.split("&").length > 5) {
                                var oneMenu = window.location.search.split("&")[1].split("=")[1] == "EBK" ? "ebook" : window.location.search.split("&")[1].split("=")[1] == "AUD" ? "오디오북" : "동영상"
                                var twoMenu = window.location.search.split("&")[2].split("=")[1]
                                var threeMenu = window.location.search.split("&")[3].split("=")[1]
                                pageviewObj.title = "SAM>" + oneMenu + ">" + ebookCateDic[twoMenu] + ">" + ebookCateDic[threeMenu]
                            }
                        }

                        // 금주 추후 진행
                        // 'https://ebook.kyobobook.co.kr/dig/etc/keywordsrch?lscCtgr={{GNB값}}&mscCtgr={{GNB값}}&keyword={{키워드명}}':'교보문고_eBook스토어>{{GNB 명}}>키워드검색',
                    } else if (window.location.pathname.startsWith("/dig/etc/keywordsrch")) {
                        pageviewObj.title = "교보문고_eBook스토어>{{GNB 명}}>키워드검색"
                    }
                        // 금주 추후 진행
                        // 'https://product.kyobobook.co.kr/category/{{카테고리 1값}}/{{카테고리 2 or 3값}}':'교보문고>{{카테고리 1depth}}>{{카테고리 2depth }}> {{카테고리 3depth}}',
                    // }
                    else if (window.location.pathname.startsWith("/category")) {
                        var cateUrlSplit = window.location.pathname.split("/")
                        var cateCode = cateUrlSplit[2]
                        var cateNum = window.location.pathname.split("/")[3]
                        var cateNumLength = cateNum.length
                        cateNum = window.location.pathname.split("/")[3].slice(0, 2)
                        if (cateCode == "KOR") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>국내도서>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>국내도서>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "ENG") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>서양도서>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>서양도서>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "JAP") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>일본도서>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>일본도서>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "CUL") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>강연>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>강연>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "KYO") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>교보Only>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>교보Only>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "PBC") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>교보문고 굿즈>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>교보문고 굿즈>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                        else if (cateCode == "GFC") {
                            if (cateNumLength == 2) {
                                pageviewObj.title = "교보문고>교보문고 기프트카드>" + category1Dic[cateNum]
                            } else {
                                var cate2Num = window.location.pathname.split("/")[3].slice(0, 4)
                                pageviewObj.title = "교보문고>교보문고 기프트카드>" + category1Dic[cateNum] + ">" + category2Dic[cate2Num]
                            }
                        }
                    } else if (window.location.pathname.startsWith("/dig/sam/my-pass")) {
                        pageviewObj.title = 'SAM>메인>My이용권'
                    } else if (window.location.pathname.startsWith("/dig/sam/samcnfg")) {
                        pageviewObj.title = 'SAM>sam소개'
                    } else if (window.location.pathname.startsWith("/dig/sam/samintro")) {
                        pageviewObj.title = 'SAM>14일무료체험'
                    } else if (window.location.pathname.startsWith("/dig/sam/landing/new")) {
                        if (window.location.search == '?lsc=AUD') {
                            pageviewObj.title = 'SAM>무제한>오디오북'
                        } else if (window.location.search == '?pageDvsn=premium&lsc=AUD') {
                            pageviewObj.title = 'SAM>프리미엄>오디오북'
                        } else if (window.location.search == '?pageDvsn=premium') {
                            pageviewObj.title = 'SAM>프리미엄>신간'
                        } else {
                            pageviewObj.title = 'SAM>무제한>신간'
                        }
                    } else if (window.location.pathname.startsWith("/dig/sam/landing/best")) {
                        if (window.location.search == '?pageDvsn=premium') {
                            pageviewObj.title = 'SAM>프리미엄>베스트'
                        } else {
                            pageviewObj.title = 'SAM>무제한>베스트'
                        }

                    } else if (window.location.pathname.startsWith("/dig/epd/sam/")) {
                        pageviewObj.title = 'SAM>상품상세'
                    }
                }
                pageviewObj.up_loginState = "N"

                if(document.cookie.split("accessToken=")[1]){
                    var accessToken = document.cookie.split("accessToken=")[1].split(";")[0];
                    if (accessToken) {
                        const tokenJson = parseToken(accessToken)
                        const mynum = tokenJson["sub"]
                        const objuid = SHA256(mynum)
                        pageviewObj.ep_uid = objuid
                        pageviewObj.up_loginState = "Y"
                    }
                }
                if(window.location.origin.indexOf("search.") != -1){
                    if (window.location.pathname.indexOf("search") != -1) {
                        if(window.location.search.indexOf("keyword") == -1){
                            // console.log('-------GA_Screen----------')
                            GA_Screen(pageviewObj)
                            // console.log('-------GA_Screen-EndEnd---------')
                        }else{
                            // console.log('-------GA_Screen_Search----------')
                        }
                    }else{
                        // console.log('-------GA_Screen----------')
                        GA_Screen(pageviewObj)
                        // console.log('-------GA_Screen-EndEnd---------')
                    }
                }else{
                    if (window.location.origin.indexOf("event.") != -1 && (window.location.href.indexOf("detail") != -1 || window.location.href.indexOf("make") != -1)) {
                        // console.log('-------GA_Screen_EventDetail----------')
                    } else {
                        // console.log('-------GA_Screen----------')
                        GA_Screen(pageviewObj)
                        // console.log('-------GA_Screen-EndEnd---------')
                    }
                }
            }
            // console.log('-------GA_Event---------')
            // const event_name = 'click_검색_PC'
            // const ep_button_area = '검색'
            // const ep_button_area2 = ""
            // const ep_button_name = '검색_통합검색'
            // const ep_click_variable = '역행자'
            // this.GA_Event(event_name, ep_button_area, ep_button_area2, ep_button_name, ep_click_variable)
            // console.log('-------GA_Event-END---------')
        }

    }

    new Ga360Class()
    // ======================== 1.20230118 함수 추가 ========================
    // 1-1. 타임스탬프 함수
    function ep_test_hitTimestamp() {
        var now = new Date();
        var tzo = -now.getTimezoneOffset();
        var dif = tzo >= 0 ? '+' : '-';
        var pad = function(num) {
            var norm = Math.abs(Math.floor(num));

            return (norm < 10 ? '0' : '') + norm;
        };

        return now.getFullYear()
            + '-' + pad(now.getMonth()+1)
            + '-' + pad(now.getDate())
            + 'T' + pad(now.getHours())
            + ':' + pad(now.getMinutes())
            + ':' + pad(now.getSeconds())
            + pad(now.getMilliseconds())
            + dif + pad(tzo / 60)
            + ':' + pad(tzo % 60);
    }

    // 1-2. GTM 초기화 함수
    // 이전 데이터가 전송되는 것을 방지하기 위해 GTM 내 이벤트 매개변수를 초기화 시킵니다.
    function dataLayerUndefined() {
        var GTMSET = new Object();
        for (var value of dataLayer) {
            for (var key in value) {
                if(key.includes("ep_")) {
                    GTMSET[key] = undefined;
                }
            }
        }

        return dataLayer.push(GTMSET);
    }

    // 1-3. 가상페이지뷰 전용 하이브리드 함수
    // 핫트랙스 가상 페이지뷰 시 앱으로 전달할 때 사용되는 함수입니다.
    function VirHybrid(GADATA) {
        var emptyObject = Convert_Element(GADATA);
        if (ga360.browserInfo.indexOf('HOTTRACKS') > -1 && document.location.hostname.includes('hottracks')) {
            if (ga360.browserInfo.indexOf('GA_Android_HOTTRACKS') > -1) window.hottracksgascriptAndroid.GA_DATA(JSON.stringify(emptyObject));
            else if (ga360.browserInfo.indexOf('GA_iOS_WK_HOTTRACKS') > -1) webkit.messageHandlers.hottracksgascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));
        } else {
            if (ga360.browserInfo.indexOf('GA_Android') > -1) window.kyobogascriptAndroid.GA_DATA(JSON.stringify(emptyObject));
            else if (ga360.browserInfo.indexOf('GA_iOS_WK') > -1) webkit.messageHandlers.kyobogascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));
        }
    }

    // 1-4. 가상페이지뷰 함수
    // 핫트랙스 가상 페이지뷰 시 호출합니다.
    function GA_Virtual(Object) {
        try {
            var GAData = Object;
            if (ga360.browserInfo.indexOf('GA_iOS_WK') > -1 || ga360.browserInfo.indexOf('GA_Android') > -1) {
                GAData.type = "P";
                GAData.ep_test_hitTimestamp = ep_test_hitTimestamp();
                GAData.ep_time_hour = ep_time_hour();
                GAData.ep_time_minute = ep_time_minute();
                VirHybrid(GAData);
            } else {
                GAData.event = 'ga_virtual';
                dataLayer.push(GAData);
                dataLayerUndefined();
            }
        } catch(e) {
            console.error("GA_Virtual 함수 ERROR");
        }
    }
    // 3-2. '시간' 추출 함수
    function ep_time_hour() {
        var now = new Date();
        var hours = ('0' + now.getHours()).slice(-2);

        return hours;
    }

    // 3-3. '분' 추출 함수
    function ep_time_minute() {
        var now = new Date();
        var minutes = ('0' + now.getMinutes()).slice(-2);

        return minutes;
    }
    // ======================== 2.20230118 함수 수정 ========================

    function Convert_Element(RemoveValue) {
        // let return_Value = new Object()
        // console.log('-------RemoveValue---------')
        // if(RemoveValue.length() === 0){
        //   return RemoveValue
        // }
        // for (let key in RemoveValue) {
        //   if (RemoveValue[key] === '' || RemoveValue[key] === undefined || RemoveValue[key] === null) {
        //     delete RemoveValue[key]
        //   }
        // }
        return RemoveValue
    }

    // 하이브리드 코드
    function Hybrid(GADATA) {
        // console.log('-------Hybrid---------')
        // console.log(JSON.stringify(ga360.CommonData))
        // console.log(JSON.stringify(GADATA))
        // GADATA.type = "P"
        // console.log('-------Hybrid end---------')
        let emptyObject = JSON.parse(JSON.stringify(Convert_Element(ga360.CommonData)))
        emptyObject = Object.assign(emptyObject, Convert_Element(GADATA))
        // 20230118 코드 수정 부분 시작: 핫트랙스 이용자 분기처리
        // 핫트랙스 앱 사용자를 구분하여 데이터를 전송합니다.
        // if (ga360.browserInfo.indexOf('HOTTRACKS') > -1 && document.location.hostname.indexOf('hottracks') > -1) {
        //   if (ga360.browserInfo.indexOf('GA_Android_HOTTRACKS') > -1) window.hottracksgascriptAndroid.GA_DATA(JSON.stringify(emptyObject));
        //   else if (ga360.browserInfo.indexOf('GA_iOS_WK_HOTTRACKS') > -1) webkit.messageHandlers.hottracksgascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));
        // } else {
        if (ga360.browserInfo.indexOf('GA_Android') > -1) window.kyobogascriptAndroid.GA_DATA(JSON.stringify(emptyObject))
        else if (ga360.browserInfo.indexOf('GA_iOS_WK') > -1) webkit.messageHandlers.kyobogascriptCallbackHandler.postMessage(JSON.stringify(emptyObject))
        // }
    }

    // 공통 화면 함수
    function GA_Screen(Object) {
        try {
            const CommonData = Object
            if (ga360.browserInfo.indexOf('GA_iOS_WK') > -1 || ga360.browserInfo.indexOf('GA_Android') > -1) {
                CommonData.type = 'P'
                // 20230118 코드 수정 부분 시작
                CommonData.ep_test_hitTimestamp = ep_test_hitTimestamp();
                CommonData.ep_time_hour = ep_time_hour();
                CommonData.ep_time_minute = ep_time_minute();
                // 20230118 코드 수정 부분 끝
                Hybrid(CommonData)
            }
            else {
                const w = window
                const d = document
                const s = 'script'
                const l = 'dataLayer'
                const i = 'GTM-TWGDFSP'
                w[l] = w[l] || []
                if (isEventDomain){
                    w[l].splice(0, 0, CommonData)
                }else {
                    w[l].push(CommonData)
                }
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
                const f = d.getElementsByTagName(s)[0]; const j = d.createElement(s); const dl = l != 'dataLayer' ? '&l=' + l : ''
                j.async = true
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
                f.parentNode.insertBefore(j, f)
            }
        } catch (e) {
            // console.log('APP 코드 시 ERROR')
            console.error(e)
        }
    }

    // 공통 이벤트 함수
    function GA_Event(event_name, ep_button_area, ep_button_area2, ep_button_name, ep_click_variable, ep_search_internalSearchWord) {
        try {
            // console.log('-------ga-event-in-------')
            if (ga360.browserInfo.indexOf('GA_iOS_WK') > -1 || ga360.browserInfo.indexOf('GA_Android') > -1) {
                const GAData = {}
                GAData.event_name = event_name
                GAData.type = 'E'
                GAData.ep_button_area = ep_button_area
                GAData.ep_button_area2 = ep_button_area2
                GAData.ep_button_name = ep_button_name
                GAData.ep_click_variable = ep_click_variable
                GAData.ep_search_internalSearchWord = ep_search_internalSearchWord
                // 20230118 코드 수정 부분 시작
                GAData.ep_test_hitTimestamp = ep_test_hitTimestamp();
                GAData.ep_time_hour = ep_time_hour();
                GAData.ep_time_minute = ep_time_minute();
                // 20230118 코드 수정 부분 끝
                Hybrid(GAData)
            } else {
                // console.log('-------ga-event-else-in-------')
                const w = window
                const d = document
                const s = 'script'
                const l = 'dataLayer'
                w[l] = w[l] || []
                w[l].push({
                    event: 'ga_event',
                    event_name: event_name,
                    ep_button_area: ep_button_area,
                    ep_button_area2: ep_button_area2,
                    ep_button_name: ep_button_name,
                    ep_click_variable: ep_click_variable,
                    ep_search_internalSearchWord: ep_search_internalSearchWord
                })
                // console.log('-------ga-event-else-out-------')
                // console.log(w[l])
            }
        } catch (e) {
            console.error(e)
        }
    }

    // 공통 전자상거래 함수
    function EcommerceSet(E_step, items, actionList, addDimension, addMetric) {
        try {
            if (ga360.browserInfo.indexOf('GA_iOS_WK') > -1 || ga360.browserInfo.indexOf('GA_Android') > -1) {
                var APPData = new Object();
                APPData.event_name = E_step;
                APPData.type = "E";
                // 20230118 코드 수정 부분 시작 - 1
                APPData.ep_test_hitTimestamp = ep_test_hitTimestamp();
                APPData.ep_time_hour = ep_time_hour();
                APPData.ep_time_minute = ep_time_minute();
                // 20230118 코드 수정 부분 끝 - 1
                APPData.items = items;
                APPData.transaction = actionList;
                APPData = Object.assign(APPData, addDimension, addMetric);
                Hybrid(APPData)
            } else {
                var Ecommerce = new Object();
                var DataSend = new Object();
                Ecommerce = { items: [] }
                Ecommerce.items = items;
                var EcommerceData = Object.assign({}, Ecommerce, actionList);

                DataSend = Object.assign({}, addDimension, addMetric)
                DataSend.event = 'ga_ecommerce';
                DataSend.event_name = E_step;
                DataSend.ecommerce = EcommerceData;
                dataLayer.push(DataSend);
                dataLayer.push({
                    'ecommerce': undefined,
                    'event_name': undefined,
                    'ep_ecommerce_section': undefined,
                    'ep_order_baroDreamType': undefined,
                    'ep_order_baroDreamPlace': undefined,
                    'ep_order_mainPayOption': undefined,
                    'ep_order_partnershipPointSave': undefined,
                    'ep_order_partnershipPointUse': undefined,
                    'ep_order_serviceFee': undefined,
                    'ep_order_giftPackingFee': undefined,
                    'ep_order_shippingInfo': undefined,
                    'ep_order_total': undefined,
                    'ep_order_bookTotal': undefined,
                    'ep_order_discount': undefined,
                    'ep_order_couponUsed': undefined,
                    'ep_order_pointUsed': undefined,
                    'ep_order_depositUsed': undefined,
                    'ep_order_cashUsed': undefined,
                    'ep_order_eBookcashUsed': undefined,
                    'ep_order_eticketUsed': undefined,
                    'ep_order_mileageUsed': undefined,
                    'ep_order_giftcardUsed': undefined,
                    'ep_order_partnershippointUse': undefined,
                    'ep_order_smilecashUsed': undefined,
                    'ep_order_pointReserve': undefined
                })
            }
        } catch (e) {
            console.error(e)
        }
    }

    /**
     *
     *  Secure Hash Algorithm (SHA256)
     *  http://www.webtoolkit.info/
     *
     *  Original code by Angel Marin, Paul Johnston.
     *
     **/

    function SHA256(s) {
        var chrsz = 8;
        var hexcase = 0;

        function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }

        function S(X, n) { return (X >>> n) | (X << (32 - n)); }
        function R(X, n) { return (X >>> n); }
        function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
        function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
        function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
        function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
        function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
        function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

        function core_sha256(m, l) {

            var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1,
                0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
                0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786,
                0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
                0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147,
                0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
                0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B,
                0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
                0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A,
                0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
                0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);

            var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);

            var W = new Array(64);
            var a, b, c, d, e, f, g, h, i, j;
            var T1, T2;

            m[l >> 5] |= 0x80 << (24 - l % 32);
            m[((l + 64 >> 9) << 4) + 15] = l;

            for (var i = 0; i < m.length; i += 16) {
                a = HASH[0];
                b = HASH[1];
                c = HASH[2];
                d = HASH[3];
                e = HASH[4];
                f = HASH[5];
                g = HASH[6];
                h = HASH[7];

                for (var j = 0; j < 64; j++) {
                    if (j < 16) W[j] = m[j + i];
                    else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

                    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                    T2 = safe_add(Sigma0256(a), Maj(a, b, c));

                    h = g;
                    g = f;
                    f = e;
                    e = safe_add(d, T1);
                    d = c;
                    c = b;
                    b = a;
                    a = safe_add(T1, T2);
                }

                HASH[0] = safe_add(a, HASH[0]);
                HASH[1] = safe_add(b, HASH[1]);
                HASH[2] = safe_add(c, HASH[2]);
                HASH[3] = safe_add(d, HASH[3]);
                HASH[4] = safe_add(e, HASH[4]);
                HASH[5] = safe_add(f, HASH[5]);
                HASH[6] = safe_add(g, HASH[6]);
                HASH[7] = safe_add(h, HASH[7]);
            }
            return HASH;
        }

        function str2binb(str) {
            var bin = Array();
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < str.length * chrsz; i += chrsz) {
                bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
            }
            return bin;
        }

        function Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        }

        function binb2hex(binarray) {
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                    hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
            }
            return str;
        }
        s = Utf8Encode(s);
        return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
    }

    /**
     * JWT Payload 파싱
     * @param {string} token - JWT
     * @returns {string}
     */
    function parseToken(token) {
        // JWT payload 문자열 파싱
        let payload = token.split('.')
        if (payload.length < 2) return null
        payload = payload[1]
        // Base64 디코딩
        const decoded = decodeBase64(payload, 'json')
        const result = {}
        Object.keys(decoded).forEach(k => {
            const value = decoded[k]
            result[k] = value
        })
        return result
    }
    /**
     * Base64 문자열 디코딩
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
     * @param {string} value - Base64 문자열
     * @param {'JSON'|'ARRAY'} [type] - JSON, ARRAY
     * @returns {string|string[]|JSON}
     */
    function decodeBase64(value, type) {
        value = replIncorrectTokenStr(value)
        let decoded
        try {
            decoded = decodeURIComponent(window.atob(value))
            return JSON.parse(decoded)
        } catch (err) {
            return value
        }
        return decoded
    }

    function isEventDomain(){
        if (window.location.origin.indexOf("event.") != -1 && (window.location.href.indexOf("detail") != -1 || window.location.href.indexOf("make") != -1)) {
            return true
        } else {
            return false
        }
    }

    /**
     * token 값 base64 형식으로 변환
     * @param {string} base64String
     * @returns {string}
     */
    function replIncorrectTokenStr(base64String) {
        // console.log(base64String)
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/')
        return base64
    }

    (function (a) { (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);
    $.browser.isMobile = function () {
        let a = (navigator.userAgent || navigator.vendor || window.opera);
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    }

    window.ga360 = {
        GA_Event: (event_name, ep_button_area, ep_button_area2, ep_button_name, ep_click_variable, ep_search_internalSearchWord) => {
            return GA_Event(event_name, ep_button_area, ep_button_area2, ep_button_name, ep_click_variable, ep_search_internalSearchWord)
        },
        EcommerceSet: (E_step, items, actionList, addDimension, addMetric) => {
            return EcommerceSet(E_step, items, actionList, addDimension, addMetric)
        },
        GA_Screen: (object) => {
            return GA_Screen(object)
        },
        parseToken : (token) =>{
            return parseToken(token)
        },
        SHA256 : (text) =>{
            return SHA256(text)
        }
    }
}())
