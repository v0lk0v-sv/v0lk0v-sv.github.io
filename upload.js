/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var U_ = Object.create;
    var tn = Object.defineProperty;
    var V_ = Object.getOwnPropertyDescriptor;
    var H_ = Object.getOwnPropertyNames;
    var W_ = Object.getPrototypeOf
      , X_ = Object.prototype.hasOwnProperty;
    var he = (e,t)=>()=>(e && (t = e(e = 0)),
    t);
    var u = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Me = (e,t)=>{
        for (var r in t)
            tn(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , xs = (e,t,r,n)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of H_(t))
                !X_.call(e, i) && i !== r && tn(e, i, {
                    get: ()=>t[i],
                    enumerable: !(n = V_(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var ue = (e,t,r)=>(r = e != null ? U_(W_(e)) : {},
    xs(t || !e || !e.__esModule ? tn(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , Je = e=>xs(tn({}, "__esModule", {
        value: !0
    }), e);
    var xi = u(()=>{
        "use strict";
        window.tram = function(e) {
            function t(l, E) {
                var T = new D.Bare;
                return T.init(l, E)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }
            function n(l) {
                var E = parseInt(l.slice(1), 16)
                  , T = E >> 16 & 255
                  , O = E >> 8 & 255
                  , m = 255 & E;
                return [T, O, m]
            }
            function i(l, E, T) {
                return "#" + (1 << 24 | l << 16 | E << 8 | T).toString(16).slice(1)
            }
            function o() {}
            function a(l, E) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E)
            }
            function s(l, E, T) {
                f("Units do not match [" + l + "]: " + E + ", " + T)
            }
            function c(l, E, T) {
                if (E !== void 0 && (T = E),
                l === void 0)
                    return T;
                var O = T;
                return xt.test(l) || !ct.test(l) ? O = parseInt(l, 10) : ct.test(l) && (O = 1e3 * parseFloat(l)),
                0 > O && (O = 0),
                O === O ? O : T
            }
            function f(l) {
                ce.debug && window && window.console.warn(l)
            }
            function p(l) {
                for (var E = -1, T = l ? l.length : 0, O = []; ++E < T; ) {
                    var m = l[E];
                    m && O.push(m)
                }
                return O
            }
            var d = function(l, E, T) {
                function O(re) {
                    return typeof re == "object"
                }
                function m(re) {
                    return typeof re == "function"
                }
                function x() {}
                function K(re, pe) {
                    function G() {
                        var Re = new ne;
                        return m(Re.init) && Re.init.apply(Re, arguments),
                        Re
                    }
                    function ne() {}
                    pe === T && (pe = re,
                    re = Object),
                    G.Bare = ne;
                    var ae, _e = x[l] = re[l], Ze = ne[l] = G[l] = new x;
                    return Ze.constructor = G,
                    G.mixin = function(Re) {
                        return ne[l] = G[l] = K(G, Re)[l],
                        G
                    }
                    ,
                    G.open = function(Re) {
                        if (ae = {},
                        m(Re) ? ae = Re.call(G, Ze, _e, G, re) : O(Re) && (ae = Re),
                        O(ae))
                            for (var hr in ae)
                                E.call(ae, hr) && (Ze[hr] = ae[hr]);
                        return m(Ze.init) || (Ze.init = re),
                        G
                    }
                    ,
                    G.open(pe)
                }
                return K
            }("prototype", {}.hasOwnProperty)
              , g = {
                ease: ["ease", function(l, E, T, O) {
                    var m = (l /= O) * l
                      , x = m * l;
                    return E + T * (-2.75 * x * m + 11 * m * m + -15.5 * x + 8 * m + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, E, T, O) {
                    var m = (l /= O) * l
                      , x = m * l;
                    return E + T * (-1 * x * m + 3 * m * m + -3 * x + 2 * m)
                }
                ],
                "ease-out": ["ease-out", function(l, E, T, O) {
                    var m = (l /= O) * l
                      , x = m * l;
                    return E + T * (.3 * x * m + -1.6 * m * m + 2.2 * x + -1.8 * m + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, E, T, O) {
                    var m = (l /= O) * l
                      , x = m * l;
                    return E + T * (2 * x * m + -5 * m * m + 2 * x + 2 * m)
                }
                ],
                linear: ["linear", function(l, E, T, O) {
                    return T * l / O + E
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, E, T, O) {
                    return T * (l /= O) * l + E
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, E, T, O) {
                    return -T * (l /= O) * (l - 2) + E
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, E, T, O) {
                    return (l /= O / 2) < 1 ? T / 2 * l * l + E : -T / 2 * (--l * (l - 2) - 1) + E
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, E, T, O) {
                    return T * (l /= O) * l * l + E
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, E, T, O) {
                    return T * ((l = l / O - 1) * l * l + 1) + E
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, E, T, O) {
                    return (l /= O / 2) < 1 ? T / 2 * l * l * l + E : T / 2 * ((l -= 2) * l * l + 2) + E
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, E, T, O) {
                    return T * (l /= O) * l * l * l + E
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, E, T, O) {
                    return -T * ((l = l / O - 1) * l * l * l - 1) + E
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, E, T, O) {
                    return (l /= O / 2) < 1 ? T / 2 * l * l * l * l + E : -T / 2 * ((l -= 2) * l * l * l - 2) + E
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, E, T, O) {
                    return T * (l /= O) * l * l * l * l + E
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, E, T, O) {
                    return T * ((l = l / O - 1) * l * l * l * l + 1) + E
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, E, T, O) {
                    return (l /= O / 2) < 1 ? T / 2 * l * l * l * l * l + E : T / 2 * ((l -= 2) * l * l * l * l + 2) + E
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, E, T, O) {
                    return -T * Math.cos(l / O * (Math.PI / 2)) + T + E
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, E, T, O) {
                    return T * Math.sin(l / O * (Math.PI / 2)) + E
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, E, T, O) {
                    return -T / 2 * (Math.cos(Math.PI * l / O) - 1) + E
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, E, T, O) {
                    return l === 0 ? E : T * Math.pow(2, 10 * (l / O - 1)) + E
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, E, T, O) {
                    return l === O ? E + T : T * (-Math.pow(2, -10 * l / O) + 1) + E
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, E, T, O) {
                    return l === 0 ? E : l === O ? E + T : (l /= O / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + E : T / 2 * (-Math.pow(2, -10 * --l) + 2) + E
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, E, T, O) {
                    return -T * (Math.sqrt(1 - (l /= O) * l) - 1) + E
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, E, T, O) {
                    return T * Math.sqrt(1 - (l = l / O - 1) * l) + E
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, E, T, O) {
                    return (l /= O / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + E : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + E
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, E, T, O, m) {
                    return m === void 0 && (m = 1.70158),
                    T * (l /= O) * l * ((m + 1) * l - m) + E
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, E, T, O, m) {
                    return m === void 0 && (m = 1.70158),
                    T * ((l = l / O - 1) * l * ((m + 1) * l + m) + 1) + E
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, E, T, O, m) {
                    return m === void 0 && (m = 1.70158),
                    (l /= O / 2) < 1 ? T / 2 * l * l * (((m *= 1.525) + 1) * l - m) + E : T / 2 * ((l -= 2) * l * (((m *= 1.525) + 1) * l + m) + 2) + E
                }
                ]
            }
              , h = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , y = document
              , _ = window
              , L = "bkwld-tram"
              , A = /[\-\.0-9]/g
              , S = /[A-Z]/
              , I = "number"
              , R = /^(rgb|#)/
              , C = /(em|cm|mm|in|pt|pc|px)$/
              , w = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , X = "unitless"
              , B = /(all|none) 0s ease 0s/
              , Y = /^(width|height)$/
              , te = " "
              , q = y.createElement("a")
              , b = ["Webkit", "Moz", "O", "ms"]
              , N = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , k = function(l) {
                if (l in q.style)
                    return {
                        dom: l,
                        css: l
                    };
                var E, T, O = "", m = l.split("-");
                for (E = 0; E < m.length; E++)
                    O += m[E].charAt(0).toUpperCase() + m[E].slice(1);
                for (E = 0; E < b.length; E++)
                    if (T = b[E] + O,
                    T in q.style)
                        return {
                            dom: T,
                            css: N[E] + l
                        }
            }
              , U = t.support = {
                bind: Function.prototype.bind,
                transform: k("transform"),
                transition: k("transition"),
                backface: k("backface-visibility"),
                timing: k("transition-timing-function")
            };
            if (U.transition) {
                var J = U.timing.dom;
                if (q.style[J] = g["ease-in-back"][0],
                !q.style[J])
                    for (var ee in h)
                        g[ee][0] = h[ee]
            }
            var P = t.frame = function() {
                var l = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                return l && U.bind ? l.bind(_) : function(E) {
                    _.setTimeout(E, 16)
                }
            }()
              , W = t.now = function() {
                var l = _.performance
                  , E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return E && U.bind ? E.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , j = d(function(l) {
                function E(Q, se) {
                    var ye = p(("" + Q).split(te))
                      , le = ye[0];
                    se = se || {};
                    var Ce = H[le];
                    if (!Ce)
                        return f("Unsupported property: " + le);
                    if (!se.weak || !this.props[le]) {
                        var We = Ce[0]
                          , qe = this.props[le];
                        return qe || (qe = this.props[le] = new We.Bare),
                        qe.init(this.$el, ye, Ce, se),
                        qe
                    }
                }
                function T(Q, se, ye) {
                    if (Q) {
                        var le = typeof Q;
                        if (se || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        le == "number" && se)
                            return this.timer = new de({
                                duration: Q,
                                context: this,
                                complete: x
                            }),
                            void (this.active = !0);
                        if (le == "string" && se) {
                            switch (Q) {
                            case "hide":
                                G.call(this);
                                break;
                            case "stop":
                                K.call(this);
                                break;
                            case "redraw":
                                ne.call(this);
                                break;
                            default:
                                E.call(this, Q, ye && ye[1])
                            }
                            return x.call(this)
                        }
                        if (le == "function")
                            return void Q.call(this, this);
                        if (le == "object") {
                            var Ce = 0;
                            Ze.call(this, Q, function(Te, G_) {
                                Te.span > Ce && (Ce = Te.span),
                                Te.stop(),
                                Te.animate(G_)
                            }, function(Te) {
                                "wait"in Te && (Ce = c(Te.wait, 0))
                            }),
                            _e.call(this),
                            Ce > 0 && (this.timer = new de({
                                duration: Ce,
                                context: this
                            }),
                            this.active = !0,
                            se && (this.timer.complete = x));
                            var We = this
                              , qe = !1
                              , en = {};
                            P(function() {
                                Ze.call(We, Q, function(Te) {
                                    Te.active && (qe = !0,
                                    en[Te.name] = Te.nextStyle)
                                }),
                                qe && We.$el.css(en)
                            })
                        }
                    }
                }
                function O(Q) {
                    Q = c(Q, 0),
                    this.active ? this.queue.push({
                        options: Q
                    }) : (this.timer = new de({
                        duration: Q,
                        context: this,
                        complete: x
                    }),
                    this.active = !0)
                }
                function m(Q) {
                    return this.active ? (this.queue.push({
                        options: Q,
                        args: arguments
                    }),
                    void (this.timer.complete = x)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function x() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var Q = this.queue.shift();
                        T.call(this, Q.options, !0, Q.args)
                    }
                }
                function K(Q) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var se;
                    typeof Q == "string" ? (se = {},
                    se[Q] = 1) : se = typeof Q == "object" && Q != null ? Q : this.props,
                    Ze.call(this, se, Re),
                    _e.call(this)
                }
                function re(Q) {
                    K.call(this, Q),
                    Ze.call(this, Q, hr, D_)
                }
                function pe(Q) {
                    typeof Q != "string" && (Q = "block"),
                    this.el.style.display = Q
                }
                function G() {
                    K.call(this),
                    this.el.style.display = "none"
                }
                function ne() {
                    this.el.offsetHeight
                }
                function ae() {
                    K.call(this),
                    e.removeData(this.el, L),
                    this.$el = this.el = null
                }
                function _e() {
                    var Q, se, ye = [];
                    this.upstream && ye.push(this.upstream);
                    for (Q in this.props)
                        se = this.props[Q],
                        se.active && ye.push(se.string);
                    ye = ye.join(","),
                    this.style !== ye && (this.style = ye,
                    this.el.style[U.transition.dom] = ye)
                }
                function Ze(Q, se, ye) {
                    var le, Ce, We, qe, en = se !== Re, Te = {};
                    for (le in Q)
                        We = Q[le],
                        le in ve ? (Te.transform || (Te.transform = {}),
                        Te.transform[le] = We) : (S.test(le) && (le = r(le)),
                        le in H ? Te[le] = We : (qe || (qe = {}),
                        qe[le] = We));
                    for (le in Te) {
                        if (We = Te[le],
                        Ce = this.props[le],
                        !Ce) {
                            if (!en)
                                continue;
                            Ce = E.call(this, le)
                        }
                        se.call(this, Ce, We)
                    }
                    ye && qe && ye.call(this, qe)
                }
                function Re(Q) {
                    Q.stop()
                }
                function hr(Q, se) {
                    Q.set(se)
                }
                function D_(Q) {
                    this.$el.css(Q)
                }
                function He(Q, se) {
                    l[Q] = function() {
                        return this.children ? F_.call(this, se, arguments) : (this.el && se.apply(this, arguments),
                        this)
                    }
                }
                function F_(Q, se) {
                    var ye, le = this.children.length;
                    for (ye = 0; le > ye; ye++)
                        Q.apply(this.children[ye], se);
                    return this
                }
                l.init = function(Q) {
                    if (this.$el = e(Q),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    ce.keepInherited && !ce.fallback) {
                        var se = F(this.el, "transition");
                        se && !B.test(se) && (this.upstream = se)
                    }
                    U.backface && ce.hideBackface && v(this.el, U.backface.css, "hidden")
                }
                ,
                He("add", E),
                He("start", T),
                He("wait", O),
                He("then", m),
                He("next", x),
                He("stop", K),
                He("set", re),
                He("show", pe),
                He("hide", G),
                He("redraw", ne),
                He("destroy", ae)
            })
              , D = d(j, function(l) {
                function E(T, O) {
                    var m = e.data(T, L) || e.data(T, L, new j.Bare);
                    return m.el || m.init(T),
                    O ? m.start(O) : m
                }
                l.init = function(T, O) {
                    var m = e(T);
                    if (!m.length)
                        return this;
                    if (m.length === 1)
                        return E(m[0], O);
                    var x = [];
                    return m.each(function(K, re) {
                        x.push(E(re, O))
                    }),
                    this.children = x,
                    this
                }
            })
              , M = d(function(l) {
                function E() {
                    var x = this.get();
                    this.update("auto");
                    var K = this.get();
                    return this.update(x),
                    K
                }
                function T(x, K, re) {
                    return K !== void 0 && (re = K),
                    x in g ? x : re
                }
                function O(x) {
                    var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
                    return (K ? i(K[1], K[2], K[3]) : x).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var m = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(x, K, re, pe) {
                    this.$el = x,
                    this.el = x[0];
                    var G = K[0];
                    re[2] && (G = re[2]),
                    z[G] && (G = z[G]),
                    this.name = G,
                    this.type = re[1],
                    this.duration = c(K[1], this.duration, m.duration),
                    this.ease = T(K[2], this.ease, m.ease),
                    this.delay = c(K[3], this.delay, m.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Y.test(this.name),
                    this.unit = pe.unit || this.unit || ce.defaultUnit,
                    this.angle = pe.angle || this.angle || ce.defaultAngle,
                    ce.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + te + this.duration + "ms" + (this.ease != "ease" ? te + g[this.ease][0] : "") + (this.delay ? te + this.delay + "ms" : ""))
                }
                ,
                l.set = function(x) {
                    x = this.convert(x, this.type),
                    this.update(x),
                    this.redraw()
                }
                ,
                l.transition = function(x) {
                    this.active = !0,
                    x = this.convert(x, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    x == "auto" && (x = E.call(this))),
                    this.nextStyle = x
                }
                ,
                l.fallback = function(x) {
                    var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                    x = this.convert(x, this.type),
                    this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)),
                    x == "auto" && (x = E.call(this))),
                    this.tween = new Z({
                        from: K,
                        to: x,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return F(this.el, this.name)
                }
                ,
                l.update = function(x) {
                    v(this.el, this.name, x)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    v(this.el, this.name, this.get()));
                    var x = this.tween;
                    x && x.context && x.destroy()
                }
                ,
                l.convert = function(x, K) {
                    if (x == "auto" && this.auto)
                        return x;
                    var re, pe = typeof x == "number", G = typeof x == "string";
                    switch (K) {
                    case I:
                        if (pe)
                            return x;
                        if (G && x.replace(A, "") === "")
                            return +x;
                        re = "number(unitless)";
                        break;
                    case R:
                        if (G) {
                            if (x === "" && this.original)
                                return this.original;
                            if (K.test(x))
                                return x.charAt(0) == "#" && x.length == 7 ? x : O(x)
                        }
                        re = "hex or rgb string";
                        break;
                    case C:
                        if (pe)
                            return x + this.unit;
                        if (G && K.test(x))
                            return x;
                        re = "number(px) or string(unit)";
                        break;
                    case w:
                        if (pe)
                            return x + this.unit;
                        if (G && K.test(x))
                            return x;
                        re = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (pe)
                            return x + this.angle;
                        if (G && K.test(x))
                            return x;
                        re = "number(deg) or string(angle)";
                        break;
                    case X:
                        if (pe || G && w.test(x))
                            return x;
                        re = "number(unitless) or string(unit or %)"
                    }
                    return a(re, x),
                    x
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , $ = d(M, function(l, E) {
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), R))
                }
            })
              , ie = d(M, function(l, E) {
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(T) {
                    this.$el[this.name](T)
                }
            })
              , oe = d(M, function(l, E) {
                function T(O, m) {
                    var x, K, re, pe, G;
                    for (x in O)
                        pe = ve[x],
                        re = pe[0],
                        K = pe[1] || x,
                        G = this.convert(O[x], re),
                        m.call(this, K, G, re)
                }
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ve.perspective && ce.perspective && (this.current.perspective = ce.perspective,
                    v(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(O) {
                    T.call(this, O, function(m, x) {
                        this.current[m] = x
                    }),
                    v(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(O) {
                    var m = this.values(O);
                    this.tween = new ut({
                        current: this.current,
                        values: m,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var x, K = {};
                    for (x in this.current)
                        K[x] = x in m ? m[x] : this.current[x];
                    this.active = !0,
                    this.nextStyle = this.style(K)
                }
                ,
                l.fallback = function(O) {
                    var m = this.values(O);
                    this.tween = new ut({
                        current: this.current,
                        values: m,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    v(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(O) {
                    var m, x = "";
                    for (m in O)
                        x += m + "(" + O[m] + ") ";
                    return x
                }
                ,
                l.values = function(O) {
                    var m, x = {};
                    return T.call(this, O, function(K, re, pe) {
                        x[K] = re,
                        this.current[K] === void 0 && (m = 0,
                        ~K.indexOf("scale") && (m = 1),
                        this.current[K] = this.convert(m, pe))
                    }),
                    x
                }
            })
              , Z = d(function(l) {
                function E(G) {
                    re.push(G) === 1 && P(T)
                }
                function T() {
                    var G, ne, ae, _e = re.length;
                    if (_e)
                        for (P(T),
                        ne = W(),
                        G = _e; G--; )
                            ae = re[G],
                            ae && ae.render(ne)
                }
                function O(G) {
                    var ne, ae = e.inArray(G, re);
                    ae >= 0 && (ne = re.slice(ae + 1),
                    re.length = ae,
                    ne.length && (re = re.concat(ne)))
                }
                function m(G) {
                    return Math.round(G * pe) / pe
                }
                function x(G, ne, ae) {
                    return i(G[0] + ae * (ne[0] - G[0]), G[1] + ae * (ne[1] - G[1]), G[2] + ae * (ne[2] - G[2]))
                }
                var K = {
                    ease: g.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(G) {
                    this.duration = G.duration || 0,
                    this.delay = G.delay || 0;
                    var ne = G.ease || K.ease;
                    g[ne] && (ne = g[ne][1]),
                    typeof ne != "function" && (ne = K.ease),
                    this.ease = ne,
                    this.update = G.update || o,
                    this.complete = G.complete || o,
                    this.context = G.context || this,
                    this.name = G.name;
                    var ae = G.from
                      , _e = G.to;
                    ae === void 0 && (ae = K.from),
                    _e === void 0 && (_e = K.to),
                    this.unit = G.unit || "",
                    typeof ae == "number" && typeof _e == "number" ? (this.begin = ae,
                    this.change = _e - ae) : this.format(_e, ae),
                    this.value = this.begin + this.unit,
                    this.start = W(),
                    G.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = W()),
                    this.active = !0,
                    E(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    O(this))
                }
                ,
                l.render = function(G) {
                    var ne, ae = G - this.start;
                    if (this.delay) {
                        if (ae <= this.delay)
                            return;
                        ae -= this.delay
                    }
                    if (ae < this.duration) {
                        var _e = this.ease(ae, 0, 1, this.duration);
                        return ne = this.startRGB ? x(this.startRGB, this.endRGB, _e) : m(this.begin + _e * this.change),
                        this.value = ne + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ne = this.endHex || this.begin + this.change,
                    this.value = ne + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(G, ne) {
                    if (ne += "",
                    G += "",
                    G.charAt(0) == "#")
                        return this.startRGB = n(ne),
                        this.endRGB = n(G),
                        this.endHex = G,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ae = ne.replace(A, "")
                          , _e = G.replace(A, "");
                        ae !== _e && s("tween", ne, G),
                        this.unit = ae
                    }
                    ne = parseFloat(ne),
                    G = parseFloat(G),
                    this.begin = this.value = ne,
                    this.change = G - ne
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var re = []
                  , pe = 1e3
            })
              , de = d(Z, function(l) {
                l.init = function(E) {
                    this.duration = E.duration || 0,
                    this.complete = E.complete || o,
                    this.context = E.context,
                    this.play()
                }
                ,
                l.render = function(E) {
                    var T = E - this.start;
                    T < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , ut = d(Z, function(l, E) {
                l.init = function(T) {
                    this.context = T.context,
                    this.update = T.update,
                    this.tweens = [],
                    this.current = T.current;
                    var O, m;
                    for (O in T.values)
                        m = T.values[O],
                        this.current[O] !== m && this.tweens.push(new Z({
                            name: O,
                            from: this.current[O],
                            to: m,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(T) {
                    var O, m, x = this.tweens.length, K = !1;
                    for (O = x; O--; )
                        m = this.tweens[O],
                        m.context && (m.render(T),
                        this.current[m.name] = m.value,
                        K = !0);
                    return K ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (E.destroy.call(this),
                    this.tweens) {
                        var T, O = this.tweens.length;
                        for (T = O; T--; )
                            this.tweens[T].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , ce = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !U.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!U.transition)
                    return ce.fallback = !0;
                ce.agentTests.push("(" + l + ")");
                var E = new RegExp(ce.agentTests.join("|"),"i");
                ce.fallback = E.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new Z(l)
            }
            ,
            t.delay = function(l, E, T) {
                return new de({
                    complete: E,
                    duration: l,
                    context: T
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var v = e.style
              , F = e.css
              , z = {
                transform: U.transform && U.transform.css
            }
              , H = {
                color: [$, R],
                background: [$, R, "background-color"],
                "outline-color": [$, R],
                "border-color": [$, R],
                "border-top-color": [$, R],
                "border-right-color": [$, R],
                "border-bottom-color": [$, R],
                "border-left-color": [$, R],
                "border-width": [M, C],
                "border-top-width": [M, C],
                "border-right-width": [M, C],
                "border-bottom-width": [M, C],
                "border-left-width": [M, C],
                "border-spacing": [M, C],
                "letter-spacing": [M, C],
                margin: [M, C],
                "margin-top": [M, C],
                "margin-right": [M, C],
                "margin-bottom": [M, C],
                "margin-left": [M, C],
                padding: [M, C],
                "padding-top": [M, C],
                "padding-right": [M, C],
                "padding-bottom": [M, C],
                "padding-left": [M, C],
                "outline-width": [M, C],
                opacity: [M, I],
                top: [M, w],
                right: [M, w],
                bottom: [M, w],
                left: [M, w],
                "font-size": [M, w],
                "text-indent": [M, w],
                "word-spacing": [M, w],
                width: [M, w],
                "min-width": [M, w],
                "max-width": [M, w],
                height: [M, w],
                "min-height": [M, w],
                "max-height": [M, w],
                "line-height": [M, X],
                "scroll-top": [ie, I, "scrollTop"],
                "scroll-left": [ie, I, "scrollLeft"]
            }
              , ve = {};
            U.transform && (H.transform = [oe],
            ve = {
                x: [w, "translateX"],
                y: [w, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [I],
                scaleX: [I],
                scaleY: [I],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            U.transform && U.backface && (ve.z = [w, "translateZ"],
            ve.rotateZ = [V],
            ve.scaleZ = [I],
            ve.perspective = [C]);
            var xt = /ms/
              , ct = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var ws = u((wH,Ss)=>{
        "use strict";
        var k_ = window.$
          , B_ = xi() && k_.tram;
        Ss.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , c = n.toString
              , f = n.hasOwnProperty
              , p = r.forEach
              , d = r.map
              , g = r.reduce
              , h = r.reduceRight
              , y = r.filter
              , _ = r.every
              , L = r.some
              , A = r.indexOf
              , S = r.lastIndexOf
              , I = Array.isArray
              , R = Object.keys
              , C = i.bind
              , w = e.each = e.forEach = function(b, N, k) {
                if (b == null)
                    return b;
                if (p && b.forEach === p)
                    b.forEach(N, k);
                else if (b.length === +b.length) {
                    for (var U = 0, J = b.length; U < J; U++)
                        if (N.call(k, b[U], U, b) === t)
                            return
                } else
                    for (var ee = e.keys(b), U = 0, J = ee.length; U < J; U++)
                        if (N.call(k, b[ee[U]], ee[U], b) === t)
                            return;
                return b
            }
            ;
            e.map = e.collect = function(b, N, k) {
                var U = [];
                return b == null ? U : d && b.map === d ? b.map(N, k) : (w(b, function(J, ee, P) {
                    U.push(N.call(k, J, ee, P))
                }),
                U)
            }
            ,
            e.find = e.detect = function(b, N, k) {
                var U;
                return V(b, function(J, ee, P) {
                    if (N.call(k, J, ee, P))
                        return U = J,
                        !0
                }),
                U
            }
            ,
            e.filter = e.select = function(b, N, k) {
                var U = [];
                return b == null ? U : y && b.filter === y ? b.filter(N, k) : (w(b, function(J, ee, P) {
                    N.call(k, J, ee, P) && U.push(J)
                }),
                U)
            }
            ;
            var V = e.some = e.any = function(b, N, k) {
                N || (N = e.identity);
                var U = !1;
                return b == null ? U : L && b.some === L ? b.some(N, k) : (w(b, function(J, ee, P) {
                    if (U || (U = N.call(k, J, ee, P)))
                        return t
                }),
                !!U)
            }
            ;
            e.contains = e.include = function(b, N) {
                return b == null ? !1 : A && b.indexOf === A ? b.indexOf(N) != -1 : V(b, function(k) {
                    return k === N
                })
            }
            ,
            e.delay = function(b, N) {
                var k = a.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, k)
                }, N)
            }
            ,
            e.defer = function(b) {
                return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(b) {
                var N, k, U;
                return function() {
                    N || (N = !0,
                    k = arguments,
                    U = this,
                    B_.frame(function() {
                        N = !1,
                        b.apply(U, k)
                    }))
                }
            }
            ,
            e.debounce = function(b, N, k) {
                var U, J, ee, P, W, j = function() {
                    var D = e.now() - P;
                    D < N ? U = setTimeout(j, N - D) : (U = null,
                    k || (W = b.apply(ee, J),
                    ee = J = null))
                };
                return function() {
                    ee = this,
                    J = arguments,
                    P = e.now();
                    var D = k && !U;
                    return U || (U = setTimeout(j, N)),
                    D && (W = b.apply(ee, J),
                    ee = J = null),
                    W
                }
            }
            ,
            e.defaults = function(b) {
                if (!e.isObject(b))
                    return b;
                for (var N = 1, k = arguments.length; N < k; N++) {
                    var U = arguments[N];
                    for (var J in U)
                        b[J] === void 0 && (b[J] = U[J])
                }
                return b
            }
            ,
            e.keys = function(b) {
                if (!e.isObject(b))
                    return [];
                if (R)
                    return R(b);
                var N = [];
                for (var k in b)
                    e.has(b, k) && N.push(k);
                return N
            }
            ,
            e.has = function(b, N) {
                return f.call(b, N)
            }
            ,
            e.isObject = function(b) {
                return b === Object(b)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var X = /(.)^/
              , B = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Y = /\\|'|\r|\n|\u2028|\u2029/g
              , te = function(b) {
                return "\\" + B[b]
            }
              , q = /^\s*(\w|\$)+\s*$/;
            return e.template = function(b, N, k) {
                !N && k && (N = k),
                N = e.defaults({}, N, e.templateSettings);
                var U = RegExp([(N.escape || X).source, (N.interpolate || X).source, (N.evaluate || X).source].join("|") + "|$", "g")
                  , J = 0
                  , ee = "__p+='";
                b.replace(U, function(D, M, $, ie, oe) {
                    return ee += b.slice(J, oe).replace(Y, te),
                    J = oe + D.length,
                    M ? ee += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : $ ? ee += `'+
((__t=(` + $ + `))==null?'':__t)+
'` : ie && (ee += `';
` + ie + `
__p+='`),
                    D
                }),
                ee += `';
`;
                var P = N.variable;
                if (P) {
                    if (!q.test(P))
                        throw new Error("variable is not a bare identifier: " + P)
                } else
                    ee = `with(obj||{}){
` + ee + `}
`,
                    P = "obj";
                ee = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ee + `return __p;
`;
                var W;
                try {
                    W = new Function(N.variable || "obj","_",ee)
                } catch (D) {
                    throw D.source = ee,
                    D
                }
                var j = function(D) {
                    return W.call(this, D, e)
                };
                return j.source = "function(" + P + `){
` + ee + "}",
                j
            }
            ,
            e
        }()
    }
    );
    var Be = u((RH,Ds)=>{
        "use strict";
        var fe = {}
          , Gt = {}
          , Ut = []
          , wi = window.Webflow || []
          , Et = window.jQuery
          , ke = Et(window)
          , j_ = Et(document)
          , et = Et.isFunction
          , Xe = fe._ = ws()
          , Cs = fe.tram = xi() && Et.tram
          , nn = !1
          , Ri = !1;
        Cs.config.hideBackface = !1;
        Cs.config.keepInherited = !0;
        fe.define = function(e, t, r) {
            Gt[e] && Ns(Gt[e]);
            var n = Gt[e] = t(Et, Xe, r) || {};
            return Ls(n),
            n
        }
        ;
        fe.require = function(e) {
            return Gt[e]
        }
        ;
        function Ls(e) {
            fe.env() && (et(e.design) && ke.on("__wf_design", e.design),
            et(e.preview) && ke.on("__wf_preview", e.preview)),
            et(e.destroy) && ke.on("__wf_destroy", e.destroy),
            e.ready && et(e.ready) && z_(e)
        }
        function z_(e) {
            if (nn) {
                e.ready();
                return
            }
            Xe.contains(Ut, e.ready) || Ut.push(e.ready)
        }
        function Ns(e) {
            et(e.design) && ke.off("__wf_design", e.design),
            et(e.preview) && ke.off("__wf_preview", e.preview),
            et(e.destroy) && ke.off("__wf_destroy", e.destroy),
            e.ready && et(e.ready) && K_(e)
        }
        function K_(e) {
            Ut = Xe.filter(Ut, function(t) {
                return t !== e.ready
            })
        }
        fe.push = function(e) {
            if (nn) {
                et(e) && e();
                return
            }
            wi.push(e)
        }
        ;
        fe.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var rn = navigator.userAgent.toLowerCase()
          , Ps = fe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Y_ = fe.env.chrome = /chrome/.test(rn) && /Google/.test(navigator.vendor) && parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)
          , $_ = fe.env.ios = /(ipod|iphone|ipad)/.test(rn);
        fe.env.safari = /safari/.test(rn) && !Y_ && !$_;
        var Si;
        Ps && j_.on("touchstart mousedown", function(e) {
            Si = e.target
        });
        fe.validClick = Ps ? function(e) {
            return e === Si || Et.contains(e, Si)
        }
        : function() {
            return !0
        }
        ;
        var qs = "resize.webflow orientationchange.webflow load.webflow"
          , Q_ = "scroll.webflow " + qs;
        fe.resize = Ci(ke, qs);
        fe.scroll = Ci(ke, Q_);
        fe.redraw = Ci();
        function Ci(e, t) {
            var r = []
              , n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        fe.location = function(e) {
            window.location = e
        }
        ;
        fe.env() && (fe.location = function() {}
        );
        fe.ready = function() {
            nn = !0,
            Ri ? Z_() : Xe.each(Ut, Rs),
            Xe.each(wi, Rs),
            fe.resize.up()
        }
        ;
        function Rs(e) {
            et(e) && e()
        }
        function Z_() {
            Ri = !1,
            Xe.each(Gt, Ls)
        }
        var St;
        fe.load = function(e) {
            St.then(e)
        }
        ;
        function Ms() {
            St && (St.reject(),
            ke.off("load", St.resolve)),
            St = new Et.Deferred,
            ke.on("load", St.resolve)
        }
        fe.destroy = function(e) {
            e = e || {},
            Ri = !0,
            ke.triggerHandler("__wf_destroy"),
            e.domready != null && (nn = e.domready),
            Xe.each(Gt, Ns),
            fe.resize.off(),
            fe.scroll.off(),
            fe.redraw.off(),
            Ut = [],
            wi = [],
            St.state() === "pending" && Ms()
        }
        ;
        Et(fe.ready);
        Ms();
        Ds.exports = window.Webflow = fe
    }
    );
    var Us = u((CH,Gs)=>{
        "use strict";
        var Fs = Be();
        Fs.define("brand", Gs.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var h = n.attr("data-wf-status")
                  , y = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(y) && a.hostname !== y && (h = !0),
                h && !s && (f = f || d(),
                g(),
                setTimeout(g, 500),
                e(r).off(c, p).on(c, p))
            }
            ;
            function p() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", h ? "display: none !important;" : "")
            }
            function d() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(y, _),
                h[0]
            }
            function g() {
                var h = i.children(o)
                  , y = h.length && h.get(0) === f
                  , _ = Fs.env("editor");
                if (y) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(),
                _ || i.append(f)
            }
            return t
        }
        )
    }
    );
    var Hs = u((LH,Vs)=>{
        "use strict";
        var Li = Be();
        Li.define("edit", Vs.exports = function(e, t, r) {
            if (r = r || {},
            (Li.env("test") || Li.env("frame")) && !r.fixture && !J_())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", c, f = r.load || g, p = !1;
            try {
                p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            p ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, d).triggerHandler(s);
            function d() {
                c || /\?edit/.test(a.hash) && f()
            }
            function g() {
                c = !0,
                window.WebflowEditor = !0,
                i.off(s, d),
                S(function(R) {
                    e.ajax({
                        url: A("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(R)
                    })
                })
            }
            function h(R) {
                return function(C) {
                    if (!C) {
                        console.error("Could not load editor data");
                        return
                    }
                    C.thirdPartyCookiesSupported = R,
                    y(L(C.bugReporterScriptPath), function() {
                        y(L(C.scriptPath), function() {
                            window.WebflowEditor(C)
                        })
                    })
                }
            }
            function y(R, C) {
                e.ajax({
                    type: "GET",
                    url: R,
                    dataType: "script",
                    cache: !0
                }).then(C, _)
            }
            function _(R, C, w) {
                throw console.error("Could not load editor script: " + C),
                w
            }
            function L(R) {
                return R.indexOf("//") >= 0 ? R : A("https://editor-api.webflow.com" + R)
            }
            function A(R) {
                return R.replace(/([^:])\/\//g, "$1/")
            }
            function S(R) {
                var C = window.document.createElement("iframe");
                C.src = "https://webflow.com/site/third-party-cookie-check.html",
                C.style.display = "none",
                C.sandbox = "allow-scripts allow-same-origin";
                var w = function(V) {
                    V.data === "WF_third_party_cookies_unsupported" ? (I(C, w),
                    R(!1)) : V.data === "WF_third_party_cookies_supported" && (I(C, w),
                    R(!0))
                };
                C.onerror = function() {
                    I(C, w),
                    R(!1)
                }
                ,
                window.addEventListener("message", w, !1),
                window.document.body.appendChild(C)
            }
            function I(R, C) {
                window.removeEventListener("message", C, !1),
                R.remove()
            }
            return n
        }
        );
        function J_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Xs = u((NH,Ws)=>{
        "use strict";
        var eT = Be();
        eT.define("focus-visible", Ws.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(I) {
                    return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList"in I && "contains"in I.classList)
                }
                function c(I) {
                    var R = I.type
                      , C = I.tagName;
                    return !!(C === "INPUT" && a[R] && !I.readOnly || C === "TEXTAREA" && !I.readOnly || I.isContentEditable)
                }
                function f(I) {
                    I.getAttribute("data-wf-focus-visible") || I.setAttribute("data-wf-focus-visible", "true")
                }
                function p(I) {
                    I.getAttribute("data-wf-focus-visible") && I.removeAttribute("data-wf-focus-visible")
                }
                function d(I) {
                    I.metaKey || I.altKey || I.ctrlKey || (s(r.activeElement) && f(r.activeElement),
                    n = !0)
                }
                function g() {
                    n = !1
                }
                function h(I) {
                    s(I.target) && (n || c(I.target)) && f(I.target)
                }
                function y(I) {
                    s(I.target) && I.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    p(I.target))
                }
                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    L())
                }
                function L() {
                    document.addEventListener("mousemove", S),
                    document.addEventListener("mousedown", S),
                    document.addEventListener("mouseup", S),
                    document.addEventListener("pointermove", S),
                    document.addEventListener("pointerdown", S),
                    document.addEventListener("pointerup", S),
                    document.addEventListener("touchmove", S),
                    document.addEventListener("touchstart", S),
                    document.addEventListener("touchend", S)
                }
                function A() {
                    document.removeEventListener("mousemove", S),
                    document.removeEventListener("mousedown", S),
                    document.removeEventListener("mouseup", S),
                    document.removeEventListener("pointermove", S),
                    document.removeEventListener("pointerdown", S),
                    document.removeEventListener("pointerup", S),
                    document.removeEventListener("touchmove", S),
                    document.removeEventListener("touchstart", S),
                    document.removeEventListener("touchend", S)
                }
                function S(I) {
                    I.target.nodeName && I.target.nodeName.toLowerCase() === "html" || (n = !1,
                    A())
                }
                document.addEventListener("keydown", d, !0),
                document.addEventListener("mousedown", g, !0),
                document.addEventListener("pointerdown", g, !0),
                document.addEventListener("touchstart", g, !0),
                document.addEventListener("visibilitychange", _, !0),
                L(),
                r.addEventListener("focus", h, !0),
                r.addEventListener("blur", y, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var js = u((PH,Bs)=>{
        "use strict";
        var ks = Be();
        ks.define("focus", Bs.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout(()=>{
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ks.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Ys = u((qH,Ks)=>{
        "use strict";
        var Ni = window.jQuery
          , tt = {}
          , on = []
          , zs = ".w-ix"
          , an = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Ni(t).triggerHandler(tt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Ni(t).triggerHandler(tt.types.OUTRO))
            }
        };
        tt.triggers = {};
        tt.types = {
            INTRO: "w-ix-intro" + zs,
            OUTRO: "w-ix-outro" + zs
        };
        tt.init = function() {
            for (var e = on.length, t = 0; t < e; t++) {
                var r = on[t];
                r[0](0, r[1])
            }
            on = [],
            Ni.extend(tt.triggers, an)
        }
        ;
        tt.async = function() {
            for (var e in an) {
                var t = an[e];
                an.hasOwnProperty(e) && (tt.triggers[e] = function(r, n) {
                    on.push([t, n])
                }
                )
            }
        }
        ;
        tt.async();
        Ks.exports = tt
    }
    );
    var qi = u((MH,Zs)=>{
        "use strict";
        var Pi = Ys();
        function $s(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var tT = window.jQuery
          , sn = {}
          , Qs = ".w-ix"
          , rT = {
            reset: function(e, t) {
                Pi.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Pi.triggers.intro(e, t),
                $s(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Pi.triggers.outro(e, t),
                $s(t, "COMPONENT_INACTIVE")
            }
        };
        sn.triggers = {};
        sn.types = {
            INTRO: "w-ix-intro" + Qs,
            OUTRO: "w-ix-outro" + Qs
        };
        tT.extend(sn.triggers, rT);
        Zs.exports = sn
    }
    );
    var Js = u((DH,lt)=>{
        function Mi(e) {
            return lt.exports = Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            lt.exports.__esModule = !0,
            lt.exports.default = lt.exports,
            Mi(e)
        }
        lt.exports = Mi,
        lt.exports.__esModule = !0,
        lt.exports.default = lt.exports
    }
    );
    var un = u((FH,Er)=>{
        var nT = Js().default;
        function eu(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (eu = function(i) {
                return i ? r : t
            }
            )(e)
        }
        function iT(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || nT(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = eu(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        Er.exports = iT,
        Er.exports.__esModule = !0,
        Er.exports.default = Er.exports
    }
    );
    var tu = u((GH,yr)=>{
        function oT(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        yr.exports = oT,
        yr.exports.__esModule = !0,
        yr.exports.default = yr.exports
    }
    );
    var Ee = u((UH,ru)=>{
        var cn = function(e) {
            return e && e.Math == Math && e
        };
        ru.exports = cn(typeof globalThis == "object" && globalThis) || cn(typeof window == "object" && window) || cn(typeof self == "object" && self) || cn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Vt = u((VH,nu)=>{
        nu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var wt = u((HH,iu)=>{
        var aT = Vt();
        iu.exports = !aT(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var ln = u((WH,ou)=>{
        var mr = Function.prototype.call;
        ou.exports = mr.bind ? mr.bind(mr) : function() {
            return mr.apply(mr, arguments)
        }
    }
    );
    var cu = u(uu=>{
        "use strict";
        var au = {}.propertyIsEnumerable
          , su = Object.getOwnPropertyDescriptor
          , sT = su && !au.call({
            1: 2
        }, 1);
        uu.f = sT ? function(t) {
            var r = su(this, t);
            return !!r && r.enumerable
        }
        : au
    }
    );
    var Di = u((kH,lu)=>{
        lu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var je = u((BH,du)=>{
        var fu = Function.prototype
          , Fi = fu.bind
          , Gi = fu.call
          , uT = Fi && Fi.bind(Gi);
        du.exports = Fi ? function(e) {
            return e && uT(Gi, e)
        }
        : function(e) {
            return e && function() {
                return Gi.apply(e, arguments)
            }
        }
    }
    );
    var gu = u((jH,vu)=>{
        var pu = je()
          , cT = pu({}.toString)
          , lT = pu("".slice);
        vu.exports = function(e) {
            return lT(cT(e), 8, -1)
        }
    }
    );
    var Eu = u((zH,hu)=>{
        var fT = Ee()
          , dT = je()
          , pT = Vt()
          , vT = gu()
          , Ui = fT.Object
          , gT = dT("".split);
        hu.exports = pT(function() {
            return !Ui("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return vT(e) == "String" ? gT(e, "") : Ui(e)
        }
        : Ui
    }
    );
    var Vi = u((KH,yu)=>{
        var hT = Ee()
          , ET = hT.TypeError;
        yu.exports = function(e) {
            if (e == null)
                throw ET("Can't call method on " + e);
            return e
        }
    }
    );
    var _r = u((YH,mu)=>{
        var yT = Eu()
          , mT = Vi();
        mu.exports = function(e) {
            return yT(mT(e))
        }
    }
    );
    var rt = u(($H,_u)=>{
        _u.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Ht = u((QH,Tu)=>{
        var _T = rt();
        Tu.exports = function(e) {
            return typeof e == "object" ? e !== null : _T(e)
        }
    }
    );
    var Tr = u((ZH,bu)=>{
        var Hi = Ee()
          , TT = rt()
          , bT = function(e) {
            return TT(e) ? e : void 0
        };
        bu.exports = function(e, t) {
            return arguments.length < 2 ? bT(Hi[e]) : Hi[e] && Hi[e][t]
        }
    }
    );
    var Ou = u((JH,Iu)=>{
        var IT = je();
        Iu.exports = IT({}.isPrototypeOf)
    }
    );
    var xu = u((eW,Au)=>{
        var OT = Tr();
        Au.exports = OT("navigator", "userAgent") || ""
    }
    );
    var Pu = u((tW,Nu)=>{
        var Lu = Ee(), Wi = xu(), Su = Lu.process, wu = Lu.Deno, Ru = Su && Su.versions || wu && wu.version, Cu = Ru && Ru.v8, ze, fn;
        Cu && (ze = Cu.split("."),
        fn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1]));
        !fn && Wi && (ze = Wi.match(/Edge\/(\d+)/),
        (!ze || ze[1] >= 74) && (ze = Wi.match(/Chrome\/(\d+)/),
        ze && (fn = +ze[1])));
        Nu.exports = fn
    }
    );
    var Xi = u((rW,Mu)=>{
        var qu = Pu()
          , AT = Vt();
        Mu.exports = !!Object.getOwnPropertySymbols && !AT(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && qu && qu < 41
        })
    }
    );
    var ki = u((nW,Du)=>{
        var xT = Xi();
        Du.exports = xT && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var Bi = u((iW,Fu)=>{
        var ST = Ee()
          , wT = Tr()
          , RT = rt()
          , CT = Ou()
          , LT = ki()
          , NT = ST.Object;
        Fu.exports = LT ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = wT("Symbol");
            return RT(t) && CT(t.prototype, NT(e))
        }
    }
    );
    var Uu = u((oW,Gu)=>{
        var PT = Ee()
          , qT = PT.String;
        Gu.exports = function(e) {
            try {
                return qT(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var Hu = u((aW,Vu)=>{
        var MT = Ee()
          , DT = rt()
          , FT = Uu()
          , GT = MT.TypeError;
        Vu.exports = function(e) {
            if (DT(e))
                return e;
            throw GT(FT(e) + " is not a function")
        }
    }
    );
    var Xu = u((sW,Wu)=>{
        var UT = Hu();
        Wu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : UT(r)
        }
    }
    );
    var Bu = u((uW,ku)=>{
        var VT = Ee()
          , ji = ln()
          , zi = rt()
          , Ki = Ht()
          , HT = VT.TypeError;
        ku.exports = function(e, t) {
            var r, n;
            if (t === "string" && zi(r = e.toString) && !Ki(n = ji(r, e)) || zi(r = e.valueOf) && !Ki(n = ji(r, e)) || t !== "string" && zi(r = e.toString) && !Ki(n = ji(r, e)))
                return n;
            throw HT("Can't convert object to primitive value")
        }
    }
    );
    var zu = u((cW,ju)=>{
        ju.exports = !1
    }
    );
    var dn = u((lW,Yu)=>{
        var Ku = Ee()
          , WT = Object.defineProperty;
        Yu.exports = function(e, t) {
            try {
                WT(Ku, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Ku[e] = t
            }
            return t
        }
    }
    );
    var pn = u((fW,Qu)=>{
        var XT = Ee()
          , kT = dn()
          , $u = "__core-js_shared__"
          , BT = XT[$u] || kT($u, {});
        Qu.exports = BT
    }
    );
    var Yi = u((dW,Ju)=>{
        var jT = zu()
          , Zu = pn();
        (Ju.exports = function(e, t) {
            return Zu[e] || (Zu[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: jT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var tc = u((pW,ec)=>{
        var zT = Ee()
          , KT = Vi()
          , YT = zT.Object;
        ec.exports = function(e) {
            return YT(KT(e))
        }
    }
    );
    var yt = u((vW,rc)=>{
        var $T = je()
          , QT = tc()
          , ZT = $T({}.hasOwnProperty);
        rc.exports = Object.hasOwn || function(t, r) {
            return ZT(QT(t), r)
        }
    }
    );
    var $i = u((gW,nc)=>{
        var JT = je()
          , eb = 0
          , tb = Math.random()
          , rb = JT(1.toString);
        nc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + rb(++eb + tb, 36)
        }
    }
    );
    var Qi = u((hW,uc)=>{
        var nb = Ee()
          , ib = Yi()
          , ic = yt()
          , ob = $i()
          , oc = Xi()
          , sc = ki()
          , Wt = ib("wks")
          , Rt = nb.Symbol
          , ac = Rt && Rt.for
          , ab = sc ? Rt : Rt && Rt.withoutSetter || ob;
        uc.exports = function(e) {
            if (!ic(Wt, e) || !(oc || typeof Wt[e] == "string")) {
                var t = "Symbol." + e;
                oc && ic(Rt, e) ? Wt[e] = Rt[e] : sc && ac ? Wt[e] = ac(t) : Wt[e] = ab(t)
            }
            return Wt[e]
        }
    }
    );
    var dc = u((EW,fc)=>{
        var sb = Ee()
          , ub = ln()
          , cc = Ht()
          , lc = Bi()
          , cb = Xu()
          , lb = Bu()
          , fb = Qi()
          , db = sb.TypeError
          , pb = fb("toPrimitive");
        fc.exports = function(e, t) {
            if (!cc(e) || lc(e))
                return e;
            var r = cb(e, pb), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = ub(r, e, t),
                !cc(n) || lc(n))
                    return n;
                throw db("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            lb(e, t)
        }
    }
    );
    var Zi = u((yW,pc)=>{
        var vb = dc()
          , gb = Bi();
        pc.exports = function(e) {
            var t = vb(e, "string");
            return gb(t) ? t : t + ""
        }
    }
    );
    var eo = u((mW,gc)=>{
        var hb = Ee()
          , vc = Ht()
          , Ji = hb.document
          , Eb = vc(Ji) && vc(Ji.createElement);
        gc.exports = function(e) {
            return Eb ? Ji.createElement(e) : {}
        }
    }
    );
    var to = u((_W,hc)=>{
        var yb = wt()
          , mb = Vt()
          , _b = eo();
        hc.exports = !yb && !mb(function() {
            return Object.defineProperty(_b("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var ro = u(yc=>{
        var Tb = wt()
          , bb = ln()
          , Ib = cu()
          , Ob = Di()
          , Ab = _r()
          , xb = Zi()
          , Sb = yt()
          , wb = to()
          , Ec = Object.getOwnPropertyDescriptor;
        yc.f = Tb ? Ec : function(t, r) {
            if (t = Ab(t),
            r = xb(r),
            wb)
                try {
                    return Ec(t, r)
                } catch {}
            if (Sb(t, r))
                return Ob(!bb(Ib.f, t, r), t[r])
        }
    }
    );
    var br = u((bW,_c)=>{
        var mc = Ee()
          , Rb = Ht()
          , Cb = mc.String
          , Lb = mc.TypeError;
        _c.exports = function(e) {
            if (Rb(e))
                return e;
            throw Lb(Cb(e) + " is not an object")
        }
    }
    );
    var Ir = u(Ic=>{
        var Nb = Ee()
          , Pb = wt()
          , qb = to()
          , Tc = br()
          , Mb = Zi()
          , Db = Nb.TypeError
          , bc = Object.defineProperty;
        Ic.f = Pb ? bc : function(t, r, n) {
            if (Tc(t),
            r = Mb(r),
            Tc(n),
            qb)
                try {
                    return bc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw Db("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var vn = u((OW,Oc)=>{
        var Fb = wt()
          , Gb = Ir()
          , Ub = Di();
        Oc.exports = Fb ? function(e, t, r) {
            return Gb.f(e, t, Ub(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var io = u((AW,Ac)=>{
        var Vb = je()
          , Hb = rt()
          , no = pn()
          , Wb = Vb(Function.toString);
        Hb(no.inspectSource) || (no.inspectSource = function(e) {
            return Wb(e)
        }
        );
        Ac.exports = no.inspectSource
    }
    );
    var wc = u((xW,Sc)=>{
        var Xb = Ee()
          , kb = rt()
          , Bb = io()
          , xc = Xb.WeakMap;
        Sc.exports = kb(xc) && /native code/.test(Bb(xc))
    }
    );
    var oo = u((SW,Cc)=>{
        var jb = Yi()
          , zb = $i()
          , Rc = jb("keys");
        Cc.exports = function(e) {
            return Rc[e] || (Rc[e] = zb(e))
        }
    }
    );
    var gn = u((wW,Lc)=>{
        Lc.exports = {}
    }
    );
    var Fc = u((RW,Dc)=>{
        var Kb = wc(), Mc = Ee(), ao = je(), Yb = Ht(), $b = vn(), so = yt(), uo = pn(), Qb = oo(), Zb = gn(), Nc = "Object already initialized", lo = Mc.TypeError, Jb = Mc.WeakMap, hn, Or, En, eI = function(e) {
            return En(e) ? Or(e) : hn(e, {})
        }, tI = function(e) {
            return function(t) {
                var r;
                if (!Yb(t) || (r = Or(t)).type !== e)
                    throw lo("Incompatible receiver, " + e + " required");
                return r
            }
        };
        Kb || uo.state ? (mt = uo.state || (uo.state = new Jb),
        Pc = ao(mt.get),
        co = ao(mt.has),
        qc = ao(mt.set),
        hn = function(e, t) {
            if (co(mt, e))
                throw new lo(Nc);
            return t.facade = e,
            qc(mt, e, t),
            t
        }
        ,
        Or = function(e) {
            return Pc(mt, e) || {}
        }
        ,
        En = function(e) {
            return co(mt, e)
        }
        ) : (Ct = Qb("state"),
        Zb[Ct] = !0,
        hn = function(e, t) {
            if (so(e, Ct))
                throw new lo(Nc);
            return t.facade = e,
            $b(e, Ct, t),
            t
        }
        ,
        Or = function(e) {
            return so(e, Ct) ? e[Ct] : {}
        }
        ,
        En = function(e) {
            return so(e, Ct)
        }
        );
        var mt, Pc, co, qc, Ct;
        Dc.exports = {
            set: hn,
            get: Or,
            has: En,
            enforce: eI,
            getterFor: tI
        }
    }
    );
    var Vc = u((CW,Uc)=>{
        var fo = wt()
          , rI = yt()
          , Gc = Function.prototype
          , nI = fo && Object.getOwnPropertyDescriptor
          , po = rI(Gc, "name")
          , iI = po && function() {}
        .name === "something"
          , oI = po && (!fo || fo && nI(Gc, "name").configurable);
        Uc.exports = {
            EXISTS: po,
            PROPER: iI,
            CONFIGURABLE: oI
        }
    }
    );
    var Bc = u((LW,kc)=>{
        var aI = Ee()
          , Hc = rt()
          , sI = yt()
          , Wc = vn()
          , uI = dn()
          , cI = io()
          , Xc = Fc()
          , lI = Vc().CONFIGURABLE
          , fI = Xc.get
          , dI = Xc.enforce
          , pI = String(String).split("String");
        (kc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (Hc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!sI(r, "name") || lI && r.name !== s) && Wc(r, "name", s),
            c = dI(r),
            c.source || (c.source = pI.join(typeof s == "string" ? s : ""))),
            e === aI) {
                o ? e[t] = r : uI(t, r);
                return
            } else
                i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Wc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return Hc(this) && fI(this).source || cI(this)
        })
    }
    );
    var vo = u((NW,jc)=>{
        var vI = Math.ceil
          , gI = Math.floor;
        jc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? gI : vI)(t)
        }
    }
    );
    var Kc = u((PW,zc)=>{
        var hI = vo()
          , EI = Math.max
          , yI = Math.min;
        zc.exports = function(e, t) {
            var r = hI(e);
            return r < 0 ? EI(r + t, 0) : yI(r, t)
        }
    }
    );
    var $c = u((qW,Yc)=>{
        var mI = vo()
          , _I = Math.min;
        Yc.exports = function(e) {
            return e > 0 ? _I(mI(e), 9007199254740991) : 0
        }
    }
    );
    var Zc = u((MW,Qc)=>{
        var TI = $c();
        Qc.exports = function(e) {
            return TI(e.length)
        }
    }
    );
    var go = u((DW,el)=>{
        var bI = _r()
          , II = Kc()
          , OI = Zc()
          , Jc = function(e) {
            return function(t, r, n) {
                var i = bI(t), o = OI(i), a = II(n, o), s;
                if (e && r != r) {
                    for (; o > a; )
                        if (s = i[a++],
                        s != s)
                            return !0
                } else
                    for (; o > a; a++)
                        if ((e || a in i) && i[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        el.exports = {
            includes: Jc(!0),
            indexOf: Jc(!1)
        }
    }
    );
    var Eo = u((FW,rl)=>{
        var AI = je()
          , ho = yt()
          , xI = _r()
          , SI = go().indexOf
          , wI = gn()
          , tl = AI([].push);
        rl.exports = function(e, t) {
            var r = xI(e), n = 0, i = [], o;
            for (o in r)
                !ho(wI, o) && ho(r, o) && tl(i, o);
            for (; t.length > n; )
                ho(r, o = t[n++]) && (~SI(i, o) || tl(i, o));
            return i
        }
    }
    );
    var yn = u((GW,nl)=>{
        nl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var ol = u(il=>{
        var RI = Eo()
          , CI = yn()
          , LI = CI.concat("length", "prototype");
        il.f = Object.getOwnPropertyNames || function(t) {
            return RI(t, LI)
        }
    }
    );
    var sl = u(al=>{
        al.f = Object.getOwnPropertySymbols
    }
    );
    var cl = u((HW,ul)=>{
        var NI = Tr()
          , PI = je()
          , qI = ol()
          , MI = sl()
          , DI = br()
          , FI = PI([].concat);
        ul.exports = NI("Reflect", "ownKeys") || function(t) {
            var r = qI.f(DI(t))
              , n = MI.f;
            return n ? FI(r, n(t)) : r
        }
    }
    );
    var fl = u((WW,ll)=>{
        var GI = yt()
          , UI = cl()
          , VI = ro()
          , HI = Ir();
        ll.exports = function(e, t) {
            for (var r = UI(t), n = HI.f, i = VI.f, o = 0; o < r.length; o++) {
                var a = r[o];
                GI(e, a) || n(e, a, i(t, a))
            }
        }
    }
    );
    var pl = u((XW,dl)=>{
        var WI = Vt()
          , XI = rt()
          , kI = /#|\.prototype\./
          , Ar = function(e, t) {
            var r = jI[BI(e)];
            return r == KI ? !0 : r == zI ? !1 : XI(t) ? WI(t) : !!t
        }
          , BI = Ar.normalize = function(e) {
            return String(e).replace(kI, ".").toLowerCase()
        }
          , jI = Ar.data = {}
          , zI = Ar.NATIVE = "N"
          , KI = Ar.POLYFILL = "P";
        dl.exports = Ar
    }
    );
    var gl = u((kW,vl)=>{
        var yo = Ee()
          , YI = ro().f
          , $I = vn()
          , QI = Bc()
          , ZI = dn()
          , JI = fl()
          , eO = pl();
        vl.exports = function(e, t) {
            var r = e.target, n = e.global, i = e.stat, o, a, s, c, f, p;
            if (n ? a = yo : i ? a = yo[r] || ZI(r, {}) : a = (yo[r] || {}).prototype,
            a)
                for (s in t) {
                    if (f = t[s],
                    e.noTargetGet ? (p = YI(a, s),
                    c = p && p.value) : c = a[s],
                    o = eO(n ? s : r + (i ? "." : "#") + s, e.forced),
                    !o && c !== void 0) {
                        if (typeof f == typeof c)
                            continue;
                        JI(f, c)
                    }
                    (e.sham || c && c.sham) && $I(f, "sham", !0),
                    QI(a, s, f, e)
                }
        }
    }
    );
    var El = u((BW,hl)=>{
        var tO = Eo()
          , rO = yn();
        hl.exports = Object.keys || function(t) {
            return tO(t, rO)
        }
    }
    );
    var ml = u((jW,yl)=>{
        var nO = wt()
          , iO = Ir()
          , oO = br()
          , aO = _r()
          , sO = El();
        yl.exports = nO ? Object.defineProperties : function(t, r) {
            oO(t);
            for (var n = aO(r), i = sO(r), o = i.length, a = 0, s; o > a; )
                iO.f(t, s = i[a++], n[s]);
            return t
        }
    }
    );
    var Tl = u((zW,_l)=>{
        var uO = Tr();
        _l.exports = uO("document", "documentElement")
    }
    );
    var Rl = u((KW,wl)=>{
        var cO = br(), lO = ml(), bl = yn(), fO = gn(), dO = Tl(), pO = eo(), vO = oo(), Il = ">", Ol = "<", _o = "prototype", To = "script", xl = vO("IE_PROTO"), mo = function() {}, Sl = function(e) {
            return Ol + To + Il + e + Ol + "/" + To + Il
        }, Al = function(e) {
            e.write(Sl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, gO = function() {
            var e = pO("iframe"), t = "java" + To + ":", r;
            return e.style.display = "none",
            dO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Sl("document.F=Object")),
            r.close(),
            r.F
        }, mn, _n = function() {
            try {
                mn = new ActiveXObject("htmlfile")
            } catch {}
            _n = typeof document < "u" ? document.domain && mn ? Al(mn) : gO() : Al(mn);
            for (var e = bl.length; e--; )
                delete _n[_o][bl[e]];
            return _n()
        };
        fO[xl] = !0;
        wl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (mo[_o] = cO(t),
            n = new mo,
            mo[_o] = null,
            n[xl] = t) : n = _n(),
            r === void 0 ? n : lO(n, r)
        }
    }
    );
    var Ll = u((YW,Cl)=>{
        var hO = Qi()
          , EO = Rl()
          , yO = Ir()
          , bo = hO("unscopables")
          , Io = Array.prototype;
        Io[bo] == null && yO.f(Io, bo, {
            configurable: !0,
            value: EO(null)
        });
        Cl.exports = function(e) {
            Io[bo][e] = !0
        }
    }
    );
    var Nl = u(()=>{
        "use strict";
        var mO = gl()
          , _O = go().includes
          , TO = Ll();
        mO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return _O(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        TO("includes")
    }
    );
    var ql = u((ZW,Pl)=>{
        var bO = Ee()
          , IO = je();
        Pl.exports = function(e, t) {
            return IO(bO[e].prototype[t])
        }
    }
    );
    var Dl = u((JW,Ml)=>{
        Nl();
        var OO = ql();
        Ml.exports = OO("Array", "includes")
    }
    );
    var Gl = u((eX,Fl)=>{
        var AO = Dl();
        Fl.exports = AO
    }
    );
    var Vl = u((tX,Ul)=>{
        var xO = Gl();
        Ul.exports = xO
    }
    );
    var Oo = u((rX,Hl)=>{
        var SO = typeof global == "object" && global && global.Object === Object && global;
        Hl.exports = SO
    }
    );
    var Ke = u((nX,Wl)=>{
        var wO = Oo()
          , RO = typeof self == "object" && self && self.Object === Object && self
          , CO = wO || RO || Function("return this")();
        Wl.exports = CO
    }
    );
    var Xt = u((iX,Xl)=>{
        var LO = Ke()
          , NO = LO.Symbol;
        Xl.exports = NO
    }
    );
    var zl = u((oX,jl)=>{
        var kl = Xt()
          , Bl = Object.prototype
          , PO = Bl.hasOwnProperty
          , qO = Bl.toString
          , xr = kl ? kl.toStringTag : void 0;
        function MO(e) {
            var t = PO.call(e, xr)
              , r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {}
            var i = qO.call(e);
            return n && (t ? e[xr] = r : delete e[xr]),
            i
        }
        jl.exports = MO
    }
    );
    var Yl = u((aX,Kl)=>{
        var DO = Object.prototype
          , FO = DO.toString;
        function GO(e) {
            return FO.call(e)
        }
        Kl.exports = GO
    }
    );
    var _t = u((sX,Zl)=>{
        var $l = Xt()
          , UO = zl()
          , VO = Yl()
          , HO = "[object Null]"
          , WO = "[object Undefined]"
          , Ql = $l ? $l.toStringTag : void 0;
        function XO(e) {
            return e == null ? e === void 0 ? WO : HO : Ql && Ql in Object(e) ? UO(e) : VO(e)
        }
        Zl.exports = XO
    }
    );
    var Ao = u((uX,Jl)=>{
        function kO(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Jl.exports = kO
    }
    );
    var xo = u((cX,ef)=>{
        var BO = Ao()
          , jO = BO(Object.getPrototypeOf, Object);
        ef.exports = jO
    }
    );
    var ft = u((lX,tf)=>{
        function zO(e) {
            return e != null && typeof e == "object"
        }
        tf.exports = zO
    }
    );
    var So = u((fX,nf)=>{
        var KO = _t()
          , YO = xo()
          , $O = ft()
          , QO = "[object Object]"
          , ZO = Function.prototype
          , JO = Object.prototype
          , rf = ZO.toString
          , eA = JO.hasOwnProperty
          , tA = rf.call(Object);
        function rA(e) {
            if (!$O(e) || KO(e) != QO)
                return !1;
            var t = YO(e);
            if (t === null)
                return !0;
            var r = eA.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && rf.call(r) == tA
        }
        nf.exports = rA
    }
    );
    var of = u(wo=>{
        "use strict";
        Object.defineProperty(wo, "__esModule", {
            value: !0
        });
        wo.default = nA;
        function nA(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var af = u((Co,Ro)=>{
        "use strict";
        Object.defineProperty(Co, "__esModule", {
            value: !0
        });
        var iA = of()
          , oA = aA(iA);
        function aA(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var kt;
        typeof self < "u" ? kt = self : typeof window < "u" ? kt = window : typeof global < "u" ? kt = global : typeof Ro < "u" ? kt = Ro : kt = Function("return this")();
        var sA = (0,
        oA.default)(kt);
        Co.default = sA
    }
    );
    var Lo = u(Sr=>{
        "use strict";
        Sr.__esModule = !0;
        Sr.ActionTypes = void 0;
        Sr.default = lf;
        var uA = So()
          , cA = cf(uA)
          , lA = af()
          , sf = cf(lA);
        function cf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var uf = Sr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function lf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(lf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , c = !1;
            function f() {
                s === a && (s = a.slice())
            }
            function p() {
                return o
            }
            function d(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var L = !0;
                return f(),
                s.push(_),
                function() {
                    if (L) {
                        L = !1,
                        f();
                        var S = s.indexOf(_);
                        s.splice(S, 1)
                    }
                }
            }
            function g(_) {
                if (!(0,
                cA.default)(_))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    o = i(o, _)
                } finally {
                    c = !1
                }
                for (var L = a = s, A = 0; A < L.length; A++)
                    L[A]();
                return _
            }
            function h(_) {
                if (typeof _ != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = _,
                g({
                    type: uf.INIT
                })
            }
            function y() {
                var _, L = d;
                return _ = {
                    subscribe: function(S) {
                        if (typeof S != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function I() {
                            S.next && S.next(p())
                        }
                        I();
                        var R = L(I);
                        return {
                            unsubscribe: R
                        }
                    }
                },
                _[sf.default] = function() {
                    return this
                }
                ,
                _
            }
            return g({
                type: uf.INIT
            }),
            n = {
                dispatch: g,
                subscribe: d,
                getState: p,
                replaceReducer: h
            },
            n[sf.default] = y,
            n
        }
    }
    );
    var Po = u(No=>{
        "use strict";
        No.__esModule = !0;
        No.default = fA;
        function fA(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var pf = u(qo=>{
        "use strict";
        qo.__esModule = !0;
        qo.default = hA;
        var ff = Lo()
          , dA = So()
          , gX = df(dA)
          , pA = Po()
          , hX = df(pA);
        function df(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function vA(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function gA(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: ff.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ff.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function hA(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                gA(r)
            } catch (c) {
                s = c
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , p = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var d;
                for (var g = !1, h = {}, y = 0; y < o.length; y++) {
                    var _ = o[y]
                      , L = r[_]
                      , A = f[_]
                      , S = L(A, p);
                    if (typeof S > "u") {
                        var I = vA(_, p);
                        throw new Error(I)
                    }
                    h[_] = S,
                    g = g || S !== A
                }
                return g ? h : f
            }
        }
    }
    );
    var gf = u(Mo=>{
        "use strict";
        Mo.__esModule = !0;
        Mo.default = EA;
        function vf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function EA(e, t) {
            if (typeof e == "function")
                return vf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = vf(a, t))
            }
            return n
        }
    }
    );
    var Fo = u(Do=>{
        "use strict";
        Do.__esModule = !0;
        Do.default = yA;
        function yA() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var hf = u(Go=>{
        "use strict";
        Go.__esModule = !0;
        var mA = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Go.default = IA;
        var _A = Fo()
          , TA = bA(_A);
        function bA(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function IA() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , c = s.dispatch
                      , f = []
                      , p = {
                        getState: s.getState,
                        dispatch: function(g) {
                            return c(g)
                        }
                    };
                    return f = t.map(function(d) {
                        return d(p)
                    }),
                    c = TA.default.apply(void 0, f)(s.dispatch),
                    mA({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var Uo = u(Ue=>{
        "use strict";
        Ue.__esModule = !0;
        Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
        var OA = Lo()
          , AA = Bt(OA)
          , xA = pf()
          , SA = Bt(xA)
          , wA = gf()
          , RA = Bt(wA)
          , CA = hf()
          , LA = Bt(CA)
          , NA = Fo()
          , PA = Bt(NA)
          , qA = Po()
          , TX = Bt(qA);
        function Bt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ue.createStore = AA.default;
        Ue.combineReducers = SA.default;
        Ue.bindActionCreators = RA.default;
        Ue.applyMiddleware = LA.default;
        Ue.compose = PA.default
    }
    );
    var Ye, Vo, nt, MA, DA, Ho, FA, Ef = he(()=>{
        "use strict";
        Ye = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        Vo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        nt = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        MA = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        DA = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Ho = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        FA = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Ve, GA, Wo = he(()=>{
        "use strict";
        Ve = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        GA = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var UA, yf = he(()=>{
        "use strict";
        UA = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var VA, HA, WA, XA, kA, BA, jA, Xo, mf = he(()=>{
        "use strict";
        Wo();
        ({TRANSFORM_MOVE: VA, TRANSFORM_SCALE: HA, TRANSFORM_ROTATE: WA, TRANSFORM_SKEW: XA, STYLE_SIZE: kA, STYLE_FILTER: BA, STYLE_FONT_VARIATION: jA} = Ve),
        Xo = {
            [VA]: !0,
            [HA]: !0,
            [WA]: !0,
            [XA]: !0,
            [kA]: !0,
            [BA]: !0,
            [jA]: !0
        }
    }
    );
    var be = {};
    Me(be, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: ()=>cx,
        IX2_ANIMATION_FRAME_CHANGED: ()=>nx,
        IX2_CLEAR_REQUESTED: ()=>ex,
        IX2_ELEMENT_STATE_CHANGED: ()=>ux,
        IX2_EVENT_LISTENER_ADDED: ()=>tx,
        IX2_EVENT_STATE_CHANGED: ()=>rx,
        IX2_INSTANCE_ADDED: ()=>ox,
        IX2_INSTANCE_REMOVED: ()=>sx,
        IX2_INSTANCE_STARTED: ()=>ax,
        IX2_MEDIA_QUERIES_DEFINED: ()=>fx,
        IX2_PARAMETER_CHANGED: ()=>ix,
        IX2_PLAYBACK_REQUESTED: ()=>ZA,
        IX2_PREVIEW_REQUESTED: ()=>QA,
        IX2_RAW_DATA_IMPORTED: ()=>zA,
        IX2_SESSION_INITIALIZED: ()=>KA,
        IX2_SESSION_STARTED: ()=>YA,
        IX2_SESSION_STOPPED: ()=>$A,
        IX2_STOP_REQUESTED: ()=>JA,
        IX2_TEST_FRAME_RENDERED: ()=>dx,
        IX2_VIEWPORT_WIDTH_CHANGED: ()=>lx
    });
    var zA, KA, YA, $A, QA, ZA, JA, ex, tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, _f = he(()=>{
        "use strict";
        zA = "IX2_RAW_DATA_IMPORTED",
        KA = "IX2_SESSION_INITIALIZED",
        YA = "IX2_SESSION_STARTED",
        $A = "IX2_SESSION_STOPPED",
        QA = "IX2_PREVIEW_REQUESTED",
        ZA = "IX2_PLAYBACK_REQUESTED",
        JA = "IX2_STOP_REQUESTED",
        ex = "IX2_CLEAR_REQUESTED",
        tx = "IX2_EVENT_LISTENER_ADDED",
        rx = "IX2_EVENT_STATE_CHANGED",
        nx = "IX2_ANIMATION_FRAME_CHANGED",
        ix = "IX2_PARAMETER_CHANGED",
        ox = "IX2_INSTANCE_ADDED",
        ax = "IX2_INSTANCE_STARTED",
        sx = "IX2_INSTANCE_REMOVED",
        ux = "IX2_ELEMENT_STATE_CHANGED",
        cx = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        lx = "IX2_VIEWPORT_WIDTH_CHANGED",
        fx = "IX2_MEDIA_QUERIES_DEFINED",
        dx = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var we = {};
    Me(we, {
        ABSTRACT_NODE: ()=>lS,
        AUTO: ()=>Jx,
        BACKGROUND: ()=>zx,
        BACKGROUND_COLOR: ()=>jx,
        BAR_DELIMITER: ()=>rS,
        BORDER_COLOR: ()=>Kx,
        BOUNDARY_SELECTOR: ()=>Ex,
        CHILDREN: ()=>nS,
        COLON_DELIMITER: ()=>tS,
        COLOR: ()=>Yx,
        COMMA_DELIMITER: ()=>eS,
        CONFIG_UNIT: ()=>Ax,
        CONFIG_VALUE: ()=>Tx,
        CONFIG_X_UNIT: ()=>bx,
        CONFIG_X_VALUE: ()=>yx,
        CONFIG_Y_UNIT: ()=>Ix,
        CONFIG_Y_VALUE: ()=>mx,
        CONFIG_Z_UNIT: ()=>Ox,
        CONFIG_Z_VALUE: ()=>_x,
        DISPLAY: ()=>$x,
        FILTER: ()=>Wx,
        FLEX: ()=>Qx,
        FONT_VARIATION_SETTINGS: ()=>Xx,
        HEIGHT: ()=>Bx,
        HTML_ELEMENT: ()=>uS,
        IMMEDIATE_CHILDREN: ()=>iS,
        IX2_ID_DELIMITER: ()=>px,
        OPACITY: ()=>Hx,
        PARENT: ()=>aS,
        PLAIN_OBJECT: ()=>cS,
        PRESERVE_3D: ()=>sS,
        RENDER_GENERAL: ()=>dS,
        RENDER_PLUGIN: ()=>vS,
        RENDER_STYLE: ()=>pS,
        RENDER_TRANSFORM: ()=>fS,
        ROTATE_X: ()=>Mx,
        ROTATE_Y: ()=>Dx,
        ROTATE_Z: ()=>Fx,
        SCALE_3D: ()=>qx,
        SCALE_X: ()=>Lx,
        SCALE_Y: ()=>Nx,
        SCALE_Z: ()=>Px,
        SIBLINGS: ()=>oS,
        SKEW: ()=>Gx,
        SKEW_X: ()=>Ux,
        SKEW_Y: ()=>Vx,
        TRANSFORM: ()=>xx,
        TRANSLATE_3D: ()=>Cx,
        TRANSLATE_X: ()=>Sx,
        TRANSLATE_Y: ()=>wx,
        TRANSLATE_Z: ()=>Rx,
        WF_PAGE: ()=>vx,
        WIDTH: ()=>kx,
        WILL_CHANGE: ()=>Zx,
        W_MOD_IX: ()=>hx,
        W_MOD_JS: ()=>gx
    });
    var px, vx, gx, hx, Ex, yx, mx, _x, Tx, bx, Ix, Ox, Ax, xx, Sx, wx, Rx, Cx, Lx, Nx, Px, qx, Mx, Dx, Fx, Gx, Ux, Vx, Hx, Wx, Xx, kx, Bx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eS, tS, rS, nS, iS, oS, aS, sS, uS, cS, lS, fS, dS, pS, vS, Tf = he(()=>{
        "use strict";
        px = "|",
        vx = "data-wf-page",
        gx = "w-mod-js",
        hx = "w-mod-ix",
        Ex = ".w-dyn-item",
        yx = "xValue",
        mx = "yValue",
        _x = "zValue",
        Tx = "value",
        bx = "xUnit",
        Ix = "yUnit",
        Ox = "zUnit",
        Ax = "unit",
        xx = "transform",
        Sx = "translateX",
        wx = "translateY",
        Rx = "translateZ",
        Cx = "translate3d",
        Lx = "scaleX",
        Nx = "scaleY",
        Px = "scaleZ",
        qx = "scale3d",
        Mx = "rotateX",
        Dx = "rotateY",
        Fx = "rotateZ",
        Gx = "skew",
        Ux = "skewX",
        Vx = "skewY",
        Hx = "opacity",
        Wx = "filter",
        Xx = "font-variation-settings",
        kx = "width",
        Bx = "height",
        jx = "backgroundColor",
        zx = "background",
        Kx = "borderColor",
        Yx = "color",
        $x = "display",
        Qx = "flex",
        Zx = "willChange",
        Jx = "AUTO",
        eS = ",",
        tS = ":",
        rS = "|",
        nS = "CHILDREN",
        iS = "IMMEDIATE_CHILDREN",
        oS = "SIBLINGS",
        aS = "PARENT",
        sS = "preserve-3d",
        uS = "HTML_ELEMENT",
        cS = "PLAIN_OBJECT",
        lS = "ABSTRACT_NODE",
        fS = "RENDER_TRANSFORM",
        dS = "RENDER_GENERAL",
        pS = "RENDER_STYLE",
        vS = "RENDER_PLUGIN"
    }
    );
    var bf = {};
    Me(bf, {
        ActionAppliesTo: ()=>GA,
        ActionTypeConsts: ()=>Ve,
        EventAppliesTo: ()=>Vo,
        EventBasedOn: ()=>nt,
        EventContinuousMouseAxes: ()=>MA,
        EventLimitAffectedElements: ()=>DA,
        EventTypeConsts: ()=>Ye,
        IX2EngineActionTypes: ()=>be,
        IX2EngineConstants: ()=>we,
        InteractionTypeConsts: ()=>UA,
        QuickEffectDirectionConsts: ()=>FA,
        QuickEffectIds: ()=>Ho,
        ReducedMotionTypes: ()=>Xo
    });
    var De = he(()=>{
        "use strict";
        Ef();
        Wo();
        yf();
        mf();
        _f();
        Tf()
    }
    );
    var gS, If, Of = he(()=>{
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: gS} = be),
        If = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case gS:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var jt = u(me=>{
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        var hS = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        me.clone = bn;
        me.addLast = Sf;
        me.addFirst = wf;
        me.removeLast = Rf;
        me.removeFirst = Cf;
        me.insert = Lf;
        me.removeAt = Nf;
        me.replaceAt = Pf;
        me.getIn = In;
        me.set = On;
        me.setIn = An;
        me.update = Mf;
        me.updateIn = Df;
        me.merge = Ff;
        me.mergeDeep = Gf;
        me.mergeIn = Uf;
        me.omit = Vf;
        me.addDefaults = Hf;
        var Af = "INVALID_ARGS";
        function xf(e) {
            throw new Error(e)
        }
        function ko(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var ES = {}.hasOwnProperty;
        function bn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = ko(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Fe(e, t, r) {
            var n = r;
            n == null && xf(Af);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var p = ko(f);
                    if (p.length)
                        for (var d = 0; d <= p.length; d++) {
                            var g = p[d];
                            if (!(e && n[g] !== void 0)) {
                                var h = f[g];
                                t && Tn(n[g]) && Tn(h) && (h = Fe(e, t, n[g], h)),
                                !(h === void 0 || h === n[g]) && (i || (i = !0,
                                n = bn(n)),
                                n[g] = h)
                            }
                        }
                }
            }
            return n
        }
        function Tn(e) {
            var t = typeof e > "u" ? "undefined" : hS(e);
            return e != null && (t === "object" || t === "function")
        }
        function Sf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function wf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Rf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Cf(e) {
            return e.length ? e.slice(1) : e
        }
        function Lf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Nf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Pf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function In(e, t) {
            if (!Array.isArray(t) && xf(Af),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function On(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = bn(i);
            return o[t] = r,
            o
        }
        function qf(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = Tn(e) && Tn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = qf(a, t, r, n + 1)
            }
            return On(e, o, i)
        }
        function An(e, t, r) {
            return t.length ? qf(e, t, r, 0) : r
        }
        function Mf(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return On(e, t, i)
        }
        function Df(e, t, r) {
            var n = In(e, t)
              , i = r(n);
            return An(e, t, i)
        }
        function Ff(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Fe(!1, !1, e, t, r, n, i, o)
        }
        function Gf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Fe(!1, !0, e, t, r, n, i, o)
        }
        function Uf(e, t, r, n, i, o, a) {
            var s = In(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, p = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++)
                p[d - 7] = arguments[d];
            return p.length ? c = Fe.call.apply(Fe, [null, !1, !1, s, r, n, i, o, a].concat(p)) : c = Fe(!1, !1, s, r, n, i, o, a),
            An(e, t, c)
        }
        function Vf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (ES.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = ko(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (o[c] = e[c])
            }
            return o
        }
        function Hf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Fe(!0, !1, e, t, r, n, i, o)
        }
        var yS = {
            clone: bn,
            addLast: Sf,
            addFirst: wf,
            removeLast: Rf,
            removeFirst: Cf,
            insert: Lf,
            removeAt: Nf,
            replaceAt: Pf,
            getIn: In,
            set: On,
            setIn: An,
            update: Mf,
            updateIn: Df,
            merge: Ff,
            mergeDeep: Gf,
            mergeIn: Uf,
            omit: Vf,
            addDefaults: Hf
        };
        me.default = yS
    }
    );
    var Xf, mS, _S, TS, bS, IS, Wf, kf, Bf = he(()=>{
        "use strict";
        De();
        Xf = ue(jt()),
        {IX2_PREVIEW_REQUESTED: mS, IX2_PLAYBACK_REQUESTED: _S, IX2_STOP_REQUESTED: TS, IX2_CLEAR_REQUESTED: bS} = be,
        IS = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Wf = Object.create(null, {
            [mS]: {
                value: "preview"
            },
            [_S]: {
                value: "playback"
            },
            [TS]: {
                value: "stop"
            },
            [bS]: {
                value: "clear"
            }
        }),
        kf = (e=IS,t)=>{
            if (t.type in Wf) {
                let r = [Wf[t.type]];
                return (0,
                Xf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Le, OS, AS, xS, SS, wS, RS, CS, LS, NS, PS, jf, qS, zf, Kf = he(()=>{
        "use strict";
        De();
        Le = ue(jt()),
        {IX2_SESSION_INITIALIZED: OS, IX2_SESSION_STARTED: AS, IX2_TEST_FRAME_RENDERED: xS, IX2_SESSION_STOPPED: SS, IX2_EVENT_LISTENER_ADDED: wS, IX2_EVENT_STATE_CHANGED: RS, IX2_ANIMATION_FRAME_CHANGED: CS, IX2_ACTION_LIST_PLAYBACK_CHANGED: LS, IX2_VIEWPORT_WIDTH_CHANGED: NS, IX2_MEDIA_QUERIES_DEFINED: PS} = be,
        jf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        qS = 20,
        zf = (e=jf,t)=>{
            switch (t.type) {
            case OS:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    Le.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case AS:
                return (0,
                Le.set)(e, "active", !0);
            case xS:
                {
                    let {payload: {step: r=qS}} = t;
                    return (0,
                    Le.set)(e, "tick", e.tick + r)
                }
            case SS:
                return jf;
            case CS:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    Le.set)(e, "tick", r)
                }
            case wS:
                {
                    let r = (0,
                    Le.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Le.set)(e, "eventListeners", r)
                }
            case RS:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    Le.setIn)(e, ["eventState", r], n)
                }
            case LS:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    Le.setIn)(e, ["playbackState", r], n)
                }
            case NS:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: c, max: f} = n[a];
                        if (r >= c && r <= f) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    Le.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case PS:
                return (0,
                Le.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var $f = u((UX,Yf)=>{
        function MS() {
            this.__data__ = [],
            this.size = 0
        }
        Yf.exports = MS
    }
    );
    var xn = u((VX,Qf)=>{
        function DS(e, t) {
            return e === t || e !== e && t !== t
        }
        Qf.exports = DS
    }
    );
    var wr = u((HX,Zf)=>{
        var FS = xn();
        function GS(e, t) {
            for (var r = e.length; r--; )
                if (FS(e[r][0], t))
                    return r;
            return -1
        }
        Zf.exports = GS
    }
    );
    var ed = u((WX,Jf)=>{
        var US = wr()
          , VS = Array.prototype
          , HS = VS.splice;
        function WS(e) {
            var t = this.__data__
              , r = US(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : HS.call(t, r, 1),
            --this.size,
            !0
        }
        Jf.exports = WS
    }
    );
    var rd = u((XX,td)=>{
        var XS = wr();
        function kS(e) {
            var t = this.__data__
              , r = XS(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        td.exports = kS
    }
    );
    var id = u((kX,nd)=>{
        var BS = wr();
        function jS(e) {
            return BS(this.__data__, e) > -1
        }
        nd.exports = jS
    }
    );
    var ad = u((BX,od)=>{
        var zS = wr();
        function KS(e, t) {
            var r = this.__data__
              , n = zS(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        od.exports = KS
    }
    );
    var Rr = u((jX,sd)=>{
        var YS = $f()
          , $S = ed()
          , QS = rd()
          , ZS = id()
          , JS = ad();
        function zt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        zt.prototype.clear = YS;
        zt.prototype.delete = $S;
        zt.prototype.get = QS;
        zt.prototype.has = ZS;
        zt.prototype.set = JS;
        sd.exports = zt
    }
    );
    var cd = u((zX,ud)=>{
        var ew = Rr();
        function tw() {
            this.__data__ = new ew,
            this.size = 0
        }
        ud.exports = tw
    }
    );
    var fd = u((KX,ld)=>{
        function rw(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        ld.exports = rw
    }
    );
    var pd = u((YX,dd)=>{
        function nw(e) {
            return this.__data__.get(e)
        }
        dd.exports = nw
    }
    );
    var gd = u(($X,vd)=>{
        function iw(e) {
            return this.__data__.has(e)
        }
        vd.exports = iw
    }
    );
    var it = u((QX,hd)=>{
        function ow(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        hd.exports = ow
    }
    );
    var Bo = u((ZX,Ed)=>{
        var aw = _t()
          , sw = it()
          , uw = "[object AsyncFunction]"
          , cw = "[object Function]"
          , lw = "[object GeneratorFunction]"
          , fw = "[object Proxy]";
        function dw(e) {
            if (!sw(e))
                return !1;
            var t = aw(e);
            return t == cw || t == lw || t == uw || t == fw
        }
        Ed.exports = dw
    }
    );
    var md = u((JX,yd)=>{
        var pw = Ke()
          , vw = pw["__core-js_shared__"];
        yd.exports = vw
    }
    );
    var bd = u((e5,Td)=>{
        var jo = md()
          , _d = function() {
            var e = /[^.]+$/.exec(jo && jo.keys && jo.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function gw(e) {
            return !!_d && _d in e
        }
        Td.exports = gw
    }
    );
    var zo = u((t5,Id)=>{
        var hw = Function.prototype
          , Ew = hw.toString;
        function yw(e) {
            if (e != null) {
                try {
                    return Ew.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Id.exports = yw
    }
    );
    var Ad = u((r5,Od)=>{
        var mw = Bo()
          , _w = bd()
          , Tw = it()
          , bw = zo()
          , Iw = /[\\^$.*+?()[\]{}|]/g
          , Ow = /^\[object .+?Constructor\]$/
          , Aw = Function.prototype
          , xw = Object.prototype
          , Sw = Aw.toString
          , ww = xw.hasOwnProperty
          , Rw = RegExp("^" + Sw.call(ww).replace(Iw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function Cw(e) {
            if (!Tw(e) || _w(e))
                return !1;
            var t = mw(e) ? Rw : Ow;
            return t.test(bw(e))
        }
        Od.exports = Cw
    }
    );
    var Sd = u((n5,xd)=>{
        function Lw(e, t) {
            return e?.[t]
        }
        xd.exports = Lw
    }
    );
    var Tt = u((i5,wd)=>{
        var Nw = Ad()
          , Pw = Sd();
        function qw(e, t) {
            var r = Pw(e, t);
            return Nw(r) ? r : void 0
        }
        wd.exports = qw
    }
    );
    var Sn = u((o5,Rd)=>{
        var Mw = Tt()
          , Dw = Ke()
          , Fw = Mw(Dw, "Map");
        Rd.exports = Fw
    }
    );
    var Cr = u((a5,Cd)=>{
        var Gw = Tt()
          , Uw = Gw(Object, "create");
        Cd.exports = Uw
    }
    );
    var Pd = u((s5,Nd)=>{
        var Ld = Cr();
        function Vw() {
            this.__data__ = Ld ? Ld(null) : {},
            this.size = 0
        }
        Nd.exports = Vw
    }
    );
    var Md = u((u5,qd)=>{
        function Hw(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        qd.exports = Hw
    }
    );
    var Fd = u((c5,Dd)=>{
        var Ww = Cr()
          , Xw = "__lodash_hash_undefined__"
          , kw = Object.prototype
          , Bw = kw.hasOwnProperty;
        function jw(e) {
            var t = this.__data__;
            if (Ww) {
                var r = t[e];
                return r === Xw ? void 0 : r
            }
            return Bw.call(t, e) ? t[e] : void 0
        }
        Dd.exports = jw
    }
    );
    var Ud = u((l5,Gd)=>{
        var zw = Cr()
          , Kw = Object.prototype
          , Yw = Kw.hasOwnProperty;
        function $w(e) {
            var t = this.__data__;
            return zw ? t[e] !== void 0 : Yw.call(t, e)
        }
        Gd.exports = $w
    }
    );
    var Hd = u((f5,Vd)=>{
        var Qw = Cr()
          , Zw = "__lodash_hash_undefined__";
        function Jw(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = Qw && t === void 0 ? Zw : t,
            this
        }
        Vd.exports = Jw
    }
    );
    var Xd = u((d5,Wd)=>{
        var e0 = Pd()
          , t0 = Md()
          , r0 = Fd()
          , n0 = Ud()
          , i0 = Hd();
        function Kt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Kt.prototype.clear = e0;
        Kt.prototype.delete = t0;
        Kt.prototype.get = r0;
        Kt.prototype.has = n0;
        Kt.prototype.set = i0;
        Wd.exports = Kt
    }
    );
    var jd = u((p5,Bd)=>{
        var kd = Xd()
          , o0 = Rr()
          , a0 = Sn();
        function s0() {
            this.size = 0,
            this.__data__ = {
                hash: new kd,
                map: new (a0 || o0),
                string: new kd
            }
        }
        Bd.exports = s0
    }
    );
    var Kd = u((v5,zd)=>{
        function u0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        zd.exports = u0
    }
    );
    var Lr = u((g5,Yd)=>{
        var c0 = Kd();
        function l0(e, t) {
            var r = e.__data__;
            return c0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Yd.exports = l0
    }
    );
    var Qd = u((h5,$d)=>{
        var f0 = Lr();
        function d0(e) {
            var t = f0(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        $d.exports = d0
    }
    );
    var Jd = u((E5,Zd)=>{
        var p0 = Lr();
        function v0(e) {
            return p0(this, e).get(e)
        }
        Zd.exports = v0
    }
    );
    var tp = u((y5,ep)=>{
        var g0 = Lr();
        function h0(e) {
            return g0(this, e).has(e)
        }
        ep.exports = h0
    }
    );
    var np = u((m5,rp)=>{
        var E0 = Lr();
        function y0(e, t) {
            var r = E0(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        rp.exports = y0
    }
    );
    var wn = u((_5,ip)=>{
        var m0 = jd()
          , _0 = Qd()
          , T0 = Jd()
          , b0 = tp()
          , I0 = np();
        function Yt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Yt.prototype.clear = m0;
        Yt.prototype.delete = _0;
        Yt.prototype.get = T0;
        Yt.prototype.has = b0;
        Yt.prototype.set = I0;
        ip.exports = Yt
    }
    );
    var ap = u((T5,op)=>{
        var O0 = Rr()
          , A0 = Sn()
          , x0 = wn()
          , S0 = 200;
        function w0(e, t) {
            var r = this.__data__;
            if (r instanceof O0) {
                var n = r.__data__;
                if (!A0 || n.length < S0 - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new x0(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        op.exports = w0
    }
    );
    var Ko = u((b5,sp)=>{
        var R0 = Rr()
          , C0 = cd()
          , L0 = fd()
          , N0 = pd()
          , P0 = gd()
          , q0 = ap();
        function $t(e) {
            var t = this.__data__ = new R0(e);
            this.size = t.size
        }
        $t.prototype.clear = C0;
        $t.prototype.delete = L0;
        $t.prototype.get = N0;
        $t.prototype.has = P0;
        $t.prototype.set = q0;
        sp.exports = $t
    }
    );
    var cp = u((I5,up)=>{
        var M0 = "__lodash_hash_undefined__";
        function D0(e) {
            return this.__data__.set(e, M0),
            this
        }
        up.exports = D0
    }
    );
    var fp = u((O5,lp)=>{
        function F0(e) {
            return this.__data__.has(e)
        }
        lp.exports = F0
    }
    );
    var pp = u((A5,dp)=>{
        var G0 = wn()
          , U0 = cp()
          , V0 = fp();
        function Rn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new G0; ++t < r; )
                this.add(e[t])
        }
        Rn.prototype.add = Rn.prototype.push = U0;
        Rn.prototype.has = V0;
        dp.exports = Rn
    }
    );
    var gp = u((x5,vp)=>{
        function H0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        vp.exports = H0
    }
    );
    var Ep = u((S5,hp)=>{
        function W0(e, t) {
            return e.has(t)
        }
        hp.exports = W0
    }
    );
    var Yo = u((w5,yp)=>{
        var X0 = pp()
          , k0 = gp()
          , B0 = Ep()
          , j0 = 1
          , z0 = 2;
        function K0(e, t, r, n, i, o) {
            var a = r & j0
              , s = e.length
              , c = t.length;
            if (s != c && !(a && c > s))
                return !1;
            var f = o.get(e)
              , p = o.get(t);
            if (f && p)
                return f == t && p == e;
            var d = -1
              , g = !0
              , h = r & z0 ? new X0 : void 0;
            for (o.set(e, t),
            o.set(t, e); ++d < s; ) {
                var y = e[d]
                  , _ = t[d];
                if (n)
                    var L = a ? n(_, y, d, t, e, o) : n(y, _, d, e, t, o);
                if (L !== void 0) {
                    if (L)
                        continue;
                    g = !1;
                    break
                }
                if (h) {
                    if (!k0(t, function(A, S) {
                        if (!B0(h, S) && (y === A || i(y, A, r, n, o)))
                            return h.push(S)
                    })) {
                        g = !1;
                        break
                    }
                } else if (!(y === _ || i(y, _, r, n, o))) {
                    g = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            g
        }
        yp.exports = K0
    }
    );
    var _p = u((R5,mp)=>{
        var Y0 = Ke()
          , $0 = Y0.Uint8Array;
        mp.exports = $0
    }
    );
    var bp = u((C5,Tp)=>{
        function Q0(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        Tp.exports = Q0
    }
    );
    var Op = u((L5,Ip)=>{
        function Z0(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        Ip.exports = Z0
    }
    );
    var Rp = u((N5,wp)=>{
        var Ap = Xt()
          , xp = _p()
          , J0 = xn()
          , eR = Yo()
          , tR = bp()
          , rR = Op()
          , nR = 1
          , iR = 2
          , oR = "[object Boolean]"
          , aR = "[object Date]"
          , sR = "[object Error]"
          , uR = "[object Map]"
          , cR = "[object Number]"
          , lR = "[object RegExp]"
          , fR = "[object Set]"
          , dR = "[object String]"
          , pR = "[object Symbol]"
          , vR = "[object ArrayBuffer]"
          , gR = "[object DataView]"
          , Sp = Ap ? Ap.prototype : void 0
          , $o = Sp ? Sp.valueOf : void 0;
        function hR(e, t, r, n, i, o, a) {
            switch (r) {
            case gR:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case vR:
                return !(e.byteLength != t.byteLength || !o(new xp(e), new xp(t)));
            case oR:
            case aR:
            case cR:
                return J0(+e, +t);
            case sR:
                return e.name == t.name && e.message == t.message;
            case lR:
            case dR:
                return e == t + "";
            case uR:
                var s = tR;
            case fR:
                var c = n & nR;
                if (s || (s = rR),
                e.size != t.size && !c)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                n |= iR,
                a.set(e, t);
                var p = eR(s(e), s(t), n, i, o, a);
                return a.delete(e),
                p;
            case pR:
                if ($o)
                    return $o.call(e) == $o.call(t)
            }
            return !1
        }
        wp.exports = hR
    }
    );
    var Cn = u((P5,Cp)=>{
        function ER(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        Cp.exports = ER
    }
    );
    var Oe = u((q5,Lp)=>{
        var yR = Array.isArray;
        Lp.exports = yR
    }
    );
    var Qo = u((M5,Np)=>{
        var mR = Cn()
          , _R = Oe();
        function TR(e, t, r) {
            var n = t(e);
            return _R(e) ? n : mR(n, r(e))
        }
        Np.exports = TR
    }
    );
    var qp = u((D5,Pp)=>{
        function bR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Pp.exports = bR
    }
    );
    var Zo = u((F5,Mp)=>{
        function IR() {
            return []
        }
        Mp.exports = IR
    }
    );
    var Jo = u((G5,Fp)=>{
        var OR = qp()
          , AR = Zo()
          , xR = Object.prototype
          , SR = xR.propertyIsEnumerable
          , Dp = Object.getOwnPropertySymbols
          , wR = Dp ? function(e) {
            return e == null ? [] : (e = Object(e),
            OR(Dp(e), function(t) {
                return SR.call(e, t)
            }))
        }
        : AR;
        Fp.exports = wR
    }
    );
    var Up = u((U5,Gp)=>{
        function RR(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Gp.exports = RR
    }
    );
    var Hp = u((V5,Vp)=>{
        var CR = _t()
          , LR = ft()
          , NR = "[object Arguments]";
        function PR(e) {
            return LR(e) && CR(e) == NR
        }
        Vp.exports = PR
    }
    );
    var Nr = u((H5,kp)=>{
        var Wp = Hp()
          , qR = ft()
          , Xp = Object.prototype
          , MR = Xp.hasOwnProperty
          , DR = Xp.propertyIsEnumerable
          , FR = Wp(function() {
            return arguments
        }()) ? Wp : function(e) {
            return qR(e) && MR.call(e, "callee") && !DR.call(e, "callee")
        }
        ;
        kp.exports = FR
    }
    );
    var jp = u((W5,Bp)=>{
        function GR() {
            return !1
        }
        Bp.exports = GR
    }
    );
    var Ln = u((Pr,Qt)=>{
        var UR = Ke()
          , VR = jp()
          , Yp = typeof Pr == "object" && Pr && !Pr.nodeType && Pr
          , zp = Yp && typeof Qt == "object" && Qt && !Qt.nodeType && Qt
          , HR = zp && zp.exports === Yp
          , Kp = HR ? UR.Buffer : void 0
          , WR = Kp ? Kp.isBuffer : void 0
          , XR = WR || VR;
        Qt.exports = XR
    }
    );
    var Nn = u((X5,$p)=>{
        var kR = 9007199254740991
          , BR = /^(?:0|[1-9]\d*)$/;
        function jR(e, t) {
            var r = typeof e;
            return t = t ?? kR,
            !!t && (r == "number" || r != "symbol" && BR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        $p.exports = jR
    }
    );
    var Pn = u((k5,Qp)=>{
        var zR = 9007199254740991;
        function KR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zR
        }
        Qp.exports = KR
    }
    );
    var Jp = u((B5,Zp)=>{
        var YR = _t()
          , $R = Pn()
          , QR = ft()
          , ZR = "[object Arguments]"
          , JR = "[object Array]"
          , eC = "[object Boolean]"
          , tC = "[object Date]"
          , rC = "[object Error]"
          , nC = "[object Function]"
          , iC = "[object Map]"
          , oC = "[object Number]"
          , aC = "[object Object]"
          , sC = "[object RegExp]"
          , uC = "[object Set]"
          , cC = "[object String]"
          , lC = "[object WeakMap]"
          , fC = "[object ArrayBuffer]"
          , dC = "[object DataView]"
          , pC = "[object Float32Array]"
          , vC = "[object Float64Array]"
          , gC = "[object Int8Array]"
          , hC = "[object Int16Array]"
          , EC = "[object Int32Array]"
          , yC = "[object Uint8Array]"
          , mC = "[object Uint8ClampedArray]"
          , _C = "[object Uint16Array]"
          , TC = "[object Uint32Array]"
          , ge = {};
        ge[pC] = ge[vC] = ge[gC] = ge[hC] = ge[EC] = ge[yC] = ge[mC] = ge[_C] = ge[TC] = !0;
        ge[ZR] = ge[JR] = ge[fC] = ge[eC] = ge[dC] = ge[tC] = ge[rC] = ge[nC] = ge[iC] = ge[oC] = ge[aC] = ge[sC] = ge[uC] = ge[cC] = ge[lC] = !1;
        function bC(e) {
            return QR(e) && $R(e.length) && !!ge[YR(e)]
        }
        Zp.exports = bC
    }
    );
    var tv = u((j5,ev)=>{
        function IC(e) {
            return function(t) {
                return e(t)
            }
        }
        ev.exports = IC
    }
    );
    var nv = u((qr,Zt)=>{
        var OC = Oo()
          , rv = typeof qr == "object" && qr && !qr.nodeType && qr
          , Mr = rv && typeof Zt == "object" && Zt && !Zt.nodeType && Zt
          , AC = Mr && Mr.exports === rv
          , ea = AC && OC.process
          , xC = function() {
            try {
                var e = Mr && Mr.require && Mr.require("util").types;
                return e || ea && ea.binding && ea.binding("util")
            } catch {}
        }();
        Zt.exports = xC
    }
    );
    var qn = u((z5,av)=>{
        var SC = Jp()
          , wC = tv()
          , iv = nv()
          , ov = iv && iv.isTypedArray
          , RC = ov ? wC(ov) : SC;
        av.exports = RC
    }
    );
    var ta = u((K5,sv)=>{
        var CC = Up()
          , LC = Nr()
          , NC = Oe()
          , PC = Ln()
          , qC = Nn()
          , MC = qn()
          , DC = Object.prototype
          , FC = DC.hasOwnProperty;
        function GC(e, t) {
            var r = NC(e)
              , n = !r && LC(e)
              , i = !r && !n && PC(e)
              , o = !r && !n && !i && MC(e)
              , a = r || n || i || o
              , s = a ? CC(e.length, String) : []
              , c = s.length;
            for (var f in e)
                (t || FC.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || qC(f, c))) && s.push(f);
            return s
        }
        sv.exports = GC
    }
    );
    var Mn = u((Y5,uv)=>{
        var UC = Object.prototype;
        function VC(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || UC;
            return e === r
        }
        uv.exports = VC
    }
    );
    var lv = u(($5,cv)=>{
        var HC = Ao()
          , WC = HC(Object.keys, Object);
        cv.exports = WC
    }
    );
    var Dn = u((Q5,fv)=>{
        var XC = Mn()
          , kC = lv()
          , BC = Object.prototype
          , jC = BC.hasOwnProperty;
        function zC(e) {
            if (!XC(e))
                return kC(e);
            var t = [];
            for (var r in Object(e))
                jC.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        fv.exports = zC
    }
    );
    var Lt = u((Z5,dv)=>{
        var KC = Bo()
          , YC = Pn();
        function $C(e) {
            return e != null && YC(e.length) && !KC(e)
        }
        dv.exports = $C
    }
    );
    var Dr = u((J5,pv)=>{
        var QC = ta()
          , ZC = Dn()
          , JC = Lt();
        function eL(e) {
            return JC(e) ? QC(e) : ZC(e)
        }
        pv.exports = eL
    }
    );
    var gv = u((ek,vv)=>{
        var tL = Qo()
          , rL = Jo()
          , nL = Dr();
        function iL(e) {
            return tL(e, nL, rL)
        }
        vv.exports = iL
    }
    );
    var yv = u((tk,Ev)=>{
        var hv = gv()
          , oL = 1
          , aL = Object.prototype
          , sL = aL.hasOwnProperty;
        function uL(e, t, r, n, i, o) {
            var a = r & oL
              , s = hv(e)
              , c = s.length
              , f = hv(t)
              , p = f.length;
            if (c != p && !a)
                return !1;
            for (var d = c; d--; ) {
                var g = s[d];
                if (!(a ? g in t : sL.call(t, g)))
                    return !1
            }
            var h = o.get(e)
              , y = o.get(t);
            if (h && y)
                return h == t && y == e;
            var _ = !0;
            o.set(e, t),
            o.set(t, e);
            for (var L = a; ++d < c; ) {
                g = s[d];
                var A = e[g]
                  , S = t[g];
                if (n)
                    var I = a ? n(S, A, g, t, e, o) : n(A, S, g, e, t, o);
                if (!(I === void 0 ? A === S || i(A, S, r, n, o) : I)) {
                    _ = !1;
                    break
                }
                L || (L = g == "constructor")
            }
            if (_ && !L) {
                var R = e.constructor
                  , C = t.constructor;
                R != C && "constructor"in e && "constructor"in t && !(typeof R == "function" && R instanceof R && typeof C == "function" && C instanceof C) && (_ = !1)
            }
            return o.delete(e),
            o.delete(t),
            _
        }
        Ev.exports = uL
    }
    );
    var _v = u((rk,mv)=>{
        var cL = Tt()
          , lL = Ke()
          , fL = cL(lL, "DataView");
        mv.exports = fL
    }
    );
    var bv = u((nk,Tv)=>{
        var dL = Tt()
          , pL = Ke()
          , vL = dL(pL, "Promise");
        Tv.exports = vL
    }
    );
    var Ov = u((ik,Iv)=>{
        var gL = Tt()
          , hL = Ke()
          , EL = gL(hL, "Set");
        Iv.exports = EL
    }
    );
    var ra = u((ok,Av)=>{
        var yL = Tt()
          , mL = Ke()
          , _L = yL(mL, "WeakMap");
        Av.exports = _L
    }
    );
    var Fn = u((ak,Nv)=>{
        var na = _v()
          , ia = Sn()
          , oa = bv()
          , aa = Ov()
          , sa = ra()
          , Lv = _t()
          , Jt = zo()
          , xv = "[object Map]"
          , TL = "[object Object]"
          , Sv = "[object Promise]"
          , wv = "[object Set]"
          , Rv = "[object WeakMap]"
          , Cv = "[object DataView]"
          , bL = Jt(na)
          , IL = Jt(ia)
          , OL = Jt(oa)
          , AL = Jt(aa)
          , xL = Jt(sa)
          , Nt = Lv;
        (na && Nt(new na(new ArrayBuffer(1))) != Cv || ia && Nt(new ia) != xv || oa && Nt(oa.resolve()) != Sv || aa && Nt(new aa) != wv || sa && Nt(new sa) != Rv) && (Nt = function(e) {
            var t = Lv(e)
              , r = t == TL ? e.constructor : void 0
              , n = r ? Jt(r) : "";
            if (n)
                switch (n) {
                case bL:
                    return Cv;
                case IL:
                    return xv;
                case OL:
                    return Sv;
                case AL:
                    return wv;
                case xL:
                    return Rv
                }
            return t
        }
        );
        Nv.exports = Nt
    }
    );
    var Vv = u((sk,Uv)=>{
        var ua = Ko()
          , SL = Yo()
          , wL = Rp()
          , RL = yv()
          , Pv = Fn()
          , qv = Oe()
          , Mv = Ln()
          , CL = qn()
          , LL = 1
          , Dv = "[object Arguments]"
          , Fv = "[object Array]"
          , Gn = "[object Object]"
          , NL = Object.prototype
          , Gv = NL.hasOwnProperty;
        function PL(e, t, r, n, i, o) {
            var a = qv(e)
              , s = qv(t)
              , c = a ? Fv : Pv(e)
              , f = s ? Fv : Pv(t);
            c = c == Dv ? Gn : c,
            f = f == Dv ? Gn : f;
            var p = c == Gn
              , d = f == Gn
              , g = c == f;
            if (g && Mv(e)) {
                if (!Mv(t))
                    return !1;
                a = !0,
                p = !1
            }
            if (g && !p)
                return o || (o = new ua),
                a || CL(e) ? SL(e, t, r, n, i, o) : wL(e, t, c, r, n, i, o);
            if (!(r & LL)) {
                var h = p && Gv.call(e, "__wrapped__")
                  , y = d && Gv.call(t, "__wrapped__");
                if (h || y) {
                    var _ = h ? e.value() : e
                      , L = y ? t.value() : t;
                    return o || (o = new ua),
                    i(_, L, r, n, o)
                }
            }
            return g ? (o || (o = new ua),
            RL(e, t, r, n, i, o)) : !1
        }
        Uv.exports = PL
    }
    );
    var ca = u((uk,Xv)=>{
        var qL = Vv()
          , Hv = ft();
        function Wv(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Hv(e) && !Hv(t) ? e !== e && t !== t : qL(e, t, r, n, Wv, i)
        }
        Xv.exports = Wv
    }
    );
    var Bv = u((ck,kv)=>{
        var ML = Ko()
          , DL = ca()
          , FL = 1
          , GL = 2;
        function UL(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var c = s[0]
                  , f = e[c]
                  , p = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e))
                        return !1
                } else {
                    var d = new ML;
                    if (n)
                        var g = n(f, p, c, e, t, d);
                    if (!(g === void 0 ? DL(p, f, FL | GL, n, d) : g))
                        return !1
                }
            }
            return !0
        }
        kv.exports = UL
    }
    );
    var la = u((lk,jv)=>{
        var VL = it();
        function HL(e) {
            return e === e && !VL(e)
        }
        jv.exports = HL
    }
    );
    var Kv = u((fk,zv)=>{
        var WL = la()
          , XL = Dr();
        function kL(e) {
            for (var t = XL(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, WL(i)]
            }
            return t
        }
        zv.exports = kL
    }
    );
    var fa = u((dk,Yv)=>{
        function BL(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Yv.exports = BL
    }
    );
    var Qv = u((pk,$v)=>{
        var jL = Bv()
          , zL = Kv()
          , KL = fa();
        function YL(e) {
            var t = zL(e);
            return t.length == 1 && t[0][2] ? KL(t[0][0], t[0][1]) : function(r) {
                return r === e || jL(r, e, t)
            }
        }
        $v.exports = YL
    }
    );
    var Fr = u((vk,Zv)=>{
        var $L = _t()
          , QL = ft()
          , ZL = "[object Symbol]";
        function JL(e) {
            return typeof e == "symbol" || QL(e) && $L(e) == ZL
        }
        Zv.exports = JL
    }
    );
    var Un = u((gk,Jv)=>{
        var eN = Oe()
          , tN = Fr()
          , rN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , nN = /^\w*$/;
        function iN(e, t) {
            if (eN(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || tN(e) ? !0 : nN.test(e) || !rN.test(e) || t != null && e in Object(t)
        }
        Jv.exports = iN
    }
    );
    var rg = u((hk,tg)=>{
        var eg = wn()
          , oN = "Expected a function";
        function da(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(oN);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (da.Cache || eg),
            r
        }
        da.Cache = eg;
        tg.exports = da
    }
    );
    var ig = u((Ek,ng)=>{
        var aN = rg()
          , sN = 500;
        function uN(e) {
            var t = aN(e, function(n) {
                return r.size === sN && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        ng.exports = uN
    }
    );
    var ag = u((yk,og)=>{
        var cN = ig()
          , lN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , fN = /\\(\\)?/g
          , dN = cN(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(lN, function(r, n, i, o) {
                t.push(i ? o.replace(fN, "$1") : n || r)
            }),
            t
        });
        og.exports = dN
    }
    );
    var pa = u((mk,sg)=>{
        function pN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        sg.exports = pN
    }
    );
    var pg = u((_k,dg)=>{
        var ug = Xt()
          , vN = pa()
          , gN = Oe()
          , hN = Fr()
          , EN = 1 / 0
          , cg = ug ? ug.prototype : void 0
          , lg = cg ? cg.toString : void 0;
        function fg(e) {
            if (typeof e == "string")
                return e;
            if (gN(e))
                return vN(e, fg) + "";
            if (hN(e))
                return lg ? lg.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -EN ? "-0" : t
        }
        dg.exports = fg
    }
    );
    var gg = u((Tk,vg)=>{
        var yN = pg();
        function mN(e) {
            return e == null ? "" : yN(e)
        }
        vg.exports = mN
    }
    );
    var Gr = u((bk,hg)=>{
        var _N = Oe()
          , TN = Un()
          , bN = ag()
          , IN = gg();
        function ON(e, t) {
            return _N(e) ? e : TN(e, t) ? [e] : bN(IN(e))
        }
        hg.exports = ON
    }
    );
    var er = u((Ik,Eg)=>{
        var AN = Fr()
          , xN = 1 / 0;
        function SN(e) {
            if (typeof e == "string" || AN(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -xN ? "-0" : t
        }
        Eg.exports = SN
    }
    );
    var Vn = u((Ok,yg)=>{
        var wN = Gr()
          , RN = er();
        function CN(e, t) {
            t = wN(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[RN(t[r++])];
            return r && r == n ? e : void 0
        }
        yg.exports = CN
    }
    );
    var Hn = u((Ak,mg)=>{
        var LN = Vn();
        function NN(e, t, r) {
            var n = e == null ? void 0 : LN(e, t);
            return n === void 0 ? r : n
        }
        mg.exports = NN
    }
    );
    var Tg = u((xk,_g)=>{
        function PN(e, t) {
            return e != null && t in Object(e)
        }
        _g.exports = PN
    }
    );
    var Ig = u((Sk,bg)=>{
        var qN = Gr()
          , MN = Nr()
          , DN = Oe()
          , FN = Nn()
          , GN = Pn()
          , UN = er();
        function VN(e, t, r) {
            t = qN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = UN(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && GN(i) && FN(a, i) && (DN(e) || MN(e)))
        }
        bg.exports = VN
    }
    );
    var Ag = u((wk,Og)=>{
        var HN = Tg()
          , WN = Ig();
        function XN(e, t) {
            return e != null && WN(e, t, HN)
        }
        Og.exports = XN
    }
    );
    var Sg = u((Rk,xg)=>{
        var kN = ca()
          , BN = Hn()
          , jN = Ag()
          , zN = Un()
          , KN = la()
          , YN = fa()
          , $N = er()
          , QN = 1
          , ZN = 2;
        function JN(e, t) {
            return zN(e) && KN(t) ? YN($N(e), t) : function(r) {
                var n = BN(r, e);
                return n === void 0 && n === t ? jN(r, e) : kN(t, n, QN | ZN)
            }
        }
        xg.exports = JN
    }
    );
    var Wn = u((Ck,wg)=>{
        function eP(e) {
            return e
        }
        wg.exports = eP
    }
    );
    var va = u((Lk,Rg)=>{
        function tP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Rg.exports = tP
    }
    );
    var Lg = u((Nk,Cg)=>{
        var rP = Vn();
        function nP(e) {
            return function(t) {
                return rP(t, e)
            }
        }
        Cg.exports = nP
    }
    );
    var Pg = u((Pk,Ng)=>{
        var iP = va()
          , oP = Lg()
          , aP = Un()
          , sP = er();
        function uP(e) {
            return aP(e) ? iP(sP(e)) : oP(e)
        }
        Ng.exports = uP
    }
    );
    var bt = u((qk,qg)=>{
        var cP = Qv()
          , lP = Sg()
          , fP = Wn()
          , dP = Oe()
          , pP = Pg();
        function vP(e) {
            return typeof e == "function" ? e : e == null ? fP : typeof e == "object" ? dP(e) ? lP(e[0], e[1]) : cP(e) : pP(e)
        }
        qg.exports = vP
    }
    );
    var ga = u((Mk,Mg)=>{
        var gP = bt()
          , hP = Lt()
          , EP = Dr();
        function yP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!hP(t)) {
                    var o = gP(r, 3);
                    t = EP(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Mg.exports = yP
    }
    );
    var ha = u((Dk,Dg)=>{
        function mP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Dg.exports = mP
    }
    );
    var Gg = u((Fk,Fg)=>{
        var _P = /\s/;
        function TP(e) {
            for (var t = e.length; t-- && _P.test(e.charAt(t)); )
                ;
            return t
        }
        Fg.exports = TP
    }
    );
    var Vg = u((Gk,Ug)=>{
        var bP = Gg()
          , IP = /^\s+/;
        function OP(e) {
            return e && e.slice(0, bP(e) + 1).replace(IP, "")
        }
        Ug.exports = OP
    }
    );
    var Xn = u((Uk,Xg)=>{
        var AP = Vg()
          , Hg = it()
          , xP = Fr()
          , Wg = 0 / 0
          , SP = /^[-+]0x[0-9a-f]+$/i
          , wP = /^0b[01]+$/i
          , RP = /^0o[0-7]+$/i
          , CP = parseInt;
        function LP(e) {
            if (typeof e == "number")
                return e;
            if (xP(e))
                return Wg;
            if (Hg(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Hg(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = AP(e);
            var r = wP.test(e);
            return r || RP.test(e) ? CP(e.slice(2), r ? 2 : 8) : SP.test(e) ? Wg : +e
        }
        Xg.exports = LP
    }
    );
    var jg = u((Vk,Bg)=>{
        var NP = Xn()
          , kg = 1 / 0
          , PP = 17976931348623157e292;
        function qP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = NP(e),
            e === kg || e === -kg) {
                var t = e < 0 ? -1 : 1;
                return t * PP
            }
            return e === e ? e : 0
        }
        Bg.exports = qP
    }
    );
    var Ea = u((Hk,zg)=>{
        var MP = jg();
        function DP(e) {
            var t = MP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        zg.exports = DP
    }
    );
    var Yg = u((Wk,Kg)=>{
        var FP = ha()
          , GP = bt()
          , UP = Ea()
          , VP = Math.max;
        function HP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : UP(r);
            return i < 0 && (i = VP(n + i, 0)),
            FP(e, GP(t, 3), i)
        }
        Kg.exports = HP
    }
    );
    var ya = u((Xk,$g)=>{
        var WP = ga()
          , XP = Yg()
          , kP = WP(XP);
        $g.exports = kP
    }
    );
    var Jg = {};
    Me(Jg, {
        ELEMENT_MATCHES: ()=>BP,
        FLEX_PREFIXED: ()=>ma,
        IS_BROWSER_ENV: ()=>$e,
        TRANSFORM_PREFIXED: ()=>It,
        TRANSFORM_STYLE_PREFIXED: ()=>Bn,
        withBrowser: ()=>kn
    });
    var Zg, $e, kn, BP, ma, It, Qg, Bn, jn = he(()=>{
        "use strict";
        Zg = ue(ya()),
        $e = typeof window < "u",
        kn = (e,t)=>$e ? e() : t,
        BP = kn(()=>(0,
        Zg.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e=>e in Element.prototype)),
        ma = kn(()=>{
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        It = kn(()=>{
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        Qg = It.split("transform")[0],
        Bn = Qg ? Qg + "TransformStyle" : "transformStyle"
    }
    );
    var _a = u((kk,ih)=>{
        var jP = 4
          , zP = .001
          , KP = 1e-7
          , YP = 10
          , Ur = 11
          , zn = 1 / (Ur - 1)
          , $P = typeof Float32Array == "function";
        function eh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function th(e, t) {
            return 3 * t - 6 * e
        }
        function rh(e) {
            return 3 * e
        }
        function Kn(e, t, r) {
            return ((eh(t, r) * e + th(t, r)) * e + rh(t)) * e
        }
        function nh(e, t, r) {
            return 3 * eh(t, r) * e * e + 2 * th(t, r) * e + rh(t)
        }
        function QP(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = Kn(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > KP && ++s < YP);
            return a
        }
        function ZP(e, t, r, n) {
            for (var i = 0; i < jP; ++i) {
                var o = nh(t, r, n);
                if (o === 0)
                    return t;
                var a = Kn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        ih.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = $P ? new Float32Array(Ur) : new Array(Ur);
            if (t !== r || n !== i)
                for (var a = 0; a < Ur; ++a)
                    o[a] = Kn(a * zn, t, n);
            function s(c) {
                for (var f = 0, p = 1, d = Ur - 1; p !== d && o[p] <= c; ++p)
                    f += zn;
                --p;
                var g = (c - o[p]) / (o[p + 1] - o[p])
                  , h = f + g * zn
                  , y = nh(h, t, n);
                return y >= zP ? ZP(c, h, t, n) : y === 0 ? h : QP(c, f, f + zn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : Kn(s(f), r, i)
            }
        }
    }
    );
    var Hr = {};
    Me(Hr, {
        bounce: ()=>qq,
        bouncePast: ()=>Mq,
        ease: ()=>JP,
        easeIn: ()=>eq,
        easeInOut: ()=>rq,
        easeOut: ()=>tq,
        inBack: ()=>Aq,
        inCirc: ()=>Tq,
        inCubic: ()=>aq,
        inElastic: ()=>wq,
        inExpo: ()=>yq,
        inOutBack: ()=>Sq,
        inOutCirc: ()=>Iq,
        inOutCubic: ()=>uq,
        inOutElastic: ()=>Cq,
        inOutExpo: ()=>_q,
        inOutQuad: ()=>oq,
        inOutQuart: ()=>fq,
        inOutQuint: ()=>vq,
        inOutSine: ()=>Eq,
        inQuad: ()=>nq,
        inQuart: ()=>cq,
        inQuint: ()=>dq,
        inSine: ()=>gq,
        outBack: ()=>xq,
        outBounce: ()=>Oq,
        outCirc: ()=>bq,
        outCubic: ()=>sq,
        outElastic: ()=>Rq,
        outExpo: ()=>mq,
        outQuad: ()=>iq,
        outQuart: ()=>lq,
        outQuint: ()=>pq,
        outSine: ()=>hq,
        swingFrom: ()=>Nq,
        swingFromTo: ()=>Lq,
        swingTo: ()=>Pq
    });
    function nq(e) {
        return Math.pow(e, 2)
    }
    function iq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function oq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function aq(e) {
        return Math.pow(e, 3)
    }
    function sq(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function uq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function cq(e) {
        return Math.pow(e, 4)
    }
    function lq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function fq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function dq(e) {
        return Math.pow(e, 5)
    }
    function pq(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function vq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function gq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function hq(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function Eq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function yq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function mq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function _q(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function Tq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function bq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function Iq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function Oq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Aq(e) {
        let t = dt;
        return e * e * ((t + 1) * e - t)
    }
    function xq(e) {
        let t = dt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Sq(e) {
        let t = dt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function wq(e) {
        let t = dt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function Rq(e) {
        let t = dt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function Cq(e) {
        let t = dt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function Lq(e) {
        let t = dt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function Nq(e) {
        let t = dt;
        return e * e * ((t + 1) * e - t)
    }
    function Pq(e) {
        let t = dt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function qq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Mq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Vr, dt, JP, eq, tq, rq, Ta = he(()=>{
        "use strict";
        Vr = ue(_a()),
        dt = 1.70158,
        JP = (0,
        Vr.default)(.25, .1, .25, 1),
        eq = (0,
        Vr.default)(.42, 0, 1, 1),
        tq = (0,
        Vr.default)(0, 0, .58, 1),
        rq = (0,
        Vr.default)(.42, 0, .58, 1)
    }
    );
    var ah = {};
    Me(ah, {
        applyEasing: ()=>Fq,
        createBezierEasing: ()=>Dq,
        optimizeFloat: ()=>Wr
    });
    function Wr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function Dq(e) {
        return (0,
        oh.default)(...e)
    }
    function Fq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Wr(r ? t > 0 ? r(t) : t : t > 0 && e && Hr[e] ? Hr[e](t) : t)
    }
    var oh, ba = he(()=>{
        "use strict";
        Ta();
        oh = ue(_a())
    }
    );
    var ch = {};
    Me(ch, {
        createElementState: ()=>uh,
        ixElements: ()=>Qq,
        mergeActionState: ()=>Ia
    });
    function uh(e, t, r, n, i) {
        let o = r === Gq ? (0,
        tr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        tr.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function Ia(e, t, r, n, i) {
        let o = Jq(i);
        return (0,
        tr.mergeIn)(e, [t, $q, r], n, o)
    }
    function Jq(e) {
        let {config: t} = e;
        return Zq.reduce((r,n)=>{
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var tr, jk, Gq, zk, Uq, Vq, Hq, Wq, Xq, kq, Bq, jq, zq, Kq, Yq, sh, $q, Qq, Zq, lh = he(()=>{
        "use strict";
        tr = ue(jt());
        De();
        ({HTML_ELEMENT: jk, PLAIN_OBJECT: Gq, ABSTRACT_NODE: zk, CONFIG_X_VALUE: Uq, CONFIG_Y_VALUE: Vq, CONFIG_Z_VALUE: Hq, CONFIG_VALUE: Wq, CONFIG_X_UNIT: Xq, CONFIG_Y_UNIT: kq, CONFIG_Z_UNIT: Bq, CONFIG_UNIT: jq} = we),
        {IX2_SESSION_STOPPED: zq, IX2_INSTANCE_ADDED: Kq, IX2_ELEMENT_STATE_CHANGED: Yq} = be,
        sh = {},
        $q = "refState",
        Qq = (e=sh,t={})=>{
            switch (t.type) {
            case zq:
                return sh;
            case Kq:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , c = e;
                    return (0,
                    tr.getIn)(c, [r, n]) !== n && (c = uh(c, n, a, r, o)),
                    Ia(c, r, s, i, o)
                }
            case Yq:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Ia(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        Zq = [[Uq, Xq], [Vq, kq], [Hq, Bq], [Wq, jq]]
    }
    );
    var fh = u(Ae=>{
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var eM = e=>e.value;
        Ae.getPluginConfig = eM;
        var tM = (e,t)=>{
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Ae.getPluginDuration = tM;
        var rM = e=>e || {
            value: 0
        };
        Ae.getPluginOrigin = rM;
        var nM = e=>({
            value: e.value
        });
        Ae.getPluginDestination = nM;
        var iM = e=>{
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Ae.createPluginInstance = iM;
        var oM = (e,t,r)=>{
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Ae.renderPlugin = oM;
        var aM = e=>{
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Ae.clearPlugin = aM
    }
    );
    var ph = u(xe=>{
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var sM = e=>document.querySelector(`[data-w-id="${e}"]`)
          , uM = ()=>window.Webflow.require("spline")
          , cM = (e,t)=>e.filter(r=>!t.includes(r))
          , lM = (e,t)=>e.value[t];
        xe.getPluginConfig = lM;
        var fM = ()=>null;
        xe.getPluginDuration = fM;
        var dh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , dM = (e,t)=>{
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = cM(n, o);
                return a.length ? a.reduce((c,f)=>(c[f] = dh[f],
                c), e) : e
            }
            return n.reduce((o,a)=>(o[a] = dh[a],
            o), {})
        }
        ;
        xe.getPluginOrigin = dM;
        var pM = e=>e.value;
        xe.getPluginDestination = pM;
        var vM = (e,t)=>{
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? sM(i) : null
        }
        ;
        xe.createPluginInstance = vM;
        var gM = (e,t,r)=>{
            let n = uM()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s=>{
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let c = o && s.findObjectById(o);
                if (!c)
                    return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (c.position.x = f.positionX),
                f.positionY != null && (c.position.y = f.positionY),
                f.positionZ != null && (c.position.z = f.positionZ),
                f.rotationX != null && (c.rotation.x = f.rotationX),
                f.rotationY != null && (c.rotation.y = f.rotationY),
                f.rotationZ != null && (c.rotation.z = f.rotationZ),
                f.scaleX != null && (c.scale.x = f.scaleX),
                f.scaleY != null && (c.scale.y = f.scaleY),
                f.scaleZ != null && (c.scale.z = f.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
        ;
        xe.renderPlugin = gM;
        var hM = ()=>null;
        xe.clearPlugin = hM
    }
    );
    var gh = u(Ie=>{
        "use strict";
        Object.defineProperty(Ie, "__esModule", {
            value: !0
        });
        Ie.getPluginOrigin = Ie.getPluginDuration = Ie.getPluginDestination = Ie.getPluginConfig = Ie.createPluginInstance = Ie.clearPlugin = void 0;
        Ie.normalizeColor = vh;
        Ie.renderPlugin = void 0;
        function vh(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let a = o.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16),
                r = parseInt(a[1] + a[1], 16),
                n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16),
                r = parseInt(a.substring(2, 4), 16),
                n = parseInt(a.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10),
                i = parseFloat(a[3])
            } else if (o.startsWith("rgb")) {
                let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10)
            } else if (o.startsWith("hsla")) {
                let a = o.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , s = parseFloat(a[0])
                  , c = parseFloat(a[1].replace("%", "")) / 100
                  , f = parseFloat(a[2].replace("%", "")) / 100;
                i = parseFloat(a[3]);
                let p = (1 - Math.abs(2 * f - 1)) * c, d = p * (1 - Math.abs(s / 60 % 2 - 1)), g = f - p / 2, h, y, _;
                s >= 0 && s < 60 ? (h = p,
                y = d,
                _ = 0) : s >= 60 && s < 120 ? (h = d,
                y = p,
                _ = 0) : s >= 120 && s < 180 ? (h = 0,
                y = p,
                _ = d) : s >= 180 && s < 240 ? (h = 0,
                y = d,
                _ = p) : s >= 240 && s < 300 ? (h = d,
                y = 0,
                _ = p) : (h = p,
                y = 0,
                _ = d),
                t = Math.round((h + g) * 255),
                r = Math.round((y + g) * 255),
                n = Math.round((_ + g) * 255)
            } else if (o.startsWith("hsl")) {
                let a = o.match(/hsl\(([^)]+)\)/)[1].split(","), s = parseFloat(a[0]), c = parseFloat(a[1].replace("%", "")) / 100, f = parseFloat(a[2].replace("%", "")) / 100, p = (1 - Math.abs(2 * f - 1)) * c, d = p * (1 - Math.abs(s / 60 % 2 - 1)), g = f - p / 2, h, y, _;
                s >= 0 && s < 60 ? (h = p,
                y = d,
                _ = 0) : s >= 60 && s < 120 ? (h = d,
                y = p,
                _ = 0) : s >= 120 && s < 180 ? (h = 0,
                y = p,
                _ = d) : s >= 180 && s < 240 ? (h = 0,
                y = d,
                _ = p) : s >= 240 && s < 300 ? (h = d,
                y = 0,
                _ = p) : (h = p,
                y = 0,
                _ = d),
                t = Math.round((h + g) * 255),
                r = Math.round((y + g) * 255),
                n = Math.round((_ + g) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
            {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var EM = (e,t)=>e.value[t];
        Ie.getPluginConfig = EM;
        var yM = ()=>null;
        Ie.getPluginDuration = yM;
        var mM = (e,t)=>{
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return vh(i)
        }
        ;
        Ie.getPluginOrigin = mM;
        var _M = e=>e.value;
        Ie.getPluginDestination = _M;
        var TM = ()=>null;
        Ie.createPluginInstance = TM;
        var bM = (e,t,r)=>{
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: c, blue: f, alpha: p} = o, d;
            a != null && (d = a + i),
            s != null && f != null && c != null && p != null && (d = `rgba(${s}, ${c}, ${f}, ${p})`),
            d != null && document.documentElement.style.setProperty(n, d)
        }
        ;
        Ie.renderPlugin = bM;
        var IM = (e,t)=>{
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        Ie.clearPlugin = IM
    }
    );
    var hh = u(Yn=>{
        "use strict";
        var Aa = un().default;
        Object.defineProperty(Yn, "__esModule", {
            value: !0
        });
        Yn.pluginMethodMap = void 0;
        var Oa = (De(),
        Je(bf))
          , OM = Aa(fh())
          , AM = Aa(ph())
          , xM = Aa(gh())
          , Qk = Yn.pluginMethodMap = new Map([[Oa.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...OM
        }], [Oa.ActionTypeConsts.PLUGIN_SPLINE, {
            ...AM
        }], [Oa.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...xM
        }]])
    }
    );
    var Eh = {};
    Me(Eh, {
        clearPlugin: ()=>La,
        createPluginInstance: ()=>wM,
        getPluginConfig: ()=>Sa,
        getPluginDestination: ()=>Ra,
        getPluginDuration: ()=>SM,
        getPluginOrigin: ()=>wa,
        isPluginType: ()=>Pt,
        renderPlugin: ()=>Ca
    });
    function Pt(e) {
        return xa.pluginMethodMap.has(e)
    }
    var xa, qt, Sa, wa, SM, Ra, wM, Ca, La, Na = he(()=>{
        "use strict";
        jn();
        xa = ue(hh());
        qt = e=>t=>{
            if (!$e)
                return ()=>null;
            let r = xa.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        Sa = qt("getPluginConfig"),
        wa = qt("getPluginOrigin"),
        SM = qt("getPluginDuration"),
        Ra = qt("getPluginDestination"),
        wM = qt("createPluginInstance"),
        Ca = qt("renderPlugin"),
        La = qt("clearPlugin")
    }
    );
    var mh = u((eB,yh)=>{
        function RM(e, t) {
            return e == null || e !== e ? t : e
        }
        yh.exports = RM
    }
    );
    var Th = u((tB,_h)=>{
        function CM(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        _h.exports = CM
    }
    );
    var Ih = u((rB,bh)=>{
        function LM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++i];
                    if (r(o[c], c, o) === !1)
                        break
                }
                return t
            }
        }
        bh.exports = LM
    }
    );
    var Ah = u((nB,Oh)=>{
        var NM = Ih()
          , PM = NM();
        Oh.exports = PM
    }
    );
    var Pa = u((iB,xh)=>{
        var qM = Ah()
          , MM = Dr();
        function DM(e, t) {
            return e && qM(e, t, MM)
        }
        xh.exports = DM
    }
    );
    var wh = u((oB,Sh)=>{
        var FM = Lt();
        function GM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!FM(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        Sh.exports = GM
    }
    );
    var qa = u((aB,Rh)=>{
        var UM = Pa()
          , VM = wh()
          , HM = VM(UM);
        Rh.exports = HM
    }
    );
    var Lh = u((sB,Ch)=>{
        function WM(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        Ch.exports = WM
    }
    );
    var Ph = u((uB,Nh)=>{
        var XM = Th()
          , kM = qa()
          , BM = bt()
          , jM = Lh()
          , zM = Oe();
        function KM(e, t, r) {
            var n = zM(e) ? XM : jM
              , i = arguments.length < 3;
            return n(e, BM(t, 4), r, i, kM)
        }
        Nh.exports = KM
    }
    );
    var Mh = u((cB,qh)=>{
        var YM = ha()
          , $M = bt()
          , QM = Ea()
          , ZM = Math.max
          , JM = Math.min;
        function e1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = QM(r),
            i = r < 0 ? ZM(n + i, 0) : JM(i, n - 1)),
            YM(e, $M(t, 3), i, !0)
        }
        qh.exports = e1
    }
    );
    var Fh = u((lB,Dh)=>{
        var t1 = ga()
          , r1 = Mh()
          , n1 = t1(r1);
        Dh.exports = n1
    }
    );
    function Gh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function o1(e, t) {
        if (Gh(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!i1.call(t, r[i]) || !Gh(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var i1, Ma, Uh = he(()=>{
        "use strict";
        i1 = Object.prototype.hasOwnProperty;
        Ma = o1
    }
    );
    var rE = {};
    Me(rE, {
        cleanupHTMLElement: ()=>rD,
        clearAllStyles: ()=>tD,
        clearObjectCache: ()=>b1,
        getActionListProgress: ()=>iD,
        getAffectedElements: ()=>Va,
        getComputedStyle: ()=>C1,
        getDestinationValues: ()=>F1,
        getElementId: ()=>x1,
        getInstanceId: ()=>O1,
        getInstanceOrigin: ()=>P1,
        getItemConfigByKey: ()=>D1,
        getMaxDurationItemIndex: ()=>tE,
        getNamespacedParameterId: ()=>sD,
        getRenderType: ()=>Zh,
        getStyleProp: ()=>G1,
        mediaQueriesEqual: ()=>cD,
        observeStore: ()=>R1,
        reduceListToGroup: ()=>oD,
        reifyState: ()=>S1,
        renderHTMLElement: ()=>U1,
        shallowEqual: ()=>Ma,
        shouldAllowMediaQuery: ()=>uD,
        shouldNamespaceEventParameter: ()=>aD,
        stringifyTarget: ()=>lD
    });
    function b1() {
        $n.clear()
    }
    function O1() {
        return "i" + I1++
    }
    function x1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + A1++
    }
    function S1({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        ei.default)(e, (a,s)=>{
            let {eventTypeId: c} = s;
            return a[c] || (a[c] = {}),
            a[c][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a=>a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function R1({store: e, select: t, onChange: r, comparator: n=w1}) {
        let {getState: i, subscribe: o} = e
          , a = o(c)
          , s = t(i());
        function c() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, s) || (s = f,
            r(s, e))
        }
        return a
    }
    function Wh(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function Va({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce((q,b)=>q.concat(Va({
                config: {
                    target: b
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: c, getChildElements: f, getSiblingElements: p, matchSelector: d, elementContains: g, isSiblingNode: h} = i
          , {target: y} = e;
        if (!y)
            return [];
        let {id: _, objectId: L, selector: A, selectorGuids: S, appliesTo: I, useEventTarget: R} = Wh(y);
        if (L)
            return [$n.has(L) ? $n.get(L) : $n.set(L, {}).get(L)];
        if (I === Vo.PAGE) {
            let q = a(_);
            return q ? [q] : []
        }
        let w = (t?.action?.config?.affectedElements ?? {})[_ || A] || {}, V = !!(w.id || w.selector), X, B, Y, te = t && s(Wh(t.target));
        if (V ? (X = w.limitAffectedElements,
        B = te,
        Y = s(w)) : B = Y = s({
            id: _,
            selector: A,
            selectorGuids: S
        }),
        t && R) {
            let q = r && (Y || R === !0) ? [r] : c(te);
            if (Y) {
                if (R === m1)
                    return c(Y).filter(b=>q.some(N=>g(b, N)));
                if (R === Vh)
                    return c(Y).filter(b=>q.some(N=>g(N, b)));
                if (R === Hh)
                    return c(Y).filter(b=>q.some(N=>h(N, b)))
            }
            return q
        }
        return B == null || Y == null ? [] : $e && n ? c(Y).filter(q=>n.contains(q)) : X === Vh ? c(B, Y) : X === y1 ? f(c(B)).filter(d(Y)) : X === Hh ? p(c(B)).filter(d(Y)) : c(Y)
    }
    function C1({element: e, actionItem: t}) {
        if (!$e)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case ar:
        case sr:
        case ur:
        case cr:
        case ri:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function P1(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (Pt(a))
            return wa(a)(t[a], n);
        switch (n.actionTypeId) {
        case nr:
        case ir:
        case or:
        case jr:
            return t[n.actionTypeId] || Ha[n.actionTypeId];
        case zr:
            return L1(t[n.actionTypeId], n.config.filters);
        case Kr:
            return N1(t[n.actionTypeId], n.config.fontVariations);
        case Yh:
            return {
                value: (0,
                pt.default)(parseFloat(o(e, Zn)), 1)
            };
        case ar:
            {
                let s = o(e, ot), c = o(e, at), f, p;
                return n.config.widthUnit === Ot ? f = Xh.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0,
                pt.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === Ot ? p = Xh.test(c) ? parseFloat(c) : parseFloat(r.height) : p = (0,
                pt.default)(parseFloat(c), parseFloat(r.height)),
                {
                    widthValue: f,
                    heightValue: p
                }
            }
        case sr:
        case ur:
        case cr:
            return Z1({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case ri:
            return {
                value: (0,
                pt.default)(o(e, Jn), r.display)
            };
        case T1:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function F1({element: e, actionItem: t, elementApi: r}) {
        if (Pt(t.actionTypeId))
            return Ra(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case nr:
        case ir:
        case or:
        case jr:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case ar:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: c, heightValue: f} = t.config;
                if (!$e)
                    return {
                        widthValue: c,
                        heightValue: f
                    };
                if (a === Ot) {
                    let p = n(e, ot);
                    i(e, ot, ""),
                    c = o(e, "offsetWidth"),
                    i(e, ot, p)
                }
                if (s === Ot) {
                    let p = n(e, at);
                    i(e, at, ""),
                    f = o(e, "offsetHeight"),
                    i(e, at, p)
                }
                return {
                    widthValue: c,
                    heightValue: f
                }
            }
        case sr:
        case ur:
        case cr:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a} = t.config;
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case zr:
            return t.config.filters.reduce(q1, {});
        case Kr:
            return t.config.fontVariations.reduce(M1, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function Zh(e) {
        if (/^TRANSFORM_/.test(e))
            return zh;
        if (/^STYLE_/.test(e))
            return Ga;
        if (/^GENERAL_/.test(e))
            return Fa;
        if (/^PLUGIN_/.test(e))
            return Kh
    }
    function G1(e, t) {
        return e === Ga ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function U1(e, t, r, n, i, o, a, s, c) {
        switch (s) {
        case zh:
            return k1(e, t, r, i, a);
        case Ga:
            return J1(e, t, r, i, o, a);
        case Fa:
            return eD(e, i, a);
        case Kh:
            {
                let {actionTypeId: f} = i;
                if (Pt(f))
                    return Ca(f)(c, t, i)
            }
        }
    }
    function k1(e, t, r, n, i) {
        let o = X1.map(s=>{
            let c = Ha[s]
              , {xValue: f=c.xValue, yValue: p=c.yValue, zValue: d=c.zValue, xUnit: g="", yUnit: h="", zUnit: y=""} = t[s] || {};
            switch (s) {
            case nr:
                return `${u1}(${f}${g}, ${p}${h}, ${d}${y})`;
            case ir:
                return `${c1}(${f}${g}, ${p}${h}, ${d}${y})`;
            case or:
                return `${l1}(${f}${g}) ${f1}(${p}${h}) ${d1}(${d}${y})`;
            case jr:
                return `${p1}(${f}${g}, ${p}${h})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        Mt(e, It, i),
        a(e, It, o),
        z1(n, r) && a(e, Bn, v1)
    }
    function B1(e, t, r, n) {
        let i = (0,
        ei.default)(t, (a,s,c)=>`${a} ${c}(${s}${W1(c, r)})`, "")
          , {setStyle: o} = n;
        Mt(e, Xr, n),
        o(e, Xr, i)
    }
    function j1(e, t, r, n) {
        let i = (0,
        ei.default)(t, (a,s,c)=>(a.push(`"${c}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        Mt(e, kr, n),
        o(e, kr, i)
    }
    function z1({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === nr && n !== void 0 || e === ir && n !== void 0 || e === or && (t !== void 0 || r !== void 0)
    }
    function Q1(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function Z1({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = Ua[t]
          , o = n(e, i)
          , a = Y1.test(o) ? o : r[i]
          , s = Q1($1, a).split(Br);
        return {
            rValue: (0,
            pt.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            pt.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            pt.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            pt.default)(parseFloat(s[3]), 1)
        }
    }
    function J1(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case ar:
            {
                let {widthUnit: s="", heightUnit: c=""} = n.config
                  , {widthValue: f, heightValue: p} = r;
                f !== void 0 && (s === Ot && (s = "px"),
                Mt(e, ot, o),
                a(e, ot, f + s)),
                p !== void 0 && (c === Ot && (c = "px"),
                Mt(e, at, o),
                a(e, at, p + c));
                break
            }
        case zr:
            {
                B1(e, r, n.config, o);
                break
            }
        case Kr:
            {
                j1(e, r, n.config, o);
                break
            }
        case sr:
        case ur:
        case cr:
            {
                let s = Ua[n.actionTypeId]
                  , c = Math.round(r.rValue)
                  , f = Math.round(r.gValue)
                  , p = Math.round(r.bValue)
                  , d = r.aValue;
                Mt(e, s, o),
                a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                Mt(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function eD(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case ri:
            {
                let {value: i} = t.config;
                i === g1 && $e ? n(e, Jn, ma) : n(e, Jn, i);
                return
            }
        }
    }
    function Mt(e, t, r) {
        if (!$e)
            return;
        let n = Qh[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, rr);
        if (!a) {
            o(e, rr, n);
            return
        }
        let s = a.split(Br).map($h);
        s.indexOf(n) === -1 && o(e, rr, s.concat(n).join(Br))
    }
    function Jh(e, t, r) {
        if (!$e)
            return;
        let n = Qh[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, rr);
        !a || a.indexOf(n) === -1 || o(e, rr, a.split(Br).map($h).filter(s=>s !== n).join(Br))
    }
    function tD({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o=>{
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: c} = s
              , f = i[c];
            f && kh({
                actionList: f,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o=>{
            kh({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function kh({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o=>{
            Bh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o=>{
            let {continuousActionGroups: a} = o;
            a.forEach(s=>{
                Bh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function Bh({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i=>{
            let {actionTypeId: o, config: a} = i, s;
            Pt(o) ? s = c=>La(o)(c, i) : s = eE({
                effect: nD,
                actionTypeId: o,
                elementApi: r
            }),
            Va({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function rD(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === ar) {
            let {config: a} = t;
            a.widthUnit === Ot && n(e, ot, ""),
            a.heightUnit === Ot && n(e, at, "")
        }
        i(e, rr) && eE({
            effect: Jh,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function nD(e, t, r) {
        let {setStyle: n} = r;
        Jh(e, t, r),
        n(e, t, ""),
        t === It && n(e, Bn, "")
    }
    function tE(e) {
        let t = 0
          , r = 0;
        return e.forEach((n,i)=>{
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function iD(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach((c,f)=>{
            if (n && f === 0)
                return;
            let {actionItems: p} = c
              , d = p[tE(p)]
              , {config: g, actionTypeId: h} = d;
            i.id === d.id && (s = a + o);
            let y = Zh(h) === Fa ? 0 : g.duration;
            a += g.delay + y
        }
        ),
        a > 0 ? Wr(s / a) : 0
    }
    function oD({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s=>(o.push((0,
        ti.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some(({actionItems: s})=>s.some(a)),
        i && i.some(s=>{
            let {continuousActionGroups: c} = s;
            return c.some(({actionItems: f})=>f.some(a))
        }
        ),
        (0,
        ti.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function aD(e, {basedOn: t}) {
        return e === Ye.SCROLLING_IN_VIEW && (t === nt.ELEMENT || t == null) || e === Ye.MOUSE_MOVE && t === nt.ELEMENT
    }
    function sD(e, t) {
        return e + _1 + t
    }
    function uD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function cD(e, t) {
        return Ma(e && e.sort(), t && t.sort())
    }
    function lD(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Da + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Da + r + Da + n
    }
    var pt, ei, Qn, ti, a1, s1, u1, c1, l1, f1, d1, p1, v1, g1, Zn, Xr, kr, ot, at, jh, h1, E1, Vh, y1, Hh, m1, Jn, rr, Ot, Br, _1, Da, zh, Fa, Ga, Kh, nr, ir, or, jr, Yh, zr, Kr, ar, sr, ur, cr, ri, T1, $h, Ua, Qh, $n, I1, A1, w1, Xh, L1, N1, q1, M1, D1, Ha, V1, H1, W1, X1, K1, Y1, $1, eE, nE = he(()=>{
        "use strict";
        pt = ue(mh()),
        ei = ue(Ph()),
        Qn = ue(Fh()),
        ti = ue(jt());
        De();
        Uh();
        ba();
        Na();
        jn();
        ({BACKGROUND: a1, TRANSFORM: s1, TRANSLATE_3D: u1, SCALE_3D: c1, ROTATE_X: l1, ROTATE_Y: f1, ROTATE_Z: d1, SKEW: p1, PRESERVE_3D: v1, FLEX: g1, OPACITY: Zn, FILTER: Xr, FONT_VARIATION_SETTINGS: kr, WIDTH: ot, HEIGHT: at, BACKGROUND_COLOR: jh, BORDER_COLOR: h1, COLOR: E1, CHILDREN: Vh, IMMEDIATE_CHILDREN: y1, SIBLINGS: Hh, PARENT: m1, DISPLAY: Jn, WILL_CHANGE: rr, AUTO: Ot, COMMA_DELIMITER: Br, COLON_DELIMITER: _1, BAR_DELIMITER: Da, RENDER_TRANSFORM: zh, RENDER_GENERAL: Fa, RENDER_STYLE: Ga, RENDER_PLUGIN: Kh} = we),
        {TRANSFORM_MOVE: nr, TRANSFORM_SCALE: ir, TRANSFORM_ROTATE: or, TRANSFORM_SKEW: jr, STYLE_OPACITY: Yh, STYLE_FILTER: zr, STYLE_FONT_VARIATION: Kr, STYLE_SIZE: ar, STYLE_BACKGROUND_COLOR: sr, STYLE_BORDER: ur, STYLE_TEXT_COLOR: cr, GENERAL_DISPLAY: ri, OBJECT_VALUE: T1} = Ve,
        $h = e=>e.trim(),
        Ua = Object.freeze({
            [sr]: jh,
            [ur]: h1,
            [cr]: E1
        }),
        Qh = Object.freeze({
            [It]: s1,
            [jh]: a1,
            [Zn]: Zn,
            [Xr]: Xr,
            [ot]: ot,
            [at]: at,
            [kr]: kr
        }),
        $n = new Map;
        I1 = 1;
        A1 = 1;
        w1 = (e,t)=>e === t;
        Xh = /px/,
        L1 = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = V1[n.type]),
        r), e || {}),
        N1 = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = H1[n.type] || n.defaultValue || 0),
        r), e || {});
        q1 = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        M1 = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        D1 = (e,t,r)=>{
            if (Pt(e))
                return Sa(e)(r, t);
            switch (e) {
            case zr:
                {
                    let n = (0,
                    Qn.default)(r.filters, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            case Kr:
                {
                    let n = (0,
                    Qn.default)(r.fontVariations, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        Ha = {
            [nr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ir]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [or]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [jr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        V1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        H1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        W1 = (e,t)=>{
            let r = (0,
            Qn.default)(t.filters, ({type: n})=>n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        X1 = Object.keys(Ha);
        K1 = "\\(([^)]+)\\)",
        Y1 = /^rgb/,
        $1 = RegExp(`rgba?${K1}`);
        eE = ({effect: e, actionTypeId: t, elementApi: r})=>n=>{
            switch (t) {
            case nr:
            case ir:
            case or:
            case jr:
                e(n, It, r);
                break;
            case zr:
                e(n, Xr, r);
                break;
            case Kr:
                e(n, kr, r);
                break;
            case Yh:
                e(n, Zn, r);
                break;
            case ar:
                e(n, ot, r),
                e(n, at, r);
                break;
            case sr:
            case ur:
            case cr:
                e(n, Ua[t], r);
                break;
            case ri:
                e(n, Jn, r);
                break
            }
        }
    }
    );
    var Dt = u(Ne=>{
        "use strict";
        var lr = un().default;
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.IX2VanillaUtils = Ne.IX2VanillaPlugins = Ne.IX2ElementsReducer = Ne.IX2Easings = Ne.IX2EasingUtils = Ne.IX2BrowserSupport = void 0;
        var fD = lr((jn(),
        Je(Jg)));
        Ne.IX2BrowserSupport = fD;
        var dD = lr((Ta(),
        Je(Hr)));
        Ne.IX2Easings = dD;
        var pD = lr((ba(),
        Je(ah)));
        Ne.IX2EasingUtils = pD;
        var vD = lr((lh(),
        Je(ch)));
        Ne.IX2ElementsReducer = vD;
        var gD = lr((Na(),
        Je(Eh)));
        Ne.IX2VanillaPlugins = gD;
        var hD = lr((nE(),
        Je(rE)));
        Ne.IX2VanillaUtils = hD
    }
    );
    var ii, vt, ED, yD, mD, _D, TD, bD, ni, iE, ID, OD, Wa, AD, xD, SD, wD, oE, aE = he(()=>{
        "use strict";
        De();
        ii = ue(Dt()),
        vt = ue(jt()),
        {IX2_RAW_DATA_IMPORTED: ED, IX2_SESSION_STOPPED: yD, IX2_INSTANCE_ADDED: mD, IX2_INSTANCE_STARTED: _D, IX2_INSTANCE_REMOVED: TD, IX2_ANIMATION_FRAME_CHANGED: bD} = be,
        {optimizeFloat: ni, applyEasing: iE, createBezierEasing: ID} = ii.IX2EasingUtils,
        {RENDER_GENERAL: OD} = we,
        {getItemConfigByKey: Wa, getRenderType: AD, getStyleProp: xD} = ii.IX2VanillaUtils,
        SD = (e,t)=>{
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: f, skipMotion: p, skipToValue: d} = e
              , {parameters: g} = t.payload
              , h = Math.max(1 - a, .01)
              , y = g[n];
            y == null && (h = 1,
            y = s);
            let _ = Math.max(y, 0) || 0
              , L = ni(_ - r)
              , A = p ? d : ni(r + L * h)
              , S = A * 100;
            if (A === r && e.current)
                return e;
            let I, R, C, w;
            for (let X = 0, {length: B} = i; X < B; X++) {
                let {keyframe: Y, actionItems: te} = i[X];
                if (X === 0 && (I = te[0]),
                S >= Y) {
                    I = te[0];
                    let q = i[X + 1]
                      , b = q && S !== Y;
                    R = b ? q.actionItems[0] : null,
                    b && (C = Y / 100,
                    w = (q.keyframe - Y) / 100)
                }
            }
            let V = {};
            if (I && !R)
                for (let X = 0, {length: B} = o; X < B; X++) {
                    let Y = o[X];
                    V[Y] = Wa(c, Y, I.config)
                }
            else if (I && R && C !== void 0 && w !== void 0) {
                let X = (A - C) / w
                  , B = I.config.easing
                  , Y = iE(B, X, f);
                for (let te = 0, {length: q} = o; te < q; te++) {
                    let b = o[te]
                      , N = Wa(c, b, I.config)
                      , J = (Wa(c, b, R.config) - N) * Y + N;
                    V[b] = J
                }
            }
            return (0,
            vt.merge)(e, {
                position: A,
                current: V
            })
        }
        ,
        wD = (e,t)=>{
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: c, destination: f, destinationKeys: p, pluginDuration: d, instanceDelay: g, customEasingFn: h, skipMotion: y} = e
              , _ = c.config.easing
              , {duration: L, delay: A} = c.config;
            d != null && (L = d),
            A = g ?? A,
            a === OD ? L = 0 : (o || y) && (L = A = 0);
            let {now: S} = t.payload;
            if (r && n) {
                let I = S - (i + A);
                if (s) {
                    let X = S - i
                      , B = L + A
                      , Y = ni(Math.min(Math.max(0, X / B), 1));
                    e = (0,
                    vt.set)(e, "verboseTimeElapsed", B * Y)
                }
                if (I < 0)
                    return e;
                let R = ni(Math.min(Math.max(0, I / L), 1))
                  , C = iE(_, R, h)
                  , w = {}
                  , V = null;
                return p.length && (V = p.reduce((X,B)=>{
                    let Y = f[B]
                      , te = parseFloat(n[B]) || 0
                      , b = (parseFloat(Y) - te) * C + te;
                    return X[B] = b,
                    X
                }
                , {})),
                w.current = V,
                w.position = R,
                R === 1 && (w.active = !1,
                w.complete = !0),
                (0,
                vt.merge)(e, w)
            }
            return e
        }
        ,
        oE = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case ED:
                return t.payload.ixInstances || Object.freeze({});
            case yD:
                return Object.freeze({});
            case mD:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: c, groupIndex: f, isCarrier: p, origin: d, destination: g, immediate: h, verbose: y, continuous: _, parameterId: L, actionGroups: A, smoothing: S, restingValue: I, pluginInstance: R, pluginDuration: C, instanceDelay: w, skipMotion: V, skipToValue: X} = t.payload
                      , {actionTypeId: B} = i
                      , Y = AD(B)
                      , te = xD(Y, B)
                      , q = Object.keys(g).filter(N=>g[N] != null && typeof g[N] != "string")
                      , {easing: b} = i.config;
                    return (0,
                    vt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: d,
                        destination: g,
                        destinationKeys: q,
                        immediate: h,
                        verbose: y,
                        current: null,
                        actionItem: i,
                        actionTypeId: B,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: f,
                        renderType: Y,
                        isCarrier: p,
                        styleProp: te,
                        continuous: _,
                        parameterId: L,
                        actionGroups: A,
                        smoothing: S,
                        restingValue: I,
                        pluginInstance: R,
                        pluginDuration: C,
                        instanceDelay: w,
                        skipMotion: V,
                        skipToValue: X,
                        customEasingFn: Array.isArray(b) && b.length === 4 ? ID(b) : void 0
                    })
                }
            case _D:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    vt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case TD:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case bD:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , c = s.continuous ? SD : wD;
                        r = (0,
                        vt.set)(r, a, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var RD, CD, LD, sE, uE = he(()=>{
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: RD, IX2_SESSION_STOPPED: CD, IX2_PARAMETER_CHANGED: LD} = be),
        sE = (e={},t)=>{
            switch (t.type) {
            case RD:
                return t.payload.ixParameters || {};
            case CD:
                return {};
            case LD:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var fE = {};
    Me(fE, {
        default: ()=>PD
    });
    var cE, lE, ND, PD, dE = he(()=>{
        "use strict";
        cE = ue(Uo());
        Of();
        Bf();
        Kf();
        lE = ue(Dt());
        aE();
        uE();
        ({ixElements: ND} = lE.IX2ElementsReducer),
        PD = (0,
        cE.combineReducers)({
            ixData: If,
            ixRequest: kf,
            ixSession: zf,
            ixElements: ND,
            ixInstances: oE,
            ixParameters: sE
        })
    }
    );
    var vE = u((SB,pE)=>{
        var qD = _t()
          , MD = Oe()
          , DD = ft()
          , FD = "[object String]";
        function GD(e) {
            return typeof e == "string" || !MD(e) && DD(e) && qD(e) == FD
        }
        pE.exports = GD
    }
    );
    var hE = u((wB,gE)=>{
        var UD = va()
          , VD = UD("length");
        gE.exports = VD
    }
    );
    var yE = u((RB,EE)=>{
        var HD = "\\ud800-\\udfff"
          , WD = "\\u0300-\\u036f"
          , XD = "\\ufe20-\\ufe2f"
          , kD = "\\u20d0-\\u20ff"
          , BD = WD + XD + kD
          , jD = "\\ufe0e\\ufe0f"
          , zD = "\\u200d"
          , KD = RegExp("[" + zD + HD + BD + jD + "]");
        function YD(e) {
            return KD.test(e)
        }
        EE.exports = YD
    }
    );
    var SE = u((CB,xE)=>{
        var _E = "\\ud800-\\udfff"
          , $D = "\\u0300-\\u036f"
          , QD = "\\ufe20-\\ufe2f"
          , ZD = "\\u20d0-\\u20ff"
          , JD = $D + QD + ZD
          , eF = "\\ufe0e\\ufe0f"
          , tF = "[" + _E + "]"
          , Xa = "[" + JD + "]"
          , ka = "\\ud83c[\\udffb-\\udfff]"
          , rF = "(?:" + Xa + "|" + ka + ")"
          , TE = "[^" + _E + "]"
          , bE = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , IE = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , nF = "\\u200d"
          , OE = rF + "?"
          , AE = "[" + eF + "]?"
          , iF = "(?:" + nF + "(?:" + [TE, bE, IE].join("|") + ")" + AE + OE + ")*"
          , oF = AE + OE + iF
          , aF = "(?:" + [TE + Xa + "?", Xa, bE, IE, tF].join("|") + ")"
          , mE = RegExp(ka + "(?=" + ka + ")|" + aF + oF, "g");
        function sF(e) {
            for (var t = mE.lastIndex = 0; mE.test(e); )
                ++t;
            return t
        }
        xE.exports = sF
    }
    );
    var RE = u((LB,wE)=>{
        var uF = hE()
          , cF = yE()
          , lF = SE();
        function fF(e) {
            return cF(e) ? lF(e) : uF(e)
        }
        wE.exports = fF
    }
    );
    var LE = u((NB,CE)=>{
        var dF = Dn()
          , pF = Fn()
          , vF = Lt()
          , gF = vE()
          , hF = RE()
          , EF = "[object Map]"
          , yF = "[object Set]";
        function mF(e) {
            if (e == null)
                return 0;
            if (vF(e))
                return gF(e) ? hF(e) : e.length;
            var t = pF(e);
            return t == EF || t == yF ? e.size : dF(e).length
        }
        CE.exports = mF
    }
    );
    var PE = u((PB,NE)=>{
        var _F = "Expected a function";
        function TF(e) {
            if (typeof e != "function")
                throw new TypeError(_F);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        NE.exports = TF
    }
    );
    var Ba = u((qB,qE)=>{
        var bF = Tt()
          , IF = function() {
            try {
                var e = bF(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        qE.exports = IF
    }
    );
    var ja = u((MB,DE)=>{
        var ME = Ba();
        function OF(e, t, r) {
            t == "__proto__" && ME ? ME(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        DE.exports = OF
    }
    );
    var GE = u((DB,FE)=>{
        var AF = ja()
          , xF = xn()
          , SF = Object.prototype
          , wF = SF.hasOwnProperty;
        function RF(e, t, r) {
            var n = e[t];
            (!(wF.call(e, t) && xF(n, r)) || r === void 0 && !(t in e)) && AF(e, t, r)
        }
        FE.exports = RF
    }
    );
    var HE = u((FB,VE)=>{
        var CF = GE()
          , LF = Gr()
          , NF = Nn()
          , UE = it()
          , PF = er();
        function qF(e, t, r, n) {
            if (!UE(e))
                return e;
            t = LF(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var c = PF(t[i])
                  , f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (i != a) {
                    var p = s[c];
                    f = n ? n(p, c, s) : void 0,
                    f === void 0 && (f = UE(p) ? p : NF(t[i + 1]) ? [] : {})
                }
                CF(s, c, f),
                s = s[c]
            }
            return e
        }
        VE.exports = qF
    }
    );
    var XE = u((GB,WE)=>{
        var MF = Vn()
          , DF = HE()
          , FF = Gr();
        function GF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = MF(e, a);
                r(s, a) && DF(o, FF(a, e), s)
            }
            return o
        }
        WE.exports = GF
    }
    );
    var BE = u((UB,kE)=>{
        var UF = Cn()
          , VF = xo()
          , HF = Jo()
          , WF = Zo()
          , XF = Object.getOwnPropertySymbols
          , kF = XF ? function(e) {
            for (var t = []; e; )
                UF(t, HF(e)),
                e = VF(e);
            return t
        }
        : WF;
        kE.exports = kF
    }
    );
    var zE = u((VB,jE)=>{
        function BF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        jE.exports = BF
    }
    );
    var YE = u((HB,KE)=>{
        var jF = it()
          , zF = Mn()
          , KF = zE()
          , YF = Object.prototype
          , $F = YF.hasOwnProperty;
        function QF(e) {
            if (!jF(e))
                return KF(e);
            var t = zF(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !$F.call(e, n)) || r.push(n);
            return r
        }
        KE.exports = QF
    }
    );
    var QE = u((WB,$E)=>{
        var ZF = ta()
          , JF = YE()
          , e2 = Lt();
        function t2(e) {
            return e2(e) ? ZF(e, !0) : JF(e)
        }
        $E.exports = t2
    }
    );
    var JE = u((XB,ZE)=>{
        var r2 = Qo()
          , n2 = BE()
          , i2 = QE();
        function o2(e) {
            return r2(e, i2, n2)
        }
        ZE.exports = o2
    }
    );
    var ty = u((kB,ey)=>{
        var a2 = pa()
          , s2 = bt()
          , u2 = XE()
          , c2 = JE();
        function l2(e, t) {
            if (e == null)
                return {};
            var r = a2(c2(e), function(n) {
                return [n]
            });
            return t = s2(t),
            u2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        ey.exports = l2
    }
    );
    var ny = u((BB,ry)=>{
        var f2 = bt()
          , d2 = PE()
          , p2 = ty();
        function v2(e, t) {
            return p2(e, d2(f2(t)))
        }
        ry.exports = v2
    }
    );
    var oy = u((jB,iy)=>{
        var g2 = Dn()
          , h2 = Fn()
          , E2 = Nr()
          , y2 = Oe()
          , m2 = Lt()
          , _2 = Ln()
          , T2 = Mn()
          , b2 = qn()
          , I2 = "[object Map]"
          , O2 = "[object Set]"
          , A2 = Object.prototype
          , x2 = A2.hasOwnProperty;
        function S2(e) {
            if (e == null)
                return !0;
            if (m2(e) && (y2(e) || typeof e == "string" || typeof e.splice == "function" || _2(e) || b2(e) || E2(e)))
                return !e.length;
            var t = h2(e);
            if (t == I2 || t == O2)
                return !e.size;
            if (T2(e))
                return !g2(e).length;
            for (var r in e)
                if (x2.call(e, r))
                    return !1;
            return !0
        }
        iy.exports = S2
    }
    );
    var sy = u((zB,ay)=>{
        var w2 = ja()
          , R2 = Pa()
          , C2 = bt();
        function L2(e, t) {
            var r = {};
            return t = C2(t, 3),
            R2(e, function(n, i, o) {
                w2(r, i, t(n, i, o))
            }),
            r
        }
        ay.exports = L2
    }
    );
    var cy = u((KB,uy)=>{
        function N2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        uy.exports = N2
    }
    );
    var fy = u((YB,ly)=>{
        var P2 = Wn();
        function q2(e) {
            return typeof e == "function" ? e : P2
        }
        ly.exports = q2
    }
    );
    var py = u(($B,dy)=>{
        var M2 = cy()
          , D2 = qa()
          , F2 = fy()
          , G2 = Oe();
        function U2(e, t) {
            var r = G2(e) ? M2 : D2;
            return r(e, F2(t))
        }
        dy.exports = U2
    }
    );
    var gy = u((QB,vy)=>{
        var V2 = Ke()
          , H2 = function() {
            return V2.Date.now()
        };
        vy.exports = H2
    }
    );
    var yy = u((ZB,Ey)=>{
        var W2 = it()
          , za = gy()
          , hy = Xn()
          , X2 = "Expected a function"
          , k2 = Math.max
          , B2 = Math.min;
        function j2(e, t, r) {
            var n, i, o, a, s, c, f = 0, p = !1, d = !1, g = !0;
            if (typeof e != "function")
                throw new TypeError(X2);
            t = hy(t) || 0,
            W2(r) && (p = !!r.leading,
            d = "maxWait"in r,
            o = d ? k2(hy(r.maxWait) || 0, t) : o,
            g = "trailing"in r ? !!r.trailing : g);
            function h(w) {
                var V = n
                  , X = i;
                return n = i = void 0,
                f = w,
                a = e.apply(X, V),
                a
            }
            function y(w) {
                return f = w,
                s = setTimeout(A, t),
                p ? h(w) : a
            }
            function _(w) {
                var V = w - c
                  , X = w - f
                  , B = t - V;
                return d ? B2(B, o - X) : B
            }
            function L(w) {
                var V = w - c
                  , X = w - f;
                return c === void 0 || V >= t || V < 0 || d && X >= o
            }
            function A() {
                var w = za();
                if (L(w))
                    return S(w);
                s = setTimeout(A, _(w))
            }
            function S(w) {
                return s = void 0,
                g && n ? h(w) : (n = i = void 0,
                a)
            }
            function I() {
                s !== void 0 && clearTimeout(s),
                f = 0,
                n = c = i = s = void 0
            }
            function R() {
                return s === void 0 ? a : S(za())
            }
            function C() {
                var w = za()
                  , V = L(w);
                if (n = arguments,
                i = this,
                c = w,
                V) {
                    if (s === void 0)
                        return y(c);
                    if (d)
                        return clearTimeout(s),
                        s = setTimeout(A, t),
                        h(c)
                }
                return s === void 0 && (s = setTimeout(A, t)),
                a
            }
            return C.cancel = I,
            C.flush = R,
            C
        }
        Ey.exports = j2
    }
    );
    var _y = u((JB,my)=>{
        var z2 = yy()
          , K2 = it()
          , Y2 = "Expected a function";
        function $2(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(Y2);
            return K2(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            z2(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        my.exports = $2
    }
    );
    var by = {};
    Me(by, {
        actionListPlaybackChanged: ()=>dr,
        animationFrameChanged: ()=>ai,
        clearRequested: ()=>TG,
        elementStateChanged: ()=>ts,
        eventListenerAdded: ()=>oi,
        eventStateChanged: ()=>Za,
        instanceAdded: ()=>Ja,
        instanceRemoved: ()=>es,
        instanceStarted: ()=>si,
        mediaQueriesDefined: ()=>ns,
        parameterChanged: ()=>fr,
        playbackRequested: ()=>mG,
        previewRequested: ()=>yG,
        rawDataImported: ()=>Ka,
        sessionInitialized: ()=>Ya,
        sessionStarted: ()=>$a,
        sessionStopped: ()=>Qa,
        stopRequested: ()=>_G,
        testFrameRendered: ()=>bG,
        viewportWidthChanged: ()=>rs
    });
    var Ty, Q2, Z2, J2, eG, tG, rG, nG, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, vG, gG, hG, EG, Ka, Ya, $a, Qa, yG, mG, _G, TG, oi, bG, Za, ai, fr, Ja, si, es, ts, dr, rs, ns, ui = he(()=>{
        "use strict";
        De();
        Ty = ue(Dt()),
        {IX2_RAW_DATA_IMPORTED: Q2, IX2_SESSION_INITIALIZED: Z2, IX2_SESSION_STARTED: J2, IX2_SESSION_STOPPED: eG, IX2_PREVIEW_REQUESTED: tG, IX2_PLAYBACK_REQUESTED: rG, IX2_STOP_REQUESTED: nG, IX2_CLEAR_REQUESTED: iG, IX2_EVENT_LISTENER_ADDED: oG, IX2_TEST_FRAME_RENDERED: aG, IX2_EVENT_STATE_CHANGED: sG, IX2_ANIMATION_FRAME_CHANGED: uG, IX2_PARAMETER_CHANGED: cG, IX2_INSTANCE_ADDED: lG, IX2_INSTANCE_STARTED: fG, IX2_INSTANCE_REMOVED: dG, IX2_ELEMENT_STATE_CHANGED: pG, IX2_ACTION_LIST_PLAYBACK_CHANGED: vG, IX2_VIEWPORT_WIDTH_CHANGED: gG, IX2_MEDIA_QUERIES_DEFINED: hG} = be,
        {reifyState: EG} = Ty.IX2VanillaUtils,
        Ka = e=>({
            type: Q2,
            payload: {
                ...EG(e)
            }
        }),
        Ya = ({hasBoundaryNodes: e, reducedMotion: t})=>({
            type: Z2,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        $a = ()=>({
            type: J2
        }),
        Qa = ()=>({
            type: eG
        }),
        yG = ({rawData: e, defer: t})=>({
            type: tG,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        mG = ({actionTypeId: e=Ve.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: c})=>({
            type: rG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: c
            }
        }),
        _G = e=>({
            type: nG,
            payload: {
                actionListId: e
            }
        }),
        TG = ()=>({
            type: iG
        }),
        oi = (e,t)=>({
            type: oG,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        bG = (e=1)=>({
            type: aG,
            payload: {
                step: e
            }
        }),
        Za = (e,t)=>({
            type: sG,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        ai = (e,t)=>({
            type: uG,
            payload: {
                now: e,
                parameters: t
            }
        }),
        fr = (e,t)=>({
            type: cG,
            payload: {
                key: e,
                value: t
            }
        }),
        Ja = e=>({
            type: lG,
            payload: {
                ...e
            }
        }),
        si = (e,t)=>({
            type: fG,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        es = e=>({
            type: dG,
            payload: {
                instanceId: e
            }
        }),
        ts = (e,t,r,n)=>({
            type: pG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        dr = ({actionListId: e, isPlaying: t})=>({
            type: vG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        rs = ({width: e, mediaQueries: t})=>({
            type: gG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        ns = ()=>({
            type: hG
        })
    }
    );
    var Pe = {};
    Me(Pe, {
        elementContains: ()=>as,
        getChildElements: ()=>NG,
        getClosestElement: ()=>Yr,
        getProperty: ()=>SG,
        getQuerySelector: ()=>os,
        getRefType: ()=>ss,
        getSiblingElements: ()=>PG,
        getStyle: ()=>xG,
        getValidDocument: ()=>RG,
        isSiblingNode: ()=>LG,
        matchSelector: ()=>wG,
        queryDocument: ()=>CG,
        setStyle: ()=>AG
    });
    function AG(e, t, r) {
        e.style[t] = r
    }
    function xG(e, t) {
        return e.style[t]
    }
    function SG(e, t) {
        return e[t]
    }
    function wG(e) {
        return t=>t[is](e)
    }
    function os({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(Iy) !== -1) {
                let n = e.split(Iy)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(Ay))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function RG(e) {
        return e == null || e === document.documentElement.getAttribute(Ay) ? document : null
    }
    function CG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function as(e, t) {
        return e.contains(t)
    }
    function LG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function NG(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function PG(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function ss(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? IG : OG : null
    }
    var Oy, is, Iy, IG, OG, Ay, Yr, xy = he(()=>{
        "use strict";
        Oy = ue(Dt());
        De();
        ({ELEMENT_MATCHES: is} = Oy.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Iy, HTML_ELEMENT: IG, PLAIN_OBJECT: OG, WF_PAGE: Ay} = we;
        Yr = Element.prototype.closest ? (e,t)=>document.documentElement.contains(e) ? e.closest(t) : null : (e,t)=>{
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[is] && r[is](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var us = u((rj,wy)=>{
        var qG = it()
          , Sy = Object.create
          , MG = function() {
            function e() {}
            return function(t) {
                if (!qG(t))
                    return {};
                if (Sy)
                    return Sy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        wy.exports = MG
    }
    );
    var ci = u((nj,Ry)=>{
        function DG() {}
        Ry.exports = DG
    }
    );
    var fi = u((ij,Cy)=>{
        var FG = us()
          , GG = ci();
        function li(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        li.prototype = FG(GG.prototype);
        li.prototype.constructor = li;
        Cy.exports = li
    }
    );
    var qy = u((oj,Py)=>{
        var Ly = Xt()
          , UG = Nr()
          , VG = Oe()
          , Ny = Ly ? Ly.isConcatSpreadable : void 0;
        function HG(e) {
            return VG(e) || UG(e) || !!(Ny && e && e[Ny])
        }
        Py.exports = HG
    }
    );
    var Fy = u((aj,Dy)=>{
        var WG = Cn()
          , XG = qy();
        function My(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = XG),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? My(s, t - 1, r, n, i) : WG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Dy.exports = My
    }
    );
    var Uy = u((sj,Gy)=>{
        var kG = Fy();
        function BG(e) {
            var t = e == null ? 0 : e.length;
            return t ? kG(e, 1) : []
        }
        Gy.exports = BG
    }
    );
    var Hy = u((uj,Vy)=>{
        function jG(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Vy.exports = jG
    }
    );
    var ky = u((cj,Xy)=>{
        var zG = Hy()
          , Wy = Math.max;
        function KG(e, t, r) {
            return t = Wy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Wy(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                zG(e, this, s)
            }
        }
        Xy.exports = KG
    }
    );
    var jy = u((lj,By)=>{
        function YG(e) {
            return function() {
                return e
            }
        }
        By.exports = YG
    }
    );
    var Yy = u((fj,Ky)=>{
        var $G = jy()
          , zy = Ba()
          , QG = Wn()
          , ZG = zy ? function(e, t) {
            return zy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: $G(t),
                writable: !0
            })
        }
        : QG;
        Ky.exports = ZG
    }
    );
    var Qy = u((dj,$y)=>{
        var JG = 800
          , eU = 16
          , tU = Date.now;
        function rU(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = tU()
                  , i = eU - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= JG)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        $y.exports = rU
    }
    );
    var Jy = u((pj,Zy)=>{
        var nU = Yy()
          , iU = Qy()
          , oU = iU(nU);
        Zy.exports = oU
    }
    );
    var tm = u((vj,em)=>{
        var aU = Uy()
          , sU = ky()
          , uU = Jy();
        function cU(e) {
            return uU(sU(e, void 0, aU), e + "")
        }
        em.exports = cU
    }
    );
    var im = u((gj,nm)=>{
        var rm = ra()
          , lU = rm && new rm;
        nm.exports = lU
    }
    );
    var am = u((hj,om)=>{
        function fU() {}
        om.exports = fU
    }
    );
    var cs = u((Ej,um)=>{
        var sm = im()
          , dU = am()
          , pU = sm ? function(e) {
            return sm.get(e)
        }
        : dU;
        um.exports = pU
    }
    );
    var lm = u((yj,cm)=>{
        var vU = {};
        cm.exports = vU
    }
    );
    var ls = u((mj,dm)=>{
        var fm = lm()
          , gU = Object.prototype
          , hU = gU.hasOwnProperty;
        function EU(e) {
            for (var t = e.name + "", r = fm[t], n = hU.call(fm, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        dm.exports = EU
    }
    );
    var pi = u((_j,pm)=>{
        var yU = us()
          , mU = ci()
          , _U = 4294967295;
        function di(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = _U,
            this.__views__ = []
        }
        di.prototype = yU(mU.prototype);
        di.prototype.constructor = di;
        pm.exports = di
    }
    );
    var gm = u((Tj,vm)=>{
        function TU(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        vm.exports = TU
    }
    );
    var Em = u((bj,hm)=>{
        var bU = pi()
          , IU = fi()
          , OU = gm();
        function AU(e) {
            if (e instanceof bU)
                return e.clone();
            var t = new IU(e.__wrapped__,e.__chain__);
            return t.__actions__ = OU(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        hm.exports = AU
    }
    );
    var _m = u((Ij,mm)=>{
        var xU = pi()
          , ym = fi()
          , SU = ci()
          , wU = Oe()
          , RU = ft()
          , CU = Em()
          , LU = Object.prototype
          , NU = LU.hasOwnProperty;
        function vi(e) {
            if (RU(e) && !wU(e) && !(e instanceof xU)) {
                if (e instanceof ym)
                    return e;
                if (NU.call(e, "__wrapped__"))
                    return CU(e)
            }
            return new ym(e)
        }
        vi.prototype = SU.prototype;
        vi.prototype.constructor = vi;
        mm.exports = vi
    }
    );
    var bm = u((Oj,Tm)=>{
        var PU = pi()
          , qU = cs()
          , MU = ls()
          , DU = _m();
        function FU(e) {
            var t = MU(e)
              , r = DU[t];
            if (typeof r != "function" || !(t in PU.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = qU(r);
            return !!n && e === n[0]
        }
        Tm.exports = FU
    }
    );
    var xm = u((Aj,Am)=>{
        var Im = fi()
          , GU = tm()
          , UU = cs()
          , fs = ls()
          , VU = Oe()
          , Om = bm()
          , HU = "Expected a function"
          , WU = 8
          , XU = 32
          , kU = 128
          , BU = 256;
        function jU(e) {
            return GU(function(t) {
                var r = t.length
                  , n = r
                  , i = Im.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(HU);
                    if (i && !a && fs(o) == "wrapper")
                        var a = new Im([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = fs(o)
                      , c = s == "wrapper" ? UU(o) : void 0;
                    c && Om(c[0]) && c[1] == (kU | WU | XU | BU) && !c[4].length && c[9] == 1 ? a = a[fs(c[0])].apply(a, c[3]) : a = o.length == 1 && Om(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var f = arguments
                      , p = f[0];
                    if (a && f.length == 1 && VU(p))
                        return a.plant(p).value();
                    for (var d = 0, g = r ? t[d].apply(this, f) : p; ++d < r; )
                        g = t[d].call(this, g);
                    return g
                }
            })
        }
        Am.exports = jU
    }
    );
    var wm = u((xj,Sm)=>{
        var zU = xm()
          , KU = zU();
        Sm.exports = KU
    }
    );
    var Cm = u((Sj,Rm)=>{
        function YU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Rm.exports = YU
    }
    );
    var Nm = u((wj,Lm)=>{
        var $U = Cm()
          , ds = Xn();
        function QU(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ds(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ds(t),
            t = t === t ? t : 0),
            $U(ds(e), t, r)
        }
        Lm.exports = QU
    }
    );
    var Hm, Wm, Xm, km, ZU, JU, eV, tV, rV, nV, iV, oV, aV, sV, uV, cV, lV, fV, dV, Bm, jm, pV, vV, gV, zm, hV, EV, Km, yV, ps, Ym, Pm, qm, $m, Qr, mV, st, Qm, _V, Ge, Qe, Zr, Zm, vs, Mm, gs, TV, $r, bV, IV, OV, Jm, Dm, AV, Fm, xV, SV, wV, Gm, gi, hi, Um, Vm, e_, t_ = he(()=>{
        "use strict";
        Hm = ue(wm()),
        Wm = ue(Hn()),
        Xm = ue(Nm());
        De();
        hs();
        ui();
        km = ue(Dt()),
        {MOUSE_CLICK: ZU, MOUSE_SECOND_CLICK: JU, MOUSE_DOWN: eV, MOUSE_UP: tV, MOUSE_OVER: rV, MOUSE_OUT: nV, DROPDOWN_CLOSE: iV, DROPDOWN_OPEN: oV, SLIDER_ACTIVE: aV, SLIDER_INACTIVE: sV, TAB_ACTIVE: uV, TAB_INACTIVE: cV, NAVBAR_CLOSE: lV, NAVBAR_OPEN: fV, MOUSE_MOVE: dV, PAGE_SCROLL_DOWN: Bm, SCROLL_INTO_VIEW: jm, SCROLL_OUT_OF_VIEW: pV, PAGE_SCROLL_UP: vV, SCROLLING_IN_VIEW: gV, PAGE_FINISH: zm, ECOMMERCE_CART_CLOSE: hV, ECOMMERCE_CART_OPEN: EV, PAGE_START: Km, PAGE_SCROLL: yV} = Ye,
        ps = "COMPONENT_ACTIVE",
        Ym = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Pm} = we,
        {getNamespacedParameterId: qm} = km.IX2VanillaUtils,
        $m = e=>t=>typeof t == "object" && e(t) ? !0 : t,
        Qr = $m(({element: e, nativeEvent: t})=>e === t.target),
        mV = $m(({element: e, nativeEvent: t})=>e.contains(t.target)),
        st = (0,
        Hm.default)([Qr, mV]),
        Qm = (e,t)=>{
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !TV[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        _V = ({store: e, event: t})=>{
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Qm(e, n)
        }
        ,
        Ge = ({store: e, event: t, element: r, eventStateKey: n},i)=>{
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: c} = o.config
              , f = Qm(e, c);
            return f && pr({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + Pm + n.split(Pm)[1],
                actionListId: (0,
                Wm.default)(f, "action.config.actionListId")
            }),
            pr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            Jr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        Qe = (e,t)=>(r,n)=>e(r, n) === !0 ? t(r, n) : n,
        Zr = {
            handler: Qe(st, Ge)
        },
        Zm = {
            ...Zr,
            types: [ps, Ym].join(" ")
        },
        vs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Mm = "mouseover mouseout",
        gs = {
            types: vs
        },
        TV = {
            PAGE_START: Km,
            PAGE_FINISH: zm
        },
        $r = (()=>{
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return ()=>({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                Xm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        bV = (e,t)=>!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        IV = ({element: e, nativeEvent: t})=>{
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        OV = e=>{
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = $r()
              , o = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return bV(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: i - c
            })
        }
        ,
        Jm = e=>(t,r)=>{
            let {type: n} = t.nativeEvent
              , i = [ps, Ym].indexOf(n) !== -1 ? n === ps : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        Dm = e=>(t,r)=>{
            let n = {
                elementHovered: IV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        AV = e=>(t,r)=>{
            let n = {
                ...r,
                elementVisible: OV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Fm = e=>(t,r={})=>{
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = $r()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: f} = a
              , p = f === "PX"
              , d = i - o
              , g = Number((n / d).toFixed(2));
            if (r && r.percentTop === g)
                return r;
            let h = (p ? c : o * (c || 0) / 100) / d, y, _, L = 0;
            r && (y = g > r.percentTop,
            _ = r.scrollingDown !== y,
            L = _ ? g : r.anchorTop);
            let A = s === Bm ? g >= L + h : g <= L - h
              , S = {
                ...r,
                percentTop: g,
                inBounds: A,
                anchorTop: L,
                scrollingDown: y
            };
            return r && A && (_ || S.inBounds !== r.inBounds) && e(t, S) || S
        }
        ,
        xV = (e,t)=>e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        SV = e=>(t,r)=>{
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        wV = e=>(t,r)=>{
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Gm = e=>(t,r={
            clickCount: 0
        })=>{
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        gi = (e=!0)=>({
            ...Zm,
            handler: Qe(e ? st : Qr, Jm((t,r)=>r.isActive ? Zr.handler(t, r) : r))
        }),
        hi = (e=!0)=>({
            ...Zm,
            handler: Qe(e ? st : Qr, Jm((t,r)=>r.isActive ? r : Zr.handler(t, r)))
        }),
        Um = {
            ...gs,
            handler: AV((e,t)=>{
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === jm === r ? (Ge(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Vm = .05,
        e_ = {
            [aV]: gi(),
            [sV]: hi(),
            [oV]: gi(),
            [iV]: hi(),
            [fV]: gi(!1),
            [lV]: hi(!1),
            [uV]: gi(),
            [cV]: hi(),
            [EV]: {
                types: "ecommerce-cart-open",
                handler: Qe(st, Ge)
            },
            [hV]: {
                types: "ecommerce-cart-close",
                handler: Qe(st, Ge)
            },
            [ZU]: {
                types: "click",
                handler: Qe(st, Gm((e,{clickCount: t})=>{
                    _V(e) ? t === 1 && Ge(e) : Ge(e)
                }
                ))
            },
            [JU]: {
                types: "click",
                handler: Qe(st, Gm((e,{clickCount: t})=>{
                    t === 2 && Ge(e)
                }
                ))
            },
            [eV]: {
                ...Zr,
                types: "mousedown"
            },
            [tV]: {
                ...Zr,
                types: "mouseup"
            },
            [rV]: {
                types: Mm,
                handler: Qe(st, Dm((e,t)=>{
                    t.elementHovered && Ge(e)
                }
                ))
            },
            [nV]: {
                types: Mm,
                handler: Qe(st, Dm((e,t)=>{
                    t.elementHovered || Ge(e)
                }
                ))
            },
            [dV]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i},o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                })=>{
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: f, restingState: p=0} = r
                      , {clientX: d=o.clientX, clientY: g=o.clientY, pageX: h=o.pageX, pageY: y=o.pageY} = n
                      , _ = s === "X_AXIS"
                      , L = n.type === "mouseout"
                      , A = p / 100
                      , S = c
                      , I = !1;
                    switch (a) {
                    case nt.VIEWPORT:
                        {
                            A = _ ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case nt.PAGE:
                        {
                            let {scrollLeft: R, scrollTop: C, scrollWidth: w, scrollHeight: V} = $r();
                            A = _ ? Math.min(R + h, w) / w : Math.min(C + y, V) / V;
                            break
                        }
                    case nt.ELEMENT:
                    default:
                        {
                            S = qm(i, c);
                            let R = n.type.indexOf("mouse") === 0;
                            if (R && st({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let C = t.getBoundingClientRect()
                              , {left: w, top: V, width: X, height: B} = C;
                            if (!R && !xV({
                                left: d,
                                top: g
                            }, C))
                                break;
                            I = !0,
                            A = _ ? (d - w) / X : (g - V) / B;
                            break
                        }
                    }
                    return L && (A > 1 - Vm || A < Vm) && (A = Math.round(A)),
                    (a !== nt.ELEMENT || I || I !== o.elementHovered) && (A = f ? 1 - A : A,
                    e.dispatch(fr(S, A))),
                    {
                        elementHovered: I,
                        clientX: d,
                        clientY: g,
                        pageX: h,
                        pageY: y
                    }
                }
            },
            [yV]: {
                types: vs,
                handler: ({store: e, eventConfig: t})=>{
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = $r()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(fr(r, s))
                }
            },
            [gV]: {
                types: vs,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n},i={
                    scrollPercent: 0
                })=>{
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: f} = $r()
                      , {basedOn: p, selectedAxis: d, continuousParameterGroupId: g, startsEntering: h, startsExiting: y, addEndOffset: _, addStartOffset: L, addOffsetValue: A=0, endOffsetValue: S=0} = r
                      , I = d === "X_AXIS";
                    if (p === nt.VIEWPORT) {
                        let R = I ? o / s : a / c;
                        return R !== i.scrollPercent && t.dispatch(fr(g, R)),
                        {
                            scrollPercent: R
                        }
                    } else {
                        let R = qm(n, g)
                          , C = e.getBoundingClientRect()
                          , w = (L ? A : 0) / 100
                          , V = (_ ? S : 0) / 100;
                        w = h ? w : 1 - w,
                        V = y ? V : 1 - V;
                        let X = C.top + Math.min(C.height * w, f)
                          , Y = C.top + C.height * V - X
                          , te = Math.min(f + Y, c)
                          , b = Math.min(Math.max(0, f - X), te) / te;
                        return b !== i.scrollPercent && t.dispatch(fr(R, b)),
                        {
                            scrollPercent: b
                        }
                    }
                }
            },
            [jm]: Um,
            [pV]: Um,
            [Bm]: {
                ...gs,
                handler: Fm((e,t)=>{
                    t.scrollingDown && Ge(e)
                }
                )
            },
            [vV]: {
                ...gs,
                handler: Fm((e,t)=>{
                    t.scrollingDown || Ge(e)
                }
                )
            },
            [zm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(Qr, SV(Ge))
            },
            [Km]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(Qr, wV(Ge))
            }
        }
    }
    );
    var y_ = {};
    Me(y_, {
        observeRequests: ()=>KV,
        startActionGroup: ()=>Jr,
        startEngine: ()=>bi,
        stopActionGroup: ()=>pr,
        stopAllActionGroups: ()=>g_,
        stopEngine: ()=>Ii
    });
    function KV(e) {
        Ft({
            store: e,
            select: ({ixRequest: t})=>t.preview,
            onChange: QV
        }),
        Ft({
            store: e,
            select: ({ixRequest: t})=>t.playback,
            onChange: ZV
        }),
        Ft({
            store: e,
            select: ({ixRequest: t})=>t.stop,
            onChange: JV
        }),
        Ft({
            store: e,
            select: ({ixRequest: t})=>t.clear,
            onChange: eH
        })
    }
    function YV(e) {
        Ft({
            store: e,
            select: ({ixSession: t})=>t.mediaQueryKey,
            onChange: ()=>{
                Ii(e),
                f_({
                    store: e,
                    elementApi: Pe
                }),
                bi({
                    store: e,
                    allowEvents: !0
                }),
                d_()
            }
        })
    }
    function $V(e, t) {
        let r = Ft({
            store: e,
            select: ({ixSession: n})=>n.tick,
            onChange: n=>{
                t(n),
                r()
            }
        })
    }
    function QV({rawData: e, defer: t}, r) {
        let n = ()=>{
            bi({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            d_()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function d_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function ZV(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: c, verbose: f=!0} = e
          , {rawData: p} = e;
        if (n && i && p && s) {
            let d = p.actionLists[n];
            d && (p = FV({
                actionList: d,
                actionItemId: i,
                rawData: p
            }))
        }
        if (bi({
            store: t,
            rawData: p,
            allowEvents: a,
            testManual: c
        }),
        n && r === Ve.GENERAL_START_ACTION || Es(r)) {
            pr({
                store: t,
                actionListId: n
            }),
            v_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = Jr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: f
            });
            f && d && t.dispatch(dr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function JV({actionListId: e}, t) {
        e ? pr({
            store: t,
            actionListId: e
        }) : g_({
            store: t
        }),
        Ii(t)
    }
    function eH(e, t) {
        Ii(t),
        f_({
            store: t,
            elementApi: Pe
        })
    }
    function bi({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Ka(t)),
        i.active || (e.dispatch(Ya({
            hasBoundaryNodes: !!document.querySelector(yi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (aH(e),
        tH(),
        e.getState().ixSession.hasDefinedMediaQueries && YV(e)),
        e.dispatch($a()),
        rH(e, n))
    }
    function tH() {
        let {documentElement: e} = document;
        e.className.indexOf(r_) === -1 && (e.className += ` ${r_}`)
    }
    function rH(e, t) {
        let r = n=>{
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(ai(n, o)),
            t ? $V(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Ii(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(nH),
            HV(),
            e.dispatch(Qa())
        }
    }
    function nH({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function iH({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: c}) {
        let {ixData: f, ixSession: p} = e.getState()
          , {events: d} = f
          , g = d[n]
          , {eventTypeId: h} = g
          , y = {}
          , _ = {}
          , L = []
          , {continuousActionGroups: A} = a
          , {id: S} = a;
        GV(h, i) && (S = UV(t, S));
        let I = p.hasBoundaryNodes && r ? Yr(r, yi) : null;
        A.forEach(R=>{
            let {keyframe: C, actionItems: w} = R;
            w.forEach(V=>{
                let {actionTypeId: X} = V
                  , {target: B} = V.config;
                if (!B)
                    return;
                let Y = B.boundaryMode ? I : null
                  , te = WV(B) + ys + X;
                if (_[te] = oH(_[te], C, V),
                !y[te]) {
                    y[te] = !0;
                    let {config: q} = V;
                    mi({
                        config: q,
                        event: g,
                        eventTarget: r,
                        elementRoot: Y,
                        elementApi: Pe
                    }).forEach(b=>{
                        L.push({
                            element: b,
                            key: te
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        L.forEach(({element: R, key: C})=>{
            let w = _[C]
              , V = (0,
            gt.default)(w, "[0].actionItems[0]", {})
              , {actionTypeId: X} = V
              , B = Ti(X) ? _s(X)(R, V) : null
              , Y = ms({
                element: R,
                actionItem: V,
                elementApi: Pe
            }, B);
            Ts({
                store: e,
                element: R,
                eventId: n,
                actionListId: o,
                actionItem: V,
                destination: Y,
                continuous: !0,
                parameterId: S,
                actionGroups: w,
                smoothing: s,
                restingValue: c,
                pluginInstance: B
            })
        }
        )
    }
    function oH(e=[], t, r) {
        let n = [...e], i;
        return n.some((o,a)=>o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function aH(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        p_(e),
        (0,
        vr.default)(r, (i,o)=>{
            let a = e_[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            dH({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && uH(e)
    }
    function uH(e) {
        let t = ()=>{
            p_(e)
        }
        ;
        sH.forEach(r=>{
            window.addEventListener(r, t),
            e.dispatch(oi(window, [r, t]))
        }
        ),
        t()
    }
    function p_(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(rs({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function dH({logic: e, store: t, events: r}) {
        pH(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = cH(r, fH);
        if (!(0,
        o_.default)(s))
            return;
        (0,
        vr.default)(s, (d,g)=>{
            let h = r[g]
              , {action: y, id: _, mediaQueries: L=o.mediaQueryKeys} = h
              , {actionListId: A} = y.config;
            XV(L, o.mediaQueryKeys) || t.dispatch(ns()),
            y.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(I=>{
                let {continuousParameterGroupId: R} = I
                  , C = (0,
                gt.default)(a, `${A}.continuousParameterGroups`, [])
                  , w = (0,
                i_.default)(C, ({id: B})=>B === R)
                  , V = (I.smoothing || 0) / 100
                  , X = (I.restingState || 0) / 100;
                w && d.forEach((B,Y)=>{
                    let te = _ + ys + Y;
                    iH({
                        store: t,
                        eventStateKey: te,
                        eventTarget: B,
                        eventId: _,
                        eventConfig: I,
                        actionListId: A,
                        parameterGroup: w,
                        smoothing: V,
                        restingValue: X
                    })
                }
                )
            }
            ),
            (y.actionTypeId === Ve.GENERAL_START_ACTION || Es(y.actionTypeId)) && v_({
                store: t,
                actionListId: A,
                eventId: _
            })
        }
        );
        let c = d=>{
            let {ixSession: g} = t.getState();
            lH(s, (h,y,_)=>{
                let L = r[y]
                  , A = g.eventState[_]
                  , {action: S, mediaQueries: I=o.mediaQueryKeys} = L;
                if (!_i(I, g.mediaQueryKey))
                    return;
                let R = (C={})=>{
                    let w = i({
                        store: t,
                        element: h,
                        event: L,
                        eventConfig: C,
                        nativeEvent: d,
                        eventStateKey: _
                    }, A);
                    kV(w, A) || t.dispatch(Za(_, w))
                }
                ;
                S.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(L.config) ? L.config : [L.config]).forEach(R) : R()
            }
            )
        }
          , f = (0,
        c_.default)(c, zV)
          , p = ({target: d=document, types: g, throttle: h})=>{
            g.split(" ").filter(Boolean).forEach(y=>{
                let _ = h ? f : c;
                d.addEventListener(y, _),
                t.dispatch(oi(d, [y, _]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e)
    }
    function pH(e) {
        if (!jV)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = os(o);
            t[a] || (i === Ye.MOUSE_CLICK || i === Ye.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function v_({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , c = o[t];
        if (c && c.useFirstGroupAsInitialState) {
            let f = (0,
            gt.default)(c, "actionItemGroups[0].actionItems", [])
              , p = (0,
            gt.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!_i(p, i.mediaQueryKey))
                return;
            f.forEach(d=>{
                let {config: g, actionTypeId: h} = d
                  , y = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : g
                  , _ = mi({
                    config: y,
                    event: s,
                    elementApi: Pe
                })
                  , L = Ti(h);
                _.forEach(A=>{
                    let S = L ? _s(h)(A, d) : null;
                    Ts({
                        destination: ms({
                            element: A,
                            actionItem: d,
                            elementApi: Pe
                        }, S),
                        immediate: !0,
                        store: e,
                        element: A,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: S
                    })
                }
                )
            }
            )
        }
    }
    function g_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        vr.default)(t, r=>{
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                bs(r, e),
                i && e.dispatch(dr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function pr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? Yr(r, yi) : null;
        (0,
        vr.default)(o, c=>{
            let f = (0,
            gt.default)(c, "actionItem.config.target.boundaryMode")
              , p = n ? c.eventStateKey === n : !0;
            if (c.actionListId === i && c.eventId === t && p) {
                if (s && f && !as(s, c.element))
                    return;
                bs(c, e),
                c.verbose && e.dispatch(dr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Jr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: c, ixSession: f} = e.getState()
          , {events: p} = c
          , d = p[t] || {}
          , {mediaQueries: g=c.mediaQueryKeys} = d
          , h = (0,
        gt.default)(c, `actionLists.${i}`, {})
          , {actionItemGroups: y, useFirstGroupAsInitialState: _} = h;
        if (!y || !y.length)
            return !1;
        o >= y.length && (0,
        gt.default)(d, "config.loop") && (o = 0),
        o === 0 && _ && o++;
        let A = (o === 0 || o === 1 && _) && Es(d.action?.actionTypeId) ? d.config.delay : void 0
          , S = (0,
        gt.default)(y, [o, "actionItems"], []);
        if (!S.length || !_i(g, f.mediaQueryKey))
            return !1;
        let I = f.hasBoundaryNodes && r ? Yr(r, yi) : null
          , R = qV(S)
          , C = !1;
        return S.forEach((w,V)=>{
            let {config: X, actionTypeId: B} = w
              , Y = Ti(B)
              , {target: te} = X;
            if (!te)
                return;
            let q = te.boundaryMode ? I : null;
            mi({
                config: X,
                event: d,
                eventTarget: r,
                elementRoot: q,
                elementApi: Pe
            }).forEach((N,k)=>{
                let U = Y ? _s(B)(N, w) : null
                  , J = Y ? BV(B)(N, w) : null;
                C = !0;
                let ee = R === V && k === 0
                  , P = MV({
                    element: N,
                    actionItem: w
                })
                  , W = ms({
                    element: N,
                    actionItem: w,
                    elementApi: Pe
                }, U);
                Ts({
                    store: e,
                    element: N,
                    actionItem: w,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ee,
                    computedStyle: P,
                    destination: W,
                    immediate: a,
                    verbose: s,
                    pluginInstance: U,
                    pluginDuration: J,
                    instanceDelay: A
                })
            }
            )
        }
        ),
        C
    }
    function Ts(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: c, restingValue: f, eventId: p} = n, d = !c, g = NV(), {ixElements: h, ixSession: y, ixData: _} = t.getState(), L = LV(h, i), {refState: A} = h[L] || {}, S = ss(i), I = y.reducedMotion && Xo[o.actionTypeId], R;
        if (I && c)
            switch (_.events[p]?.eventTypeId) {
            case Ye.MOUSE_MOVE:
            case Ye.MOUSE_MOVE_IN_VIEWPORT:
                R = f;
                break;
            default:
                R = .5;
                break
            }
        let C = DV(i, A, r, o, Pe, s);
        if (t.dispatch(Ja({
            instanceId: g,
            elementId: L,
            origin: C,
            refType: S,
            skipMotion: I,
            skipToValue: R,
            ...n
        })),
        h_(document.body, "ix2-animation-started", g),
        a) {
            vH(t, g);
            return
        }
        Ft({
            store: t,
            select: ({ixInstances: w})=>w[g],
            onChange: E_
        }),
        d && t.dispatch(si(g, y.tick))
    }
    function bs(e, t) {
        h_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === l_ && VV(o, n, Pe),
        t.dispatch(es(e.id))
    }
    function h_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function vH(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(si(t, 0)),
        e.dispatch(ai(performance.now(), r));
        let {ixInstances: n} = e.getState();
        E_(n[t], e)
    }
    function E_(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: c, current: f, groupIndex: p, eventId: d, eventTarget: g, eventStateKey: h, actionListId: y, isCarrier: _, styleProp: L, verbose: A, pluginInstance: S} = e
          , {ixData: I, ixSession: R} = t.getState()
          , {events: C} = I
          , w = C[d] || {}
          , {mediaQueries: V=I.mediaQueryKeys} = w;
        if (_i(V, R.mediaQueryKey) && (n || r || i)) {
            if (f || c === CV && i) {
                t.dispatch(ts(o, s, f, a));
                let {ixElements: X} = t.getState()
                  , {ref: B, refType: Y, refState: te} = X[o] || {}
                  , q = te && te[s];
                (Y === l_ || Ti(s)) && PV(B, te, q, d, a, L, Pe, c, S)
            }
            if (i) {
                if (_) {
                    let X = Jr({
                        store: t,
                        eventId: d,
                        eventTarget: g,
                        eventStateKey: h,
                        actionListId: y,
                        groupIndex: p + 1,
                        verbose: A
                    });
                    A && !X && t.dispatch(dr({
                        actionListId: y,
                        isPlaying: !1
                    }))
                }
                bs(e, t)
            }
        }
    }
    var i_, gt, o_, a_, s_, u_, vr, c_, Ei, RV, Es, ys, yi, l_, CV, r_, mi, LV, ms, Ft, NV, PV, f_, qV, MV, DV, FV, GV, UV, _i, VV, HV, WV, XV, kV, Ti, _s, BV, n_, jV, zV, sH, cH, lH, fH, hs = he(()=>{
        "use strict";
        i_ = ue(ya()),
        gt = ue(Hn()),
        o_ = ue(LE()),
        a_ = ue(ny()),
        s_ = ue(oy()),
        u_ = ue(sy()),
        vr = ue(py()),
        c_ = ue(_y());
        De();
        Ei = ue(Dt());
        ui();
        xy();
        t_();
        RV = Object.keys(Ho),
        Es = e=>RV.includes(e),
        {COLON_DELIMITER: ys, BOUNDARY_SELECTOR: yi, HTML_ELEMENT: l_, RENDER_GENERAL: CV, W_MOD_IX: r_} = we,
        {getAffectedElements: mi, getElementId: LV, getDestinationValues: ms, observeStore: Ft, getInstanceId: NV, renderHTMLElement: PV, clearAllStyles: f_, getMaxDurationItemIndex: qV, getComputedStyle: MV, getInstanceOrigin: DV, reduceListToGroup: FV, shouldNamespaceEventParameter: GV, getNamespacedParameterId: UV, shouldAllowMediaQuery: _i, cleanupHTMLElement: VV, clearObjectCache: HV, stringifyTarget: WV, mediaQueriesEqual: XV, shallowEqual: kV} = Ei.IX2VanillaUtils,
        {isPluginType: Ti, createPluginInstance: _s, getPluginDuration: BV} = Ei.IX2VanillaPlugins,
        n_ = navigator.userAgent,
        jV = n_.match(/iPad/i) || n_.match(/iPhone/),
        zV = 12;
        sH = ["resize", "orientationchange"];
        cH = (e,t)=>(0,
        a_.default)((0,
        u_.default)(e, t), s_.default),
        lH = (e,t)=>{
            (0,
            vr.default)(e, (r,n)=>{
                r.forEach((i,o)=>{
                    let a = n + ys + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        fH = e=>{
            let t = {
                target: e.target,
                targets: e.targets
            };
            return mi({
                config: t,
                elementApi: Pe
            })
        }
    }
    );
    var __ = u(ht=>{
        "use strict";
        var gH = un().default
          , hH = tu().default;
        Object.defineProperty(ht, "__esModule", {
            value: !0
        });
        ht.actions = void 0;
        ht.destroy = m_;
        ht.init = TH;
        ht.setEnv = _H;
        ht.store = void 0;
        Vl();
        var EH = Uo()
          , yH = hH((dE(),
        Je(fE)))
          , Is = (hs(),
        Je(y_))
          , mH = gH((ui(),
        Je(by)));
        ht.actions = mH;
        var Os = ht.store = (0,
        EH.createStore)(yH.default);
        function _H(e) {
            e() && (0,
            Is.observeRequests)(Os)
        }
        function TH(e) {
            m_(),
            (0,
            Is.startEngine)({
                store: Os,
                rawData: e,
                allowEvents: !0
            })
        }
        function m_() {
            (0,
            Is.stopEngine)(Os)
        }
    }
    );
    var O_ = u((Fj,I_)=>{
        "use strict";
        var T_ = Be()
          , b_ = __();
        b_.setEnv(T_.env);
        T_.define("ix2", I_.exports = function() {
            return b_
        }
        )
    }
    );
    var x_ = u((Gj,A_)=>{
        "use strict";
        var gr = Be();
        gr.define("links", A_.exports = function(e, t) {
            var r = {}, n = e(window), i, o = gr.env(), a = window.location, s = document.createElement("a"), c = "w--current", f = /index\.(html|php)$/, p = /\/$/, d, g;
            r.ready = r.design = r.preview = h;
            function h() {
                i = o && gr.env("design"),
                g = gr.env("slug") || a.pathname || "",
                gr.scroll.off(_),
                d = [];
                for (var A = document.links, S = 0; S < A.length; ++S)
                    y(A[S]);
                d.length && (gr.scroll.on(_),
                _())
            }
            function y(A) {
                if (!(A.dataset && A.dataset.wfCurrentLocale)) {
                    var S = i && A.getAttribute("href-disabled") || A.getAttribute("href");
                    if (s.href = S,
                    !(S.indexOf(":") >= 0)) {
                        var I = e(A);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var R = e(s.hash);
                            R.length && d.push({
                                link: I,
                                sec: R,
                                active: !1
                            });
                            return
                        }
                        if (!(S === "#" || S === "")) {
                            var C = s.href === a.href || S === g || f.test(S) && p.test(g);
                            L(I, c, C)
                        }
                    }
                }
            }
            function _() {
                var A = n.scrollTop()
                  , S = n.height();
                t.each(d, function(I) {
                    if (!(I.link[0] && I.link[0].dataset && I.link[0].dataset.wfCurrentLocale)) {
                        var R = I.link
                          , C = I.sec
                          , w = C.offset().top
                          , V = C.outerHeight()
                          , X = S * .5
                          , B = C.is(":visible") && w + V - X >= A && w + X <= A + S;
                        I.active !== B && (I.active = B,
                        L(R, c, B))
                    }
                })
            }
            function L(A, S, I) {
                var R = A.hasClass(S);
                I && R || !I && !R || (I ? A.addClass(S) : A.removeClass(S))
            }
            return r
        }
        )
    }
    );
    var w_ = u((Uj,S_)=>{
        "use strict";
        var Oi = Be();
        Oi.define("scroll", S_.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = y() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(q) {
                window.setTimeout(q, 15)
            }
              , c = Oi.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , p = 'a[href="#"]'
              , d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")"
              , g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , h = document.createElement("style");
            h.appendChild(document.createTextNode(g));
            function y() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
            function L(q) {
                return _.test(q.hash) && q.host + q.pathname === r.host + r.pathname
            }
            let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function S() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
            }
            function I(q, b) {
                var N;
                switch (b) {
                case "add":
                    N = q.attr("tabindex"),
                    N ? q.attr("data-wf-tabindex-swap", N) : q.attr("tabindex", "-1");
                    break;
                case "remove":
                    N = q.attr("data-wf-tabindex-swap"),
                    N ? (q.attr("tabindex", N),
                    q.removeAttr("data-wf-tabindex-swap")) : q.removeAttr("tabindex");
                    break
                }
                q.toggleClass("wf-force-outline-none", b === "add")
            }
            function R(q) {
                var b = q.currentTarget;
                if (!(Oi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
                    var N = L(b) ? b.hash : "";
                    if (N !== "") {
                        var k = e(N);
                        k.length && (q && (q.preventDefault(),
                        q.stopPropagation()),
                        C(N, q),
                        window.setTimeout(function() {
                            w(k, function() {
                                I(k, "add"),
                                k.get(0).focus({
                                    preventScroll: !0
                                }),
                                I(k, "remove")
                            })
                        }, q ? 0 : 300))
                    }
                }
            }
            function C(q) {
                if (r.hash !== q && n && n.pushState && !(Oi.env.chrome && r.protocol === "file:")) {
                    var b = n.state && n.state.hash;
                    b !== q && n.pushState({
                        hash: q
                    }, "", q)
                }
            }
            function w(q, b) {
                var N = i.scrollTop()
                  , k = V(q);
                if (N !== k) {
                    var U = X(q, N, k)
                      , J = Date.now()
                      , ee = function() {
                        var P = Date.now() - J;
                        window.scroll(0, B(N, k, P, U)),
                        P <= U ? s(ee) : typeof b == "function" && b()
                    };
                    s(ee)
                }
            }
            function V(q) {
                var b = e(f)
                  , N = b.css("position") === "fixed" ? b.outerHeight() : 0
                  , k = q.offset().top - N;
                if (q.data("scroll") === "mid") {
                    var U = i.height() - N
                      , J = q.outerHeight();
                    J < U && (k -= Math.round((U - J) / 2))
                }
                return k
            }
            function X(q, b, N) {
                if (S())
                    return 0;
                var k = 1;
                return a.add(q).each(function(U, J) {
                    var ee = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(ee) && ee >= 0 && (k = ee)
                }),
                (472.143 * Math.log(Math.abs(b - N) + 125) - 2e3) * k
            }
            function B(q, b, N, k) {
                return N > k ? b : q + (b - q) * Y(N / k)
            }
            function Y(q) {
                return q < .5 ? 4 * q * q * q : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1
            }
            function te() {
                var {WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: b} = t;
                o.on(b, d, R),
                o.on(q, p, function(N) {
                    N.preventDefault()
                }),
                document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: te
            }
        }
        )
    }
    );
    var C_ = u((Vj,R_)=>{
        "use strict";
        var bH = Be();
        bH.define("touch", R_.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), f, p;
                o.addEventListener("touchstart", d, !1),
                o.addEventListener("touchmove", g, !1),
                o.addEventListener("touchend", h, !1),
                o.addEventListener("touchcancel", y, !1),
                o.addEventListener("mousedown", d, !1),
                o.addEventListener("mousemove", g, !1),
                o.addEventListener("mouseup", h, !1),
                o.addEventListener("mouseout", y, !1);
                function d(L) {
                    var A = L.touches;
                    A && A.length > 1 || (a = !0,
                    A ? (s = !0,
                    f = A[0].clientX) : f = L.clientX,
                    p = f)
                }
                function g(L) {
                    if (a) {
                        if (s && L.type === "mousemove") {
                            L.preventDefault(),
                            L.stopPropagation();
                            return
                        }
                        var A = L.touches
                          , S = A ? A[0].clientX : L.clientX
                          , I = S - p;
                        p = S,
                        Math.abs(I) > c && r && String(r()) === "" && (i("swipe", L, {
                            direction: I > 0 ? "right" : "left"
                        }),
                        y())
                    }
                }
                function h(L) {
                    if (a && (a = !1,
                    s && L.type === "mouseup")) {
                        L.preventDefault(),
                        L.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function y() {
                    a = !1
                }
                function _() {
                    o.removeEventListener("touchstart", d, !1),
                    o.removeEventListener("touchmove", g, !1),
                    o.removeEventListener("touchend", h, !1),
                    o.removeEventListener("touchcancel", y, !1),
                    o.removeEventListener("mousedown", d, !1),
                    o.removeEventListener("mousemove", g, !1),
                    o.removeEventListener("mouseup", h, !1),
                    o.removeEventListener("mouseout", y, !1),
                    o = null
                }
                this.destroy = _
            }
            function i(o, a, s) {
                var c = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var L_ = u(As=>{
        "use strict";
        Object.defineProperty(As, "__esModule", {
            value: !0
        });
        As.default = IH;
        function IH(e, t, r, n, i, o, a, s, c, f, p, d, g) {
            return function(h) {
                e(h);
                var y = h.form
                  , _ = {
                    name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                    pageId: y.attr("data-wf-page-id") || "",
                    elementId: y.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                    trackingCookies: n()
                };
                let L = y.attr("data-wf-flow");
                L && (_.wfFlow = L),
                i(h);
                var A = o(y, _.fields);
                if (A)
                    return a(A);
                if (_.fileUploads = s(y),
                c(h),
                !f) {
                    p(h);
                    return
                }
                d.ajax({
                    url: g,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(S) {
                    S && S.code === 200 && (h.success = !0),
                    p(h)
                }).fail(function() {
                    p(h)
                })
            }
        }
    }
    );
    var P_ = u((Wj,N_)=>{
        "use strict";
        var Ai = Be();
        Ai.define("forms", N_.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", c, f = /e(-)?mail/i, p = /^\S+@\S+$/, d = window.alert, g = Ai.env(), h, y, _, L = /list-manage[1-9]?.com/i, A = t.debounce(function() {
                d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                S(),
                !g && !h && R()
            }
            ;
            function S() {
                c = e("html").attr("data-wf-site"),
                y = "https://webflow.com/api/v1/form/" + c,
                a && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")),
                _ = `${y}/signFile`,
                i = e(s + " form"),
                i.length && i.each(I)
            }
            function I(P, W) {
                var j = e(W)
                  , D = e.data(W, s);
                D || (D = e.data(W, s, {
                    form: j
                })),
                C(D);
                var M = j.closest("div.w-form");
                D.done = M.find("> .w-form-done"),
                D.fail = M.find("> .w-form-fail"),
                D.fileUploads = M.find(".w-file-upload"),
                D.fileUploads.each(function(oe) {
                    U(oe, D)
                });
                var $ = D.form.attr("aria-label") || D.form.attr("data-name") || "Form";
                D.done.attr("aria-label") || D.form.attr("aria-label", $),
                D.done.attr("tabindex", "-1"),
                D.done.attr("role", "region"),
                D.done.attr("aria-label") || D.done.attr("aria-label", $ + " success"),
                D.fail.attr("tabindex", "-1"),
                D.fail.attr("role", "region"),
                D.fail.attr("aria-label") || D.fail.attr("aria-label", $ + " failure");
                var ie = D.action = j.attr("action");
                if (D.handler = null,
                D.redirect = j.attr("data-redirect"),
                L.test(ie)) {
                    D.handler = b;
                    return
                }
                if (!ie) {
                    if (c) {
                        D.handler = (()=>{
                            let oe = L_().default;
                            return oe(C, o, Ai, Y, k, V, d, X, w, c, N, e, y)
                        }
                        )();
                        return
                    }
                    A()
                }
            }
            function R() {
                h = !0,
                n.on("submit", s + " form", function(oe) {
                    var Z = e.data(this, s);
                    Z.handler && (Z.evt = oe,
                    Z.handler(Z))
                });
                let P = ".w-checkbox-input"
                  , W = ".w-radio-input"
                  , j = "w--redirected-checked"
                  , D = "w--redirected-focus"
                  , M = "w--redirected-focus-visible"
                  , $ = ":focus-visible, [data-wf-focus-visible]"
                  , ie = [["checkbox", P], ["radio", W]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + P + ")", oe=>{
                    e(oe.target).siblings(P).toggleClass(j)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', oe=>{
                    e(`input[name="${oe.target.name}"]:not(${P})`).map((de,ut)=>e(ut).siblings(W).removeClass(j));
                    let Z = e(oe.target);
                    Z.hasClass("w-radio-input") || Z.siblings(W).addClass(j)
                }
                ),
                ie.forEach(([oe,Z])=>{
                    n.on("focus", s + ` form input[type="${oe}"]:not(` + Z + ")", de=>{
                        e(de.target).siblings(Z).addClass(D),
                        e(de.target).filter($).siblings(Z).addClass(M)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${oe}"]:not(` + Z + ")", de=>{
                        e(de.target).siblings(Z).removeClass(`${D} ${M}`)
                    }
                    )
                }
                )
            }
            function C(P) {
                var W = P.btn = P.form.find(':input[type="submit"]');
                P.wait = P.btn.attr("data-wait") || null,
                P.success = !1,
                W.prop("disabled", !1),
                P.label && W.val(P.label)
            }
            function w(P) {
                var W = P.btn
                  , j = P.wait;
                W.prop("disabled", !0),
                j && (P.label = W.val(),
                W.val(j))
            }
            function V(P, W) {
                var j = null;
                return W = W || {},
                P.find(':input:not([type="submit"]):not([type="file"])').each(function(D, M) {
                    var $ = e(M)
                      , ie = $.attr("type")
                      , oe = $.attr("data-name") || $.attr("name") || "Field " + (D + 1)
                      , Z = $.val();
                    if (ie === "checkbox")
                        Z = $.is(":checked");
                    else if (ie === "radio") {
                        if (W[oe] === null || typeof W[oe] == "string")
                            return;
                        Z = P.find('input[name="' + $.attr("name") + '"]:checked').val() || null
                    }
                    typeof Z == "string" && (Z = e.trim(Z)),
                    W[oe] = Z,
                    j = j || te($, ie, oe, Z)
                }),
                j
            }
            function X(P) {
                var W = {};
                return P.find(':input[type="file"]').each(function(j, D) {
                    var M = e(D)
                      , $ = M.attr("data-name") || M.attr("name") || "File " + (j + 1)
                      , ie = M.attr("data-value");
                    typeof ie == "string" && (ie = e.trim(ie)),
                    W[$] = ie
                }),
                W
            }
            let B = {
                _mkto_trk: "marketo"
            };
            function Y() {
                return document.cookie.split("; ").reduce(function(W, j) {
                    let D = j.split("=")
                      , M = D[0];
                    if (M in B) {
                        let $ = B[M]
                          , ie = D.slice(1).join("=");
                        W[$] = ie
                    }
                    return W
                }, {})
            }
            function te(P, W, j, D) {
                var M = null;
                return W === "password" ? M = "Passwords cannot be submitted." : P.attr("required") ? D ? f.test(P.attr("type")) && (p.test(D) || (M = "Please enter a valid email address for: " + j)) : M = "Please fill out the required field: " + j : j === "g-recaptcha-response" && !D && (M = "Please confirm you\u2019re not a robot."),
                M
            }
            function q(P) {
                k(P),
                N(P)
            }
            function b(P) {
                C(P);
                var W = P.form
                  , j = {};
                if (/^https/.test(o.href) && !/^https/.test(P.action)) {
                    W.attr("method", "post");
                    return
                }
                k(P);
                var D = V(W, j);
                if (D)
                    return d(D);
                w(P);
                var M;
                t.each(j, function(Z, de) {
                    f.test(de) && (j.EMAIL = Z),
                    /^((full[ _-]?)?name)$/i.test(de) && (M = Z),
                    /^(first[ _-]?name)$/i.test(de) && (j.FNAME = Z),
                    /^(last[ _-]?name)$/i.test(de) && (j.LNAME = Z)
                }),
                M && !j.FNAME && (M = M.split(" "),
                j.FNAME = M[0],
                j.LNAME = j.LNAME || M[1]);
                var $ = P.action.replace("/post?", "/post-json?") + "&c=?"
                  , ie = $.indexOf("u=") + 2;
                ie = $.substring(ie, $.indexOf("&", ie));
                var oe = $.indexOf("id=") + 3;
                oe = $.substring(oe, $.indexOf("&", oe)),
                j["b_" + ie + "_" + oe] = "",
                e.ajax({
                    url: $,
                    data: j,
                    dataType: "jsonp"
                }).done(function(Z) {
                    P.success = Z.result === "success" || /already/.test(Z.msg),
                    P.success || console.info("MailChimp error: " + Z.msg),
                    N(P)
                }).fail(function() {
                    N(P)
                })
            }
            function N(P) {
                var W = P.form
                  , j = P.redirect
                  , D = P.success;
                if (D && j) {
                    Ai.location(j);
                    return
                }
                P.done.toggle(D),
                P.fail.toggle(!D),
                D ? P.done.focus() : P.fail.focus(),
                W.toggle(!D),
                C(P)
            }
            function k(P) {
                P.evt && P.evt.preventDefault(),
                P.evt = null
            }
            function U(P, W) {
                if (!W.fileUploads || !W.fileUploads[P])
                    return;
                var j, D = e(W.fileUploads[P]), M = D.find("> .w-file-upload-default"), $ = D.find("> .w-file-upload-uploading"), ie = D.find("> .w-file-upload-success"), oe = D.find("> .w-file-upload-error"), Z = M.find("#multipe-input"), de = M.find(".w-file-upload-label"), ut = de.children(), ce = oe.find(".w-file-upload-error-msg"), v = ie.find(".w-file-upload-file"), F = ie.find(".w-file-remove-link"), z = v.find(".w-file-upload-file-name"), H = ce.attr("data-w-size-error"), ve = ce.attr("data-w-type-error"), xt = ce.attr("data-w-generic-error");
                if (g || de.on("click keydown", function(m) {
                    m.type === "keydown" && m.which !== 13 && m.which !== 32 || (m.preventDefault(),
                    Z.click())
                }),
                de.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                F.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                g)
                    Z.on("click", function(m) {
                        m.preventDefault()
                    }),
                    de.on("click", function(m) {
                        m.preventDefault()
                    }),
                    ut.on("click", function(m) {
                        m.preventDefault()
                    });
                else {
                    F.on("click keydown", function(m) {
                        if (m.type === "keydown") {
                            if (m.which !== 13 && m.which !== 32)
                                return;
                            m.preventDefault()
                        }
                        Z.removeAttr("data-value"),
                        Z.val(""),
                        z.html(""),
                        M.toggle(!0),
                        ie.toggle(!1),
                        de.focus()
                    }),
                    Z.on("change", function(m) {
                        Array.from(m.target.files).forEach(file => {
                            J(file, E);
                        });
                    });
                    var ct = de.outerHeight();
                    Z.height(ct),
                    Z.width(1)
                }
                function l(m) {
                    var x = m.responseJSON && m.responseJSON.msg
                      , K = xt;
                    typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0 ? K = ve : typeof x == "string" && x.indexOf("MaxFileSizeError") === 0 && (K = H),
                    ce.text(K),
                    Z.removeAttr("data-value"),
                    Z.val(""),
                    $.toggle(!1),
                    M.toggle(!0),
                    oe.toggle(!0),
                    oe.focus(),
                    W.fileUploads[P].uploading = !1,
                    O() || C(W)
                }
                function E(m, x) {
                    if (m)
                        return l(m);
                    var K = x.fileName
                      , re = x.postData
                      , pe = x.fileId
                      , G = x.s3Url;
                    Z.attr("data-value", pe),
                    ee(G, re, j, K, T)
                }
                function T(m) {
                    if (m)
                        return l(m);
                    $.toggle(!1),
                    ie.css("display", "inline-block"),
                    ie.focus(),
                    W.fileUploads[P].uploading = !1,
                    O() || C(W)
                }
                function O() {
                    var m = W.fileUploads && W.fileUploads.toArray() || [];
                    return m.some(function(x) {
                        return x.uploading
                    })
                }
            }
            function J(P, W) {
                var j = new URLSearchParams({
                    name: P.name,
                    size: P.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${j}`,
                    crossDomain: !0
                }).done(function(D) {
                    W(null, D)
                }).fail(function(D) {
                    W(D)
                })
            }
            function ee(P, W, j, D, M) {
                var $ = new FormData;
                for (var ie in W)
                    $.append(ie, W[ie]);
                $.append("file", j, D),
                e.ajax({
                    type: "POST",
                    url: P,
                    data: $,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    M(null)
                }).fail(function(oe) {
                    M(oe)
                })
            }
            return r
        }
        )
    }
    );
    var M_ = u((Xj,q_)=>{
        "use strict";
        var At = Be()
          , OH = qi()
          , Se = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        At.define("navbar", q_.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(window), o = e(document), a = t.debounce, s, c, f, p, d = At.env(), g = '<div class="w-nav-overlay" data-wf-ignore />', h = ".w-nav", y = "w--open", _ = "w--nav-dropdown-open", L = "w--nav-dropdown-toggle-open", A = "w--nav-dropdown-list-open", S = "w--nav-link-open", I = OH.triggers, R = e();
            r.ready = r.design = r.preview = C,
            r.destroy = function() {
                R = e(),
                w(),
                c && c.length && c.each(Y)
            }
            ;
            function C() {
                f = d && At.env("design"),
                p = At.env("editor"),
                s = e(document.body),
                c = o.find(h),
                c.length && (c.each(B),
                w(),
                V())
            }
            function w() {
                At.resize.off(X)
            }
            function V() {
                At.resize.on(X)
            }
            function X() {
                c.each(M)
            }
            function B(v, F) {
                var z = e(F)
                  , H = e.data(F, h);
                H || (H = e.data(F, h, {
                    open: !1,
                    el: z,
                    config: {},
                    selectedIdx: -1
                })),
                H.menu = z.find(".w-nav-menu"),
                H.links = H.menu.find(".w-nav-link"),
                H.dropdowns = H.menu.find(".w-dropdown"),
                H.dropdownToggle = H.menu.find(".w-dropdown-toggle"),
                H.dropdownList = H.menu.find(".w-dropdown-list"),
                H.button = z.find(".w-nav-button"),
                H.container = z.find(".w-container"),
                H.overlayContainerId = "w-nav-overlay-" + v,
                H.outside = j(H);
                var ve = z.find(".w-nav-brand");
                ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"),
                H.button.attr("style", "-webkit-user-select: text;"),
                H.button.attr("aria-label") == null && H.button.attr("aria-label", "menu"),
                H.button.attr("role", "button"),
                H.button.attr("tabindex", "0"),
                H.button.attr("aria-controls", H.overlayContainerId),
                H.button.attr("aria-haspopup", "menu"),
                H.button.attr("aria-expanded", "false"),
                H.el.off(h),
                H.button.off(h),
                H.menu.off(h),
                b(H),
                f ? (te(H),
                H.el.on("setting" + h, N(H))) : (q(H),
                H.button.on("click" + h, P(H)),
                H.menu.on("click" + h, "a", W(H)),
                H.button.on("keydown" + h, k(H)),
                H.el.on("keydown" + h, U(H))),
                M(v, F)
            }
            function Y(v, F) {
                var z = e.data(F, h);
                z && (te(z),
                e.removeData(F, h))
            }
            function te(v) {
                v.overlay && (ce(v, !0),
                v.overlay.remove(),
                v.overlay = null)
            }
            function q(v) {
                v.overlay || (v.overlay = e(g).appendTo(v.el),
                v.overlay.attr("id", v.overlayContainerId),
                v.parent = v.menu.parent(),
                ce(v, !0))
            }
            function b(v) {
                var F = {}
                  , z = v.config || {}
                  , H = F.animation = v.el.attr("data-animation") || "default";
                F.animOver = /^over/.test(H),
                F.animDirect = /left$/.test(H) ? -1 : 1,
                z.animation !== H && v.open && t.defer(ee, v),
                F.easing = v.el.attr("data-easing") || "ease",
                F.easing2 = v.el.attr("data-easing2") || "ease";
                var ve = v.el.attr("data-duration");
                F.duration = ve != null ? Number(ve) : 400,
                F.docHeight = v.el.attr("data-doc-height"),
                v.config = F
            }
            function N(v) {
                return function(F, z) {
                    z = z || {};
                    var H = i.width();
                    b(v),
                    z.open === !0 && de(v, !0),
                    z.open === !1 && ce(v, !0),
                    v.open && t.defer(function() {
                        H !== i.width() && ee(v)
                    })
                }
            }
            function k(v) {
                return function(F) {
                    switch (F.keyCode) {
                    case Se.SPACE:
                    case Se.ENTER:
                        return P(v)(),
                        F.preventDefault(),
                        F.stopPropagation();
                    case Se.ESCAPE:
                        return ce(v),
                        F.preventDefault(),
                        F.stopPropagation();
                    case Se.ARROW_RIGHT:
                    case Se.ARROW_DOWN:
                    case Se.HOME:
                    case Se.END:
                        return v.open ? (F.keyCode === Se.END ? v.selectedIdx = v.links.length - 1 : v.selectedIdx = 0,
                        J(v),
                        F.preventDefault(),
                        F.stopPropagation()) : (F.preventDefault(),
                        F.stopPropagation())
                    }
                }
            }
            function U(v) {
                return function(F) {
                    if (v.open)
                        switch (v.selectedIdx = v.links.index(document.activeElement),
                        F.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return F.keyCode === Se.END ? v.selectedIdx = v.links.length - 1 : v.selectedIdx = 0,
                            J(v),
                            F.preventDefault(),
                            F.stopPropagation();
                        case Se.ESCAPE:
                            return ce(v),
                            v.button.focus(),
                            F.preventDefault(),
                            F.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return v.selectedIdx = Math.max(-1, v.selectedIdx - 1),
                            J(v),
                            F.preventDefault(),
                            F.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1),
                            J(v),
                            F.preventDefault(),
                            F.stopPropagation()
                        }
                }
            }
            function J(v) {
                if (v.links[v.selectedIdx]) {
                    var F = v.links[v.selectedIdx];
                    F.focus(),
                    W(F)
                }
            }
            function ee(v) {
                v.open && (ce(v, !0),
                de(v, !0))
            }
            function P(v) {
                return a(function() {
                    v.open ? ce(v) : de(v)
                })
            }
            function W(v) {
                return function(F) {
                    var z = e(this)
                      , H = z.attr("href");
                    if (!At.validClick(F.currentTarget)) {
                        F.preventDefault();
                        return
                    }
                    H && H.indexOf("#") === 0 && v.open && ce(v)
                }
            }
            function j(v) {
                return v.outside && o.off("click" + h, v.outside),
                function(F) {
                    var z = e(F.target);
                    p && z.closest(".w-editor-bem-EditorOverlay").length || D(v, z)
                }
            }
            var D = a(function(v, F) {
                if (v.open) {
                    var z = F.closest(".w-nav-menu");
                    v.menu.is(z) || ce(v)
                }
            });
            function M(v, F) {
                var z = e.data(F, h)
                  , H = z.collapsed = z.button.css("display") !== "none";
                if (z.open && !H && !f && ce(z, !0),
                z.container.length) {
                    var ve = ie(z);
                    z.links.each(ve),
                    z.dropdowns.each(ve)
                }
                z.open && ut(z)
            }
            var $ = "max-width";
            function ie(v) {
                var F = v.container.css($);
                return F === "none" && (F = ""),
                function(z, H) {
                    H = e(H),
                    H.css($, ""),
                    H.css($) === "none" && H.css($, F)
                }
            }
            function oe(v, F) {
                F.setAttribute("data-nav-menu-open", "")
            }
            function Z(v, F) {
                F.removeAttribute("data-nav-menu-open")
            }
            function de(v, F) {
                if (v.open)
                    return;
                v.open = !0,
                v.menu.each(oe),
                v.links.addClass(S),
                v.dropdowns.addClass(_),
                v.dropdownToggle.addClass(L),
                v.dropdownList.addClass(A),
                v.button.addClass(y);
                var z = v.config
                  , H = z.animation;
                (H === "none" || !n.support.transform || z.duration <= 0) && (F = !0);
                var ve = ut(v)
                  , xt = v.menu.outerHeight(!0)
                  , ct = v.menu.outerWidth(!0)
                  , l = v.el.height()
                  , E = v.el[0];
                if (M(0, E),
                I.intro(0, E),
                At.redraw.up(),
                f || o.on("click" + h, v.outside),
                F) {
                    m();
                    return
                }
                var T = "transform " + z.duration + "ms " + z.easing;
                if (v.overlay && (R = v.menu.prev(),
                v.overlay.show().append(v.menu)),
                z.animOver) {
                    n(v.menu).add(T).set({
                        x: z.animDirect * ct,
                        height: ve
                    }).start({
                        x: 0
                    }).then(m),
                    v.overlay && v.overlay.width(ct);
                    return
                }
                var O = l + xt;
                n(v.menu).add(T).set({
                    y: -O
                }).start({
                    y: 0
                }).then(m);
                function m() {
                    v.button.attr("aria-expanded", "true")
                }
            }
            function ut(v) {
                var F = v.config
                  , z = F.docHeight ? o.height() : s.height();
                return F.animOver ? v.menu.height(z) : v.el.css("position") !== "fixed" && (z -= v.el.outerHeight(!0)),
                v.overlay && v.overlay.height(z),
                z
            }
            function ce(v, F) {
                if (!v.open)
                    return;
                v.open = !1,
                v.button.removeClass(y);
                var z = v.config;
                if ((z.animation === "none" || !n.support.transform || z.duration <= 0) && (F = !0),
                I.outro(0, v.el[0]),
                o.off("click" + h, v.outside),
                F) {
                    n(v.menu).stop(),
                    E();
                    return
                }
                var H = "transform " + z.duration + "ms " + z.easing2
                  , ve = v.menu.outerHeight(!0)
                  , xt = v.menu.outerWidth(!0)
                  , ct = v.el.height();
                if (z.animOver) {
                    n(v.menu).add(H).start({
                        x: xt * z.animDirect
                    }).then(E);
                    return
                }
                var l = ct + ve;
                n(v.menu).add(H).start({
                    y: -l
                }).then(E);
                function E() {
                    v.menu.height(""),
                    n(v.menu).set({
                        x: 0,
                        y: 0
                    }),
                    v.menu.each(Z),
                    v.links.removeClass(S),
                    v.dropdowns.removeClass(_),
                    v.dropdownToggle.removeClass(L),
                    v.dropdownList.removeClass(A),
                    v.overlay && v.overlay.children().length && (R.length ? v.menu.insertAfter(R) : v.menu.prependTo(v.parent),
                    v.overlay.attr("style", "").hide()),
                    v.el.triggerHandler("w-close"),
                    v.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    Us();
    Hs();
    Xs();
    js();
    qi();
    O_();
    x_();
    w_();
    C_();
    P_();
    M_();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af01e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af01e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694440743857
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af01e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af01e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694441045537
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694448195726
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694448195726
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af035",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af035",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694449487588
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af035",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af035",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694452678438
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af02b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af02b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694589240976
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af02b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af02b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694592051217
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695221462547
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "23ddde14-b742-fd7c-6c19-ab45072d3d62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695221462548
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "a54122aa-a996-afba-5f6f-e82d3e97b75a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "a54122aa-a996-afba-5f6f-e82d3e97b75a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695304935942
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "a54122aa-a996-afba-5f6f-e82d3e97b75a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "a54122aa-a996-afba-5f6f-e82d3e97b75a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695304935943
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "f091316e-a557-1e2e-383b-0bc11f3e4eee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f091316e-a557-1e2e-383b-0bc11f3e4eee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695305277647
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "f091316e-a557-1e2e-383b-0bc11f3e4eee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f091316e-a557-1e2e-383b-0bc11f3e4eee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695305277647
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6579eddd80d70eda166af028",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af028",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695460998248
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6579eddd80d70eda166af028",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af028",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695461178343
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6579eddd80d70eda166af035|6a1f5af5-793b-d12c-99a3-53697cba3e28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af035|6a1f5af5-793b-d12c-99a3-53697cba3e28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-12-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1695554225387
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6579eddd80d70eda166af032",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af032",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695922136078
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6579eddd80d70eda166af032",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af032",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695922136078
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c5cc6e13-9c82-2f8c-d628-8b7e00dd8b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c5cc6e13-9c82-2f8c-d628-8b7e00dd8b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1697453488722
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c5cc6e13-9c82-2f8c-d628-8b7e00dd8b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c5cc6e13-9c82-2f8c-d628-8b7e00dd8b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1697453488725
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6579eddd80d70eda166af029",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af029",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1697454174108
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6579eddd80d70eda166af029",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6579eddd80d70eda166af029",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1697454174108
        }
    },
    "actionLists": {
        "a-5": {
            "id": "a-5",
            "title": "Scroll-line",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__scrolline",
                            "selectorGuids": ["0f724af3-24dd-8b7f-bb04-040c7ca1d80f"]
                        },
                        "yValue": -110,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".h-main__scrolline",
                            "selectorGuids": ["0f724af3-24dd-8b7f-bb04-040c7ca1d80f"]
                        },
                        "yValue": 110,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".h-main__scrolline",
                            "selectorGuids": ["0f724af3-24dd-8b7f-bb04-040c7ca1d80f"]
                        },
                        "yValue": -110,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694440755059
        },
        "a-6": {
            "id": "a-6",
            "title": "Home-load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|35adce4d-53c1-9760-45e1-7a96ae0b1c21"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|132cfb6c-af1d-3a5c-9fc5-81519df7a8f6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|132cfb6c-af1d-3a5c-9fc5-81519df7a8f6"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|35adce4d-53c1-9760-45e1-7a96ae0b1c21"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|35adce4d-53c1-9760-45e1-7a96ae0b1c21"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|35adce4d-53c1-9760-45e1-7a96ae0b1c21"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|132cfb6c-af1d-3a5c-9fc5-81519df7a8f6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af01e|132cfb6c-af1d-3a5c-9fc5-81519df7a8f6"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-9": {
            "id": "a-9",
            "title": "Nav-wh-open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d74"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d74"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d76"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d76"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d78"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d78"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7a"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7c"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7e"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d80"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d80"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d83"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d83"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d86"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d86"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d89"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d89"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d8c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d8c"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-25",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-56",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-links",
                            "selectorGuids": ["958b479b-4826-2e79-9743-c64d363d70ec"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-30",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-31",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": -45,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-32",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0.35,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": -0.35,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 240,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d74"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-35",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 240,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d74"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-36",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 260,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d76"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-37",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 260,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d76"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-38",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 280,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d78"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-39",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 280,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d78"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-40",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-41",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-42",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 320,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-43",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 320,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-44",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 340,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-45",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 340,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-46",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 360,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d80"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-47",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 360,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d80"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-48",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 380,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d83"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-49",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 380,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d83"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-50",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d86"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-51",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d86"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-52",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 420,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d89"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-53",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 420,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d89"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-54",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 440,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d8c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-55",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 440,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d8c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694432957034
        },
        "a-10": {
            "id": "a-10",
            "title": "Nav-wh-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d74"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d74"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d76"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d76"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d78"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d78"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7a"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7c"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d7e"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d80"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d80"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d83"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d83"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-25",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d86"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d86"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-27",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d89"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d89"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-29",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d8c"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "23ddde14-b742-fd7c-6c19-ab45072d3d8c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-32",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-links",
                            "selectorGuids": ["958b479b-4826-2e79-9743-c64d363d70ec"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-31",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694432957034
        },
        "a-11": {
            "id": "a-11",
            "title": "Robot-load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afce"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afce"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afd0"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afd0"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afce"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afce"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afd0"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af035|372a1f68-daab-09da-00c4-25293c36afd0"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-19": {
            "id": "a-19",
            "title": "Driver-load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|2173ff30-1874-dfea-211f-3f7ae81864d2"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|2173ff30-1874-dfea-211f-3f7ae81864d2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|9f9f8885-c014-d705-d9fd-6728355d6987"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|9f9f8885-c014-d705-d9fd-6728355d6987"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|17d827a6-c0c0-c51e-c3e9-7a8746fa3ca1"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|17d827a6-c0c0-c51e-c3e9-7a8746fa3ca1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|2173ff30-1874-dfea-211f-3f7ae81864d2"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|2173ff30-1874-dfea-211f-3f7ae81864d2"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|9f9f8885-c014-d705-d9fd-6728355d6987"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|9f9f8885-c014-d705-d9fd-6728355d6987"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|17d827a6-c0c0-c51e-c3e9-7a8746fa3ca1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af02b|17d827a6-c0c0-c51e-c3e9-7a8746fa3ca1"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-25": {
            "id": "a-25",
            "title": "Nav-wh-open-mob",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-25",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-56",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm.is-bl",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184", "c4fa31e7-0a72-d85c-0070-447f4515dad3"]
                        },
                        "globalSwatchId": "fcd0aa18",
                        "rValue": 40,
                        "bValue": 51,
                        "gValue": 45,
                        "aValue": 1
                    }
                }, {
                    "id": "a-25-n-55",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top.is-bl",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355", "644dec56-e37b-91d7-e87a-879e1f67ab72"]
                        },
                        "globalSwatchId": "fcd0aa18",
                        "rValue": 40,
                        "bValue": 51,
                        "gValue": 45,
                        "aValue": 1
                    }
                }, {
                    "id": "a-25-n-54",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__logo.wh-mob",
                            "selectorGuids": ["d18fa254-a9a9-5b2a-6f82-630d9728e873", "3ef01248-3bd9-3af2-addd-24b7f4058270"]
                        },
                        "globalSwatchId": "fcd0aa18",
                        "rValue": 40,
                        "bValue": 51,
                        "gValue": 45,
                        "aValue": 1
                    }
                }, {
                    "id": "a-25-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-links",
                            "selectorGuids": ["958b479b-4826-2e79-9743-c64d363d70ec"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-28",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-25-n-29",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": -45,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-25-n-30",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0.53,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-31",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": -0.53,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-32",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 240,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 240,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-35",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 260,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 260,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-36",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 280,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-37",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 280,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-38",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-39",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-40",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 320,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-41",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 320,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-42",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 340,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-43",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 340,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-44",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 360,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-45",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 360,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-46",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 380,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-47",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 380,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-48",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-49",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-50",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 420,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-51",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 420,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-52",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 440,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff6"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-53",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 440,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694432957034
        },
        "a-26": {
            "id": "a-26",
            "title": "Nav-wh-close 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-26",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-27",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff6"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-32",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm.is-bl",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184", "c4fa31e7-0a72-d85c-0070-447f4515dad3"]
                        },
                        "globalSwatchId": "66d3d4e2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-26-n-31",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top.is-bl",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355", "644dec56-e37b-91d7-e87a-879e1f67ab72"]
                        },
                        "globalSwatchId": "66d3d4e2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-26-n-30",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__logo.wh-mob",
                            "selectorGuids": ["d18fa254-a9a9-5b2a-6f82-630d9728e873", "3ef01248-3bd9-3af2-addd-24b7f4058270"]
                        },
                        "globalSwatchId": "66d3d4e2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-links",
                            "selectorGuids": ["958b479b-4826-2e79-9743-c64d363d70ec"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-29",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694432957034
        },
        "a-27": {
            "id": "a-27",
            "title": "Nav-open-m1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff3"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff3"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-25",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-27",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__logo.is-wh",
                            "selectorGuids": ["d18fa254-a9a9-5b2a-6f82-630d9728e873", "22753500-48a6-6e03-53a1-fc5be15cd3f4"]
                        },
                        "globalSwatchId": "fcd0aa18",
                        "rValue": 40,
                        "bValue": 51,
                        "gValue": 45,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-28",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "globalSwatchId": "fcd0aa18",
                        "rValue": 40,
                        "bValue": 51,
                        "gValue": 45,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-29",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "globalSwatchId": "fcd0aa18",
                        "rValue": 40,
                        "bValue": 51,
                        "gValue": 45,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-30",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-27-n-31",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": -45,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-27-n-32",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0.53,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": -0.53,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 240,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-35",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 240,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-36",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 260,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-37",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 260,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-38",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 280,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-39",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 280,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-40",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-41",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-42",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 320,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-43",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 320,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-44",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 340,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-45",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 340,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-46",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 360,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-47",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 360,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-48",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 380,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-49",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 380,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-50",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-51",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-52",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 420,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-53",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 420,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-54",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 440,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff3"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-55",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 440,
                        "easing": [0.4, 0, 0.6, 1],
                        "duration": 240,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff3"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694432957034
        },
        "a-4": {
            "id": "a-4",
            "title": "Nav-close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-29",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-31",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-32",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-35",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-36",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-37",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-38",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-39",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-40",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-41",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-42",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-43",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffea"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-44",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-45",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065ffed"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-46",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-47",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff0"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-48",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff3"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-49",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "d14c8061-9276-e6cf-3b22-4d2c3065fff3"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-54",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-4-n-53",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-52",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-4-n-51",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-25",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__logo.is-wh",
                            "selectorGuids": ["d18fa254-a9a9-5b2a-6f82-630d9728e873", "22753500-48a6-6e03-53a1-fc5be15cd3f4"]
                        },
                        "globalSwatchId": "66d3d4e2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-26",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "globalSwatchId": "66d3d4e2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-27",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "globalSwatchId": "66d3d4e2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-50",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694432957034
        },
        "a-28": {
            "id": "a-28",
            "title": "Nav-wh-openm2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-1",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "0f82a16d-d3e9-a5b3-e53d-83662851d27f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-1",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "0f82a16d-d3e9-a5b3-e53d-83662851d27f"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-2",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "f620d46d-833c-9627-47da-0a822d1f2919"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-2",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "f620d46d-833c-9627-47da-0a822d1f2919"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-3",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "571f75c7-447a-6746-270d-ac5c6a7f68c2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-3",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "571f75c7-447a-6746-270d-ac5c6a7f68c2"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-4",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c12f20b3-9b51-4ef4-68f7-12fb61fed91f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-4",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c12f20b3-9b51-4ef4-68f7-12fb61fed91f"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-54",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-5",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c7086b41-7559-5ca1-8c8b-41c8b324484a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-55",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-5",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c7086b41-7559-5ca1-8c8b-41c8b324484a"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-25",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-links",
                            "selectorGuids": ["958b479b-4826-2e79-9743-c64d363d70ec"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-28",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-28-n-29",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": -45,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-28-n-30",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0.53,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-31",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 320,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": -0.53,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-32",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 240,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 240,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 260,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-35",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 260,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-36",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 280,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-37",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 280,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-38",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-39",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-40",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 320,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-41",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 320,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-42",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 340,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-43",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 340,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-44",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 360,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-45",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 360,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-46",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 380,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-1",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "0f82a16d-d3e9-a5b3-e53d-83662851d27f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-47",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 380,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-1",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "0f82a16d-d3e9-a5b3-e53d-83662851d27f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-48",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-2",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "f620d46d-833c-9627-47da-0a822d1f2919"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-49",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-2",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "f620d46d-833c-9627-47da-0a822d1f2919"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-50",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 420,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-3",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "571f75c7-447a-6746-270d-ac5c6a7f68c2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-51",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 420,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-3",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "571f75c7-447a-6746-270d-ac5c6a7f68c2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-52",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 440,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-4",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c12f20b3-9b51-4ef4-68f7-12fb61fed91f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-53",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 440,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-4",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c12f20b3-9b51-4ef4-68f7-12fb61fed91f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-56",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 460,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-5",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c7086b41-7559-5ca1-8c8b-41c8b324484a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-57",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 460,
                        "easing": "easeInOut",
                        "duration": 240,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-5",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c7086b41-7559-5ca1-8c8b-41c8b324484a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694432957034
        },
        "a-22": {
            "id": "a-22",
            "title": "Nav-wh-close 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-1",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "bb3f0424-0fa4-023f-acca-653c1c809a42"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-2",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "96015564-a83f-cd24-eedc-6fd552f51e18"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-3",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c0520db1-cc47-4eaf-9276-65323c827907"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-4",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "c3bf0956-4cc8-bbc6-fbd0-2343477169f6"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-5",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "5340c901-ab87-e868-d145-08fbee4457ba"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-6",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "05c5e301-ae03-2484-eebd-7bf5eb574707"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".h-main__navmenu-link.nth-child-7",
                            "selectorGuids": ["e56d8089-5f58-72dc-344e-72227cba2ce6", "fe0127c6-551b-94dd-4d62-05c903ff62f4"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-1",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "0f82a16d-d3e9-a5b3-e53d-83662851d27f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-1",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "0f82a16d-d3e9-a5b3-e53d-83662851d27f"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-2",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "f620d46d-833c-9627-47da-0a822d1f2919"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-2",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "f620d46d-833c-9627-47da-0a822d1f2919"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-3",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "571f75c7-447a-6746-270d-ac5c6a7f68c2"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-26",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-3",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "571f75c7-447a-6746-270d-ac5c6a7f68c2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-27",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-4",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c12f20b3-9b51-4ef4-68f7-12fb61fed91f"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-4",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c12f20b3-9b51-4ef4-68f7-12fb61fed91f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-30",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-5",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c7086b41-7559-5ca1-8c8b-41c8b324484a"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "selector": ".nav-menu__soc-link.nth-child-5",
                            "selectorGuids": ["2570527f-64e0-7f28-483d-2e62876dd061", "c7086b41-7559-5ca1-8c8b-41c8b324484a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-links",
                            "selectorGuids": ["958b479b-4826-2e79-9743-c64d363d70ec"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-btm",
                            "selectorGuids": ["abd49148-49e8-9fff-ce66-5203edfa1184"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": "easeInOut",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-menu__b-line-top",
                            "selectorGuids": ["6428411b-85eb-17cf-ecb9-4df2e7f4f355"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-29",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h-main__nav-menu",
                            "selectorGuids": ["3ac2d094-8d19-1d76-0bdb-6d25a8bebd37"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694432957034
        },
        "a-31": {
            "id": "a-31",
            "title": "About-load PC",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-32": {
            "id": "a-32",
            "title": "About-load Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af028|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-12": {
            "id": "a-12",
            "title": "Lines",
            "continuousParameterGroups": [{
                "id": "a-12-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-12-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".r-intro__lines",
                                "selectorGuids": ["b3aad966-6272-9d27-d3ab-1fb78b7a81ba"]
                            },
                            "heightValue": 22.5,
                            "widthUnit": "PX",
                            "heightUnit": "rem",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-12-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".r-intro__lines",
                                "selectorGuids": ["b3aad966-6272-9d27-d3ab-1fb78b7a81ba"]
                            },
                            "heightValue": 31,
                            "widthUnit": "PX",
                            "heightUnit": "rem",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1694454305263
        },
        "a-33": {
            "id": "a-33",
            "title": "About-load PC 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-34": {
            "id": "a-34",
            "title": "About-load Mobile 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af032|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-35": {
            "id": "a-35",
            "title": "Open Cookie",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-35-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1697453497053
        },
        "a-36": {
            "id": "a-36",
            "title": "Close Cookie",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-36-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cookie__box",
                            "selectorGuids": ["c663071b-4bbf-8876-ed9a-f7183dd4522c"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1697453497053
        },
        "a-37": {
            "id": "a-37",
            "title": "About-load PC 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        },
        "a-38": {
            "id": "a-38",
            "title": "About-load Mobile 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 1.5,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|287c4175-57c5-0115-3773-af534d39e7a7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|446f57c5-b192-8e3c-d2ce-d1c6cc16396b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": [0.28, 0.44, 0.49, 1],
                        "duration": 500,
                        "target": {
                            "id": "6579eddd80d70eda166af029|b60f22b6-8b5e-1c8f-0f6d-e3e7a0dc4319"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694441054516
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
