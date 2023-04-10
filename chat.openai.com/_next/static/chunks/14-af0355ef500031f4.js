"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14], {
        5983: function(e, n, t) {
            t.d(n, {
                e: function() {
                    return p
                }
            });
            var r = t(35250),
                a = t(19841),
                s = t(70079),
                i = t(1454),
                o = t(82018),
                l = t(33264),
                c = t(66285),
                u = t(39690),
                d = t(74516),
                p = function() {
                    var e = (0, s.useState)(!1),
                        n = e[0],
                        t = e[1],
                        p = (0, s.useState)(!1),
                        f = p[0],
                        m = p[1],
                        h = (0, o.kP)().session,
                        v = (0, c.hz)(),
                        b = null == h ? void 0 : h.accessToken,
                        x = v.has("data_deletion_enabled"),
                        g = v.has("data_export_enabled"),
                        y = (0, s.useCallback)(function() {
                            try {
                                l.ZP.deactivateAccount(b).then(function() {
                                    (0, o.w7)()
                                })
                            } catch (e) {
                                d.m.warning("There was an error with your account deletion. Please try again. If the problem continues, please visit us at help.openai.com", {
                                    hasCloseButton: !0
                                })
                            }
                        }, [b]),
                        w = (0, s.useCallback)(function() {
                            try {
                                l.ZP.submitDataExport(b).then(function() {
                                    m(!0)
                                })
                            } catch (e) {
                                d.m.warning("We were unable to process your export at this time. Please try again later.", {
                                    hasCloseButton: !0
                                })
                            }
                        }, [b]);
                    return (0, r.jsx)("div", {
                        className: (0, a.Z)("w-0 min-w-full border-t py-3 px-4 dark:border-gray-700", x || g ? "" : "hidden"),
                        children: n ? (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                className: "text-sm sm:pb-4",
                                children: "Please note that deletion is permanent and will remove data associated with your account, and you will not be able to make an account again in the future."
                            }), (0, r.jsxs)(u.z, {
                                color: "neutral",
                                size: "small",
                                className: "sm:text-basecursor-pointer text-sm",
                                onClick: y,
                                children: [(0, r.jsx)(i.We9, {}), "Delete account"]
                            })]
                        }) : (0, r.jsxs)("div", {
                            className: "flex justify-between",
                            children: [x && (0, r.jsxs)("span", {
                                className: "flex cursor-pointer items-center gap-1 text-sm",
                                onClick: function() {
                                    return t(!0)
                                },
                                children: [(0, r.jsx)(i.We9, {}), "Delete account"]
                            }), g && (0, r.jsx)("span", {
                                className: (0, a.Z)("flex items-center gap-1 text-sm", f ? "cursor-default opacity-30" : "cursor-pointer"),
                                onClick: w,
                                children: f ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(i.LSm, {}), "Exported"]
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(i.A8q, {}), "Export"]
                                })
                            })]
                        })
                    })
                }
        },
        77064: function(e, n, t) {
            t.d(n, {
                $: function() {
                    return m
                },
                u: function() {
                    return f
                }
            });
            var r = t(31501),
                a = t(61079),
                s = t(14806),
                i = t(35250),
                o = t(19841),
                l = t(70079),
                c = t(65921),
                u = t(34303);

            function d() {
                var e = (0, s.Z)(['\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n', "\n", "\n"]);
                return d = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, s.Z)(["absolute w-2 h-2 -z-10"]);
                return p = function() {
                    return e
                }, e
            }

            function f(e) {
                var n = e.text,
                    t = e.children;
                return (0, i.jsx)("div", {
                    className: "tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700",
                    "data-content": n,
                    children: t
                })
            }
            var m = function(e) {
                    var n = e.children,
                        t = e.label,
                        s = e.enterDelay,
                        u = void 0 === s ? 0 : s,
                        d = e.leaveDelay,
                        p = void 0 === d ? 50 : d,
                        f = e.placement,
                        m = void 0 === f ? "bottom" : f,
                        h = e.offset,
                        b = e.withArrow,
                        x = e.interactive,
                        g = void 0 !== x && x,
                        y = e.wide,
                        w = (0, l.useState)(!1),
                        j = w[0],
                        Z = w[1],
                        k = (0, l.useState)(null),
                        _ = k[0],
                        P = k[1],
                        S = (0, l.useState)(null),
                        C = S[0],
                        N = S[1],
                        A = (0, l.useState)(null),
                        T = A[0],
                        R = A[1],
                        E = (0, c.D)(_, C, {
                            placement: m,
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: void 0 === h ? [0, 14] : h
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: T
                                }
                            }, ]
                        }),
                        U = E.styles,
                        D = E.attributes,
                        F = E.forceUpdate,
                        M = (0, l.useRef)(),
                        L = (0, l.useRef)(),
                        z = (0, l.useCallback)(function() {
                            null == F || F(), L.current && clearTimeout(L.current), M.current = setTimeout(function() {
                                return Z(!0)
                            }, u)
                        }, [u, F]),
                        W = (0, l.useCallback)(function() {
                            M.current && clearTimeout(M.current), L.current = setTimeout(function() {
                                return Z(!1)
                            }, p)
                        }, [p]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            ref: P,
                            onMouseEnter: z,
                            onMouseLeave: W,
                            children: n
                        }), (0, i.jsxs)("div", (0, a.Z)((0, r.Z)({
                            ref: N,
                            style: U.popper
                        }, D.popper), {
                            className: (0, o.Z)("relative z-10 m-0 rounded p-1 transition-opacity", j ? "opacity-100" : "pointer-events-none opacity-0", void 0 !== y && y ? "max-w-sm" : "max-w-xs", "border border-black/10 bg-gray-100"),
                            onMouseEnter: g ? z : void 0,
                            onMouseLeave: g ? W : void 0,
                            children: [t, (void 0 === b || b) && (0, i.jsx)(v, {
                                ref: R,
                                $placement: m
                            })]
                        }))]
                    })
                },
                h = u.Z.div(d(), function(e) {
                    return "bottom" === e.$placement && "-top-1 left-1/2 -translate-x-[50%] rotate-[225deg]"
                }, function(e) {
                    return "top" === e.$placement && "before:top-0 before:rotate-45"
                }),
                v = (0, u.Z)(h)(p())
        },
        86885: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return w
                }
            });
            var r = t(61706),
                a = t(45813),
                s = t(35250),
                i = t(54721),
                o = t.n(i),
                l = t(61432),
                c = t(70079),
                u = t(1454),
                d = t(12762),
                p = t(98943),
                f = t(33264),
                m = t(66285),
                h = t(5983),
                v = t(74516),
                b = t(35e3),
                x = t(69858),
                g = t(21345),
                y = t(77507);

            function w(e) {
                var n = e.isOpen,
                    t = e.onClose,
                    i = (0, c.useRef)(null),
                    w = (0, m.hz)(),
                    j = (0, d.WS)(),
                    Z = (0, c.useState)(!1),
                    k = Z[0],
                    _ = Z[1],
                    P = (0, l.useRouter)(),
                    S = (0, c.useCallback)(function() {
                        j(p.s6.closeAccountPaymentModal), t()
                    }, [t, j]),
                    C = (0, c.useCallback)((0, r.Z)(function() {
                        var e;
                        return (0, a.__generator)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    _(!0), j(p.s6.clickAccountPaymentCheckout), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, f.ZP.submitCheckoutForm()];
                                case 2:
                                    return e = n.sent(), P.push(e.url), [3, 5];
                                case 3:
                                    return n.sent(), v.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return _(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [P, j, _]),
                    N = (0, c.useCallback)((0, r.Z)(function() {
                        var e;
                        return (0, a.__generator)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    _(!0), j(p.s6.clickAccountCustomerPortal), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, f.ZP.fetchCustomerPortalUrl()];
                                case 2:
                                    return e = n.sent(), P.push(e.url), [3, 5];
                                case 3:
                                    return n.sent(), v.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return _(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [P, j, _]),
                    A = (0, c.useCallback)(function() {
                        j(p.s6.clickAccountPaymentGetHelp)
                    }, [j]),
                    T = (0, m.mA)(function(e) {
                        var n;
                        return null === (n = e.accountPlan) || void 0 === n ? void 0 : n.hasCustomerObject
                    }),
                    R = w.has("disable_upgrade_ui");
                return (0, s.jsxs)(b.x, {
                    isOpen: n,
                    onClose: t,
                    focusRef: i,
                    children: [(0, s.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
                        children: [(0, s.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: "Your account"
                        }), (0, s.jsx)("button", {
                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: S,
                            children: (0, s.jsx)(u.q5L, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "grid sm:grid-cols-2",
                        children: [(0, s.jsx)("div", {
                            className: "relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",
                            children: (0, s.jsx)(x.Oi, {
                                rowElements: [(0, s.jsx)(x.Cu, {
                                    text: "Free plan"
                                }, "row-free-plan-name"), (0, s.jsx)(x.hi, {
                                    variant: "disabled",
                                    disabled: !0,
                                    text: y.S.free.callToAction.active
                                }, "row-free-plan-button"), (0, s.jsx)(x.G, {
                                    variant: "secondary",
                                    text: y.S.free.demandAccess
                                }, "row-free-plan-demand"), (0, s.jsx)(x.G, {
                                    variant: "secondary",
                                    text: y.S.free.responseSpeed
                                }, "row-free-plan-speed"), (0, s.jsx)(x.G, {
                                    className: "sm:pb-2",
                                    variant: "secondary",
                                    text: y.S.free.modelFeatures
                                }, "row-free-plan-updates"), ]
                            })
                        }), (0, s.jsx)("div", {
                            className: "relative order-1 col-span-1 sm:order-2",
                            children: (0, s.jsx)(x.Oi, {
                                rowElements: [(0, s.jsx)(x.Cu, {
                                    text: y.S.plus.name,
                                    children: (0, s.jsx)("span", {
                                        className: "font-semibold text-gray-500",
                                        children: y.S.plus.costInDollars
                                    })
                                }, "row-plus-plan-title"), (0, s.jsx)(x.hi, {
                                    variant: "primary",
                                    disabledText: R ? "Due to high demand, we've temporarily paused upgrades." : "",
                                    disabled: k,
                                    isLoading: k,
                                    ref: i,
                                    onClick: C,
                                    text: y.S.plus.callToAction.inactivePayment
                                }, "row-plus-plan-button"), (0, s.jsx)(x.G, {
                                    variant: "primary",
                                    text: y.S.plus.demandAccess
                                }, "row-plus-plan-demand"), (0, s.jsx)(x.G, {
                                    variant: "primary",
                                    text: y.S.plus.responseSpeed
                                }, "row-plus-plan-speed"), (0, s.jsx)(x.G, {
                                    className: "sm:pb-2",
                                    variant: "primary",
                                    text: y.S.plus.modelFeatures
                                }, "row-plus-plan-updates"), T && (0, s.jsx)(x.nR, {
                                    className: "sm:pb-1",
                                    isLoading: k,
                                    text: y.S.manageSubscription.callToAction,
                                    onClick: N
                                }, "row-plus-plan-manage"), (0, s.jsx)(o(), {
                                    target: "_blank",
                                    href: g.L,
                                    passHref: !0,
                                    children: (0, s.jsx)(x.nR, {
                                        className: "sm:pb-1",
                                        isLoading: !1,
                                        text: y.S.getHelp.callToAction,
                                        onClick: A
                                    }, "row-plus-plan-help")
                                }, "row-plus-plan-help-link"), ]
                            })
                        })]
                    }), (0, s.jsx)(h.e, {})]
                })
            }
        },
        35e3: function(e, n, t) {
            t.d(n, {
                x: function() {
                    return l
                }
            });
            var r = t(14806),
                a = t(35250),
                s = t(34303),
                i = t(73925);

            function o() {
                var e = (0, r.Z)(["flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
                return o = function() {
                    return e
                }, e
            }
            var l = function(e) {
                    var n = e.children,
                        t = e.isOpen,
                        r = e.onClose,
                        s = e.focusRef;
                    return (0, a.jsx)(i.Z, {
                        size: "fullscreen",
                        isOpen: t,
                        onModalClose: r,
                        type: "success",
                        title: "",
                        className: "bg-transparent dark:bg-transparent",
                        initialFocusRef: s,
                        children: (0, a.jsx)("div", {
                            className: "flex h-full flex-col items-center justify-start",
                            children: (0, a.jsx)("div", {
                                className: "relative",
                                children: (0, a.jsx)(c, {
                                    children: n
                                })
                            })
                        })
                    })
                },
                c = s.Z.div(o())
        },
        69858: function(e, n, t) {
            t.d(n, {
                Cu: function() {
                    return v
                },
                G: function() {
                    return g
                },
                Oi: function() {
                    return h
                },
                hi: function() {
                    return x
                },
                nR: function() {
                    return y
                }
            });
            var r = t(14806),
                a = t(35250),
                s = t(19841),
                i = t(70079),
                o = t(1454),
                l = t(34303),
                c = t(39690),
                u = t(79876),
                d = t(77064);

            function p() {
                var e = (0, r.Z)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
                return p = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r.Z)(["gap-2 flex flex-row justify-start items-center text-sm"]);
                return f = function() {
                    return e
                }, e
            }

            function m() {
                var e = (0, r.Z)(["text-xl font-semibold justify-between items-center flex"]);
                return m = function() {
                    return e
                }, e
            }
            var h = function(e) {
                    var n = e.rowElements;
                    return (0, a.jsx)(w, {
                        children: n.map(function(e) {
                            return e
                        })
                    })
                },
                v = function(e) {
                    var n = e.className,
                        t = e.text,
                        r = e.children;
                    return (0, a.jsxs)(Z, {
                        className: n,
                        children: [(0, a.jsx)("span", {
                            children: t
                        }), r]
                    })
                },
                b = {
                    "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
                    primary: "border-none py-3 font-semibold",
                    disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
                },
                x = (0, i.forwardRef)(function(e, n) {
                    var t = e.isLoading,
                        r = void 0 !== t && t,
                        i = e.disabled,
                        l = e.onClick,
                        p = e.variant,
                        f = void 0 === p ? "primary" : p,
                        m = e.text,
                        h = e.disabledText;
                    return h ? (0, a.jsx)("div", {
                        className: "relative",
                        children: (0, a.jsx)(d.$, {
                            placement: "bottom",
                            offset: [0, 20],
                            label: (0, a.jsx)(d.u, {
                                children: h
                            }),
                            children: (0, a.jsxs)(c.z, {
                                ref: n,
                                as: "button",
                                color: "disabled",
                                className: (0, s.Z)("w-full", b[f]),
                                children: [m, r && (0, a.jsx)(u.ZP, {
                                    className: "animate-spin",
                                    icon: o.dAq
                                })]
                            })
                        })
                    }) : (0, a.jsxs)(c.z, {
                        disabled: void 0 !== i && i,
                        onClick: l,
                        openNewTab: !0,
                        ref: n,
                        as: "button",
                        className: (0, s.Z)(b[f]),
                        children: [(0, a.jsx)("span", {
                            className: (0, s.Z)("inline-block", {
                                "text-gray-700": "primary-disabled" === f,
                                "text-white": "primary" === f
                            }),
                            children: m
                        }), r && (0, a.jsx)(u.ZP, {
                            className: "animate-spin",
                            icon: o.dAq
                        })]
                    })
                });
            x.displayName = "PricingPlanButton";
            var g = function(e) {
                    var n = e.variant,
                        t = void 0 === n ? "primary" : n,
                        r = e.className,
                        i = e.text;
                    return (0, a.jsxs)(j, {
                        className: r,
                        children: [(0, a.jsx)(u.ZP, {
                            icon: o._rq,
                            className: (0, s.Z)("h-5 w-5", {
                                "text-green-700": "primary" == t,
                                "text-gray-400": "secondary" == t
                            })
                        }), (0, a.jsx)("span", {
                            children: i
                        })]
                    })
                },
                y = function(e) {
                    var n = e.className,
                        t = e.text,
                        r = e.isLoading,
                        s = e.onClick;
                    return (0, a.jsx)(j, {
                        className: n,
                        children: (0, a.jsxs)("button", {
                            onClick: s,
                            className: "flex flex-row items-center space-x-1 underline",
                            children: [(0, a.jsx)("span", {
                                children: t
                            }), r && (0, a.jsx)(u.ZP, {
                                className: "animate-spin",
                                icon: o.dAq
                            })]
                        })
                    })
                },
                w = l.Z.div(p()),
                j = l.Z.div(f()),
                Z = l.Z.div(m())
        },
        21345: function(e, n, t) {
            t.d(n, {
                L: function() {
                    return r
                }
            });
            var r = "https://help.openai.com/en/collections/3943089-billing"
        },
        77507: function(e, n, t) {
            t.d(n, {
                S: function() {
                    return r
                }
            });
            var r = {
                free: {
                    name: "Free plan",
                    callToAction: {
                        active: "Your current plan",
                        inactive: "Your current plan"
                    },
                    costInDollars: "",
                    demandAccess: "Available when demand is low",
                    responseSpeed: "Standard response speed",
                    modelFeatures: "Regular model updates"
                },
                plus: {
                    name: "ChatGPT Plus",
                    callToAction: {
                        active: "Your current plan",
                        inactive: "I'm interested",
                        inactivePayment: "Upgrade plan"
                    },
                    costInDollars: "USD $20/mo",
                    demandAccess: "Available even when demand is high",
                    responseSpeed: "Faster response speed",
                    modelFeatures: "Priority access to new features"
                },
                manageSubscription: {
                    callToAction: "Manage my subscription"
                },
                getHelp: {
                    callToAction: "I need help with a billing issue"
                }
            }
        },
        85087: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var r = t(87762),
                a = t(70079),
                s = t(82018),
                i = t(33264),
                o = t(66285),
                l = t(27252);

            function c() {
                var e = (0, s.kP)(),
                    n = e.session,
                    t = e.loading,
                    c = (0, o.mA)(function(e) {
                        return e.hasBeenSet
                    }),
                    u = (0, l.g)(function(e) {
                        return e.updateFlagValue
                    }),
                    d = (0, r.a)(["account-status"], function() {
                        return i.ZP.getAccountStatus(null == n ? void 0 : n.accessToken)
                    }, {
                        enabled: !t && Boolean(null == n ? void 0 : n.accessToken),
                        onError: function() {
                            console.error("Unable to load account")
                        },
                        onSuccess: function(e) {
                            var n;
                            m(e), u("highlightPlusUpgrade", !(null === (n = e.account_plan) || void 0 === n ? void 0 : n.is_paid_subscription_active))
                        }
                    }),
                    p = d.data,
                    f = d.isLoading,
                    m = (0, o.mA)(function(e) {
                        return {
                            accountPlan: e.accountPlan,
                            updateAccountPlanWithResponse: e.updateAccountPlanWithResponse
                        }
                    }).updateAccountPlanWithResponse;
                return (0, a.useMemo)(function() {
                    return {
                        accountStatusResponse: p,
                        isLoading: !c && f
                    }
                }, [p, c, f])
            }
        },
        49690: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return p
                }
            });
            var r = t(27215),
                a = t(70079),
                s = t(12762),
                i = t(98943),
                o = t(82018),
                l = t(34383),
                c = t(33264),
                u = t(66285),
                d = t(11938);

            function p(e, n, t, p, f) {
                var m = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
                    h = (0, u.mA)(function(e) {
                        return e.features
                    }),
                    v = (0, o.kP)().session,
                    b = (0, s.WS)(t);
                (0, a.useEffect)(function() {
                    m && (h && n.id && (s.ZP.setUser(n, h, p, f), h.includes("log_statsig_events") && l.m.setUser(n, p), h.includes("log_intercom_events") && (0, d.u$)(n)), b(i.s6.pageLoad))
                }, [h, n.id, m]), (0, d.oG)(), (0, a.useEffect)(function() {
                    if (null == v ? void 0 : v.accessToken) c.ZP.setAccessToken(v.accessToken);
                    else if (v && !(null == v ? void 0 : v.error)) {
                        var e;
                        null === r.default || void 0 === r.default || r.default.captureMessage("Missing access token for User: ".concat(null == v ? void 0 : null === (e = v.user) || void 0 === e ? void 0 : e.id, " (").concat(null == v ? void 0 : v.accessToken, ")"))
                    }(null == v ? void 0 : v.error) === "RefreshAccessTokenError" && (null === r.default || void 0 === r.default || r.default.captureException(v.error), window._oaiHandleSessionExpired("page load", v.error))
                }, [v, n.id]), (0, a.useEffect)(function() {
                    document.title = e
                }, [e])
            }
        },
        66285: function(e, n, t) {
            t.d(n, {
                hz: function() {
                    return u
                },
                mA: function() {
                    return l
                },
                nR: function() {
                    return c
                }
            });
            var r = t(31501),
                a = t(61079),
                s = t(70079),
                i = t(59268),
                o = {
                    lastUpdated: Date.now(),
                    hasBeenSet: !1
                },
                l = (0, i.ZP)()(function(e) {
                    return (0, a.Z)((0, r.Z)({}, o), {
                        updateAccountPlanWithResponse: function(n) {
                            var t, r, a, s, i;
                            e({
                                accountPlan: {
                                    hasPaidSubscription: (null == n ? void 0 : null === (t = n.account_plan) || void 0 === t ? void 0 : t.is_paid_subscription_active) || !1,
                                    subscriptionPlan: (null == n ? void 0 : null === (r = n.account_plan) || void 0 === r ? void 0 : r.subscription_plan) || "chatgptplusfreeplan",
                                    accountUserRole: (null == n ? void 0 : null === (a = n.account_plan) || void 0 === a ? void 0 : a.account_user_role) || "account-owner",
                                    wasPaidCustomer: (null == n ? void 0 : null === (s = n.account_plan) || void 0 === s ? void 0 : s.was_paid_customer) || !1,
                                    hasCustomerObject: (null == n ? void 0 : null === (i = n.account_plan) || void 0 === i ? void 0 : i.has_customer_object) || !1
                                },
                                features: (null == n ? void 0 : n.features) || [],
                                hasBeenSet: !0
                            })
                        }
                    })
                }),
                c = function() {
                    return l(function(e) {
                        var n;
                        return null === (n = e.accountPlan) || void 0 === n ? void 0 : n.hasPaidSubscription
                    })
                },
                u = function() {
                    var e = l(function(e) {
                        return e.features
                    });
                    return (0, s.useMemo)(function() {
                        return new Set(e)
                    }, [e])
                }
        },
        27252: function(e, n, t) {
            t.d(n, {
                g: function() {
                    return l
                }
            });
            var r = t(33861),
                a = t(31501),
                s = t(61079),
                i = t(59268),
                o = {
                    flags: {
                        isUserInCanPayGroup: !1,
                        highlightPlusUpgrade: !1,
                        failwhaleBypassEnabled: !1
                    }
                },
                l = (0, i.ZP)()(function(e, n) {
                    return (0, s.Z)((0, a.Z)({}, o), {
                        updateFlagValue: function(t, i) {
                            var o = n().flags;
                            e({
                                flags: (0, s.Z)((0, a.Z)({}, o), (0, r.Z)({}, t, i))
                            })
                        }
                    })
                })
        },
        82018: function(e, n, t) {
            t.d(n, {
                kP: function() {
                    return p
                },
                w7: function() {
                    return c
                }
            });
            var r = t(61706),
                a = t(31501),
                s = t(45813),
                i = t(87762),
                o = t(91515),
                l = t(61432);

            function c(e) {
                (0, o.signOut)((0, a.Z)({
                    callbackUrl: window.location.origin + "/api/auth/logout"
                }, e))
            }

            function u() {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = (0, r.Z)(function() {
                    var e, n;
                    return (0, s.__generator)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, fetch("/api/auth/session")];
                            case 1:
                                return [4, e.sent().json()];
                            case 2:
                                if (Object.keys(n = e.sent()).length) return [2, n];
                                return [2, null]
                        }
                    })
                })).apply(this, arguments)
            }

            function p(e) {
                var n = e || {},
                    t = n.required,
                    r = n.redirectTo,
                    a = n.queryConfig,
                    s = (0, l.useRouter)(),
                    o = (0, i.a)(["session"], u, {
                        onSettled: function(e, n) {
                            (null == a ? void 0 : a.onSettled) && (null == a || a.onSettled(e, n)), !e && t && s.push(r)
                        }
                    });
                return {
                    session: (null == o ? void 0 : o.data) || null,
                    loading: (null == o ? void 0 : o.status) === "loading"
                }
            }
        },
        34383: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return w
                }
            });
            var r = t(61706),
                a = t(35025),
                s = t(33468),
                i = t(47775),
                o = t(75106),
                l = t(87561),
                c = t(56164),
                u = t(45813),
                d = t(56340),
                p = t.n(d),
                f = new WeakMap,
                m = new WeakMap,
                h = new WeakSet,
                v = new WeakSet,
                b = function() {
                    function e() {
                        (0, a.Z)(this, e), (0, c.Z)(this, h), (0, c.Z)(this, v), (0, i.Z)(this, f, {
                            writable: !0,
                            value: !1
                        }), (0, i.Z)(this, m, {
                            writable: !0,
                            value: void 0
                        })
                    }
                    var n = e.prototype;
                    return n.logEvent = function(e, n, t) {
                        (0, s.Z)(this, m) && p().logEvent(e, n, t)
                    }, n.setUser = function(e, n) {
                        !(0, s.Z)(this, f) && n ? (0, l.Z)(this, h, x).call(this, (0, l.Z)(this, v, y).call(this, e, n.is_paid_subscription_active)) : (0, s.Z)(this, f) && (0, s.Z)(this, m) !== e.id && n && ((0, o.Z)(this, m, e.id), p().updateUser((0, l.Z)(this, v, y).call(this, e, n.is_paid_subscription_active)))
                    }, e
                }();

            function x(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, r.Z)(function(e) {
                    return (0, u.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if ((0, s.Z)(this, f)) return [3, 2];
                                return e && (0, o.Z)(this, m, e.userID), [4, p().initialize("client-tnE5GCU2F2cTxRiMbvTczMDT1jpwIigZHsZSdqiy4u", e, {
                                    environment: "production"
                                })];
                            case 1:
                                n.sent(), (0, o.Z)(this, f, !0), n.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function y(e, n) {
                return {
                    userID: e.id,
                    privateAttributes: {
                        email: e.email
                    },
                    custom: {
                        is_paid: n
                    }
                }
            }
            var w = new b
        }
    }
]);