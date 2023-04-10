(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [921], {
        82330: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, i) {
                try {
                    return function e(i, a) {
                        if (i === a) return !0;
                        if (i && a && "object" == typeof i && "object" == typeof a) {
                            var s, f, c, u;
                            if (i.constructor !== a.constructor) return !1;
                            if (Array.isArray(i)) {
                                if ((s = i.length) != a.length) return !1;
                                for (f = s; 0 != f--;)
                                    if (!e(i[f], a[f])) return !1;
                                return !0
                            }
                            if (n && i instanceof Map && a instanceof Map) {
                                if (i.size !== a.size) return !1;
                                for (u = i.entries(); !(f = u.next()).done;)
                                    if (!a.has(f.value[0])) return !1;
                                for (u = i.entries(); !(f = u.next()).done;)
                                    if (!e(f.value[1], a.get(f.value[0]))) return !1;
                                return !0
                            }
                            if (r && i instanceof Set && a instanceof Set) {
                                if (i.size !== a.size) return !1;
                                for (u = i.entries(); !(f = u.next()).done;)
                                    if (!a.has(f.value[0])) return !1;
                                return !0
                            }
                            if (o && ArrayBuffer.isView(i) && ArrayBuffer.isView(a)) {
                                if ((s = i.length) != a.length) return !1;
                                for (f = s; 0 != f--;)
                                    if (i[f] !== a[f]) return !1;
                                return !0
                            }
                            if (i.constructor === RegExp) return i.source === a.source && i.flags === a.flags;
                            if (i.valueOf !== Object.prototype.valueOf) return i.valueOf() === a.valueOf();
                            if (i.toString !== Object.prototype.toString) return i.toString() === a.toString();
                            if ((s = (c = Object.keys(i)).length) !== Object.keys(a).length) return !1;
                            for (f = s; 0 != f--;)
                                if (!Object.prototype.hasOwnProperty.call(a, c[f])) return !1;
                            if (t && i instanceof Element) return !1;
                            for (f = s; 0 != f--;)
                                if (("_owner" !== c[f] && "__v" !== c[f] && "__o" !== c[f] || !i.$$typeof) && !e(i[c[f]], a[c[f]])) return !1;
                            return !0
                        }
                        return i != i && a != a
                    }(e, i)
                } catch (a) {
                    if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw a
                }
            }
        },
        65921: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return eb
                }
            });
            var r = n(70079),
                o = n(99581);

            function i(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function a(e) {
                var t = i(e).Element;
                return e instanceof t || e instanceof Element
            }

            function s(e) {
                var t = i(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function f(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = i(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
            var c = Math.max,
                u = Math.min,
                p = Math.round;

            function l() {
                var e = navigator.userAgentData;
                return null != e && e.brands ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function d() {
                return !/^((?!chrome|android).)*safari/i.test(l())
            }

            function m(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    o = 1,
                    f = 1;
                t && s(e) && (o = e.offsetWidth > 0 && p(r.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && p(r.height) / e.offsetHeight || 1);
                var c = (a(e) ? i(e) : window).visualViewport,
                    u = !d() && n,
                    l = (r.left + (u && c ? c.offsetLeft : 0)) / o,
                    m = (r.top + (u && c ? c.offsetTop : 0)) / f,
                    h = r.width / o,
                    v = r.height / f;
                return {
                    width: h,
                    height: v,
                    top: m,
                    right: l + h,
                    bottom: m + v,
                    left: l,
                    x: l,
                    y: m
                }
            }

            function h(e) {
                var t, n = i(e);
                return {
                    scrollLeft: n.pageXOffset,
                    scrollTop: n.pageYOffset
                }
            }

            function v(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function y(e) {
                return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function g(e) {
                return m(y(e)).left + h(e).scrollLeft
            }

            function b(e) {
                return i(e).getComputedStyle(e)
            }

            function w(e) {
                var t = b(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function x(e) {
                var t = m(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - r) && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function O(e) {
                return "html" === v(e) ? e : e.assignedSlot || e.parentNode || (f(e) ? e.host : null) || y(e)
            }

            function j(e, t) {
                void 0 === t && (t = []);
                var n, r = function e(t) {
                        return ["html", "body", "#document"].indexOf(v(t)) >= 0 ? t.ownerDocument.body : s(t) && w(t) ? t : e(O(t))
                    }(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = i(r),
                    f = o ? [a].concat(a.visualViewport || [], w(r) ? r : []) : r,
                    c = t.concat(f);
                return o ? c : c.concat(j(O(f)))
            }

            function E(e) {
                return ["table", "td", "th"].indexOf(v(e)) >= 0
            }

            function A(e) {
                return s(e) && "fixed" !== b(e).position ? e.offsetParent : null
            }

            function D(e) {
                for (var t = i(e), n = A(e); n && E(n) && "static" === b(n).position;) n = A(n);
                return n && ("html" === v(n) || "body" === v(n) && "static" === b(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(l());
                    if (/Trident/i.test(l()) && s(e) && "fixed" === b(e).position) return null;
                    var n = O(e);
                    for (f(n) && (n = n.host); s(n) && 0 > ["html", "body"].indexOf(v(n));) {
                        var r = b(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var k = "bottom",
                M = "right",
                S = "left",
                L = "auto",
                P = ["top", k, M, S],
                B = "start",
                W = "viewport",
                R = "popper",
                H = P.reduce(function(e, t) {
                    return e.concat([t + "-" + B, t + "-end"])
                }, []),
                T = [].concat(P, [L]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + B, t + "-end"])
                }, []),
                V = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                C = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function _() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var q = {
                passive: !0
            };

            function U(e) {
                return e.split("-")[0]
            }

            function F(e) {
                return e.split("-")[1]
            }

            function N(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function z(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? U(o) : null,
                    a = o ? F(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    f = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case k:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case M:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case S:
                        t = {
                            x: n.x - r.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? N(i) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case B:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case "end":
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var I = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function X(e) {
                var t, n, r = e.popper,
                    o = e.popperRect,
                    a = e.placement,
                    s = e.variation,
                    f = e.offsets,
                    c = e.position,
                    u = e.gpuAcceleration,
                    l = e.adaptive,
                    d = e.roundOffsets,
                    m = e.isFixed,
                    h = f.x,
                    v = void 0 === h ? 0 : h,
                    g = f.y,
                    w = void 0 === g ? 0 : g,
                    x = "function" == typeof d ? d({
                        x: v,
                        y: w
                    }) : {
                        x: v,
                        y: w
                    };
                v = x.x, w = x.y;
                var O = f.hasOwnProperty("x"),
                    j = f.hasOwnProperty("y"),
                    E = S,
                    A = "top",
                    L = window;
                if (l) {
                    var P = D(r),
                        B = "clientHeight",
                        W = "clientWidth";
                    P === i(r) && (P = y(r), "static" !== b(P).position && "absolute" === c && (B = "scrollHeight", W = "scrollWidth")), ("top" === a || (a === S || a === M) && "end" === s) && (A = k, w -= (m && P === L && L.visualViewport ? L.visualViewport.height : P[B]) - o.height, w *= u ? 1 : -1), (a === S || ("top" === a || a === k) && "end" === s) && (E = M, v -= (m && P === L && L.visualViewport ? L.visualViewport.width : P[W]) - o.width, v *= u ? 1 : -1)
                }
                var R, H, T, V, C = Object.assign({
                        position: c
                    }, l && I),
                    _ = !0 === d ? (H = (R = {
                        x: v,
                        y: w
                    }).x, T = R.y, {
                        x: p(H * (V = window.devicePixelRatio || 1)) / V || 0,
                        y: p(T * V) / V || 0
                    }) : {
                        x: v,
                        y: w
                    };
                return (v = _.x, w = _.y, u) ? Object.assign({}, C, ((n = {})[A] = j ? "0" : "", n[E] = O ? "0" : "", n.transform = 1 >= (L.devicePixelRatio || 1) ? "translate(" + v + "px, " + w + "px)" : "translate3d(" + v + "px, " + w + "px, 0)", n)) : Object.assign({}, C, ((t = {})[A] = j ? w + "px" : "", t[E] = O ? v + "px" : "", t.transform = "", t))
            }
            var Y = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function $(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return Y[e]
                })
            }
            var G = {
                start: "end",
                end: "start"
            };

            function J(e) {
                return e.replace(/start|end/g, function(e) {
                    return G[e]
                })
            }

            function K(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && f(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function Q(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Z(e, t, n) {
                var r, o, s, f, u, p, l, v, w, x, O, j;
                return t === W ? Q(function(e, t) {
                    var n = i(e),
                        r = y(e),
                        o = n.visualViewport,
                        a = r.clientWidth,
                        s = r.clientHeight,
                        f = 0,
                        c = 0;
                    if (o) {
                        a = o.width, s = o.height;
                        var u = d();
                        (u || !u && "fixed" === t) && (f = o.offsetLeft, c = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: f + g(e),
                        y: c
                    }
                }(e, n)) : a(t) ? ((s = m(t, !1, "fixed" === n)).top = s.top + t.clientTop, s.left = s.left + t.clientLeft, s.bottom = s.top + t.clientHeight, s.right = s.left + t.clientWidth, s.width = t.clientWidth, s.height = t.clientHeight, s.x = s.left, s.y = s.top, s) : Q((f = y(e), p = y(f), l = h(f), v = null == (u = f.ownerDocument) ? void 0 : u.body, w = c(p.scrollWidth, p.clientWidth, v ? v.scrollWidth : 0, v ? v.clientWidth : 0), x = c(p.scrollHeight, p.clientHeight, v ? v.scrollHeight : 0, v ? v.clientHeight : 0), O = -l.scrollLeft + g(f), j = -l.scrollTop, "rtl" === b(v || p).direction && (O += c(p.clientWidth, v ? v.clientWidth : 0) - w), {
                    width: w,
                    height: x,
                    x: O,
                    y: j
                }))
            }

            function ee() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function et(e) {
                return Object.assign({}, ee(), e)
            }

            function en(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function er(e, t) {
                void 0 === t && (t = {});
                var n, r, o, i, f, p, l, d, h, g, w = t,
                    x = w.placement,
                    E = void 0 === x ? e.placement : x,
                    A = w.strategy,
                    S = void 0 === A ? e.strategy : A,
                    L = w.boundary,
                    B = w.rootBoundary,
                    H = w.elementContext,
                    T = void 0 === H ? R : H,
                    V = w.altBoundary,
                    C = w.padding,
                    _ = void 0 === C ? 0 : C,
                    q = et("number" != typeof _ ? _ : en(_, P)),
                    U = e.rects.popper,
                    F = e.elements[void 0 !== V && V ? T === R ? "reference" : R : T],
                    N = (n = a(F) ? F : F.contextElement || y(e.elements.popper), h = (d = [].concat("clippingParents" === (r = void 0 === L ? "clippingParents" : L) ? (p = j(O(n)), l = ["absolute", "fixed"].indexOf(b(n).position) >= 0 && s(n) ? D(n) : n, a(l) ? p.filter(function(e) {
                        return a(e) && K(e, l) && "body" !== v(e)
                    }) : []) : [].concat(r), [void 0 === B ? W : B]))[0], (g = d.reduce(function(e, t) {
                        var r = Z(n, t, S);
                        return e.top = c(r.top, e.top), e.right = u(r.right, e.right), e.bottom = u(r.bottom, e.bottom), e.left = c(r.left, e.left), e
                    }, Z(n, h, S))).width = g.right - g.left, g.height = g.bottom - g.top, g.x = g.left, g.y = g.top, g),
                    I = m(e.elements.reference),
                    X = z({
                        reference: I,
                        element: U,
                        strategy: "absolute",
                        placement: E
                    }),
                    Y = Q(Object.assign({}, U, X)),
                    $ = T === R ? Y : I,
                    G = {
                        top: N.top - $.top + q.top,
                        bottom: $.bottom - N.bottom + q.bottom,
                        left: N.left - $.left + q.left,
                        right: $.right - N.right + q.right
                    },
                    J = e.modifiersData.offset;
                if (T === R && J) {
                    var ee = J[E];
                    Object.keys(G).forEach(function(e) {
                        var t = [M, k].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", k].indexOf(e) >= 0 ? "y" : "x";
                        G[e] += ee[n] * t
                    })
                }
                return G
            }

            function eo(e, t, n) {
                return c(e, u(t, n))
            }

            function ei(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ea(e) {
                return ["top", M, k, S].some(function(t) {
                    return e[t] >= 0
                })
            }
            var es, ef, ec, eu, ep, el, ed = (es = {
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                o = r.scroll,
                                a = void 0 === o || o,
                                s = r.resize,
                                f = void 0 === s || s,
                                c = i(t.elements.popper),
                                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && u.forEach(function(e) {
                                    e.addEventListener("scroll", n.update, q)
                                }), f && c.addEventListener("resize", n.update, q),
                                function() {
                                    a && u.forEach(function(e) {
                                        e.removeEventListener("scroll", n.update, q)
                                    }), f && c.removeEventListener("resize", n.update, q)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = z({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = n.adaptive,
                                i = n.roundOffsets,
                                a = void 0 === i || i,
                                s = {
                                    placement: U(t.placement),
                                    variation: F(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === r || r,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, X(Object.assign({}, s, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: void 0 === o || o,
                                roundOffsets: a
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, X(Object.assign({}, s, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: a
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                s(o) && v(o) && (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                }))
                            })
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach(function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                                return e[t] = "", e
                                            }, {});
                                        s(r) && v(r) && (Object.assign(r.style, i), Object.keys(o).forEach(function(e) {
                                            r.removeAttribute(e)
                                        }))
                                    })
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = T.reduce(function(e, n) {
                                    var r, o, a, s, f, c, u, p;
                                    return e[n] = (o = t.rects, f = [S, "top"].indexOf(s = U(n)) >= 0 ? -1 : 1, u = (c = "function" == typeof i ? i(Object.assign({}, o, {
                                        placement: n
                                    })) : i)[0], p = c[1], u = u || 0, p = (p || 0) * f, [S, M].indexOf(s) >= 0 ? {
                                        x: p,
                                        y: u
                                    } : {
                                        x: u,
                                        y: p
                                    }), e
                                }, {}),
                                s = a[t.placement],
                                f = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, h = n.allowedAutoPlacements, v = t.options.placement, y = U(v), g = [v].concat(f || (y !== v && m ? function(e) {
                                        if (U(e) === L) return [];
                                        var t = $(e);
                                        return [J(e), t, J(t)]
                                    }(v) : [$(v)])).reduce(function(e, n) {
                                        var r, o, i, a, s, f, l, d, v, y, g, b, w, x;
                                        return e.concat(U(n) === L ? (o = {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: p,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }, a = (i = o).placement, s = i.boundary, f = i.rootBoundary, l = i.padding, d = i.flipVariations, y = void 0 === (v = i.allowedAutoPlacements) ? T : v, 0 === (w = (b = (g = F(a)) ? d ? H : H.filter(function(e) {
                                            return F(e) === g
                                        }) : P).filter(function(e) {
                                            return y.indexOf(e) >= 0
                                        })).length && (w = b), Object.keys(x = w.reduce(function(e, n) {
                                            return e[n] = er(t, {
                                                placement: n,
                                                boundary: s,
                                                rootBoundary: f,
                                                padding: l
                                            })[U(n)], e
                                        }, {})).sort(function(e, t) {
                                            return x[e] - x[t]
                                        })) : n)
                                    }, []), b = t.rects.reference, w = t.rects.popper, x = new Map, O = !0, j = g[0], E = 0; E < g.length; E++) {
                                    var A = g[E],
                                        D = U(A),
                                        W = F(A) === B,
                                        R = ["top", k].indexOf(D) >= 0,
                                        V = R ? "width" : "height",
                                        C = er(t, {
                                            placement: A,
                                            boundary: u,
                                            rootBoundary: p,
                                            altBoundary: l,
                                            padding: c
                                        }),
                                        _ = R ? W ? M : S : W ? k : "top";
                                    b[V] > w[V] && (_ = $(_));
                                    var q = $(_),
                                        N = [];
                                    if (i && N.push(C[D] <= 0), s && N.push(C[_] <= 0, C[q] <= 0), N.every(function(e) {
                                            return e
                                        })) {
                                        j = A, O = !1;
                                        break
                                    }
                                    x.set(A, N)
                                }
                                if (O)
                                    for (var z = m ? 3 : 1, I = function(e) {
                                            var t = g.find(function(t) {
                                                var n = x.get(t);
                                                if (n) return n.slice(0, e).every(function(e) {
                                                    return e
                                                })
                                            });
                                            if (t) return j = t, "break"
                                        }, X = z; X > 0 && "break" !== I(X); X--);
                                t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.options,
                                o = e.name,
                                i = r.mainAxis,
                                a = r.altAxis,
                                s = r.boundary,
                                f = r.rootBoundary,
                                p = r.altBoundary,
                                l = r.padding,
                                d = r.tether,
                                m = void 0 === d || d,
                                h = r.tetherOffset,
                                v = void 0 === h ? 0 : h,
                                y = er(n, {
                                    boundary: s,
                                    rootBoundary: f,
                                    padding: l,
                                    altBoundary: p
                                }),
                                g = U(n.placement),
                                b = F(n.placement),
                                w = !b,
                                O = N(g),
                                j = "x" === O ? "y" : "x",
                                E = n.modifiersData.popperOffsets,
                                A = n.rects.reference,
                                L = n.rects.popper,
                                P = "function" == typeof v ? v(Object.assign({}, n.rects, {
                                    placement: n.placement
                                })) : v,
                                W = "number" == typeof P ? {
                                    mainAxis: P,
                                    altAxis: P
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, P),
                                R = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
                                H = {
                                    x: 0,
                                    y: 0
                                };
                            if (E) {
                                if (void 0 === i || i) {
                                    var T, V = "y" === O ? "top" : S,
                                        C = "y" === O ? k : M,
                                        _ = "y" === O ? "height" : "width",
                                        q = E[O],
                                        z = q + y[V],
                                        I = q - y[C],
                                        X = m ? -L[_] / 2 : 0,
                                        Y = b === B ? A[_] : L[_],
                                        $ = b === B ? -L[_] : -A[_],
                                        G = n.elements.arrow,
                                        J = m && G ? x(G) : {
                                            width: 0,
                                            height: 0
                                        },
                                        K = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : ee(),
                                        Q = K[V],
                                        Z = K[C],
                                        et = eo(0, A[_], J[_]),
                                        en = w ? A[_] / 2 - X - et - Q - W.mainAxis : Y - et - Q - W.mainAxis,
                                        ei = w ? -A[_] / 2 + X + et + Z + W.mainAxis : $ + et + Z + W.mainAxis,
                                        ea = n.elements.arrow && D(n.elements.arrow),
                                        es = ea ? "y" === O ? ea.clientTop || 0 : ea.clientLeft || 0 : 0,
                                        ef = null != (T = null == R ? void 0 : R[O]) ? T : 0,
                                        ec = eo(m ? u(z, q + en - ef - es) : z, q, m ? c(I, q + ei - ef) : I);
                                    E[O] = ec, H[O] = ec - q
                                }
                                if (void 0 !== a && a) {
                                    var eu, ep, el, ed, em, eh = E[j],
                                        ev = "y" === j ? "height" : "width",
                                        ey = eh + y["x" === O ? "top" : S],
                                        eg = eh - y["x" === O ? k : M],
                                        eb = -1 !== ["top", S].indexOf(g),
                                        ew = null != (eu = null == R ? void 0 : R[j]) ? eu : 0,
                                        ex = eb ? ey : eh - A[ev] - L[ev] - ew + W.altAxis,
                                        eO = eb ? eh + A[ev] + L[ev] - ew - W.altAxis : eg,
                                        ej = m && eb ? (em = eo(ex, eh, eO)) > eO ? eO : em : eo(m ? ex : ey, eh, m ? eO : eg);
                                    E[j] = ej, H[j] = ej - eh
                                }
                                n.modifiersData[o] = H
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                o = e.options,
                                i = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                s = U(n.placement),
                                f = N(s),
                                c = [S, M].indexOf(s) >= 0 ? "height" : "width";
                            if (i && a) {
                                var u, p, l = et("number" != typeof(u = "function" == typeof(u = o.padding) ? u(Object.assign({}, n.rects, {
                                        placement: n.placement
                                    })) : u) ? u : en(u, P)),
                                    d = x(i),
                                    m = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
                                    h = a[f] - n.rects.reference[f],
                                    v = D(i),
                                    y = v ? "y" === f ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                                    g = l["y" === f ? "top" : S],
                                    b = y - d[c] - l["y" === f ? k : M],
                                    w = y / 2 - d[c] / 2 + (m / 2 - h / 2),
                                    O = eo(g, w, b);
                                n.modifiersData[r] = ((t = {})[f] = O, t.centerOffset = O - w, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            if (null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r)))) K(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = er(t, {
                                    elementContext: "reference"
                                }),
                                s = er(t, {
                                    altBoundary: !0
                                }),
                                f = ei(a, r),
                                c = ei(s, o, i),
                                u = ea(f),
                                p = ea(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: f,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: p
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": p
                            })
                        }
                    }]
                }, eu = void 0 === (ec = (ef = es).defaultModifiers) ? [] : ec, el = void 0 === (ep = ef.defaultOptions) ? C : ep, function(e, t, n) {
                    void 0 === n && (n = el);
                    var r, o, f = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, C, el),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        c = [],
                        u = !1,
                        l = {
                            state: f,
                            setOptions: function(n) {
                                var r, o, i, s, u, p, m, h, v = "function" == typeof n ? n(f.options) : n;
                                d(), f.options = Object.assign({}, el, f.options, v), f.scrollParents = {
                                    reference: a(e) ? j(e) : e.contextElement ? j(e.contextElement) : [],
                                    popper: j(t)
                                };
                                var y = (i = Object.keys(o = (r = [].concat(eu, f.options.modifiers)).reduce(function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, t, {
                                        options: Object.assign({}, n.options, t.options),
                                        data: Object.assign({}, n.data, t.data)
                                    }) : t, e
                                }, {})).map(function(e) {
                                    return o[e]
                                }), u = new Map, p = new Set, m = [], i.forEach(function(e) {
                                    u.set(e.name, e)
                                }), i.forEach(function(e) {
                                    p.has(e.name) || function e(t) {
                                        p.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                            if (!p.has(t)) {
                                                var n = u.get(t);
                                                n && e(n)
                                            }
                                        }), m.push(t)
                                    }(e)
                                }), V.reduce(function(e, t) {
                                    return e.concat(m.filter(function(e) {
                                        return e.phase === t
                                    }))
                                }, []));
                                return f.orderedModifiers = y.filter(function(e) {
                                    return e.enabled
                                }), f.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var o = r({
                                                state: f,
                                                name: t,
                                                instance: l,
                                                options: void 0 === n ? {} : n
                                            }),
                                            i = function() {};
                                        c.push(o || i)
                                    }
                                }), l.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var e, t, n, r, o, a, c, d, b, O, j, E, A, k = f.elements,
                                        M = k.reference,
                                        S = k.popper;
                                    if (_(M, S)) {
                                        f.rects = {
                                            reference: (e = M, t = D(S), n = "fixed" === f.options.strategy, r = s(t), b = s(t) && (c = p((a = (o = t).getBoundingClientRect()).width) / o.offsetWidth || 1, d = p(a.height) / o.offsetHeight || 1, 1 !== c || 1 !== d), O = y(t), j = m(e, b, n), E = {
                                                scrollLeft: 0,
                                                scrollTop: 0
                                            }, A = {
                                                x: 0,
                                                y: 0
                                            }, (r || !r && !n) && (("body" !== v(t) || w(O)) && (E = function(e) {
                                                var t;
                                                return e !== i(e) && s(e) ? {
                                                    scrollLeft: e.scrollLeft,
                                                    scrollTop: e.scrollTop
                                                } : h(e)
                                            }(t)), s(t) ? (A = m(t, !0), A.x += t.clientLeft, A.y += t.clientTop) : O && (A.x = g(O))), {
                                                x: j.left + E.scrollLeft - A.x,
                                                y: j.top + E.scrollTop - A.y,
                                                width: j.width,
                                                height: j.height
                                            }),
                                            popper: x(S)
                                        }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(e) {
                                            return f.modifiersData[e.name] = Object.assign({}, e.data)
                                        });
                                        for (var L = 0; L < f.orderedModifiers.length; L++) {
                                            if (!0 === f.reset) {
                                                f.reset = !1, L = -1;
                                                continue
                                            }
                                            var P = f.orderedModifiers[L],
                                                B = P.fn,
                                                W = P.options,
                                                R = void 0 === W ? {} : W,
                                                H = P.name;
                                            "function" == typeof B && (f = B({
                                                state: f,
                                                options: R,
                                                name: H,
                                                instance: l
                                            }) || f)
                                        }
                                    }
                                }
                            },
                            update: function() {
                                return o || (o = new Promise(function(e) {
                                    Promise.resolve().then(function() {
                                        o = void 0, e(new Promise(function(e) {
                                            l.forceUpdate(), e(f)
                                        }))
                                    })
                                })), o
                            },
                            destroy: function() {
                                d(), u = !0
                            }
                        };
                    if (!_(e, t)) return l;

                    function d() {
                        c.forEach(function(e) {
                            return e()
                        }), c = []
                    }
                    return l.setOptions(n).then(function(e) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(e)
                    }), l
                }),
                em = n(82330),
                eh = n.n(em),
                ev = function(e) {
                    return e.reduce(function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }, {})
                },
                ey = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                eg = [],
                eb = function(e, t, n) {
                    void 0 === n && (n = {});
                    var i = r.useRef(null),
                        a = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || eg
                        },
                        s = r.useState({
                            styles: {
                                popper: {
                                    position: a.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        f = s[0],
                        c = s[1],
                        u = r.useMemo(function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    o.flushSync(function() {
                                        c({
                                            styles: ev(n.map(function(e) {
                                                return [e, t.styles[e] || {}]
                                            })),
                                            attributes: ev(n.map(function(e) {
                                                return [e, t.attributes[e]]
                                            }))
                                        })
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }, []),
                        p = r.useMemo(function() {
                            var e = {
                                onFirstUpdate: a.onFirstUpdate,
                                placement: a.placement,
                                strategy: a.strategy,
                                modifiers: [].concat(a.modifiers, [u, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return eh()(i.current, e) ? i.current || e : (i.current = e, e)
                        }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u]),
                        l = r.useRef();
                    return ey(function() {
                        l.current && l.current.setOptions(p)
                    }, [p]), ey(function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || ed)(e, t, p);
                            return l.current = r,
                                function() {
                                    r.destroy(), l.current = null
                                }
                        }
                    }, [e, t, n.createPopper]), {
                        state: l.current ? l.current.state : null,
                        styles: f.styles,
                        attributes: f.attributes,
                        update: l.current ? l.current.update : null,
                        forceUpdate: l.current ? l.current.forceUpdate : null
                    }
                }
        }
    }
]);