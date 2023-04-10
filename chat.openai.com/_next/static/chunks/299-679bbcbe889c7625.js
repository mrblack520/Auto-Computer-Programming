(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [299], {
        27215: function() {},
        13290: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__, process = __webpack_require__(44675);
            ! function() {
                "use strict";
                var ERROR = "input is invalid type",
                    WINDOW = "object" == typeof window,
                    root = WINDOW ? window : {};
                root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" == typeof self,
                    NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
                    AMD = __webpack_require__.amdO,
                    ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    HEX_CHARS = "0123456789abcdef".split(""),
                    EXTRA = [-2147483648, 8388608, 32768, 128],
                    SHIFT = [24, 16, 8, 0],
                    K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                    blocks = [];
                (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                var createOutputMethod = function(t, e) {
                        return function(n) {
                            return new Sha256(e, !0).update(n)[t]()
                        }
                    },
                    createMethod = function(t) {
                        var e = createOutputMethod("hex", t);
                        NODE_JS && (e = nodeWrap(e, t)), e.create = function() {
                            return new Sha256(t)
                        }, e.update = function(t) {
                            return e.create().update(t)
                        };
                        for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                            var r = OUTPUT_TYPES[n];
                            e[r] = createOutputMethod(r, t)
                        }
                        return e
                    },
                    nodeWrap = function(method, is224) {
                        var nodeMethod, crypto = eval("require('crypto')"),
                            Buffer = eval("require('buffer').Buffer"),
                            algorithm = is224 ? "sha224" : "sha256";
                        return function(t) {
                            if ("string" == typeof t) return crypto.createHash(algorithm).update(t, "utf8").digest("hex");
                            if (null == t) throw Error(ERROR);
                            return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(t)).digest("hex") : method(t)
                        }
                    },
                    createHmacOutputMethod = function(t, e) {
                        return function(n, r) {
                            return new HmacSha256(n, e, !0).update(r)[t]()
                        }
                    },
                    createHmacMethod = function(t) {
                        var e = createHmacOutputMethod("hex", t);
                        e.create = function(e) {
                            return new HmacSha256(e, t)
                        }, e.update = function(t, n) {
                            return e.create(t).update(n)
                        };
                        for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                            var r = OUTPUT_TYPES[n];
                            e[r] = createHmacOutputMethod(r, t)
                        }
                        return e
                    };

                function Sha256(t, e) {
                    e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t
                }

                function HmacSha256(t, e, n) {
                    var r, i = typeof t;
                    if ("string" === i) {
                        var o, s = [],
                            a = t.length,
                            u = 0;
                        for (r = 0; r < a; ++r)(o = t.charCodeAt(r)) < 128 ? s[u++] = o : o < 2048 ? (s[u++] = 192 | o >> 6, s[u++] = 128 | 63 & o) : o < 55296 || o >= 57344 ? (s[u++] = 224 | o >> 12, s[u++] = 128 | o >> 6 & 63, s[u++] = 128 | 63 & o) : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++r)), s[u++] = 240 | o >> 18, s[u++] = 128 | o >> 12 & 63, s[u++] = 128 | o >> 6 & 63, s[u++] = 128 | 63 & o);
                        t = s
                    } else if ("object" === i) {
                        if (null === t) throw Error(ERROR);
                        if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t))) throw Error(ERROR)
                    } else throw Error(ERROR);
                    t.length > 64 && (t = new Sha256(e, !0).update(t).array());
                    var l = [],
                        c = [];
                    for (r = 0; r < 64; ++r) {
                        var d = t[r] || 0;
                        l[r] = 92 ^ d, c[r] = 54 ^ d
                    }
                    Sha256.call(this, e, n), this.update(c), this.oKeyPad = l, this.inner = !0, this.sharedMemory = n
                }
                Sha256.prototype.update = function(t) {
                    if (!this.finalized) {
                        var e, n = typeof t;
                        if ("string" !== n) {
                            if ("object" === n) {
                                if (null === t) throw Error(ERROR);
                                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t))) throw Error(ERROR)
                            } else throw Error(ERROR);
                            e = !0
                        }
                        for (var r, i, o = 0, s = t.length, a = this.blocks; o < s;) {
                            if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), e)
                                for (i = this.start; o < s && i < 64; ++o) a[i >> 2] |= t[o] << SHIFT[3 & i++];
                            else
                                for (i = this.start; o < s && i < 64; ++o)(r = t.charCodeAt(o)) < 128 ? a[i >> 2] |= r << SHIFT[3 & i++] : r < 2048 ? (a[i >> 2] |= (192 | r >> 6) << SHIFT[3 & i++], a[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]) : r < 55296 || r >= 57344 ? (a[i >> 2] |= (224 | r >> 12) << SHIFT[3 & i++], a[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++], a[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++o)), a[i >> 2] |= (240 | r >> 18) << SHIFT[3 & i++], a[i >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & i++], a[i >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & i++], a[i >> 2] |= (128 | 63 & r) << SHIFT[3 & i++]);
                            this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.block = a[16], this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                    }
                }, Sha256.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex;
                        t[16] = this.block, t[e >> 2] |= EXTRA[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                    }
                }, Sha256.prototype.hash = function() {
                    var t, e, n, r, i, o, s, a, u, l, c, d = this.h0,
                        f = this.h1,
                        h = this.h2,
                        p = this.h3,
                        g = this.h4,
                        v = this.h5,
                        y = this.h6,
                        m = this.h7,
                        E = this.blocks;
                    for (t = 16; t < 64; ++t) e = ((i = E[t - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3, n = ((i = E[t - 2]) >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10, E[t] = E[t - 16] + e + E[t - 7] + n << 0;
                    for (t = 0, c = f & h; t < 64; t += 4) this.first ? (this.is224 ? (a = 300032, m = (i = E[0] - 1413257819) - 150054599 << 0, p = i + 24177077 << 0) : (a = 704751109, m = (i = E[0] - 210244248) - 1521486534 << 0, p = i + 143694565 << 0), this.first = !1) : (e = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), n = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7), r = (a = d & f) ^ d & h ^ c, i = m + n + (s = g & v ^ ~g & y) + K[t] + E[t], o = e + r, m = p + i << 0, p = i + o << 0), e = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10), n = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), r = (u = p & d) ^ p & f ^ a, i = y + n + (s = m & g ^ ~m & v) + K[t + 1] + E[t + 1], o = e + r, y = h + i << 0, e = ((h = i + o << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), n = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7), r = (l = h & p) ^ h & d ^ u, i = v + n + (s = y & m ^ ~y & g) + K[t + 2] + E[t + 2], o = e + r, v = f + i << 0, e = ((f = i + o << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), n = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7), r = (c = f & h) ^ f & p ^ l, i = g + n + (s = v & y ^ ~v & m) + K[t + 3] + E[t + 3], o = e + r, g = d + i << 0, d = i + o << 0;
                    this.h0 = this.h0 + d << 0, this.h1 = this.h1 + f << 0, this.h2 = this.h2 + h << 0, this.h3 = this.h3 + p << 0, this.h4 = this.h4 + g << 0, this.h5 = this.h5 + v << 0, this.h6 = this.h6 + y << 0, this.h7 = this.h7 + m << 0
                }, Sha256.prototype.hex = function() {
                    this.finalize();
                    var t = this.h0,
                        e = this.h1,
                        n = this.h2,
                        r = this.h3,
                        i = this.h4,
                        o = this.h5,
                        s = this.h6,
                        a = this.h7,
                        u = HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s];
                    return this.is224 || (u += HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a]), u
                }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                    this.finalize();
                    var t = this.h0,
                        e = this.h1,
                        n = this.h2,
                        r = this.h3,
                        i = this.h4,
                        o = this.h5,
                        s = this.h6,
                        a = this.h7,
                        u = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s];
                    return this.is224 || u.push(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a), u
                }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t = new ArrayBuffer(this.is224 ? 28 : 32),
                        e = new DataView(t);
                    return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t
                }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
                    if (Sha256.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var t = this.array();
                        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(t), Sha256.prototype.finalize.call(this)
                    }
                };
                var exports = createMethod();
                exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return exports
                }).call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }()
        },
        12229: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t, e, n, r, i, o, s) {
                    void 0 === i && (i = []), void 0 === o && (o = ""), void 0 === s && (s = null), this.onDefaultValueFallback = null, this.name = t, this.value = JSON.parse(JSON.stringify(null != e ? e : {})), this.ruleID = null != n ? n : "", this.secondaryExposures = i, this.allocatedExperimentName = o, this.evaluationDetails = r, this.onDefaultValueFallback = s
                }
                return t.prototype.get = function(t, e, n) {
                    var r, i, o = this.getValue(t, e);
                    if (null == o) return e;
                    var s = Array.isArray(e) ? "array" : typeof e,
                        a = Array.isArray(o) ? "array" : typeof o;
                    return n ? n(o) ? o : (null === (r = this.onDefaultValueFallback) || void 0 === r || r.call(this, this, t, s, a), e) : null == e || s === a ? o : (null === (i = this.onDefaultValueFallback) || void 0 === i || i.call(this, this, t, s, a), e)
                }, t.prototype.getValue = function(t, e) {
                    return null == t ? this.value : (null == e && (e = null), null == this.value[t]) ? e : this.value[t]
                }, t.prototype.getRuleID = function() {
                    return this.ruleID
                }, t.prototype.getName = function() {
                    return this.name
                }, t.prototype.getEvaluationDetails = function() {
                    return this.evaluationDetails
                }, t.prototype._getSecondaryExposures = function() {
                    return this.secondaryExposures
                }, t.prototype._getAllocatedExperimentName = function() {
                    return this.allocatedExperimentName
                }, t
            }();
            e.default = n
        },
        5421: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ExceptionEndpoint = void 0;
            var o = n(5502);
            e.ExceptionEndpoint = "https://statsigapi.net/v1/sdk_exception";
            var s = function() {
                function t(t) {
                    this.seen = new Set, this.sdkKey = t
                }
                return t.prototype.setStatsigMetadata = function(t) {
                    this.statsigMetadata = t
                }, t.prototype.swallow = function(t, e) {
                    this.capture(t, e, function() {})
                }, t.prototype.capture = function(t, e, n, r) {
                    var i = this;
                    try {
                        var o = e();
                        if (o instanceof Promise) return o.catch(function(e) {
                            return i.onCaught(t, e, n, r)
                        });
                        return o
                    } catch (s) {
                        return this.onCaught(t, s, n, r)
                    }
                }, t.prototype.logError = function(t, n, o) {
                    var s;
                    return r(this, void 0, void 0, function() {
                        var r, a, u, l, c, d, f, h, p;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (i.trys.push([0, 4, , 5]), "function" != typeof o) return [3, 2];
                                    return [4, o()];
                                case 1:
                                    return a = i.sent(), [3, 3];
                                case 2:
                                    a = null, i.label = 3;
                                case 3:
                                    if (r = a, c = (l = (u = null != n ? n : Error("[Statsig] Error was empty")) instanceof Error) ? u.name : "No Name", this.seen.has(c)) return [2];
                                    return this.seen.add(c), h = JSON.stringify({
                                        tag: t,
                                        exception: c,
                                        info: d = l ? u.stack : this.getDescription(u),
                                        statsigMetadata: f = null !== (s = this.statsigMetadata) && void 0 !== s ? s : {},
                                        extra: null != r ? r : {}
                                    }), fetch(e.ExceptionEndpoint, {
                                        method: "POST",
                                        headers: {
                                            "STATSIG-API-KEY": this.sdkKey,
                                            "STATSIG-SDK-TYPE": String(f.sdkType),
                                            "STATSIG-SDK-VERSION": String(f.sdkVersion),
                                            "Content-Type": "application/json",
                                            "Content-Length": "" + h.length
                                        },
                                        body: h
                                    }).catch(function() {}), [3, 5];
                                case 4:
                                    return p = i.sent(), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.onCaught = function(t, e, n, r) {
                    if (e instanceof o.StatsigUninitializedError || e instanceof o.StatsigInvalidArgumentError) throw e;
                    return console.error("[Statsig] An unexpected exception occurred.", e), this.logError(t, e, r), n()
                }, t.prototype.getDescription = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "[Statsig] Failed to get string for error."
                    }
                }, t
            }();
            e.default = s
        },
        5502: function(t, e) {
            "use strict";
            var n, r = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigInvalidArgumentError = e.StatsigUninitializedError = void 0;
            var i = function(t) {
                function e(n) {
                    var r = t.call(this, null != n ? n : "Call and wait for initialize() to finish first.") || this;
                    return Object.setPrototypeOf(r, e.prototype), r
                }
                return r(e, t), e
            }(Error);
            e.StatsigUninitializedError = i;
            var o = function(t) {
                function e(n) {
                    var r = t.call(this, n) || this;
                    return Object.setPrototypeOf(r, e.prototype), r
                }
                return r(e, t), e
            }(Error);
            e.StatsigInvalidArgumentError = o
        },
        51475: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t, e, n, r, i, o, s, a, u) {
                    void 0 === i && (i = null), void 0 === o && (o = []), void 0 === s && (s = []), void 0 === a && (a = ""), void 0 === u && (u = []), this.logParameterFunction = i, this.name = t, this.value = JSON.parse(JSON.stringify(null != e ? e : {})), this.ruleID = null != n ? n : "", this.evaluationDetails = r, this.secondaryExposures = o, this.undelegatedSecondaryExposures = s, this.allocatedExperimentName = a, this.explicitParameters = u
                }
                return t._create = function(e, n, r, i, o, s, a, u, l) {
                    return void 0 === o && (o = null), void 0 === s && (s = []), void 0 === a && (a = []), void 0 === u && (u = ""), void 0 === l && (l = []), new t(e, n, r, i, o, s, a, u, l)
                }, t.prototype.get = function(t, e, n) {
                    var r = this,
                        i = this.value[t];
                    if (null == i) return e;
                    var o = function() {
                        return r.logLayerParameterExposure(t), i
                    };
                    return n ? n(i) ? o() : e : null == e || typeof i == typeof e && Array.isArray(e) === Array.isArray(i) ? o() : e
                }, t.prototype.getValue = function(t, e) {
                    void 0 == e && (e = null);
                    var n = this.value[t];
                    return null != n && this.logLayerParameterExposure(t), null != n ? n : e
                }, t.prototype.getRuleID = function() {
                    return this.ruleID
                }, t.prototype.getName = function() {
                    return this.name
                }, t.prototype.getEvaluationDetails = function() {
                    return this.evaluationDetails
                }, t.prototype._getSecondaryExposures = function() {
                    return this.secondaryExposures
                }, t.prototype._getUndelegatedSecondaryExposures = function() {
                    return this.undelegatedSecondaryExposures
                }, t.prototype._getAllocatedExperimentName = function() {
                    return this.allocatedExperimentName
                }, t.prototype._getExplicitParameters = function() {
                    return this.explicitParameters
                }, t.prototype._getEvaluationDetails = function() {
                    return this.evaluationDetails
                }, t.prototype.logLayerParameterExposure = function(t) {
                    var e;
                    null === (e = this.logParameterFunction) || void 0 === e || e.call(this, this, t)
                }, t
            }();
            e.default = n
        },
        5575: function(t, e) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t) {
                    this.user = null, this.value = null, this.metadata = null, this.eventName = t, this.statsigMetadata = {}, this.time = Date.now()
                }
                return t.prototype.getName = function() {
                    return this.eventName
                }, t.prototype.setValue = function(t) {
                    this.value = t
                }, t.prototype.setMetadata = function(t) {
                    this.metadata = t
                }, t.prototype.addStatsigMetadata = function(t, e) {
                    this.statsigMetadata[t] = e
                }, t.prototype.setUser = function(t) {
                    this.user = n({}, t), delete this.user.privateAttributes
                }, t.prototype.setSecondaryExposures = function(t) {
                    void 0 === t && (t = []), this.secondaryExposures = t
                }, t.prototype.toJsonObject = function() {
                    var t;
                    return {
                        eventName: this.eventName,
                        user: this.user,
                        value: this.value,
                        metadata: this.metadata,
                        time: this.time,
                        statsigMetadata: this.statsigMetadata,
                        secondaryExposures: null !== (t = this.secondaryExposures) && void 0 !== t ? t : void 0
                    }
                }, t
            }();
            e.default = r
        },
        30227: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || function() {
                    return (r = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                i = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                } : function(t, e, n, r) {
                    void 0 === r && (r = n), t[r] = e[n]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                    return o(e, t), e
                },
                a = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                u = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                l = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var c = l(n(12229)),
                d = l(n(5421)),
                f = n(5502),
                h = l(n(51475)),
                p = l(n(5575)),
                g = l(n(51562)),
                v = l(n(37209)),
                y = l(n(35325)),
                m = l(n(9137)),
                E = s(n(3009)),
                S = n(13957),
                _ = l(n(25609)),
                b = l(n(12559)),
                I = s(n(33220)),
                w = l(n(52700)),
                L = n(98480),
                O = 64,
                A = 2048,
                D = function() {
                    function t(e, n, r) {
                        var i, o = this;
                        if (this.appState = null, this.currentAppState = null, this.initCalled = !1, this.pendingInitPromise = null, this.optionalLoggingSetup = !1, this.prefetchedUsersByCacheKey = {}, this.logLayerParameterExposureForLayer = function(t, e, n) {
                                void 0 === n && (n = !1);
                                var r = "",
                                    i = t._getUndelegatedSecondaryExposures(),
                                    s = t._getExplicitParameters().includes(e);
                                s && (r = t._getAllocatedExperimentName(), i = t._getSecondaryExposures()), o.logger.logLayerExposure(o.getCurrentUser(), t.getName(), t.getRuleID(), i, r, e, s, t._getEvaluationDetails(), n)
                            }, "string" != typeof e || !e.startsWith("client-")) throw new f.StatsigInvalidArgumentError("Invalid key provided.  You must use a Client SDK Key from the Statsig console to initialize the sdk");
                        if (this.startTime = (0, L.now)(), this.errorBoundary = new d.default(e), this.ready = !1, this.sdkKey = e, this.options = new m.default(r), this.consoleLogger = new w.default(this.options.getLogLevel()), b.default.disabled = this.options.getDisableLocalStorage(), this.initializeDiagnostics = new I.default("initialize"), this.identity = new g.default(this.normalizeUser(null != n ? n : null), this.options.getOverrideStableID(), t.reactNativeUUID), this.network = new y.default(this), this.store = new E.default(this, null !== (i = null == r ? void 0 : r.initializeValues) && void 0 !== i ? i : null), this.logger = new v.default(this), this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()), (null == r ? void 0 : r.initializeValues) != null) {
                            var s = this.options.getInitCompletionCallback();
                            this.ready = !0, this.initCalled = !0, this.fireAndForgetPrefechUsers(), setTimeout(function() {
                                return o.delayedSetup()
                            }, 20), this.handleOptionalLogging(), s && s((0, L.now)() - this.startTime, !0, null)
                        }
                    }
                    return t.prototype.getErrorBoundary = function() {
                        return this.errorBoundary
                    }, t.prototype.getNetwork = function() {
                        return this.network
                    }, t.prototype.getStore = function() {
                        return this.store
                    }, t.prototype.getLogger = function() {
                        return this.logger
                    }, t.prototype.getOptions = function() {
                        return this.options
                    }, t.prototype.getSDKKey = function() {
                        return null == this.sdkKey ? "" : this.sdkKey
                    }, t.prototype.getCurrentUser = function() {
                        return this.identity.getUser()
                    }, t.prototype.getCurrentUserCacheKey = function() {
                        return (0, S.getUserCacheKey)(this.getCurrentUser())
                    }, t.prototype.getStatsigMetadata = function() {
                        return this.identity.getStatsigMetadata()
                    }, t.prototype.getSDKType = function() {
                        return this.identity.getSDKType()
                    }, t.prototype.getSDKVersion = function() {
                        return this.identity.getSDKVersion()
                    }, t.prototype.getConsoleLogger = function() {
                        return this.consoleLogger
                    }, t.prototype.delayedSetup = function() {
                        this.identity.saveStableID(), this.logger.sendSavedRequests()
                    }, t.prototype.setInitializeValues = function(t) {
                        var e = this;
                        this.errorBoundary.capture("setInitializeValues", function() {
                            e.store.bootstrap(t);
                            var n = null;
                            e.ready || (e.ready = !0, e.initCalled = !0, n = e.options.getInitCompletionCallback()), e.handleOptionalLogging(), e.logger.sendSavedRequests(), n && n((0, L.now)() - e.startTime, !0, null)
                        }, function() {
                            e.ready = !0, e.initCalled = !0;
                            var t = e.options.getInitCompletionCallback();
                            t && t((0, L.now)() - e.startTime, !1, "Caught an exception during setInitializeValues")
                        })
                    }, t.prototype.initializeAsync = function() {
                        return a(this, void 0, void 0, function() {
                            var t = this;
                            return u(this, function(e) {
                                return [2, this.errorBoundary.capture("initializeAsync", function() {
                                    return a(t, void 0, void 0, function() {
                                        var t, e, n = this;
                                        return u(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    if (null != this.pendingInitPromise) return [2, this.pendingInitPromise];
                                                    if (this.ready) return [2, Promise.resolve()];
                                                    if (this.initializeDiagnostics.mark(I.DiagnosticsKey.OVERALL, I.DiagnosticsEvent.START), this.initCalled = !0, !_.default.asyncStorage) return [3, 3];
                                                    return [4, this.identity.initAsync()];
                                                case 1:
                                                    return r.sent(), [4, this.store.loadFromAsyncStorage()];
                                                case 2:
                                                    r.sent(), r.label = 3;
                                                case 3:
                                                    if (this.appState && this.appState.addEventListener && "function" == typeof this.appState.addEventListener && (this.currentAppState = this.appState.currentState, this.appState.addEventListener("change", this.handleAppStateChange.bind(this))), this.options.getLocalModeEnabled()) return [2, Promise.resolve()];
                                                    return t = function(t, e) {
                                                        var r = n.options.getInitCompletionCallback();
                                                        r && r((0, L.now)() - n.startTime, t, e)
                                                    }, e = this.identity.getUser(), this.pendingInitPromise = this.fetchAndSaveValues(e, this.options.getPrefetchUsers(), t, this.initializeDiagnostics).finally(function() {
                                                        return a(n, void 0, void 0, function() {
                                                            return u(this, function(t) {
                                                                return this.pendingInitPromise = null, this.ready = !0, this.delayedSetup(), this.initializeDiagnostics.mark(I.DiagnosticsKey.OVERALL, I.DiagnosticsEvent.END), this.options.getDisableDiagnosticsLogging() || this.logger.logDiagnostics(e, this.initializeDiagnostics), [2]
                                                            })
                                                        })
                                                    }), this.handleOptionalLogging(), [2, this.pendingInitPromise]
                                            }
                                        })
                                    })
                                }, function() {
                                    return t.ready = !0, t.initCalled = !0, Promise.resolve()
                                })]
                            })
                        })
                    }, t.prototype.prefetchUsers = function(t) {
                        return a(this, void 0, void 0, function() {
                            return u(this, function(e) {
                                return t && 0 != t.length ? [2, this.fetchAndSaveValues(null, t)] : [2]
                            })
                        })
                    }, t.prototype.getEvaluationDetails = function() {
                        return this.store.getGlobalEvaluationDetails()
                    }, t.prototype.checkGate = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("checkGate", function() {
                            var r = n.checkGateImpl(t, e);
                            return n.logGateExposureImpl(t, r), !0 === r.gate.value
                        }, function() {
                            return !1
                        })
                    }, t.prototype.checkGateWithExposureLoggingDisabled = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("checkGateWithExposureLoggingDisabled", function() {
                            return !0 === n.checkGateImpl(t, e).gate.value
                        }, function() {
                            return !1
                        })
                    }, t.prototype.logGateExposure = function(t) {
                        this.logGateExposureImpl(t)
                    }, t.prototype.getConfig = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getConfig", function() {
                            var r = n.getConfigImpl(t, e);
                            return n.logConfigExposureImpl(t, r), r
                        }, function() {
                            return n.getEmptyConfig(t)
                        })
                    }, t.prototype.getConfigWithExposureLoggingDisabled = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getConfig", function() {
                            return n.getConfigImpl(t, e)
                        }, function() {
                            return n.getEmptyConfig(t)
                        })
                    }, t.prototype.logConfigExposure = function(t) {
                        this.logConfigExposureImpl(t)
                    }, t.prototype.getExperiment = function(t, e, n) {
                        var r = this;
                        return void 0 === e && (e = !1), void 0 === n && (n = !1), this.errorBoundary.capture("getExperiment", function() {
                            var i = r.getExperimentImpl(t, e, n);
                            return r.logExperimentExposureImpl(t, e, i), i
                        }, function() {
                            return r.getEmptyConfig(t)
                        })
                    }, t.prototype.getExperimentWithExposureLoggingDisabled = function(t, e, n) {
                        var r = this;
                        return void 0 === e && (e = !1), void 0 === n && (n = !1), this.errorBoundary.capture("getExperimentWithExposureLoggingDisabled", function() {
                            return r.getExperimentImpl(t, e, n)
                        }, function() {
                            return r.getEmptyConfig(t)
                        })
                    }, t.prototype.logExperimentExposure = function(t, e) {
                        this.logExperimentExposureImpl(t, e)
                    }, t.prototype.getLayer = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getLayer", function() {
                            return n.getLayerImpl(n.logLayerParameterExposureForLayer, t, e)
                        }, function() {
                            return h.default._create(t, {}, "", n.getEvalutionDetailsForError())
                        })
                    }, t.prototype.getLayerWithExposureLoggingDisabled = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getLayerWithExposureLoggingDisabled", function() {
                            return n.getLayerImpl(null, t, e)
                        }, function() {
                            return h.default._create(t, {}, "", n.getEvalutionDetailsForError())
                        })
                    }, t.prototype.logLayerParameterExposure = function(t, e, n) {
                        void 0 === n && (n = !1);
                        var r = this.getLayerImpl(null, t, n);
                        this.logLayerParameterExposureForLayer(r, e, !0)
                    }, t.prototype.logEvent = function(t, e, n) {
                        var r = this;
                        void 0 === e && (e = null), void 0 === n && (n = null), this.errorBoundary.swallow("logEvent", function() {
                            if (!r.logger || !r.sdkKey) throw new f.StatsigUninitializedError("Must initialize() before logging events.");
                            if ("string" != typeof t || 0 === t.length) {
                                r.consoleLogger.error("Event not logged. No valid eventName passed.");
                                return
                            }
                            r.shouldTrimParam(t, O) && (r.consoleLogger.info("eventName is too long, trimming to " + O + " characters."), t = t.substring(0, O)), "string" == typeof e && r.shouldTrimParam(e, O) && (r.consoleLogger.info("value is too long, trimming to " + O + "."), e = e.substring(0, O)), r.shouldTrimParam(n, A) && (r.consoleLogger.info("metadata is too big. Dropping the metadata."), n = {
                                error: "not logged due to size too large"
                            });
                            var i = new p.default(t);
                            i.setValue(e), i.setMetadata(n), i.setUser(r.getCurrentUser()), r.logger.log(i)
                        })
                    }, t.prototype.updateUser = function(t) {
                        return a(this, void 0, void 0, function() {
                            var e = this;
                            return u(this, function(n) {
                                return [2, this.errorBoundary.capture("updateUser", function() {
                                    return a(e, void 0, void 0, function() {
                                        var e, n, r, i, o = this;
                                        return u(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    if (!this.initializeCalled()) throw new f.StatsigUninitializedError("Call initialize() first.");
                                                    if (this.identity.updateUser(this.normalizeUser(t)), e = this.getCurrentUserCacheKey(), n = Boolean(this.prefetchedUsersByCacheKey[e]), r = this.store.updateUser(n), this.logger.resetDedupeKeys(), null != r && (n || this.isCacheValidForFetchMode(r))) return [2, Promise.resolve(!0)];
                                                    if (!(null != this.pendingInitPromise)) return [3, 2];
                                                    return [4, this.pendingInitPromise];
                                                case 1:
                                                    s.sent(), s.label = 2;
                                                case 2:
                                                    if (this.options.getLocalModeEnabled()) return [2, Promise.resolve(!0)];
                                                    return i = this.identity.getUser(), this.pendingInitPromise = this.fetchAndSaveValues(i).finally(function() {
                                                        o.pendingInitPromise = null
                                                    }), [2, this.pendingInitPromise.then(function() {
                                                        return Promise.resolve(!0)
                                                    }).catch(function() {
                                                        return Promise.resolve(!1)
                                                    })]
                                            }
                                        })
                                    })
                                }, function() {
                                    return Promise.resolve(!1)
                                })]
                            })
                        })
                    }, t.prototype.shutdown = function() {
                        var t = this;
                        this.errorBoundary.swallow("shutdown", function() {
                            t.logger.shutdown(), t.appState && t.appState.removeEventListener && "function" == typeof t.appState.removeEventListener && t.appState.removeEventListener("change", t.handleAppStateChange.bind(t)), b.default.cleanup()
                        })
                    }, t.prototype.overrideGate = function(t, e) {
                        var n = this;
                        this.errorBoundary.swallow("overrideGate", function() {
                            n.ensureStoreLoaded(), n.store.overrideGate(t, e)
                        })
                    }, t.prototype.overrideConfig = function(t, e) {
                        var n = this;
                        this.errorBoundary.swallow("overrideConfig", function() {
                            n.ensureStoreLoaded(), n.store.overrideConfig(t, e)
                        })
                    }, t.prototype.overrideLayer = function(t, e) {
                        var n = this;
                        this.errorBoundary.swallow("overrideLayer", function() {
                            n.ensureStoreLoaded(), n.store.overrideLayer(t, e)
                        })
                    }, t.prototype.removeGateOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeGateOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeGateOverride(t)
                        })
                    }, t.prototype.removeConfigOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeConfigOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeConfigOverride(t)
                        })
                    }, t.prototype.removeLayerOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeLayerOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeLayerOverride(t)
                        })
                    }, t.prototype.removeOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeGateOverride(t)
                        })
                    }, t.prototype.getOverrides = function() {
                        var t = this;
                        return this.errorBoundary.capture("getOverrides", function() {
                            return t.ensureStoreLoaded(), t.store.getAllOverrides().gates
                        }, function() {
                            return {}
                        })
                    }, t.prototype.getAllOverrides = function() {
                        var t = this;
                        return this.errorBoundary.capture("getAllOverrides", function() {
                            return t.ensureStoreLoaded(), t.store.getAllOverrides()
                        }, function() {
                            return {
                                gates: {},
                                configs: {},
                                layers: {}
                            }
                        })
                    }, t.prototype.getStableID = function() {
                        var t = this;
                        return this.errorBoundary.capture("getStableID", function() {
                            return t.identity.getStatsigMetadata().stableID
                        }, function() {
                            return ""
                        })
                    }, t.prototype.initializeCalled = function() {
                        return this.initCalled
                    }, t.prototype.setSDKPackageInfo = function(t) {
                        null != t && (this.identity.setSDKPackageInfo(t), this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()))
                    }, t.setAsyncStorage = function(t) {
                        null != t && (_.default.asyncStorage = t)
                    }, t.setReactNativeUUID = function(e) {
                        null != e && (t.reactNativeUUID = e)
                    }, t.prototype.setAppState = function(t) {
                        null != t && (this.appState = t)
                    }, t.prototype.setNativeModules = function(t) {
                        null != t && this.identity.setNativeModules(t)
                    }, t.prototype.setPlatform = function(t) {
                        null != t && this.identity.setPlatform(t)
                    }, t.prototype.setRNDeviceInfo = function(t) {
                        null != t && this.identity.setRNDeviceInfo(t)
                    }, t.prototype.setExpoConstants = function(t) {
                        null != t && this.identity.setExpoConstants(t)
                    }, t.prototype.setExpoDevice = function(t) {
                        null != t && this.identity.setExpoDevice(t)
                    }, t.prototype.isCacheValidForFetchMode = function(t) {
                        return "cache-or-network" === this.options.getFetchMode() && t > this.startTime
                    }, t.prototype.handleOptionalLogging = function() {
                        var t = this;
                        if ("undefined" != typeof window && window && !this.optionalLoggingSetup && window.addEventListener) {
                            var e = this.identity.getUser();
                            if (this.options.getDisableErrorLogging() || window.addEventListener("error", function(n) {
                                    var r, i = n.error;
                                    if (null != i && "object" == typeof i) try {
                                        i = JSON.stringify(i)
                                    } catch (o) {}
                                    t.logger.logAppError(e, null !== (r = n.message) && void 0 !== r ? r : "", {
                                        filename: n.filename,
                                        lineno: n.lineno,
                                        colno: n.colno,
                                        error_obj: i
                                    })
                                }), !this.options.getDisableAutoMetricsLogging()) {
                                if ("undefined" == typeof document || !document || "undefined" == typeof setTimeout || !setTimeout) return;
                                var n = function() {
                                    setTimeout(function() {
                                        t.logger.logAppMetrics(e)
                                    }, 1e3)
                                };
                                "complete" === document.readyState ? n() : window.addEventListener("load", function() {
                                    return n()
                                })
                            }
                            this.optionalLoggingSetup = !0
                        }
                    }, t.prototype.handleAppStateChange = function(t) {
                        var e;
                        "active" === this.currentAppState && t.match(/inactive|background/) ? this.logger.flush(!0) : (null === (e = this.currentAppState) || void 0 === e ? void 0 : e.match(/inactive|background/)) && "active" === t && this.logger.sendSavedRequests(), this.currentAppState = t
                    }, t.prototype.shouldTrimParam = function(t, e) {
                        return null != t && ("string" == typeof t ? t.length > e : "object" == typeof t ? JSON.stringify(t).length > e : "number" == typeof t && t.toString().length > e)
                    }, t.prototype.normalizeUser = function(t) {
                        var e = {};
                        try {
                            e = JSON.parse(JSON.stringify(t))
                        } catch (n) {
                            throw new f.StatsigInvalidArgumentError("User object must be convertable to JSON string.")
                        }
                        return e = this.trimUserObjIfNeeded(e), null != this.options.getEnvironment() && (e.statsigEnvironment = this.options.getEnvironment()), e
                    }, t.prototype.trimUserObjIfNeeded = function(t) {
                        var e, n;
                        return null == t ? {} : (this.shouldTrimParam(null !== (e = t.userID) && void 0 !== e ? e : null, O) && (this.consoleLogger.info("User ID is too large, trimming to " + O + "characters"), t.userID = null === (n = t.userID) || void 0 === n ? void 0 : n.toString().substring(0, O)), this.shouldTrimParam(t, A) && (t.custom = {}, this.shouldTrimParam(t, A) ? (this.consoleLogger.info("User object is too large, only keeping the user ID."), t = {
                            userID: t.userID
                        }) : this.consoleLogger.info("User object is too large, dropping the custom property.")), t)
                    }, t.prototype.ensureStoreLoaded = function() {
                        if (!this.store.isLoaded()) throw new f.StatsigUninitializedError("Call and wait for initialize() to finish first.")
                    }, t.prototype.getEvalutionDetailsForError = function() {
                        return {
                            time: Date.now(),
                            reason: E.EvaluationReason.Error
                        }
                    }, t.prototype.fetchAndSaveValues = function(t, e, n, i) {
                        return void 0 === e && (e = []), void 0 === n && (n = null), a(this, void 0, void 0, function() {
                            var o, s, l = this;
                            return u(this, function(c) {
                                return e.length > 5 && this.consoleLogger.info("Cannot prefetch more than 5 users."), o = e.slice(0, 5).reduce(function(t, e) {
                                    return t[(0, S.getUserCacheKey)(e)] = e, t
                                }, {}), s = null, 0 === e.length && (s = this.store.getLastUpdateTime(t)), [2, this.network.fetchValues(t, s, this.options.getInitTimeoutMs(), function(e) {
                                    return a(l, void 0, void 0, function() {
                                        var n = this;
                                        return u(this, function(s) {
                                            return [2, this.errorBoundary.swallow("fetchAndSaveValues", function() {
                                                return a(n, void 0, void 0, function() {
                                                    return u(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                if (null == i || i.mark(I.DiagnosticsKey.INITIALIZE, I.DiagnosticsEvent.START, "process"), !(null == e ? void 0 : e.has_updates)) return [3, 2];
                                                                return [4, this.store.save(t, e)];
                                                            case 1:
                                                                return n.sent(), [3, 3];
                                                            case 2:
                                                                (null == e ? void 0 : e.is_no_content) && this.store.setEvaluationReason(E.EvaluationReason.NetworkNotModified), n.label = 3;
                                                            case 3:
                                                                return this.prefetchedUsersByCacheKey = r(r({}, this.prefetchedUsersByCacheKey), o), null == i || i.mark(I.DiagnosticsKey.INITIALIZE, I.DiagnosticsEvent.END, "process"), [2]
                                                        }
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                }, function(t) {}, 0 === e.length ? i : void 0, e.length > 0 ? o : void 0).then(function() {
                                    null == n || n(!0, null)
                                }).catch(function(t) {
                                    null == n || n(!1, t.message)
                                })]
                            })
                        })
                    }, t.prototype.checkGateImpl = function(t, e) {
                        if (this.ensureStoreLoaded(), "string" != typeof t || 0 === t.length) throw new f.StatsigInvalidArgumentError("Must pass a valid string as the gateName.");
                        return this.store.checkGate(t, e)
                    }, t.prototype.logGateExposureImpl = function(t, e) {
                        var n = !e,
                            r = null != e ? e : this.checkGateImpl(t, !1),
                            i = r.gate;
                        this.logger.logGateExposure(this.getCurrentUser(), t, i.value, i.rule_id, i.secondary_exposures, r.evaluationDetails, n)
                    }, t.prototype.getConfigImpl = function(t, e) {
                        if (this.ensureStoreLoaded(), "string" != typeof t || 0 === t.length) throw new f.StatsigInvalidArgumentError("Must pass a valid string as the configName.");
                        return this.store.getConfig(t, e)
                    }, t.prototype.logConfigExposureImpl = function(t, e) {
                        var n = !e,
                            r = null != e ? e : this.getConfigImpl(t, !1);
                        this.logger.logConfigExposure(this.getCurrentUser(), t, r.getRuleID(), r._getSecondaryExposures(), r.getEvaluationDetails(), n)
                    }, t.prototype.getExperimentImpl = function(t, e, n) {
                        if (this.ensureStoreLoaded(), "string" != typeof t || 0 === t.length) throw new f.StatsigInvalidArgumentError("Must pass a valid string as the experimentName.");
                        return this.store.getExperiment(t, e, n)
                    }, t.prototype.logExperimentExposureImpl = function(t, e, n) {
                        var r = !n,
                            i = null != n ? n : this.getExperimentImpl(t, e, !1);
                        this.logger.logConfigExposure(this.getCurrentUser(), t, i.getRuleID(), i._getSecondaryExposures(), i.getEvaluationDetails(), r)
                    }, t.prototype.getLayerImpl = function(t, e, n) {
                        if (this.ensureStoreLoaded(), "string" != typeof e || 0 === e.length) throw new f.StatsigInvalidArgumentError("Must pass a valid string as the layerName.");
                        return this.store.getLayer(t, e, n)
                    }, t.prototype.getEmptyConfig = function(t) {
                        return new c.default(t, {}, "", this.getEvalutionDetailsForError())
                    }, t.prototype.fireAndForgetPrefechUsers = function() {
                        this.prefetchUsers(this.options.getPrefetchUsers())
                    }, t
                }();
            e.default = D
        },
        51562: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = n(68093),
                a = n(49787),
                u = o(n(25609)),
                l = o(n(12559)),
                c = function() {
                    function t(t, e, r) {
                        this.platform = null, this.nativeModules = null, this.sdkType = "js-client", this.reactNativeUUID = r, this.user = t, this.sdkVersion = null !== (o = null === (i = n(63954)) || void 0 === i ? void 0 : i.version) && void 0 !== o ? o : "", this.statsigMetadata = {
                            sdkType: this.sdkType,
                            sdkVersion: this.sdkVersion
                        };
                        var i, o, s, c = e;
                        u.default.asyncStorage || (c = null !== (s = null != c ? c : l.default.getItem(a.STATSIG_STABLE_ID_KEY)) && void 0 !== s ? s : this.getUUID()), c && (this.statsigMetadata.stableID = c)
                    }
                    return t.prototype.saveStableID = function() {
                        null != this.statsigMetadata.stableID && l.default.setItem(a.STATSIG_STABLE_ID_KEY, this.statsigMetadata.stableID)
                    }, t.prototype.initAsync = function() {
                        return r(this, void 0, void 0, function() {
                            var t;
                            return i(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (t = this.statsigMetadata.stableID) return [3, 2];
                                        return [4, u.default.getItemAsync(a.STATSIG_STABLE_ID_KEY)];
                                    case 1:
                                        t = null != (t = e.sent()) ? t : this.getUUID(), e.label = 2;
                                    case 2:
                                        return u.default.setItemAsync(a.STATSIG_STABLE_ID_KEY, t), this.statsigMetadata.stableID = t, [2, this]
                                }
                            })
                        })
                    }, t.prototype.getSDKType = function() {
                        return this.sdkType
                    }, t.prototype.getSDKVersion = function() {
                        return this.sdkVersion
                    }, t.prototype.getStatsigMetadata = function() {
                        return this.statsigMetadata.sdkType = this.sdkType, this.statsigMetadata.sdkVersion = this.sdkVersion, this.statsigMetadata
                    }, t.prototype.getUser = function() {
                        return this.user
                    }, t.prototype.updateUser = function(t) {
                        this.user = t
                    }, t.prototype.setSDKPackageInfo = function(t) {
                        this.sdkType = t.sdkType, this.sdkVersion = t.sdkVersion
                    }, t.prototype.setPlatform = function(t) {
                        this.platform = t, this.updateMetadataFromNativeModules()
                    }, t.prototype.setNativeModules = function(t) {
                        this.nativeModules = t, this.updateMetadataFromNativeModules()
                    }, t.prototype.updateMetadataFromNativeModules = function() {
                        var t, e, n, r, i, o, s;
                        null != this.platform && null != this.nativeModules && ((null === (t = this.platform.OS) || void 0 === t ? void 0 : t.toLocaleLowerCase()) === "android" ? this.statsigMetadata.locale = null === (e = this.nativeModules.I18nManager) || void 0 === e ? void 0 : e.localeIdentifier : (null === (n = this.platform.OS) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === "ios" && (this.statsigMetadata.locale = (null === (i = null === (r = this.nativeModules.SettingsManager) || void 0 === r ? void 0 : r.settings) || void 0 === i ? void 0 : i.AppleLocale) || (null === (s = null === (o = this.nativeModules.SettingsManager) || void 0 === o ? void 0 : o.settings) || void 0 === s ? void 0 : s.AppleLanguages[0])))
                    }, t.prototype.getUUID = function() {
                        var t, e;
                        return null !== (e = null === (t = this.reactNativeUUID) || void 0 === t ? void 0 : t.v4()) && void 0 !== e ? e : (0, s.v4)()
                    }, t.prototype.setRNDeviceInfo = function(t) {
                        var e, n, r, i, o;
                        this.statsigMetadata.appVersion = null !== (e = t.getVersion()) && void 0 !== e ? e : "", this.statsigMetadata.systemVersion = null !== (n = t.getSystemVersion()) && void 0 !== n ? n : "", this.statsigMetadata.systemName = null !== (r = t.getSystemName()) && void 0 !== r ? r : "", this.statsigMetadata.deviceModelName = null !== (i = t.getModel()) && void 0 !== i ? i : "", this.statsigMetadata.deviceModel = null !== (o = t.getDeviceId()) && void 0 !== o ? o : ""
                    }, t.prototype.setExpoConstants = function(t) {
                        var e, n;
                        this.statsigMetadata.appVersion = null !== (n = null !== (e = t.nativeAppVersion) && void 0 !== e ? e : t.nativeBuildVersion) && void 0 !== n ? n : ""
                    }, t.prototype.setExpoDevice = function(t) {
                        var e, n, r, i;
                        this.statsigMetadata.systemVersion = null !== (e = t.osVersion) && void 0 !== e ? e : "", this.statsigMetadata.systemName = null !== (n = t.osName) && void 0 !== n ? n : "", this.statsigMetadata.deviceModelName = null !== (r = t.modelName) && void 0 !== r ? r : "", this.statsigMetadata.deviceModel = null !== (i = t.modelId) && void 0 !== i ? i : ""
                    }, t
                }();
            e.default = c
        },
        37209: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = o(n(5575)),
                a = n(35325),
                u = n(49787),
                l = o(n(25609)),
                c = o(n(12559)),
                d = "statsig::",
                f = d + "config_exposure",
                h = d + "layer_exposure",
                p = d + "gate_exposure",
                g = d + "log_event_failed",
                v = d + "app_error",
                y = d + "app_metrics::page_load_time",
                m = d + "app_metrics::dom_interactive_time",
                E = d + "diagnostics",
                S = d + "default_value_type_mismatch",
                _ = 432e6,
                b = 100,
                I = 1e3,
                w = 1024 * I,
                L = 10,
                O = function() {
                    function t(t) {
                        this.failedLogEventCount = 0, this.sdkInternal = t, this.queue = [], this.flushInterval = null, this.loggedErrors = new Set, this.failedLogEvents = [], this.exposureDedupeKeys = {}, this.failedLogEventCount = 0, this.init()
                    }
                    return t.prototype.init = function() {
                        var t = this;
                        if ("undefined" != typeof window && "function" == typeof window.addEventListener && (window.addEventListener("blur", function() {
                                return t.flush(!0)
                            }), window.addEventListener("beforeunload", function() {
                                return t.flush(!0)
                            }), window.addEventListener("load", function() {
                                setTimeout(function() {
                                    return t.flush()
                                }, 100), setTimeout(function() {
                                    return t.flush()
                                }, 1e3)
                            })), "undefined" != typeof document && "function" == typeof document.addEventListener && document.addEventListener("visibilitychange", function() {
                                t.flush("visible" !== document.visibilityState)
                            }), !(!this.sdkInternal.getOptions().getIgnoreWindowUndefined() && ("undefined" == typeof window || null == window) || this.sdkInternal.getOptions().getLocalModeEnabled())) {
                            var e = this;
                            this.flushInterval = setInterval(function() {
                                e.flush()
                            }, this.sdkInternal.getOptions().getLoggingIntervalMillis()), setTimeout(function() {
                                return t.flush()
                            }, 100), setTimeout(function() {
                                return t.flush()
                            }, 1e3)
                        }
                    }, t.prototype.log = function(t) {
                        try {
                            if (!this.sdkInternal.getOptions().getDisableCurrentPageLogging() && "undefined" != typeof window && null != window && "object" == typeof window.location && "string" == typeof window.location.href) {
                                var e = window.location.href.split(/[?#]/);
                                (null == e ? void 0 : e.length) > 0 && t.addStatsigMetadata("currentPage", e[0])
                            }
                        } catch (n) {}
                        this.queue.push(t.toJsonObject()), this.queue.length >= this.sdkInternal.getOptions().getLoggingBufferMaxSize() && this.flush()
                    }, t.prototype.resetDedupeKeys = function() {
                        this.exposureDedupeKeys = {}
                    }, t.prototype.shouldLogExposure = function(t) {
                        var e = this.exposureDedupeKeys[t],
                            n = Date.now();
                        return null == e ? (this.exposureDedupeKeys[t] = n, !0) : !(e >= n - 6e5) && (this.exposureDedupeKeys[t] = n, !0)
                    }, t.prototype.logGateExposure = function(t, e, n, r, i, o, a) {
                        var u = e + String(n) + r + o.reason;
                        if (this.shouldLogExposure(u)) {
                            var l = {
                                gate: e,
                                gateValue: String(n),
                                ruleID: r,
                                reason: o.reason,
                                time: o.time
                            };
                            a && (l.isManualExposure = "true");
                            var c = new s.default(p);
                            c.setUser(t), c.setMetadata(l), c.setSecondaryExposures(i), this.log(c)
                        }
                    }, t.prototype.logConfigExposure = function(t, e, n, r, i, o) {
                        var a = e + n + i.reason;
                        if (this.shouldLogExposure(a)) {
                            var u = {
                                config: e,
                                ruleID: n,
                                reason: i.reason,
                                time: i.time
                            };
                            o && (u.isManualExposure = "true");
                            var l = new s.default(f);
                            l.setUser(t), l.setMetadata(u), l.setSecondaryExposures(r), this.log(l)
                        }
                    }, t.prototype.logLayerExposure = function(t, e, n, r, i, o, a, u, l) {
                        var c = [e, n, i, o, String(a), u.reason, ].join("|");
                        if (this.shouldLogExposure(c)) {
                            var d = {
                                config: e,
                                ruleID: n,
                                allocatedExperiment: i,
                                parameterName: o,
                                isExplicitParameter: String(a),
                                reason: u.reason,
                                time: u.time
                            };
                            l && (d.isManualExposure = "true");
                            var f = new s.default(h);
                            f.setUser(t), f.setMetadata(d), f.setSecondaryExposures(r), this.log(f)
                        }
                    }, t.prototype.logConfigDefaultValueFallback = function(t, e, n) {
                        var r = new s.default(S);
                        r.setUser(t), r.setValue(e), r.setMetadata(n), this.log(r), this.loggedErrors.add(e), this.sdkInternal.getConsoleLogger().error(e)
                    }, t.prototype.logAppError = function(t, e, n) {
                        var r = e.substring(0, 128);
                        if (!this.loggedErrors.has(r) && !(this.loggedErrors.size > L)) {
                            var i = new s.default(v);
                            i.setUser(t), i.setValue(r), i.setMetadata(n), this.log(i), this.loggedErrors.add(r)
                        }
                    }, t.prototype.logDiagnostics = function(t, e) {
                        var n = new s.default(E);
                        n.setUser(t), n.setMetadata(e.getMarkers()), this.log(n)
                    }, t.prototype.logAppMetrics = function(t) {
                        if ("function" == typeof(null === (e = null == window ? void 0 : window.performance) || void 0 === e ? void 0 : e.getEntriesByType)) {
                            var e, n = window.performance.getEntriesByType("navigation");
                            if (n && !(n.length < 1)) {
                                var r = n[0],
                                    i = {
                                        statsig_dimensions: {
                                            url: r.name
                                        }
                                    },
                                    o = new s.default(y);
                                o.setUser(t), o.setValue(r.duration), o.setMetadata(i), this.log(o);
                                var a = new s.default(m);
                                a.setUser(t), a.setValue(r.domInteractive - r.startTime), a.setMetadata(i), this.log(a)
                            }
                        }
                    }, t.prototype.shutdown = function() {
                        this.flushInterval && (clearInterval(this.flushInterval), this.flushInterval = null), this.flush(!0)
                    }, t.prototype.flush = function(t) {
                        var e = this;
                        if (void 0 === t && (t = !1), 0 !== this.queue.length) {
                            var n = this.queue;
                            if (this.queue = [], t && !this.sdkInternal.getNetwork().supportsKeepalive() && "undefined" != typeof navigator && null != navigator && navigator.sendBeacon) {
                                this.sdkInternal.getNetwork().sendLogBeacon({
                                    events: n,
                                    statsigMetadata: this.sdkInternal.getStatsigMetadata()
                                }) || (this.queue = n.concat(this.queue), this.queue.length > 0 && (this.addFailedRequest({
                                    events: this.queue,
                                    statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                                    time: Date.now()
                                }), this.queue = []), this.saveFailedRequests());
                                return
                            }
                            var o = this;
                            this.sdkInternal.getNetwork().postToEndpoint(a.StatsigEndpoint.Rgstr, {
                                events: n,
                                statsigMetadata: this.sdkInternal.getStatsigMetadata()
                            }, 3, 1e3, t).then(function(t) {
                                if (!t.ok) throw t
                            }).catch(function(t) {
                                "function" == typeof t.text ? t.text().then(function(o) {
                                    e.sdkInternal.getErrorBoundary().logError(g, t, function() {
                                        return r(e, void 0, void 0, function() {
                                            return i(this, function(t) {
                                                return [2, {
                                                    eventCount: n.length,
                                                    error: o
                                                }]
                                            })
                                        })
                                    })
                                }) : e.sdkInternal.getErrorBoundary().logError(g, t, function() {
                                    return r(e, void 0, void 0, function() {
                                        return i(this, function(e) {
                                            return [2, {
                                                eventCount: n.length,
                                                error: t.message
                                            }]
                                        })
                                    })
                                }), o.newFailedRequest(g, n)
                            }).finally(function() {
                                return r(e, void 0, void 0, function() {
                                    return i(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                if (!t) return [3, 2];
                                                return this.queue.length > 0 && (this.addFailedRequest({
                                                    events: this.queue,
                                                    statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                                                    time: Date.now()
                                                }), this.queue = []), [4, o.saveFailedRequests()];
                                            case 1:
                                                e.sent(), e.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }, t.prototype.saveFailedRequests = function() {
                        return r(this, void 0, void 0, function() {
                            var t;
                            return i(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!(this.failedLogEvents.length > 0)) return [3, 3];
                                        if ((t = JSON.stringify(this.failedLogEvents)).length > w) return this.clearLocalStorageRequests(), [2];
                                        if (!l.default.asyncStorage) return [3, 2];
                                        return [4, l.default.setItemAsync(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY, t)];
                                    case 1:
                                        return e.sent(), [2];
                                    case 2:
                                        c.default.setItem(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY, t), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.sendSavedRequests = function() {
                        return r(this, void 0, void 0, function() {
                            var t, e, n, r, o, s, d, f, h = this;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e = !1, !l.default.asyncStorage) return [3, 2];
                                        return [4, l.default.getItemAsync(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY)];
                                    case 1:
                                        return t = i.sent(), [3, 3];
                                    case 2:
                                        t = c.default.getItem(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY), i.label = 3;
                                    case 3:
                                        if (null == t) return this.clearLocalStorageRequests(), [2];
                                        t.length > w && (e = !0), n = [];
                                        try {
                                            for (s = 0, n = JSON.parse(t), r = function(t) {
                                                    null != t && t.events && Array.isArray(t.events) && o.sdkInternal.getNetwork().postToEndpoint(a.StatsigEndpoint.Rgstr, t).then(function(t) {
                                                        if (!t.ok) throw Error(t.status + "")
                                                    }).catch(function(n) {
                                                        !e && h.addFailedRequest(t)
                                                    })
                                                }, o = this, d = n; s < d.length; s++) f = d[s], r(f)
                                        } catch (p) {} finally {
                                            this.clearLocalStorageRequests()
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.addFailedRequest = function(t) {
                        if (!(t.time < Date.now() - _) && !(this.failedLogEvents.length > b)) {
                            var e = t.events.length;
                            !(this.failedLogEventCount + e > I) && (this.failedLogEvents.push(t), this.failedLogEventCount += e)
                        }
                    }, t.prototype.clearLocalStorageRequests = function() {
                        l.default.asyncStorage ? l.default.removeItemAsync(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY) : c.default.removeItem(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY)
                    }, t.prototype.newFailedRequest = function(t, e) {
                        !this.loggedErrors.has(t) && (this.loggedErrors.add(t), this.failedLogEvents.push({
                            events: e,
                            statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                            time: Date.now()
                        }), this.saveFailedRequests())
                    }, t
                }();
            e.default = O
        },
        35325: function(t, e, n) {
            "use strict";
            var r, i = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                o = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigEndpoint = void 0;
            var a, u = s(n(80300)),
                l = n(33220);
            (a = r = e.StatsigEndpoint || (e.StatsigEndpoint = {})).Initialize = "initialize", a.Rgstr = "rgstr", a.LogEventBeacon = "log_event_beacon";
            var c = 204,
                d = function() {
                    function t(t) {
                        this.retryCodes = {
                            408: !0,
                            500: !0,
                            502: !0,
                            503: !0,
                            504: !0,
                            522: !0,
                            524: !0,
                            599: !0
                        }, this.canUseKeepalive = !1, this.sdkInternal = t, this.leakyBucket = {}, this.init()
                    }
                    return t.prototype.init = function() {
                        if (!this.sdkInternal.getOptions().getDisableNetworkKeepalive()) try {
                            this.canUseKeepalive = "keepalive" in new Request("")
                        } catch (t) {}
                    }, t.prototype.fetchValues = function(t, e, n, i, o, s, a) {
                        var u = {
                            user: t,
                            prefetchUsers: a,
                            statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                            sinceTime: null != e ? e : void 0
                        };
                        return this.postWithTimeout(r.Initialize, u, i, o, s, n, 3)
                    }, t.prototype.postWithTimeout = function(t, e, n, s, a, u, c, d) {
                        var f = this;
                        void 0 === u && (u = 0), void 0 === c && (c = 0), void 0 === d && (d = 1e3), t === r.Initialize && (null == a || a.mark(l.DiagnosticsKey.INITIALIZE, l.DiagnosticsEvent.START, "network_request"));
                        var h = this.postToEndpoint(t, e, c, d).then(function(s) {
                            if (t === r.Initialize && (null == a || a.mark(l.DiagnosticsKey.INITIALIZE, l.DiagnosticsEvent.END, "network_request", s.status)), !s.ok) return Promise.reject(Error("Request to " + t + " failed with status " + s.status));
                            if ("object" != typeof s.data) {
                                var u = Error("Request to " + t + " received invalid response type. Expected 'object' but got '" + typeof s.data + "'");
                                return f.sdkInternal.getErrorBoundary().logError("postWithTimeoutInvalidRes", u, function() {
                                    return i(f, void 0, void 0, function() {
                                        return o(this, function(n) {
                                            return [2, this.getErrorData(t, e, c, d, s)]
                                        })
                                    })
                                }), Promise.reject(u)
                            }
                            var h = s.data;
                            return f.sdkInternal.getErrorBoundary().capture("postWithTimeout", function() {
                                return i(f, void 0, void 0, function() {
                                    return o(this, function(t) {
                                        return n(h), [2, Promise.resolve(h)]
                                    })
                                })
                            }, function() {
                                return Promise.resolve({})
                            }, function() {
                                return i(f, void 0, void 0, function() {
                                    return o(this, function(n) {
                                        return [2, this.getErrorData(t, e, c, d, s)]
                                    })
                                })
                            })
                        }).then(function() {}).catch(function(e) {
                            return t === r.Initialize && (null == a || a.mark(l.DiagnosticsKey.INITIALIZE, l.DiagnosticsEvent.END, "network_request", !1)), "function" == typeof s && s(e), Promise.reject(e)
                        });
                        if (0 != u) {
                            var p = new Promise(function(t, e) {
                                setTimeout(function() {
                                    e(Error("The initialization timeout of " + u + "ms has been hit before the network request has completed."))
                                }, u)
                            });
                            return Promise.race([h, p])
                        }
                        return h
                    }, t.prototype.sendLogBeacon = function(t) {
                        if (this.sdkInternal.getOptions().getLocalModeEnabled()) return !0;
                        var e = new URL(this.sdkInternal.getOptions().getEventLoggingApi() + r.LogEventBeacon);
                        e.searchParams.append("k", this.sdkInternal.getSDKKey()), t.clientTime = Date.now() + "";
                        var n = null;
                        try {
                            n = JSON.stringify(t)
                        } catch (i) {
                            return !1
                        }
                        return navigator.sendBeacon(e.toString(), n)
                    }, t.prototype.postToEndpoint = function(t, e, n, s, a) {
                        return void 0 === n && (n = 0), void 0 === s && (s = 1e3), void 0 === a && (a = !1), i(this, void 0, void 0, function() {
                            var l, d, f, h, p, g, v, y = this;
                            return o(this, function(m) {
                                if (this.sdkInternal.getOptions().getLocalModeEnabled()) return [2, Promise.reject("no network requests in localMode")];
                                if ("function" != typeof fetch) return [2, Promise.reject("fetch is not defined")];
                                if ("undefined" == typeof window && !this.sdkInternal.getOptions().getIgnoreWindowUndefined()) return [2, Promise.reject("window is not defined")];
                                if (d = (l = t == r.Initialize ? this.sdkInternal.getOptions().getApi() : this.sdkInternal.getOptions().getEventLoggingApi()) + t, null != (f = this.leakyBucket[d]) && f >= 30) return [2, Promise.reject(Error("Request failed because you are making the same request too frequently."))];
                                if (null == f ? this.leakyBucket[d] = 1 : this.leakyBucket[d] = f + 1, h = t === r.Initialize && u.default.encodeInitializeCall && "undefined" != typeof window && "function" == typeof(null == window ? void 0 : window.btoa), p = JSON.stringify(e), h) try {
                                    p = g = window.btoa(p).split("").reverse().join("")
                                } catch (E) {
                                    h = !1
                                }
                                return v = {
                                    method: "POST",
                                    body: p,
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8",
                                        "STATSIG-API-KEY": this.sdkInternal.getSDKKey(),
                                        "STATSIG-CLIENT-TIME": Date.now() + "",
                                        "STATSIG-SDK-TYPE": this.sdkInternal.getSDKType(),
                                        "STATSIG-SDK-VERSION": this.sdkInternal.getSDKVersion(),
                                        "STATSIG-ENCODED": h ? "1" : "0"
                                    }
                                }, this.canUseKeepalive && a && (v.keepalive = !0), [2, fetch(d, v).then(function(t) {
                                    return i(y, void 0, void 0, function() {
                                        var e, r, i;
                                        return o(this, function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    if (!t.ok) return [3, 4];
                                                    if (e = t, t.status !== c) return [3, 1];
                                                    return e.data = {
                                                        has_updates: !1,
                                                        is_no_content: !0
                                                    }, [3, 3];
                                                case 1:
                                                    return [4, t.text()];
                                                case 2:
                                                    r = o.sent(), e.data = JSON.parse(r), o.label = 3;
                                                case 3:
                                                    return [2, Promise.resolve(e)];
                                                case 4:
                                                    return this.retryCodes[t.status] || (n = 0), [4, t.text()];
                                                case 5:
                                                    return i = o.sent(), [2, Promise.reject(Error(t.status + ": " + i))]
                                            }
                                        })
                                    })
                                }).catch(function(r) {
                                    return n > 0 ? new Promise(function(r, i) {
                                        setTimeout(function() {
                                            y.leakyBucket[d] = Math.max(y.leakyBucket[d] - 1, 0), y.postToEndpoint(t, e, n - 1, 2 * s, a).then(r).catch(i)
                                        }, s)
                                    }) : Promise.reject(r)
                                }).finally(function() {
                                    y.leakyBucket[d] = Math.max(y.leakyBucket[d] - 1, 0)
                                })]
                            })
                        })
                    }, t.prototype.supportsKeepalive = function() {
                        return this.canUseKeepalive
                    }, t.prototype.getErrorData = function(t, e, n, r, s) {
                        var a;
                        return i(this, void 0, void 0, function() {
                            var i;
                            return o(this, function(o) {
                                try {
                                    return i = {}, (null !== (a = s.headers) && void 0 !== a ? a : []).forEach(function(t, e) {
                                        i[e] = t
                                    }), [2, {
                                        responseInfo: {
                                            headers: i,
                                            status: s.status,
                                            statusText: s.statusText,
                                            type: s.type,
                                            url: s.url,
                                            redirected: s.redirected,
                                            bodySnippet: s.data ? JSON.stringify(s.data).slice(0, 500) : null
                                        },
                                        requestInfo: {
                                            endpointName: t,
                                            bodySnippet: JSON.stringify(e).slice(0, 500),
                                            retries: n,
                                            backoff: r
                                        }
                                    }]
                                } catch (u) {
                                    return [2, {
                                        statusText: "statsig::failed to extract extra data"
                                    }]
                                }
                                return [2]
                            })
                        })
                    }, t
                }();
            e.default = d
        },
        80300: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t() {}
                return t.encodeInitializeCall = !0, t
            }();
            e.default = n
        },
        9137: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LogLevel = void 0;
            var n, r, i = "https://featuregates.org/v1/",
                o = "https://events.statsigapi.net/v1/";
            (r = n = e.LogLevel || (e.LogLevel = {}))[r.NONE = 0] = "NONE", r[r.INFO = 1] = "INFO", r[r.DEBUG = 2] = "DEBUG";
            var s = function() {
                function t(t) {
                    null == t && (t = {});
                    var e, r, s, a, u, l, c, d, f, h, p, g, v, y, m, E, S, _, b, I = null !== (e = t.api) && void 0 !== e ? e : i;
                    this.api = I.endsWith("/") ? I : I + "/", this.disableCurrentPageLogging = null !== (r = t.disableCurrentPageLogging) && void 0 !== r && r, this.environment = null !== (s = t.environment) && void 0 !== s ? s : null, this.loggingIntervalMillis = this.normalizeNumberInput(t.loggingIntervalMillis, {
                        default: 1e4,
                        min: 1e3,
                        max: 6e4
                    }), this.loggingBufferMaxSize = this.normalizeNumberInput(t.loggingBufferMaxSize, {
                        default: 100,
                        min: 2,
                        max: 500
                    }), this.disableNetworkKeepalive = null !== (a = t.disableNetworkKeepalive) && void 0 !== a && a, this.overrideStableID = null !== (u = t.overrideStableID) && void 0 !== u ? u : null, this.localMode = null !== (l = t.localMode) && void 0 !== l && l, this.initTimeoutMs = t.initTimeoutMs && t.initTimeoutMs >= 0 ? t.initTimeoutMs : 3e3, this.disableErrorLogging = null !== (c = t.disableErrorLogging) && void 0 !== c && c, this.disableAutoMetricsLogging = null !== (d = t.disableAutoMetricsLogging) && void 0 !== d && d, this.initializeValues = null !== (f = t.initializeValues) && void 0 !== f ? f : null;
                    var w = null !== (p = null !== (h = t.eventLoggingApi) && void 0 !== h ? h : t.api) && void 0 !== p ? p : o;
                    this.eventLoggingApi = w.endsWith("/") ? w : w + "/", this.prefetchUsers = null !== (g = t.prefetchUsers) && void 0 !== g ? g : [], this.disableLocalStorage = null !== (v = t.disableLocalStorage) && void 0 !== v && v, this.initCompletionCallback = null !== (y = t.initCompletionCallback) && void 0 !== y ? y : null, this.disableDiagnosticsLogging = null !== (m = t.disableDiagnosticsLogging) && void 0 !== m && m, this.logLevel = null !== (E = null == t ? void 0 : t.logLevel) && void 0 !== E ? E : n.NONE, this.ignoreWindowUndefined = null !== (S = null == t ? void 0 : t.ignoreWindowUndefined) && void 0 !== S && S, this.fetchMode = null !== (_ = t.fetchMode) && void 0 !== _ ? _ : "network-only", this.disableLocalOverrides = null !== (b = null == t ? void 0 : t.disableLocalOverrides) && void 0 !== b && b
                }
                return t.prototype.getApi = function() {
                    return this.api
                }, t.prototype.getEnvironment = function() {
                    return this.environment
                }, t.prototype.getDisableCurrentPageLogging = function() {
                    return this.disableCurrentPageLogging
                }, t.prototype.getLoggingIntervalMillis = function() {
                    return this.loggingIntervalMillis
                }, t.prototype.getLoggingBufferMaxSize = function() {
                    return this.loggingBufferMaxSize
                }, t.prototype.getDisableNetworkKeepalive = function() {
                    return this.disableNetworkKeepalive
                }, t.prototype.getOverrideStableID = function() {
                    return this.overrideStableID
                }, t.prototype.getLocalModeEnabled = function() {
                    return this.localMode
                }, t.prototype.getInitTimeoutMs = function() {
                    return this.initTimeoutMs
                }, t.prototype.getDisableErrorLogging = function() {
                    return this.disableErrorLogging
                }, t.prototype.getDisableAutoMetricsLogging = function() {
                    return this.disableAutoMetricsLogging
                }, t.prototype.getEventLoggingApi = function() {
                    return this.eventLoggingApi
                }, t.prototype.getPrefetchUsers = function() {
                    return this.prefetchUsers
                }, t.prototype.getDisableLocalStorage = function() {
                    return this.disableLocalStorage
                }, t.prototype.getInitCompletionCallback = function() {
                    return this.initCompletionCallback
                }, t.prototype.getDisableDiagnosticsLogging = function() {
                    return this.disableDiagnosticsLogging
                }, t.prototype.getLogLevel = function() {
                    return this.logLevel
                }, t.prototype.getIgnoreWindowUndefined = function() {
                    return this.ignoreWindowUndefined
                }, t.prototype.getFetchMode = function() {
                    return this.fetchMode
                }, t.prototype.getDisableLocalOverrides = function() {
                    return this.disableLocalOverrides
                }, t.prototype.normalizeNumberInput = function(t, e) {
                    return null == t ? e.default : Math.max(Math.min(t, e.max), e.min)
                }, t
            }();
            e.default = s
        },
        3009: function(t, e, n) {
            "use strict";
            var r, i = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                o = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EvaluationReason = void 0;
            var a, u = s(n(12229)),
                l = s(n(51475)),
                c = s(n(7511)),
                d = n(49787),
                f = n(13957),
                h = s(n(25609)),
                p = s(n(12559));
            (a = r = e.EvaluationReason || (e.EvaluationReason = {})).Network = "Network", a.Bootstrap = "Bootstrap", a.InvalidBootstrap = "InvalidBootstrap", a.Cache = "Cache", a.Prefetch = "Prefetch", a.Sticky = "Sticky", a.LocalOverride = "LocalOverride", a.Unrecognized = "Unrecognized", a.Uninitialized = "Uninitialized", a.Error = "Error", a.NetworkNotModified = "NetworkNotModified";
            var g = 10,
                v = function() {
                    function t(t, e) {
                        this.overrides = {
                            gates: {},
                            configs: {},
                            layers: {}
                        }, this.sdkInternal = t, this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey(), this.values = {}, this.userValues = {
                            feature_gates: {},
                            dynamic_configs: {},
                            sticky_experiments: {},
                            layer_configs: {},
                            has_updates: !1,
                            time: 0,
                            evaluation_time: 0
                        }, this.stickyDeviceExperiments = {}, this.loaded = !1, this.reason = r.Uninitialized, e ? this.bootstrap(e) : this.loadFromLocalStorage()
                    }
                    return t.prototype.updateUser = function(t) {
                        return this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey(), this.setUserValueFromCache(t)
                    }, t.prototype.loadFromAsyncStorage = function() {
                        return i(this, void 0, void 0, function() {
                            var t, e;
                            return o(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = this.parseCachedValues, [4, h.default.getItemAsync(d.INTERNAL_STORE_KEY)];
                                    case 1:
                                        return e = [n.sent()], [4, h.default.getItemAsync(d.STICKY_DEVICE_EXPERIMENTS_KEY)];
                                    case 2:
                                        return t.apply(this, e.concat([n.sent()])), this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey(), this.loaded = !0, [2]
                                }
                            })
                        })
                    }, t.prototype.bootstrap = function(t) {
                        var e, n, i, o = this.sdkInternal.getCurrentUserCacheKey(),
                            s = this.sdkInternal.getCurrentUser(),
                            a = c.default.isValid(s, t) ? r.Bootstrap : r.InvalidBootstrap;
                        this.loaded = !0;
                        try {
                            this.userValues.feature_gates = null !== (e = t.feature_gates) && void 0 !== e ? e : {}, this.userValues.dynamic_configs = null !== (n = t.dynamic_configs) && void 0 !== n ? n : {}, this.userValues.layer_configs = null !== (i = t.layer_configs) && void 0 !== i ? i : {}, this.userValues.evaluation_time = Date.now(), this.userValues.time = Date.now(), this.values[o] = this.userValues, this.reason = a, this.loadOverrides()
                        } catch (u) {
                            return
                        }
                    }, t.prototype.loadFromLocalStorage = function() {
                        !h.default.asyncStorage && (this.parseCachedValues(p.default.getItem(d.INTERNAL_STORE_KEY), p.default.getItem(d.STICKY_DEVICE_EXPERIMENTS_KEY)), this.loaded = !0)
                    }, t.prototype.isLoaded = function() {
                        return this.loaded
                    }, t.prototype.getLastUpdateTime = function(t) {
                        var e = (0, f.getHashValue)(JSON.stringify(t));
                        return this.userValues.user_hash == e ? this.userValues.time : null
                    }, t.prototype.parseCachedValues = function(t, e) {
                        try {
                            this.values = t ? JSON.parse(t) : this.values, this.setUserValueFromCache()
                        } catch (n) {
                            this.removeFromStorage(d.INTERNAL_STORE_KEY)
                        }
                        try {
                            var r = e ? JSON.parse(e) : null;
                            r && (this.stickyDeviceExperiments = r)
                        } catch (i) {
                            this.removeFromStorage(d.STICKY_DEVICE_EXPERIMENTS_KEY)
                        }
                        this.loadOverrides()
                    }, t.prototype.setUserValueFromCache = function(t) {
                        void 0 === t && (t = !1);
                        var e, n = this.values[this.userCacheKey];
                        return null == n ? (this.resetUserValues(), this.reason = r.Uninitialized, null) : (this.userValues = n, this.reason = t ? r.Prefetch : r.Cache, null !== (e = n.evaluation_time) && void 0 !== e ? e : 0)
                    }, t.prototype.removeFromStorage = function(t) {
                        h.default.removeItemAsync(t), p.default.removeItem(t)
                    }, t.prototype.loadOverrides = function() {
                        if (!this.sdkInternal.getOptions().getDisableLocalOverrides()) {
                            var t = p.default.getItem(d.OVERRIDES_STORE_KEY);
                            if (null != t) try {
                                this.overrides = JSON.parse(t)
                            } catch (e) {
                                p.default.removeItem(d.OVERRIDES_STORE_KEY)
                            }
                        }
                    }, t.prototype.setEvaluationReason = function(t) {
                        this.reason = t
                    }, t.prototype.save = function(t, e) {
                        return i(this, void 0, void 0, function() {
                            var n, i, s, a, u, l, c, v, y, m;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = (0, f.getUserCacheKey)(t), (i = e).prefetched_user_values)
                                            for (a = 0, u = s = Object.keys(i.prefetched_user_values); a < u.length; a++) l = u[a], c = i.prefetched_user_values[l], this.values[l] = this.convertAPIDataToCacheValues(c, l);
                                        if (n && (v = this.convertAPIDataToCacheValues(i, n), i.has_updates && i.time && (y = (0, f.getHashValue)(JSON.stringify(t)), v.user_hash = y), this.values[n] = v, n == this.userCacheKey && (this.userValues = v, this.reason = r.Network)), m = Object.entries(this.values).sort(function(t, e) {
                                                var n = t[1],
                                                    r = e[1];
                                                return null == n ? 1 : null == r ? -1 : (null == r ? void 0 : r.time) - (null == n ? void 0 : n.time)
                                            }).slice(0, g), this.values = Object.fromEntries(m), !h.default.asyncStorage) return [3, 2];
                                        return [4, h.default.setItemAsync(d.INTERNAL_STORE_KEY, JSON.stringify(this.values))];
                                    case 1:
                                        return o.sent(), [3, 3];
                                    case 2:
                                        p.default.setItem(d.INTERNAL_STORE_KEY, JSON.stringify(this.values)), o.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.checkGate = function(t, e) {
                        void 0 === e && (e = !1);
                        var n, i, o = (0, f.getHashValue)(t),
                            s = {
                                name: t,
                                value: !1,
                                rule_id: "",
                                secondary_exposures: []
                            };
                        if (e || null == this.overrides.gates[t]) {
                            var a = null === (n = this.userValues) || void 0 === n ? void 0 : n.feature_gates[o];
                            a && (s = a), i = this.getEvaluationDetails(null != a)
                        } else s = {
                            name: t,
                            value: this.overrides.gates[t],
                            rule_id: "override",
                            secondary_exposures: []
                        }, i = this.getEvaluationDetails(!1, r.LocalOverride);
                        return {
                            evaluationDetails: i,
                            gate: s
                        }
                    }, t.prototype.getConfig = function(t, e) {
                        void 0 === e && (e = !1);
                        var n, i, o, s, a = (0, f.getHashValue)(t);
                        if (e || null == this.overrides.configs[t]) {
                            if ((null === (n = this.userValues) || void 0 === n ? void 0 : n.dynamic_configs[a]) != null) {
                                var l = null === (i = this.userValues) || void 0 === i ? void 0 : i.dynamic_configs[a];
                                s = this.getEvaluationDetails(!0), o = this.createDynamicConfig(t, l, s)
                            } else s = this.getEvaluationDetails(!1), o = new u.default(t, {}, "", s)
                        } else s = this.getEvaluationDetails(!1, r.LocalOverride), o = new u.default(t, this.overrides.configs[t], "override", s, [], "", this.makeOnConfigDefaultValueFallback(this.sdkInternal.getCurrentUser()));
                        return o
                    }, t.prototype.getExperiment = function(t, e, n) {
                        if (void 0 === e && (e = !1), void 0 === n && (n = !1), n || null == this.overrides.configs[t]) {
                            var i, o, s = this.getLatestValue(t, "dynamic_configs");
                            o = this.getEvaluationDetails(null != s);
                            var a = this.getPossiblyStickyValue(t, s, e, !1, o);
                            i = this.createDynamicConfig(t, a, o)
                        } else o = this.getEvaluationDetails(!1, r.LocalOverride), i = new u.default(t, this.overrides.configs[t], "override", o);
                        return i
                    }, t.prototype.getLayer = function(t, e, n) {
                        if (null != this.overrides.layers[e]) {
                            var i, o, s, a, u = this.getEvaluationDetails(!1, r.LocalOverride);
                            return l.default._create(e, null !== (i = this.overrides.layers[e]) && void 0 !== i ? i : {}, "override", u, t)
                        }
                        var c = this.getLatestValue(e, "layer_configs"),
                            d = this.getEvaluationDetails(null != c),
                            f = this.getPossiblyStickyValue(e, c, n, !0, d);
                        return l.default._create(e, null !== (o = null == f ? void 0 : f.value) && void 0 !== o ? o : {}, null !== (s = null == f ? void 0 : f.rule_id) && void 0 !== s ? s : "", d, t, null == f ? void 0 : f.secondary_exposures, null == f ? void 0 : f.undelegated_secondary_exposures, null !== (a = null == f ? void 0 : f.allocated_experiment_name) && void 0 !== a ? a : "", null == f ? void 0 : f.explicit_parameters)
                    }, t.prototype.overrideConfig = function(t, e) {
                        try {
                            JSON.stringify(e)
                        } catch (n) {
                            console.warn("Failed to stringify given config override.  Dropping", n);
                            return
                        }
                        this.overrides.configs[t] = e, this.saveOverrides()
                    }, t.prototype.overrideLayer = function(t, e) {
                        try {
                            JSON.stringify(e)
                        } catch (n) {
                            console.warn("Failed to stringify given layer override.  Dropping", n);
                            return
                        }
                        this.overrides.layers[t] = e, this.saveOverrides()
                    }, t.prototype.overrideGate = function(t, e) {
                        this.overrides.gates[t] = e, this.saveOverrides()
                    }, t.prototype.removeGateOverride = function(t) {
                        null == t ? this.overrides.gates = {} : delete this.overrides.gates[t], this.saveOverrides()
                    }, t.prototype.removeConfigOverride = function(t) {
                        null == t ? this.overrides.configs = {} : delete this.overrides.configs[t], this.saveOverrides()
                    }, t.prototype.removeLayerOverride = function(t) {
                        null == t ? this.overrides.layers = {} : delete this.overrides.layers[t], this.saveOverrides()
                    }, t.prototype.getAllOverrides = function() {
                        return this.overrides
                    }, t.prototype.saveOverrides = function() {
                        try {
                            p.default.setItem(d.OVERRIDES_STORE_KEY, JSON.stringify(this.overrides))
                        } catch (t) {
                            console.warn("Failed to persist gate/config overrides")
                        }
                    }, t.prototype.getLatestValue = function(t, e) {
                        var n, r, i, o, s, a = (0, f.getHashValue)(t);
                        return null !== (i = null === (r = null === (n = this.userValues) || void 0 === n ? void 0 : n[e]) || void 0 === r ? void 0 : r[a]) && void 0 !== i ? i : null === (s = null === (o = this.userValues) || void 0 === o ? void 0 : o[e]) || void 0 === s ? void 0 : s[t]
                    }, t.prototype.getPossiblyStickyValue = function(t, e, n, i, o) {
                        if (!n) return this.removeStickyValue(t), e;
                        var s, a = this.getStickyValue(t);
                        if (!a) return this.attemptToSaveStickyValue(t, e), e;
                        var u = null;
                        return (null == (u = i ? this.getLatestValue(null !== (s = null == a ? void 0 : a.allocated_experiment_name) && void 0 !== s ? s : "", "dynamic_configs") : e) ? void 0 : u.is_experiment_active) == !0 ? (o.reason = r.Sticky, a) : ((null == e ? void 0 : e.is_experiment_active) == !0 ? this.attemptToSaveStickyValue(t, e) : this.removeStickyValue(t), e)
                    }, t.prototype.createDynamicConfig = function(t, e, n) {
                        var r, i, o;
                        return new u.default(t, null !== (r = null == e ? void 0 : e.value) && void 0 !== r ? r : {}, null !== (i = null == e ? void 0 : e.rule_id) && void 0 !== i ? i : "", n, null == e ? void 0 : e.secondary_exposures, null !== (o = null == e ? void 0 : e.allocated_experiment_name) && void 0 !== o ? o : "", this.makeOnConfigDefaultValueFallback(this.sdkInternal.getCurrentUser()))
                    }, t.prototype.getStickyValue = function(t) {
                        var e, n, r = (0, f.getHashValue)(t);
                        return null !== (n = null === (e = this.userValues) || void 0 === e ? void 0 : e.sticky_experiments[r]) && void 0 !== n ? n : this.stickyDeviceExperiments[r]
                    }, t.prototype.attemptToSaveStickyValue = function(t, e) {
                        if (e && e.is_user_in_experiment && e.is_experiment_active) {
                            var n, r = (0, f.getHashValue)(t);
                            !0 === e.is_device_based ? this.stickyDeviceExperiments[r] = e : (null === (n = this.userValues) || void 0 === n ? void 0 : n.sticky_experiments) && (this.userValues.sticky_experiments[r] = e), this.saveStickyValuesToStorage()
                        }
                    }, t.prototype.removeStickyValue = function(t) {
                        if (0 !== Object.keys(null !== (n = null === (e = this.userValues) || void 0 === e ? void 0 : e.sticky_experiments) && void 0 !== n ? n : {}).length || 0 !== Object.keys(null !== (r = this.stickyDeviceExperiments) && void 0 !== r ? r : {}).length) {
                            var e, n, r, i, o = (0, f.getHashValue)(t);
                            null === (i = this.userValues) || void 0 === i || delete i.sticky_experiments[o], delete this.stickyDeviceExperiments[o], this.saveStickyValuesToStorage()
                        }
                    }, t.prototype.saveStickyValuesToStorage = function() {
                        this.values[this.userCacheKey] = this.userValues, this.setItemToStorage(d.INTERNAL_STORE_KEY, JSON.stringify(this.values)), this.setItemToStorage(d.STICKY_DEVICE_EXPERIMENTS_KEY, JSON.stringify(this.stickyDeviceExperiments))
                    }, t.prototype.getGlobalEvaluationDetails = function() {
                        var t, e;
                        return {
                            reason: null !== (t = this.reason) && void 0 !== t ? t : r.Uninitialized,
                            time: null !== (e = this.userValues.evaluation_time) && void 0 !== e ? e : 0
                        }
                    }, t.prototype.getEvaluationDetails = function(t, e) {
                        var n;
                        return t ? {
                            reason: this.reason,
                            time: null !== (n = this.userValues.evaluation_time) && void 0 !== n ? n : Date.now()
                        } : {
                            reason: null != e ? e : this.reason == r.Uninitialized ? r.Uninitialized : r.Unrecognized,
                            time: Date.now()
                        }
                    }, t.prototype.resetUserValues = function() {
                        this.userValues = {
                            feature_gates: {},
                            dynamic_configs: {},
                            sticky_experiments: {},
                            layer_configs: {},
                            time: 0,
                            evaluation_time: 0
                        }
                    }, t.prototype.convertAPIDataToCacheValues = function(t, e) {
                        var n, r;
                        return {
                            feature_gates: t.feature_gates,
                            layer_configs: t.layer_configs,
                            dynamic_configs: t.dynamic_configs,
                            sticky_experiments: null !== (r = null === (n = this.values[e]) || void 0 === n ? void 0 : n.sticky_experiments) && void 0 !== r ? r : {},
                            time: null == t.time || isNaN(t.time) ? 0 : t.time,
                            evaluation_time: Date.now()
                        }
                    }, t.prototype.setItemToStorage = function(t, e) {
                        h.default.asyncStorage ? h.default.setItemAsync(t, e) : p.default.setItem(t, e)
                    }, t.prototype.makeOnConfigDefaultValueFallback = function(t) {
                        var e = this;
                        return function(n, r, i, o) {
                            e.isLoaded() && e.sdkInternal.getLogger().logConfigDefaultValueFallback(t, "Parameter " + r + " is a value of type " + o + ".\n          Returning requested defaultValue type " + i, {
                                name: n.getName(),
                                ruleID: n.getRuleID(),
                                parameter: r,
                                defaultValueType: i,
                                valueType: o
                            })
                        }
                    }, t
                }();
            e.default = v
        },
        56340: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                    function i(t) {
                        return t instanceof n ? t : new n(function(e) {
                            e(t)
                        })
                    }
                    return new(n || (n = Promise))(function(n, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : i(t.value).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                },
                i = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(t) {
                        return function(e) {
                            return u([t, e])
                        }
                    }

                    function u(o) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigAsyncStorage = e.EvaluationReason = e.StatsigClient = e.Layer = e.DynamicConfig = void 0;
            var s = n(5502),
                a = o(n(30227)),
                u = o(n(80300)),
                l = n(3009),
                c = o(n(83378)),
                d = o(n(90355)),
                f = o(n(70454)),
                h = n(12229);
            Object.defineProperty(e, "DynamicConfig", {
                enumerable: !0,
                get: function() {
                    return o(h).default
                }
            });
            var p = n(51475);
            Object.defineProperty(e, "Layer", {
                enumerable: !0,
                get: function() {
                    return o(p).default
                }
            });
            var g = n(30227);
            Object.defineProperty(e, "StatsigClient", {
                enumerable: !0,
                get: function() {
                    return o(g).default
                }
            });
            var v = n(3009);
            Object.defineProperty(e, "EvaluationReason", {
                enumerable: !0,
                get: function() {
                    return v.EvaluationReason
                }
            });
            var y = n(25609);
            Object.defineProperty(e, "StatsigAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return o(y).default
                }
            }), (0, c.default)(), (0, d.default)(), (0, f.default)();
            var m = function() {
                function t() {}
                return Object.defineProperty(t, "encodeIntializeCall", {
                    get: function() {
                        return u.default.encodeInitializeCall
                    },
                    set: function(t) {
                        u.default.encodeInitializeCall = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.initialize = function(e, n, o) {
                    var s;
                    return r(this, void 0, void 0, function() {
                        var r;
                        return i(this, function(i) {
                            return r = null !== (s = t.instance) && void 0 !== s ? s : new a.default(e, n, o), t.instance || (t.instance = r), [2, r.initializeAsync()]
                        })
                    })
                }, t.prefetchUsers = function(e) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, t.getClientX().prefetchUsers(e)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.setInitializeValues = function(e) {
                    t.getClientX().setInitializeValues(e)
                }, t.checkGate = function(e, n) {
                    return void 0 === n && (n = !1), t.getClientX().checkGate(e, n)
                }, t.checkGateWithExposureLoggingDisabled = function(e, n) {
                    return void 0 === n && (n = !1), t.getClientX().checkGateWithExposureLoggingDisabled(e, n)
                }, t.manuallyLogGateExposure = function(e) {
                    t.getClientX().logGateExposure(e)
                }, t.getConfig = function(e, n) {
                    return void 0 === n && (n = !1), t.getClientX().getConfig(e, n)
                }, t.getConfigWithExposureLoggingDisabled = function(e, n) {
                    return void 0 === n && (n = !1), t.getClientX().getConfigWithExposureLoggingDisabled(e, n)
                }, t.manuallyLogConfigExposure = function(e) {
                    t.getClientX().logConfigExposure(e)
                }, t.getExperiment = function(e, n, r) {
                    return void 0 === n && (n = !1), void 0 === r && (r = !1), t.getClientX().getExperiment(e, n, r)
                }, t.getExperimentWithExposureLoggingDisabled = function(e, n, r) {
                    return void 0 === n && (n = !1), void 0 === r && (r = !1), t.getClientX().getExperimentWithExposureLoggingDisabled(e, n, r)
                }, t.manuallyLogExperimentExposure = function(e, n) {
                    void 0 === n && (n = !1), t.getClientX().logExperimentExposure(e, n)
                }, t.getLayer = function(e, n) {
                    return void 0 === n && (n = !1), t.getClientX().getLayer(e, n)
                }, t.getLayerWithExposureLoggingDisabled = function(e, n) {
                    return void 0 === n && (n = !1), t.getClientX().getLayerWithExposureLoggingDisabled(e, n)
                }, t.manuallyLogLayerParameterExposure = function(e, n, r) {
                    void 0 === r && (r = !1), t.getClientX().logLayerParameterExposure(e, n, r)
                }, t.logEvent = function(e, n, r) {
                    return void 0 === n && (n = null), void 0 === r && (r = null), t.getClientX().logEvent(e, n, r)
                }, t.updateUser = function(e) {
                    return t.getClientX().updateUser(e)
                }, t.shutdown = function() {
                    t.getClientX().shutdown(), t.instance = null
                }, t.overrideGate = function(e, n) {
                    t.getClientX().overrideGate(e, n)
                }, t.overrideConfig = function(e, n) {
                    t.getClientX().overrideConfig(e, n)
                }, t.overrideLayer = function(e, n) {
                    t.getClientX().overrideLayer(e, n)
                }, t.removeGateOverride = function(e) {
                    t.getClientX().removeGateOverride(e)
                }, t.removeConfigOverride = function(e) {
                    t.getClientX().removeConfigOverride(e)
                }, t.removeLayerOverride = function(e) {
                    t.getClientX().removeLayerOverride(e)
                }, t.getAllOverrides = function() {
                    return t.getClientX().getAllOverrides()
                }, t.getStableID = function() {
                    return t.getClientX().getStableID()
                }, t.getEvaluationDetails = function() {
                    var e, n;
                    return null !== (n = null === (e = t.instance) || void 0 === e ? void 0 : e.getEvaluationDetails()) && void 0 !== n ? n : {
                        reason: l.EvaluationReason.Uninitialized,
                        time: 0
                    }
                }, t.removeOverride = function(e) {
                    t.getClientX().removeOverride(e)
                }, t.getOverrides = function() {
                    return t.getClientX().getOverrides()
                }, t.initializeCalled = function() {
                    return null != t.instance && t.instance.initializeCalled()
                }, t.getClientX = function() {
                    if (!t.instance) throw new s.StatsigUninitializedError;
                    return t.instance
                }, t.instance = null, t
            }();
            e.default = m
        },
        27046: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Base64 = void 0, e.Base64 = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _encodeBinary: function(t) {
                    for (var e, n, r, i, o, s, a, u = "", l = 0; l < t.length;) e = t.charCodeAt(l++), n = t.charCodeAt(l++), r = t.charCodeAt(l++), i = e >> 2, o = (3 & e) << 4 | n >> 4, s = (15 & n) << 2 | r >> 6, a = 63 & r, isNaN(n) ? s = a = 64 : isNaN(r) && (a = 64), u = u + this._keyStr.charAt(i) + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(a);
                    return u
                },
                encodeArrayBuffer: function(t) {
                    for (var n = "", r = new Uint8Array(t), i = r.byteLength, o = 0; o < i; o++) n += String.fromCharCode(r[o]);
                    return e.Base64._encodeBinary(n)
                }
            }
        },
        7511: function(t, e) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t() {}
                return t.isValid = function(e, n) {
                    try {
                        var r = n.evaluated_keys;
                        if (!r || "object" != typeof r) return !0;
                        var i = this.copyObject(r),
                            o = null == e ? null : this.copyObject(e);
                        return t.validate(i, o) && t.validate(o, i)
                    } catch (s) {}
                    return !0
                }, t.validate = function(t, e) {
                    if (null == t) return null == e;
                    if (null == e) return !1;
                    for (var n = 0, r = Object.entries(t); n < r.length; n++) {
                        var i = r[n],
                            o = i[0],
                            s = i[1];
                        if ("stableID" !== o) {
                            if (typeof s != typeof e[o]) return !1;
                            if ("string" == typeof s) {
                                if (s !== e[o]) return !1
                            } else if ("object" == typeof s) return this.validate(s, e[o]);
                            else return !1
                        }
                    }
                    return !0
                }, t.copyObject = function(t) {
                    if (null == t) return null;
                    var e = {};
                    if ((null == t ? void 0 : t.userID) && (e.userID = null == t ? void 0 : t.userID), null == t ? void 0 : t.customIDs) {
                        var r = n({}, t.customIDs);
                        delete r.stableID, 0 !== Object.keys(r).length && (e.customIDs = r)
                    }
                    return e
                }, t
            }();
            e.default = r
        },
        52700: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(9137),
                i = function() {
                    function t(t) {
                        this.logLevel = t
                    }
                    return t.prototype.info = function(t) {
                        this.logLevel !== r.LogLevel.NONE && console.log(t)
                    }, t.prototype.error = function(t) {
                        this.logLevel === r.LogLevel.DEBUG && console.error(t)
                    }, t
                }();
            e.default = i
        },
        49787: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.STORAGE_PREFIX = e.LOCAL_STORAGE_KEYS = e.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY = e.STATSIG_STABLE_ID_KEY = e.INTERNAL_STORE_KEY = e.STICKY_DEVICE_EXPERIMENTS_KEY = e.OVERRIDES_STORE_KEY = void 0, e.OVERRIDES_STORE_KEY = "STATSIG_LOCAL_STORAGE_INTERNAL_STORE_OVERRIDES_V3", e.STICKY_DEVICE_EXPERIMENTS_KEY = "STATSIG_LOCAL_STORAGE_STICKY_DEVICE_EXPERIMENTS", e.INTERNAL_STORE_KEY = "STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4", e.STATSIG_STABLE_ID_KEY = "STATSIG_LOCAL_STORAGE_STABLE_ID", e.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY = "STATSIG_LOCAL_STORAGE_LOGGING_REQUEST", e.LOCAL_STORAGE_KEYS = {
                STATSIG_LOCAL_STORAGE_STABLE_ID: !0,
                STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4: !0,
                STATSIG_LOCAL_STORAGE_STICKY_DEVICE_EXPERIMENTS: !0,
                STATSIG_LOCAL_STORAGE_INTERNAL_STORE_OVERRIDES_V3: !0,
                STATSIG_LOCAL_STORAGE_LOGGING_REQUEST: !0
            }, e.STORAGE_PREFIX = "STATSIG_LOCAL_STORAGE"
        },
        33220: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DiagnosticsKey = e.DiagnosticsEvent = void 0;
            var r, i, o, s, a = n(98480);
            (o = r = e.DiagnosticsEvent || (e.DiagnosticsEvent = {})).START = "start", o.END = "end", (s = i = e.DiagnosticsKey || (e.DiagnosticsKey = {})).OVERALL = "overall", s.INITIALIZE = "initialize";
            var u = function() {
                function t(t) {
                    this.context = t, this.markers = []
                }
                return t.prototype.getMarkers = function() {
                    return {
                        context: this.context,
                        markers: this.markers
                    }
                }, t.prototype.mark = function(t, e, n, r) {
                    void 0 === n && (n = null), void 0 === r && (r = null), this.markers.push({
                        key: t,
                        step: n,
                        action: e,
                        value: r,
                        timestamp: (0, a.now)()
                    })
                }, t
            }();
            e.default = u
        },
        13957: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getUserCacheKey = e.getHashValue = e.SimpleHash = void 0;
            var r = n(13290),
                i = n(27046),
                o = {};

            function s(t) {
                for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e &= e;
                return String(e)
            }

            function a(t) {
                var e = o[t];
                if (e) return e;
                var n = r.sha256.create().update(t).arrayBuffer(),
                    s = i.Base64.encodeArrayBuffer(n);
                return o[t] = s, s
            }

            function u(t) {
                var e, n = "userID:" + String(null !== (e = null == t ? void 0 : t.userID) && void 0 !== e ? e : ""),
                    r = null == t ? void 0 : t.customIDs;
                if (null != r)
                    for (var i = 0, a = Object.entries(r); i < a.length; i++) {
                        var u, l = a[i];
                        n += ";" + l[0] + ":" + l[1]
                    }
                var c = o[n];
                if (c) return c;
                var d = s(n);
                return o[n] = d, d
            }
            e.SimpleHash = s, e.getHashValue = a, e.getUserCacheKey = u
        },
        83378: function(t, e) {
            "use strict";

            function n() {
                Object.entries || (Object.entries = function(t) {
                    for (var e = Object.keys(t), n = e.length, r = Array(n); n--;) r[n] = [e[n], t[e[n]]];
                    return r
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = n
        },
        90355: function(t, e) {
            "use strict";

            function n() {
                Object.fromEntries || (Object.fromEntries = function(t) {
                    for (var e = {}, n = 0, r = t; n < r.length; n++) {
                        var i, o = r[n];
                        if (Object(o) !== o) throw TypeError("iterable for fromEntries should yield objects");
                        Object.defineProperty(e, o[0], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: o[1]
                        })
                    }
                    return e
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = n
        },
        70454: function(t, e) {
            "use strict";

            function n() {
                Promise.prototype.finally = Promise.prototype.finally || ({
                    finally: function(t) {
                        var e = function(e) {
                            return Promise.resolve(t()).then(e)
                        };
                        return this.then(function(t) {
                            return e(function() {
                                return t
                            })
                        }, function(t) {
                            return e(function() {
                                return Promise.reject(t)
                            })
                        })
                    }
                }).finally
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = n
        },
        25609: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t() {}
                return t.getItemAsync = function(e) {
                    var n;
                    return t.asyncStorage ? null !== (n = t.asyncStorage.getItem(e)) && void 0 !== n ? n : null : Promise.resolve(null)
                }, t.setItemAsync = function(e, n) {
                    return t.asyncStorage ? t.asyncStorage.setItem(e, n) : Promise.resolve()
                }, t.removeItemAsync = function(e) {
                    return t.asyncStorage ? t.asyncStorage.removeItem(e) : Promise.resolve()
                }, t
            }();
            e.default = n
        },
        12559: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(49787),
                i = function() {
                    function t() {}
                    return t.getItem = function(t) {
                        var e;
                        try {
                            if (this.isStorageAccessible()) return window.localStorage.getItem(t)
                        } catch (n) {}
                        return null !== (e = this.fallbackSessionCache[t]) && void 0 !== e ? e : null
                    }, t.setItem = function(t, e) {
                        try {
                            if (this.isStorageAccessible()) {
                                window.localStorage.setItem(t, e);
                                return
                            }
                        } catch (n) {}
                        this.fallbackSessionCache[t] = e
                    }, t.removeItem = function(t) {
                        try {
                            if (this.isStorageAccessible()) {
                                window.localStorage.removeItem(t);
                                return
                            }
                        } catch (e) {}
                        delete this.fallbackSessionCache[t]
                    }, t.cleanup = function() {
                        try {
                            if (this.isStorageAccessible(!0))
                                for (var t in window.localStorage) "string" == typeof window.localStorage[t] && null != t && (this.disabled || !(t in r.LOCAL_STORAGE_KEYS)) && (this.disabled || t.substring(0, r.STORAGE_PREFIX.length) === r.STORAGE_PREFIX) && window.localStorage.removeItem(t)
                        } catch (e) {}
                    }, t.isStorageAccessible = function(t) {
                        void 0 === t && (t = !1), null == this.canAccessStorageAccessible && (this.canAccessStorageAccessible = "undefined" != typeof Storage && "undefined" != typeof window && null != window && null != window.localStorage);
                        var e = this.canAccessStorageAccessible;
                        return t ? e : !this.disabled && e
                    }, t.disabled = !1, t.fallbackSessionCache = {}, t.canAccessStorageAccessible = null, t
                }();
            e.default = i
        },
        98480: function(t, e) {
            "use strict";

            function n() {
                return "undefined" != typeof performance && performance ? 0 | performance.now() : Date.now()
            }

            function r(t) {
                return n() - t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.difference = e.now = void 0, e.now = n, e.difference = r
        },
        97838: function(t, e, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(70079),
                i = n(31178);

            function o(t, e) {
                return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
            }
            var s = "function" == typeof Object.is ? Object.is : o,
                a = i.useSyncExternalStore,
                u = r.useRef,
                l = r.useEffect,
                c = r.useMemo,
                d = r.useDebugValue;
            e.useSyncExternalStoreWithSelector = function(t, e, n, r, i) {
                var o = u(null);
                if (null === o.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    o.current = f
                } else f = o.current;
                var h = a(t, (o = c(function() {
                    function t(t) {
                        if (!u) {
                            if (u = !0, o = t, t = r(t), void 0 !== i && f.hasValue) {
                                var e = f.value;
                                if (i(e, t)) return a = e
                            }
                            return a = t
                        }
                        if (e = a, s(o, t)) return e;
                        var n = r(t);
                        return void 0 !== i && i(e, n) ? e : (o = t, a = n)
                    }
                    var o, a, u = !1,
                        l = void 0 === n ? null : n;
                    return [function() {
                        return t(e())
                    }, null === l ? void 0 : function() {
                        return t(l())
                    }]
                }, [e, n, r, i]))[0], o[1]);
                return l(function() {
                    f.hasValue = !0, f.value = h
                }, [h]), d(h), h
            }
        },
        92280: function(t, e, n) {
            "use strict";
            t.exports = n(97838)
        },
        68093: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                NIL: function() {
                    return q
                },
                parse: function() {
                    return S
                },
                stringify: function() {
                    return p
                },
                v1: function() {
                    return m
                },
                v3: function() {
                    return P
                },
                v4: function() {
                    return j
                },
                v5: function() {
                    return Y
                },
                validate: function() {
                    return c
                },
                version: function() {
                    return X
                }
            });
            var r, i, o, s = new Uint8Array(16);

            function a() {
                if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(s)
            }
            var u = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

            function l(t) {
                return "string" == typeof t && u.test(t)
            }
            for (var c = l, d = [], f = 0; f < 256; ++f) d.push((f + 256).toString(16).substr(1));

            function h(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (d[t[e + 0]] + d[t[e + 1]] + d[t[e + 2]] + d[t[e + 3]] + "-" + d[t[e + 4]] + d[t[e + 5]] + "-" + d[t[e + 6]] + d[t[e + 7]] + "-" + d[t[e + 8]] + d[t[e + 9]] + "-" + d[t[e + 10]] + d[t[e + 11]] + d[t[e + 12]] + d[t[e + 13]] + d[t[e + 14]] + d[t[e + 15]]).toLowerCase();
                if (!c(n)) throw TypeError("Stringified UUID is invalid");
                return n
            }
            var p = h,
                g = 0,
                v = 0;

            function y(t, e, n) {
                var r = e && n || 0,
                    s = e || Array(16),
                    u = (t = t || {}).node || i,
                    l = void 0 !== t.clockseq ? t.clockseq : o;
                if (null == u || null == l) {
                    var c = t.random || (t.rng || a)();
                    null == u && (u = i = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]), null == l && (l = o = (c[6] << 8 | c[7]) & 16383)
                }
                var d = void 0 !== t.msecs ? t.msecs : Date.now(),
                    f = void 0 !== t.nsecs ? t.nsecs : v + 1,
                    h = d - g + (f - v) / 1e4;
                if (h < 0 && void 0 === t.clockseq && (l = l + 1 & 16383), (h < 0 || d > g) && void 0 === t.nsecs && (f = 0), f >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                g = d, v = f, o = l;
                var y = ((268435455 & (d += 122192928e5)) * 1e4 + f) % 4294967296;
                s[r++] = y >>> 24 & 255, s[r++] = y >>> 16 & 255, s[r++] = y >>> 8 & 255, s[r++] = 255 & y;
                var m = d / 4294967296 * 1e4 & 268435455;
                s[r++] = m >>> 8 & 255, s[r++] = 255 & m, s[r++] = m >>> 24 & 15 | 16, s[r++] = m >>> 16 & 255, s[r++] = l >>> 8 | 128, s[r++] = 255 & l;
                for (var E = 0; E < 6; ++E) s[r + E] = u[E];
                return e || p(s)
            }
            var m = y;

            function E(t) {
                if (!c(t)) throw TypeError("Invalid UUID");
                var e, n = new Uint8Array(16);
                return n[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, n[1] = e >>> 16 & 255, n[2] = e >>> 8 & 255, n[3] = 255 & e, n[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, n[5] = 255 & e, n[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, n[7] = 255 & e, n[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, n[9] = 255 & e, n[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = e / 4294967296 & 255, n[12] = e >>> 24 & 255, n[13] = e >>> 16 & 255, n[14] = e >>> 8 & 255, n[15] = 255 & e, n
            }
            var S = E;

            function _(t) {
                t = unescape(encodeURIComponent(t));
                for (var e = [], n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
                return e
            }
            var b = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
                I = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

            function w(t, e, n) {
                function r(t, r, i, o) {
                    if ("string" == typeof t && (t = _(t)), "string" == typeof r && (r = S(r)), 16 !== r.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var s = new Uint8Array(16 + t.length);
                    if (s.set(r), s.set(t, r.length), (s = n(s))[6] = 15 & s[6] | e, s[8] = 63 & s[8] | 128, i) {
                        o = o || 0;
                        for (var a = 0; a < 16; ++a) i[o + a] = s[a];
                        return i
                    }
                    return p(s)
                }
                try {
                    r.name = t
                } catch (i) {}
                return r.DNS = b, r.URL = I, r
            }

            function L(t) {
                if ("string" == typeof t) {
                    var e = unescape(encodeURIComponent(t));
                    t = new Uint8Array(e.length);
                    for (var n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n)
                }
                return O(D(k(t), 8 * t.length))
            }

            function O(t) {
                for (var e = [], n = 32 * t.length, r = "0123456789abcdef", i = 0; i < n; i += 8) {
                    var o = t[i >> 5] >>> i % 32 & 255,
                        s = parseInt(r.charAt(o >>> 4 & 15) + r.charAt(15 & o), 16);
                    e.push(s)
                }
                return e
            }

            function A(t) {
                return (t + 64 >>> 9 << 4) + 14 + 1
            }

            function D(t, e) {
                t[e >> 5] |= 128 << e % 32, t[A(e) - 1] = e;
                for (var n = 1732584193, r = -271733879, i = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
                    var a = n,
                        u = r,
                        l = i,
                        c = o;
                    n = M(n, r, i, o, t[s], 7, -680876936), o = M(o, n, r, i, t[s + 1], 12, -389564586), i = M(i, o, n, r, t[s + 2], 17, 606105819), r = M(r, i, o, n, t[s + 3], 22, -1044525330), n = M(n, r, i, o, t[s + 4], 7, -176418897), o = M(o, n, r, i, t[s + 5], 12, 1200080426), i = M(i, o, n, r, t[s + 6], 17, -1473231341), r = M(r, i, o, n, t[s + 7], 22, -45705983), n = M(n, r, i, o, t[s + 8], 7, 1770035416), o = M(o, n, r, i, t[s + 9], 12, -1958414417), i = M(i, o, n, r, t[s + 10], 17, -42063), r = M(r, i, o, n, t[s + 11], 22, -1990404162), n = M(n, r, i, o, t[s + 12], 7, 1804603682), o = M(o, n, r, i, t[s + 13], 12, -40341101), i = M(i, o, n, r, t[s + 14], 17, -1502002290), r = M(r, i, o, n, t[s + 15], 22, 1236535329), n = N(n, r, i, o, t[s + 1], 5, -165796510), o = N(o, n, r, i, t[s + 6], 9, -1069501632), i = N(i, o, n, r, t[s + 11], 14, 643717713), r = N(r, i, o, n, t[s], 20, -373897302), n = N(n, r, i, o, t[s + 5], 5, -701558691), o = N(o, n, r, i, t[s + 10], 9, 38016083), i = N(i, o, n, r, t[s + 15], 14, -660478335), r = N(r, i, o, n, t[s + 4], 20, -405537848), n = N(n, r, i, o, t[s + 9], 5, 568446438), o = N(o, n, r, i, t[s + 14], 9, -1019803690), i = N(i, o, n, r, t[s + 3], 14, -187363961), r = N(r, i, o, n, t[s + 8], 20, 1163531501), n = N(n, r, i, o, t[s + 13], 5, -1444681467), o = N(o, n, r, i, t[s + 2], 9, -51403784), i = N(i, o, n, r, t[s + 7], 14, 1735328473), r = N(r, i, o, n, t[s + 12], 20, -1926607734), n = U(n, r, i, o, t[s + 5], 4, -378558), o = U(o, n, r, i, t[s + 8], 11, -2022574463), i = U(i, o, n, r, t[s + 11], 16, 1839030562), r = U(r, i, o, n, t[s + 14], 23, -35309556), n = U(n, r, i, o, t[s + 1], 4, -1530992060), o = U(o, n, r, i, t[s + 4], 11, 1272893353), i = U(i, o, n, r, t[s + 7], 16, -155497632), r = U(r, i, o, n, t[s + 10], 23, -1094730640), n = U(n, r, i, o, t[s + 13], 4, 681279174), o = U(o, n, r, i, t[s], 11, -358537222), i = U(i, o, n, r, t[s + 3], 16, -722521979), r = U(r, i, o, n, t[s + 6], 23, 76029189), n = U(n, r, i, o, t[s + 9], 4, -640364487), o = U(o, n, r, i, t[s + 12], 11, -421815835), i = U(i, o, n, r, t[s + 15], 16, 530742520), r = U(r, i, o, n, t[s + 2], 23, -995338651), n = V(n, r, i, o, t[s], 6, -198630844), o = V(o, n, r, i, t[s + 7], 10, 1126891415), i = V(i, o, n, r, t[s + 14], 15, -1416354905), r = V(r, i, o, n, t[s + 5], 21, -57434055), n = V(n, r, i, o, t[s + 12], 6, 1700485571), o = V(o, n, r, i, t[s + 3], 10, -1894986606), i = V(i, o, n, r, t[s + 10], 15, -1051523), r = V(r, i, o, n, t[s + 1], 21, -2054922799), n = V(n, r, i, o, t[s + 8], 6, 1873313359), o = V(o, n, r, i, t[s + 15], 10, -30611744), i = V(i, o, n, r, t[s + 6], 15, -1560198380), r = V(r, i, o, n, t[s + 13], 21, 1309151649), n = V(n, r, i, o, t[s + 4], 6, -145523070), o = V(o, n, r, i, t[s + 11], 10, -1120210379), i = V(i, o, n, r, t[s + 2], 15, 718787259), r = V(r, i, o, n, t[s + 9], 21, -343485551), n = T(n, a), r = T(r, u), i = T(i, l), o = T(o, c)
                }
                return [n, r, i, o]
            }

            function k(t) {
                if (0 === t.length) return [];
                for (var e = 8 * t.length, n = new Uint32Array(A(e)), r = 0; r < e; r += 8) n[r >> 5] |= (255 & t[r / 8]) << r % 32;
                return n
            }

            function T(t, e) {
                var n = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function C(t, e) {
                return t << e | t >>> 32 - e
            }

            function x(t, e, n, r, i, o) {
                return T(C(T(T(e, t), T(r, o)), i), n)
            }

            function M(t, e, n, r, i, o, s) {
                return x(e & n | ~e & r, t, e, i, o, s)
            }

            function N(t, e, n, r, i, o, s) {
                return x(e & r | n & ~r, t, e, i, o, s)
            }

            function U(t, e, n, r, i, o, s) {
                return x(e ^ n ^ r, t, e, i, o, s)
            }

            function V(t, e, n, r, i, o, s) {
                return x(n ^ (e | ~r), t, e, i, o, s)
            }
            var R = L,
                P = w("v3", 48, R);

            function G(t, e, n) {
                var r = (t = t || {}).random || (t.rng || a)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
                    n = n || 0;
                    for (var i = 0; i < 16; ++i) e[n + i] = r[i];
                    return e
                }
                return p(r)
            }
            var j = G;

            function K(t, e, n, r) {
                switch (t) {
                    case 0:
                        return e & n ^ ~e & r;
                    case 1:
                    case 3:
                        return e ^ n ^ r;
                    case 2:
                        return e & n ^ e & r ^ n & r
                }
            }

            function B(t, e) {
                return t << e | t >>> 32 - e
            }

            function z(t) {
                var e = [1518500249, 1859775393, 2400959708, 3395469782],
                    n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof t) {
                    var r = unescape(encodeURIComponent(t));
                    t = [];
                    for (var i = 0; i < r.length; ++i) t.push(r.charCodeAt(i))
                } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
                t.push(128);
                for (var o = Math.ceil((t.length / 4 + 2) / 16), s = Array(o), a = 0; a < o; ++a) {
                    for (var u = new Uint32Array(16), l = 0; l < 16; ++l) u[l] = t[64 * a + 4 * l] << 24 | t[64 * a + 4 * l + 1] << 16 | t[64 * a + 4 * l + 2] << 8 | t[64 * a + 4 * l + 3];
                    s[a] = u
                }
                s[o - 1][14] = (t.length - 1) * 8 / 4294967296, s[o - 1][14] = Math.floor(s[o - 1][14]), s[o - 1][15] = (t.length - 1) * 8 & 4294967295;
                for (var c = 0; c < o; ++c) {
                    for (var d = new Uint32Array(80), f = 0; f < 16; ++f) d[f] = s[c][f];
                    for (var h = 16; h < 80; ++h) d[h] = B(d[h - 3] ^ d[h - 8] ^ d[h - 14] ^ d[h - 16], 1);
                    for (var p = n[0], g = n[1], v = n[2], y = n[3], m = n[4], E = 0; E < 80; ++E) {
                        var S = Math.floor(E / 20),
                            _ = B(p, 5) + K(S, g, v, y) + m + e[S] + d[E] >>> 0;
                        m = y, y = v, v = B(g, 30) >>> 0, g = p, p = _
                    }
                    n[0] = n[0] + p >>> 0, n[1] = n[1] + g >>> 0, n[2] = n[2] + v >>> 0, n[3] = n[3] + y >>> 0, n[4] = n[4] + m >>> 0
                }
                return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
            }
            var F = z,
                Y = w("v5", 80, F),
                q = "00000000-0000-0000-0000-000000000000";

            function J(t) {
                if (!c(t)) throw TypeError("Invalid UUID");
                return parseInt(t.substr(14, 1), 16)
            }
            var X = J
        },
        65818: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (e.has(t)) throw TypeError("Cannot initialize the same private elements twice on an object")
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        81729: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                if (!e.has(t)) throw TypeError("attempted to " + n + " private field on non-instance");
                return e.get(t)
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        33468: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(81729);

            function i(t, e) {
                return e.get ? e.get.call(t) : e.value
            }

            function o(t, e) {
                var n = (0, r.Z)(t, e, "get");
                return i(t, n)
            }
        },
        47775: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(65818);

            function i(t, e, n) {
                (0, r.Z)(t, e), e.set(t, n)
            }
        },
        75106: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(81729);

            function i(t, e, n) {
                if (e.set) e.set.call(t, n);
                else {
                    if (!e.writable) throw TypeError("attempted to set read only private field");
                    e.value = n
                }
            }

            function o(t, e, n) {
                var o = (0, r.Z)(t, e, "set");
                return i(t, o, n), n
            }
        },
        87561: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
                return n
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        56164: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(65818);

            function i(t, e) {
                (0, r.Z)(t, e), e.add(t)
            }
        },
        59268: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function() {
                    return c
                }
            });
            let r = t => {
                    let e, n = new Set,
                        r = (t, r) => {
                            let i = "function" == typeof t ? t(e) : t;
                            if (!Object.is(i, e)) {
                                let o = e;
                                e = (null != r ? r : "object" != typeof i) ? i : Object.assign({}, e, i), n.forEach(t => t(e, o))
                            }
                        },
                        i = () => e,
                        o = t => (n.add(t), () => n.delete(t)),
                        s = () => n.clear(),
                        a = {
                            setState: r,
                            getState: i,
                            subscribe: o,
                            destroy: s
                        };
                    return e = t(r, i, a), a
                },
                i = t => t ? r(t) : r;
            var o = n(70079),
                s = n(92280);
            let {
                useSyncExternalStoreWithSelector: a
            } = s;

            function u(t, e = t.getState, n) {
                let r = a(t.subscribe, t.getState, t.getServerState || t.getState, e, n);
                return (0, o.useDebugValue)(r), r
            }
            let l = t => {
                    let e = "function" == typeof t ? i(t) : t,
                        n = (t, n) => u(e, t, n);
                    return Object.assign(n, e), n
                },
                c = t => t ? l(t) : l
        },
        63954: function(t) {
            "use strict";
            t.exports = JSON.parse('{"name":"statsig-js","version":"4.32.0","description":"Statsig JavaScript client SDK for single user environments.","main":"dist/index.js","types":"dist/index.d.ts","scripts":{"prepare":"rm -rf build/ && rm -rf dist/ && tsc && webpack","postbuild":"rm -rf build/**/*.map","test":"jest --config=jest-debug.config.js","testForGithubOrRedisEnthusiasts":"jest","test:watch":"jest --watch","build:dryrun":"npx tsc --noEmit","types":"npx tsc"},"files":["build/statsig-prod-web-sdk.js","dist/*.js","dist/*.d.ts","dist/utils/*.js","dist/utils/*.d.ts"],"jsdelivr":"build/statsig-prod-web-sdk.js","repository":{"type":"git","url":"git+https://github.com/statsig-io/js-client-sdk.git"},"author":"Statsig, Inc.","license":"ISC","bugs":{"url":"https://github.com/statsig-io/js-client-sdk/issues"},"keywords":["feature gate","feature flag","continuous deployment","ci","ab test"],"homepage":"https://www.statsig.com","devDependencies":{"@babel/preset-env":"^7.14.9","@babel/preset-typescript":"^7.14.5","@types/jest":"^27.1.0","@types/uuid":"^8.3.1","circular-dependency-plugin":"^5.2.2","core-js":"^3.16.4","jest":"^27.1.0","terser-webpack-plugin":"^5.1.4","ts-jest":"^27.1.0","ts-loader":"^9.2.3","typescript":"^4.2.2","webpack":"^5.75.0","webpack-cli":"^4.10.0"},"dependencies":{"js-sha256":"^0.9.0","uuid":"^8.3.2"},"importSort":{".js, .jsx, .ts, .tsx":{"style":"module","parser":"typescript"}}}')
        }
    }
]);