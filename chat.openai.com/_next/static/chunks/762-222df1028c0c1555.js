"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [762], {
        10538: function(t, e, r) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var s = r(70079),
                n = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                i = s.useState,
                u = s.useEffect,
                o = s.useLayoutEffect,
                c = s.useDebugValue;

            function l(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var r = e();
                    return !n(t, r)
                } catch (s) {
                    return !0
                }
            }

            function a(t, e) {
                return e()
            }
            var h = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? a : function(t, e) {
                var r = e(),
                    s = i({
                        inst: {
                            value: r,
                            getSnapshot: e
                        }
                    }),
                    n = s[0].inst,
                    a = s[1];
                return o(function() {
                    n.value = r, n.getSnapshot = e, l(n) && a({
                        inst: n
                    })
                }, [t, r, e]), u(function() {
                    return l(n) && a({
                        inst: n
                    }), t(function() {
                        l(n) && a({
                            inst: n
                        })
                    })
                }, [t]), c(r), r
            };
            e.useSyncExternalStore = void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : h
        },
        31178: function(t, e, r) {
            t.exports = r(10538)
        },
        89335: function(t, e, r) {
            r.d(e, {
                z: function() {
                    return c
                }
            });
            var s = r(49043),
                n = r(42422),
                i = r(31406),
                u = r(94521),
                o = r(99695);
            class c extends u.l {
                constructor(t, e) {
                    super(), this.client = t, this.options = e, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(e)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.length && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.listeners.length || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return a(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return a(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(t, e) {
                    let r = this.options,
                        n = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(t), (0, s.VS)(r, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                    let i = this.hasListeners();
                    i && h(this.currentQuery, n, this.options, r) && this.executeFetch(), this.updateResult(e), i && (this.currentQuery !== n || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
                    let u = this.computeRefetchInterval();
                    i && (this.currentQuery !== n || this.options.enabled !== r.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
                }
                getOptimisticResult(t) {
                    let e = this.client.getQueryCache().build(this.client, t);
                    return this.createResult(e, t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(t) {
                    let e = {};
                    return Object.keys(t).forEach(r => {
                        Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(r), t[r])
                        })
                    }), e
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: t,
                    ...e
                } = {}) {
                    return this.fetch({ ...e,
                        meta: {
                            refetchPage: t
                        }
                    })
                }
                fetchOptimistic(t) {
                    let e = this.client.defaultQueryOptions(t),
                        r = this.client.getQueryCache().build(this.client, e);
                    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
                }
                fetch(t) {
                    var e;
                    return this.executeFetch({ ...t,
                        cancelRefetch: null == (e = t.cancelRefetch) || e
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(t) {
                    this.updateQuery();
                    let e = this.currentQuery.fetch(this.options, t);
                    return null != t && t.throwOnError || (e = e.catch(s.ZT)), e
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), s.sk || this.currentResult.isStale || !(0, s.PN)(this.options.staleTime)) return;
                    let t = (0, s.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, t + 1)
                }
                computeRefetchInterval() {
                    var t;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
                }
                updateRefetchInterval(t) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = t, !s.sk && !1 !== this.options.enabled && (0, s.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || i.j.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(t, e) {
                    let r = this.currentQuery,
                        n = this.options,
                        i = this.currentResult,
                        u = this.currentResultState,
                        c = this.currentResultOptions,
                        a = t !== r,
                        f = a ? t.state : this.currentQueryInitialState,
                        p = a ? this.currentResult : this.previousQueryResult,
                        {
                            state: y
                        } = t,
                        {
                            dataUpdatedAt: v,
                            error: R,
                            errorUpdatedAt: S,
                            fetchStatus: b,
                            status: m
                        } = y,
                        E = !1,
                        Q = !1,
                        g;
                    if (e._optimisticResults) {
                        let I = this.hasListeners(),
                            C = !I && l(t, e),
                            O = I && h(t, r, e, n);
                        (C || O) && (b = (0, o.Kw)(t.options.networkMode) ? "fetching" : "paused", v || (m = "loading")), "isRestoring" === e._optimisticResults && (b = "idle")
                    }
                    if (e.keepPreviousData && !y.dataUpdatedAt && null != p && p.isSuccess && "error" !== m) g = p.data, v = p.dataUpdatedAt, m = p.status, E = !0;
                    else if (e.select && void 0 !== y.data) {
                        if (i && y.data === (null == u ? void 0 : u.data) && e.select === this.selectFn) g = this.selectResult;
                        else try {
                            this.selectFn = e.select, g = e.select(y.data), g = (0, s.oE)(null == i ? void 0 : i.data, g, e), this.selectResult = g, this.selectError = null
                        } catch (T) {
                            this.selectError = T
                        }
                    } else g = y.data;
                    if (void 0 !== e.placeholderData && void 0 === g && "loading" === m) {
                        let w;
                        if (null != i && i.isPlaceholderData && e.placeholderData === (null == c ? void 0 : c.placeholderData)) w = i.data;
                        else if (w = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== w) try {
                            w = e.select(w), this.selectError = null
                        } catch (F) {
                            this.selectError = F
                        }
                        void 0 !== w && (m = "success", g = (0, s.oE)(null == i ? void 0 : i.data, w, e), Q = !0)
                    }
                    this.selectError && (R = this.selectError, g = this.selectResult, S = Date.now(), m = "error");
                    let U = "fetching" === b,
                        k = "loading" === m,
                        x = "error" === m,
                        P = {
                            status: m,
                            fetchStatus: b,
                            isLoading: k,
                            isSuccess: "success" === m,
                            isError: x,
                            isInitialLoading: k && U,
                            data: g,
                            dataUpdatedAt: v,
                            error: R,
                            errorUpdatedAt: S,
                            failureCount: y.fetchFailureCount,
                            failureReason: y.fetchFailureReason,
                            errorUpdateCount: y.errorUpdateCount,
                            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                            isFetchedAfterMount: y.dataUpdateCount > f.dataUpdateCount || y.errorUpdateCount > f.errorUpdateCount,
                            isFetching: U,
                            isRefetching: U && !k,
                            isLoadingError: x && 0 === y.dataUpdatedAt,
                            isPaused: "paused" === b,
                            isPlaceholderData: Q,
                            isPreviousData: E,
                            isRefetchError: x && 0 !== y.dataUpdatedAt,
                            isStale: d(t, e),
                            refetch: this.refetch,
                            remove: this.remove
                        };
                    return P
                }
                updateResult(t) {
                    let e = this.currentResult,
                        r = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, s.VS)(r, e)) return;
                    this.currentResult = r;
                    let n = {
                        cache: !0
                    };
                    (null == t ? void 0 : t.listeners) !== !1 && (() => {
                        if (!e) return !0;
                        let {
                            notifyOnChangeProps: t
                        } = this.options;
                        if ("all" === t || !t && !this.trackedProps.size) return !0;
                        let r = new Set(null != t ? t : this.trackedProps);
                        return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some(t => {
                            let s = this.currentResult[t] !== e[t];
                            return s && r.has(t)
                        })
                    })() && (n.listeners = !0), this.notify({ ...n,
                        ...t
                    })
                }
                updateQuery() {
                    let t = this.client.getQueryCache().build(this.client, this.options);
                    if (t === this.currentQuery) return;
                    let e = this.currentQuery;
                    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
                }
                onQueryUpdate(t) {
                    let e = {};
                    "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || (0, o.DV)(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
                }
                notify(t) {
                    n.V.batch(() => {
                        var e, r, s, n, i, u, o, c;
                        t.onSuccess ? (null == (e = (r = this.options).onSuccess) || e.call(r, this.currentResult.data), null == (s = (n = this.options).onSettled) || s.call(n, this.currentResult.data, null)) : t.onError && (null == (i = (u = this.options).onError) || i.call(u, this.currentResult.error), null == (o = (c = this.options).onSettled) || o.call(c, void 0, this.currentResult.error)), t.listeners && this.listeners.forEach(t => {
                            t(this.currentResult)
                        }), t.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            }

            function l(t, e) {
                var r, s;
                return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount) || t.state.dataUpdatedAt > 0 && a(t, e, e.refetchOnMount)
            }

            function a(t, e, r) {
                if (!1 !== e.enabled) {
                    let s = "function" == typeof r ? r(t) : r;
                    return "always" === s || !1 !== s && d(t, e)
                }
                return !1
            }

            function h(t, e, r, s) {
                return !1 !== r.enabled && (t !== e || !1 === s.enabled) && (!r.suspense || "error" !== t.state.status) && d(t, r)
            }

            function d(t, e) {
                return t.isStaleByTime(e.staleTime)
            }
        },
        404: function(t, e, r) {
            r.d(e, {
                _: function() {
                    return u
                }
            });
            var s = r(70079);
            let n, i = s.createContext((n = !1, {
                    clearReset() {
                        n = !1
                    },
                    reset() {
                        n = !0
                    },
                    isReset: () => n
                })),
                u = () => s.useContext(i)
        },
        60112: function(t, e, r) {
            r.d(e, {
                JN: function() {
                    return u
                },
                KJ: function() {
                    return o
                },
                pf: function() {
                    return i
                }
            });
            var s = r(70079),
                n = r(83793);
            let i = (t, e) => {
                    (t.suspense || t.useErrorBoundary) && !e.isReset() && (t.retryOnMount = !1)
                },
                u = t => {
                    s.useEffect(() => {
                        t.clearReset()
                    }, [t])
                },
                o = ({
                    result: t,
                    errorResetBoundary: e,
                    useErrorBoundary: r,
                    query: s
                }) => t.isError && !e.isReset() && !t.isFetching && (0, n.L)(r, [t.error, s])
        },
        17866: function(t, e, r) {
            r.d(e, {
                S: function() {
                    return i
                }
            });
            var s = r(70079);
            let n = s.createContext(!1),
                i = () => s.useContext(n);
            n.Provider
        },
        86857: function(t, e, r) {
            r.d(e, {
                Fb: function() {
                    return s
                },
                SB: function() {
                    return i
                },
                Z$: function() {
                    return n
                },
                j8: function() {
                    return u
                }
            });
            let s = t => {
                    t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
                },
                n = (t, e) => t.isLoading && t.isFetching && !e,
                i = (t, e, r) => (null == t ? void 0 : t.suspense) && n(e, r),
                u = (t, e, r) => e.fetchOptimistic(t).then(({
                    data: e
                }) => {
                    null == t.onSuccess || t.onSuccess(e), null == t.onSettled || t.onSettled(e, null)
                }).catch(e => {
                    r.clearReset(), null == t.onError || t.onError(e), null == t.onSettled || t.onSettled(void 0, e)
                })
        },
        52696: function(t, e, r) {
            r.d(e, {
                r: function() {
                    return h
                }
            });
            var s = r(70079),
                n = r(39858),
                i = r(42422),
                u = r(404),
                o = r(62906),
                c = r(17866),
                l = r(60112),
                a = r(86857);

            function h(t, e) {
                let r = (0, o.NL)({
                        context: t.context
                    }),
                    h = (0, c.S)(),
                    d = (0, u._)(),
                    f = r.defaultQueryOptions(t);
                f._optimisticResults = h ? "isRestoring" : "optimistic", f.onError && (f.onError = i.V.batchCalls(f.onError)), f.onSuccess && (f.onSuccess = i.V.batchCalls(f.onSuccess)), f.onSettled && (f.onSettled = i.V.batchCalls(f.onSettled)), (0, a.Fb)(f), (0, l.pf)(f, d), (0, l.JN)(d);
                let [p] = s.useState(() => new e(r, f)), y = p.getOptimisticResult(f);
                if ((0, n.$)(s.useCallback(t => h ? () => void 0 : p.subscribe(i.V.batchCalls(t)), [p, h]), () => p.getCurrentResult(), () => p.getCurrentResult()), s.useEffect(() => {
                        p.setOptions(f, {
                            listeners: !1
                        })
                    }, [f, p]), (0, a.SB)(f, y, h)) throw (0, a.j8)(f, p, d);
                if ((0, l.KJ)({
                        result: y,
                        errorResetBoundary: d,
                        useErrorBoundary: f.useErrorBoundary,
                        query: p.getCurrentQuery()
                    })) throw y.error;
                return f.notifyOnChangeProps ? y : p.trackResult(y)
            }
        },
        87762: function(t, e, r) {
            r.d(e, {
                a: function() {
                    return u
                }
            });
            var s = r(49043),
                n = r(89335),
                i = r(52696);

            function u(t, e, r) {
                let u = (0, s._v)(t, e, r);
                return (0, i.r)(u, n.z)
            }
        },
        39858: function(t, e, r) {
            r.d(e, {
                $: function() {
                    return n
                }
            });
            var s = r(31178);
            let n = s.useSyncExternalStore
        },
        83793: function(t, e, r) {
            r.d(e, {
                L: function() {
                    return s
                }
            });

            function s(t, e) {
                return "function" == typeof t ? t(...e) : !!t
            }
        }
    }
]);