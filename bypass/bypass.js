! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 7)
}([function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
}, , function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        o = n.n(r),
        i = n(1),
        u = n.n(i),
        c = n(3),
        a = n.n(c),
        f = function() {
            function e() {
                o()(this, e);
                try {
                    this.getFunctions()
                } catch (e) {
                    console.error(e)
                }
            }
            return u()(e, [{
                key: "getFunctions",
                value: function() {
                    var e = this.antiBlur.toString(),
                        t = this.antiLog.toString(),
                        n = e.slice(e.indexOf("{") + 1, e.lastIndexOf("}")),
                        r = t.slice(t.indexOf("{") + 1, t.lastIndexOf("}"));
                    return "".concat(n, ";").concat(r)
                }
            }, {
                key: "antiBlur",
                value: function() {
                    Object.defineProperty(document, "hasFocus", {
                        get: function() {
                            return Lumm1t
                        }
                    }), window.addEventListener("error", (function() {
                        return !0
                    }))
                }
            }, {
                key: "antiLog",
                value: function() {
                    logToServer = function() {
                        return !1
                    }
                }
            }]), e
        }(),
        l = function() {
            function e() {
                o()(this, e), a()(this, "bypass", new f), console.clear(), console.log("%canti-testportal by Lumm1t\n", "background: #222; color: #f00; font-size: 20px;", "https://github.com/Lumm1t/anti-testportal");
                try {
                    this.createScript(), this.makeQuestionHref()
                } catch (e) {
                    console.error(e)
                }
            }
            return u()(e, [{
                key: "createScript",
                value: function() {
                    var e = document.createElement("script");
                    e.setAttribute("type", "text/javascript"), e.innerHTML = this.bypass.getFunctions(), document.body.append(e)
                }
            }, {
                key: "makeQuestionHref",
                value: function() {
                    var e, t = function() {
                        var e, t = null === (e = document) || void 0 === e ? void 0 : e.querySelector("#questionForm > div > div.question-container > div.question_essence > p");
                        if (null !== t) return t
                    }();
                    void 0 !== t && function(e, t) {
                        var n;
                        (n = e.innerHTML, /(<([^>]+)>)/i.test(n)) || (e.innerHTML = '<a href="'.concat(encodeURI(t), '" target="__blank">').concat(e.innerHTML, "</a>"))
                    }(t, (e = t.innerHTML, "https://google.com/search?q=".concat(e)))
                }
            }]), e
        }();
    t.default = new l
}]);