/**
 * Created by jianwu.zhang on 2015/10/21.
 */
(function () {
    var g, h = this;

    function m(a) {
        a = a.split(".");
        for (var b = h, c; c = a.shift();)if (null != b[c])b = b[c]; else return null;
        return b
    }

    function aa() {
    }

    function n(a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }

    function p(a) {
        var b = n(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function q(a) {
        return "string" == typeof a
    }

    function ba(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    var r = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;

    function da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ea(a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function t(a, b, c) {
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
        return t.apply(null, arguments)
    }

    function u(a, b) {
        var c = a.split("."), d = h;
        c[0]in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    }

    function v(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.L = b.prototype;
        a.prototype = new c;
        a.base = function (a, c, f) {
            for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++)k[l - 2] = arguments[l];
            return b.prototype[c].apply(a, k)
        }
    };
    var fa = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function w(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var x = Array.prototype, ga = x.indexOf ? function (a, b, c) {
        return x.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a))return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }, y = x.forEach ? function (a, b, c) {
        x.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    };

    function ha(a, b) {
        var c;
        a:{
            c = a.length;
            for (var d = q(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
                c = e;
                break a
            }
            c = -1
        }
        return 0 > c ? null : q(a) ? a.charAt(c) : a[c]
    }

    function ia(a) {
        return x.concat.apply(x, arguments)
    }

    function z(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    };
    function ka(a) {
        var b = A, c;
        for (c in b)if (a.call(void 0, b[c], c, b))return c
    };
    var B;
    a:{
        var la = h.navigator;
        if (la) {
            var ma = la.userAgent;
            if (ma) {
                B = ma;
                break a
            }
        }
        B = ""
    }
    ;
    var na = -1 != B.indexOf("Opera") || -1 != B.indexOf("OPR"), C = -1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE"), oa = -1 != B.indexOf("Edge"), D = -1 != B.indexOf("Gecko") && !(-1 != B.toLowerCase().indexOf("webkit") && -1 == B.indexOf("Edge")) && !(-1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE")) && -1 == B.indexOf("Edge"), pa = -1 != B.toLowerCase().indexOf("webkit") && -1 == B.indexOf("Edge");

    function qa() {
        var a = B;
        if (D)return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (oa)return /Edge\/([\d\.]+)/.exec(a);
        if (C)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (pa)return /WebKit\/(\S+)/.exec(a)
    }

    function ra() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }

    var sa = function () {
        if (na && h.opera) {
            var a;
            var b = h.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = "";
        (b = qa()) && (a = b ? b[1] : "");
        return C && (b = ra(), b > parseFloat(a)) ? String(b) : a
    }(), ta = {};

    function ua(a) {
        if (!ta[a]) {
            for (var b = 0, c = fa(String(sa)).split("."), d = fa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var k = c[f] || "", l = d[f] || "", Wa = RegExp("(\\d*)(\\D*)", "g"), Xa = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var I = Wa.exec(k) || ["", "", ""], J = Xa.exec(l) || ["", "", ""];
                    if (0 == I[0].length && 0 == J[0].length)break;
                    b = w(0 == I[1].length ? 0 : parseInt(I[1], 10), 0 == J[1].length ? 0 : parseInt(J[1], 10)) || w(0 == I[2].length, 0 == J[2].length) || w(I[2], J[2])
                } while (0 == b)
            }
            ta[a] = 0 <= b
        }
    }

    var va = h.document, wa = va && C ? ra() || ("CSS1Compat" == va.compatMode ? parseInt(sa, 10) : 5) : void 0;
    var E;
    if (!(E = !D && !C)) {
        var F;
        if (F = C)F = 9 <= wa;
        E = F
    }
    E || D && ua("1.9.1");
    C && ua("9");
    function xa(a) {
        var b, c, d, e;
        b = document;
        if (b.querySelectorAll && b.querySelector && a)return b.querySelectorAll("" + (a ? "." + a : ""));
        if (a && b.getElementsByClassName) {
            var f = b.getElementsByClassName(a);
            return f
        }
        f = b.getElementsByTagName("*");
        if (a) {
            e = {};
            for (c = d = 0; b = f[c]; c++) {
                var k = b.className, l;
                if (l = "function" == typeof k.split)l = 0 <= ga(k.split(/\s+/), a);
                l && (e[d++] = b)
            }
            e.length = d;
            return e
        }
        return f
    }

    function ya(a, b) {
        for (var c = 0; a;) {
            if (b(a))return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    var za = h.JSON.parse, Aa = h.JSON.stringify;

    function G() {
        this.j = this.j;
        this.l = this.l
    }

    G.prototype.j = !1;
    G.prototype.isDisposed = function () {
        return this.j
    };
    G.prototype.dispose = function () {
        this.j || (this.j = !0, this.I())
    };
    G.prototype.I = function () {
        if (this.l)for (; this.l.length;)this.l.shift()()
    };
    function H() {
        G.call(this);
        this.C = 1;
        this.m = [];
        this.v = 0;
        this.f = [];
        this.h = {}
    }

    v(H, G);
    g = H.prototype;
    g.subscribe = function (a, b, c) {
        var d = this.h[a];
        d || (d = this.h[a] = []);
        var e = this.C;
        this.f[e] = a;
        this.f[e + 1] = b;
        this.f[e + 2] = c;
        this.C = e + 3;
        d.push(e);
        return e
    };
    function Ba(a, b, c) {
        var d = K;
        if (a = d.h[a]) {
            var e = d.f;
            (a = ha(a, function (a) {
                return e[a + 1] == b && e[a + 2] == c
            })) && d.M(a)
        }
    }

    g.M = function (a) {
        var b = this.f[a];
        if (b) {
            var c = this.h[b];
            if (0 != this.v)this.m.push(a), this.f[a + 1] = aa; else {
                if (c) {
                    var d = ga(c, a);
                    0 <= d && x.splice.call(c, d, 1)
                }
                delete this.f[a];
                delete this.f[a + 1];
                delete this.f[a + 2]
            }
        }
        return !!b
    };
    g.P = function (a, b) {
        var c = this.h[a];
        if (c) {
            this.v++;
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)d[e - 1] = arguments[e];
            try {
                for (e = 0, f = c.length; e < f; e++) {
                    var k = c[e];
                    this.f[k + 1].apply(this.f[k + 2], d)
                }
            } finally {
                if (this.v--, 0 < this.m.length && 0 == this.v)for (; c = this.m.pop();)this.M(c)
            }
            return 0 != e
        }
        return !1
    };
    g.clear = function (a) {
        if (a) {
            var b = this.h[a];
            b && (y(b, this.M, this), delete this.h[a])
        } else this.f.length = 0, this.h = {}
    };
    g.I = function () {
        H.L.I.call(this);
        this.clear();
        this.m.length = 0
    };
    var Ca = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function Da(a, b, c) {
        if ("array" == n(b))for (var d = 0; d < b.length; d++)Da(a, String(b[d]), c); else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Ea(a) {
        var b = [], c;
        for (c in a)Da(c, a[c], b);
        b[0] = "";
        return b.join("")
    }

    var Fa = /#|$/;
    var L = m("yt.dom.getNextId_");
    if (!L) {
        L = function () {
            return ++Ga
        };
        u("yt.dom.getNextId_", L);
        var Ga = 0
    }
    ;
    var M = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    u("yt.config_", M);
    u("yt.tokens_", window.yt && window.yt.tokens_ || {});
    u("yt.msgs_", window.yt && window.yt.msgs_ || {});
    function Ha(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            M[c] = b[1]
        } else for (c in b = b[0], b)M[c] = b[c]
    }

    function Ia(a) {
        "function" == n(a) && (a = Ja(a));
        return window.setInterval(a, 250)
    }

    function Ja(a) {
        return a && window.yterr ? function () {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw Ka(b), b;
            }
        } : a
    }

    function Ka(a, b) {
        var c = m("yt.www.errors.log");
        c ? c(a, b) : (c = ("ERRORS"in M ? M.ERRORS : void 0) || [], c.push([a, b]), Ha("ERRORS", c))
    };
    function La(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.clientY = this.clientX = 0;
        if (a = a || window.event) {
            this.event = a;
            for (var b in a)b in Ma || (this[b] = a[b]);
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget)try {
                b = b.nodeName ? b : null
            } catch (c) {
                b = null
            } else"mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey
        }
    }

    var Ma = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };
    var A = m("yt.events.listeners_") || {};
    u("yt.events.listeners_", A);
    var Na = m("yt.events.counter_") || {count: 0};
    u("yt.events.counter_", Na);
    function Oa(a, b, c) {
        return ka(function (d) {
            return d[0] == a && d[1] == b && d[2] == c && 0 == d[4]
        })
    }

    function Pa(a, b, c) {
        if (a && (a.addEventListener || a.attachEvent)) {
            var d = Oa(a, b, c);
            if (!d) {
                var d = ++Na.count + "", e = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter"in document), f;
                f = e ? function (d) {
                    d = new La(d);
                    if (!ya(d.relatedTarget, function (b) {
                            return b == a
                        }))return d.currentTarget = a, d.type = b, c.call(a, d)
                } : function (b) {
                    b = new La(b);
                    b.currentTarget = a;
                    return c.call(a, b)
                };
                f = Ja(f);
                A[d] = [a, b, c, f, !1];
                a.addEventListener ? "mouseenter" == b && e ? a.addEventListener("mouseover", f, !1) : "mouseleave" == b && e ? a.addEventListener("mouseout",
                    f, !1) : "mousewheel" == b && "MozBoxSizing"in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", f, !1) : a.addEventListener(b, f, !1) : a.attachEvent("on" + b, f)
            }
        }
    }

    function Qa(a) {
        a && ("string" == typeof a && (a = [a]), y(a, function (a) {
            if (a in A) {
                var c = A[a], d = c[0], e = c[1], f = c[3], c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete A[a]
            }
        }))
    };
    var Ra = {};

    function Sa(a) {
        return Ra[a] || (Ra[a] = String(a).replace(/\-([a-z])/g, function (a, c) {
                return c.toUpperCase()
            }))
    };
    var N = {}, Ta = [], K = new H, Ua = {};

    function Va() {
        y(Ta, function (a) {
            a()
        })
    }

    function Ya(a) {
        var b = z(document.getElementsByTagName("yt:" + a));
        a = "yt-" + a;
        var c = document;
        a = c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : xa(a);
        a = z(a);
        return ia(b, a)
    }

    function O(a, b) {
        return "yt:" == a.tagName.toLowerCase().substr(0, 3) ? a.getAttribute(b) : a ? a.dataset ? a.dataset[Sa(b)] : a.getAttribute("data-" + b) : null
    }

    function Za(a, b) {
        K.P.apply(K, arguments)
    };
    function P(a, b, c) {
        this.h = b;
        this.m = this.f = null;
        this.v = this[r] || (this[r] = ++ca);
        this.j = 0;
        this.J = !1;
        this.G = [];
        this.l = null;
        this.C = c;
        this.N = {};
        b = document;
        if (a = q(a) ? b.getElementById(a) : a)if ("iframe" != a.tagName.toLowerCase() && (b = $a(this, a), this.m = a, (c = a.parentNode) && c.replaceChild(b, a), a = b), this.f = a, this.f.id || (b = a = this.f, b = b[r] || (b[r] = ++ca), a.id = "widget" + b), N[this.f.id] = this, window.postMessage) {
            this.l = new H;
            ab(this);
            a = Q(this.h, "events");
            for (var d in a)a.hasOwnProperty(d) && this.addEventListener(d, a[d]);
            for (var e in Ua)bb(this,
                e)
        }
    }

    g = P.prototype;
    g.Z = function (a, b) {
        this.f.width = a;
        this.f.height = b;
        return this
    };
    g.Y = function () {
        return this.f
    };
    g.R = function (a) {
        this.A(a.event, a)
    };
    g.addEventListener = function (a, b) {
        var c = b;
        "string" == typeof b && (c = function () {
            window[b].apply(window, arguments)
        });
        this.l.subscribe(a, c);
        cb(this, a);
        return this
    };
    function bb(a, b) {
        var c = b.split(".");
        if (2 == c.length) {
            var d = c[1];
            a.C == c[0] && cb(a, d)
        }
    }

    g.X = function () {
        this.f.id && (N[this.f.id] = null);
        var a = this.l;
        a && "function" == typeof a.dispose && a.dispose();
        if (this.m) {
            var a = this.f, b = a.parentNode;
            b && b.replaceChild(this.m, a)
        } else(a = this.f) && a.parentNode && a.parentNode.removeChild(a);
        R && (R[this.v] = null);
        this.h = null;
        var a = this.f, c;
        for (c in A)A[c][0] == a && Qa(c);
        this.m = this.f = null
    };
    g.F = function () {
        return {}
    };
    function S(a, b, c) {
        c = c || [];
        c = Array.prototype.slice.call(c);
        b = {event: "command", func: b, args: c};
        a.J ? a.K(b) : a.G.push(b)
    }

    g.A = function (a, b) {
        if (!this.l.isDisposed()) {
            var c = {target: this, data: b};
            this.l.P(a, c);
            Za(this.C + "." + a, c)
        }
    };
    function $a(a, b) {
        for (var c = document.createElement("iframe"), d = b.attributes, e = 0, f = d.length; e < f; e++) {
            var k = d[e].value;
            null != k && "" != k && "null" != k && c.setAttribute(d[e].name, k)
        }
        c.setAttribute("frameBorder", 0);
        c.setAttribute("allowfullscreen", 1);
        c.setAttribute("title", "YouTube " + Q(a.h, "title"));
        (d = Q(a.h, "width")) && c.setAttribute("width", d);
        (d = Q(a.h, "height")) && c.setAttribute("height", d);
        var l = a.F();
        l.enablejsapi = window.postMessage ? 1 : 0;
        window.location.host && (l.origin = window.location.protocol + "//" + window.location.host);
        window.location.href && y(["debugjs", "debugcss"], function (a) {
            var b;
            b = window.location.href;
            var c = b.search(Fa), d;
            b:{
                d = 0;
                for (var e = a.length; 0 <= (d = b.indexOf(a, d)) && d < c;) {
                    var f = b.charCodeAt(d - 1);
                    if (38 == f || 63 == f)if (f = b.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f)break b;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d)b = null; else {
                e = b.indexOf("&", d);
                if (0 > e || e > c)e = c;
                d += a.length + 1;
                b = decodeURIComponent(b.substr(d, e - d).replace(/\+/g, " "))
            }
            null === b || (l[a] = b)
        });
        c.src = Q(a.h, "host") + a.H() + "?" + Ea(l);
        return c
    }

    g.O = function () {
        this.f && this.f.contentWindow ? this.K({event: "listening"}) : window.clearInterval(this.j)
    };
    function ab(a) {
        db(a.h, a, a.v);
        a.j = Ia(t(a.O, a));
        Pa(a.f, "load", t(function () {
            window.clearInterval(this.j);
            this.j = Ia(t(this.O, this))
        }, a))
    }

    function cb(a, b) {
        a.N[b] || (a.N[b] = !0, S(a, "addEventListener", [b]))
    }

    g.K = function (a) {
        a.id = this.v;
        a = Aa(a);
        var b;
        b = this.h;
        var c, d = this.f.src.match(Ca);
        c = d[1];
        var e = d[2], f = d[3], d = d[4], k = "";
        c && (k += c + ":");
        f && (k += "//", e && (k += e + "@"), k += f, d && (k += ":" + d));
        c = k;
        b = 0 == c.indexOf("https:") ? [c] : b.f ? [c.replace("http:", "https:")] : b.j ? [c] : [c, c.replace("http:", "https:")];
        for (c = 0; c < b.length; c++)try {
            this.f.contentWindow.postMessage(a, b[c])
        } catch (l) {
            if (l.name && "SyntaxError" == l.name)Ka(l, "WARNING"); else throw l;
        }
    };
    var T = "StopIteration"in h ? h.StopIteration : {message: "StopIteration", stack: ""};

    function U() {
    }

    U.prototype.next = function () {
        throw T;
    };
    U.prototype.D = function () {
        return this
    };
    function eb(a) {
        if (a instanceof U)return a;
        if ("function" == typeof a.D)return a.D(!1);
        if (p(a)) {
            var b = 0, c = new U;
            c.next = function () {
                for (; ;) {
                    if (b >= a.length)throw T;
                    if (b in a)return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function fb(a, b) {
        if (p(a))try {
            y(a, b, void 0)
        } catch (c) {
            if (c !== T)throw c;
        } else {
            a = eb(a);
            try {
                for (; ;)b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== T)throw c;
            }
        }
    }

    function gb(a) {
        if (p(a))return z(a);
        a = eb(a);
        var b = [];
        fb(a, function (a) {
            b.push(a)
        });
        return b
    };
    function ib() {
    };
    function jb() {
    }

    v(jb, ib);
    jb.prototype.clear = function () {
        var a = gb(this.D(!0)), b = this;
        y(a, function (a) {
            b.remove(a)
        })
    };
    function V(a) {
        this.f = a
    }

    v(V, jb);
    g = V.prototype;
    g.isAvailable = function () {
        if (!this.f)return !1;
        try {
            return this.f.setItem("__sak", "1"), this.f.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    g.remove = function (a) {
        this.f.removeItem(a)
    };
    g.D = function (a) {
        var b = 0, c = this.f, d = new U;
        d.next = function () {
            if (b >= c.length)throw T;
            var d;
            d = c.key(b++);
            if (a)return d;
            d = c.getItem(d);
            if (!q(d))throw"Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    g.clear = function () {
        this.f.clear()
    };
    g.key = function (a) {
        return this.f.key(a)
    };
    function kb() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {
        }
        this.f = a
    }

    v(kb, V);
    function lb() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {
        }
        this.f = a
    }

    v(lb, V);
    (new kb).isAvailable();
    (new lb).isAvailable();
    function nb(a) {
        return (0 == a.search("cue") || 0 == a.search("load")) && "loadModule" != a
    }

    function ob(a) {
        return 0 == a.search("get") || 0 == a.search("is")
    };
    var pb = "corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "), qb = "";

    function W(a) {
        this.h = a || {};
        this.defaults = {};
        this.defaults.host = "http://www.youtube.com";
        this.defaults.title = "";
        this.j = this.f = !1;
        a = document.getElementById("www-widgetapi-script");
        if (this.f = !!("https:" == document.location.protocol || a && 0 == a.src.indexOf("https:"))) {
            a = [this.h, window.YTConfig || {}, this.defaults];
            for (var b = 0; b < a.length; b++)a[b].host && (a[b].host = a[b].host.replace("http://", "https://"))
        }
    }

    var R = null;

    function Q(a, b) {
        for (var c = [a.h, window.YTConfig || {}, a.defaults], d = 0; d < c.length; d++) {
            var e = c[d][b];
            if (void 0 != e)return e
        }
        return null
    }

    function db(a, b, c) {
        R || (R = {}, Pa(window, "message", t(a.l, a)));
        R[c] = b
    }

    W.prototype.l = function (a) {
        var b;
        (b = a.origin == Q(this, "host")) || ((b = a.origin) && b == qb ? b = !0 : (new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*(" + pb.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i")).test(b) ? (qb = b, b = !0) : b = !1);
        if (b) {
            var c;
            try {
                c = za(a.data)
            } catch (d) {
                return
            }
            this.j = !0;
            this.f || 0 != a.origin.indexOf("https:") || (this.f = !0);
            if (a = R[c.id])a.J = !0, a.J && (y(a.G, a.K, a), a.G.length = 0), a.R(c)
        }
    };
    function rb(a) {
        W.call(this, a);
        this.defaults.title = "video player";
        this.defaults.videoId = "";
        this.defaults.width = 640;
        this.defaults.height = 360
    }

    v(rb, W);
    function X(a, b) {
        var c = new rb(b);
        P.call(this, a, c, "player");
        this.o = {};
        this.B = {}
    }

    v(X, P);
    function sb(a) {
        if ("iframe" != a.tagName.toLowerCase()) {
            var b = O(a, "videoid");
            if (b) {
                var c = O(a, "width"), d = O(a, "height");
                new X(a, {videoId: b, width: c, height: d})
            }
        }
    }

    g = X.prototype;
    g.H = function () {
        return "/embed/" + Q(this.h, "videoId")
    };
    g.F = function () {
        var a;
        if (Q(this.h, "playerVars")) {
            a = Q(this.h, "playerVars");
            var b = {}, c;
            for (c in a)b[c] = a[c];
            a = b
        } else a = {};
        return a
    };
    g.R = function (a) {
        var b = a.event;
        a = a.info;
        switch (b) {
            case "apiInfoDelivery":
                if (ba(a))for (var c in a)this.o[c] = a[c];
                break;
            case "infoDelivery":
                tb(this, a);
                break;
            case "initialDelivery":
                window.clearInterval(this.j);
                this.B = {};
                this.o = {};
                ub(this, a.apiInterface);
                tb(this, a);
                break;
            default:
                this.A(b, a)
        }
    };
    function tb(a, b) {
        if (ba(b))for (var c in b)a.B[c] = b[c]
    }

    function ub(a, b) {
        y(b, function (a) {
            this[a] || (nb(a) ? this[a] = function () {
                this.B = {};
                this.o = {};
                S(this, a, arguments);
                return this
            } : ob(a) ? this[a] = function () {
                var b = 0;
                0 == a.search("get") ? b = 3 : 0 == a.search("is") && (b = 2);
                return this.B[a.charAt(b).toLowerCase() + a.substr(b + 1)]
            } : this[a] = function () {
                S(this, a, arguments);
                return this
            })
        }, a)
    }

    g.ba = function () {
        var a = this.f.cloneNode(!1), b = this.B.videoData, c = Q(this.h, "host");
        a.src = b && b.video_id ? c + "/embed/" + b.video_id : a.src;
        b = document.createElement("div");
        b.appendChild(a);
        return b.innerHTML
    };
    g.aa = function (a) {
        return this.o.namespaces ? a ? this.o[a].options || [] : this.o.namespaces || [] : []
    };
    g.$ = function (a, b) {
        if (this.o.namespaces && a && b)return this.o[a][b]
    };
    function vb(a) {
        W.call(this, a);
        this.defaults.title = "Thumbnail";
        this.defaults.videoId = "";
        this.defaults.width = 120;
        this.defaults.height = 68
    }

    v(vb, W);
    function Y(a, b) {
        var c = new vb(b);
        P.call(this, a, c, "thumbnail")
    }

    v(Y, P);
    function wb(a) {
        if ("iframe" != a.tagName.toLowerCase()) {
            var b = O(a, "videoid");
            if (b) {
                b = {videoId: b, events: {}};
                b.width = O(a, "width");
                b.height = O(a, "height");
                b.thumbWidth = O(a, "thumb-width");
                b.thumbHeight = O(a, "thumb-height");
                b.thumbAlign = O(a, "thumb-align");
                var c = O(a, "onclick");
                c && (b.events.onClick = c);
                new Y(a, b)
            }
        }
    }

    Y.prototype.H = function () {
        return "/embed/" + Q(this.h, "videoId")
    };
    Y.prototype.F = function () {
        return {
            player: 0,
            thumb_width: Q(this.h, "thumbWidth"),
            thumb_height: Q(this.h, "thumbHeight"),
            thumb_align: Q(this.h, "thumbAlign")
        }
    };
    Y.prototype.A = function (a, b) {
        Y.L.A.call(this, a, b ? b.info : void 0)
    };
    function xb(a) {
        W.call(this, a);
        this.defaults.host = "https://www.youtube.com";
        this.defaults.title = "upload widget";
        this.defaults.width = 640;
        this.defaults.height = .67 * Q(this, "width")
    }

    v(xb, W);
    function Z(a, b) {
        var c = new xb(b);
        P.call(this, a, c, "upload")
    }

    v(Z, P);
    g = Z.prototype;
    g.H = function () {
        return "/upload_embed"
    };
    g.F = function () {
        var a = {}, b = Q(this.h, "webcamOnly");
        null != b && (a.webcam_only = b);
        return a
    };
    g.A = function (a, b) {
        Z.L.A.call(this, a, b);
        "onApiReady" == a && S(this, "hostWindowReady")
    };
    g.S = function (a) {
        S(this, "setVideoDescription", arguments)
    };
    g.U = function (a) {
        S(this, "setVideoKeywords", arguments)
    };
    g.V = function (a) {
        S(this, "setVideoPrivacy", arguments)
    };
    g.T = function (a) {
        S(this, "setVideoDraftPrivacy", arguments)
    };
    g.W = function (a) {
        S(this, "setVideoTitle", arguments)
    };
    u("YT.PlayerState.UNSTARTED", -1);
    u("YT.PlayerState.ENDED", 0);
    u("YT.PlayerState.PLAYING", 1);
    u("YT.PlayerState.PAUSED", 2);
    u("YT.PlayerState.BUFFERING", 3);
    u("YT.PlayerState.CUED", 5);
    u("YT.UploadWidgetEvent.API_READY", "onApiReady");
    u("YT.UploadWidgetEvent.UPLOAD_SUCCESS", "onUploadSuccess");
    u("YT.UploadWidgetEvent.PROCESSING_COMPLETE", "onProcessingComplete");
    u("YT.UploadWidgetEvent.STATE_CHANGE", "onStateChange");
    u("YT.UploadWidgetState.IDLE", 0);
    u("YT.UploadWidgetState.PENDING", 1);
    u("YT.UploadWidgetState.ERROR", 2);
    u("YT.UploadWidgetState.PLAYBACK", 3);
    u("YT.UploadWidgetState.RECORDING", 4);
    u("YT.UploadWidgetState.STOPPED", 5);
    u("YT.get", function (a) {
        return N[a]
    });
    u("YT.scan", Va);
    u("YT.subscribe", function (a, b, c) {
        K.subscribe(a, b, c);
        Ua[a] = !0;
        for (var d in N)bb(N[d], a)
    });
    u("YT.unsubscribe", function (a, b, c) {
        Ba(a, b, c)
    });
    u("YT.Player", X);
    u("YT.Thumbnail", Y);
    u("YT.UploadWidget", Z);
    P.prototype.destroy = P.prototype.X;
    P.prototype.setSize = P.prototype.Z;
    P.prototype.getIframe = P.prototype.Y;
    P.prototype.addEventListener = P.prototype.addEventListener;
    X.prototype.getVideoEmbedCode = X.prototype.ba;
    X.prototype.getOptions = X.prototype.aa;
    X.prototype.getOption = X.prototype.$;
    Z.prototype.setVideoDescription = Z.prototype.S;
    Z.prototype.setVideoKeywords = Z.prototype.U;
    Z.prototype.setVideoPrivacy = Z.prototype.V;
    Z.prototype.setVideoTitle = Z.prototype.W;
    Z.prototype.setVideoDraftPrivacy = Z.prototype.T;
    Ta.push(function () {
        var a = Ya("player");
        y(a, sb)
    });
    Ta.push(function () {
        var a = Ya("thumbnail");
        y(a, wb)
    });
    "undefined" != typeof YTConfig && YTConfig.parsetags && "onload" != YTConfig.parsetags || Va();
    var yb = m("onYTReady");
    yb && yb();
    var zb = m("onYouTubeIframeAPIReady");
    zb && zb();
    var Ab = m("onYouTubePlayerAPIReady");
    Ab && Ab();
})();
