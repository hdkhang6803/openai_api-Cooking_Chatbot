(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return t(2373)
            }])
        },
        2373: function (n, e, t) {
            "use strict";

            function r(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            t.r(e), t.d(e, {
                default: function () {
                    return c
                }
            });
            var u = t(5893),
                o = (t(8794), t(7294));

            function c(n) {
                var e = n.Component,
                    c = n.pageProps;
                return o.useEffect((function () {
                    return t.e(807).then(t.bind(t, 886))
                })), (0, u.jsx)(e, function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            u = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (u = u.concat(Object.getOwnPropertySymbols(t).filter((function (n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })))), u.forEach((function (e) {
                            r(n, e, t[e])
                        }))
                    }
                    return n
                }({}, c))
            }
        },
        8794: function () { }
    },
    function (n) {
        var e = function (e) {
            return n(n.s = e)
        };
        n.O(0, [774, 179], (function () {
            return e(1118), e(387)
        }));
        var t = n.O();
        _N_E = t
    }
]);