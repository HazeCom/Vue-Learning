(function () {
  "use strict";
  var n = {
      9474: function (n, t, e) {
        var r = e(9242),
          o = e(3396);
        const u = (0, o._)("br", null, null, -1);
        function i(n, t, e, r, i, c) {
          const l = (0, o.up)("router-link"),
            a = (0, o.up)("router-view");
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                (0, o._)("div", null, [
                  (0, o.Wm)(
                    l,
                    { to: "/counter" },
                    { default: (0, o.w5)(() => [(0, o.Uk)("Counter")]), _: 1 }
                  ),
                  (0, o.Uk)(" | "),
                  (0, o.Wm)(
                    l,
                    { to: "/hello" },
                    { default: (0, o.w5)(() => [(0, o.Uk)("Hello")]), _: 1 }
                  ),
                ]),
                u,
                (0, o.Wm)(a),
              ],
              64
            )
          );
        }
        var c = {},
          l = e(89);
        const a = (0, l.Z)(c, [["render", i]]);
        var s = a,
          f = e(2483),
          v = e(7139);
        function h(n, t, e, r, u, i) {
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                (0, o._)(
                  "button",
                  { onClick: t[0] || (t[0] = (n) => u.count++) },
                  "Increase"
                ),
                (0, o._)("button", null, (0, v.zw)(u.count), 1),
                u.count > 0
                  ? ((0, o.wg)(),
                    (0, o.iD)(
                      "button",
                      { key: 0, onClick: t[1] || (t[1] = (n) => u.count--) },
                      "Decrease"
                    ))
                  : (0, o.kq)("", !0),
              ],
              64
            )
          );
        }
        var p = {
          name: "HomePage",
          data() {
            return { showMessage: !1, greeting: "Hello World!", count: 0 };
          },
        };
        const g = (0, l.Z)(p, [["render", h]]);
        var d = g;
        const w = { key: 0 };
        function k(n, t, e, r, u, i) {
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o._)(
                "button",
                {
                  onClick:
                    t[0] || (t[0] = (...n) => i.clickMe && i.clickMe(...n)),
                },
                "Click Me"
              ),
              u.showMessage
                ? ((0, o.wg)(), (0, o.iD)("h1", w, (0, v.zw)(u.greeting), 1))
                : (0, o.kq)("", !0),
            ])
          );
        }
        var b = {
          name: "AboutPage",
          data() {
            return { showMessage: !1, greeting: "Hello World!" };
          },
          methods: {
            clickMe() {
              this.showMessage = !this.showMessage;
            },
          },
        };
        const m = (0, l.Z)(b, [["render", k]]);
        var O = m;
        const y = [
          { path: "/counter", component: d },
          { path: "/hello", component: O },
        ];
        var _ = y;
        const M = (0, f.p7)({ history: (0, f.PO)(), routes: _ }),
          j = (0, r.ri)(s);
        j.use(M), j.mount("#app");
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var u = (t[r] = { exports: {} });
    return n[r].call(u.exports, u, u.exports, e), u.exports;
  }
  (e.m = n),
    (function () {
      var n = [];
      e.O = function (t, r, o, u) {
        if (!r) {
          var i = 1 / 0;
          for (s = 0; s < n.length; s++) {
            (r = n[s][0]), (o = n[s][1]), (u = n[s][2]);
            for (var c = !0, l = 0; l < r.length; l++)
              (!1 & u || i >= u) &&
              Object.keys(e.O).every(function (n) {
                return e.O[n](r[l]);
              })
                ? r.splice(l--, 1)
                : ((c = !1), u < i && (i = u));
            if (c) {
              n.splice(s--, 1);
              var a = o();
              void 0 !== a && (t = a);
            }
          }
          return t;
        }
        u = u || 0;
        for (var s = n.length; s > 0 && n[s - 1][2] > u; s--) n[s] = n[s - 1];
        n[s] = [r, o, u];
      };
    })(),
    (function () {
      e.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n["default"];
              }
            : function () {
                return n;
              };
        return e.d(t, { a: t }), t;
      };
    })(),
    (function () {
      e.d = function (n, t) {
        for (var r in t)
          e.o(t, r) &&
            !e.o(n, r) &&
            Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      };
    })(),
    (function () {
      var n = { 143: 0 };
      e.O.j = function (t) {
        return 0 === n[t];
      };
      var t = function (t, r) {
          var o,
            u,
            i = r[0],
            c = r[1],
            l = r[2],
            a = 0;
          if (
            i.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (o in c) e.o(c, o) && (e.m[o] = c[o]);
            if (l) var s = l(e);
          }
          for (t && t(r); a < i.length; a++)
            (u = i[a]), e.o(n, u) && n[u] && n[u][0](), (n[u] = 0);
          return e.O(s);
        },
        r = (self["webpackChunkproject_name"] =
          self["webpackChunkproject_name"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = e.O(void 0, [998], function () {
    return e(9474);
  });
  r = e.O(r);
})();
//# sourceMappingURL=app.88a740a0.js.map
