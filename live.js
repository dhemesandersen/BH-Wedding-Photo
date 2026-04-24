(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
var _r = { exports: {} },
  fl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up;
function Q1() {
  if (up) return fl;
  up = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(u, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: u, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return ((fl.Fragment = l), (fl.jsx = o), (fl.jsxs = o), fl);
}
var rp;
function Z1() {
  return (rp || ((rp = 1), (_r.exports = Q1())), _r.exports);
}
var x = Z1(),
  Ur = { exports: {} },
  it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp;
function K1() {
  if (cp) return it;
  cp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function w(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (S && E[S]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    H = {};
  function L(E, U, Q) {
    ((this.props = E),
      (this.context = U),
      (this.refs = H),
      (this.updater = Q || z));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (E, U) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, U, "setState");
    }),
    (L.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function Y() {}
  Y.prototype = L.prototype;
  function q(E, U, Q) {
    ((this.props = E),
      (this.context = U),
      (this.refs = H),
      (this.updater = Q || z));
  }
  var X = (q.prototype = new Y());
  ((X.constructor = q), B(X, L.prototype), (X.isPureReactComponent = !0));
  var F = Array.isArray;
  function lt() {}
  var I = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function at(E, U, Q) {
    var W = Q.ref;
    return {
      $$typeof: a,
      type: E,
      key: U,
      ref: W !== void 0 ? W : null,
      props: Q,
    };
  }
  function tt(E, U) {
    return at(E.type, U, E.props);
  }
  function pt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function vt(E) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (Q) {
        return U[Q];
      })
    );
  }
  var $t = /\/+/g;
  function Gt(E, U) {
    return typeof E == "object" && E !== null && E.key != null
      ? vt("" + E.key)
      : U.toString(36);
  }
  function Lt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(lt, lt)
            : ((E.status = "pending"),
              E.then(
                function (U) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = U));
                },
                function (U) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = U));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function O(E, U, Q, W, st) {
    var ct = typeof E;
    (ct === "undefined" || ct === "boolean") && (E = null);
    var Tt = !1;
    if (E === null) Tt = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          Tt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case l:
              Tt = !0;
              break;
            case v:
              return ((Tt = E._init), O(Tt(E._payload), U, Q, W, st));
          }
      }
    if (Tt)
      return (
        (st = st(E)),
        (Tt = W === "" ? "." + Gt(E, 0) : W),
        F(st)
          ? ((Q = ""),
            Tt != null && (Q = Tt.replace($t, "$&/") + "/"),
            O(st, U, Q, "", function (vi) {
              return vi;
            }))
          : st != null &&
            (pt(st) &&
              (st = tt(
                st,
                Q +
                  (st.key == null || (E && E.key === st.key)
                    ? ""
                    : ("" + st.key).replace($t, "$&/") + "/") +
                  Tt,
              )),
            U.push(st)),
        1
      );
    Tt = 0;
    var oe = W === "" ? "." : W + ":";
    if (F(E))
      for (var Ht = 0; Ht < E.length; Ht++)
        ((W = E[Ht]), (ct = oe + Gt(W, Ht)), (Tt += O(W, U, Q, ct, st)));
    else if (((Ht = w(E)), typeof Ht == "function"))
      for (E = Ht.call(E), Ht = 0; !(W = E.next()).done; )
        ((W = W.value), (ct = oe + Gt(W, Ht++)), (Tt += O(W, U, Q, ct, st)));
    else if (ct === "object") {
      if (typeof E.then == "function") return O(Lt(E), U, Q, W, st);
      throw (
        (U = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Tt;
  }
  function k(E, U, Q) {
    if (E == null) return E;
    var W = [],
      st = 0;
    return (
      O(E, W, "", "", function (ct) {
        return U.call(Q, ct, st++);
      }),
      W
    );
  }
  function Z(E) {
    if (E._status === -1) {
      var U = E._result;
      ((U = U()),
        U.then(
          function (Q) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = Q));
          },
          function (Q) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = Q));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = U)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ut =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    yt = {
      map: k,
      forEach: function (E, U, Q) {
        k(
          E,
          function () {
            U.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (E) {
        var U = 0;
        return (
          k(E, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (E) {
        return (
          k(E, function (U) {
            return U;
          }) || []
        );
      },
      only: function (E) {
        if (!pt(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (it.Activity = b),
    (it.Children = yt),
    (it.Component = L),
    (it.Fragment = o),
    (it.Profiler = c),
    (it.PureComponent = q),
    (it.StrictMode = u),
    (it.Suspense = g),
    (it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (it.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return I.H.useMemoCache(E);
      },
    }),
    (it.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (it.cacheSignal = function () {
      return null;
    }),
    (it.cloneElement = function (E, U, Q) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var W = B({}, E.props),
        st = E.key;
      if (U != null)
        for (ct in (U.key !== void 0 && (st = "" + U.key), U))
          !$.call(U, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && U.ref === void 0) ||
            (W[ct] = U[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) W.children = Q;
      else if (1 < ct) {
        for (var Tt = Array(ct), oe = 0; oe < ct; oe++)
          Tt[oe] = arguments[oe + 2];
        W.children = Tt;
      }
      return at(E.type, st, W);
    }),
    (it.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: d, _context: E }),
        E
      );
    }),
    (it.createElement = function (E, U, Q) {
      var W,
        st = {},
        ct = null;
      if (U != null)
        for (W in (U.key !== void 0 && (ct = "" + U.key), U))
          $.call(U, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (st[W] = U[W]);
      var Tt = arguments.length - 2;
      if (Tt === 1) st.children = Q;
      else if (1 < Tt) {
        for (var oe = Array(Tt), Ht = 0; Ht < Tt; Ht++)
          oe[Ht] = arguments[Ht + 2];
        st.children = oe;
      }
      if (E && E.defaultProps)
        for (W in ((Tt = E.defaultProps), Tt))
          st[W] === void 0 && (st[W] = Tt[W]);
      return at(E, ct, st);
    }),
    (it.createRef = function () {
      return { current: null };
    }),
    (it.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (it.isValidElement = pt),
    (it.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: Z };
    }),
    (it.memo = function (E, U) {
      return { $$typeof: p, type: E, compare: U === void 0 ? null : U };
    }),
    (it.startTransition = function (E) {
      var U = I.T,
        Q = {};
      I.T = Q;
      try {
        var W = E(),
          st = I.S;
        (st !== null && st(Q, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(lt, ut));
      } catch (ct) {
        ut(ct);
      } finally {
        (U !== null && Q.types !== null && (U.types = Q.types), (I.T = U));
      }
    }),
    (it.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (it.use = function (E) {
      return I.H.use(E);
    }),
    (it.useActionState = function (E, U, Q) {
      return I.H.useActionState(E, U, Q);
    }),
    (it.useCallback = function (E, U) {
      return I.H.useCallback(E, U);
    }),
    (it.useContext = function (E) {
      return I.H.useContext(E);
    }),
    (it.useDebugValue = function () {}),
    (it.useDeferredValue = function (E, U) {
      return I.H.useDeferredValue(E, U);
    }),
    (it.useEffect = function (E, U) {
      return I.H.useEffect(E, U);
    }),
    (it.useEffectEvent = function (E) {
      return I.H.useEffectEvent(E);
    }),
    (it.useId = function () {
      return I.H.useId();
    }),
    (it.useImperativeHandle = function (E, U, Q) {
      return I.H.useImperativeHandle(E, U, Q);
    }),
    (it.useInsertionEffect = function (E, U) {
      return I.H.useInsertionEffect(E, U);
    }),
    (it.useLayoutEffect = function (E, U) {
      return I.H.useLayoutEffect(E, U);
    }),
    (it.useMemo = function (E, U) {
      return I.H.useMemo(E, U);
    }),
    (it.useOptimistic = function (E, U) {
      return I.H.useOptimistic(E, U);
    }),
    (it.useReducer = function (E, U, Q) {
      return I.H.useReducer(E, U, Q);
    }),
    (it.useRef = function (E) {
      return I.H.useRef(E);
    }),
    (it.useState = function (E) {
      return I.H.useState(E);
    }),
    (it.useSyncExternalStore = function (E, U, Q) {
      return I.H.useSyncExternalStore(E, U, Q);
    }),
    (it.useTransition = function () {
      return I.H.useTransition();
    }),
    (it.version = "19.2.4"),
    it
  );
}
var fp;
function Cc() {
  return (fp || ((fp = 1), (Ur.exports = K1())), Ur.exports);
}
var G = Cc(),
  Br = { exports: {} },
  hl = {},
  Lr = { exports: {} },
  Hr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function J1() {
  return (
    hp ||
      ((hp = 1),
      (function (a) {
        function l(O, k) {
          var Z = O.length;
          O.push(k);
          t: for (; 0 < Z; ) {
            var ut = (Z - 1) >>> 1,
              yt = O[ut];
            if (0 < c(yt, k)) ((O[ut] = k), (O[Z] = yt), (Z = ut));
            else break t;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function u(O) {
          if (O.length === 0) return null;
          var k = O[0],
            Z = O.pop();
          if (Z !== k) {
            O[0] = Z;
            t: for (var ut = 0, yt = O.length, E = yt >>> 1; ut < E; ) {
              var U = 2 * (ut + 1) - 1,
                Q = O[U],
                W = U + 1,
                st = O[W];
              if (0 > c(Q, Z))
                W < yt && 0 > c(st, Q)
                  ? ((O[ut] = st), (O[W] = Z), (ut = W))
                  : ((O[ut] = Q), (O[U] = Z), (ut = U));
              else if (W < yt && 0 > c(st, Z))
                ((O[ut] = st), (O[W] = Z), (ut = W));
              else break t;
            }
          }
          return k;
        }
        function c(O, k) {
          var Z = O.sortIndex - k.sortIndex;
          return Z !== 0 ? Z : O.id - k.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            m = h.now();
          a.unstable_now = function () {
            return h.now() - m;
          };
        }
        var g = [],
          p = [],
          v = 1,
          b = null,
          S = 3,
          w = !1,
          z = !1,
          B = !1,
          H = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function X(O) {
          for (var k = o(p); k !== null; ) {
            if (k.callback === null) u(p);
            else if (k.startTime <= O)
              (u(p), (k.sortIndex = k.expirationTime), l(g, k));
            else break;
            k = o(p);
          }
        }
        function F(O) {
          if (((B = !1), X(O), !z))
            if (o(g) !== null) ((z = !0), lt || ((lt = !0), vt()));
            else {
              var k = o(p);
              k !== null && Lt(F, k.startTime - O);
            }
        }
        var lt = !1,
          I = -1,
          $ = 5,
          at = -1;
        function tt() {
          return H ? !0 : !(a.unstable_now() - at < $);
        }
        function pt() {
          if (((H = !1), lt)) {
            var O = a.unstable_now();
            at = O;
            var k = !0;
            try {
              t: {
                ((z = !1), B && ((B = !1), Y(I), (I = -1)), (w = !0));
                var Z = S;
                try {
                  e: {
                    for (
                      X(O), b = o(g);
                      b !== null && !(b.expirationTime > O && tt());
                    ) {
                      var ut = b.callback;
                      if (typeof ut == "function") {
                        ((b.callback = null), (S = b.priorityLevel));
                        var yt = ut(b.expirationTime <= O);
                        if (((O = a.unstable_now()), typeof yt == "function")) {
                          ((b.callback = yt), X(O), (k = !0));
                          break e;
                        }
                        (b === o(g) && u(g), X(O));
                      } else u(g);
                      b = o(g);
                    }
                    if (b !== null) k = !0;
                    else {
                      var E = o(p);
                      (E !== null && Lt(F, E.startTime - O), (k = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (S = Z), (w = !1));
                }
                k = void 0;
              }
            } finally {
              k ? vt() : (lt = !1);
            }
          }
        }
        var vt;
        if (typeof q == "function")
          vt = function () {
            q(pt);
          };
        else if (typeof MessageChannel < "u") {
          var $t = new MessageChannel(),
            Gt = $t.port2;
          (($t.port1.onmessage = pt),
            (vt = function () {
              Gt.postMessage(null);
            }));
        } else
          vt = function () {
            L(pt, 0);
          };
        function Lt(O, k) {
          I = L(function () {
            O(a.unstable_now());
          }, k);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (a.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : ($ = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (O) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = S;
            }
            var Z = S;
            S = k;
            try {
              return O();
            } finally {
              S = Z;
            }
          }),
          (a.unstable_requestPaint = function () {
            H = !0;
          }),
          (a.unstable_runWithPriority = function (O, k) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Z = S;
            S = O;
            try {
              return k();
            } finally {
              S = Z;
            }
          }),
          (a.unstable_scheduleCallback = function (O, k, Z) {
            var ut = a.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? ut + Z : ut))
                : (Z = ut),
              O)
            ) {
              case 1:
                var yt = -1;
                break;
              case 2:
                yt = 250;
                break;
              case 5:
                yt = 1073741823;
                break;
              case 4:
                yt = 1e4;
                break;
              default:
                yt = 5e3;
            }
            return (
              (yt = Z + yt),
              (O = {
                id: v++,
                callback: k,
                priorityLevel: O,
                startTime: Z,
                expirationTime: yt,
                sortIndex: -1,
              }),
              Z > ut
                ? ((O.sortIndex = Z),
                  l(p, O),
                  o(g) === null &&
                    O === o(p) &&
                    (B ? (Y(I), (I = -1)) : (B = !0), Lt(F, Z - ut)))
                : ((O.sortIndex = yt),
                  l(g, O),
                  z || w || ((z = !0), lt || ((lt = !0), vt()))),
              O
            );
          }),
          (a.unstable_shouldYield = tt),
          (a.unstable_wrapCallback = function (O) {
            var k = S;
            return function () {
              var Z = S;
              S = k;
              try {
                return O.apply(this, arguments);
              } finally {
                S = Z;
              }
            };
          }));
      })(Hr)),
    Hr
  );
}
var dp;
function F1() {
  return (dp || ((dp = 1), (Lr.exports = J1())), Lr.exports);
}
var qr = { exports: {} },
  se = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp;
function W1() {
  if (mp) return se;
  mp = 1;
  var a = Cc();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var u = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(g, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: v,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (se.createPortal = function (g, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return d(g, p, null, v);
    }),
    (se.flushSync = function (g) {
      var p = h.T,
        v = u.p;
      try {
        if (((h.T = null), (u.p = 2), g)) return g();
      } finally {
        ((h.T = p), (u.p = v), u.d.f());
      }
    }),
    (se.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(g, p));
    }),
    (se.prefetchDNS = function (g) {
      typeof g == "string" && u.d.D(g);
    }),
    (se.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = m(v, p.crossOrigin),
          S = typeof p.integrity == "string" ? p.integrity : void 0,
          w = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? u.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: w,
            })
          : v === "script" &&
            u.d.X(g, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: w,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (se.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            u.d.M(g, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(g);
    }),
    (se.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = m(v, p.crossOrigin);
        u.d.L(g, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (se.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var v = m(p.as, p.crossOrigin);
          u.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(g);
    }),
    (se.requestFormReset = function (g) {
      u.d.r(g);
    }),
    (se.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (se.useFormState = function (g, p, v) {
      return h.H.useFormState(g, p, v);
    }),
    (se.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (se.version = "19.2.4"),
    se
  );
}
var pp;
function P1() {
  if (pp) return qr.exports;
  pp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (qr.exports = W1()), qr.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp;
function $1() {
  if (yp) return hl;
  yp = 1;
  var a = F1(),
    l = Cc(),
    o = P1();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t) throw Error(u(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return (g(s), t);
          if (r === i) return (g(s), e);
          r = r.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) ((n = s), (i = r));
      else {
        for (var f = !1, y = s.child; y; ) {
          if (y === n) {
            ((f = !0), (n = s), (i = r));
            break;
          }
          if (y === i) {
            ((f = !0), (i = s), (n = r));
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = r.child; y; ) {
            if (y === n) {
              ((f = !0), (n = r), (i = s));
              break;
            }
            if (y === i) {
              ((f = !0), (i = r), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    Y = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    lt = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    at = Symbol.for("react.activity"),
    tt = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function vt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pt && t[pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var $t = Symbol.for("react.client.reference");
  function Gt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === $t ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case B:
        return "Fragment";
      case L:
        return "Profiler";
      case H:
        return "StrictMode";
      case F:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case at:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case q:
          return t.displayName || "Context";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case I:
          return (
            (e = t.displayName || null),
            e !== null ? e : Gt(t.type) || "Memo"
          );
        case $:
          ((e = t._payload), (t = t._init));
          try {
            return Gt(t(e));
          } catch {}
      }
    return null;
  }
  var Lt = Array.isArray,
    O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    ut = [],
    yt = -1;
  function E(t) {
    return { current: t };
  }
  function U(t) {
    0 > yt || ((t.current = ut[yt]), (ut[yt] = null), yt--);
  }
  function Q(t, e) {
    (yt++, (ut[yt] = t.current), (t.current = e));
  }
  var W = E(null),
    st = E(null),
    ct = E(null),
    Tt = E(null);
  function oe(t, e) {
    switch ((Q(ct, e), Q(st, t), Q(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? zm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = zm(e)), (t = Om(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (U(W), Q(W, t));
  }
  function Ht() {
    (U(W), U(st), U(ct));
  }
  function vi(t) {
    t.memoizedState !== null && Q(Tt, t);
    var e = W.current,
      n = Om(e, t.type);
    e !== n && (Q(st, t), Q(W, n));
  }
  function Cl(t) {
    (st.current === t && (U(W), U(st)),
      Tt.current === t && (U(Tt), (ol._currentValue = Z)));
  }
  var go, of;
  function $n(t) {
    if (go === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((go = (e && e[1]) || ""),
          (of =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      go +
      t +
      of
    );
  }
  var vo = !1;
  function bo(t, e) {
    if (!t || vo) return "";
    vo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (N) {
                  var j = N;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (N) {
                  j = N;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                j = N;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (N) {
            if (N && j && typeof N.stack == "string") return [N.stack, j.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = i.DetermineComponentFrameRoot(),
        f = r[0],
        y = r[1];
      if (f && y) {
        var T = f.split(`
`),
          C = y.split(`
`);
        for (
          s = i = 0;
          i < T.length && !T[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; s < C.length && !C[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === T.length || s === C.length)
          for (
            i = T.length - 1, s = C.length - 1;
            1 <= i && 0 <= s && T[i] !== C[s];
          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== C[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || T[i] !== C[s])) {
                  var R =
                    `
` + T[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      R.includes("<anonymous>") &&
                      (R = R.replace("<anonymous>", t.displayName)),
                    R
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((vo = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? $n(n) : "";
  }
  function T0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return $n(t.type);
      case 16:
        return $n("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? $n("Suspense Fallback")
          : $n("Suspense");
      case 19:
        return $n("SuspenseList");
      case 0:
      case 15:
        return bo(t.type, !1);
      case 11:
        return bo(t.type.render, !1);
      case 1:
        return bo(t.type, !0);
      case 31:
        return $n("Activity");
      default:
        return "";
    }
  }
  function uf(t) {
    try {
      var e = "",
        n = null;
      do ((e += T0(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var xo = Object.prototype.hasOwnProperty,
    So = a.unstable_scheduleCallback,
    To = a.unstable_cancelCallback,
    A0 = a.unstable_shouldYield,
    E0 = a.unstable_requestPaint,
    ve = a.unstable_now,
    M0 = a.unstable_getCurrentPriorityLevel,
    rf = a.unstable_ImmediatePriority,
    cf = a.unstable_UserBlockingPriority,
    wl = a.unstable_NormalPriority,
    D0 = a.unstable_LowPriority,
    ff = a.unstable_IdlePriority,
    C0 = a.log,
    w0 = a.unstable_setDisableYieldValue,
    bi = null,
    be = null;
  function Sn(t) {
    if (
      (typeof C0 == "function" && w0(t),
      be && typeof be.setStrictMode == "function")
    )
      try {
        be.setStrictMode(bi, t);
      } catch {}
  }
  var xe = Math.clz32 ? Math.clz32 : z0,
    j0 = Math.log,
    N0 = Math.LN2;
  function z0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((j0(t) / N0) | 0)) | 0);
  }
  var jl = 256,
    Nl = 262144,
    zl = 4194304;
  function In(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ol(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~r),
          i !== 0
            ? (s = In(i))
            : ((f &= y),
              f !== 0
                ? (s = In(f))
                : n || ((n = y & ~t), n !== 0 && (s = In(n)))))
        : ((y = i & ~r),
          y !== 0
            ? (s = In(y))
            : f !== 0
              ? (s = In(f))
              : n || ((n = i & ~t), n !== 0 && (s = In(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & r) === 0 &&
            ((r = s & -s),
            (n = e & -e),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function xi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function O0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hf() {
    var t = zl;
    return ((zl <<= 1), (zl & 62914560) === 0 && (zl = 4194304), t);
  }
  function Ao(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Si(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function R0(t, e, n, i, s, r) {
    var f = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var y = t.entanglements,
      T = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var R = 31 - xe(n),
        _ = 1 << R;
      ((y[R] = 0), (T[R] = -1));
      var j = C[R];
      if (j !== null)
        for (C[R] = null, R = 0; R < j.length; R++) {
          var N = j[R];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~_;
    }
    (i !== 0 && df(t, i, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e)));
  }
  function df(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - xe(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 261930)));
  }
  function mf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - xe(n),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s));
    }
  }
  function pf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Eo(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Eo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Mo(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function yf() {
    var t = k.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ep(t.type));
  }
  function gf(t, e) {
    var n = k.p;
    try {
      return ((k.p = t), e());
    } finally {
      k.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + Tn,
    fe = "__reactProps$" + Tn,
    Aa = "__reactContainer$" + Tn,
    Do = "__reactEvents$" + Tn,
    V0 = "__reactListeners$" + Tn,
    _0 = "__reactHandles$" + Tn,
    vf = "__reactResources$" + Tn,
    Ti = "__reactMarker$" + Tn;
  function Co(t) {
    (delete t[It], delete t[fe], delete t[Do], delete t[V0], delete t[_0]);
  }
  function Ea(t) {
    var e = t[It];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Aa] || n[It])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Hm(t); t !== null; ) {
            if ((n = t[It])) return n;
            t = Hm(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Ma(t) {
    if ((t = t[It] || t[Aa])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ai(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Da(t) {
    var e = t[vf];
    return (
      e ||
        (e = t[vf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Wt(t) {
    t[Ti] = !0;
  }
  var bf = new Set(),
    xf = {};
  function ta(t, e) {
    (Ca(t, e), Ca(t + "Capture", e));
  }
  function Ca(t, e) {
    for (xf[t] = e, t = 0; t < e.length; t++) bf.add(e[t]);
  }
  var U0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Sf = {},
    Tf = {};
  function B0(t) {
    return xo.call(Tf, t)
      ? !0
      : xo.call(Sf, t)
        ? !1
        : U0.test(t)
          ? (Tf[t] = !0)
          : ((Sf[t] = !0), !1);
  }
  function Rl(t, e, n) {
    if (B0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Vl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function nn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Af(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function L0(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        r = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            ((n = "" + f), r.call(this, f));
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function wo(t) {
    if (!t._valueTracker) {
      var e = Af(t) ? "checked" : "value";
      t._valueTracker = L0(t, e, "" + t[e]);
    }
  }
  function Ef(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Af(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function _l(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var H0 = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(H0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function jo(t, e, n, i, s, r, f, y) {
    ((t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + je(e))
          : t.value !== "" + je(e) && (t.value = "" + je(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? No(t, f, je(e))
        : n != null
          ? No(t, f, je(n))
          : i != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + je(y))
        : t.removeAttribute("name"));
  }
  function Mf(t, e, n, i, s, r, f, y) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        wo(t);
        return;
      }
      ((n = n != null ? "" + je(n) : ""),
        (e = e != null ? "" + je(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = y ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      wo(t));
  }
  function No(t, e, n) {
    (e === "number" && _l(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function wa(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + je(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Df(t, e, n) {
    if (
      e != null &&
      ((e = "" + je(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + je(n) : "";
  }
  function Cf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(u(92));
        if (Lt(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = je(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i),
      wo(t));
  }
  function ja(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var q0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function wf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || q0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function jf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var s in e)
        ((i = e[s]), e.hasOwnProperty(s) && n[s] !== i && wf(t, s, i));
    } else for (var r in e) e.hasOwnProperty(r) && wf(t, r, e[r]);
  }
  function zo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Y0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    G0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ul(t) {
    return G0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function an() {}
  var Oo = null;
  function Ro(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Na = null,
    za = null;
  function Nf(t) {
    var e = Ma(t);
    if (e && (t = e.stateNode)) {
      var n = t[fe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (jo(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ne("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[fe] || null;
                if (!s) throw Error(u(90));
                jo(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((i = n[e]), i.form === t.form && Ef(i));
          }
          break t;
        case "textarea":
          Df(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && wa(t, !!n.multiple, e, !1));
      }
    }
  }
  var Vo = !1;
  function zf(t, e, n) {
    if (Vo) return t(e, n);
    Vo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Vo = !1),
        (Na !== null || za !== null) &&
          (As(), Na && ((e = Na), (t = za), (za = Na = null), Nf(e), t)))
      )
        for (e = 0; e < t.length; e++) Nf(t[e]);
    }
  }
  function Ei(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[fe] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var ln = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _o = !1;
  if (ln)
    try {
      var Mi = {};
      (Object.defineProperty(Mi, "passive", {
        get: function () {
          _o = !0;
        },
      }),
        window.addEventListener("test", Mi, Mi),
        window.removeEventListener("test", Mi, Mi));
    } catch {
      _o = !1;
    }
  var An = null,
    Uo = null,
    Bl = null;
  function Of() {
    if (Bl) return Bl;
    var t,
      e = Uo,
      n = e.length,
      i,
      s = "value" in An ? An.value : An.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[r - i]; i++);
    return (Bl = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Ll(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Hl() {
    return !0;
  }
  function Rf() {
    return !1;
  }
  function he(t) {
    function e(n, i, s, r, f) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null));
      for (var y in t)
        t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(r) : r[y]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Hl
          : Rf),
        (this.isPropagationStopped = Rf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Hl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Hl));
        },
        persist: function () {},
        isPersistent: Hl,
      }),
      e
    );
  }
  var ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = he(ea),
    Di = b({}, ea, { view: 0, detail: 0 }),
    X0 = he(Di),
    Bo,
    Lo,
    Ci,
    Yl = b({}, Di, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qo,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ci &&
              (Ci && t.type === "mousemove"
                ? ((Bo = t.screenX - Ci.screenX), (Lo = t.screenY - Ci.screenY))
                : (Lo = Bo = 0),
              (Ci = t)),
            Bo);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Lo;
      },
    }),
    Vf = he(Yl),
    k0 = b({}, Yl, { dataTransfer: 0 }),
    Q0 = he(k0),
    Z0 = b({}, Di, { relatedTarget: 0 }),
    Ho = he(Z0),
    K0 = b({}, ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J0 = he(K0),
    F0 = b({}, ea, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    W0 = he(F0),
    P0 = b({}, ea, { data: 0 }),
    _f = he(P0),
    $0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    I0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    tv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ev(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = tv[t])
        ? !!e[t]
        : !1;
  }
  function qo() {
    return ev;
  }
  var nv = b({}, Di, {
      key: function (t) {
        if (t.key) {
          var e = $0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ll(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? I0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qo,
      charCode: function (t) {
        return t.type === "keypress" ? Ll(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ll(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    av = he(nv),
    iv = b({}, Yl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uf = he(iv),
    lv = b({}, Di, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qo,
    }),
    sv = he(lv),
    ov = b({}, ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uv = he(ov),
    rv = b({}, Yl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    cv = he(rv),
    fv = b({}, ea, { newState: 0, oldState: 0 }),
    hv = he(fv),
    dv = [9, 13, 27, 32],
    Yo = ln && "CompositionEvent" in window,
    wi = null;
  ln && "documentMode" in document && (wi = document.documentMode);
  var mv = ln && "TextEvent" in window && !wi,
    Bf = ln && (!Yo || (wi && 8 < wi && 11 >= wi)),
    Lf = " ",
    Hf = !1;
  function qf(t, e) {
    switch (t) {
      case "keyup":
        return dv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Yf(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Oa = !1;
  function pv(t, e) {
    switch (t) {
      case "compositionend":
        return Yf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Hf = !0), Lf);
      case "textInput":
        return ((t = e.data), t === Lf && Hf ? null : t);
      default:
        return null;
    }
  }
  function yv(t, e) {
    if (Oa)
      return t === "compositionend" || (!Yo && qf(t, e))
        ? ((t = Of()), (Bl = Uo = An = null), (Oa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Bf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var gv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!gv[t.type] : e === "textarea";
  }
  function Xf(t, e, n, i) {
    (Na ? (za ? za.push(i) : (za = [i])) : (Na = i),
      (e = Ns(e, "onChange")),
      0 < e.length &&
        ((n = new ql("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e })));
  }
  var ji = null,
    Ni = null;
  function vv(t) {
    Mm(t, 0);
  }
  function Gl(t) {
    var e = Ai(t);
    if (Ef(e)) return t;
  }
  function kf(t, e) {
    if (t === "change") return e;
  }
  var Qf = !1;
  if (ln) {
    var Go;
    if (ln) {
      var Xo = "oninput" in document;
      if (!Xo) {
        var Zf = document.createElement("div");
        (Zf.setAttribute("oninput", "return;"),
          (Xo = typeof Zf.oninput == "function"));
      }
      Go = Xo;
    } else Go = !1;
    Qf = Go && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    ji && (ji.detachEvent("onpropertychange", Jf), (Ni = ji = null));
  }
  function Jf(t) {
    if (t.propertyName === "value" && Gl(Ni)) {
      var e = [];
      (Xf(e, Ni, t, Ro(t)), zf(vv, e));
    }
  }
  function bv(t, e, n) {
    t === "focusin"
      ? (Kf(), (ji = e), (Ni = n), ji.attachEvent("onpropertychange", Jf))
      : t === "focusout" && Kf();
  }
  function xv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gl(Ni);
  }
  function Sv(t, e) {
    if (t === "click") return Gl(e);
  }
  function Tv(t, e) {
    if (t === "input" || t === "change") return Gl(e);
  }
  function Av(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Se = typeof Object.is == "function" ? Object.is : Av;
  function zi(t, e) {
    if (Se(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!xo.call(e, s) || !Se(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Ff(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Wf(t, e) {
    var n = Ff(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ff(n);
    }
  }
  function Pf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Pf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function $f(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = _l(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = _l(t.document);
    }
    return e;
  }
  function ko(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ev = ln && "documentMode" in document && 11 >= document.documentMode,
    Ra = null,
    Qo = null,
    Oi = null,
    Zo = !1;
  function If(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zo ||
      Ra == null ||
      Ra !== _l(i) ||
      ((i = Ra),
      "selectionStart" in i && ko(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Oi && zi(Oi, i)) ||
        ((Oi = i),
        (i = Ns(Qo, "onSelect")),
        0 < i.length &&
          ((e = new ql("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Ra))));
  }
  function na(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Va = {
      animationend: na("Animation", "AnimationEnd"),
      animationiteration: na("Animation", "AnimationIteration"),
      animationstart: na("Animation", "AnimationStart"),
      transitionrun: na("Transition", "TransitionRun"),
      transitionstart: na("Transition", "TransitionStart"),
      transitioncancel: na("Transition", "TransitionCancel"),
      transitionend: na("Transition", "TransitionEnd"),
    },
    Ko = {},
    th = {};
  ln &&
    ((th = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Va.animationend.animation,
      delete Va.animationiteration.animation,
      delete Va.animationstart.animation),
    "TransitionEvent" in window || delete Va.transitionend.transition);
  function aa(t) {
    if (Ko[t]) return Ko[t];
    if (!Va[t]) return t;
    var e = Va[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in th) return (Ko[t] = e[n]);
    return t;
  }
  var eh = aa("animationend"),
    nh = aa("animationiteration"),
    ah = aa("animationstart"),
    Mv = aa("transitionrun"),
    Dv = aa("transitionstart"),
    Cv = aa("transitioncancel"),
    ih = aa("transitionend"),
    lh = new Map(),
    Jo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Jo.push("scrollEnd");
  function Ye(t, e) {
    (lh.set(t, e), ta(e, [t]));
  }
  var Xl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ze = [],
    _a = 0,
    Fo = 0;
  function kl() {
    for (var t = _a, e = (Fo = _a = 0); e < t; ) {
      var n = ze[e];
      ze[e++] = null;
      var i = ze[e];
      ze[e++] = null;
      var s = ze[e];
      ze[e++] = null;
      var r = ze[e];
      if (((ze[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s));
      }
      r !== 0 && sh(n, s, r);
    }
  }
  function Ql(t, e, n, i) {
    ((ze[_a++] = t),
      (ze[_a++] = e),
      (ze[_a++] = n),
      (ze[_a++] = i),
      (Fo |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function Wo(t, e, n, i) {
    return (Ql(t, e, n, i), Zl(t));
  }
  function ia(t, e) {
    return (Ql(t, null, null, e), Zl(t));
  }
  function sh(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      ((r.childLanes |= n),
        (i = r.alternate),
        i !== null && (i.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return));
    return t.tag === 3
      ? ((r = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - xe(n)),
          (t = r.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Zl(t) {
    if (50 < tl) throw ((tl = 0), (lr = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ua = {};
  function wv(t, e, n, i) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Te(t, e, n, i) {
    return new wv(t, e, n, i);
  }
  function Po(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function sn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Te(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function oh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Kl(t, e, n, i, s, r) {
    var f = 0;
    if (((i = t), typeof t == "function")) Po(t) && (f = 1);
    else if (typeof t == "string")
      f = R1(t, n, W.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case at:
          return (
            (t = Te(31, n, e, s)),
            (t.elementType = at),
            (t.lanes = r),
            t
          );
        case B:
          return la(n.children, s, r, e);
        case H:
          ((f = 8), (s |= 24));
          break;
        case L:
          return (
            (t = Te(12, n, e, s | 2)),
            (t.elementType = L),
            (t.lanes = r),
            t
          );
        case F:
          return ((t = Te(13, n, e, s)), (t.elementType = F), (t.lanes = r), t);
        case lt:
          return (
            (t = Te(19, n, e, s)),
            (t.elementType = lt),
            (t.lanes = r),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
                f = 10;
                break t;
              case Y:
                f = 9;
                break t;
              case X:
                f = 11;
                break t;
              case I:
                f = 14;
                break t;
              case $:
                ((f = 16), (i = null));
                break t;
            }
          ((f = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (i = null));
      }
    return (
      (e = Te(f, n, e, s)),
      (e.elementType = t),
      (e.type = i),
      (e.lanes = r),
      e
    );
  }
  function la(t, e, n, i) {
    return ((t = Te(7, t, i, e)), (t.lanes = n), t);
  }
  function $o(t, e, n) {
    return ((t = Te(6, t, null, e)), (t.lanes = n), t);
  }
  function uh(t) {
    var e = Te(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Io(t, e, n) {
    return (
      (e = Te(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var rh = new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = rh.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: uf(e) }), rh.set(t, e), e);
    }
    return { value: t, source: e, stack: uf(e) };
  }
  var Ba = [],
    La = 0,
    Jl = null,
    Ri = 0,
    Re = [],
    Ve = 0,
    En = null,
    Je = 1,
    Fe = "";
  function on(t, e) {
    ((Ba[La++] = Ri), (Ba[La++] = Jl), (Jl = t), (Ri = e));
  }
  function ch(t, e, n) {
    ((Re[Ve++] = Je), (Re[Ve++] = Fe), (Re[Ve++] = En), (En = t));
    var i = Je;
    t = Fe;
    var s = 32 - xe(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var r = 32 - xe(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      ((r = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (Je = (1 << (32 - xe(e) + s)) | (n << s) | i),
        (Fe = r + t));
    } else ((Je = (1 << r) | (n << s) | i), (Fe = t));
  }
  function tu(t) {
    t.return !== null && (on(t, 1), ch(t, 1, 0));
  }
  function eu(t) {
    for (; t === Jl; )
      ((Jl = Ba[--La]), (Ba[La] = null), (Ri = Ba[--La]), (Ba[La] = null));
    for (; t === En; )
      ((En = Re[--Ve]),
        (Re[Ve] = null),
        (Fe = Re[--Ve]),
        (Re[Ve] = null),
        (Je = Re[--Ve]),
        (Re[Ve] = null));
  }
  function fh(t, e) {
    ((Re[Ve++] = Je),
      (Re[Ve++] = Fe),
      (Re[Ve++] = En),
      (Je = e.id),
      (Fe = e.overflow),
      (En = t));
  }
  var te = null,
    Nt = null,
    gt = !1,
    Mn = null,
    _e = !1,
    nu = Error(u(519));
  function Dn(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Vi(Oe(e, t)), nu);
  }
  function hh(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[It] = t), (e[fe] = i), n)) {
      case "dialog":
        (ht("cancel", e), ht("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < nl.length; n++) ht(nl[n], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ht("error", e), ht("load", e));
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        (ht("invalid", e),
          Mf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ));
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        (ht("invalid", e), Cf(e, i.value, i.defaultValue, i.children));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      jm(e.textContent, n)
        ? (i.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
          i.onScroll != null && ht("scroll", e),
          i.onScrollEnd != null && ht("scrollend", e),
          i.onClick != null && (e.onclick = an),
          (e = !0))
        : (e = !1),
      e || Dn(t, !0));
  }
  function dh(t) {
    for (te = t.return; te; )
      switch (te.tag) {
        case 5:
        case 31:
        case 13:
          _e = !1;
          return;
        case 27:
        case 3:
          _e = !0;
          return;
        default:
          te = te.return;
      }
  }
  function Ha(t) {
    if (t !== te) return !1;
    if (!gt) return (dh(t), (gt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || xr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Nt && Dn(t),
      dh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      Nt = Lm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      Nt = Lm(t);
    } else
      e === 27
        ? ((e = Nt), qn(t.type) ? ((t = Mr), (Mr = null), (Nt = t)) : (Nt = e))
        : (Nt = te ? Be(t.stateNode.nextSibling) : null);
    return !0;
  }
  function sa() {
    ((Nt = te = null), (gt = !1));
  }
  function au() {
    var t = Mn;
    return (
      t !== null &&
        (ye === null ? (ye = t) : ye.push.apply(ye, t), (Mn = null)),
      t
    );
  }
  function Vi(t) {
    Mn === null ? (Mn = [t]) : Mn.push(t);
  }
  var iu = E(null),
    oa = null,
    un = null;
  function Cn(t, e, n) {
    (Q(iu, e._currentValue), (e._currentValue = n));
  }
  function rn(t) {
    ((t._currentValue = iu.current), U(iu));
  }
  function lu(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function su(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var T = 0; T < e.length; T++)
            if (y.context === e[T]) {
              ((r.lanes |= n),
                (y = r.alternate),
                y !== null && (y.lanes |= n),
                lu(r.return, n, t),
                i || (f = null));
              break t;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(u(341));
        ((f.lanes |= n),
          (r = f.alternate),
          r !== null && (r.lanes |= n),
          lu(f, n, t),
          (f = null));
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            ((s.return = f.return), (f = s));
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function qa(t, e, n, i) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(u(387));
        if (((f = f.memoizedProps), f !== null)) {
          var y = s.type;
          Se(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === Tt.current) {
        if (((f = s.alternate), f === null)) throw Error(u(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(ol) : (t = [ol]));
      }
      s = s.return;
    }
    (t !== null && su(e, t, n, i), (e.flags |= 262144));
  }
  function Fl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Se(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ua(t) {
    ((oa = t),
      (un = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ee(t) {
    return mh(oa, t);
  }
  function Wl(t, e) {
    return (oa === null && ua(t), mh(t, e));
  }
  function mh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), un === null)) {
      if (t === null) throw Error(u(308));
      ((un = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else un = un.next = e;
    return n;
  }
  var jv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Nv = a.unstable_scheduleCallback,
    zv = a.unstable_NormalPriority,
    Xt = {
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ou() {
    return { controller: new jv(), data: new Map(), refCount: 0 };
  }
  function _i(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Nv(zv, function () {
          t.controller.abort();
        }));
  }
  var Ui = null,
    uu = 0,
    Ya = 0,
    Ga = null;
  function Ov(t, e) {
    if (Ui === null) {
      var n = (Ui = []);
      ((uu = 0),
        (Ya = fr()),
        (Ga = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (uu++, e.then(ph, ph), e);
  }
  function ph() {
    if (--uu === 0 && Ui !== null) {
      Ga !== null && (Ga.status = "fulfilled");
      var t = Ui;
      ((Ui = null), (Ya = 0), (Ga = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Rv(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      i
    );
  }
  var yh = O.S;
  O.S = function (t, e) {
    ((Id = ve()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Ov(t, e),
      yh !== null && yh(t, e));
  };
  var ra = E(null);
  function ru() {
    var t = ra.current;
    return t !== null ? t : wt.pooledCache;
  }
  function Pl(t, e) {
    e === null ? Q(ra, ra.current) : Q(ra, e.pool);
  }
  function gh() {
    var t = ru();
    return t === null ? null : { parent: Xt._currentValue, pool: t };
  }
  var Xa = Error(u(460)),
    cu = Error(u(474)),
    $l = Error(u(542)),
    Il = { then: function () {} };
  function vh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function bh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(an, an), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Sh(t), t);
      default:
        if (typeof e.status == "string") e.then(an, an);
        else {
          if (((t = wt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Sh(t), t);
        }
        throw ((fa = e), Xa);
    }
  }
  function ca(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((fa = n), Xa)
        : n;
    }
  }
  var fa = null;
  function xh() {
    if (fa === null) throw Error(u(459));
    var t = fa;
    return ((fa = null), t);
  }
  function Sh(t) {
    if (t === Xa || t === $l) throw Error(u(483));
  }
  var ka = null,
    Bi = 0;
  function ts(t) {
    var e = Bi;
    return ((Bi += 1), ka === null && (ka = []), bh(ka, t, e));
  }
  function Li(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function es(t, e) {
    throw e.$$typeof === S
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Th(t) {
    function e(M, A) {
      if (t) {
        var D = M.deletions;
        D === null ? ((M.deletions = [A]), (M.flags |= 16)) : D.push(A);
      }
    }
    function n(M, A) {
      if (!t) return null;
      for (; A !== null; ) (e(M, A), (A = A.sibling));
      return null;
    }
    function i(M) {
      for (var A = new Map(); M !== null; )
        (M.key !== null ? A.set(M.key, M) : A.set(M.index, M), (M = M.sibling));
      return A;
    }
    function s(M, A) {
      return ((M = sn(M, A)), (M.index = 0), (M.sibling = null), M);
    }
    function r(M, A, D) {
      return (
        (M.index = D),
        t
          ? ((D = M.alternate),
            D !== null
              ? ((D = D.index), D < A ? ((M.flags |= 67108866), A) : D)
              : ((M.flags |= 67108866), A))
          : ((M.flags |= 1048576), A)
      );
    }
    function f(M) {
      return (t && M.alternate === null && (M.flags |= 67108866), M);
    }
    function y(M, A, D, V) {
      return A === null || A.tag !== 6
        ? ((A = $o(D, M.mode, V)), (A.return = M), A)
        : ((A = s(A, D)), (A.return = M), A);
    }
    function T(M, A, D, V) {
      var et = D.type;
      return et === B
        ? R(M, A, D.props.children, V, D.key)
        : A !== null &&
            (A.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === $ &&
                ca(et) === A.type))
          ? ((A = s(A, D.props)), Li(A, D), (A.return = M), A)
          : ((A = Kl(D.type, D.key, D.props, null, M.mode, V)),
            Li(A, D),
            (A.return = M),
            A);
    }
    function C(M, A, D, V) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== D.containerInfo ||
        A.stateNode.implementation !== D.implementation
        ? ((A = Io(D, M.mode, V)), (A.return = M), A)
        : ((A = s(A, D.children || [])), (A.return = M), A);
    }
    function R(M, A, D, V, et) {
      return A === null || A.tag !== 7
        ? ((A = la(D, M.mode, V, et)), (A.return = M), A)
        : ((A = s(A, D)), (A.return = M), A);
    }
    function _(M, A, D) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = $o("" + A, M.mode, D)), (A.return = M), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case w:
            return (
              (D = Kl(A.type, A.key, A.props, null, M.mode, D)),
              Li(D, A),
              (D.return = M),
              D
            );
          case z:
            return ((A = Io(A, M.mode, D)), (A.return = M), A);
          case $:
            return ((A = ca(A)), _(M, A, D));
        }
        if (Lt(A) || vt(A))
          return ((A = la(A, M.mode, D, null)), (A.return = M), A);
        if (typeof A.then == "function") return _(M, ts(A), D);
        if (A.$$typeof === q) return _(M, Wl(M, A), D);
        es(M, A);
      }
      return null;
    }
    function j(M, A, D, V) {
      var et = A !== null ? A.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return et !== null ? null : y(M, A, "" + D, V);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case w:
            return D.key === et ? T(M, A, D, V) : null;
          case z:
            return D.key === et ? C(M, A, D, V) : null;
          case $:
            return ((D = ca(D)), j(M, A, D, V));
        }
        if (Lt(D) || vt(D)) return et !== null ? null : R(M, A, D, V, null);
        if (typeof D.then == "function") return j(M, A, ts(D), V);
        if (D.$$typeof === q) return j(M, A, Wl(M, D), V);
        es(M, D);
      }
      return null;
    }
    function N(M, A, D, V, et) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return ((M = M.get(D) || null), y(A, M, "" + V, et));
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case w:
            return (
              (M = M.get(V.key === null ? D : V.key) || null),
              T(A, M, V, et)
            );
          case z:
            return (
              (M = M.get(V.key === null ? D : V.key) || null),
              C(A, M, V, et)
            );
          case $:
            return ((V = ca(V)), N(M, A, D, V, et));
        }
        if (Lt(V) || vt(V))
          return ((M = M.get(D) || null), R(A, M, V, et, null));
        if (typeof V.then == "function") return N(M, A, D, ts(V), et);
        if (V.$$typeof === q) return N(M, A, D, Wl(A, V), et);
        es(A, V);
      }
      return null;
    }
    function K(M, A, D, V) {
      for (
        var et = null, bt = null, P = A, rt = (A = 0), mt = null;
        P !== null && rt < D.length;
        rt++
      ) {
        P.index > rt ? ((mt = P), (P = null)) : (mt = P.sibling);
        var xt = j(M, P, D[rt], V);
        if (xt === null) {
          P === null && (P = mt);
          break;
        }
        (t && P && xt.alternate === null && e(M, P),
          (A = r(xt, A, rt)),
          bt === null ? (et = xt) : (bt.sibling = xt),
          (bt = xt),
          (P = mt));
      }
      if (rt === D.length) return (n(M, P), gt && on(M, rt), et);
      if (P === null) {
        for (; rt < D.length; rt++)
          ((P = _(M, D[rt], V)),
            P !== null &&
              ((A = r(P, A, rt)),
              bt === null ? (et = P) : (bt.sibling = P),
              (bt = P)));
        return (gt && on(M, rt), et);
      }
      for (P = i(P); rt < D.length; rt++)
        ((mt = N(P, M, rt, D[rt], V)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              P.delete(mt.key === null ? rt : mt.key),
            (A = r(mt, A, rt)),
            bt === null ? (et = mt) : (bt.sibling = mt),
            (bt = mt)));
      return (
        t &&
          P.forEach(function (Qn) {
            return e(M, Qn);
          }),
        gt && on(M, rt),
        et
      );
    }
    function nt(M, A, D, V) {
      if (D == null) throw Error(u(151));
      for (
        var et = null, bt = null, P = A, rt = (A = 0), mt = null, xt = D.next();
        P !== null && !xt.done;
        rt++, xt = D.next()
      ) {
        P.index > rt ? ((mt = P), (P = null)) : (mt = P.sibling);
        var Qn = j(M, P, xt.value, V);
        if (Qn === null) {
          P === null && (P = mt);
          break;
        }
        (t && P && Qn.alternate === null && e(M, P),
          (A = r(Qn, A, rt)),
          bt === null ? (et = Qn) : (bt.sibling = Qn),
          (bt = Qn),
          (P = mt));
      }
      if (xt.done) return (n(M, P), gt && on(M, rt), et);
      if (P === null) {
        for (; !xt.done; rt++, xt = D.next())
          ((xt = _(M, xt.value, V)),
            xt !== null &&
              ((A = r(xt, A, rt)),
              bt === null ? (et = xt) : (bt.sibling = xt),
              (bt = xt)));
        return (gt && on(M, rt), et);
      }
      for (P = i(P); !xt.done; rt++, xt = D.next())
        ((xt = N(P, M, rt, xt.value, V)),
          xt !== null &&
            (t &&
              xt.alternate !== null &&
              P.delete(xt.key === null ? rt : xt.key),
            (A = r(xt, A, rt)),
            bt === null ? (et = xt) : (bt.sibling = xt),
            (bt = xt)));
      return (
        t &&
          P.forEach(function (k1) {
            return e(M, k1);
          }),
        gt && on(M, rt),
        et
      );
    }
    function Ct(M, A, D, V) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === B &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case w:
            t: {
              for (var et = D.key; A !== null; ) {
                if (A.key === et) {
                  if (((et = D.type), et === B)) {
                    if (A.tag === 7) {
                      (n(M, A.sibling),
                        (V = s(A, D.props.children)),
                        (V.return = M),
                        (M = V));
                      break t;
                    }
                  } else if (
                    A.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === $ &&
                      ca(et) === A.type)
                  ) {
                    (n(M, A.sibling),
                      (V = s(A, D.props)),
                      Li(V, D),
                      (V.return = M),
                      (M = V));
                    break t;
                  }
                  n(M, A);
                  break;
                } else e(M, A);
                A = A.sibling;
              }
              D.type === B
                ? ((V = la(D.props.children, M.mode, V, D.key)),
                  (V.return = M),
                  (M = V))
                : ((V = Kl(D.type, D.key, D.props, null, M.mode, V)),
                  Li(V, D),
                  (V.return = M),
                  (M = V));
            }
            return f(M);
          case z:
            t: {
              for (et = D.key; A !== null; ) {
                if (A.key === et)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === D.containerInfo &&
                    A.stateNode.implementation === D.implementation
                  ) {
                    (n(M, A.sibling),
                      (V = s(A, D.children || [])),
                      (V.return = M),
                      (M = V));
                    break t;
                  } else {
                    n(M, A);
                    break;
                  }
                else e(M, A);
                A = A.sibling;
              }
              ((V = Io(D, M.mode, V)), (V.return = M), (M = V));
            }
            return f(M);
          case $:
            return ((D = ca(D)), Ct(M, A, D, V));
        }
        if (Lt(D)) return K(M, A, D, V);
        if (vt(D)) {
          if (((et = vt(D)), typeof et != "function")) throw Error(u(150));
          return ((D = et.call(D)), nt(M, A, D, V));
        }
        if (typeof D.then == "function") return Ct(M, A, ts(D), V);
        if (D.$$typeof === q) return Ct(M, A, Wl(M, D), V);
        es(M, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          A !== null && A.tag === 6
            ? (n(M, A.sibling), (V = s(A, D)), (V.return = M), (M = V))
            : (n(M, A), (V = $o(D, M.mode, V)), (V.return = M), (M = V)),
          f(M))
        : n(M, A);
    }
    return function (M, A, D, V) {
      try {
        Bi = 0;
        var et = Ct(M, A, D, V);
        return ((ka = null), et);
      } catch (P) {
        if (P === Xa || P === $l) throw P;
        var bt = Te(29, P, null, M.mode);
        return ((bt.lanes = V), (bt.return = M), bt);
      } finally {
      }
    };
  }
  var ha = Th(!0),
    Ah = Th(!1),
    wn = !1;
  function fu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function hu(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function jn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Nn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (St & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Zl(t)),
        sh(t, null, n),
        e
      );
    }
    return (Ql(t, i, e, n), Zl(t));
  }
  function Hi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), mf(t, n));
    }
  }
  function du(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (r === null ? (s = r = f) : (r = r.next = f), (n = n.next));
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var mu = !1;
  function qi() {
    if (mu) {
      var t = Ga;
      if (t !== null) throw t;
    }
  }
  function Yi(t, e, n, i) {
    mu = !1;
    var s = t.updateQueue;
    wn = !1;
    var r = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var T = y,
        C = T.next;
      ((T.next = null), f === null ? (r = C) : (f.next = C), (f = T));
      var R = t.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (y = R.lastBaseUpdate),
        y !== f &&
          (y === null ? (R.firstBaseUpdate = C) : (y.next = C),
          (R.lastBaseUpdate = T)));
    }
    if (r !== null) {
      var _ = s.baseState;
      ((f = 0), (R = C = T = null), (y = r));
      do {
        var j = y.lane & -536870913,
          N = j !== y.lane;
        if (N ? (dt & j) === j : (i & j) === j) {
          (j !== 0 && j === Ya && (mu = !0),
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var K = t,
              nt = y;
            j = e;
            var Ct = n;
            switch (nt.tag) {
              case 1:
                if (((K = nt.payload), typeof K == "function")) {
                  _ = K.call(Ct, _, j);
                  break t;
                }
                _ = K;
                break t;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = nt.payload),
                  (j = typeof K == "function" ? K.call(Ct, _, j) : K),
                  j == null)
                )
                  break t;
                _ = b({}, _, j);
                break t;
              case 2:
                wn = !0;
            }
          }
          ((j = y.callback),
            j !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = s.callbacks),
              N === null ? (s.callbacks = [j]) : N.push(j)));
        } else
          ((N = {
            lane: j,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            R === null ? ((C = R = N), (T = _)) : (R = R.next = N),
            (f |= j));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((N = y),
            (y = N.next),
            (N.next = null),
            (s.lastBaseUpdate = N),
            (s.shared.pending = null));
        }
      } while (!0);
      (R === null && (T = _),
        (s.baseState = T),
        (s.firstBaseUpdate = C),
        (s.lastBaseUpdate = R),
        r === null && (s.shared.lanes = 0),
        (_n |= f),
        (t.lanes = f),
        (t.memoizedState = _));
    }
  }
  function Eh(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function Mh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Eh(n[t], e);
  }
  var Qa = E(null),
    ns = E(0);
  function Dh(t, e) {
    ((t = vn), Q(ns, t), Q(Qa, e), (vn = t | e.baseLanes));
  }
  function pu() {
    (Q(ns, vn), Q(Qa, Qa.current));
  }
  function yu() {
    ((vn = ns.current), U(Qa), U(ns));
  }
  var Ae = E(null),
    Ue = null;
  function zn(t) {
    var e = t.alternate;
    (Q(qt, qt.current & 1),
      Q(Ae, t),
      Ue === null &&
        (e === null || Qa.current !== null || e.memoizedState !== null) &&
        (Ue = t));
  }
  function gu(t) {
    (Q(qt, qt.current), Q(Ae, t), Ue === null && (Ue = t));
  }
  function Ch(t) {
    t.tag === 22
      ? (Q(qt, qt.current), Q(Ae, t), Ue === null && (Ue = t))
      : On();
  }
  function On() {
    (Q(qt, qt.current), Q(Ae, Ae.current));
  }
  function Ee(t) {
    (U(Ae), Ue === t && (Ue = null), U(qt));
  }
  var qt = E(0);
  function as(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Ar(n) || Er(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var cn = 0,
    ot = null,
    Mt = null,
    kt = null,
    is = !1,
    Za = !1,
    da = !1,
    ls = 0,
    Gi = 0,
    Ka = null,
    Vv = 0;
  function Vt() {
    throw Error(u(321));
  }
  function vu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Se(t[n], e[n])) return !1;
    return !0;
  }
  function bu(t, e, n, i, s, r) {
    return (
      (cn = r),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? cd : Vu),
      (da = !1),
      (r = n(i, s)),
      (da = !1),
      Za && (r = jh(e, n, i, s)),
      wh(t),
      r
    );
  }
  function wh(t) {
    O.H = Qi;
    var e = Mt !== null && Mt.next !== null;
    if (((cn = 0), (kt = Mt = ot = null), (is = !1), (Gi = 0), (Ka = null), e))
      throw Error(u(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && Fl(t) && (Qt = !0));
  }
  function jh(t, e, n, i) {
    ot = t;
    var s = 0;
    do {
      if ((Za && (Ka = null), (Gi = 0), (Za = !1), 25 <= s))
        throw Error(u(301));
      if (((s += 1), (kt = Mt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((O.H = fd), (r = e(n, i)));
    } while (Za);
    return r;
  }
  function _v() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Xi(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function xu() {
    var t = ls !== 0;
    return ((ls = 0), t);
  }
  function Su(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Tu(t) {
    if (is) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      is = !1;
    }
    ((cn = 0), (kt = Mt = ot = null), (Za = !1), (Gi = ls = 0), (Ka = null));
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (kt === null ? (ot.memoizedState = kt = t) : (kt = kt.next = t), kt);
  }
  function Yt() {
    if (Mt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = kt === null ? ot.memoizedState : kt.next;
    if (e !== null) ((kt = e), (Mt = t));
    else {
      if (t === null)
        throw ot.alternate === null ? Error(u(467)) : Error(u(310));
      ((Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        kt === null ? (ot.memoizedState = kt = t) : (kt = kt.next = t));
    }
    return kt;
  }
  function ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xi(t) {
    var e = Gi;
    return (
      (Gi += 1),
      Ka === null && (Ka = []),
      (t = bh(Ka, t, e)),
      (e = ot),
      (kt === null ? e.memoizedState : kt.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? cd : Vu)),
      t
    );
  }
  function os(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Xi(t);
      if (t.$$typeof === q) return ee(t);
    }
    throw Error(u(438, String(t)));
  }
  function Au(t) {
    var e = null,
      n = ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ot.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ss()), (ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = tt;
    return (e.index++, n);
  }
  function fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function us(t) {
    var e = Yt();
    return Eu(e, Mt, t);
  }
  function Eu(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        ((s.next = r.next), (r.next = f));
      }
      ((e.baseQueue = s = r), (i.pending = null));
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var y = (f = null),
        T = null,
        C = e,
        R = !1;
      do {
        var _ = C.lane & -536870913;
        if (_ !== C.lane ? (dt & _) === _ : (cn & _) === _) {
          var j = C.revertLane;
          if (j === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              _ === Ya && (R = !0));
          else if ((cn & j) === j) {
            ((C = C.next), j === Ya && (R = !0));
            continue;
          } else
            ((_ = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              T === null ? ((y = T = _), (f = r)) : (T = T.next = _),
              (ot.lanes |= j),
              (_n |= j));
          ((_ = C.action),
            da && n(r, _),
            (r = C.hasEagerState ? C.eagerState : n(r, _)));
        } else
          ((j = {
            lane: _,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            T === null ? ((y = T = j), (f = r)) : (T = T.next = j),
            (ot.lanes |= _),
            (_n |= _));
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (T === null ? (f = r) : (T.next = y),
        !Se(r, t.memoizedState) && ((Qt = !0), R && ((n = Ga), n !== null)))
      )
        throw n;
      ((t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = T),
        (i.lastRenderedState = r));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function Mu(t) {
    var e = Yt(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do ((r = t(r, f.action)), (f = f.next));
      while (f !== s);
      (Se(r, e.memoizedState) || (Qt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, i];
  }
  function Nh(t, e, n) {
    var i = ot,
      s = Yt(),
      r = gt;
    if (r) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var f = !Se((Mt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Qt = !0)),
      (s = s.queue),
      wu(Rh.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (kt !== null && kt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ja(9, { destroy: void 0 }, Oh.bind(null, i, s, n, e), null),
        wt === null)
      )
        throw Error(u(349));
      r || (cn & 127) !== 0 || zh(i, e, n);
    }
    return n;
  }
  function zh(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ot.updateQueue),
      e === null
        ? ((e = ss()), (ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Oh(t, e, n, i) {
    ((e.value = n), (e.getSnapshot = i), Vh(e) && _h(t));
  }
  function Rh(t, e, n) {
    return n(function () {
      Vh(e) && _h(t);
    });
  }
  function Vh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Se(t, n);
    } catch {
      return !0;
    }
  }
  function _h(t) {
    var e = ia(t, 2);
    e !== null && ge(e, t, 2);
  }
  function Du(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), da)) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Uh(t, e, n, i) {
    return ((t.baseState = n), Eu(t, Mt, typeof i == "function" ? i : fn));
  }
  function Uv(t, e, n, i, s) {
    if (fs(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      (O.T !== null ? n(!0) : (r.isTransition = !1),
        i(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), Bh(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function Bh(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = O.T,
        f = {};
      O.T = f;
      try {
        var y = n(s, i),
          T = O.S;
        (T !== null && T(f, y), Lh(t, e, y));
      } catch (C) {
        Cu(t, e, C);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (O.T = r));
      }
    } else
      try {
        ((r = n(s, i)), Lh(t, e, r));
      } catch (C) {
        Cu(t, e, C);
      }
  }
  function Lh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Hh(t, e, i);
          },
          function (i) {
            return Cu(t, e, i);
          },
        )
      : Hh(t, e, n);
  }
  function Hh(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      qh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Bh(t, n))));
  }
  function Cu(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = n), qh(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function qh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Yh(t, e) {
    return e;
  }
  function Gh(t, e) {
    if (gt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var i = ot;
          if (gt) {
            if (Nt) {
              e: {
                for (var s = Nt, r = _e; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = Be(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((r = s.data), (s = r === "F!" || r === "F" ? s : null));
              }
              if (s) {
                ((Nt = Be(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            Dn(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yh,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = od.bind(null, ot, i)),
      (i.dispatch = n),
      (i = Du(!1)),
      (r = Ru.bind(null, ot, !1, i.queue)),
      (i = ue()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Uv.bind(null, ot, s, r, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function Xh(t) {
    var e = Yt();
    return kh(e, Mt, t);
  }
  function kh(t, e, n) {
    if (
      ((e = Eu(t, e, Yh)[0]),
      (t = us(fn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Xi(e);
      } catch (f) {
        throw f === Xa ? $l : f;
      }
    else i = e;
    e = Yt();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ot.flags |= 2048),
        Ja(9, { destroy: void 0 }, Bv.bind(null, s, n), null)),
      [i, r, t]
    );
  }
  function Bv(t, e) {
    t.action = e;
  }
  function Qh(t) {
    var e = Yt(),
      n = Mt;
    if (n !== null) return kh(e, n, t);
    (Yt(), (e = e.memoizedState), (n = Yt()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = t), [e, i, !1]);
  }
  function Ja(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = ss()), (ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Zh() {
    return Yt().memoizedState;
  }
  function rs(t, e, n, i) {
    var s = ue();
    ((ot.flags |= t),
      (s.memoizedState = Ja(
        1 | e,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i,
      )));
  }
  function cs(t, e, n, i) {
    var s = Yt();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    Mt !== null && i !== null && vu(i, Mt.memoizedState.deps)
      ? (s.memoizedState = Ja(e, r, n, i))
      : ((ot.flags |= t), (s.memoizedState = Ja(1 | e, r, n, i)));
  }
  function Kh(t, e) {
    rs(8390656, 8, t, e);
  }
  function wu(t, e) {
    cs(2048, 8, t, e);
  }
  function Lv(t) {
    ot.flags |= 4;
    var e = ot.updateQueue;
    if (e === null) ((e = ss()), (ot.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Jh(t) {
    var e = Yt().memoizedState;
    return (
      Lv({ ref: e, nextImpl: t }),
      function () {
        if ((St & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Fh(t, e) {
    return cs(4, 2, t, e);
  }
  function Wh(t, e) {
    return cs(4, 4, t, e);
  }
  function Ph(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function $h(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), cs(4, 4, Ph.bind(null, e, t), n));
  }
  function ju() {}
  function Ih(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && vu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function td(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && vu(e, i[1])) return i[0];
    if (((i = t()), da)) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return ((n.memoizedState = [i, e]), i);
  }
  function Nu(t, e, n) {
    return n === void 0 || ((cn & 1073741824) !== 0 && (dt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = em()), (ot.lanes |= t), (_n |= t), n);
  }
  function ed(t, e, n, i) {
    return Se(n, e)
      ? n
      : Qa.current !== null
        ? ((t = Nu(t, n, i)), Se(t, e) || (Qt = !0), t)
        : (cn & 42) === 0 || ((cn & 1073741824) !== 0 && (dt & 261930) === 0)
          ? ((Qt = !0), (t.memoizedState = n))
          : ((t = em()), (ot.lanes |= t), (_n |= t), e);
  }
  function nd(t, e, n, i, s) {
    var r = k.p;
    k.p = r !== 0 && 8 > r ? r : 8;
    var f = O.T,
      y = {};
    ((O.T = y), Ru(t, !1, e, n));
    try {
      var T = s(),
        C = O.S;
      if (
        (C !== null && C(y, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var R = Rv(T, i);
        ki(t, e, R, Ce(t));
      } else ki(t, e, i, Ce(t));
    } catch (_) {
      ki(t, e, { then: function () {}, status: "rejected", reason: _ }, Ce());
    } finally {
      ((k.p = r),
        f !== null && y.types !== null && (f.types = y.types),
        (O.T = f));
    }
  }
  function Hv() {}
  function zu(t, e, n, i) {
    if (t.tag !== 5) throw Error(u(476));
    var s = ad(t).queue;
    nd(
      t,
      s,
      e,
      Z,
      n === null
        ? Hv
        : function () {
            return (id(t), n(i));
          },
    );
  }
  function ad(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: Z,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function id(t) {
    var e = ad(t);
    (e.next === null && (e = t.alternate.memoizedState),
      ki(t, e.next.queue, {}, Ce()));
  }
  function Ou() {
    return ee(ol);
  }
  function ld() {
    return Yt().memoizedState;
  }
  function sd() {
    return Yt().memoizedState;
  }
  function qv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = jn(n);
          var i = Nn(e, t, n);
          (i !== null && (ge(i, e, n), Hi(i, e, n)),
            (e = { cache: ou() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Yv(t, e, n) {
    var i = Ce();
    ((n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fs(t)
        ? ud(e, n)
        : ((n = Wo(t, e, n, i)), n !== null && (ge(n, t, i), rd(n, e, i))));
  }
  function od(t, e, n) {
    var i = Ce();
    ki(t, e, n, i);
  }
  function ki(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fs(t)) ud(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var f = e.lastRenderedState,
            y = r(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), Se(y, f)))
            return (Ql(t, e, s, 0), wt === null && kl(), !1);
        } catch {
        } finally {
        }
      if (((n = Wo(t, e, s, i)), n !== null))
        return (ge(n, t, i), rd(n, e, i), !0);
    }
    return !1;
  }
  function Ru(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: fr(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fs(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = Wo(t, n, i, 2)), e !== null && ge(e, t, 2));
  }
  function fs(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function ud(t, e) {
    Za = is = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function rd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), mf(t, n));
    }
  }
  var Qi = {
    readContext: ee,
    use: os,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt,
  };
  Qi.useEffectEvent = Vt;
  var cd = {
      readContext: ee,
      use: os,
      useCallback: function (t, e) {
        return ((ue().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ee,
      useEffect: Kh,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          rs(4194308, 4, Ph.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return rs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        rs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var i = t();
        if (da) {
          Sn(!0);
          try {
            t();
          } finally {
            Sn(!1);
          }
        }
        return ((n.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, n) {
        var i = ue();
        if (n !== void 0) {
          var s = n(e);
          if (da) {
            Sn(!0);
            try {
              n(e);
            } finally {
              Sn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Yv.bind(null, ot, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Du(t);
        var e = t.queue,
          n = od.bind(null, ot, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: ju,
      useDeferredValue: function (t, e) {
        var n = ue();
        return Nu(n, t, e);
      },
      useTransition: function () {
        var t = Du(!1);
        return (
          (t = nd.bind(null, ot, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ot,
          s = ue();
        if (gt) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), wt === null)) throw Error(u(349));
          (dt & 127) !== 0 || zh(i, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          Kh(Rh.bind(null, i, r, t), [t]),
          (i.flags |= 2048),
          Ja(9, { destroy: void 0 }, Oh.bind(null, i, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = wt.identifierPrefix;
        if (gt) {
          var n = Fe,
            i = Je;
          ((n = (i & ~(1 << (32 - xe(i) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ls++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Vv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ou,
      useFormState: Gh,
      useActionState: Gh,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Ru.bind(null, ot, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Au,
      useCacheRefresh: function () {
        return (ue().memoizedState = qv.bind(null, ot));
      },
      useEffectEvent: function (t) {
        var e = ue(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((St & 2) !== 0) throw Error(u(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Vu = {
      readContext: ee,
      use: os,
      useCallback: Ih,
      useContext: ee,
      useEffect: wu,
      useImperativeHandle: $h,
      useInsertionEffect: Fh,
      useLayoutEffect: Wh,
      useMemo: td,
      useReducer: us,
      useRef: Zh,
      useState: function () {
        return us(fn);
      },
      useDebugValue: ju,
      useDeferredValue: function (t, e) {
        var n = Yt();
        return ed(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = us(fn)[0],
          e = Yt().memoizedState;
        return [typeof t == "boolean" ? t : Xi(t), e];
      },
      useSyncExternalStore: Nh,
      useId: ld,
      useHostTransitionStatus: Ou,
      useFormState: Xh,
      useActionState: Xh,
      useOptimistic: function (t, e) {
        var n = Yt();
        return Uh(n, Mt, t, e);
      },
      useMemoCache: Au,
      useCacheRefresh: sd,
    };
  Vu.useEffectEvent = Jh;
  var fd = {
    readContext: ee,
    use: os,
    useCallback: Ih,
    useContext: ee,
    useEffect: wu,
    useImperativeHandle: $h,
    useInsertionEffect: Fh,
    useLayoutEffect: Wh,
    useMemo: td,
    useReducer: Mu,
    useRef: Zh,
    useState: function () {
      return Mu(fn);
    },
    useDebugValue: ju,
    useDeferredValue: function (t, e) {
      var n = Yt();
      return Mt === null ? Nu(n, t, e) : ed(n, Mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Mu(fn)[0],
        e = Yt().memoizedState;
      return [typeof t == "boolean" ? t : Xi(t), e];
    },
    useSyncExternalStore: Nh,
    useId: ld,
    useHostTransitionStatus: Ou,
    useFormState: Qh,
    useActionState: Qh,
    useOptimistic: function (t, e) {
      var n = Yt();
      return Mt !== null
        ? Uh(n, Mt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Au,
    useCacheRefresh: sd,
  };
  fd.useEffectEvent = Jh;
  function _u(t, e, n, i) {
    ((e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Uu = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Ce(),
        s = jn(i);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = Nn(t, s, i)),
        e !== null && (ge(e, t, i), Hi(e, t, i)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Ce(),
        s = jn(i);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Nn(t, s, i)),
        e !== null && (ge(e, t, i), Hi(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ce(),
        i = jn(n);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = Nn(t, i, n)),
        e !== null && (ge(e, t, n), Hi(e, t, n)));
    },
  };
  function hd(t, e, n, i, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, r, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !zi(n, i) || !zi(s, r)
          : !0
    );
  }
  function dd(t, e, n, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Uu.enqueueReplaceState(e, e.state, null));
  }
  function ma(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function md(t) {
    Xl(t);
  }
  function pd(t) {
    console.error(t);
  }
  function yd(t) {
    Xl(t);
  }
  function hs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function gd(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Bu(t, e, n) {
    return (
      (n = jn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        hs(t, e);
      }),
      n
    );
  }
  function vd(t) {
    return ((t = jn(t)), (t.tag = 3), t);
  }
  function bd(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      ((t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          gd(e, n, i);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (gd(e, n, i),
          typeof s != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this)));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function Gv(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && qa(e, n, s, !0),
        (n = Ae.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ue === null ? Es() : n.alternate === null && _t === 0 && (_t = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  ur(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  ur(t, i, s)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (ur(t, i, s), Es(), !1);
    }
    if (gt)
      return (
        (e = Ae.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== nu && ((t = Error(u(422), { cause: i })), Vi(Oe(t, n))))
          : (i !== nu && ((e = Error(u(423), { cause: i })), Vi(Oe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Oe(i, n)),
            (s = Bu(t.stateNode, i, s)),
            du(t, s),
            _t !== 4 && (_t = 2)),
        !1
      );
    var r = Error(u(520), { cause: i });
    if (
      ((r = Oe(r, n)),
      Ii === null ? (Ii = [r]) : Ii.push(r),
      _t !== 4 && (_t = 2),
      e === null)
    )
      return !0;
    ((i = Oe(i, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Bu(n.stateNode, i, t)),
            du(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Un === null || !Un.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = vd(s)),
              bd(s, t, n, i),
              du(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Lu = Error(u(461)),
    Qt = !1;
  function ne(t, e, n, i) {
    e.child = t === null ? Ah(e, null, n, i) : ha(e, t.child, n, i);
  }
  function xd(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var y in i) y !== "ref" && (f[y] = i[y]);
    } else f = i;
    return (
      ua(e),
      (i = bu(t, e, n, f, r, s)),
      (y = xu()),
      t !== null && !Qt
        ? (Su(t, e, s), hn(t, e, s))
        : (gt && y && tu(e), (e.flags |= 1), ne(t, e, i, s), e.child)
    );
  }
  function Sd(t, e, n, i, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Po(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), Td(t, e, r, i, s))
        : ((t = Kl(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !Zu(t, s))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : zi), n(f, i) && t.ref === e.ref)
      )
        return hn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = sn(r, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Td(t, e, n, i, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (zi(r, i) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = i = r), Zu(t, s)))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return ((e.lanes = t.lanes), hn(t, e, s));
    }
    return Hu(t, e, n, i, s);
  }
  function Ad(t, e, n, i) {
    var s = i.children,
      r = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (i = e.child = t.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          i = s & ~r;
        } else ((i = 0), (e.child = null));
        return Ed(t, e, r, n, i);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Pl(e, r !== null ? r.cachePool : null),
          r !== null ? Dh(e, r) : pu(),
          Ch(e));
      else
        return (
          (i = e.lanes = 536870912),
          Ed(t, e, r !== null ? r.baseLanes | n : n, n, i)
        );
    } else
      r !== null
        ? (Pl(e, r.cachePool), Dh(e, r), On(), (e.memoizedState = null))
        : (t !== null && Pl(e, null), pu(), On());
    return (ne(t, e, s, n), e.child);
  }
  function Zi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Ed(t, e, n, i, s) {
    var r = ru();
    return (
      (r = r === null ? null : { parent: Xt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && Pl(e, null),
      pu(),
      Ch(e),
      t !== null && qa(t, e, i, !0),
      (e.childLanes = s),
      null
    );
  }
  function ds(t, e) {
    return (
      (e = ps({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Md(t, e, n) {
    return (
      ha(e, t.child, null, n),
      (t = ds(e, e.pendingProps)),
      (t.flags |= 2),
      Ee(e),
      (e.memoizedState = null),
      t
    );
  }
  function Xv(t, e, n) {
    var i = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (gt) {
        if (i.mode === "hidden")
          return ((t = ds(e, i)), (e.lanes = 536870912), Zi(null, t));
        if (
          (gu(e),
          (t = Nt)
            ? ((t = Bm(t, _e)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: Je, overflow: Fe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = uh(t)),
                (n.return = e),
                (e.child = n),
                (te = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return ((e.lanes = 536870912), null);
      }
      return ds(e, i);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((gu(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = Md(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if (
        (Qt || qa(t, e, n, !1), (s = (n & t.childLanes) !== 0), Qt || s)
      ) {
        if (
          ((i = wt),
          i !== null && ((f = pf(i, n)), f !== 0 && f !== r.retryLane))
        )
          throw ((r.retryLane = f), ia(t, f), ge(i, t, f), Lu);
        (Es(), (e = Md(t, e, n)));
      } else
        ((t = r.treeContext),
          (Nt = Be(f.nextSibling)),
          (te = e),
          (gt = !0),
          (Mn = null),
          (_e = !1),
          t !== null && fh(e, t),
          (e = ds(e, i)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = sn(t.child, { mode: i.mode, children: i.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ms(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Hu(t, e, n, i, s) {
    return (
      ua(e),
      (n = bu(t, e, n, i, void 0, s)),
      (i = xu()),
      t !== null && !Qt
        ? (Su(t, e, s), hn(t, e, s))
        : (gt && i && tu(e), (e.flags |= 1), ne(t, e, n, s), e.child)
    );
  }
  function Dd(t, e, n, i, s, r) {
    return (
      ua(e),
      (e.updateQueue = null),
      (n = jh(e, i, n, s)),
      wh(t),
      (i = xu()),
      t !== null && !Qt
        ? (Su(t, e, r), hn(t, e, r))
        : (gt && i && tu(e), (e.flags |= 1), ne(t, e, n, r), e.child)
    );
  }
  function Cd(t, e, n, i, s) {
    if ((ua(e), e.stateNode === null)) {
      var r = Ua,
        f = n.contextType;
      (typeof f == "object" && f !== null && (r = ee(f)),
        (r = new n(i, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Uu),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = i),
        (r.state = e.memoizedState),
        (r.refs = {}),
        fu(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? ee(f) : Ua),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (_u(e, n, f, i), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Uu.enqueueReplaceState(r, r.state, null),
          Yi(e, i, r, s),
          qi(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      r = e.stateNode;
      var y = e.memoizedProps,
        T = ma(n, y);
      r.props = T;
      var C = r.context,
        R = n.contextType;
      ((f = Ua), typeof R == "object" && R !== null && (f = ee(R)));
      var _ = n.getDerivedStateFromProps;
      ((R =
        typeof _ == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        R ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((y || C !== f) && dd(e, r, i, f)),
        (wn = !1));
      var j = e.memoizedState;
      ((r.state = j),
        Yi(e, i, r, s),
        qi(),
        (C = e.memoizedState),
        y || j !== C || wn
          ? (typeof _ == "function" && (_u(e, n, _, i), (C = e.memoizedState)),
            (T = wn || hd(e, n, T, i, j, C, f))
              ? (R ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = C)),
            (r.props = i),
            (r.state = C),
            (r.context = f),
            (i = T))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1)));
    } else {
      ((r = e.stateNode),
        hu(t, e),
        (f = e.memoizedProps),
        (R = ma(n, f)),
        (r.props = R),
        (_ = e.pendingProps),
        (j = r.context),
        (C = n.contextType),
        (T = Ua),
        typeof C == "object" && C !== null && (T = ee(C)),
        (y = n.getDerivedStateFromProps),
        (C =
          typeof y == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== _ || j !== T) && dd(e, r, i, T)),
        (wn = !1),
        (j = e.memoizedState),
        (r.state = j),
        Yi(e, i, r, s),
        qi());
      var N = e.memoizedState;
      f !== _ ||
      j !== N ||
      wn ||
      (t !== null && t.dependencies !== null && Fl(t.dependencies))
        ? (typeof y == "function" && (_u(e, n, y, i), (N = e.memoizedState)),
          (R =
            wn ||
            hd(e, n, R, i, j, N, T) ||
            (t !== null && t.dependencies !== null && Fl(t.dependencies)))
            ? (C ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(i, N, T),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(i, N, T)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && j === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && j === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = N)),
          (r.props = i),
          (r.state = N),
          (r.context = T),
          (i = R))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && j === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && j === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (r = i),
      ms(t, e),
      (i = (e.flags & 128) !== 0),
      r || i
        ? ((r = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = ha(e, t.child, null, s)),
              (e.child = ha(e, null, n, s)))
            : ne(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = hn(t, e, s)),
      t
    );
  }
  function wd(t, e, n, i) {
    return (sa(), (e.flags |= 256), ne(t, e, n, i), e.child);
  }
  var qu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Yu(t) {
    return { baseLanes: t, cachePool: gh() };
  }
  function Gu(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= De), t);
  }
  function jd(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if (
          (s ? zn(e) : On(),
          (t = Nt)
            ? ((t = Bm(t, _e)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: Je, overflow: Fe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = uh(t)),
                (n.return = e),
                (e.child = n),
                (te = e),
                (Nt = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return (Er(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var y = i.children;
      return (
        (i = i.fallback),
        s
          ? (On(),
            (s = e.mode),
            (y = ps({ mode: "hidden", children: y }, s)),
            (i = la(i, s, n, null)),
            (y.return = e),
            (i.return = e),
            (y.sibling = i),
            (e.child = y),
            (i = e.child),
            (i.memoizedState = Yu(n)),
            (i.childLanes = Gu(t, f, n)),
            (e.memoizedState = qu),
            Zi(null, i))
          : (zn(e), Xu(e, y))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((y = T.dehydrated), y !== null)) {
      if (r)
        e.flags & 256
          ? (zn(e), (e.flags &= -257), (e = ku(t, e, n)))
          : e.memoizedState !== null
            ? (On(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (On(),
              (y = i.fallback),
              (s = e.mode),
              (i = ps({ mode: "visible", children: i.children }, s)),
              (y = la(y, s, n, null)),
              (y.flags |= 2),
              (i.return = e),
              (y.return = e),
              (i.sibling = y),
              (e.child = i),
              ha(e, t.child, null, n),
              (i = e.child),
              (i.memoizedState = Yu(n)),
              (i.childLanes = Gu(t, f, n)),
              (e.memoizedState = qu),
              (e = Zi(null, i)));
      else if ((zn(e), Er(y))) {
        if (((f = y.nextSibling && y.nextSibling.dataset), f)) var C = f.dgst;
        ((f = C),
          (i = Error(u(419))),
          (i.stack = ""),
          (i.digest = f),
          Vi({ value: i, source: null, stack: null }),
          (e = ku(t, e, n)));
      } else if (
        (Qt || qa(t, e, n, !1), (f = (n & t.childLanes) !== 0), Qt || f)
      ) {
        if (
          ((f = wt),
          f !== null && ((i = pf(f, n)), i !== 0 && i !== T.retryLane))
        )
          throw ((T.retryLane = i), ia(t, i), ge(f, t, i), Lu);
        (Ar(y) || Es(), (e = ku(t, e, n)));
      } else
        Ar(y)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Nt = Be(y.nextSibling)),
            (te = e),
            (gt = !0),
            (Mn = null),
            (_e = !1),
            t !== null && fh(e, t),
            (e = Xu(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (On(),
        (y = i.fallback),
        (s = e.mode),
        (T = t.child),
        (C = T.sibling),
        (i = sn(T, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = T.subtreeFlags & 65011712),
        C !== null ? (y = sn(C, y)) : ((y = la(y, s, n, null)), (y.flags |= 2)),
        (y.return = e),
        (i.return = e),
        (i.sibling = y),
        (e.child = i),
        Zi(null, i),
        (i = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Yu(n))
          : ((s = y.cachePool),
            s !== null
              ? ((T = Xt._currentValue),
                (s = s.parent !== T ? { parent: T, pool: T } : s))
              : (s = gh()),
            (y = { baseLanes: y.baseLanes | n, cachePool: s })),
        (i.memoizedState = y),
        (i.childLanes = Gu(t, f, n)),
        (e.memoizedState = qu),
        Zi(t.child, i))
      : (zn(e),
        (n = t.child),
        (t = n.sibling),
        (n = sn(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Xu(t, e) {
    return (
      (e = ps({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ps(t, e) {
    return ((t = Te(22, t, null, e)), (t.lanes = 0), t);
  }
  function ku(t, e, n) {
    return (
      ha(e, t.child, null, n),
      (t = Xu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Nd(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), lu(t.return, e, n));
  }
  function Qu(t, e, n, i, s, r) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
          treeForkCount: r,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = i),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = r));
  }
  function zd(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      r = i.tail;
    i = i.children;
    var f = qt.current,
      y = (f & 2) !== 0;
    if (
      (y ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      Q(qt, f),
      ne(t, e, i, n),
      (i = gt ? Ri : 0),
      !y && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Nd(t, n, e);
        else if (t.tag === 19) Nd(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && as(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Qu(e, !1, s, n, r, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && as(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Qu(e, !0, n, null, r, i);
        break;
      case "together":
        Qu(e, !1, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function hn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_n |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((qa(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = sn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = sn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Zu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Fl(t)));
  }
  function kv(t, e, n) {
    switch (e.tag) {
      case 3:
        (oe(e, e.stateNode.containerInfo),
          Cn(e, Xt, t.memoizedState.cache),
          sa());
        break;
      case 27:
      case 5:
        vi(e);
        break;
      case 4:
        oe(e, e.stateNode.containerInfo);
        break;
      case 10:
        Cn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), gu(e), null);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (zn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? jd(t, e, n)
              : (zn(e), (t = hn(t, e, n)), t !== null ? t.sibling : null);
        zn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (qa(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return zd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Q(qt, qt.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Ad(t, e, n, e.pendingProps));
      case 24:
        Cn(e, Xt, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function Od(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!Zu(t, n) && (e.flags & 128) === 0) return ((Qt = !1), kv(t, e, n));
        Qt = (t.flags & 131072) !== 0;
      }
    else ((Qt = !1), gt && (e.flags & 1048576) !== 0 && ch(e, Ri, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (((t = ca(e.elementType)), (e.type = t), typeof t == "function"))
            Po(t)
              ? ((i = ma(t, i)), (e.tag = 1), (e = Cd(null, e, t, i, n)))
              : ((e.tag = 0), (e = Hu(null, e, t, i, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === X) {
                ((e.tag = 11), (e = xd(null, e, t, i, n)));
                break t;
              } else if (s === I) {
                ((e.tag = 14), (e = Sd(null, e, t, i, n)));
                break t;
              }
            }
            throw ((e = Gt(t) || t), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return Hu(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((i = e.type), (s = ma(i, e.pendingProps)), Cd(t, e, i, s, n));
      case 3:
        t: {
          if ((oe(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          i = e.pendingProps;
          var r = e.memoizedState;
          ((s = r.element), hu(t, e), Yi(e, i, null, n));
          var f = e.memoizedState;
          if (
            ((i = f.cache),
            Cn(e, Xt, i),
            i !== r.cache && su(e, [Xt], n, !0),
            qi(),
            (i = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: i, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = wd(t, e, i, n);
              break t;
            } else if (i !== s) {
              ((s = Oe(Error(u(424)), e)), Vi(s), (e = wd(t, e, i, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Nt = Be(t.firstChild),
                  te = e,
                  gt = !0,
                  Mn = null,
                  _e = !0,
                  n = Ah(e, null, i, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((sa(), i === s)) {
              e = hn(t, e, n);
              break t;
            }
            ne(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ms(t, e),
          t === null
            ? (n = Xm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : gt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = zs(ct.current).createElement(n)),
                (i[It] = e),
                (i[fe] = t),
                ae(i, n, t),
                Wt(i),
                (e.stateNode = i))
            : (e.memoizedState = Xm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          vi(e),
          t === null &&
            gt &&
            ((i = e.stateNode = qm(e.type, e.pendingProps, ct.current)),
            (te = e),
            (_e = !0),
            (s = Nt),
            qn(e.type) ? ((Mr = s), (Nt = Be(i.firstChild))) : (Nt = s)),
          ne(t, e, e.pendingProps.children, n),
          ms(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((s = i = Nt) &&
              ((i = x1(i, e.type, e.pendingProps, _e)),
              i !== null
                ? ((e.stateNode = i),
                  (te = e),
                  (Nt = Be(i.firstChild)),
                  (_e = !1),
                  (s = !0))
                : (s = !1)),
            s || Dn(e)),
          vi(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = r.children),
          xr(s, r) ? (i = null) : f !== null && xr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = bu(t, e, _v, null, null, n)), (ol._currentValue = s)),
          ms(t, e),
          ne(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = n = Nt) &&
              ((n = S1(n, e.pendingProps, _e)),
              n !== null
                ? ((e.stateNode = n), (te = e), (Nt = null), (t = !0))
                : (t = !1)),
            t || Dn(e)),
          null
        );
      case 13:
        return jd(t, e, n);
      case 4:
        return (
          oe(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = ha(e, null, i, n)) : ne(t, e, i, n),
          e.child
        );
      case 11:
        return xd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (ne(t, e, e.pendingProps, n), e.child);
      case 8:
        return (ne(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (ne(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (i = e.pendingProps),
          Cn(e, e.type, i.value),
          ne(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          ua(e),
          (s = ee(s)),
          (i = i(s)),
          (e.flags |= 1),
          ne(t, e, i, n),
          e.child
        );
      case 14:
        return Sd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Td(t, e, e.type, e.pendingProps, n);
      case 19:
        return zd(t, e, n);
      case 31:
        return Xv(t, e, n);
      case 22:
        return Ad(t, e, n, e.pendingProps);
      case 24:
        return (
          ua(e),
          (i = ee(Xt)),
          t === null
            ? ((s = ru()),
              s === null &&
                ((s = wt),
                (r = ou()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: i, cache: s }),
              fu(e),
              Cn(e, Xt, s))
            : ((t.lanes & n) !== 0 && (hu(t, e), Yi(e, null, null, n), qi()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Cn(e, Xt, i))
                : ((i = r.cache),
                  Cn(e, Xt, i),
                  i !== s.cache && su(e, [Xt], n, !0))),
          ne(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function Ku(t, e, n, i, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (lm()) t.flags |= 8192;
        else throw ((fa = Il), cu);
    } else t.flags &= -16777217;
  }
  function Rd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Jm(e)))
      if (lm()) t.flags |= 8192;
      else throw ((fa = Il), cu);
  }
  function ys(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? hf() : 536870912), (t.lanes |= e), ($a |= e)));
  }
  function Ki(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = n), e);
  }
  function Qv(t, e, n) {
    var i = e.pendingProps;
    switch ((eu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (zt(e), null);
      case 1:
        return (zt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          rn(Xt),
          Ht(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ha(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), au())),
          zt(e),
          null
        );
      case 26:
        var s = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (dn(e),
              r !== null ? (zt(e), Rd(e, r)) : (zt(e), Ku(e, s, null, i, n)))
            : r
              ? r !== t.memoizedState
                ? (dn(e), zt(e), Rd(e, r))
                : (zt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== i && dn(e),
                zt(e),
                Ku(e, s, t, i, n)),
          null
        );
      case 27:
        if (
          (Cl(e),
          (n = ct.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== i && dn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(u(166));
            return (zt(e), null);
          }
          ((t = W.current),
            Ha(e) ? hh(e) : ((t = qm(s, i, n)), (e.stateNode = t), dn(e)));
        }
        return (zt(e), null);
      case 5:
        if ((Cl(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && dn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(u(166));
            return (zt(e), null);
          }
          if (((r = W.current), Ha(e))) hh(e);
          else {
            var f = zs(ct.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((r = f.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof i.is == "string"
                        ? f.createElement("select", { is: i.is })
                        : f.createElement("select")),
                      i.multiple
                        ? (r.multiple = !0)
                        : i.size && (r.size = i.size));
                    break;
                  default:
                    r =
                      typeof i.is == "string"
                        ? f.createElement(s, { is: i.is })
                        : f.createElement(s);
                }
            }
            ((r[It] = e), (r[fe] = i));
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            e.stateNode = r;
            t: switch ((ae(r, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && dn(e);
          }
        }
        return (
          zt(e),
          Ku(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && dn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ct.current), Ha(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = te),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[It] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                jm(t.nodeValue, n)
              )),
              t || Dn(e, !0));
          } else
            ((t = zs(t).createTextNode(i)), (t[It] = e), (e.stateNode = t));
        }
        return (zt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = Ha(e)), n !== null)) {
            if (t === null) {
              if (!i) throw Error(u(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(u(557));
              t[It] = e;
            } else
              (sa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (t = !1));
          } else
            ((n = au()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (zt(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ha(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(u(317));
              s[It] = e;
            } else
              (sa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (s = !1));
          } else
            ((s = au()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
        }
        return (
          Ee(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = i !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((i = e.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (r = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (r = i.memoizedState.cachePool.pool),
                r !== s && (i.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ys(e, e.updateQueue),
              zt(e),
              null)
        );
      case 4:
        return (Ht(), t === null && pr(e.stateNode.containerInfo), zt(e), null);
      case 10:
        return (rn(e.type), zt(e), null);
      case 19:
        if ((U(qt), (i = e.memoizedState), i === null)) return (zt(e), null);
        if (((s = (e.flags & 128) !== 0), (r = i.rendering), r === null))
          if (s) Ki(i, !1);
          else {
            if (_t !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = as(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Ki(i, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      ys(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (oh(n, t), (n = n.sibling));
                  return (
                    Q(qt, (qt.current & 1) | 2),
                    gt && on(e, i.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            i.tail !== null &&
              ve() > Ss &&
              ((e.flags |= 128), (s = !0), Ki(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = as(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ys(e, t),
                Ki(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !r.alternate &&
                  !gt)
              )
                return (zt(e), null);
            } else
              2 * ve() - i.renderingStartTime > Ss &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Ki(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = i.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (i.last = r));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ve()),
            (t.sibling = null),
            (n = qt.current),
            Q(qt, s ? (n & 1) | 2 : n & 1),
            gt && on(e, i.treeForkCount),
            t)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          Ee(e),
          yu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : zt(e),
          (n = e.updateQueue),
          n !== null && ys(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && U(ra),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          rn(Xt),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Zv(t, e) {
    switch ((eu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          rn(Xt),
          Ht(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Cl(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Ee(e), e.alternate === null)) throw Error(u(340));
          sa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ee(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          sa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (U(qt), null);
      case 4:
        return (Ht(), null);
      case 10:
        return (rn(e.type), null);
      case 22:
      case 23:
        return (
          Ee(e),
          yu(),
          t !== null && U(ra),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (rn(Xt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(t, e) {
    switch ((eu(e), e.tag)) {
      case 3:
        (rn(Xt), Ht());
        break;
      case 26:
      case 27:
      case 5:
        Cl(e);
        break;
      case 4:
        Ht();
        break;
      case 31:
        e.memoizedState !== null && Ee(e);
        break;
      case 13:
        Ee(e);
        break;
      case 19:
        U(qt);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        (Ee(e), yu(), t !== null && U(ra));
        break;
      case 24:
        rn(Xt);
    }
  }
  function Ji(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var r = n.create,
              f = n.inst;
            ((i = r()), (f.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Et(e, e.return, y);
    }
  }
  function Rn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              y = f.destroy;
            if (y !== void 0) {
              ((f.destroy = void 0), (s = e));
              var T = n,
                C = y;
              try {
                C();
              } catch (R) {
                Et(s, T, R);
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (R) {
      Et(e, e.return, R);
    }
  }
  function _d(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Mh(e, n);
      } catch (i) {
        Et(t, t.return, i);
      }
    }
  }
  function Ud(t, e, n) {
    ((n.props = ma(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      Et(t, e, i);
    }
  }
  function Fi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Et(t, e, s);
    }
  }
  function We(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Et(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Et(t, e, s);
        }
      else n.current = null;
  }
  function Bd(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Et(t, t.return, s);
    }
  }
  function Ju(t, e, n) {
    try {
      var i = t.stateNode;
      (m1(i, t.type, n, e), (i[fe] = e));
    } catch (s) {
      Et(t, t.return, s);
    }
  }
  function Ld(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && qn(t.type)) ||
      t.tag === 4
    );
  }
  function Fu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ld(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && qn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Wu(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = an)));
    else if (
      i !== 4 &&
      (i === 27 && qn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Wu(t, e, n), t = t.sibling; t !== null; )
        (Wu(t, e, n), (t = t.sibling));
  }
  function gs(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      i !== 4 &&
      (i === 27 && qn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (gs(t, e, n), t = t.sibling; t !== null; )
        (gs(t, e, n), (t = t.sibling));
  }
  function Hd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (ae(e, i, n), (e[It] = t), (e[fe] = n));
    } catch (r) {
      Et(t, t.return, r);
    }
  }
  var mn = !1,
    Zt = !1,
    Pu = !1,
    qd = typeof WeakSet == "function" ? WeakSet : Set,
    Pt = null;
  function Kv(t, e) {
    if (((t = t.containerInfo), (vr = Ls), (t = $f(t)), ko(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              r = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              y = -1,
              T = -1,
              C = 0,
              R = 0,
              _ = t,
              j = null;
            e: for (;;) {
              for (
                var N;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (y = f + s),
                  _ !== r || (i !== 0 && _.nodeType !== 3) || (T = f + i),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (N = _.firstChild) !== null;
              )
                ((j = _), (_ = N));
              for (;;) {
                if (_ === t) break e;
                if (
                  (j === n && ++C === s && (y = f),
                  j === r && ++R === i && (T = f),
                  (N = _.nextSibling) !== null)
                )
                  break;
                ((_ = j), (j = _.parentNode));
              }
              _ = N;
            }
            n = y === -1 || T === -1 ? null : { start: y, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      br = { focusedElem: t, selectionRange: n }, Ls = !1, Pt = e;
      Pt !== null;
    )
      if (
        ((e = Pt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Pt = t));
      else
        for (; Pt !== null; ) {
          switch (((e = Pt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                ((t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (i = n.stateNode));
                try {
                  var K = ma(n.type, s);
                  ((t = i.getSnapshotBeforeUpdate(K, r)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (nt) {
                  Et(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Tr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Pt = t));
            break;
          }
          Pt = e.return;
        }
  }
  function Yd(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (yn(t, n), i & 4 && Ji(5, n));
        break;
      case 1:
        if ((yn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Et(n, n.return, f);
            }
          else {
            var s = ma(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Et(n, n.return, f);
            }
          }
        (i & 64 && _d(n), i & 512 && Fi(n, n.return));
        break;
      case 3:
        if ((yn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Mh(t, e);
          } catch (f) {
            Et(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Hd(n);
      case 26:
      case 5:
        (yn(t, n), e === null && i & 4 && Bd(n), i & 512 && Fi(n, n.return));
        break;
      case 12:
        yn(t, n);
        break;
      case 31:
        (yn(t, n), i & 4 && kd(t, n));
        break;
      case 13:
        (yn(t, n),
          i & 4 && Qd(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = n1.bind(null, n)), T1(t, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || mn), !i)) {
          ((e = (e !== null && e.memoizedState !== null) || Zt), (s = mn));
          var r = Zt;
          ((mn = i),
            (Zt = e) && !r ? gn(t, n, (n.subtreeFlags & 8772) !== 0) : yn(t, n),
            (mn = s),
            (Zt = r));
        }
        break;
      case 30:
        break;
      default:
        yn(t, n);
    }
  }
  function Gd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Gd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Co(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ot = null,
    de = !1;
  function pn(t, e, n) {
    for (n = n.child; n !== null; ) (Xd(t, e, n), (n = n.sibling));
  }
  function Xd(t, e, n) {
    if (be && typeof be.onCommitFiberUnmount == "function")
      try {
        be.onCommitFiberUnmount(bi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Zt || We(n, e),
          pn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Zt || We(n, e);
        var i = Ot,
          s = de;
        (qn(n.type) && ((Ot = n.stateNode), (de = !1)),
          pn(t, e, n),
          il(n.stateNode),
          (Ot = i),
          (de = s));
        break;
      case 5:
        Zt || We(n, e);
      case 6:
        if (
          ((i = Ot),
          (s = de),
          (Ot = null),
          pn(t, e, n),
          (Ot = i),
          (de = s),
          Ot !== null)
        )
          if (de)
            try {
              (Ot.nodeType === 9
                ? Ot.body
                : Ot.nodeName === "HTML"
                  ? Ot.ownerDocument.body
                  : Ot
              ).removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
          else
            try {
              Ot.removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
        break;
      case 18:
        Ot !== null &&
          (de
            ? ((t = Ot),
              _m(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              si(t))
            : _m(Ot, n.stateNode));
        break;
      case 4:
        ((i = Ot),
          (s = de),
          (Ot = n.stateNode.containerInfo),
          (de = !0),
          pn(t, e, n),
          (Ot = i),
          (de = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Rn(2, n, e), Zt || Rn(4, n, e), pn(t, e, n));
        break;
      case 1:
        (Zt ||
          (We(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Ud(n, e, i)),
          pn(t, e, n));
        break;
      case 21:
        pn(t, e, n);
        break;
      case 22:
        ((Zt = (i = Zt) || n.memoizedState !== null), pn(t, e, n), (Zt = i));
        break;
      default:
        pn(t, e, n);
    }
  }
  function kd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        si(t);
      } catch (n) {
        Et(e, e.return, n);
      }
    }
  }
  function Qd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        si(t);
      } catch (n) {
        Et(e, e.return, n);
      }
  }
  function Jv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new qd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new qd()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function vs(t, e) {
    var n = Jv(t);
    e.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var s = a1.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function me(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          r = t,
          f = e,
          y = f;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (qn(y.type)) {
                ((Ot = y.stateNode), (de = !1));
                break t;
              }
              break;
            case 5:
              ((Ot = y.stateNode), (de = !1));
              break t;
            case 3:
            case 4:
              ((Ot = y.stateNode.containerInfo), (de = !0));
              break t;
          }
          y = y.return;
        }
        if (Ot === null) throw Error(u(160));
        (Xd(r, f, s),
          (Ot = null),
          (de = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Zd(e, t), (e = e.sibling));
  }
  var Ge = null;
  function Zd(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (me(e, t),
          pe(t),
          i & 4 && (Rn(3, t, t.return), Ji(3, t), Rn(5, t, t.return)));
        break;
      case 1:
        (me(e, t),
          pe(t),
          i & 512 && (Zt || n === null || We(n, n.return)),
          i & 64 &&
            mn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var s = Ge;
        if (
          (me(e, t),
          pe(t),
          i & 512 && (Zt || n === null || We(n, n.return)),
          i & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  ((i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (i) {
                    case "title":
                      ((r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Ti] ||
                          r[It] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(i)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title"),
                          )),
                        ae(r, i, n),
                        (r[It] = t),
                        Wt(r),
                        (i = r));
                      break t;
                    case "link":
                      var f = Zm("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var y = 0; y < f.length; y++)
                          if (
                            ((r = f[y]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(i)),
                        ae(r, i, n),
                        s.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (f = Zm("meta", "content", s).get(
                          i + (n.content || ""),
                        ))
                      ) {
                        for (y = 0; y < f.length; y++)
                          if (
                            ((r = f[y]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(i)),
                        ae(r, i, n),
                        s.head.appendChild(r));
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  ((r[It] = t), Wt(r), (i = r));
                }
                t.stateNode = i;
              } else Km(s, t.type, t.stateNode);
            else t.stateNode = Qm(s, i, t.memoizedProps);
          else
            r !== i
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                i === null
                  ? Km(s, t.type, t.stateNode)
                  : Qm(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Ju(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (me(e, t),
          pe(t),
          i & 512 && (Zt || n === null || We(n, n.return)),
          n !== null && i & 4 && Ju(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (me(e, t),
          pe(t),
          i & 512 && (Zt || n === null || We(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            ja(s, "");
          } catch (K) {
            Et(t, t.return, K);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Ju(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Pu = !0));
        break;
      case 6:
        if ((me(e, t), pe(t), i & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((i = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = i;
          } catch (K) {
            Et(t, t.return, K);
          }
        }
        break;
      case 3:
        if (
          ((Vs = null),
          (s = Ge),
          (Ge = Os(e.containerInfo)),
          me(e, t),
          (Ge = s),
          pe(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            si(e.containerInfo);
          } catch (K) {
            Et(t, t.return, K);
          }
        Pu && ((Pu = !1), Kd(t));
        break;
      case 4:
        ((i = Ge),
          (Ge = Os(t.stateNode.containerInfo)),
          me(e, t),
          pe(t),
          (Ge = i));
        break;
      case 12:
        (me(e, t), pe(t));
        break;
      case 31:
        (me(e, t),
          pe(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), vs(t, i))));
        break;
      case 13:
        (me(e, t),
          pe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (xs = ve()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), vs(t, i))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          C = mn,
          R = Zt;
        if (
          ((mn = C || s),
          (Zt = R || T),
          me(e, t),
          (Zt = R),
          (mn = C),
          pe(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || T || mn || Zt || pa(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((r = T.stateNode), s))
                    ((f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    y = T.stateNode;
                    var _ = T.memoizedProps.style,
                      j =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    y.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (K) {
                  Et(T, T.return, K);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (K) {
                  Et(T, T.return, K);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var N = T.stateNode;
                  s ? Um(N, !0) : Um(T.stateNode, !1);
                } catch (K) {
                  Et(T, T.return, K);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), vs(t, n))));
        break;
      case 19:
        (me(e, t),
          pe(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), vs(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (me(e, t), pe(t));
    }
  }
  function pe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Ld(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              r = Fu(t);
            gs(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (ja(f, ""), (n.flags &= -33));
            var y = Fu(t);
            gs(t, y, f);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              C = Fu(t);
            Wu(t, C, T);
            break;
          default:
            throw Error(u(161));
        }
      } catch (R) {
        Et(t, t.return, R);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Kd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Kd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function yn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Yd(t, e.alternate, e), (e = e.sibling));
  }
  function pa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Rn(4, e, e.return), pa(e));
          break;
        case 1:
          We(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Ud(e, e.return, n),
            pa(e));
          break;
        case 27:
          il(e.stateNode);
        case 26:
        case 5:
          (We(e, e.return), pa(e));
          break;
        case 22:
          e.memoizedState === null && pa(e);
          break;
        case 30:
          pa(e);
          break;
        default:
          pa(e);
      }
      t = t.sibling;
    }
  }
  function gn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        r = e,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (gn(s, r, n), Ji(4, r));
          break;
        case 1:
          if (
            (gn(s, r, n),
            (i = r),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (C) {
              Et(i, i.return, C);
            }
          if (((i = r), (s = i.updateQueue), s !== null)) {
            var y = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Eh(T[s], y);
            } catch (C) {
              Et(i, i.return, C);
            }
          }
          (n && f & 64 && _d(r), Fi(r, r.return));
          break;
        case 27:
          Hd(r);
        case 26:
        case 5:
          (gn(s, r, n), n && i === null && f & 4 && Bd(r), Fi(r, r.return));
          break;
        case 12:
          gn(s, r, n);
          break;
        case 31:
          (gn(s, r, n), n && f & 4 && kd(s, r));
          break;
        case 13:
          (gn(s, r, n), n && f & 4 && Qd(s, r));
          break;
        case 22:
          (r.memoizedState === null && gn(s, r, n), Fi(r, r.return));
          break;
        case 30:
          break;
        default:
          gn(s, r, n);
      }
      e = e.sibling;
    }
  }
  function $u(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && _i(n)));
  }
  function Iu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && _i(t)));
  }
  function Xe(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Jd(t, e, n, i), (e = e.sibling));
  }
  function Jd(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Xe(t, e, n, i), s & 2048 && Ji(9, e));
        break;
      case 1:
        Xe(t, e, n, i);
        break;
      case 3:
        (Xe(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && _i(t))));
        break;
      case 12:
        if (s & 2048) {
          (Xe(t, e, n, i), (t = e.stateNode));
          try {
            var r = e.memoizedProps,
              f = r.id,
              y = r.onPostCommit;
            typeof y == "function" &&
              y(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Et(e, e.return, T);
          }
        } else Xe(t, e, n, i);
        break;
      case 31:
        Xe(t, e, n, i);
        break;
      case 13:
        Xe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Xe(t, e, n, i)
              : Wi(t, e)
            : r._visibility & 2
              ? Xe(t, e, n, i)
              : ((r._visibility |= 2),
                Fa(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && $u(f, e));
        break;
      case 24:
        (Xe(t, e, n, i), s & 2048 && Iu(e.alternate, e));
        break;
      default:
        Xe(t, e, n, i);
    }
  }
  function Fa(t, e, n, i, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var r = t,
        f = e,
        y = n,
        T = i,
        C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Fa(r, f, y, T, s), Ji(8, f));
          break;
        case 23:
          break;
        case 22:
          var R = f.stateNode;
          (f.memoizedState !== null
            ? R._visibility & 2
              ? Fa(r, f, y, T, s)
              : Wi(r, f)
            : ((R._visibility |= 2), Fa(r, f, y, T, s)),
            s && C & 2048 && $u(f.alternate, f));
          break;
        case 24:
          (Fa(r, f, y, T, s), s && C & 2048 && Iu(f.alternate, f));
          break;
        default:
          Fa(r, f, y, T, s);
      }
      e = e.sibling;
    }
  }
  function Wi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (Wi(n, i), s & 2048 && $u(i.alternate, i));
            break;
          case 24:
            (Wi(n, i), s & 2048 && Iu(i.alternate, i));
            break;
          default:
            Wi(n, i);
        }
        e = e.sibling;
      }
  }
  var Pi = 8192;
  function Wa(t, e, n) {
    if (t.subtreeFlags & Pi)
      for (t = t.child; t !== null; ) (Fd(t, e, n), (t = t.sibling));
  }
  function Fd(t, e, n) {
    switch (t.tag) {
      case 26:
        (Wa(t, e, n),
          t.flags & Pi &&
            t.memoizedState !== null &&
            V1(n, Ge, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Wa(t, e, n);
        break;
      case 3:
      case 4:
        var i = Ge;
        ((Ge = Os(t.stateNode.containerInfo)), Wa(t, e, n), (Ge = i));
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Pi), (Pi = 16777216), Wa(t, e, n), (Pi = i))
            : Wa(t, e, n));
        break;
      default:
        Wa(t, e, n);
    }
  }
  function Wd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function $i(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((Pt = i), $d(i, t));
        }
      Wd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Pd(t), (t = t.sibling));
  }
  function Pd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ($i(t), t.flags & 2048 && Rn(9, t, t.return));
        break;
      case 3:
        $i(t);
        break;
      case 12:
        $i(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), bs(t))
          : $i(t);
        break;
      default:
        $i(t);
    }
  }
  function bs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((Pt = i), $d(i, t));
        }
      Wd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Rn(8, e, e.return), bs(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), bs(e)));
          break;
        default:
          bs(e);
      }
      t = t.sibling;
    }
  }
  function $d(t, e) {
    for (; Pt !== null; ) {
      var n = Pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Rn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          _i(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (Pt = i));
      else
        t: for (n = t; Pt !== null; ) {
          i = Pt;
          var s = i.sibling,
            r = i.return;
          if ((Gd(i), i === n)) {
            Pt = null;
            break t;
          }
          if (s !== null) {
            ((s.return = r), (Pt = s));
            break t;
          }
          Pt = r;
        }
    }
  }
  var Fv = {
      getCacheForType: function (t) {
        var e = ee(Xt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return ee(Xt).controller.signal;
      },
    },
    Wv = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    wt = null,
    ft = null,
    dt = 0,
    At = 0,
    Me = null,
    Vn = !1,
    Pa = !1,
    tr = !1,
    vn = 0,
    _t = 0,
    _n = 0,
    ya = 0,
    er = 0,
    De = 0,
    $a = 0,
    Ii = null,
    ye = null,
    nr = !1,
    xs = 0,
    Id = 0,
    Ss = 1 / 0,
    Ts = null,
    Un = null,
    Jt = 0,
    Bn = null,
    Ia = null,
    bn = 0,
    ar = 0,
    ir = null,
    tm = null,
    tl = 0,
    lr = null;
  function Ce() {
    return (St & 2) !== 0 && dt !== 0 ? dt & -dt : O.T !== null ? fr() : yf();
  }
  function em() {
    if (De === 0)
      if ((dt & 536870912) === 0 || gt) {
        var t = Nl;
        ((Nl <<= 1), (Nl & 3932160) === 0 && (Nl = 262144), (De = t));
      } else De = 536870912;
    return ((t = Ae.current), t !== null && (t.flags |= 32), De);
  }
  function ge(t, e, n) {
    (((t === wt && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (ti(t, 0), Ln(t, dt, De, !1)),
      Si(t, n),
      ((St & 2) === 0 || t !== wt) &&
        (t === wt &&
          ((St & 2) === 0 && (ya |= n), _t === 4 && Ln(t, dt, De, !1)),
        Pe(t)));
  }
  function nm(t, e, n) {
    if ((St & 6) !== 0) throw Error(u(327));
    var i = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || xi(t, e),
      s = i ? Iv(t, e) : or(t, e, !0),
      r = i;
    do {
      if (s === 0) {
        Pa && !i && Ln(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !Pv(n))) {
          ((s = or(t, e, !1)), (r = !1));
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            ((f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            e = f;
            t: {
              var y = t;
              s = Ii;
              var T = y.current.memoizedState.isDehydrated;
              if ((T && (ti(y, f).flags |= 256), (f = or(y, f, !1)), f !== 2)) {
                if (tr && !T) {
                  ((y.errorRecoveryDisabledLanes |= r), (ya |= r), (s = 4));
                  break t;
                }
                ((r = ye),
                  (ye = s),
                  r !== null &&
                    (ye === null ? (ye = r) : ye.push.apply(ye, r)));
              }
              s = f;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (ti(t, 0), Ln(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ln(i, e, De, !Vn);
              break t;
            case 2:
              ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((s = xs + 300 - ve()), 10 < s)) {
            if ((Ln(i, e, De, !Vn), Ol(i, 0, !0) !== 0)) break t;
            ((bn = e),
              (i.timeoutHandle = Rm(
                am.bind(
                  null,
                  i,
                  n,
                  ye,
                  Ts,
                  nr,
                  e,
                  De,
                  ya,
                  $a,
                  Vn,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          am(i, n, ye, Ts, nr, e, De, ya, $a, Vn, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Pe(t);
  }
  function am(t, e, n, i, s, r, f, y, T, C, R, _, j, N) {
    if (
      ((t.timeoutHandle = -1),
      (_ = e.subtreeFlags),
      _ & 8192 || (_ & 16785408) === 16785408)
    ) {
      ((_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an,
      }),
        Fd(e, r, _));
      var K =
        (r & 62914560) === r ? xs - ve() : (r & 4194048) === r ? Id - ve() : 0;
      if (((K = _1(_, K)), K !== null)) {
        ((bn = r),
          (t.cancelPendingCommit = K(
            fm.bind(null, t, e, r, n, i, s, f, y, T, R, _, null, j, N),
          )),
          Ln(t, r, f, !C));
        return;
      }
    }
    fm(t, e, r, n, i, s, f, y, T);
  }
  function Pv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!Se(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Ln(t, e, n, i) {
    ((e &= ~er),
      (e &= ~ya),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var r = 31 - xe(s),
        f = 1 << r;
      ((i[r] = -1), (s &= ~f));
    }
    n !== 0 && df(t, n, e);
  }
  function As() {
    return (St & 6) === 0 ? (el(0), !1) : !0;
  }
  function sr() {
    if (ft !== null) {
      if (At === 0) var t = ft.return;
      else ((t = ft), (un = oa = null), Tu(t), (ka = null), (Bi = 0), (t = ft));
      for (; t !== null; ) (Vd(t.alternate, t), (t = t.return));
      ft = null;
    }
  }
  function ti(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), g1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (bn = 0),
      sr(),
      (wt = t),
      (ft = n = sn(t.current, null)),
      (dt = e),
      (At = 0),
      (Me = null),
      (Vn = !1),
      (Pa = xi(t, e)),
      (tr = !1),
      ($a = De = er = ya = _n = _t = 0),
      (ye = Ii = null),
      (nr = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - xe(i),
          r = 1 << s;
        ((e |= t[s]), (i &= ~r));
      }
    return ((vn = e), kl(), n);
  }
  function im(t, e) {
    ((ot = null),
      (O.H = Qi),
      e === Xa || e === $l
        ? ((e = xh()), (At = 3))
        : e === cu
          ? ((e = xh()), (At = 4))
          : (At =
              e === Lu
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Me = e),
      ft === null && ((_t = 1), hs(t, Oe(e, t.current))));
  }
  function lm() {
    var t = Ae.current;
    return t === null
      ? !0
      : (dt & 4194048) === dt
        ? Ue === null
        : (dt & 62914560) === dt || (dt & 536870912) !== 0
          ? t === Ue
          : !1;
  }
  function sm() {
    var t = O.H;
    return ((O.H = Qi), t === null ? Qi : t);
  }
  function om() {
    var t = O.A;
    return ((O.A = Fv), t);
  }
  function Es() {
    ((_t = 4),
      Vn || ((dt & 4194048) !== dt && Ae.current !== null) || (Pa = !0),
      ((_n & 134217727) === 0 && (ya & 134217727) === 0) ||
        wt === null ||
        Ln(wt, dt, De, !1));
  }
  function or(t, e, n) {
    var i = St;
    St |= 2;
    var s = sm(),
      r = om();
    ((wt !== t || dt !== e) && ((Ts = null), ti(t, e)), (e = !1));
    var f = _t;
    t: do
      try {
        if (At !== 0 && ft !== null) {
          var y = ft,
            T = Me;
          switch (At) {
            case 8:
              (sr(), (f = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ae.current === null && (e = !0);
              var C = At;
              if (((At = 0), (Me = null), ei(t, y, T, C), n && Pa)) {
                f = 0;
                break t;
              }
              break;
            default:
              ((C = At), (At = 0), (Me = null), ei(t, y, T, C));
          }
        }
        ($v(), (f = _t));
        break;
      } catch (R) {
        im(t, R);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (un = oa = null),
      (St = i),
      (O.H = s),
      (O.A = r),
      ft === null && ((wt = null), (dt = 0), kl()),
      f
    );
  }
  function $v() {
    for (; ft !== null; ) um(ft);
  }
  function Iv(t, e) {
    var n = St;
    St |= 2;
    var i = sm(),
      s = om();
    wt !== t || dt !== e
      ? ((Ts = null), (Ss = ve() + 500), ti(t, e))
      : (Pa = xi(t, e));
    t: do
      try {
        if (At !== 0 && ft !== null) {
          e = ft;
          var r = Me;
          e: switch (At) {
            case 1:
              ((At = 0), (Me = null), ei(t, e, r, 1));
              break;
            case 2:
            case 9:
              if (vh(r)) {
                ((At = 0), (Me = null), rm(e));
                break;
              }
              ((e = function () {
                ((At !== 2 && At !== 9) || wt !== t || (At = 7), Pe(t));
              }),
                r.then(e, e));
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              vh(r)
                ? ((At = 0), (Me = null), rm(e))
                : ((At = 0), (Me = null), ei(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (ft.tag) {
                case 26:
                  f = ft.memoizedState;
                case 5:
                case 27:
                  var y = ft;
                  if (f ? Jm(f) : y.stateNode.complete) {
                    ((At = 0), (Me = null));
                    var T = y.sibling;
                    if (T !== null) ft = T;
                    else {
                      var C = y.return;
                      C !== null ? ((ft = C), Ms(C)) : (ft = null);
                    }
                    break e;
                  }
              }
              ((At = 0), (Me = null), ei(t, e, r, 5));
              break;
            case 6:
              ((At = 0), (Me = null), ei(t, e, r, 6));
              break;
            case 8:
              (sr(), (_t = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        t1();
        break;
      } catch (R) {
        im(t, R);
      }
    while (!0);
    return (
      (un = oa = null),
      (O.H = i),
      (O.A = s),
      (St = n),
      ft !== null ? 0 : ((wt = null), (dt = 0), kl(), _t)
    );
  }
  function t1() {
    for (; ft !== null && !A0(); ) um(ft);
  }
  function um(t) {
    var e = Od(t.alternate, t, vn);
    ((t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (ft = e));
  }
  function rm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Dd(n, e, e.pendingProps, e.type, void 0, dt);
        break;
      case 11:
        e = Dd(n, e, e.pendingProps, e.type.render, e.ref, dt);
        break;
      case 5:
        Tu(e);
      default:
        (Vd(n, e), (e = ft = oh(e, vn)), (e = Od(n, e, vn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (ft = e));
  }
  function ei(t, e, n, i) {
    ((un = oa = null), Tu(e), (ka = null), (Bi = 0));
    var s = e.return;
    try {
      if (Gv(t, s, e, n, dt)) {
        ((_t = 1), hs(t, Oe(n, t.current)), (ft = null));
        return;
      }
    } catch (r) {
      if (s !== null) throw ((ft = s), r);
      ((_t = 1), hs(t, Oe(n, t.current)), (ft = null));
      return;
    }
    e.flags & 32768
      ? (gt || i === 1
          ? (t = !0)
          : Pa || (dt & 536870912) !== 0
            ? (t = !1)
            : ((Vn = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = Ae.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        cm(e, t))
      : Ms(e);
  }
  function Ms(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cm(e, Vn);
        return;
      }
      t = e.return;
      var n = Qv(e.alternate, e, vn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    _t === 0 && (_t = 5);
  }
  function cm(t, e) {
    do {
      var n = Zv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (ft = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    ((_t = 6), (ft = null));
  }
  function fm(t, e, n, i, s, r, f, y, T) {
    t.cancelPendingCommit = null;
    do Ds();
    while (Jt !== 0);
    if ((St & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= Fo),
        R0(t, n, r, f, y, T),
        t === wt && ((ft = wt = null), (dt = 0)),
        (Ia = e),
        (Bn = t),
        (bn = n),
        (ar = r),
        (ir = s),
        (tm = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            i1(wl, function () {
              return (ym(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = O.T), (O.T = null), (s = k.p), (k.p = 2), (f = St), (St |= 4));
        try {
          Kv(t, e, n);
        } finally {
          ((St = f), (k.p = s), (O.T = i));
        }
      }
      ((Jt = 1), hm(), dm(), mm());
    }
  }
  function hm() {
    if (Jt === 1) {
      Jt = 0;
      var t = Bn,
        e = Ia,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = k.p;
        k.p = 2;
        var s = St;
        St |= 4;
        try {
          Zd(e, t);
          var r = br,
            f = $f(t.containerInfo),
            y = r.focusedElem,
            T = r.selectionRange;
          if (
            f !== y &&
            y &&
            y.ownerDocument &&
            Pf(y.ownerDocument.documentElement, y)
          ) {
            if (T !== null && ko(y)) {
              var C = T.start,
                R = T.end;
              if ((R === void 0 && (R = C), "selectionStart" in y))
                ((y.selectionStart = C),
                  (y.selectionEnd = Math.min(R, y.value.length)));
              else {
                var _ = y.ownerDocument || document,
                  j = (_ && _.defaultView) || window;
                if (j.getSelection) {
                  var N = j.getSelection(),
                    K = y.textContent.length,
                    nt = Math.min(T.start, K),
                    Ct = T.end === void 0 ? nt : Math.min(T.end, K);
                  !N.extend && nt > Ct && ((f = Ct), (Ct = nt), (nt = f));
                  var M = Wf(y, nt),
                    A = Wf(y, Ct);
                  if (
                    M &&
                    A &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== M.node ||
                      N.anchorOffset !== M.offset ||
                      N.focusNode !== A.node ||
                      N.focusOffset !== A.offset)
                  ) {
                    var D = _.createRange();
                    (D.setStart(M.node, M.offset),
                      N.removeAllRanges(),
                      nt > Ct
                        ? (N.addRange(D), N.extend(A.node, A.offset))
                        : (D.setEnd(A.node, A.offset), N.addRange(D)));
                  }
                }
              }
            }
            for (_ = [], N = y; (N = N.parentNode); )
              N.nodeType === 1 &&
                _.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < _.length;
              y++
            ) {
              var V = _[y];
              ((V.element.scrollLeft = V.left), (V.element.scrollTop = V.top));
            }
          }
          ((Ls = !!vr), (br = vr = null));
        } finally {
          ((St = s), (k.p = i), (O.T = n));
        }
      }
      ((t.current = e), (Jt = 2));
    }
  }
  function dm() {
    if (Jt === 2) {
      Jt = 0;
      var t = Bn,
        e = Ia,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = k.p;
        k.p = 2;
        var s = St;
        St |= 4;
        try {
          Yd(t, e.alternate, e);
        } finally {
          ((St = s), (k.p = i), (O.T = n));
        }
      }
      Jt = 3;
    }
  }
  function mm() {
    if (Jt === 4 || Jt === 3) {
      ((Jt = 0), E0());
      var t = Bn,
        e = Ia,
        n = bn,
        i = tm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (Ia = Bn = null), pm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Un = null),
        Mo(n),
        (e = e.stateNode),
        be && typeof be.onCommitFiberRoot == "function")
      )
        try {
          be.onCommitFiberRoot(bi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((e = O.T), (s = k.p), (k.p = 2), (O.T = null));
        try {
          for (var r = t.onRecoverableError, f = 0; f < i.length; f++) {
            var y = i[f];
            r(y.value, { componentStack: y.stack });
          }
        } finally {
          ((O.T = e), (k.p = s));
        }
      }
      ((bn & 3) !== 0 && Ds(),
        Pe(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === lr
            ? tl++
            : ((tl = 0), (lr = t))
          : (tl = 0),
        el(0));
    }
  }
  function pm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), _i(e)));
  }
  function Ds() {
    return (hm(), dm(), mm(), ym());
  }
  function ym() {
    if (Jt !== 5) return !1;
    var t = Bn,
      e = ar;
    ar = 0;
    var n = Mo(bn),
      i = O.T,
      s = k.p;
    try {
      ((k.p = 32 > n ? 32 : n), (O.T = null), (n = ir), (ir = null));
      var r = Bn,
        f = bn;
      if (((Jt = 0), (Ia = Bn = null), (bn = 0), (St & 6) !== 0))
        throw Error(u(331));
      var y = St;
      if (
        ((St |= 4),
        Pd(r.current),
        Jd(r, r.current, f, n),
        (St = y),
        el(0, !1),
        be && typeof be.onPostCommitFiberRoot == "function")
      )
        try {
          be.onPostCommitFiberRoot(bi, r);
        } catch {}
      return !0;
    } finally {
      ((k.p = s), (O.T = i), pm(t, e));
    }
  }
  function gm(t, e, n) {
    ((e = Oe(n, e)),
      (e = Bu(t.stateNode, e, 2)),
      (t = Nn(t, e, 2)),
      t !== null && (Si(t, 2), Pe(t)));
  }
  function Et(t, e, n) {
    if (t.tag === 3) gm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          gm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Un === null || !Un.has(i)))
          ) {
            ((t = Oe(n, t)),
              (n = vd(2)),
              (i = Nn(e, n, 2)),
              i !== null && (bd(n, i, e, t), Si(i, 2), Pe(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function ur(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Wv();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(n) ||
      ((tr = !0), s.add(n), (t = e1.bind(null, t, e, n)), e.then(t, t));
  }
  function e1(t, e, n) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      wt === t &&
        (dt & n) === n &&
        (_t === 4 || (_t === 3 && (dt & 62914560) === dt && 300 > ve() - xs)
          ? (St & 2) === 0 && ti(t, 0)
          : (er |= n),
        $a === dt && ($a = 0)),
      Pe(t));
  }
  function vm(t, e) {
    (e === 0 && (e = hf()), (t = ia(t, e)), t !== null && (Si(t, e), Pe(t)));
  }
  function n1(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), vm(t, n));
  }
  function a1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (i !== null && i.delete(e), vm(t, n));
  }
  function i1(t, e) {
    return So(t, e);
  }
  var Cs = null,
    ni = null,
    rr = !1,
    ws = !1,
    cr = !1,
    Hn = 0;
  function Pe(t) {
    (t !== ni &&
      t.next === null &&
      (ni === null ? (Cs = ni = t) : (ni = ni.next = t)),
      (ws = !0),
      rr || ((rr = !0), s1()));
  }
  function el(t, e) {
    if (!cr && ws) {
      cr = !0;
      do
        for (var n = !1, i = Cs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = i.suspendedLanes,
                y = i.pingedLanes;
              ((r = (1 << (31 - xe(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~y)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), Tm(i, r));
          } else
            ((r = dt),
              (r = Ol(
                i,
                i === wt ? r : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || xi(i, r) || ((n = !0), Tm(i, r)));
          i = i.next;
        }
      while (n);
      cr = !1;
    }
  }
  function l1() {
    bm();
  }
  function bm() {
    ws = rr = !1;
    var t = 0;
    Hn !== 0 && y1() && (t = Hn);
    for (var e = ve(), n = null, i = Cs; i !== null; ) {
      var s = i.next,
        r = xm(i, e);
      (r === 0
        ? ((i.next = null),
          n === null ? (Cs = s) : (n.next = s),
          s === null && (ni = n))
        : ((n = i), (t !== 0 || (r & 3) !== 0) && (ws = !0)),
        (i = s));
    }
    ((Jt !== 0 && Jt !== 5) || el(t), Hn !== 0 && (Hn = 0));
  }
  function xm(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var f = 31 - xe(r),
        y = 1 << f,
        T = s[f];
      (T === -1
        ? ((y & n) === 0 || (y & i) !== 0) && (s[f] = O0(y, e))
        : T <= e && (t.expiredLanes |= y),
        (r &= ~y));
    }
    if (
      ((e = wt),
      (n = dt),
      (n = Ol(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (At === 2 || At === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && To(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || xi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && To(i), Mo(n))) {
        case 2:
        case 8:
          n = cf;
          break;
        case 32:
          n = wl;
          break;
        case 268435456:
          n = ff;
          break;
        default:
          n = wl;
      }
      return (
        (i = Sm.bind(null, t)),
        (n = So(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && To(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Sm(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Ds() && t.callbackNode !== n) return null;
    var i = dt;
    return (
      (i = Ol(
        t,
        t === wt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (nm(t, i, e),
          xm(t, ve()),
          t.callbackNode != null && t.callbackNode === n
            ? Sm.bind(null, t)
            : null)
    );
  }
  function Tm(t, e) {
    if (Ds()) return null;
    nm(t, e, !0);
  }
  function s1() {
    v1(function () {
      (St & 6) !== 0 ? So(rf, l1) : bm();
    });
  }
  function fr() {
    if (Hn === 0) {
      var t = Ya;
      (t === 0 && ((t = jl), (jl <<= 1), (jl & 261888) === 0 && (jl = 256)),
        (Hn = t));
    }
    return Hn;
  }
  function Am(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ul("" + t);
  }
  function Em(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function o1(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = Am((s[fe] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[fe] || null)
          ? Am(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var y = new ql("action", "action", null, i, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Hn !== 0) {
                  var T = f ? Em(s, f) : new FormData(s);
                  zu(
                    n,
                    { pending: !0, data: T, method: s.method, action: r },
                    null,
                    T,
                  );
                }
              } else
                typeof r == "function" &&
                  (y.preventDefault(),
                  (T = f ? Em(s, f) : new FormData(s)),
                  zu(
                    n,
                    { pending: !0, data: T, method: s.method, action: r },
                    r,
                    T,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var hr = 0; hr < Jo.length; hr++) {
    var dr = Jo[hr],
      u1 = dr.toLowerCase(),
      r1 = dr[0].toUpperCase() + dr.slice(1);
    Ye(u1, "on" + r1);
  }
  (Ye(eh, "onAnimationEnd"),
    Ye(nh, "onAnimationIteration"),
    Ye(ah, "onAnimationStart"),
    Ye("dblclick", "onDoubleClick"),
    Ye("focusin", "onFocus"),
    Ye("focusout", "onBlur"),
    Ye(Mv, "onTransitionRun"),
    Ye(Dv, "onTransitionStart"),
    Ye(Cv, "onTransitionCancel"),
    Ye(ih, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    ta(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ta(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ta(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ta(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ta(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var nl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    c1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(nl),
    );
  function Mm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var y = i[f],
              T = y.instance,
              C = y.currentTarget;
            if (((y = y.listener), T !== r && s.isPropagationStopped()))
              break t;
            ((r = y), (s.currentTarget = C));
            try {
              r(s);
            } catch (R) {
              Xl(R);
            }
            ((s.currentTarget = null), (r = T));
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((y = i[f]),
              (T = y.instance),
              (C = y.currentTarget),
              (y = y.listener),
              T !== r && s.isPropagationStopped())
            )
              break t;
            ((r = y), (s.currentTarget = C));
            try {
              r(s);
            } catch (R) {
              Xl(R);
            }
            ((s.currentTarget = null), (r = T));
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[Do];
    n === void 0 && (n = e[Do] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Dm(e, t, 2, !1), n.add(i));
  }
  function mr(t, e, n) {
    var i = 0;
    (e && (i |= 4), Dm(n, t, i, e));
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function pr(t) {
    if (!t[js]) {
      ((t[js] = !0),
        bf.forEach(function (n) {
          n !== "selectionchange" && (c1.has(n) || mr(n, !1, t), mr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[js] || ((e[js] = !0), mr("selectionchange", !1, e));
    }
  }
  function Dm(t, e, n, i) {
    switch (ep(e)) {
      case 2:
        var s = L1;
        break;
      case 8:
        s = H1;
        break;
      default:
        s = Nr;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !_o ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function yr(t, e, n, i, s) {
    var r = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var y = i.stateNode.containerInfo;
          if (y === s) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (((f = Ea(y)), f === null)) return;
            if (((T = f.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              i = r = f;
              continue t;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    zf(function () {
      var C = r,
        R = Ro(n),
        _ = [];
      t: {
        var j = lh.get(t);
        if (j !== void 0) {
          var N = ql,
            K = t;
          switch (t) {
            case "keypress":
              if (Ll(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = av;
              break;
            case "focusin":
              ((K = "focus"), (N = Ho));
              break;
            case "focusout":
              ((K = "blur"), (N = Ho));
              break;
            case "beforeblur":
            case "afterblur":
              N = Ho;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Q0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = sv;
              break;
            case eh:
            case nh:
            case ah:
              N = J0;
              break;
            case ih:
              N = uv;
              break;
            case "scroll":
            case "scrollend":
              N = X0;
              break;
            case "wheel":
              N = cv;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = W0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Uf;
              break;
            case "toggle":
            case "beforetoggle":
              N = hv;
          }
          var nt = (e & 4) !== 0,
            Ct = !nt && (t === "scroll" || t === "scrollend"),
            M = nt ? (j !== null ? j + "Capture" : null) : j;
          nt = [];
          for (var A = C, D; A !== null; ) {
            var V = A;
            if (
              ((D = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                D === null ||
                M === null ||
                ((V = Ei(A, M)), V != null && nt.push(al(A, V, D))),
              Ct)
            )
              break;
            A = A.return;
          }
          0 < nt.length &&
            ((j = new N(j, K, null, n, R)),
            _.push({ event: j, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((j = t === "mouseover" || t === "pointerover"),
            (N = t === "mouseout" || t === "pointerout"),
            j &&
              n !== Oo &&
              (K = n.relatedTarget || n.fromElement) &&
              (Ea(K) || K[Aa]))
          )
            break t;
          if (
            (N || j) &&
            ((j =
              R.window === R
                ? R
                : (j = R.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            N
              ? ((K = n.relatedTarget || n.toElement),
                (N = C),
                (K = K ? Ea(K) : null),
                K !== null &&
                  ((Ct = d(K)),
                  (nt = K.tag),
                  K !== Ct || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (K = null))
              : ((N = null), (K = C)),
            N !== K)
          ) {
            if (
              ((nt = Vf),
              (V = "onMouseLeave"),
              (M = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((nt = Uf),
                (V = "onPointerLeave"),
                (M = "onPointerEnter"),
                (A = "pointer")),
              (Ct = N == null ? j : Ai(N)),
              (D = K == null ? j : Ai(K)),
              (j = new nt(V, A + "leave", N, n, R)),
              (j.target = Ct),
              (j.relatedTarget = D),
              (V = null),
              Ea(R) === C &&
                ((nt = new nt(M, A + "enter", K, n, R)),
                (nt.target = D),
                (nt.relatedTarget = Ct),
                (V = nt)),
              (Ct = V),
              N && K)
            )
              e: {
                for (nt = f1, M = N, A = K, D = 0, V = M; V; V = nt(V)) D++;
                V = 0;
                for (var et = A; et; et = nt(et)) V++;
                for (; 0 < D - V; ) ((M = nt(M)), D--);
                for (; 0 < V - D; ) ((A = nt(A)), V--);
                for (; D--; ) {
                  if (M === A || (A !== null && M === A.alternate)) {
                    nt = M;
                    break e;
                  }
                  ((M = nt(M)), (A = nt(A)));
                }
                nt = null;
              }
            else nt = null;
            (N !== null && Cm(_, j, N, nt, !1),
              K !== null && Ct !== null && Cm(_, Ct, K, nt, !0));
          }
        }
        t: {
          if (
            ((j = C ? Ai(C) : window),
            (N = j.nodeName && j.nodeName.toLowerCase()),
            N === "select" || (N === "input" && j.type === "file"))
          )
            var bt = kf;
          else if (Gf(j))
            if (Qf) bt = Tv;
            else {
              bt = xv;
              var P = bv;
            }
          else
            ((N = j.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? C && zo(C.elementType) && (bt = kf)
                : (bt = Sv));
          if (bt && (bt = bt(t, C))) {
            Xf(_, bt, n, R);
            break t;
          }
          (P && P(t, j, C),
            t === "focusout" &&
              C &&
              j.type === "number" &&
              C.memoizedProps.value != null &&
              No(j, "number", j.value));
        }
        switch (((P = C ? Ai(C) : window), t)) {
          case "focusin":
            (Gf(P) || P.contentEditable === "true") &&
              ((Ra = P), (Qo = C), (Oi = null));
            break;
          case "focusout":
            Oi = Qo = Ra = null;
            break;
          case "mousedown":
            Zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Zo = !1), If(_, n, R));
            break;
          case "selectionchange":
            if (Ev) break;
          case "keydown":
          case "keyup":
            If(_, n, R);
        }
        var rt;
        if (Yo)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Oa
            ? qf(t, n) && (mt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (mt = "onCompositionStart");
        (mt &&
          (Bf &&
            n.locale !== "ko" &&
            (Oa || mt !== "onCompositionStart"
              ? mt === "onCompositionEnd" && Oa && (rt = Of())
              : ((An = R),
                (Uo = "value" in An ? An.value : An.textContent),
                (Oa = !0))),
          (P = Ns(C, mt)),
          0 < P.length &&
            ((mt = new _f(mt, t, null, n, R)),
            _.push({ event: mt, listeners: P }),
            rt
              ? (mt.data = rt)
              : ((rt = Yf(n)), rt !== null && (mt.data = rt)))),
          (rt = mv ? pv(t, n) : yv(t, n)) &&
            ((mt = Ns(C, "onBeforeInput")),
            0 < mt.length &&
              ((P = new _f("onBeforeInput", "beforeinput", null, n, R)),
              _.push({ event: P, listeners: mt }),
              (P.data = rt))),
          o1(_, t, C, n, R));
      }
      Mm(_, e);
    });
  }
  function al(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ns(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = Ei(t, n)),
          s != null && i.unshift(al(t, s, r)),
          (s = Ei(t, e)),
          s != null && i.push(al(t, s, r))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function f1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Cm(t, e, n, i, s) {
    for (var r = e._reactName, f = []; n !== null && n !== i; ) {
      var y = n,
        T = y.alternate,
        C = y.stateNode;
      if (((y = y.tag), T !== null && T === i)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        C === null ||
        ((T = C),
        s
          ? ((C = Ei(n, r)), C != null && f.unshift(al(n, C, T)))
          : s || ((C = Ei(n, r)), C != null && f.push(al(n, C, T)))),
        (n = n.return));
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var h1 = /\r\n?/g,
    d1 = /\u0000|\uFFFD/g;
  function wm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        h1,
        `
`,
      )
      .replace(d1, "");
  }
  function jm(t, e) {
    return ((e = wm(e)), wm(t) === e);
  }
  function Dt(t, e, n, i, s, r) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || ja(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            ja(t, "" + i);
        break;
      case "className":
        Vl(t, "class", i);
        break;
      case "tabIndex":
        Vl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vl(t, n, i);
        break;
      case "style":
        jf(t, i, r);
        break;
      case "data":
        if (e !== "object") {
          Vl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((i = Ul("" + i)), t.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                Dt(t, e, "formEncType", s.formEncType, s, null),
                Dt(t, e, "formMethod", s.formMethod, s, null),
                Dt(t, e, "formTarget", s.formTarget, s, null))
              : (Dt(t, e, "encType", s.encType, s, null),
                Dt(t, e, "method", s.method, s, null),
                Dt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = Ul("" + i)), t.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (t.onclick = an);
        break;
      case "onScroll":
        i != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Ul("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? t.setAttribute(n, i)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        (ht("beforetoggle", t), ht("toggle", t), Rl(t, "popover", i));
        break;
      case "xlinkActuate":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        nn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        nn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        nn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Rl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Y0.get(n) || n), Rl(t, n, i));
    }
  }
  function gr(t, e, n, i, s, r) {
    switch (n) {
      case "style":
        jf(t, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(u(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? ja(t, i)
          : (typeof i == "number" || typeof i == "bigint") && ja(t, "" + i);
        break;
      case "onScroll":
        i != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ht("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = an);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[fe] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof i == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s));
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
                ? t.setAttribute(n, "")
                : Rl(t, n, i);
          }
    }
  }
  function ae(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ht("error", t), ht("load", t));
        var i = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Dt(t, e, r, f, n, null);
              }
          }
        (s && Dt(t, e, "srcSet", n.srcSet, n, null),
          i && Dt(t, e, "src", n.src, n, null));
        return;
      case "input":
        ht("invalid", t);
        var y = (r = f = s = null),
          T = null,
          C = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var R = n[i];
            if (R != null)
              switch (i) {
                case "name":
                  s = R;
                  break;
                case "type":
                  f = R;
                  break;
                case "checked":
                  T = R;
                  break;
                case "defaultChecked":
                  C = R;
                  break;
                case "value":
                  r = R;
                  break;
                case "defaultValue":
                  y = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null) throw Error(u(137, e));
                  break;
                default:
                  Dt(t, e, i, R, n, null);
              }
          }
        Mf(t, r, y, T, C, f, s, !1);
        return;
      case "select":
        (ht("invalid", t), (i = f = r = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "multiple":
                i = y;
              default:
                Dt(t, e, s, y, n, null);
            }
        ((e = r),
          (n = f),
          (t.multiple = !!i),
          e != null ? wa(t, !!i, e, !1) : n != null && wa(t, !!i, n, !0));
        return;
      case "textarea":
        (ht("invalid", t), (r = s = i = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((y = n[f]), y != null))
            switch (f) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(u(91));
                break;
              default:
                Dt(t, e, f, y, n, null);
            }
        Cf(t, i, s, r);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((i = n[T]), i != null))
            switch (T) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Dt(t, e, T, i, n, null);
            }
        return;
      case "dialog":
        (ht("beforetoggle", t),
          ht("toggle", t),
          ht("cancel", t),
          ht("close", t));
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < nl.length; i++) ht(nl[i], t);
        break;
      case "image":
        (ht("error", t), ht("load", t));
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ht("error", t), ht("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && ((i = n[C]), i != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Dt(t, e, C, i, n, null);
            }
        return;
      default:
        if (zo(e)) {
          for (R in n)
            n.hasOwnProperty(R) &&
              ((i = n[R]), i !== void 0 && gr(t, e, R, i, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((i = n[y]), i != null && Dt(t, e, y, i, n, null));
  }
  function m1(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          r = null,
          f = null,
          y = null,
          T = null,
          C = null,
          R = null;
        for (N in n) {
          var _ = n[N];
          if (n.hasOwnProperty(N) && _ != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = _;
              default:
                i.hasOwnProperty(N) || Dt(t, e, N, null, i, _);
            }
        }
        for (var j in i) {
          var N = i[j];
          if (((_ = n[j]), i.hasOwnProperty(j) && (N != null || _ != null)))
            switch (j) {
              case "type":
                r = N;
                break;
              case "name":
                s = N;
                break;
              case "checked":
                C = N;
                break;
              case "defaultChecked":
                R = N;
                break;
              case "value":
                f = N;
                break;
              case "defaultValue":
                y = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(u(137, e));
                break;
              default:
                N !== _ && Dt(t, e, j, N, i, _);
            }
        }
        jo(t, f, y, T, C, R, r, s);
        return;
      case "select":
        N = f = y = j = null;
        for (r in n)
          if (((T = n[r]), n.hasOwnProperty(r) && T != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                N = T;
              default:
                i.hasOwnProperty(r) || Dt(t, e, r, null, i, T);
            }
        for (s in i)
          if (
            ((r = i[s]),
            (T = n[s]),
            i.hasOwnProperty(s) && (r != null || T != null))
          )
            switch (s) {
              case "value":
                j = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== T && Dt(t, e, s, r, i, T);
            }
        ((e = y),
          (n = f),
          (i = N),
          j != null
            ? wa(t, !!n, j, !1)
            : !!i != !!n &&
              (e != null ? wa(t, !!n, e, !0) : wa(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        N = j = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, y, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (r = n[f]),
            i.hasOwnProperty(f) && (s != null || r != null))
          )
            switch (f) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== r && Dt(t, e, f, s, i, r);
            }
        Df(t, j, N);
        return;
      case "option":
        for (var K in n)
          if (
            ((j = n[K]),
            n.hasOwnProperty(K) && j != null && !i.hasOwnProperty(K))
          )
            switch (K) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Dt(t, e, K, null, i, j);
            }
        for (T in i)
          if (
            ((j = i[T]),
            (N = n[T]),
            i.hasOwnProperty(T) && j !== N && (j != null || N != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                Dt(t, e, T, j, i, N);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in n)
          ((j = n[nt]),
            n.hasOwnProperty(nt) &&
              j != null &&
              !i.hasOwnProperty(nt) &&
              Dt(t, e, nt, null, i, j));
        for (C in i)
          if (
            ((j = i[C]),
            (N = n[C]),
            i.hasOwnProperty(C) && j !== N && (j != null || N != null))
          )
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(u(137, e));
                break;
              default:
                Dt(t, e, C, j, i, N);
            }
        return;
      default:
        if (zo(e)) {
          for (var Ct in n)
            ((j = n[Ct]),
              n.hasOwnProperty(Ct) &&
                j !== void 0 &&
                !i.hasOwnProperty(Ct) &&
                gr(t, e, Ct, void 0, i, j));
          for (R in i)
            ((j = i[R]),
              (N = n[R]),
              !i.hasOwnProperty(R) ||
                j === N ||
                (j === void 0 && N === void 0) ||
                gr(t, e, R, j, i, N));
          return;
        }
    }
    for (var M in n)
      ((j = n[M]),
        n.hasOwnProperty(M) &&
          j != null &&
          !i.hasOwnProperty(M) &&
          Dt(t, e, M, null, i, j));
    for (_ in i)
      ((j = i[_]),
        (N = n[_]),
        !i.hasOwnProperty(_) ||
          j === N ||
          (j == null && N == null) ||
          Dt(t, e, _, j, i, N));
  }
  function Nm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function p1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var s = n[i],
          r = s.transferSize,
          f = s.initiatorType,
          y = s.duration;
        if (r && y && Nm(f)) {
          for (f = 0, y = s.responseEnd, i += 1; i < n.length; i++) {
            var T = n[i],
              C = T.startTime;
            if (C > y) break;
            var R = T.transferSize,
              _ = T.initiatorType;
            R &&
              Nm(_) &&
              ((T = T.responseEnd), (f += R * (T < y ? 1 : (y - C) / (T - C))));
          }
          if ((--i, (e += (8 * (r + f)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var vr = null,
    br = null;
  function zs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function zm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Om(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function xr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Sr = null;
  function y1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Sr
        ? !1
        : ((Sr = t), !0)
      : ((Sr = null), !1);
  }
  var Rm = typeof setTimeout == "function" ? setTimeout : void 0,
    g1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vm = typeof Promise == "function" ? Promise : void 0,
    v1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vm < "u"
          ? function (t) {
              return Vm.resolve(null).then(t).catch(b1);
            }
          : Rm;
  function b1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function qn(t) {
    return t === "head";
  }
  function _m(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            (t.removeChild(s), si(e));
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") il(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), il(n));
          for (var r = n.firstChild; r; ) {
            var f = r.nextSibling,
              y = r.nodeName;
            (r[Ti] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = f));
          }
        } else n === "body" && il(t.ownerDocument.body);
      n = s;
    } while (n);
    si(e);
  }
  function Um(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = i;
    } while (n);
  }
  function Tr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Tr(n), Co(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function x1(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[Ti])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Be(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function S1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Be(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Bm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Be(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ar(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Er(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function T1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var i = function () {
        (e(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function Be(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Mr = null;
  function Lm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Be(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Hm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function qm(t, e, n) {
    switch (((e = zs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function il(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Co(t);
  }
  var Le = new Map(),
    Ym = new Set();
  function Os(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var xn = k.d;
  k.d = { f: A1, r: E1, D: M1, C: D1, L: C1, m: w1, X: N1, S: j1, M: z1 };
  function A1() {
    var t = xn.f(),
      e = As();
    return t || e;
  }
  function E1(t) {
    var e = Ma(t);
    e !== null && e.tag === 5 && e.type === "form" ? id(e) : xn.r(t);
  }
  var ai = typeof document > "u" ? null : document;
  function Gm(t, e, n) {
    var i = ai;
    if (i && typeof e == "string" && e) {
      var s = Ne(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Ym.has(s) ||
          (Ym.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            ae(e, "link", t),
            Wt(e),
            i.head.appendChild(e))));
    }
  }
  function M1(t) {
    (xn.D(t), Gm("dns-prefetch", t, null));
  }
  function D1(t, e) {
    (xn.C(t, e), Gm("preconnect", t, e));
  }
  function C1(t, e, n) {
    xn.L(t, e, n);
    var i = ai;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ne(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Ne(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Ne(n.imageSizes) + '"]'))
        : (s += '[href="' + Ne(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = ii(t);
          break;
        case "script":
          r = li(t);
      }
      Le.has(r) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Le.set(r, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(ll(r))) ||
          (e === "script" && i.querySelector(sl(r))) ||
          ((e = i.createElement("link")),
          ae(e, "link", t),
          Wt(e),
          i.head.appendChild(e)));
    }
  }
  function w1(t, e) {
    xn.m(t, e);
    var n = ai;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ne(i) + '"][href="' + Ne(t) + '"]',
        r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = li(t);
      }
      if (
        !Le.has(r) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        Le.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(sl(r))) return;
        }
        ((i = n.createElement("link")),
          ae(i, "link", t),
          Wt(i),
          n.head.appendChild(i));
      }
    }
  }
  function j1(t, e, n) {
    xn.S(t, e, n);
    var i = ai;
    if (i && t) {
      var s = Da(i).hoistableStyles,
        r = ii(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var y = { loading: 0, preload: null };
        if ((f = i.querySelector(ll(r)))) y.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Le.get(r)) && Dr(t, n));
          var T = (f = i.createElement("link"));
          (Wt(T),
            ae(T, "link", t),
            (T._p = new Promise(function (C, R) {
              ((T.onload = C), (T.onerror = R));
            })),
            T.addEventListener("load", function () {
              y.loading |= 1;
            }),
            T.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Rs(f, e, i));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: y }),
          s.set(r, f));
      }
    }
  }
  function N1(t, e) {
    xn.X(t, e);
    var n = ai;
    if (n && t) {
      var i = Da(n).hoistableScripts,
        s = li(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(sl(s))),
        r ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Le.get(s)) && Cr(t, e),
          (r = n.createElement("script")),
          Wt(r),
          ae(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function z1(t, e) {
    xn.M(t, e);
    var n = ai;
    if (n && t) {
      var i = Da(n).hoistableScripts,
        s = li(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(sl(s))),
        r ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Le.get(s)) && Cr(t, e),
          (r = n.createElement("script")),
          Wt(r),
          ae(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function Xm(t, e, n, i) {
    var s = (s = ct.current) ? Os(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ii(n.href)),
            (n = Da(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ii(n.href);
          var r = Da(s).hoistableStyles,
            f = r.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, f),
              (r = s.querySelector(ll(t))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              Le.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Le.set(t, n),
                r || O1(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(u(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = li(n)),
              (n = Da(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function ii(t) {
    return 'href="' + Ne(t) + '"';
  }
  function ll(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function km(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function O1(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        ae(e, "link", n),
        Wt(e),
        t.head.appendChild(e));
  }
  function li(t) {
    return '[src="' + Ne(t) + '"]';
  }
  function sl(t) {
    return "script[async]" + t;
  }
  function Qm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Ne(n.href) + '"]');
          if (i) return ((e.instance = i), Wt(i), i);
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Wt(i),
            ae(i, "style", s),
            Rs(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = ii(n.href);
          var r = t.querySelector(ll(s));
          if (r) return ((e.state.loading |= 4), (e.instance = r), Wt(r), r);
          ((i = km(n)),
            (s = Le.get(s)) && Dr(i, s),
            (r = (t.ownerDocument || t).createElement("link")),
            Wt(r));
          var f = r;
          return (
            (f._p = new Promise(function (y, T) {
              ((f.onload = y), (f.onerror = T));
            })),
            ae(r, "link", i),
            (e.state.loading |= 4),
            Rs(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = li(n.src)),
            (s = t.querySelector(sl(r)))
              ? ((e.instance = s), Wt(s), s)
              : ((i = n),
                (s = Le.get(r)) && ((i = b({}, n)), Cr(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Wt(s),
                ae(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Rs(i, n.precedence, t));
    return e.instance;
  }
  function Rs(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = i.length ? i[i.length - 1] : null,
        r = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var y = i[f];
      if (y.dataset.precedence === e) r = y;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Dr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Cr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Vs = null;
  function Zm(t, e, n) {
    if (Vs === null) {
      var i = new Map(),
        s = (Vs = new Map());
      s.set(n, i);
    } else ((s = Vs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var r = n[s];
      if (
        !(
          r[Ti] ||
          r[It] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var y = i.get(f);
        y ? y.push(r) : i.set(f, [r]);
      }
    }
    return i;
  }
  function Km(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function R1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Jm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function V1(t, e, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = ii(i.href),
          r = e.querySelector(ll(s));
        if (r) {
          ((e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = _s.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            Wt(r));
          return;
        }
        ((r = e.ownerDocument || e),
          (i = km(i)),
          (s = Le.get(s)) && Dr(i, s),
          (r = r.createElement("link")),
          Wt(r));
        var f = r;
        ((f._p = new Promise(function (y, T) {
          ((f.onload = y), (f.onerror = T));
        })),
          ae(r, "link", i),
          (n.instance = r));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = _s.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var wr = 0;
  function _1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Bs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Bs(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4 + e);
            0 < t.imgBytes && wr === 0 && (wr = 62500 * p1());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Bs(t, t.stylesheets), t.unsuspend))
                ) {
                  var r = t.unsuspend;
                  ((t.unsuspend = null), r());
                }
              },
              (t.imgBytes > wr ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(i), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function _s() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Bs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Us = null;
  function Bs(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Us = new Map()),
        e.forEach(U1, t),
        (Us = null),
        _s.call(t)));
  }
  function U1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Us.get(t);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Us.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < s.length;
          r++
        ) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      ((s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || i),
        r === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = _s.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ol = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function B1(t, e, n, i, s, r, f, y, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ao(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ao(0)),
      (this.hiddenUpdates = Ao(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function Fm(t, e, n, i, s, r, f, y, T, C, R, _) {
    return (
      (t = new B1(t, e, n, f, T, C, R, _, y)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = Te(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = ou()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: i, isDehydrated: n, cache: e }),
      fu(r),
      t
    );
  }
  function Wm(t) {
    return t ? ((t = Ua), t) : Ua;
  }
  function Pm(t, e, n, i, s, r) {
    ((s = Wm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = jn(e)),
      (i.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (i.callback = r),
      (n = Nn(t, i, e)),
      n !== null && (ge(n, t, e), Hi(n, t, e)));
  }
  function $m(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function jr(t, e) {
    ($m(t, e), (t = t.alternate) && $m(t, e));
  }
  function Im(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ia(t, 67108864);
      (e !== null && ge(e, t, 67108864), jr(t, 67108864));
    }
  }
  function tp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = Eo(e);
      var n = ia(t, e);
      (n !== null && ge(n, t, e), jr(t, e));
    }
  }
  var Ls = !0;
  function L1(t, e, n, i) {
    var s = O.T;
    O.T = null;
    var r = k.p;
    try {
      ((k.p = 2), Nr(t, e, n, i));
    } finally {
      ((k.p = r), (O.T = s));
    }
  }
  function H1(t, e, n, i) {
    var s = O.T;
    O.T = null;
    var r = k.p;
    try {
      ((k.p = 8), Nr(t, e, n, i));
    } finally {
      ((k.p = r), (O.T = s));
    }
  }
  function Nr(t, e, n, i) {
    if (Ls) {
      var s = zr(i);
      if (s === null) (yr(t, e, i, Hs, n), np(t, i));
      else if (Y1(s, t, e, n, i)) i.stopPropagation();
      else if ((np(t, i), e & 4 && -1 < q1.indexOf(t))) {
        for (; s !== null; ) {
          var r = Ma(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = In(r.pendingLanes);
                  if (f !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                      var T = 1 << (31 - xe(f));
                      ((y.entanglements[1] |= T), (f &= ~T));
                    }
                    (Pe(r), (St & 6) === 0 && ((Ss = ve() + 500), el(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((y = ia(r, 2)), y !== null && ge(y, r, 2), As(), jr(r, 2));
            }
          if (((r = zr(i)), r === null && yr(t, e, i, Hs, n), r === s)) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else yr(t, e, i, null, n);
    }
  }
  function zr(t) {
    return ((t = Ro(t)), Or(t));
  }
  var Hs = null;
  function Or(t) {
    if (((Hs = null), (t = Ea(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Hs = t), null);
  }
  function ep(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (M0()) {
          case rf:
            return 2;
          case cf:
            return 8;
          case wl:
          case D0:
            return 32;
          case ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rr = !1,
    Yn = null,
    Gn = null,
    Xn = null,
    ul = new Map(),
    rl = new Map(),
    kn = [],
    q1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function np(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Xn = null;
        break;
      case "pointerover":
      case "pointerout":
        ul.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        rl.delete(e.pointerId);
    }
  }
  function cl(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = Ma(e)), e !== null && Im(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Y1(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return ((Yn = cl(Yn, t, e, n, i, s)), !0);
      case "dragenter":
        return ((Gn = cl(Gn, t, e, n, i, s)), !0);
      case "mouseover":
        return ((Xn = cl(Xn, t, e, n, i, s)), !0);
      case "pointerover":
        var r = s.pointerId;
        return (ul.set(r, cl(ul.get(r) || null, t, e, n, i, s)), !0);
      case "gotpointercapture":
        return (
          (r = s.pointerId),
          rl.set(r, cl(rl.get(r) || null, t, e, n, i, s)),
          !0
        );
    }
    return !1;
  }
  function ap(t) {
    var e = Ea(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            ((t.blockedOn = e),
              gf(t.priority, function () {
                tp(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            ((t.blockedOn = e),
              gf(t.priority, function () {
                tp(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = zr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Oo = i), n.target.dispatchEvent(i), (Oo = null));
      } else return ((e = Ma(n)), e !== null && Im(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function ip(t, e, n) {
    qs(t) && n.delete(e);
  }
  function G1() {
    ((Rr = !1),
      Yn !== null && qs(Yn) && (Yn = null),
      Gn !== null && qs(Gn) && (Gn = null),
      Xn !== null && qs(Xn) && (Xn = null),
      ul.forEach(ip),
      rl.forEach(ip));
  }
  function Ys(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Rr ||
        ((Rr = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, G1)));
  }
  var Gs = null;
  function lp(t) {
    Gs !== t &&
      ((Gs = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Gs === t && (Gs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (Or(i || n) === null) continue;
            break;
          }
          var r = Ma(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            zu(r, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function si(t) {
    function e(T) {
      return Ys(T, t);
    }
    (Yn !== null && Ys(Yn, t),
      Gn !== null && Ys(Gn, t),
      Xn !== null && Ys(Xn, t),
      ul.forEach(e),
      rl.forEach(e));
    for (var n = 0; n < kn.length; n++) {
      var i = kn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
      (ap(n), n.blockedOn === null && kn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          r = n[i + 1],
          f = s[fe] || null;
        if (typeof r == "function") f || lp(n);
        else if (f) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[fe] || null))) y = f.formAction;
            else if (Or(s) !== null) continue;
          } else y = f.action;
          (typeof y == "function" ? (n[i + 1] = y) : (n.splice(i, 3), (i -= 3)),
            lp(n));
        }
      }
  }
  function sp() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), i || setTimeout(n, 20));
    }
    function n() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Vr(t) {
    this._internalRoot = t;
  }
  ((Xs.prototype.render = Vr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        i = Ce();
      Pm(n, i, t, e, null, null);
    }),
    (Xs.prototype.unmount = Vr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Pm(t.current, 2, null, t, null, null), As(), (e[Aa] = null));
        }
      }));
  function Xs(t) {
    this._internalRoot = t;
  }
  Xs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = yf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < kn.length && e !== 0 && e < kn[n].priority; n++);
      (kn.splice(n, 0, t), n === 0 && ap(t));
    }
  };
  var op = l.version;
  if (op !== "19.2.4") throw Error(u(527, op, "19.2.4"));
  k.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var X1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ks.isDisabled && ks.supportsFiber)
      try {
        ((bi = ks.inject(X1)), (be = ks));
      } catch {}
  }
  return (
    (hl.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        i = "",
        s = md,
        r = pd,
        f = yd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = Fm(t, 1, !1, null, null, n, i, null, s, r, f, sp)),
        (t[Aa] = e.current),
        pr(t),
        new Vr(e)
      );
    }),
    (hl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var i = !1,
        s = "",
        r = md,
        f = pd,
        y = yd,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = Fm(t, 1, !0, e, n ?? null, i, s, T, r, f, y, sp)),
        (e.context = Wm(null)),
        (n = e.current),
        (i = Ce()),
        (i = Eo(i)),
        (s = jn(i)),
        (s.callback = null),
        Nn(n, s, i),
        (n = i),
        (e.current.lanes = n),
        Si(e, n),
        Pe(e),
        (t[Aa] = e.current),
        pr(t),
        new Xs(e)
      );
    }),
    (hl.version = "19.2.4"),
    hl
  );
}
var gp;
function I1() {
  if (gp) return Br.exports;
  gp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Br.exports = $1()), Br.exports);
}
var tb = I1();
const wc = G.createContext({});
function jc(a) {
  const l = G.useRef(null);
  return (l.current === null && (l.current = a()), l.current);
}
const eb = typeof window < "u",
  _y = eb ? G.useLayoutEffect : G.useEffect,
  ho = G.createContext(null);
function Nc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function ao(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const tn = (a, l, o) => (o > l ? l : o < a ? a : o);
let zc = () => {};
const Fn = {},
  Uy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function By(a) {
  return typeof a == "object" && a !== null;
}
const Ly = (a) => /^0[^.\s]+$/u.test(a);
function Hy(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const qe = (a) => a,
  nb = (a, l) => (o) => l(a(o)),
  Al = (...a) => a.reduce(nb),
  bl = (a, l, o) => {
    const u = l - a;
    return u === 0 ? 1 : (o - a) / u;
  };
class Oc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return (Nc(this.subscriptions, l), () => ao(this.subscriptions, l));
  }
  notify(l, o, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, u);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, o, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const we = (a) => a * 1e3,
  He = (a) => a / 1e3;
function qy(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Yy = (a, l, o) =>
    (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a,
  ab = 1e-7,
  ib = 12;
function lb(a, l, o, u, c) {
  let d,
    h,
    m = 0;
  do ((h = l + (o - l) / 2), (d = Yy(h, u, c) - a), d > 0 ? (o = h) : (l = h));
  while (Math.abs(d) > ab && ++m < ib);
  return h;
}
function El(a, l, o, u) {
  if (a === l && o === u) return qe;
  const c = (d) => lb(d, 0, 1, a, o);
  return (d) => (d === 0 || d === 1 ? d : Yy(c(d), l, u));
}
const Gy = (a) => (l) => (l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2),
  Xy = (a) => (l) => 1 - a(1 - l),
  ky = El(0.33, 1.53, 0.69, 0.99),
  Rc = Xy(ky),
  Qy = Gy(Rc),
  Zy = (a) =>
    a >= 1
      ? 1
      : (a *= 2) < 1
        ? 0.5 * Rc(a)
        : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Vc = (a) => 1 - Math.sin(Math.acos(a)),
  Ky = Xy(Vc),
  Jy = Gy(Vc),
  sb = El(0.42, 0, 1, 1),
  ob = El(0, 0, 0.58, 1),
  Fy = El(0.42, 0, 0.58, 1),
  ub = (a) => Array.isArray(a) && typeof a[0] != "number",
  Wy = (a) => Array.isArray(a) && typeof a[0] == "number",
  rb = {
    linear: qe,
    easeIn: sb,
    easeInOut: Fy,
    easeOut: ob,
    circIn: Vc,
    circInOut: Jy,
    circOut: Ky,
    backIn: Rc,
    backInOut: Qy,
    backOut: ky,
    anticipate: Zy,
  },
  cb = (a) => typeof a == "string",
  vp = (a) => {
    if (Wy(a)) {
      zc(a.length === 4);
      const [l, o, u, c] = a;
      return El(l, o, u, c);
    } else if (cb(a)) return rb[a];
    return a;
  },
  Qs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function fb(a, l) {
  let o = new Set(),
    u = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    (h.has(v) && (p.schedule(v), a()), v(m));
  }
  const p = {
    schedule: (v, b = !1, S = !1) => {
      const z = S && c ? o : u;
      return (b && h.add(v), z.add(v), v);
    },
    cancel: (v) => {
      (u.delete(v), h.delete(v));
    },
    process: (v) => {
      if (((m = v), c)) {
        d = !0;
        return;
      }
      c = !0;
      const b = o;
      ((o = u),
        (u = b),
        o.forEach(g),
        o.clear(),
        (c = !1),
        d && ((d = !1), p.process(v)));
    },
  };
  return p;
}
const hb = 40;
function Py(a, l) {
  let o = !1,
    u = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    h = Qs.reduce((q, X) => ((q[X] = fb(d)), q), {}),
    {
      setup: m,
      read: g,
      resolveKeyframes: p,
      preUpdate: v,
      update: b,
      preRender: S,
      render: w,
      postRender: z,
    } = h,
    B = () => {
      const q = Fn.useManualTiming,
        X = q ? c.timestamp : performance.now();
      ((o = !1),
        q ||
          (c.delta = u ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, hb), 1)),
        (c.timestamp = X),
        (c.isProcessing = !0),
        m.process(c),
        g.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        S.process(c),
        w.process(c),
        z.process(c),
        (c.isProcessing = !1),
        o && l && ((u = !1), a(B)));
    },
    H = () => {
      ((o = !0), (u = !0), c.isProcessing || a(B));
    };
  return {
    schedule: Qs.reduce((q, X) => {
      const F = h[X];
      return (
        (q[X] = (lt, I = !1, $ = !1) => (o || H(), F.schedule(lt, I, $))),
        q
      );
    }, {}),
    cancel: (q) => {
      for (let X = 0; X < Qs.length; X++) h[Qs[X]].cancel(q);
    },
    state: c,
    steps: h,
  };
}
const {
  schedule: jt,
  cancel: Wn,
  state: ie,
  steps: Yr,
} = Py(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qe, !0);
let Ws;
function db() {
  Ws = void 0;
}
const re = {
    now: () => (
      Ws === void 0 &&
        re.set(
          ie.isProcessing || Fn.useManualTiming
            ? ie.timestamp
            : performance.now(),
        ),
      Ws
    ),
    set: (a) => {
      ((Ws = a), queueMicrotask(db));
    },
  },
  $y = (a) => (l) => typeof l == "string" && l.startsWith(a),
  Iy = $y("--"),
  mb = $y("var(--"),
  _c = (a) => (mb(a) ? pb.test(a.split("/*")[0].trim()) : !1),
  pb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function bp(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const pi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  xl = { ...pi, transform: (a) => tn(0, 1, a) },
  Zs = { ...pi, default: 1 },
  pl = (a) => Math.round(a * 1e5) / 1e5,
  Uc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yb(a) {
  return a == null;
}
const gb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Bc = (a, l) => (o) =>
    !!(
      (typeof o == "string" && gb.test(o) && o.startsWith(a)) ||
      (l && !yb(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  tg = (a, l, o) => (u) => {
    if (typeof u != "string") return u;
    const [c, d, h, m] = u.match(Uc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(d),
      [o]: parseFloat(h),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  vb = (a) => tn(0, 255, a),
  Gr = { ...pi, transform: (a) => Math.round(vb(a)) },
  ba = {
    test: Bc("rgb", "red"),
    parse: tg("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: o, alpha: u = 1 }) =>
      "rgba(" +
      Gr.transform(a) +
      ", " +
      Gr.transform(l) +
      ", " +
      Gr.transform(o) +
      ", " +
      pl(xl.transform(u)) +
      ")",
  };
function bb(a) {
  let l = "",
    o = "",
    u = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (o = a.substring(3, 5)),
        (u = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (o = a.substring(2, 3)),
        (u = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (o += o),
        (u += u),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(u, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ac = { test: Bc("#"), parse: bb, transform: ba.transform },
  Ml = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  Zn = Ml("deg"),
  Ie = Ml("%"),
  J = Ml("px"),
  xb = Ml("vh"),
  Sb = Ml("vw"),
  xp = {
    ...Ie,
    parse: (a) => Ie.parse(a) / 100,
    transform: (a) => Ie.transform(a * 100),
  },
  ui = {
    test: Bc("hsl", "hue"),
    parse: tg("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: o, alpha: u = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Ie.transform(pl(l)) +
      ", " +
      Ie.transform(pl(o)) +
      ", " +
      pl(xl.transform(u)) +
      ")",
  },
  Kt = {
    test: (a) => ba.test(a) || ac.test(a) || ui.test(a),
    parse: (a) =>
      ba.test(a) ? ba.parse(a) : ui.test(a) ? ui.parse(a) : ac.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? ba.transform(a)
          : ui.transform(a),
    getAnimatableNone: (a) => {
      const l = Kt.parse(a);
      return ((l.alpha = 0), Kt.transform(l));
    },
  },
  Tb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ab(a) {
  var l, o;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(Uc)) == null ? void 0 : l.length) || 0) +
      (((o = a.match(Tb)) == null ? void 0 : o.length) || 0) >
      0
  );
}
const eg = "number",
  ng = "color",
  Eb = "var",
  Mb = "var(",
  Sp = "${}",
  Db =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function di(a) {
  const l = a.toString(),
    o = [],
    u = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = l
    .replace(
      Db,
      (g) => (
        Kt.test(g)
          ? (u.color.push(d), c.push(ng), o.push(Kt.parse(g)))
          : g.startsWith(Mb)
            ? (u.var.push(d), c.push(Eb), o.push(g))
            : (u.number.push(d), c.push(eg), o.push(parseFloat(g))),
        ++d,
        Sp
      ),
    )
    .split(Sp);
  return { values: o, split: m, indexes: u, types: c };
}
function Cb(a) {
  return di(a).values;
}
function ag({ split: a, types: l }) {
  const o = a.length;
  return (u) => {
    let c = "";
    for (let d = 0; d < o; d++)
      if (((c += a[d]), u[d] !== void 0)) {
        const h = l[d];
        h === eg
          ? (c += pl(u[d]))
          : h === ng
            ? (c += Kt.transform(u[d]))
            : (c += u[d]);
      }
    return c;
  };
}
function wb(a) {
  return ag(di(a));
}
const jb = (a) =>
    typeof a == "number" ? 0 : Kt.test(a) ? Kt.getAnimatableNone(a) : a,
  Nb = (a, l) =>
    typeof a == "number"
      ? l != null && l.trim().endsWith("/")
        ? a
        : 0
      : jb(a);
function zb(a) {
  const l = di(a);
  return ag(l)(l.values.map((u, c) => Nb(u, l.split[c])));
}
const Ke = {
  test: Ab,
  parse: Cb,
  createTransformer: wb,
  getAnimatableNone: zb,
};
function Xr(a, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? a + (l - a) * 6 * o
      : o < 1 / 2
        ? l
        : o < 2 / 3
          ? a + (l - a) * (2 / 3 - o) * 6
          : a
  );
}
function Ob({ hue: a, saturation: l, lightness: o, alpha: u }) {
  ((a /= 360), (l /= 100), (o /= 100));
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l,
      g = 2 * o - m;
    ((c = Xr(g, m, a + 1 / 3)), (d = Xr(g, m, a)), (h = Xr(g, m, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: u,
  };
}
function io(a, l) {
  return (o) => (o > 0 ? l : a);
}
const Rt = (a, l, o) => a + (l - a) * o,
  kr = (a, l, o) => {
    const u = a * a,
      c = o * (l * l - u) + u;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Rb = [ac, ba, ui],
  Vb = (a) => Rb.find((l) => l.test(a));
function Tp(a) {
  const l = Vb(a);
  if (!l) return !1;
  let o = l.parse(a);
  return (l === ui && (o = Ob(o)), o);
}
const Ap = (a, l) => {
    const o = Tp(a),
      u = Tp(l);
    if (!o || !u) return io(a, l);
    const c = { ...o };
    return (d) => (
      (c.red = kr(o.red, u.red, d)),
      (c.green = kr(o.green, u.green, d)),
      (c.blue = kr(o.blue, u.blue, d)),
      (c.alpha = Rt(o.alpha, u.alpha, d)),
      ba.transform(c)
    );
  },
  ic = new Set(["none", "hidden"]);
function _b(a, l) {
  return ic.has(a) ? (o) => (o <= 0 ? a : l) : (o) => (o >= 1 ? l : a);
}
function Ub(a, l) {
  return (o) => Rt(a, l, o);
}
function Lc(a) {
  return typeof a == "number"
    ? Ub
    : typeof a == "string"
      ? _c(a)
        ? io
        : Kt.test(a)
          ? Ap
          : Hb
      : Array.isArray(a)
        ? ig
        : typeof a == "object"
          ? Kt.test(a)
            ? Ap
            : Bb
          : io;
}
function ig(a, l) {
  const o = [...a],
    u = o.length,
    c = a.map((d, h) => Lc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < u; h++) o[h] = c[h](d);
    return o;
  };
}
function Bb(a, l) {
  const o = { ...a, ...l },
    u = {};
  for (const c in o)
    a[c] !== void 0 && l[c] !== void 0 && (u[c] = Lc(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in u) o[d] = u[d](c);
    return o;
  };
}
function Lb(a, l) {
  const o = [],
    u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      h = a.indexes[d][u[d]],
      m = a.values[h] ?? 0;
    ((o[c] = m), u[d]++);
  }
  return o;
}
const Hb = (a, l) => {
  const o = Ke.createTransformer(l),
    u = di(a),
    c = di(l);
  return u.indexes.var.length === c.indexes.var.length &&
    u.indexes.color.length === c.indexes.color.length &&
    u.indexes.number.length >= c.indexes.number.length
    ? (ic.has(a) && !c.values.length) || (ic.has(l) && !u.values.length)
      ? _b(a, l)
      : Al(ig(Lb(u, c), c.values), o)
    : io(a, l);
};
function lg(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number"
    ? Rt(a, l, o)
    : Lc(a)(a, l);
}
const qb = (a) => {
    const l = ({ timestamp: o }) => a(o);
    return {
      start: (o = !0) => jt.update(l, o),
      stop: () => Wn(l),
      now: () => (ie.isProcessing ? ie.timestamp : re.now()),
    };
  },
  sg = (a, l, o = 10) => {
    let u = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let d = 0; d < c; d++)
      u += Math.round(a(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${u.substring(0, u.length - 2)})`;
  },
  lo = 2e4;
function Hc(a) {
  let l = 0;
  const o = 50;
  let u = a.next(l);
  for (; !u.done && l < lo; ) ((l += o), (u = a.next(l)));
  return l >= lo ? 1 / 0 : l;
}
function Yb(a, l = 100, o) {
  const u = o({ ...a, keyframes: [0, l] }),
    c = Math.min(Hc(u), lo);
  return {
    type: "keyframes",
    ease: (d) => u.next(c * d).value / l,
    duration: He(c),
  };
}
const Ut = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function lc(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const Gb = 12;
function Xb(a, l, o) {
  let u = o;
  for (let c = 1; c < Gb; c++) u = u - a(u) / l(u);
  return u;
}
const Qr = 0.001;
function kb({
  duration: a = Ut.duration,
  bounce: l = Ut.bounce,
  velocity: o = Ut.velocity,
  mass: u = Ut.mass,
}) {
  let c,
    d,
    h = 1 - l;
  ((h = tn(Ut.minDamping, Ut.maxDamping, h)),
    (a = tn(Ut.minDuration, Ut.maxDuration, He(a))),
    h < 1
      ? ((c = (p) => {
          const v = p * h,
            b = v * a,
            S = v - o,
            w = lc(p, h),
            z = Math.exp(-b);
          return Qr - (S / w) * z;
        }),
        (d = (p) => {
          const b = p * h * a,
            S = b * o + o,
            w = Math.pow(h, 2) * Math.pow(p, 2) * a,
            z = Math.exp(-b),
            B = lc(Math.pow(p, 2), h);
          return ((-c(p) + Qr > 0 ? -1 : 1) * ((S - w) * z)) / B;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * a),
            b = (p - o) * a + 1;
          return -Qr + v * b;
        }),
        (d = (p) => {
          const v = Math.exp(-p * a),
            b = (o - p) * (a * a);
          return v * b;
        })));
  const m = 5 / a,
    g = Xb(c, d, m);
  if (((a = we(a)), isNaN(g)))
    return { stiffness: Ut.stiffness, damping: Ut.damping, duration: a };
  {
    const p = Math.pow(g, 2) * u;
    return { stiffness: p, damping: h * 2 * Math.sqrt(u * p), duration: a };
  }
}
const Qb = ["duration", "bounce"],
  Zb = ["stiffness", "damping", "mass"];
function Ep(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function Kb(a) {
  let l = {
    velocity: Ut.velocity,
    stiffness: Ut.stiffness,
    damping: Ut.damping,
    mass: Ut.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Ep(a, Zb) && Ep(a, Qb))
    if (((l.velocity = 0), a.visualDuration)) {
      const o = a.visualDuration,
        u = (2 * Math.PI) / (o * 1.2),
        c = u * u,
        d = 2 * tn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Ut.mass, stiffness: c, damping: d };
    } else {
      const o = kb({ ...a, velocity: 0 });
      ((l = { ...l, ...o, mass: Ut.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function so(a = Ut.visualDuration, l = Ut.bounce) {
  const o =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: u, restDelta: c } = o;
  const d = o.keyframes[0],
    h = o.keyframes[o.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: g,
      damping: p,
      mass: v,
      duration: b,
      velocity: S,
      isResolvedFromDuration: w,
    } = Kb({ ...o, velocity: -He(o.velocity || 0) }),
    z = S || 0,
    B = p / (2 * Math.sqrt(g * v)),
    H = h - d,
    L = He(Math.sqrt(g / v)),
    Y = Math.abs(H) < 5;
  (u || (u = Y ? Ut.restSpeed.granular : Ut.restSpeed.default),
    c || (c = Y ? Ut.restDelta.granular : Ut.restDelta.default));
  let q, X, F, lt, I, $;
  if (B < 1)
    ((F = lc(L, B)),
      (lt = (z + B * L * H) / F),
      (q = (tt) => {
        const pt = Math.exp(-B * L * tt);
        return h - pt * (lt * Math.sin(F * tt) + H * Math.cos(F * tt));
      }),
      (I = B * L * lt + H * F),
      ($ = B * L * H - lt * F),
      (X = (tt) =>
        Math.exp(-B * L * tt) * (I * Math.sin(F * tt) + $ * Math.cos(F * tt))));
  else if (B === 1) {
    q = (pt) => h - Math.exp(-L * pt) * (H + (z + L * H) * pt);
    const tt = z + L * H;
    X = (pt) => Math.exp(-L * pt) * (L * tt * pt - z);
  } else {
    const tt = L * Math.sqrt(B * B - 1);
    q = (Gt) => {
      const Lt = Math.exp(-B * L * Gt),
        O = Math.min(tt * Gt, 300);
      return (
        h - (Lt * ((z + B * L * H) * Math.sinh(O) + tt * H * Math.cosh(O))) / tt
      );
    };
    const pt = (z + B * L * H) / tt,
      vt = B * L * pt - H * tt,
      $t = B * L * H - pt * tt;
    X = (Gt) => {
      const Lt = Math.exp(-B * L * Gt),
        O = Math.min(tt * Gt, 300);
      return Lt * (vt * Math.sinh(O) + $t * Math.cosh(O));
    };
  }
  const at = {
    calculatedDuration: (w && b) || null,
    velocity: (tt) => we(X(tt)),
    next: (tt) => {
      if (!w && B < 1) {
        const vt = Math.exp(-B * L * tt),
          $t = Math.sin(F * tt),
          Gt = Math.cos(F * tt),
          Lt = h - vt * (lt * $t + H * Gt),
          O = we(vt * (I * $t + $ * Gt));
        return (
          (m.done = Math.abs(O) <= u && Math.abs(h - Lt) <= c),
          (m.value = m.done ? h : Lt),
          m
        );
      }
      const pt = q(tt);
      if (w) m.done = tt >= b;
      else {
        const vt = we(X(tt));
        m.done = Math.abs(vt) <= u && Math.abs(h - pt) <= c;
      }
      return ((m.value = m.done ? h : pt), m);
    },
    toString: () => {
      const tt = Math.min(Hc(at), lo),
        pt = sg((vt) => at.next(tt * vt).value, tt, 30);
      return tt + "ms " + pt;
    },
    toTransition: () => {},
  };
  return at;
}
so.applyToOptions = (a) => {
  const l = Yb(a, 100, so);
  return (
    (a.ease = l.ease),
    (a.duration = we(l.duration)),
    (a.type = "keyframes"),
    a
  );
};
const Jb = 5;
function og(a, l, o) {
  const u = Math.max(l - Jb, 0);
  return qy(o - a(u), l - u);
}
function sc({
  keyframes: a,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: u = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: m,
  max: g,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const b = a[0],
    S = { done: !1, value: b },
    w = ($) => (m !== void 0 && $ < m) || (g !== void 0 && $ > g),
    z = ($) =>
      m === void 0
        ? g
        : g === void 0 || Math.abs(m - $) < Math.abs(g - $)
          ? m
          : g;
  let B = o * l;
  const H = b + B,
    L = h === void 0 ? H : h(H);
  L !== H && (B = L - b);
  const Y = ($) => -B * Math.exp(-$ / u),
    q = ($) => L + Y($),
    X = ($) => {
      const at = Y($),
        tt = q($);
      ((S.done = Math.abs(at) <= p), (S.value = S.done ? L : tt));
    };
  let F, lt;
  const I = ($) => {
    w(S.value) &&
      ((F = $),
      (lt = so({
        keyframes: [S.value, z(S.value)],
        velocity: og(q, $, S.value),
        damping: c,
        stiffness: d,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    I(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let at = !1;
        return (
          !lt && F === void 0 && ((at = !0), X($), I($)),
          F !== void 0 && $ >= F ? lt.next($ - F) : (!at && X($), S)
        );
      },
    }
  );
}
function Fb(a, l, o) {
  const u = [],
    c = o || Fn.mix || lg,
    d = a.length - 1;
  for (let h = 0; h < d; h++) {
    let m = c(a[h], a[h + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[h] || qe : l;
      m = Al(g, m);
    }
    u.push(m);
  }
  return u;
}
function Wb(a, l, { clamp: o = !0, ease: u, mixer: c } = {}) {
  const d = a.length;
  if ((zc(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const m = Fb(l, u, c),
    g = m.length,
    p = (v) => {
      if (h && v < a[0]) return l[0];
      let b = 0;
      if (g > 1) for (; b < a.length - 2 && !(v < a[b + 1]); b++);
      const S = bl(a[b], a[b + 1], v);
      return m[b](S);
    };
  return o ? (v) => p(tn(a[0], a[d - 1], v)) : p;
}
function Pb(a, l) {
  const o = a[a.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = bl(0, l, u);
    a.push(Rt(o, 1, c));
  }
}
function $b(a) {
  const l = [0];
  return (Pb(l, a.length - 1), l);
}
function Ib(a, l) {
  return a.map((o) => o * l);
}
function tx(a, l) {
  return a.map(() => l || Fy).splice(0, a.length - 1);
}
function yl({
  duration: a = 300,
  keyframes: l,
  times: o,
  ease: u = "easeInOut",
}) {
  const c = ub(u) ? u.map(vp) : vp(u),
    d = { done: !1, value: l[0] },
    h = Ib(o && o.length === l.length ? o : $b(l), a),
    m = Wb(h, l, { ease: Array.isArray(c) ? c : tx(l, c) });
  return {
    calculatedDuration: a,
    next: (g) => ((d.value = m(g)), (d.done = g >= a), d),
  };
}
const ex = (a) => a !== null;
function qc(a, { repeat: l, repeatType: o = "loop" }, u, c = 1) {
  const d = a.filter(ex),
    m = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
  return !m || u === void 0 ? d[m] : u;
}
const nx = { decay: sc, inertia: sc, tween: yl, keyframes: yl, spring: so };
function ug(a) {
  typeof a.type == "string" && (a.type = nx[a.type]);
}
class Yc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const ax = (a) => a / 100;
class Gc extends Yc {
  constructor(l) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var u, c;
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== re.now() && this.tick(re.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (u = this.options).onStop) == null || c.call(u)));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: l } = this;
    ug(l);
    const {
      type: o = yl,
      repeat: u = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: h = 0,
    } = l;
    let { keyframes: m } = l;
    const g = o || yl;
    g !== yl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Al(ax, lg(m[0], m[1]))), (m = [0, 100]));
    const p = g({ ...l, keyframes: m });
    (d === "mirror" &&
      (this.mirroredGenerator = g({
        ...l,
        keyframes: [...m].reverse(),
        velocity: -h,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = Hc(p)));
    const { calculatedDuration: v } = p;
    ((this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (u + 1) - c),
      (this.generator = p));
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: u,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: h,
      resolvedDuration: m,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return u.next(0);
    const {
      delay: p = 0,
      keyframes: v,
      repeat: b,
      repeatType: S,
      repeatDelay: w,
      type: z,
      onUpdate: B,
      finalKeyframe: H,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l));
    const L = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      Y = this.playbackSpeed >= 0 ? L < 0 : L > c;
    ((this.currentTime = Math.max(L, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let q = this.currentTime,
      X = u;
    if (b) {
      const $ = Math.min(this.currentTime, c) / m;
      let at = Math.floor($),
        tt = $ % 1;
      (!tt && $ >= 1 && (tt = 1),
        tt === 1 && at--,
        (at = Math.min(at, b + 1)),
        !!(at % 2) &&
          (S === "reverse"
            ? ((tt = 1 - tt), w && (tt -= w / m))
            : S === "mirror" && (X = h)),
        (q = tn(0, 1, tt) * m));
    }
    const F = Y ? { done: !1, value: v[0] } : X.next(q);
    d && !Y && (F.value = d(F.value));
    let { done: lt } = F;
    !Y &&
      g !== null &&
      (lt =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const I =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && lt));
    return (
      I && z !== sc && (F.value = qc(v, this.options, H, this.speed)),
      B && B(F.value),
      I && this.finish(),
      F
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return He(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + He(l);
  }
  get time() {
    return He(this.currentTime);
  }
  set time(l) {
    ((l = we(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = l),
          this.tick(l)));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return og((u) => this.generator.next(u).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    (o && this.driver && this.updateTime(re.now()),
      (this.playbackSpeed = l),
      o && this.driver && (this.time = He(this.currentTime)));
  }
  play() {
    var c, d;
    if (this.isStopped) return;
    const { driver: l = qb, startTime: o } = this.options;
    (this.driver || (this.driver = l((h) => this.tick(h))),
      (d = (c = this.options).onPlay) == null || d.call(c));
    const u = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = u))
      : this.holdTime !== null
        ? (this.startTime = u - this.holdTime)
        : this.startTime || (this.startTime = o ?? u),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(re.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var l, o;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (o = (l = this.options).onComplete) == null || o.call(l));
  }
  cancel() {
    var l, o;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (o = (l = this.options).onCancel) == null || o.call(l));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return ((this.startTime = 0), this.tick(l, !0));
  }
  attachTimeline(l) {
    var o;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (o = this.driver) == null || o.stop(),
      l.observe(this)
    );
  }
}
function ix(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const xa = (a) => (a * 180) / Math.PI,
  oc = (a) => {
    const l = xa(Math.atan2(a[1], a[0]));
    return uc(l);
  },
  lx = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: oc,
    rotateZ: oc,
    skewX: (a) => xa(Math.atan(a[1])),
    skewY: (a) => xa(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  uc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Mp = oc,
  Dp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Cp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  sx = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Dp,
    scaleY: Cp,
    scale: (a) => (Dp(a) + Cp(a)) / 2,
    rotateX: (a) => uc(xa(Math.atan2(a[6], a[5]))),
    rotateY: (a) => uc(xa(Math.atan2(-a[2], a[0]))),
    rotateZ: Mp,
    rotate: Mp,
    skewX: (a) => xa(Math.atan(a[4])),
    skewY: (a) => xa(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function rc(a) {
  return a.includes("scale") ? 1 : 0;
}
function cc(a, l) {
  if (!a || a === "none") return rc(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (o) ((u = sx), (c = o));
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((u = lx), (c = m));
  }
  if (!c) return rc(l);
  const d = u[l],
    h = c[1].split(",").map(ux);
  return typeof d == "function" ? d(h) : h[d];
}
const ox = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return cc(o, l);
};
function ux(a) {
  return parseFloat(a.trim());
}
const yi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  gi = new Set(yi),
  wp = (a) => a === pi || a === J,
  rx = new Set(["x", "y", "z"]),
  cx = yi.filter((a) => !rx.has(a));
function fx(a) {
  const l = [];
  return (
    cx.forEach((o) => {
      const u = a.getValue(o);
      u !== void 0 &&
        (l.push([o, u.get()]), u.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Jn = {
  width: (
    { x: a },
    { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: u },
  ) => {
    const c = a.max - a.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: (
    { y: a },
    { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: u },
  ) => {
    const c = a.max - a.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => cc(l, "x"),
  y: (a, { transform: l }) => cc(l, "y"),
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const Sa = new Set();
let fc = !1,
  hc = !1,
  dc = !1;
function rg() {
  if (hc) {
    const a = Array.from(Sa).filter((u) => u.needsMeasurement),
      l = new Set(a.map((u) => u.element)),
      o = new Map();
    (l.forEach((u) => {
      const c = fx(u);
      c.length && (o.set(u, c), u.render());
    }),
      a.forEach((u) => u.measureInitialState()),
      l.forEach((u) => {
        u.render();
        const c = o.get(u);
        c &&
          c.forEach(([d, h]) => {
            var m;
            (m = u.getValue(d)) == null || m.set(h);
          });
      }),
      a.forEach((u) => u.measureEndState()),
      a.forEach((u) => {
        u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
      }));
  }
  ((hc = !1), (fc = !1), Sa.forEach((a) => a.complete(dc)), Sa.clear());
}
function cg() {
  Sa.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (hc = !0));
  });
}
function hx() {
  ((dc = !0), cg(), rg(), (dc = !1));
}
class Xc {
  constructor(l, o, u, c, d, h = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = u),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Sa.add(this),
          fc || ((fc = !0), jt.read(cg), jt.resolveKeyframes(rg)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o,
      element: u,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const d = c == null ? void 0 : c.get(),
        h = l[l.length - 1];
      if (d !== void 0) l[0] = d;
      else if (u && o) {
        const m = u.readValue(o, h);
        m != null && (l[0] = m);
      }
      (l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]));
    }
    ix(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      Sa.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Sa.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dx = (a) => a.startsWith("--");
function fg(a, l, o) {
  dx(l) ? a.style.setProperty(l, o) : (a.style[l] = o);
}
const mx = {};
function hg(a, l) {
  const o = Hy(a);
  return () => mx[l] ?? o();
}
const px = hg(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  dg = hg(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ml = ([a, l, o, u]) => `cubic-bezier(${a}, ${l}, ${o}, ${u})`,
  jp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ml([0, 0.65, 0.55, 1]),
    circOut: ml([0.55, 0, 1, 0.45]),
    backIn: ml([0.31, 0.01, 0.66, -0.59]),
    backOut: ml([0.33, 1.53, 0.69, 0.99]),
  };
function mg(a, l) {
  if (a)
    return typeof a == "function"
      ? dg()
        ? sg(a, l)
        : "ease-out"
      : Wy(a)
        ? ml(a)
        : Array.isArray(a)
          ? a.map((o) => mg(o, l) || jp.easeOut)
          : jp[a];
}
function yx(
  a,
  l,
  o,
  {
    delay: u = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: m = "easeOut",
    times: g,
  } = {},
  p = void 0,
) {
  const v = { [l]: o };
  g && (v.offset = g);
  const b = mg(m, c);
  Array.isArray(b) && (v.easing = b);
  const S = {
    delay: u,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal",
  };
  return (p && (S.pseudoElement = p), a.animate(v, S));
}
function pg(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function gx({ type: a, ...l }) {
  return pg(a) && dg()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class yg extends Yc {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: o,
      name: u,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: h = !1,
      finalKeyframe: m,
      onComplete: g,
    } = l;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = h),
      (this.options = l),
      zc(typeof l.type != "string"));
    const p = gx(l);
    ((this.animation = yx(o, u, c, p, d)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const v = qc(c, this.options, m, this.speed);
          (this.updateMotionValue && this.updateMotionValue(v),
            fg(o, u, v),
            this.animation.cancel());
        }
        (g == null || g(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, o;
    (o = (l = this.animation).finish) == null || o.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var o, u, c;
    const l = (o = this.options) == null ? void 0 : o.element;
    !this.isPseudoElement &&
      l != null &&
      l.isConnected &&
      ((c = (u = this.animation).commitStyles) == null || c.call(u));
  }
  get duration() {
    var o, u;
    const l =
      ((u =
        (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) ==
      null
        ? void 0
        : u.call(o).duration) || 0;
    return He(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + He(l);
  }
  get time() {
    return He(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = we(l)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    (l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: u, observe: c }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null ||
          d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && px()
        ? ((this.animation.timeline = l),
          o && (this.animation.rangeStart = o),
          u && (this.animation.rangeEnd = u),
          qe)
        : c(this)
    );
  }
}
const gg = { anticipate: Zy, backInOut: Qy, circInOut: Jy };
function vx(a) {
  return a in gg;
}
function bx(a) {
  typeof a.ease == "string" && vx(a.ease) && (a.ease = gg[a.ease]);
}
const Zr = 10;
class xx extends yg {
  constructor(l) {
    (bx(l),
      ug(l),
      super(l),
      l.startTime !== void 0 &&
        l.autoplay !== !1 &&
        (this.startTime = l.startTime),
      (this.options = l));
  }
  updateMotionValue(l) {
    const {
      motionValue: o,
      onUpdate: u,
      onComplete: c,
      element: d,
      ...h
    } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const m = new Gc({ ...h, autoplay: !1 }),
      g = Math.max(Zr, re.now() - this.startTime),
      p = tn(0, Zr, g - Zr),
      v = m.sample(g).value,
      { name: b } = this.options;
    (d && b && fg(d, b, v),
      o.setWithVelocity(m.sample(Math.max(0, g - p)).value, v, p),
      m.stop());
  }
}
const Np = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Ke.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function Sx(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let o = 0; o < a.length; o++) if (a[o] !== l) return !0;
}
function Tx(a, l, o, u) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = a[a.length - 1],
    h = Np(c, l),
    m = Np(d, l);
  return !h || !m ? !1 : Sx(a) || ((o === "spring" || pg(o)) && u);
}
function mc(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const Ax = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ex = Hy(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Mx(a) {
  var v;
  const {
    motionValue: l,
    name: o,
    repeatDelay: u,
    repeatType: c,
    damping: d,
    type: h,
  } = a;
  if (
    !(
      ((v = l == null ? void 0 : l.owner) == null
        ? void 0
        : v.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: g, transformTemplate: p } = l.owner.getProps();
  return (
    Ex() &&
    o &&
    Ax.has(o) &&
    (o !== "transform" || !p) &&
    !g &&
    !u &&
    c !== "mirror" &&
    d !== 0 &&
    h !== "inertia"
  );
}
const Dx = 40;
class Cx extends Yc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: u = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    keyframes: m,
    name: g,
    motionValue: p,
    element: v,
    ...b
  }) {
    var z;
    (super(),
      (this.stop = () => {
        var B, H;
        (this._animation &&
          (this._animation.stop(),
          (B = this.stopTimeline) == null || B.call(this)),
          (H = this.keyframeResolver) == null || H.cancel());
      }),
      (this.createdAt = re.now()));
    const S = {
        autoplay: l,
        delay: o,
        type: u,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        name: g,
        motionValue: p,
        element: v,
        ...b,
      },
      w = (v == null ? void 0 : v.KeyframeResolver) || Xc;
    ((this.keyframeResolver = new w(
      m,
      (B, H, L) => this.onKeyframesResolved(B, H, S, !L),
      g,
      p,
      v,
    )),
      (z = this.keyframeResolver) == null || z.scheduleResolve());
  }
  onKeyframesResolved(l, o, u, c) {
    var L, Y;
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: h,
      velocity: m,
      delay: g,
      isHandoff: p,
      onUpdate: v,
    } = u;
    this.resolvedAt = re.now();
    let b = !0;
    Tx(l, d, h, m) ||
      ((b = !1),
      (Fn.instantAnimations || !g) && (v == null || v(qc(l, u, o))),
      (l[0] = l[l.length - 1]),
      mc(u),
      (u.repeat = 0));
    const w = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Dx
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...u,
        keyframes: l,
      },
      z = b && !p && Mx(w),
      B =
        (Y = (L = w.motionValue) == null ? void 0 : L.owner) == null
          ? void 0
          : Y.current,
      H = z ? new xx({ ...w, element: B }) : new Gc(w);
    (H.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(qe),
      this.pendingTimeline &&
        ((this.stopTimeline = H.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = H));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation ||
        ((l = this.keyframeResolver) == null || l.resume(), hx()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    (this._animation && this.animation.cancel(),
      (l = this.keyframeResolver) == null || l.cancel());
  }
}
function vg(a, l, o, u = 0, c = 1) {
  const d = Array.from(a)
      .sort((p, v) => p.sortNodePosition(v))
      .indexOf(l),
    h = a.size,
    m = (h - 1) * u;
  return typeof o == "function" ? o(d, h) : c === 1 ? d * u : m - d * u;
}
const wx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jx(a) {
  const l = wx.exec(a);
  if (!l) return [,];
  const [, o, u, c] = l;
  return [`--${o ?? u}`, c];
}
function bg(a, l, o = 1) {
  const [u, c] = jx(a);
  if (!u) return;
  const d = window.getComputedStyle(l).getPropertyValue(u);
  if (d) {
    const h = d.trim();
    return Uy(h) ? parseFloat(h) : h;
  }
  return _c(c) ? bg(c, l, o + 1) : c;
}
const Nx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  zx = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ox = { type: "keyframes", duration: 0.8 },
  Rx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Vx = (a, { keyframes: l }) =>
    l.length > 2
      ? Ox
      : gi.has(a)
        ? a.startsWith("scale")
          ? zx(l[1])
          : Nx
        : Rx,
  _x = (a) => a !== null;
function Ux(a, { repeat: l, repeatType: o = "loop" }, u) {
  const c = a.filter(_x),
    d = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
function xg(a, l) {
  if (a != null && a.inherit && l) {
    const { inherit: o, ...u } = a;
    return { ...l, ...u };
  }
  return a;
}
function kc(a, l) {
  const o =
    (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
  return o !== a ? xg(o, a) : o;
}
function Bx({
  when: a,
  delay: l,
  delayChildren: o,
  staggerChildren: u,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: m,
  from: g,
  elapsed: p,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Qc =
  (a, l, o, u = {}, c, d) =>
  (h) => {
    const m = kc(u, a) || {},
      g = m.delay || u.delay || 0;
    let { elapsed: p = 0 } = u;
    p = p - we(g);
    const v = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...m,
      delay: -p,
      onUpdate: (S) => {
        (l.set(S), m.onUpdate && m.onUpdate(S));
      },
      onComplete: () => {
        (h(), m.onComplete && m.onComplete());
      },
      name: a,
      motionValue: l,
      element: d ? void 0 : c,
    };
    (Bx(m) || Object.assign(v, Vx(a, v)),
      v.duration && (v.duration = we(v.duration)),
      v.repeatDelay && (v.repeatDelay = we(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from));
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (mc(v), v.delay === 0 && (b = !0)),
      (Fn.instantAnimations ||
        Fn.skipAnimations ||
        (c != null && c.shouldSkipAnimations)) &&
        ((b = !0), mc(v), (v.delay = 0)),
      (v.allowFlatten = !m.type && !m.ease),
      b && !d && l.get() !== void 0)
    ) {
      const S = Ux(v.keyframes, m);
      if (S !== void 0) {
        jt.update(() => {
          (v.onUpdate(S), v.onComplete());
        });
        return;
      }
    }
    return m.isSync ? new Gc(v) : new Cx(v);
  };
function zp(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((o, u) => {
        ((l[0][u] = o.get()), (l[1][u] = o.getVelocity()));
      }),
    l
  );
}
function Zc(a, l, o, u) {
  if (typeof l == "function") {
    const [c, d] = zp(u);
    l = l(o !== void 0 ? o : a.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = zp(u);
    l = l(o !== void 0 ? o : a.custom, c, d);
  }
  return l;
}
function Ta(a, l, o) {
  const u = a.getProps();
  return Zc(u, l, o !== void 0 ? o : u.custom, a);
}
const Sg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...yi,
  ]),
  Op = 30,
  Lx = (a) => !isNaN(parseFloat(a));
class Hx {
  constructor(l, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (u) => {
        var d;
        const c = re.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(u),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
        )
          for (const h of this.dependents) h.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner));
  }
  setCurrent(l) {
    ((this.current = l),
      (this.updatedAt = re.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = Lx(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Oc());
    const u = this.events[l].add(o);
    return l === "change"
      ? () => {
          (u(),
            jt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : u;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    ((this.passiveEffect = l), (this.stopPassiveEffect = o));
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, u) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - u));
  }
  jump(l, o = !0) {
    (this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(l));
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = re.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Op
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Op);
    return qy(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = l(o)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var l, o;
    ((l = this.dependents) == null || l.clear(),
      (o = this.events.destroy) == null || o.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function mi(a, l) {
  return new Hx(a, l);
}
const pc = (a) => Array.isArray(a);
function qx(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, mi(o));
}
function Yx(a) {
  return pc(a) ? a[a.length - 1] || 0 : a;
}
function Gx(a, l) {
  const o = Ta(a, l);
  let { transitionEnd: u = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...u };
  for (const h in d) {
    const m = Yx(d[h]);
    qx(a, h, m);
  }
}
const le = (a) => !!(a && a.getVelocity);
function Xx(a) {
  return !!(le(a) && a.add);
}
function yc(a, l) {
  const o = a.getValue("willChange");
  if (Xx(o)) return o.add(l);
  if (!o && Fn.WillChange) {
    const u = new Fn.WillChange("auto");
    (a.addValue("willChange", u), u.add(l));
  }
}
function Kc(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const kx = "framerAppearId",
  Tg = "data-" + Kc(kx);
function Ag(a) {
  return a.props[Tg];
}
function Qx({ protectedKeys: a, needsAnimating: l }, o) {
  const u = a.hasOwnProperty(o) && l[o] !== !0;
  return ((l[o] = !1), u);
}
function Eg(a, l, { delay: o = 0, transitionOverride: u, type: c } = {}) {
  let { transition: d, transitionEnd: h, ...m } = l;
  const g = a.getDefaultTransition();
  d = d ? xg(d, g) : g;
  const p = d == null ? void 0 : d.reduceMotion;
  u && (d = u);
  const v = [],
    b = c && a.animationState && a.animationState.getState()[c];
  for (const S in m) {
    const w = a.getValue(S, a.latestValues[S] ?? null),
      z = m[S];
    if (z === void 0 || (b && Qx(b, S))) continue;
    const B = { delay: o, ...kc(d || {}, S) },
      H = w.get();
    if (
      H !== void 0 &&
      !w.isAnimating &&
      !Array.isArray(z) &&
      z === H &&
      !B.velocity
    )
      continue;
    let L = !1;
    if (window.MotionHandoffAnimation) {
      const X = Ag(a);
      if (X) {
        const F = window.MotionHandoffAnimation(X, S, jt);
        F !== null && ((B.startTime = F), (L = !0));
      }
    }
    yc(a, S);
    const Y = p ?? a.shouldReduceMotion;
    w.start(Qc(S, w, z, Y && Sg.has(S) ? { type: !1 } : B, a, L));
    const q = w.animation;
    q && v.push(q);
  }
  if (h) {
    const S = () =>
      jt.update(() => {
        h && Gx(a, h);
      });
    v.length ? Promise.all(v).then(S) : S();
  }
  return v;
}
function gc(a, l, o = {}) {
  var g;
  const u = Ta(
    a,
    l,
    o.type === "exit"
      ? (g = a.presenceContext) == null
        ? void 0
        : g.custom
      : void 0,
  );
  let { transition: c = a.getDefaultTransition() || {} } = u || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = u ? () => Promise.all(Eg(a, u, o)) : () => Promise.resolve(),
    h =
      a.variantChildren && a.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: S,
            } = c;
            return Zx(a, l, p, v, b, S, o);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [p, v] = m === "beforeChildren" ? [d, h] : [h, d];
    return p().then(() => v());
  } else return Promise.all([d(), h(o.delay)]);
}
function Zx(a, l, o = 0, u = 0, c = 0, d = 1, h) {
  const m = [];
  for (const g of a.variantChildren)
    (g.notify("AnimationStart", l),
      m.push(
        gc(g, l, {
          ...h,
          delay:
            o +
            (typeof u == "function" ? 0 : u) +
            vg(a.variantChildren, g, u, c, d),
        }).then(() => g.notify("AnimationComplete", l)),
      ));
  return Promise.all(m);
}
function Kx(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((d) => gc(a, d, o));
    u = Promise.all(c);
  } else if (typeof l == "string") u = gc(a, l, o);
  else {
    const c = typeof l == "function" ? Ta(a, l, o.custom) : l;
    u = Promise.all(Eg(a, c, o));
  }
  return u.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const Jx = { test: (a) => a === "auto", parse: (a) => a },
  Mg = (a) => (l) => l.test(a),
  Dg = [pi, J, Ie, Zn, Sb, xb, Jx],
  Rp = (a) => Dg.find(Mg(a));
function Fx(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || Ly(a)
      : !0;
}
const Wx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Px(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [u] = o.match(Uc) || [];
  if (!u) return a;
  const c = o.replace(u, "");
  let d = Wx.has(l) ? 1 : 0;
  return (u !== o && (d *= 100), l + "(" + d + c + ")");
}
const $x = /\b([a-z-]*)\(.*?\)/gu,
  vc = {
    ...Ke,
    getAnimatableNone: (a) => {
      const l = a.match($x);
      return l ? l.map(Px).join(" ") : a;
    },
  },
  bc = {
    ...Ke,
    getAnimatableNone: (a) => {
      const l = Ke.parse(a);
      return Ke.createTransformer(a)(
        l.map((u) =>
          typeof u == "number"
            ? 0
            : typeof u == "object"
              ? { ...u, alpha: 1 }
              : u,
        ),
      );
    },
  },
  Vp = { ...pi, transform: Math.round },
  Ix = {
    rotate: Zn,
    rotateX: Zn,
    rotateY: Zn,
    rotateZ: Zn,
    scale: Zs,
    scaleX: Zs,
    scaleY: Zs,
    scaleZ: Zs,
    skew: Zn,
    skewX: Zn,
    skewY: Zn,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: xl,
    originX: xp,
    originY: xp,
    originZ: J,
  },
  Jc = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    inset: J,
    insetBlock: J,
    insetBlockStart: J,
    insetBlockEnd: J,
    insetInline: J,
    insetInlineStart: J,
    insetInlineEnd: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    paddingBlock: J,
    paddingBlockStart: J,
    paddingBlockEnd: J,
    paddingInline: J,
    paddingInlineStart: J,
    paddingInlineEnd: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    marginBlock: J,
    marginBlockStart: J,
    marginBlockEnd: J,
    marginInline: J,
    marginInlineStart: J,
    marginInlineEnd: J,
    fontSize: J,
    backgroundPositionX: J,
    backgroundPositionY: J,
    ...Ix,
    zIndex: Vp,
    fillOpacity: xl,
    strokeOpacity: xl,
    numOctaves: Vp,
  },
  tS = {
    ...Jc,
    color: Kt,
    backgroundColor: Kt,
    outlineColor: Kt,
    fill: Kt,
    stroke: Kt,
    borderColor: Kt,
    borderTopColor: Kt,
    borderRightColor: Kt,
    borderBottomColor: Kt,
    borderLeftColor: Kt,
    filter: vc,
    WebkitFilter: vc,
    mask: bc,
    WebkitMask: bc,
  },
  Cg = (a) => tS[a],
  eS = new Set([vc, bc]);
function wg(a, l) {
  let o = Cg(a);
  return (
    eS.has(o) || (o = Ke),
    o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
  );
}
const nS = new Set(["auto", "none", "0"]);
function aS(a, l, o) {
  let u = 0,
    c;
  for (; u < a.length && !c; ) {
    const d = a[u];
    (typeof d == "string" && !nS.has(d) && di(d).values.length && (c = a[u]),
      u++);
  }
  if (c && o) for (const d of l) a[d] = wg(o, c);
}
class iS extends Xc {
  constructor(l, o, u, c, d) {
    super(l, o, u, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: u } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let b = l[v];
      if (typeof b == "string" && ((b = b.trim()), _c(b))) {
        const S = bg(b, o.current);
        (S !== void 0 && (l[v] = S),
          v === l.length - 1 && (this.finalKeyframe = b));
      }
    }
    if ((this.resolveNoneKeyframes(), !Sg.has(u) || l.length !== 2)) return;
    const [c, d] = l,
      h = Rp(c),
      m = Rp(d),
      g = bp(c),
      p = bp(d);
    if (g !== p && Jn[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== m)
      if (wp(h) && wp(m))
        for (let v = 0; v < l.length; v++) {
          const b = l[v];
          typeof b == "string" && (l[v] = parseFloat(b));
        }
      else Jn[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      u = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || Fx(l[c])) && u.push(c);
    u.length && aS(l, u, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: u } = this;
    if (!l || !l.current) return;
    (u === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Jn[u](
        l.measureViewportBox(),
        window.getComputedStyle(l.current),
      )),
      (o[0] = this.measuredOrigin));
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: o, unresolvedKeyframes: u } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = u.length - 1,
      h = u[d];
    ((u[d] = Jn[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([g, p]) => {
          l.getValue(g).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
const lS = new Set(["opacity", "clipPath", "filter", "transform"]);
function jg(a, l, o) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let u = document;
    const c = (o == null ? void 0 : o[a]) ?? u.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((u) => u != null);
}
const Ng = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function Ps(a) {
  return By(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: Fc } = Py(queueMicrotask, !1),
  Qe = { x: !1, y: !1 };
function zg() {
  return Qe.x || Qe.y;
}
function sS(a) {
  return a === "x" || a === "y"
    ? Qe[a]
      ? null
      : ((Qe[a] = !0),
        () => {
          Qe[a] = !1;
        })
    : Qe.x || Qe.y
      ? null
      : ((Qe.x = Qe.y = !0),
        () => {
          Qe.x = Qe.y = !1;
        });
}
function Og(a, l) {
  const o = jg(a),
    u = new AbortController(),
    c = { passive: !0, ...l, signal: u.signal };
  return [o, c, () => u.abort()];
}
function oS(a) {
  return !(a.pointerType === "touch" || zg());
}
function uS(a, l, o = {}) {
  const [u, c, d] = Og(a, o);
  return (
    u.forEach((h) => {
      let m = !1,
        g = !1,
        p;
      const v = () => {
          h.removeEventListener("pointerleave", z);
        },
        b = (H) => {
          (p && (p(H), (p = void 0)), v());
        },
        S = (H) => {
          ((m = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            g && ((g = !1), b(H)));
        },
        w = () => {
          ((m = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c));
        },
        z = (H) => {
          if (H.pointerType !== "touch") {
            if (m) {
              g = !0;
              return;
            }
            b(H);
          }
        },
        B = (H) => {
          if (!oS(H)) return;
          g = !1;
          const L = l(h, H);
          typeof L == "function" &&
            ((p = L), h.addEventListener("pointerleave", z, c));
        };
      (h.addEventListener("pointerenter", B, c),
        h.addEventListener("pointerdown", w, c));
    }),
    d
  );
}
const Rg = (a, l) => (l ? (a === l ? !0 : Rg(a, l.parentElement)) : !1),
  Wc = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  rS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function cS(a) {
  return rS.has(a.tagName) || a.isContentEditable === !0;
}
const fS = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function hS(a) {
  return fS.has(a.tagName) || a.isContentEditable === !0;
}
const $s = new WeakSet();
function _p(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Kr(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }),
  );
}
const dS = (a, l) => {
  const o = a.currentTarget;
  if (!o) return;
  const u = _p(() => {
    if ($s.has(o)) return;
    Kr(o, "down");
    const c = _p(() => {
        Kr(o, "up");
      }),
      d = () => Kr(o, "cancel");
    (o.addEventListener("keyup", c, l), o.addEventListener("blur", d, l));
  });
  (o.addEventListener("keydown", u, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", u), l));
};
function Up(a) {
  return Wc(a) && !zg();
}
const Bp = new WeakSet();
function mS(a, l, o = {}) {
  const [u, c, d] = Og(a, o),
    h = (m) => {
      const g = m.currentTarget;
      if (!Up(m) || Bp.has(m)) return;
      ($s.add(g), o.stopPropagation && Bp.add(m));
      const p = l(g, m),
        v = (w, z) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", S),
            $s.has(g) && $s.delete(g),
            Up(w) && typeof p == "function" && p(w, { success: z }));
        },
        b = (w) => {
          v(
            w,
            g === window ||
              g === document ||
              o.useGlobalTarget ||
              Rg(g, w.target),
          );
        },
        S = (w) => {
          v(w, !1);
        };
      (window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", S, c));
    };
  return (
    u.forEach((m) => {
      ((o.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c),
        Ps(m) &&
          (m.addEventListener("focus", (p) => dS(p, c)),
          !cS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
    }),
    d
  );
}
function Pc(a) {
  return By(a) && "ownerSVGElement" in a;
}
const Is = new WeakMap();
let Kn;
const Vg = (a, l, o) => (u, c) =>
    c && c[0]
      ? c[0][a + "Size"]
      : Pc(u) && "getBBox" in u
        ? u.getBBox()[l]
        : u[o],
  pS = Vg("inline", "width", "offsetWidth"),
  yS = Vg("block", "height", "offsetHeight");
function gS({ target: a, borderBoxSize: l }) {
  var o;
  (o = Is.get(a)) == null ||
    o.forEach((u) => {
      u(a, {
        get width() {
          return pS(a, l);
        },
        get height() {
          return yS(a, l);
        },
      });
    });
}
function vS(a) {
  a.forEach(gS);
}
function bS() {
  typeof ResizeObserver > "u" || (Kn = new ResizeObserver(vS));
}
function xS(a, l) {
  Kn || bS();
  const o = jg(a);
  return (
    o.forEach((u) => {
      let c = Is.get(u);
      (c || ((c = new Set()), Is.set(u, c)),
        c.add(l),
        Kn == null || Kn.observe(u));
    }),
    () => {
      o.forEach((u) => {
        const c = Is.get(u);
        (c == null || c.delete(l),
          (c != null && c.size) || Kn == null || Kn.unobserve(u));
      });
    }
  );
}
const to = new Set();
let ri;
function SS() {
  ((ri = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    to.forEach((l) => l(a));
  }),
    window.addEventListener("resize", ri));
}
function TS(a) {
  return (
    to.add(a),
    ri || SS(),
    () => {
      (to.delete(a),
        !to.size &&
          typeof ri == "function" &&
          (window.removeEventListener("resize", ri), (ri = void 0)));
    }
  );
}
function Lp(a, l) {
  return typeof a == "function" ? TS(a) : xS(a, l);
}
function AS(a) {
  return Pc(a) && a.tagName === "svg";
}
const ES = [...Dg, Kt, Ke],
  MS = (a) => ES.find(Mg(a)),
  Hp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: Hp(), y: Hp() }),
  qp = () => ({ min: 0, max: 0 }),
  Ft = () => ({ x: qp(), y: qp() }),
  DS = new WeakMap();
function mo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Sl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const $c = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ic = ["initial", ...$c];
function po(a) {
  return mo(a.animate) || Ic.some((l) => Sl(a[l]));
}
function _g(a) {
  return !!(po(a) || a.variants);
}
function CS(a, l, o) {
  for (const u in l) {
    const c = l[u],
      d = o[u];
    if (le(c)) a.addValue(u, c);
    else if (le(d)) a.addValue(u, mi(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(u)) {
        const h = a.getValue(u);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(u);
        a.addValue(u, mi(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const u in o) l[u] === void 0 && a.removeValue(u);
  return l;
}
const xc = { current: null },
  Ug = { current: !1 },
  wS = typeof window < "u";
function jS() {
  if (((Ug.current = !0), !!wS))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (xc.current = a.matches);
      (a.addEventListener("change", l), l());
    } else xc.current = !1;
}
const Yp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let oo = {};
function Bg(a) {
  oo = a;
}
function NS() {
  return oo;
}
class zS {
  scrapeMotionValuesFromProps(l, o, u) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: u,
      reducedMotionConfig: c,
      skipAnimations: d,
      blockInitialAnimation: h,
      visualState: m,
    },
    g = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Xc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const w = re.now();
        this.renderScheduledAt < w &&
          ((this.renderScheduledAt = w), jt.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: v } = m;
    ((this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = o.initial ? { ...p } : {}),
      (this.renderState = v),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = u),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = d),
      (this.options = g),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = po(o)),
      (this.isVariantNode = _g(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current)));
    const { willChange: b, ...S } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this,
    );
    for (const w in S) {
      const z = S[w];
      p[w] !== void 0 && le(z) && z.set(p[w]);
    }
  }
  mount(l) {
    var o, u;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((o = this.values.get(c)) == null || o.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = l),
      DS.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, d) => this.bindToMotionValue(d, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Ug.current || jS(), (this.shouldReduceMotion = xc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (u = this.parent) == null || u.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var l;
    (this.projection && this.projection.unmount(),
      Wn(this.notifyUpdate),
      Wn(this.render),
      this.valueSubscriptions.forEach((o) => o()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (l = this.parent) == null || l.removeChild(this));
    for (const o in this.events) this.events[o].clear();
    for (const o in this.features) {
      const u = this.features[o];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    (this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l));
  }
  removeChild(l) {
    (this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l));
  }
  bindToMotionValue(l, o) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      o.accelerate && lS.has(l) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: h,
          keyframes: m,
          times: g,
          ease: p,
          duration: v,
        } = o.accelerate,
        b = new yg({
          element: this.current,
          name: l,
          keyframes: m,
          times: g,
          ease: p,
          duration: we(v),
        }),
        S = h(b);
      this.valueSubscriptions.set(l, () => {
        (S(), b.cancel());
      });
      return;
    }
    const u = gi.has(l);
    u && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (h) => {
      ((this.latestValues[l] = h),
        this.props.onUpdate && jt.preRender(this.notifyUpdate),
        u && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        (c(), d && d(), o.owner && o.stop());
      }));
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in oo) {
      const o = oo[l];
      if (!o) continue;
      const { isEnabled: u, Feature: c } = o;
      if (
        (!this.features[l] &&
          c &&
          u(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ft();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    ((l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let u = 0; u < Yp.length; u++) {
      const c = Yp[u];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    ((this.prevMotionValues = CS(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(l),
        () => o.variantChildren.delete(l)
      );
  }
  addValue(l, o) {
    const u = this.values.get(l);
    o !== u &&
      (u && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    (o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState));
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let u = this.values.get(l);
    return (
      u === void 0 &&
        o !== void 0 &&
        ((u = mi(o === null ? void 0 : o, { owner: this })),
        this.addValue(l, u)),
      u
    );
  }
  readValue(l, o) {
    let u =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options));
    return (
      u != null &&
        (typeof u == "string" && (Uy(u) || Ly(u))
          ? (u = parseFloat(u))
          : !MS(u) && Ke.test(o) && (u = wg(l, o)),
        this.setBaseTarget(l, le(u) ? u.get() : u)),
      le(u) ? u.get() : u
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    var d;
    const { initial: o } = this.props;
    let u;
    if (typeof o == "string" || typeof o == "object") {
      const h = Zc(
        this.props,
        o,
        (d = this.presenceContext) == null ? void 0 : d.custom,
      );
      h && (u = h[l]);
    }
    if (o && u !== void 0) return u;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !le(c)
      ? c
      : this.initialValues[l] !== void 0 && u === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, o) {
    return (
      this.events[l] || (this.events[l] = new Oc()),
      this.events[l].add(o)
    );
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Fc.render(this.render);
  }
}
class Lg extends zS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = iS));
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const u = l.style;
    return u ? u[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: u }) {
    (delete o[l], delete u[l]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    le(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class Pn {
  constructor(l) {
    ((this.isMounted = !1), (this.node = l));
  }
  update() {}
}
function Hg({ top: a, left: l, right: o, bottom: u }) {
  return { x: { min: l, max: o }, y: { min: a, max: u } };
}
function OS({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function RS(a, l) {
  if (!l) return a;
  const o = l({ x: a.left, y: a.top }),
    u = l({ x: a.right, y: a.bottom });
  return { top: o.y, left: o.x, bottom: u.y, right: u.x };
}
function Jr(a) {
  return a === void 0 || a === 1;
}
function Sc({ scale: a, scaleX: l, scaleY: o }) {
  return !Jr(a) || !Jr(l) || !Jr(o);
}
function va(a) {
  return (
    Sc(a) ||
    qg(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function qg(a) {
  return Gp(a.x) || Gp(a.y);
}
function Gp(a) {
  return a && a !== "0%";
}
function uo(a, l, o) {
  const u = a - o,
    c = l * u;
  return o + c;
}
function Xp(a, l, o, u, c) {
  return (c !== void 0 && (a = uo(a, c, u)), uo(a, o, u) + l);
}
function Tc(a, l = 0, o = 1, u, c) {
  ((a.min = Xp(a.min, l, o, u, c)), (a.max = Xp(a.max, l, o, u, c)));
}
function Yg(a, { x: l, y: o }) {
  (Tc(a.x, l.translate, l.scale, l.originPoint),
    Tc(a.y, o.translate, o.scale, o.originPoint));
}
const kp = 0.999999999999,
  Qp = 1.0000000000001;
function VS(a, l, o, u = !1) {
  var m;
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let g = 0; g < c; g++) {
    ((d = o[g]), (h = d.projectionDelta));
    const { visualElement: p } = d.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (u &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        hi(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), Yg(a, h)),
      u &&
        va(d.latestValues) &&
        hi(a, d.latestValues, (m = d.layout) == null ? void 0 : m.layoutBox));
  }
  (l.x < Qp && l.x > kp && (l.x = 1), l.y < Qp && l.y > kp && (l.y = 1));
}
function fi(a, l) {
  ((a.min = a.min + l), (a.max = a.max + l));
}
function Zp(a, l, o, u, c = 0.5) {
  const d = Rt(a.min, a.max, c);
  Tc(a, l, o, d, u);
}
function Kp(a, l) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (l.max - l.min) : a;
}
function hi(a, l, o) {
  const u = o ?? a;
  (Zp(a.x, Kp(l.x, u.x), l.scaleX, l.scale, l.originX),
    Zp(a.y, Kp(l.y, u.y), l.scaleY, l.scale, l.originY));
}
function Gg(a, l) {
  return Hg(RS(a.getBoundingClientRect(), l));
}
function _S(a, l, o) {
  const u = Gg(a, o),
    { scroll: c } = l;
  return (c && (fi(u.x, c.offset.x), fi(u.y, c.offset.y)), u);
}
const US = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  BS = yi.length;
function LS(a, l, o) {
  let u = "",
    c = !0;
  for (let d = 0; d < BS; d++) {
    const h = yi[d],
      m = a[h];
    if (m === void 0) continue;
    let g = !0;
    if (typeof m == "number") g = m === (h.startsWith("scale") ? 1 : 0);
    else {
      const p = parseFloat(m);
      g = h.startsWith("scale") ? p === 1 : p === 0;
    }
    if (!g || o) {
      const p = Ng(m, Jc[h]);
      if (!g) {
        c = !1;
        const v = US[h] || h;
        u += `${v}(${p}) `;
      }
      o && (l[h] = p);
    }
  }
  return ((u = u.trim()), o ? (u = o(l, c ? "" : u)) : c && (u = "none"), u);
}
function tf(a, l, o) {
  const { style: u, vars: c, transformOrigin: d } = a;
  let h = !1,
    m = !1;
  for (const g in l) {
    const p = l[g];
    if (gi.has(g)) {
      h = !0;
      continue;
    } else if (Iy(g)) {
      c[g] = p;
      continue;
    } else {
      const v = Ng(p, Jc[g]);
      g.startsWith("origin") ? ((m = !0), (d[g] = v)) : (u[g] = v);
    }
  }
  if (
    (l.transform ||
      (h || o
        ? (u.transform = LS(l, a.transform, o))
        : u.transform && (u.transform = "none")),
    m)
  ) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = d;
    u.transformOrigin = `${g} ${p} ${v}`;
  }
}
function Xg(a, { style: l, vars: o }, u, c) {
  const d = a.style;
  let h;
  for (h in l) d[h] = l[h];
  c == null || c.applyProjectionStyles(d, u);
  for (h in o) d.setProperty(h, o[h]);
}
function Jp(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const dl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (J.test(a)) a = parseFloat(a);
        else return a;
      const o = Jp(a, l.target.x),
        u = Jp(a, l.target.y);
      return `${o}% ${u}%`;
    },
  },
  HS = {
    correct: (a, { treeScale: l, projectionDelta: o }) => {
      const u = a,
        c = Ke.parse(a);
      if (c.length > 5) return u;
      const d = Ke.createTransformer(a),
        h = typeof c[0] != "number" ? 1 : 0,
        m = o.x.scale * l.x,
        g = o.y.scale * l.y;
      ((c[0 + h] /= m), (c[1 + h] /= g));
      const p = Rt(m, g, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= p),
        typeof c[3 + h] == "number" && (c[3 + h] /= p),
        d(c)
      );
    },
  },
  Ac = {
    borderRadius: {
      ...dl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: dl,
    borderTopRightRadius: dl,
    borderBottomLeftRadius: dl,
    borderBottomRightRadius: dl,
    boxShadow: HS,
  };
function kg(a, { layout: l, layoutId: o }) {
  return (
    gi.has(a) ||
    a.startsWith("origin") ||
    ((l || o !== void 0) && (!!Ac[a] || a === "opacity"))
  );
}
function ef(a, l, o) {
  var h;
  const u = a.style,
    c = l == null ? void 0 : l.style,
    d = {};
  if (!u) return d;
  for (const m in u)
    (le(u[m]) ||
      (c && le(c[m])) ||
      kg(m, a) ||
      ((h = o == null ? void 0 : o.getValue(m)) == null
        ? void 0
        : h.liveStyle) !== void 0) &&
      (d[m] = u[m]);
  return d;
}
function qS(a) {
  return window.getComputedStyle(a);
}
class YS extends Lg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Xg));
  }
  readValueFromInstance(l, o) {
    var u;
    if (gi.has(o))
      return (u = this.projection) != null && u.isProjecting ? rc(o) : ox(l, o);
    {
      const c = qS(l),
        d = (Iy(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Gg(l, o);
  }
  build(l, o, u) {
    tf(l, o, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, u) {
    return ef(l, o, u);
  }
}
const GS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  XS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function kS(a, l, o = 1, u = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? GS : XS;
  ((a[d.offset] = `${-u}`), (a[d.array] = `${l} ${o}`));
}
const QS = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Qg(
  a,
  {
    attrX: l,
    attrY: o,
    attrScale: u,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: h = 0,
    ...m
  },
  g,
  p,
  v,
) {
  if ((tf(a, m, p), g)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: b, style: S } = a;
  (b.transform && ((S.transform = b.transform), delete b.transform),
    (S.transform || b.transformOrigin) &&
      ((S.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    S.transform &&
      ((S.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete b.transformBox));
  for (const w of QS) b[w] !== void 0 && ((S[w] = b[w]), delete b[w]);
  (l !== void 0 && (b.x = l),
    o !== void 0 && (b.y = o),
    u !== void 0 && (b.scale = u),
    c !== void 0 && kS(b, c, d, h, !1));
}
const Zg = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Kg = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function ZS(a, l, o, u) {
  Xg(a, l, void 0, u);
  for (const c in l.attrs) a.setAttribute(Zg.has(c) ? c : Kc(c), l.attrs[c]);
}
function Jg(a, l, o) {
  const u = ef(a, l, o);
  for (const c in a)
    if (le(a[c]) || le(l[c])) {
      const d =
        yi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      u[d] = a[c];
    }
  return u;
}
class KS extends Lg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ft));
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (gi.has(o)) {
      const u = Cg(o);
      return (u && u.default) || 0;
    }
    return ((o = Zg.has(o) ? o : Kc(o)), l.getAttribute(o));
  }
  scrapeMotionValuesFromProps(l, o, u) {
    return Jg(l, o, u);
  }
  build(l, o, u) {
    Qg(l, o, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(l, o, u, c) {
    ZS(l, o, u, c);
  }
  mount(l) {
    ((this.isSVGTag = Kg(l.tagName)), super.mount(l));
  }
}
const JS = Ic.length;
function Fg(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const o = a.parent ? Fg(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (o.initial = a.props.initial), o);
  }
  const l = {};
  for (let o = 0; o < JS; o++) {
    const u = Ic[o],
      c = a.props[u];
    (Sl(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function Wg(a, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== a.length) return !1;
  for (let u = 0; u < o; u++) if (l[u] !== a[u]) return !1;
  return !0;
}
const FS = [...$c].reverse(),
  WS = $c.length;
function PS(a) {
  return (l) =>
    Promise.all(l.map(({ animation: o, options: u }) => Kx(a, o, u)));
}
function $S(a) {
  let l = PS(a),
    o = Fp(),
    u = !0,
    c = !1;
  const d = (p) => (v, b) => {
    var w;
    const S = Ta(
      a,
      b,
      p === "exit"
        ? (w = a.presenceContext) == null
          ? void 0
          : w.custom
        : void 0,
    );
    if (S) {
      const { transition: z, transitionEnd: B, ...H } = S;
      v = { ...v, ...H, ...B };
    }
    return v;
  };
  function h(p) {
    l = p(a);
  }
  function m(p) {
    const { props: v } = a,
      b = Fg(a.parent) || {},
      S = [],
      w = new Set();
    let z = {},
      B = 1 / 0;
    for (let L = 0; L < WS; L++) {
      const Y = FS[L],
        q = o[Y],
        X = v[Y] !== void 0 ? v[Y] : b[Y],
        F = Sl(X),
        lt = Y === p ? q.isActive : null;
      lt === !1 && (B = L);
      let I = X === b[Y] && X !== v[Y] && F;
      if (
        (I && (u || c) && a.manuallyAnimateOnMount && (I = !1),
        (q.protectedKeys = { ...z }),
        (!q.isActive && lt === null) ||
          (!X && !q.prevProp) ||
          mo(X) ||
          typeof X == "boolean")
      )
        continue;
      if (Y === "exit" && q.isActive && lt !== !0) {
        q.prevResolvedValues && (z = { ...z, ...q.prevResolvedValues });
        continue;
      }
      const $ = IS(q.prevProp, X);
      let at = $ || (Y === p && q.isActive && !I && F) || (L > B && F),
        tt = !1;
      const pt = Array.isArray(X) ? X : [X];
      let vt = pt.reduce(d(Y), {});
      lt === !1 && (vt = {});
      const { prevResolvedValues: $t = {} } = q,
        Gt = { ...$t, ...vt },
        Lt = (Z) => {
          ((at = !0),
            w.has(Z) && ((tt = !0), w.delete(Z)),
            (q.needsAnimating[Z] = !0));
          const ut = a.getValue(Z);
          ut && (ut.liveStyle = !1);
        };
      for (const Z in Gt) {
        const ut = vt[Z],
          yt = $t[Z];
        if (z.hasOwnProperty(Z)) continue;
        let E = !1;
        (pc(ut) && pc(yt) ? (E = !Wg(ut, yt)) : (E = ut !== yt),
          E
            ? ut != null
              ? Lt(Z)
              : w.add(Z)
            : ut !== void 0 && w.has(Z)
              ? Lt(Z)
              : (q.protectedKeys[Z] = !0));
      }
      ((q.prevProp = X),
        (q.prevResolvedValues = vt),
        q.isActive && (z = { ...z, ...vt }),
        (u || c) && a.blockInitialAnimation && (at = !1));
      const O = I && $;
      at &&
        (!O || tt) &&
        S.push(
          ...pt.map((Z) => {
            const ut = { type: Y };
            if (
              typeof Z == "string" &&
              (u || c) &&
              !O &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: yt } = a,
                E = Ta(yt, Z);
              if (yt.enteringChildren && E) {
                const { delayChildren: U } = E.transition || {};
                ut.delay = vg(yt.enteringChildren, a, U);
              }
            }
            return { animation: Z, options: ut };
          }),
        );
    }
    if (w.size) {
      const L = {};
      if (typeof v.initial != "boolean") {
        const Y = Ta(a, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        Y && Y.transition && (L.transition = Y.transition);
      }
      (w.forEach((Y) => {
        const q = a.getBaseTarget(Y),
          X = a.getValue(Y);
        (X && (X.liveStyle = !0), (L[Y] = q ?? null));
      }),
        S.push({ animation: L }));
    }
    let H = !!S.length;
    return (
      u &&
        (v.initial === !1 || v.initial === v.animate) &&
        !a.manuallyAnimateOnMount &&
        (H = !1),
      (u = !1),
      (c = !1),
      H ? l(S) : Promise.resolve()
    );
  }
  function g(p, v) {
    var S;
    if (o[p].isActive === v) return Promise.resolve();
    ((S = a.variantChildren) == null ||
      S.forEach((w) => {
        var z;
        return (z = w.animationState) == null ? void 0 : z.setActive(p, v);
      }),
      (o[p].isActive = v));
    const b = m(p);
    for (const w in o) o[w].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: m,
    setActive: g,
    setAnimateFunction: h,
    getState: () => o,
    reset: () => {
      ((o = Fp()), (c = !0));
    },
  };
}
function IS(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Wg(l, a) : !1;
}
function ga(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Fp() {
  return {
    animate: ga(!0),
    whileInView: ga(),
    whileHover: ga(),
    whileTap: ga(),
    whileDrag: ga(),
    whileFocus: ga(),
    exit: ga(),
  };
}
function Ec(a, l) {
  ((a.min = l.min), (a.max = l.max));
}
function ke(a, l) {
  (Ec(a.x, l.x), Ec(a.y, l.y));
}
function Wp(a, l) {
  ((a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin));
}
const Pg = 1e-4,
  t2 = 1 - Pg,
  e2 = 1 + Pg,
  $g = 0.01,
  n2 = 0 - $g,
  a2 = 0 + $g;
function ce(a) {
  return a.max - a.min;
}
function i2(a, l, o) {
  return Math.abs(a - l) <= o;
}
function Pp(a, l, o, u = 0.5) {
  ((a.origin = u),
    (a.originPoint = Rt(l.min, l.max, a.origin)),
    (a.scale = ce(o) / ce(l)),
    (a.translate = Rt(o.min, o.max, a.origin) - a.originPoint),
    ((a.scale >= t2 && a.scale <= e2) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= n2 && a.translate <= a2) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function gl(a, l, o, u) {
  (Pp(a.x, l.x, o.x, u ? u.originX : void 0),
    Pp(a.y, l.y, o.y, u ? u.originY : void 0));
}
function $p(a, l, o) {
  ((a.min = o.min + l.min), (a.max = a.min + ce(l)));
}
function l2(a, l, o) {
  ($p(a.x, l.x, o.x), $p(a.y, l.y, o.y));
}
function Ip(a, l, o) {
  ((a.min = l.min - o.min), (a.max = a.min + ce(l)));
}
function ro(a, l, o) {
  (Ip(a.x, l.x, o.x), Ip(a.y, l.y, o.y));
}
function ty(a, l, o, u, c) {
  return (
    (a -= l),
    (a = uo(a, 1 / o, u)),
    c !== void 0 && (a = uo(a, 1 / c, u)),
    a
  );
}
function s2(a, l = 0, o = 1, u = 0.5, c, d = a, h = a) {
  if (
    (Ie.test(l) &&
      ((l = parseFloat(l)), (l = Rt(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let m = Rt(d.min, d.max, u);
  (a === d && (m -= l),
    (a.min = ty(a.min, l, o, m, c)),
    (a.max = ty(a.max, l, o, m, c)));
}
function ey(a, l, [o, u, c], d, h) {
  s2(a, l[o], l[u], l[c], l.scale, d, h);
}
const o2 = ["x", "scaleX", "originX"],
  u2 = ["y", "scaleY", "originY"];
function ny(a, l, o, u) {
  (ey(a.x, l, o2, o ? o.x : void 0, u ? u.x : void 0),
    ey(a.y, l, u2, o ? o.y : void 0, u ? u.y : void 0));
}
function ay(a) {
  return a.translate === 0 && a.scale === 1;
}
function Ig(a) {
  return ay(a.x) && ay(a.y);
}
function iy(a, l) {
  return a.min === l.min && a.max === l.max;
}
function r2(a, l) {
  return iy(a.x, l.x) && iy(a.y, l.y);
}
function ly(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function t0(a, l) {
  return ly(a.x, l.x) && ly(a.y, l.y);
}
function sy(a) {
  return ce(a.x) / ce(a.y);
}
function oy(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
function $e(a) {
  return [a("x"), a("y")];
}
function c2(a, l, o) {
  let u = "";
  const c = a.x.translate / l.x,
    d = a.y.translate / l.y,
    h = (o == null ? void 0 : o.z) || 0;
  if (
    ((c || d || h) && (u = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (u += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      rotateX: b,
      rotateY: S,
      skewX: w,
      skewY: z,
    } = o;
    (p && (u = `perspective(${p}px) ${u}`),
      v && (u += `rotate(${v}deg) `),
      b && (u += `rotateX(${b}deg) `),
      S && (u += `rotateY(${S}deg) `),
      w && (u += `skewX(${w}deg) `),
      z && (u += `skewY(${z}deg) `));
  }
  const m = a.x.scale * l.x,
    g = a.y.scale * l.y;
  return ((m !== 1 || g !== 1) && (u += `scale(${m}, ${g})`), u || "none");
}
const e0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  f2 = e0.length,
  uy = (a) => (typeof a == "string" ? parseFloat(a) : a),
  ry = (a) => typeof a == "number" || J.test(a);
function h2(a, l, o, u, c, d) {
  c
    ? ((a.opacity = Rt(0, o.opacity ?? 1, d2(u))),
      (a.opacityExit = Rt(l.opacity ?? 1, 0, m2(u))))
    : d && (a.opacity = Rt(l.opacity ?? 1, o.opacity ?? 1, u));
  for (let h = 0; h < f2; h++) {
    const m = `border${e0[h]}Radius`;
    let g = cy(l, m),
      p = cy(o, m);
    if (g === void 0 && p === void 0) continue;
    (g || (g = 0),
      p || (p = 0),
      g === 0 || p === 0 || ry(g) === ry(p)
        ? ((a[m] = Math.max(Rt(uy(g), uy(p), u), 0)),
          (Ie.test(p) || Ie.test(g)) && (a[m] += "%"))
        : (a[m] = p));
  }
  (l.rotate || o.rotate) && (a.rotate = Rt(l.rotate || 0, o.rotate || 0, u));
}
function cy(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const d2 = n0(0, 0.5, Ky),
  m2 = n0(0.5, 0.95, qe);
function n0(a, l, o) {
  return (u) => (u < a ? 0 : u > l ? 1 : o(bl(a, l, u)));
}
function p2(a, l, o) {
  const u = le(a) ? a : mi(a);
  return (u.start(Qc("", u, l, o)), u.animation);
}
function Tl(a, l, o, u = { passive: !0 }) {
  return (a.addEventListener(l, o, u), () => a.removeEventListener(l, o));
}
const y2 = (a, l) => a.depth - l.depth;
class g2 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(l) {
    (Nc(this.children, l), (this.isDirty = !0));
  }
  remove(l) {
    (ao(this.children, l), (this.isDirty = !0));
  }
  forEach(l) {
    (this.isDirty && this.children.sort(y2),
      (this.isDirty = !1),
      this.children.forEach(l));
  }
}
function v2(a, l) {
  const o = re.now(),
    u = ({ timestamp: c }) => {
      const d = c - o;
      d >= l && (Wn(u), a(d - l));
    };
  return (jt.setup(u, !0), () => Wn(u));
}
function eo(a) {
  return le(a) ? a.get() : a;
}
class b2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Nc(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const u = this.members[o];
      if (u === l || u === this.lead || u === this.prevLead) continue;
      const c = u.instance;
      (!c || c.isConnected === !1) &&
        !u.snapshot &&
        (ao(this.members, u), u.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (
      (ao(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    var o;
    for (let u = this.members.indexOf(l) - 1; u >= 0; u--) {
      const c = this.members[u];
      if (
        c.isPresent !== !1 &&
        ((o = c.instance) == null ? void 0 : o.isConnected) !== !1
      )
        return (this.promote(c), !0);
    }
    return !1;
  }
  promote(l, o) {
    var c;
    const u = this.lead;
    if (l !== u && ((this.prevLead = u), (this.lead = l), l.show(), u)) {
      (u.updateSnapshot(), l.scheduleRender());
      const { layoutDependency: d } = u.options,
        { layoutDependency: h } = l.options;
      ((d === void 0 || d !== h) &&
        ((l.resumeFrom = u),
        o && (u.preserveOpacity = !0),
        u.snapshot &&
          ((l.snapshot = u.snapshot),
          (l.snapshot.latestValues = u.animationValues || u.latestValues)),
        (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && u.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var o, u, c, d, h;
      ((u = (o = l.options).onExitComplete) == null || u.call(o),
        (h =
          (c = l.resumingFrom) == null
            ? void 0
            : (d = c.options).onExitComplete) == null || h.call(d));
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const no = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Fr = ["", "X", "Y", "Z"],
  x2 = 1e3;
let S2 = 0;
function Wr(a, l, o, u) {
  const { latestValues: c } = l;
  c[a] && ((o[a] = c[a]), l.setStaticValue(a, 0), u && (u[a] = 0));
}
function a0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const o = Ag(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", jt, !(c || d));
  }
  const { parent: u } = a;
  u && !u.hasCheckedOptimisedAppear && a0(u);
}
function i0({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: u,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, m = l == null ? void 0 : l()) {
      ((this.id = S2++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(E2),
            this.nodes.forEach(w2),
            this.nodes.forEach(j2),
            this.nodes.forEach(M2));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0));
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new g2());
    }
    addEventListener(h, m) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new Oc()),
        this.eventHandlers.get(h).add(m)
      );
    }
    notifyListeners(h, ...m) {
      const g = this.eventHandlers.get(h);
      g && g.notify(...m);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h) {
      if (this.instance) return;
      ((this.isSVG = Pc(h) && !AS(h)), (this.instance = h));
      const { layoutId: m, layout: g, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let v,
          b = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (jt.read(() => {
          b = window.innerWidth;
        }),
          a(h, () => {
            const w = window.innerWidth;
            w !== b &&
              ((b = w),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = v2(S, 250)),
              no.hasAnimatedSinceResize &&
                ((no.hasAnimatedSinceResize = !1), this.nodes.forEach(dy)));
          }));
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          p &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: S,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const z =
                  this.options.transition || p.getDefaultTransition() || V2,
                { onLayoutAnimationStart: B, onLayoutAnimationComplete: H } =
                  p.getProps(),
                L = !this.targetLayout || !t0(this.targetLayout, w),
                Y = !b && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                Y ||
                (b && (L || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const q = { ...kc(z, "layout"), onPlay: B, onComplete: H };
                ((p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((q.delay = 0), (q.type = !1)),
                  this.startAnimation(q),
                  this.setAnimationOrigin(v, Y));
              } else
                (b || dy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = w;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const h = this.getStack();
      (h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Wn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(N2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          a0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        ((b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" ||
            typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g) return;
      const p = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = p
        ? p(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(fy));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(hy);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(C2),
            this.nodes.forEach(T2),
            this.nodes.forEach(A2))
          : this.nodes.forEach(hy),
        this.clearAllSnapshots());
      const m = re.now();
      ((ie.delta = tn(0, 1e3 / 60, m - ie.timestamp)),
        (ie.timestamp = m),
        (ie.isProcessing = !0),
        Yr.update.process(ie),
        Yr.preRender.process(ie),
        Yr.render.process(ie),
        (ie.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Fc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(D2), this.sharedNodes.forEach(z2));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        jt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      jt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ce(this.snapshot.measuredBox.x) &&
          !ce(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const h = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Ft()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0,
        );
    }
    updateScroll(h = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (m = !1),
        m && this.instance)
      ) {
        const g = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Ig(this.projectionDelta),
        g = this.getTransformTemplate(),
        p = g ? g(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      h &&
        this.instance &&
        (m || va(this.latestValues) || v) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return (
        h && (g = this.removeTransform(g)),
        _2(g),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var p;
      const { visualElement: h } = this.options;
      if (!h) return Ft();
      const m = h.measureViewportBox();
      if (
        !(
          ((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(U2)
        )
      ) {
        const { scroll: v } = this.root;
        v && (fi(m.x, v.offset.x), fi(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var g;
      const m = Ft();
      if ((ke(m, h), (g = this.scroll) != null && g.wasRoot)) return m;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p],
          { scroll: b, options: S } = v;
        v !== this.root &&
          b &&
          S.layoutScroll &&
          (b.wasRoot && ke(m, h), fi(m.x, b.offset.x), fi(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(h, m = !1) {
      var p, v;
      const g = Ft();
      ke(g, h);
      for (let b = 0; b < this.path.length; b++) {
        const S = this.path[b];
        (!m &&
          S.options.layoutScroll &&
          S.scroll &&
          S !== S.root &&
          hi(g, { x: -S.scroll.offset.x, y: -S.scroll.offset.y }),
          va(S.latestValues) &&
            hi(
              g,
              S.latestValues,
              (p = S.layout) == null ? void 0 : p.layoutBox,
            ));
      }
      return (
        va(this.latestValues) &&
          hi(
            g,
            this.latestValues,
            (v = this.layout) == null ? void 0 : v.layoutBox,
          ),
        g
      );
    }
    removeTransform(h) {
      var g;
      const m = Ft();
      ke(m, h);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        if (!va(v.latestValues)) continue;
        let b;
        (v.instance &&
          (Sc(v.latestValues) && v.updateSnapshot(),
          (b = Ft()),
          ke(b, v.measurePageBox())),
          ny(
            m,
            v.latestValues,
            (g = v.snapshot) == null ? void 0 : g.layoutBox,
            b,
          ));
      }
      return (va(this.latestValues) && ny(m, this.latestValues), m);
    }
    setTargetDelta(h) {
      ((this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var w;
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const g = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((w = this.parent) != null && w.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!this.layout || !(v || b)) return;
      this.resolvedRelativeTargetAt = ie.timestamp;
      const S = this.getClosestProjectingParent();
      (S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (S && S.layout
            ? this.createRelativeTarget(
                S,
                this.layout.layoutBox,
                S.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ft()), (this.targetWithTransforms = Ft())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              l2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ke(this.target, this.layout.layoutBox),
                Yg(this.target, this.targetDelta))
              : ke(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Sc(this.parent.latestValues) ||
          qg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(h, m, g) {
      ((this.relativeParent = h),
        (this.linkedParentVersion = h.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ft()),
        (this.relativeTargetOrigin = Ft()),
        ro(this.relativeTargetOrigin, m, g),
        ke(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var z;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let g = !0;
      if (
        ((this.isProjectionDirty ||
          ((z = this.parent) != null && z.isProjectionDirty)) &&
          (g = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === ie.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: p, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || v))
      )
        return;
      ke(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        S = this.treeScale.y;
      (VS(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = Ft())));
      const { target: w } = h;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Wp(this.prevProjectionDelta.x, this.projectionDelta.x),
          Wp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        gl(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== S ||
          !oy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !oy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), h)) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ci()),
        (this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci()));
    }
    setAnimationOrigin(h, m = !1) {
      const g = this.snapshot,
        p = g ? g.latestValues : {},
        v = { ...this.latestValues },
        b = ci();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m));
      const S = Ft(),
        w = g ? g.source : void 0,
        z = this.layout ? this.layout.source : void 0,
        B = w !== z,
        H = this.getStack(),
        L = !H || H.members.length <= 1,
        Y = !!(B && !L && this.options.crossfade === !0 && !this.path.some(R2));
      this.animationProgress = 0;
      let q;
      ((this.mixTargetDelta = (X) => {
        const F = X / 1e3;
        (my(b.x, h.x, F),
          my(b.y, h.y, F),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ro(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            O2(this.relativeTarget, this.relativeTargetOrigin, S, F),
            q && r2(this.relativeTarget, q) && (this.isProjectionDirty = !1),
            q || (q = Ft()),
            ke(q, this.relativeTarget)),
          B &&
            ((this.animationValues = v), h2(v, p, this.latestValues, F, Y, L)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = F));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(h) {
      var m, g, p;
      (this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (p = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) ==
          null || p.stop(),
        this.pendingAnimation &&
          (Wn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = jt.update(() => {
          ((no.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = mi(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = p2(this.motionValue, [0, 1e3], {
              ...h,
              velocity: 0,
              isSync: !0,
              onUpdate: (v) => {
                (this.mixTargetDelta(v), h.onUpdate && h.onUpdate(v));
              },
              onStop: () => {},
              onComplete: () => {
                (h.onComplete && h.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      (h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(x2),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: m,
        target: g,
        layout: p,
        latestValues: v,
      } = h;
      if (!(!m || !g || !p)) {
        if (
          this !== h &&
          this.layout &&
          p &&
          l0(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          g = this.target || Ft();
          const b = ce(this.layout.layoutBox.x);
          ((g.x.min = h.target.x.min), (g.x.max = g.x.min + b));
          const S = ce(this.layout.layoutBox.y);
          ((g.y.min = h.target.y.min), (g.y.max = g.y.min + S));
        }
        (ke(m, g),
          hi(m, v),
          gl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v));
      }
    }
    registerSharedNode(h, m) {
      (this.sharedNodes.has(h) || this.sharedNodes.set(h, new b2()),
        this.sharedNodes.get(h).add(m));
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: h } = this.options;
      return h
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: h } = this.options;
      return h ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: m, preserveFollowOpacity: g } = {}) {
      const p = this.getStack();
      (p && p.promote(this, g),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m }));
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let m = !1;
      const { latestValues: g } = h;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      g.z && Wr("z", h, p, this.animationValues);
      for (let v = 0; v < Fr.length; v++)
        (Wr(`rotate${Fr[v]}`, h, p, this.animationValues),
          Wr(`skew${Fr[v]}`, h, p, this.animationValues));
      h.render();
      for (const v in p)
        (h.setStaticValue(v, p[v]),
          this.animationValues && (this.animationValues[v] = p[v]));
      h.scheduleRender();
    }
    applyProjectionStyles(h, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (h.visibility = ""),
          (h.opacity = ""),
          (h.pointerEvents = eo(m == null ? void 0 : m.pointerEvents) || ""),
          (h.transform = g ? g(this.latestValues, "") : "none"));
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        (this.options.layoutId &&
          ((h.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (h.pointerEvents = eo(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !va(this.latestValues) &&
            ((h.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      h.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = c2(this.projectionDeltaWithTransform, this.treeScale, v);
      (g && (b = g(v, b)), (h.transform = b));
      const { x: S, y: w } = this.projectionDelta;
      ((h.transformOrigin = `${S.origin * 100}% ${w.origin * 100}% 0`),
        p.animationValues
          ? (h.opacity =
              p === this
                ? (v.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (h.opacity =
              p === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0));
      for (const z in Ac) {
        if (v[z] === void 0) continue;
        const { correct: B, applyTo: H, isCSSVariable: L } = Ac[z],
          Y = b === "none" ? v[z] : B(v[z], p);
        if (H) {
          const q = H.length;
          for (let X = 0; X < q; X++) h[H[X]] = Y;
        } else
          L ? (this.options.visualElement.renderState.vars[z] = Y) : (h[z] = Y);
      }
      this.options.layoutId &&
        (h.pointerEvents =
          p === this ? eo(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((h) => {
        var m;
        return (m = h.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(fy),
        this.root.sharedNodes.clear());
    }
  };
}
function T2(a) {
  a.updateLayout();
}
function A2(a) {
  var o;
  const l = ((o = a.resumeFrom) == null ? void 0 : o.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: c } = a.layout,
      { animationType: d } = a.options,
      h = l.source !== a.layout.source;
    if (d === "size")
      $e((b) => {
        const S = h ? l.measuredBox[b] : l.layoutBox[b],
          w = ce(S);
        ((S.min = u[b].min), (S.max = S.min + w));
      });
    else if (d === "x" || d === "y") {
      const b = d === "x" ? "y" : "x";
      Ec(h ? l.measuredBox[b] : l.layoutBox[b], u[b]);
    } else
      l0(d, l.layoutBox, u) &&
        $e((b) => {
          const S = h ? l.measuredBox[b] : l.layoutBox[b],
            w = ce(u[b]);
          ((S.max = S.min + w),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + w)));
        });
    const m = ci();
    gl(m, u, l.layoutBox);
    const g = ci();
    h ? gl(g, a.applyTransform(c, !0), l.measuredBox) : gl(g, u, l.layoutBox);
    const p = !Ig(m);
    let v = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: S, layout: w } = b;
        if (S && w) {
          const z = Ft();
          ro(z, l.layoutBox, S.layoutBox);
          const B = Ft();
          (ro(B, u, w.layoutBox),
            t0(z, B) || (v = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = B),
              (a.relativeTargetOrigin = z),
              (a.relativeParent = b)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: g,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: u } = a.options;
    u && u();
  }
  a.options.transition = void 0;
}
function E2(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function M2(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function D2(a) {
  a.clearSnapshot();
}
function fy(a) {
  a.clearMeasurements();
}
function hy(a) {
  a.isLayoutDirty = !1;
}
function C2(a) {
  const { visualElement: l } = a.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function dy(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function w2(a) {
  a.resolveTargetDelta();
}
function j2(a) {
  a.calcProjection();
}
function N2(a) {
  a.resetSkewAndRotation();
}
function z2(a) {
  a.removeLeadSnapshot();
}
function my(a, l, o) {
  ((a.translate = Rt(l.translate, 0, o)),
    (a.scale = Rt(l.scale, 1, o)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint));
}
function py(a, l, o, u) {
  ((a.min = Rt(l.min, o.min, u)), (a.max = Rt(l.max, o.max, u)));
}
function O2(a, l, o, u) {
  (py(a.x, l.x, o.x, u), py(a.y, l.y, o.y, u));
}
function R2(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const V2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  yy = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  gy = yy("applewebkit/") && !yy("chrome/") ? Math.round : qe;
function vy(a) {
  ((a.min = gy(a.min)), (a.max = gy(a.max)));
}
function _2(a) {
  (vy(a.x), vy(a.y));
}
function l0(a, l, o) {
  return (
    a === "position" || (a === "preserve-aspect" && !i2(sy(l), sy(o), 0.2))
  );
}
function U2(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const B2 = i0({
    attachResizeListener: (a, l) => Tl(a, "resize", l),
    measureScroll: () => {
      var a, l;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((a = document.body) == null ? void 0 : a.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((l = document.body) == null ? void 0 : l.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Pr = { current: void 0 },
  s0 = i0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Pr.current) {
        const a = new B2({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (Pr.current = a));
      }
      return Pr.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  nf = G.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function by(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function L2(...a) {
  return (l) => {
    let o = !1;
    const u = a.map((c) => {
      const d = by(c, l);
      return (!o && typeof d == "function" && (o = !0), d);
    });
    if (o)
      return () => {
        for (let c = 0; c < u.length; c++) {
          const d = u[c];
          typeof d == "function" ? d() : by(a[c], null);
        }
      };
  };
}
function H2(...a) {
  return G.useCallback(L2(...a), a);
}
class q2 extends G.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (
      Ps(o) &&
      l.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const u = o.offsetParent,
        c = (Ps(u) && u.offsetWidth) || 0,
        d = (Ps(u) && u.offsetHeight) || 0,
        h = getComputedStyle(o),
        m = this.props.sizeRef.current;
      ((m.height = parseFloat(h.height)),
        (m.width = parseFloat(h.width)),
        (m.top = o.offsetTop),
        (m.left = o.offsetLeft),
        (m.right = c - m.width - m.left),
        (m.bottom = d - m.height - m.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Y2({
  children: a,
  isPresent: l,
  anchorX: o,
  anchorY: u,
  root: c,
  pop: d,
}) {
  var S;
  const h = G.useId(),
    m = G.useRef(null),
    g = G.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: p } = G.useContext(nf),
    v =
      ((S = a.props) == null ? void 0 : S.ref) ?? (a == null ? void 0 : a.ref),
    b = H2(m, v);
  return (
    G.useInsertionEffect(() => {
      const {
        width: w,
        height: z,
        top: B,
        left: H,
        right: L,
        bottom: Y,
      } = g.current;
      if (l || d === !1 || !m.current || !w || !z) return;
      const q = o === "left" ? `left: ${H}` : `right: ${L}`,
        X = u === "bottom" ? `bottom: ${Y}` : `top: ${B}`;
      m.current.dataset.motionPopId = h;
      const F = document.createElement("style");
      p && (F.nonce = p);
      const lt = c ?? document.head;
      return (
        lt.appendChild(F),
        F.sheet &&
          F.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${z}px !important;
            ${q}px !important;
            ${X}px !important;
          }
        `),
        () => {
          var I;
          ((I = m.current) == null || I.removeAttribute("data-motion-pop-id"),
            lt.contains(F) && lt.removeChild(F));
        }
      );
    }, [l]),
    x.jsx(q2, {
      isPresent: l,
      childRef: m,
      sizeRef: g,
      pop: d,
      children: d === !1 ? a : G.cloneElement(a, { ref: b }),
    })
  );
}
const G2 = ({
  children: a,
  initial: l,
  isPresent: o,
  onExitComplete: u,
  custom: c,
  presenceAffectsLayout: d,
  mode: h,
  anchorX: m,
  anchorY: g,
  root: p,
}) => {
  const v = jc(X2),
    b = G.useId();
  let S = !0,
    w = G.useMemo(
      () => (
        (S = !1),
        {
          id: b,
          initial: l,
          isPresent: o,
          custom: c,
          onExitComplete: (z) => {
            v.set(z, !0);
            for (const B of v.values()) if (!B) return;
            u && u();
          },
          register: (z) => (v.set(z, !1), () => v.delete(z)),
        }
      ),
      [o, v, u],
    );
  return (
    d && S && (w = { ...w }),
    G.useMemo(() => {
      v.forEach((z, B) => v.set(B, !1));
    }, [o]),
    G.useEffect(() => {
      !o && !v.size && u && u();
    }, [o]),
    (a = x.jsx(Y2, {
      pop: h === "popLayout",
      isPresent: o,
      anchorX: m,
      anchorY: g,
      root: p,
      children: a,
    })),
    x.jsx(ho.Provider, { value: w, children: a })
  );
};
function X2() {
  return new Map();
}
function o0(a = !0) {
  const l = G.useContext(ho);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: u, register: c } = l,
    d = G.useId();
  G.useEffect(() => {
    if (a) return c(d);
  }, [a]);
  const h = G.useCallback(() => a && u && u(d), [d, u, a]);
  return !o && u ? [!1, h] : [!0];
}
const Ks = (a) => a.key || "";
function xy(a) {
  const l = [];
  return (
    G.Children.forEach(a, (o) => {
      G.isValidElement(o) && l.push(o);
    }),
    l
  );
}
const co = ({
    children: a,
    custom: l,
    initial: o = !0,
    onExitComplete: u,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: h = !1,
    anchorX: m = "left",
    anchorY: g = "top",
    root: p,
  }) => {
    const [v, b] = o0(h),
      S = G.useMemo(() => xy(a), [a]),
      w = h && !v ? [] : S.map(Ks),
      z = G.useRef(!0),
      B = G.useRef(S),
      H = jc(() => new Map()),
      L = G.useRef(new Set()),
      [Y, q] = G.useState(S),
      [X, F] = G.useState(S);
    _y(() => {
      ((z.current = !1), (B.current = S));
      for (let $ = 0; $ < X.length; $++) {
        const at = Ks(X[$]);
        w.includes(at)
          ? (H.delete(at), L.current.delete(at))
          : H.get(at) !== !0 && H.set(at, !1);
      }
    }, [X, w.length, w.join("-")]);
    const lt = [];
    if (S !== Y) {
      let $ = [...S];
      for (let at = 0; at < X.length; at++) {
        const tt = X[at],
          pt = Ks(tt);
        w.includes(pt) || ($.splice(at, 0, tt), lt.push(tt));
      }
      return (d === "wait" && lt.length && ($ = lt), F(xy($)), q(S), null);
    }
    const { forceRender: I } = G.useContext(wc);
    return x.jsx(x.Fragment, {
      children: X.map(($) => {
        const at = Ks($),
          tt = h && !v ? !1 : S === X || w.includes(at),
          pt = () => {
            if (L.current.has(at)) return;
            if (H.has(at)) (L.current.add(at), H.set(at, !0));
            else return;
            let vt = !0;
            (H.forEach(($t) => {
              $t || (vt = !1);
            }),
              vt &&
                (I == null || I(),
                F(B.current),
                h && (b == null || b()),
                u && u()));
          };
        return x.jsx(
          G2,
          {
            isPresent: tt,
            initial: !z.current || o ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: d,
            root: p,
            onExitComplete: tt ? void 0 : pt,
            anchorX: m,
            anchorY: g,
            children: $,
          },
          at,
        );
      }),
    });
  },
  u0 = G.createContext({ strict: !1 }),
  Sy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Ty = !1;
function k2() {
  if (Ty) return;
  const a = {};
  for (const l in Sy) a[l] = { isEnabled: (o) => Sy[l].some((u) => !!o[u]) };
  (Bg(a), (Ty = !0));
}
function r0() {
  return (k2(), NS());
}
function Q2(a) {
  const l = r0();
  for (const o in a) l[o] = { ...l[o], ...a[o] };
  Bg(l);
}
const Z2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function fo(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    Z2.has(a)
  );
}
let c0 = (a) => !fo(a);
function K2(a) {
  typeof a == "function" && (c0 = (l) => (l.startsWith("on") ? !fo(l) : a(l)));
}
try {
  K2(require("@emotion/is-prop-valid").default);
} catch {}
function J2(a, l, o) {
  const u = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      le(a[c]) ||
      ((c0(c) ||
        (o === !0 && fo(c)) ||
        (!l && !fo(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (u[c] = a[c]));
  return u;
}
const yo = G.createContext({});
function F2(a, l) {
  if (po(a)) {
    const { initial: o, animate: u } = a;
    return {
      initial: o === !1 || Sl(o) ? o : void 0,
      animate: Sl(u) ? u : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function W2(a) {
  const { initial: l, animate: o } = F2(a, G.useContext(yo));
  return G.useMemo(() => ({ initial: l, animate: o }), [Ay(l), Ay(o)]);
}
function Ay(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const af = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function f0(a, l, o) {
  for (const u in l) !le(l[u]) && !kg(u, o) && (a[u] = l[u]);
}
function P2({ transformTemplate: a }, l) {
  return G.useMemo(() => {
    const o = af();
    return (tf(o, l, a), Object.assign({}, o.vars, o.style));
  }, [l]);
}
function $2(a, l) {
  const o = a.style || {},
    u = {};
  return (f0(u, o, a), Object.assign(u, P2(a, l)), u);
}
function I2(a, l) {
  const o = {},
    u = $2(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((o.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none"),
      (u.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (o.tabIndex = 0),
    (o.style = u),
    o
  );
}
const h0 = () => ({ ...af(), attrs: {} });
function tT(a, l, o, u) {
  const c = G.useMemo(() => {
    const d = h0();
    return (
      Qg(d, l, Kg(u), a.transformTemplate, a.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (a.style) {
    const d = {};
    (f0(d, a.style, a), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const eT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function lf(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(eT.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function nT(a, l, o, { latestValues: u }, c, d = !1, h) {
  const g = ((h ?? lf(a)) ? tT : I2)(l, u, c, a),
    p = J2(l, typeof a == "string", d),
    v = a !== G.Fragment ? { ...p, ...g, ref: o } : {},
    { children: b } = l,
    S = G.useMemo(() => (le(b) ? b.get() : b), [b]);
  return G.createElement(a, { ...v, children: S });
}
function aT({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, u, c) {
  return { latestValues: iT(o, u, c, a), renderState: l() };
}
function iT(a, l, o, u) {
  const c = {},
    d = u(a, {});
  for (const S in d) c[S] = eo(d[S]);
  let { initial: h, animate: m } = a;
  const g = po(a),
    p = _g(a);
  l &&
    p &&
    !g &&
    a.inherit !== !1 &&
    (h === void 0 && (h = l.initial), m === void 0 && (m = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || h === !1;
  const b = v ? m : h;
  if (b && typeof b != "boolean" && !mo(b)) {
    const S = Array.isArray(b) ? b : [b];
    for (let w = 0; w < S.length; w++) {
      const z = Zc(a, S[w]);
      if (z) {
        const { transitionEnd: B, transition: H, ...L } = z;
        for (const Y in L) {
          let q = L[Y];
          if (Array.isArray(q)) {
            const X = v ? q.length - 1 : 0;
            q = q[X];
          }
          q !== null && (c[Y] = q);
        }
        for (const Y in B) c[Y] = B[Y];
      }
    }
  }
  return c;
}
const d0 = (a) => (l, o) => {
    const u = G.useContext(yo),
      c = G.useContext(ho),
      d = () => aT(a, l, u, c);
    return o ? d() : jc(d);
  },
  lT = d0({ scrapeMotionValuesFromProps: ef, createRenderState: af }),
  sT = d0({ scrapeMotionValuesFromProps: Jg, createRenderState: h0 }),
  oT = Symbol.for("motionComponentSymbol");
function uT(a, l, o) {
  const u = G.useRef(o);
  G.useInsertionEffect(() => {
    u.current = o;
  });
  const c = G.useRef(null);
  return G.useCallback(
    (d) => {
      var m;
      d && ((m = a.onMount) == null || m.call(a, d));
      const h = u.current;
      if (typeof h == "function")
        if (d) {
          const g = h(d);
          typeof g == "function" && (c.current = g);
        } else c.current ? (c.current(), (c.current = null)) : h(d);
      else h && (h.current = d);
      l && (d ? l.mount(d) : l.unmount());
    },
    [l],
  );
}
const m0 = G.createContext({});
function oi(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function rT(a, l, o, u, c, d) {
  var q, X;
  const { visualElement: h } = G.useContext(yo),
    m = G.useContext(u0),
    g = G.useContext(ho),
    p = G.useContext(nf),
    v = p.reducedMotion,
    b = p.skipAnimations,
    S = G.useRef(null),
    w = G.useRef(!1);
  ((u = u || m.renderer),
    !S.current &&
      u &&
      ((S.current = u(a, {
        visualState: l,
        parent: h,
        props: o,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: b,
        isSVG: d,
      })),
      w.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const z = S.current,
    B = G.useContext(m0);
  z &&
    !z.projection &&
    c &&
    (z.type === "html" || z.type === "svg") &&
    cT(S.current, o, c, B);
  const H = G.useRef(!1);
  G.useInsertionEffect(() => {
    z && H.current && z.update(o, g);
  });
  const L = o[Tg],
    Y = G.useRef(
      !!L &&
        typeof window < "u" &&
        !((q = window.MotionHandoffIsComplete) != null && q.call(window, L)) &&
        ((X = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : X.call(window, L)),
    );
  return (
    _y(() => {
      ((w.current = !0),
        z &&
          ((H.current = !0),
          (window.MotionIsMounted = !0),
          z.updateFeatures(),
          z.scheduleRenderMicrotask(),
          Y.current && z.animationState && z.animationState.animateChanges()));
    }),
    G.useEffect(() => {
      z &&
        (!Y.current && z.animationState && z.animationState.animateChanges(),
        Y.current &&
          (queueMicrotask(() => {
            var F;
            (F = window.MotionHandoffMarkAsComplete) == null ||
              F.call(window, L);
          }),
          (Y.current = !1)),
        (z.enteringChildren = void 0));
    }),
    z
  );
}
function cT(a, l, o, u) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: m,
    layoutScroll: g,
    layoutRoot: p,
    layoutCrossfade: v,
  } = l;
  ((a.projection = new o(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : p0(a.parent),
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (m && oi(m)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: u,
      crossfade: v,
      layoutScroll: g,
      layoutRoot: p,
    }));
}
function p0(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : p0(a.parent);
}
function $r(a, { forwardMotionProps: l = !1, type: o } = {}, u, c) {
  u && Q2(u);
  const d = o ? o === "svg" : lf(a),
    h = d ? sT : lT;
  function m(p, v) {
    let b;
    const S = { ...G.useContext(nf), ...p, layoutId: fT(p) },
      { isStatic: w } = S,
      z = W2(p),
      B = h(p, w);
    if (!w && typeof window < "u") {
      hT();
      const H = dT(S);
      ((b = H.MeasureLayout),
        (z.visualElement = rT(a, B, S, c, H.ProjectionNode, d)));
    }
    return x.jsxs(yo.Provider, {
      value: z,
      children: [
        b && z.visualElement
          ? x.jsx(b, { visualElement: z.visualElement, ...S })
          : null,
        nT(a, p, uT(B, z.visualElement, v), B, w, l, d),
      ],
    });
  }
  m.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const g = G.forwardRef(m);
  return ((g[oT] = a), g);
}
function fT({ layoutId: a }) {
  const l = G.useContext(wc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function hT(a, l) {
  G.useContext(u0).strict;
}
function dT(a) {
  const l = r0(),
    { drag: o, layout: u } = l;
  if (!o && !u) return {};
  const c = { ...o, ...u };
  return {
    MeasureLayout:
      (o != null && o.isEnabled(a)) || (u != null && u.isEnabled(a))
        ? c.MeasureLayout
        : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function mT(a, l) {
  if (typeof Proxy > "u") return $r;
  const o = new Map(),
    u = (d, h) => $r(d, h, a, l),
    c = (d, h) => u(d, h);
  return new Proxy(c, {
    get: (d, h) =>
      h === "create"
        ? u
        : (o.has(h) || o.set(h, $r(h, void 0, a, l)), o.get(h)),
  });
}
const pT = (a, l) =>
  (l.isSVG ?? lf(a))
    ? new KS(l)
    : new YS(l, { allowProjection: a !== G.Fragment });
class yT extends Pn {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = $S(l)));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    mo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    (this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this));
  }
}
let gT = 0;
class vT extends Pn {
  constructor() {
    (super(...arguments), (this.id = gT++), (this.isExitComplete = !1));
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === u) return;
    if (l && u === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: m } = this.node.getProps();
        if (typeof h == "string") {
          const g = Ta(this.node, h, m);
          if (g) {
            const { transition: p, transitionEnd: v, ...b } = g;
            for (const S in b)
              (d = this.node.getValue(S)) == null || d.jump(b[S]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        ((this.isExitComplete = !0), o(this.id));
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), l && (this.unmount = l(this.id)));
  }
  unmount() {}
}
const bT = { animation: { Feature: yT }, exit: { Feature: vT } };
function Dl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const xT = (a) => (l) => Wc(l) && a(l, Dl(l));
function vl(a, l, o, u) {
  return Tl(a, l, xT(o), u);
}
const y0 = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  Ey = (a, l) => Math.abs(a - l);
function ST(a, l) {
  const o = Ey(a.x, l.x),
    u = Ey(a.y, l.y);
  return Math.sqrt(o ** 2 + u ** 2);
}
const My = new Set(["auto", "scroll"]);
class g0 {
  constructor(
    l,
    o,
    {
      transformPagePoint: u,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: h = 3,
      element: m,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (w) => {
        this.handleScroll(w.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Js(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const w = Ir(this.lastMoveEventInfo, this.history),
          z = this.startEvent !== null,
          B = ST(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!z && !B) return;
        const { point: H } = w,
          { timestamp: L } = ie;
        this.history.push({ ...H, timestamp: L });
        const { onStart: Y, onMove: q } = this.handlers;
        (z ||
          (Y && Y(this.lastMoveEvent, w),
          (this.startEvent = this.lastMoveEvent)),
          q && q(this.lastMoveEvent, w));
      }),
      (this.handlePointerMove = (w, z) => {
        ((this.lastMoveEvent = w),
          (this.lastRawMoveEventInfo = z),
          (this.lastMoveEventInfo = Js(z, this.transformPagePoint)),
          jt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (w, z) => {
        this.end();
        const { onEnd: B, onSessionEnd: H, resumeAnimation: L } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && L && L(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const Y = Ir(
          w.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Js(z, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && B && B(w, Y), H && H(w, Y));
      }),
      !Wc(l))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = u),
      (this.distanceThreshold = h),
      (this.contextWindow = c || window));
    const g = Dl(l),
      p = Js(g, this.transformPagePoint),
      { point: v } = p,
      { timestamp: b } = ie;
    this.history = [{ ...v, timestamp: b }];
    const { onSessionStart: S } = o;
    (S && S(l, Ir(p, this.history)),
      (this.removeListeners = Al(
        vl(this.contextWindow, "pointermove", this.handlePointerMove),
        vl(this.contextWindow, "pointerup", this.handlePointerUp),
        vl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      m && this.startScrollTracking(m));
  }
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const u = getComputedStyle(o);
      ((My.has(u.overflowX) || My.has(u.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o) return;
    const u = l === window,
      c = u
        ? { x: window.scrollX, y: window.scrollY }
        : { x: l.scrollLeft, y: l.scrollTop },
      d = { x: c.x - o.x, y: c.y - o.y };
    (d.x === 0 && d.y === 0) ||
      (u
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x),
          (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(l, c),
      jt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Wn(this.updatePoint));
  }
}
function Js(a, l) {
  return l ? { point: l(a.point) } : a;
}
function Dy(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Ir({ point: a }, l) {
  return {
    point: a,
    delta: Dy(a, v0(l)),
    offset: Dy(a, TT(l)),
    velocity: AT(l, 0.1),
  };
}
function TT(a) {
  return a[0];
}
function v0(a) {
  return a[a.length - 1];
}
function AT(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let o = a.length - 1,
    u = null;
  const c = v0(a);
  for (; o >= 0 && ((u = a[o]), !(c.timestamp - u.timestamp > we(l))); ) o--;
  if (!u) return { x: 0, y: 0 };
  u === a[0] &&
    a.length > 2 &&
    c.timestamp - u.timestamp > we(l) * 2 &&
    (u = a[1]);
  const d = He(c.timestamp - u.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - u.x) / d, y: (c.y - u.y) / d };
  return (h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h);
}
function ET(a, { min: l, max: o }, u) {
  return (
    l !== void 0 && a < l
      ? (a = u ? Rt(l, a, u.min) : Math.max(a, l))
      : o !== void 0 && a > o && (a = u ? Rt(o, a, u.max) : Math.min(a, o)),
    a
  );
}
function Cy(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0,
  };
}
function MT(a, { top: l, left: o, bottom: u, right: c }) {
  return { x: Cy(a.x, o, c), y: Cy(a.y, l, u) };
}
function wy(a, l) {
  let o = l.min - a.min,
    u = l.max - a.max;
  return (
    l.max - l.min < a.max - a.min && ([o, u] = [u, o]),
    { min: o, max: u }
  );
}
function DT(a, l) {
  return { x: wy(a.x, l.x), y: wy(a.y, l.y) };
}
function CT(a, l) {
  let o = 0.5;
  const u = ce(a),
    c = ce(l);
  return (
    c > u
      ? (o = bl(l.min, l.max - u, a.min))
      : u > c && (o = bl(a.min, a.max - c, l.min)),
    tn(0, 1, o)
  );
}
function wT(a, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - a.min),
    l.max !== void 0 && (o.max = l.max - a.min),
    o
  );
}
const Mc = 0.35;
function jT(a = Mc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Mc),
    { x: jy(a, "left", "right"), y: jy(a, "top", "bottom") }
  );
}
function jy(a, l, o) {
  return { min: Ny(a, l), max: Ny(a, o) };
}
function Ny(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const NT = new WeakMap();
class zT {
  constructor(l) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ft()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l));
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (b) => {
        (o && this.snapToCursor(Dl(b).point), this.stopAnimation());
      },
      h = (b, S) => {
        const { drag: w, dragPropagation: z, onDragStart: B } = this.getProps();
        if (
          w &&
          !z &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = sS(w)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          $e((L) => {
            let Y = this.getAxisMotionValue(L).get() || 0;
            if (Ie.test(Y)) {
              const { projection: q } = this.visualElement;
              if (q && q.layout) {
                const X = q.layout.layoutBox[L];
                X && (Y = ce(X) * (parseFloat(Y) / 100));
              }
            }
            this.originPoint[L] = Y;
          }),
          B && jt.update(() => B(b, S), !1, !0),
          yc(this.visualElement, "transform"));
        const { animationState: H } = this.visualElement;
        H && H.setActive("whileDrag", !0);
      },
      m = (b, S) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = S));
        const {
          dragPropagation: w,
          dragDirectionLock: z,
          onDirectionLock: B,
          onDrag: H,
        } = this.getProps();
        if (!w && !this.openDragLock) return;
        const { offset: L } = S;
        if (z && this.currentDirection === null) {
          ((this.currentDirection = RT(L)),
            this.currentDirection !== null && B && B(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, L),
          this.updateAxis("y", S.point, L),
          this.visualElement.render(),
          H && jt.update(() => H(b, S), !1, !0));
      },
      g = (b, S) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          this.stop(b, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      p = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new g0(
      l,
      {
        onSessionStart: d,
        onStart: h,
        onMove: m,
        onSessionEnd: g,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: u,
        contextWindow: y0(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(l, o) {
    const u = l || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !u)) return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: m } = this.getProps();
    m && jt.postRender(() => m(u, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    (l && (l.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: u } = this.getProps();
    (!u &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(l, o, u) {
    const { drag: c } = this.getProps();
    if (!u || !Fs(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + u[l];
    (this.constraints &&
      this.constraints[l] &&
      (h = ET(h, this.constraints[l], this.elastic[l])),
      d.set(h));
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      u =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      c = this.constraints;
    (l && oi(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && u
        ? (this.constraints = MT(u.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = jT(o)),
      c !== this.constraints &&
        !oi(l) &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $e((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = wT(u.layoutBox[h], this.constraints[h]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !oi(l)) return !1;
    const u = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = _S(u, c.root, this.visualElement.getTransformPagePoint());
    let h = DT(c.layout.layoutBox, d);
    if (o) {
      const m = o(OS(h));
      ((this.hasMutatedConstraints = !!m), m && (h = Hg(m)));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: u,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: m,
      } = this.getProps(),
      g = this.constraints || {},
      p = $e((v) => {
        if (!Fs(v, o, this.currentDirection)) return;
        let b = (g && g[v]) || {};
        (h === !0 || h === v) && (b = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          w = c ? 40 : 1e7,
          z = {
            type: "inertia",
            velocity: u ? l[v] : 0,
            bounceStiffness: S,
            bounceDamping: w,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...b,
          };
        return this.startAxisValueAnimation(v, z);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(l, o) {
    const u = this.getAxisMotionValue(l);
    return (
      yc(this.visualElement, l),
      u.start(Qc(l, u, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    $e((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      u = this.visualElement.getProps(),
      c = u[o];
    return (
      c ||
      this.visualElement.getValue(l, (u.initial ? u.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    $e((o) => {
      const { drag: u } = this.getProps();
      if (!Fs(o, u, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: h, max: m } = c.layout.layoutBox[o],
          g = d.get() || 0;
        d.set(l[o] - Rt(h, m, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: u } = this.visualElement;
    if (!oi(o) || !u || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $e((h) => {
      const m = this.getAxisMotionValue(h);
      if (m && this.constraints !== !1) {
        const g = m.get();
        c[h] = CT({ min: g, max: g }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      u.root && u.root.updateScroll(),
      u.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      $e((h) => {
        if (!Fs(h, l, null)) return;
        const m = this.getAxisMotionValue(h),
          { min: g, max: p } = this.constraints[h];
        m.set(Rt(g, p, c[h]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    NT.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = vl(l, "pointerdown", (p) => {
        const { drag: v, dragListener: b = !0 } = this.getProps(),
          S = p.target,
          w = S !== l && hS(S);
        v && b && !w && this.start(p);
      });
    let u;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        oi(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          u ||
            (u = OT(l, p.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: d } = this.visualElement,
      h = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
      jt.read(c));
    const m = Tl(window, "resize", () => this.scalePositionWithinConstraints()),
      g = d.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: v }) => {
          this.isDragging &&
            v &&
            ($e((b) => {
              const S = this.getAxisMotionValue(b);
              S &&
                ((this.originPoint[b] += p[b].translate),
                S.set(S.get() + p[b].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (m(), o(), h(), g && g(), u && u());
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: u = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = Mc,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: m,
    };
  }
}
function zy(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function OT(a, l, o) {
  const u = Lp(a, zy(o)),
    c = Lp(l, zy(o));
  return () => {
    (u(), c());
  };
}
function Fs(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function RT(a, l = 10) {
  let o = null;
  return (Math.abs(a.y) > l ? (o = "y") : Math.abs(a.x) > l && (o = "x"), o);
}
class VT extends Pn {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = qe),
      (this.removeListeners = qe),
      (this.controls = new zT(l)));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    (l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || qe));
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    l !== o &&
      (this.removeGroupControls(),
      l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const tc = (a) => (l, o) => {
  a && jt.update(() => a(l, o), !1, !0);
};
class _T extends Pn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = qe));
  }
  onPointerDown(l) {
    this.session = new g0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: y0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: o,
      onPan: u,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: tc(l),
      onStart: tc(o),
      onMove: tc(u),
      onEnd: (d, h) => {
        (delete this.session, c && jt.postRender(() => c(d, h)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = vl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let ec = !1;
class UT extends G.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: u,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    (d &&
      (o.group && o.group.add(d),
      u && u.register && c && u.register(d),
      ec && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (no.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: o,
        visualElement: u,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: h } = u;
    return (
      h &&
        ((h.isPresent = d),
        l.layoutDependency !== o &&
          h.setOptions({ ...h.options, layoutDependency: o }),
        (ec = !0),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              jt.postRender(() => {
                const m = h.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      Fc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: u,
      } = this.props,
      { projection: c } = l;
    ((ec = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        u && u.deregister && u.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function b0(a) {
  const [l, o] = o0(),
    u = G.useContext(wc);
  return x.jsx(UT, {
    ...a,
    layoutGroup: u,
    switchLayoutGroup: G.useContext(m0),
    isPresent: l,
    safeToRemove: o,
  });
}
const BT = {
  pan: { Feature: _T },
  drag: { Feature: VT, ProjectionNode: s0, MeasureLayout: b0 },
};
function Oy(a, l, o) {
  const { props: u } = a;
  a.animationState &&
    u.whileHover &&
    a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = u[c];
  d && jt.postRender(() => d(l, Dl(l)));
}
class LT extends Pn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = uS(
        l,
        (o, u) => (Oy(this.node, u, "Start"), (c) => Oy(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class HT extends Pn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Al(
      Tl(this.node.current, "focus", () => this.onFocus()),
      Tl(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Ry(a, l, o) {
  const { props: u } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    u.whileTap &&
    a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = u[c];
  d && jt.postRender(() => d(l, Dl(l)));
}
class qT extends Pn {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: o, propagate: u } = this.node.props;
    this.unmount = mS(
      l,
      (c, d) => (
        Ry(this.node, d, "Start"),
        (h, { success: m }) => Ry(this.node, h, m ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: o,
        stopPropagation: (u == null ? void 0 : u.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Dc = new WeakMap(),
  nc = new WeakMap(),
  YT = (a) => {
    const l = Dc.get(a.target);
    l && l(a);
  },
  GT = (a) => {
    a.forEach(YT);
  };
function XT({ root: a, ...l }) {
  const o = a || document;
  nc.has(o) || nc.set(o, {});
  const u = nc.get(o),
    c = JSON.stringify(l);
  return (
    u[c] || (u[c] = new IntersectionObserver(GT, { root: a, ...l })),
    u[c]
  );
}
function kT(a, l, o) {
  const u = XT(l);
  return (
    Dc.set(a, o),
    u.observe(a),
    () => {
      (Dc.delete(a), u.unobserve(a));
    }
  );
}
const QT = { some: 0, all: 1 };
class ZT extends Pn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: u, amount: c = "some", once: d } = l,
      h = {
        root: o ? o.current : void 0,
        rootMargin: u,
        threshold: typeof c == "number" ? c : QT[c],
      },
      m = (g) => {
        const { isIntersecting: p } = g;
        if (
          this.isInView === p ||
          ((this.isInView = p), d && !p && this.hasEnteredView)
        )
          return;
        (p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p));
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          S = p ? v : b;
        S && S(g);
      };
    return kT(this.node.current, h, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(KT(l, o)) && this.startObserver();
  }
  unmount() {}
}
function KT({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const JT = {
    inView: { Feature: ZT },
    tap: { Feature: qT },
    focus: { Feature: HT },
    hover: { Feature: LT },
  },
  FT = { layout: { ProjectionNode: s0, MeasureLayout: b0 } },
  WT = { ...bT, ...JT, ...BT, ...FT },
  Ze = mT(WT, pT);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PT = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $T = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, u) =>
      u ? u.toUpperCase() : o.toLowerCase(),
    ),
  Vy = (a) => {
    const l = $T(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  x0 = (...a) =>
    a
      .filter((l, o, u) => !!l && l.trim() !== "" && u.indexOf(l) === o)
      .join(" ")
      .trim(),
  IT = (a) => {
    for (const l in a)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var tA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eA = G.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: u,
      className: c = "",
      children: d,
      iconNode: h,
      ...m
    },
    g,
  ) =>
    G.createElement(
      "svg",
      {
        ref: g,
        ...tA,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: u ? (Number(o) * 24) / Number(l) : o,
        className: x0("lucide", c),
        ...(!d && !IT(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...h.map(([p, v]) => G.createElement(p, v)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const en = (a, l) => {
  const o = G.forwardRef(({ className: u, ...c }, d) =>
    G.createElement(eA, {
      ref: d,
      iconNode: l,
      className: x0(`lucide-${PT(Vy(a))}`, `lucide-${a}`, u),
      ...c,
    }),
  );
  return ((o.displayName = Vy(a)), o);
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  sf = en("arrow-right", nA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aA = [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg",
      },
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
  ],
  iA = en("camera", aA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lA = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  sA = en("chevron-down", lA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oA = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  uA = en("heart", oA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rA = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  cA = en("image", rA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fA = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  S0 = en("message-circle", fA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hA = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  dA = en("minus", hA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mA = [
    [
      "path",
      {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
        key: "nt11vn",
      },
    ],
    [
      "path",
      {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
        key: "15qc1e",
      },
    ],
    ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
    ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }],
  ],
  pA = en("pen-tool", mA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  gA = en("plus", yA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vA = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ],
  bA = en("video", vA),
  Bt = ({ children: a, delay: l = 0, className: o = "" }) =>
    x.jsx(Ze.div, {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, margin: "-100px" },
      transition: { duration: 0.8, delay: l, ease: [0.21, 0.47, 0.32, 0.98] },
      className: o,
      children: a,
    });
function xA() {
  return x.jsxs("section", {
    className:
      "relative h-screen w-full overflow-hidden flex items-center justify-center",
    children: [
      x.jsxs("div", {
        className:
          "absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black",
        children: [
          x.jsx("iframe", {
            src: "https://player.vimeo.com/video/1173190488?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1#t=3s",
            className:
              "absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-60",
            allow: "autoplay; fullscreen",
            frameBorder: "0",
          }),
          x.jsx("div", { className: "absolute inset-0 bg-black/30" }),
        ],
      }),
      x.jsxs("div", {
        className:
          "relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center pt-24 md:pt-0",
        children: [
          x.jsxs(Ze.h1, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.2 },
            className:
              "text-4xl sm:text-5xl md:text-[83px] leading-tight md:leading-[93px] font-serif mb-6",
            children: [
              "Destination Wedding ",
              x.jsx("br", { className: "hidden md:block" }),
              x.jsx("span", {
                className: "italic",
                children: "Photo & Video in Portugal",
              }),
            ],
          }),
          x.jsx(Ze.p, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.6 },
            className:
              "text-sm md:text-base tracking-widest uppercase font-sans mb-12 max-w-2xl text-white/90 leading-relaxed",
            children:
              "Editorial storytelling with Photography, Videography & Aerial Drone coverage for couples traveling from around the world.",
          }),
          x.jsxs(Ze.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 1 },
            className: "flex flex-col sm:flex-row items-center gap-6",
            children: [
              x.jsx("a", {
                href: "#contact",
                className:
                  "bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300",
                children: "Check Your Wedding Date",
              }),
              x.jsx("a", {
                href: "#galleries",
                className:
                  "text-white border-b border-white/30 pb-1 text-xs tracking-[0.2em] uppercase hover:border-white transition-colors duration-300",
                children: "View Our Work",
              }),
            ],
          }),
        ],
      }),
      x.jsxs(Ze.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 1.5 },
        className:
          "absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 z-20",
        children: [
          x.jsx("span", {
            className: "text-[10px] uppercase tracking-widest",
            children: "Scroll",
          }),
          x.jsx(sA, { className: "w-4 h-4 animate-bounce" }),
        ],
      }),
    ],
  });
}
function SA() {
  return x.jsx("section", {
    className: "py-24 md:py-40 px-6 max-w-7xl mx-auto",
    children: x.jsxs("div", {
      className:
        "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center",
      children: [
        x.jsx(Bt, {
          children: x.jsx("div", {
            className: "aspect-[3/4] overflow-hidden",
            children: x.jsx("img", {
              src: "https://bhweddingphoto.com/wp-content/uploads/2026/01/SP-KC-39.jpg",
              alt: "Emotional wedding moment",
              className:
                "w-full h-full object-cover hover:scale-105 transition-transform duration-1000",
              referrerPolicy: "no-referrer",
            }),
          }),
        }),
        x.jsxs("div", {
          className: "flex flex-col justify-center",
          children: [
            x.jsx(Bt, {
              children: x.jsxs("h2", {
                className:
                  "text-4xl md:text-5xl font-serif mb-10 leading-tight",
                children: [
                  "Wherever your wedding takes place,",
                  x.jsx("span", {
                    className: "italic",
                    children: " what matters is how it’s seen",
                  }),
                  "— and how it’s remembered.",
                ],
              }),
            }),
            x.jsxs(Bt, {
              delay: 0.2,
              children: [
                x.jsxs("div", {
                  className:
                    "space-y-6 text-sm md:text-base text-black/70 font-light leading-relaxed mb-12",
                  children: [
                    x.jsx("p", {
                      children:
                        "Planning a destination wedding is exciting, but it also comes with uncertainty.",
                    }),
                    x.jsxs("ul", {
                      className:
                        "space-y-2 font-serif font-bold text-[1.1em] text-black/90",
                      children: [
                        x.jsx("li", { children: "Different cultures." }),
                        x.jsx("li", { children: "New places." }),
                        x.jsx("li", {
                          children: "Real moments, as they naturally happen.",
                        }),
                      ],
                    }),
                    x.jsx("p", {
                      children:
                        "At BH Wedding Photo, we document weddings in Portugal and across the world, following each story with a calm, observant and editorial approach.",
                    }),
                    x.jsx("p", {
                      children:
                        "Our focus is not on staging moments, but on capturing them as they are.",
                    }),
                    x.jsx("p", {
                      className: "font-medium text-black",
                      children:
                        "So that, years from now, you don’t just see your day — you feel it.",
                    }),
                  ],
                }),
                x.jsxs("a", {
                  href: "#contact",
                  className:
                    "inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-2 hover:border-black transition-colors duration-300",
                  children: [
                    "Schedule a Discovery Call ",
                    x.jsx(sf, { className: "w-4 h-4" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function TA() {
  return x.jsx("section", {
    className: "py-24 md:py-32 px-6 max-w-7xl mx-auto",
    children: x.jsxs("div", {
      className:
        "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center",
      children: [
        x.jsxs("div", {
          className: "order-2 md:order-1 flex flex-col justify-center",
          children: [
            x.jsxs(Bt, {
              children: [
                x.jsx("p", {
                  className:
                    "text-[10px] tracking-widest uppercase text-black/40 mb-6",
                  children: "The Photographers",
                }),
                x.jsxs("h2", {
                  className:
                    "text-4xl md:text-5xl font-serif mb-10 leading-tight",
                  children: [
                    "Meet the faces behind ",
                    x.jsx("br", { className: "hidden md:block" }),
                    x.jsx("span", {
                      className: "italic",
                      children: "BH Wedding Photo",
                    }),
                  ],
                }),
              ],
            }),
            x.jsxs(Bt, {
              delay: 0.2,
              children: [
                x.jsxs("div", {
                  className:
                    "space-y-6 text-sm md:text-base text-black/70 font-light leading-relaxed mb-12",
                  children: [
                    x.jsx("p", {
                      children:
                        "We are passionate about telling authentic stories through an editorial lens. With years of experience photographing couples across Portugal and Europe, we blend documentary honesty with timeless elegance.",
                    }),
                    x.jsx("p", {
                      children:
                        "Our approach is calm, unobtrusive, and deeply focused on the connection between you and your loved ones. We believe the best images happen when you are truly present in the moment.",
                    }),
                  ],
                }),
                x.jsxs("a", {
                  href: "#galleries",
                  className:
                    "inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-2 hover:border-black transition-colors duration-300",
                  children: [
                    "View Our Portfolio ",
                    x.jsx(sf, { className: "w-4 h-4" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        x.jsx(Bt, {
          className: "order-1 md:order-2",
          children: x.jsx("div", {
            className: "aspect-[4/5] overflow-hidden",
            children: x.jsx("img", {
              src: "https://bhweddingphoto.com/wp-content/uploads/2026/02/bhweddingphoto-home.jpg",
              alt: "BH Wedding Photo - Meet the Photographers",
              className:
                "w-full h-full object-cover hover:scale-105 transition-transform duration-1000",
              referrerPolicy: "no-referrer",
            }),
          }),
        }),
      ],
    }),
  });
}
function AA() {
  const a = [
    {
      title: "Human Connection",
      desc: "We believe the best images come from trust, presence, and genuine connection — allowing you to feel completely at ease throughout your day.",
    },
    {
      title: "Photo, Video & Drone",
      desc: "Comprehensive coverage of your day with photography, cinematic videography, and stunning aerial drone footage.",
    },
    {
      title: "Editorial + Documentary Style",
      desc: "Elegant imagery inspired by fashion editorials while preserving authentic emotions.",
    },
    {
      title: "Seamless Communication",
      desc: "Planning a wedding abroad becomes easier when your photographer understands your expectations.",
    },
  ];
  return x.jsx("section", {
    className: "py-24 md:py-32 bg-white px-6",
    children: x.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        x.jsx(Bt, {
          children: x.jsxs("h2", {
            className: "text-3xl md:text-5xl font-serif text-center mb-20",
            children: [
              "Why International Couples ",
              x.jsx("br", { className: "hidden md:block" }),
              x.jsx("span", {
                className: "italic",
                children: "Choose BH Wedding Photo",
              }),
            ],
          }),
        }),
        x.jsx("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20",
          children: a.map((l, o) =>
            x.jsx(
              Bt,
              {
                delay: o * 0.1,
                children: x.jsxs("div", {
                  className: "flex flex-col border-t border-black/10 pt-6",
                  children: [
                    x.jsxs("span", {
                      className: "text-[10px] text-black/40 mb-4 font-mono",
                      children: ["0", o + 1],
                    }),
                    x.jsx("h3", {
                      className: "text-lg font-serif mb-4",
                      children: l.title,
                    }),
                    x.jsx("p", {
                      className:
                        "text-sm text-black/60 font-light leading-relaxed",
                      children: l.desc,
                    }),
                  ],
                }),
              },
              o,
            ),
          ),
        }),
        x.jsx(Bt, {
          delay: 0.4,
          className: "flex justify-center",
          children: x.jsx("a", {
            href: "#contact",
            className:
              "border border-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300",
            children: "Inquire About Your Wedding",
          }),
        }),
      ],
    }),
  });
}
function EA() {
  G.useEffect(() => {
    const o = document.createElement("script");
    return (
      (o.src =
        "https://embedding.pic-time.com/pictures/scripts/compiled/artgalleryembed.js"),
      (o.async = !0),
      document.body.appendChild(o),
      () => {
        document.body.removeChild(o);
      }
    );
  }, []);
  const a = [
      {
        name: "Andreia & José",
        link: "https://bhweddingphoto.com/andreia-jose/",
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Sruti & Srijith",
        link: "https://bhweddingphoto.com/sruti-srijith/",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Francisca & Inês",
        link: "https://bhweddingphoto.com/francisca-ines/",
        img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Gloria & Patrick",
        link: "https://bhweddingphoto.com/gloria-patrick/",
        img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Cindy & David",
        link: "https://bhweddingphoto.com/cindy-david/",
        img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Alicia & Sebastien",
        link: "https://bhweddingphoto.com/alicia-sebastien-2/",
        img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Diana João & Luís",
        link: "https://bhweddingphoto.com/diana-luis/",
        img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
      },
    ],
    l = [
      "https://bhphotosessions.pic-time.com/-carol5031/featuredvideo/433184?videoview=AAAAAI0AAAAcy4Ge4DyTNaCqnEOxuHOCe5U7tojDQi7mr2doj9s,&transparentbg=true",
      "https://bhphotosessions.pic-time.com/-lauramarco/featuredvideo/419445?videoview=AAAAAKIAAADoVH-N6fQSk_YjQpTmv5Qtf0qK19ybI00eUsehr5M,&transparentbg=true",
      "https://bhphotosessions.pic-time.com/-sandrasimon/featuredvideo/483292?videoview=AAAAAOgAAAD_J6aE1Npp4zx6udqm2LuP07fwtov8S4kWwaZpF2w,&transparentbg=true",
      "https://bhphotosessions.pic-time.com/-karinaepedro/featuredvideo/491113?videoview=AAAAAH8AAADSmEcvabFli5mnN2hiNlcO8W1BHyr6QJBXEr1-wAA,&transparentbg=true",
      "https://bhphotosessions.pic-time.com/-renata6sergio/featuredvideo/598095?videoview=AAAAABYBAABwfblCEJwt8VzYnSoei6Vpe51KDnDUfQCdYU8GU4o,&transparentbg=true",
      "https://bhphotosessions.pic-time.com/-claudiafabio/featuredvideo/391947?videoview=AAAAADUAAAA1yucMPC-aJSixAhtM7Upbr5vMwqc0tGdr82zLBsM,&transparentbg=true",
    ];
  return x.jsxs("section", {
    id: "galleries",
    className: "py-24 md:py-40 overflow-hidden",
    children: [
      x.jsx("div", {
        className: "px-6 max-w-7xl mx-auto mb-16",
        children: x.jsx(Bt, {
          children: x.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-end gap-8",
            children: [
              x.jsxs("h2", {
                className: "text-4xl md:text-5xl font-serif",
                children: [
                  "Featured ",
                  x.jsx("span", { className: "italic", children: "Weddings" }),
                ],
              }),
              x.jsx("a", {
                href: "https://bhweddingphoto.com/blog/",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-colors duration-300",
                children: "View All Stories",
              }),
            ],
          }),
        }),
      }),
      x.jsx("div", {
        className:
          "w-full overflow-x-auto md:overflow-hidden mb-32 relative scrollbar-hide snap-x snap-mandatory",
        children: x.jsx("div", {
          className:
            "flex w-max md:animate-marquee hover:[animation-play-state:paused] gap-4 md:gap-6 px-4 md:px-6",
          children: [...a, ...a].map((o, u) =>
            x.jsxs(
              "a",
              {
                href: o.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "relative flex-none w-[80vw] md:w-[45vw] lg:w-[30vw] aspect-[3/2] md:aspect-[4/5] group overflow-hidden rounded-2xl snap-center",
                children: [
                  x.jsx("img", {
                    src: o.img,
                    alt: o.name,
                    className:
                      "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
                  }),
                  x.jsx("div", {
                    className:
                      "absolute inset-0 bg-black/40 md:bg-black/20 md:group-hover:bg-black/50 transition-colors duration-500",
                  }),
                  x.jsxs("div", {
                    className:
                      "absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500",
                    children: [
                      x.jsx("h3", {
                        className:
                          "text-white text-xl md:text-3xl font-serif mb-4 text-center px-4",
                        children: o.name,
                      }),
                      x.jsxs("span", {
                        className:
                          "text-white text-[10px] md:text-xs tracking-[0.2em] uppercase border-b border-white/50 pb-1 flex items-center gap-2",
                        children: [
                          "Ver Galeria ",
                          x.jsx(sf, { className: "w-3 h-3" }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              u,
            ),
          ),
        }),
      }),
      x.jsxs("div", {
        className: "px-6 max-w-7xl mx-auto",
        children: [
          x.jsx(Bt, {
            children: x.jsx("h3", {
              className:
                "text-2xl md:text-3xl font-serif mb-12 text-center italic text-black/80",
              children: "Wedding Films",
            }),
          }),
          x.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10",
            children: l.map((o, u) =>
              x.jsx(
                Bt,
                {
                  delay: u * 0.1,
                  children: x.jsxs("div", {
                    className:
                      "group w-full aspect-video relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-500 bg-black/5",
                    children: [
                      x.jsx("iframe", {
                        src: o,
                        className: "absolute inset-0 w-full h-full border-0",
                        allowFullScreen: !0,
                        allowTransparency: !0,
                      }),
                      x.jsx("div", {
                        className:
                          "absolute inset-0 bg-linear-to-t from-black/60 via-black/25 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                      }),
                      x.jsx("div", {
                        className:
                          "absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                        children: x.jsx("span", {
                          className:
                            "text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]",
                          children: [
                            "Carolina & Filipe",
                            "Laura & Marco",
                            "Sandra & Simon",
                            "Karina & Pedro",
                            "Renata & Sérgio",
                            "Claudia & Fábio",
                          ][u],
                        }),
                      }),
                    ],
                  }),
                },
                u,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function MA() {
  const a = [
    { title: "Inquiry", desc: "Tell us about your wedding plans.", icon: pA },
    {
      title: "Discovery Call",
      desc: "We schedule a video call to understand your vision.",
      icon: bA,
    },
    {
      title: "Tailored Collection",
      desc: "A photography collection adapted to your wedding.",
      icon: iA,
    },
    {
      title: "Wedding Day",
      desc: "We capture every moment naturally and discreetly.",
      icon: uA,
    },
    {
      title: "Gallery Delivery",
      desc: "You receive a curated gallery with timeless memories.",
      icon: cA,
    },
  ];
  return x.jsx("section", {
    className: "py-24 md:py-40 bg-black text-white px-6",
    children: x.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        x.jsx(Bt, {
          children: x.jsxs("h2", {
            className: "text-3xl md:text-5xl font-serif text-center mb-24",
            children: [
              "Our Destination ",
              x.jsx("span", {
                className: "italic",
                children: "Wedding Experience",
              }),
            ],
          }),
        }),
        x.jsxs("div", {
          className: "space-y-16 mb-24 relative",
          children: [
            x.jsx("div", {
              className:
                "absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 md:-translate-x-1/2",
            }),
            a.map((l, o) =>
              x.jsx(
                Bt,
                {
                  delay: o * 0.1,
                  children: x.jsxs("div", {
                    className: `flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${o % 2 === 0 ? "md:flex-row-reverse" : ""}`,
                    children: [
                      x.jsxs("div", {
                        className: `flex-1 w-full pl-12 md:pl-0 ${o % 2 === 0 ? "md:text-left" : "md:text-right"}`,
                        children: [
                          x.jsxs("span", {
                            className:
                              "text-[10px] text-white/40 font-mono mb-2 block",
                            children: ["STEP 0", o + 1],
                          }),
                          x.jsx("h3", {
                            className: "text-xl font-serif mb-3",
                            children: l.title,
                          }),
                          x.jsx("p", {
                            className: "text-sm text-white/60 font-light",
                            children: l.desc,
                          }),
                        ],
                      }),
                      x.jsx("div", {
                        className:
                          "absolute left-0 md:relative md:left-auto w-8 h-8 rounded-full bg-black border border-white/30 flex items-center justify-center z-10",
                        children: x.jsx(Ze.div, {
                          initial: { scale: 0, rotate: -45 },
                          whileInView: { scale: 1, rotate: 0 },
                          viewport: { once: !0 },
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                            delay: o * 0.1 + 0.3,
                          },
                          children: x.jsx(l.icon, {
                            className: "w-4 h-4 text-white/80",
                            strokeWidth: 1.5,
                          }),
                        }),
                      }),
                      x.jsx("div", { className: "hidden md:block flex-1" }),
                    ],
                  }),
                },
                o,
              ),
            ),
          ],
        }),
        x.jsx(Bt, {
          className: "flex justify-center",
          children: x.jsx("a", {
            href: "#contact",
            className:
              "bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300",
            children: "Check Availability",
          }),
        }),
      ],
    }),
  });
}
function DA() {
  const [a, l] = G.useState(0),
    o = [
      {
        name: "Sarah & Michael",
        country: "United States",
        text: "Choosing BH for our destination wedding in the Algarve was the best decision we made. They captured the light and our love perfectly. Even planning from across the Atlantic, they made us feel completely at ease. The final gallery exceeded all our expectations!",
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=150&auto=format&fit=crop",
      },
      {
        name: "Alicia & Sebastien",
        country: "France",
        text: "We don't live in the same country, we don't speak the same language, and yet, while looking for a photography style that resembles us, I came across their page and it was obvious. The photos received a few weeks later are magnificent! Thank you BH Wedding Photography.",
        img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=150&auto=format&fit=crop",
      },
      {
        name: "Emma & James",
        country: "United Kingdom",
        text: "The editorial style of their photography is simply breathtaking. They managed to capture the essence of our celebration in Porto with such elegance and authenticity. They were a calming presence throughout the day, and the video brings us to tears every time we watch it.",
        img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=150&auto=format&fit=crop",
      },
    ];
  return (
    G.useEffect(() => {
      const u = setInterval(() => {
        l((c) => (c + 1) % o.length);
      }, 6e3);
      return () => clearInterval(u);
    }, [o.length]),
    x.jsx("section", {
      className: "py-24 md:py-40 px-6 bg-white overflow-hidden",
      children: x.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: x.jsxs(Bt, {
          children: [
            x.jsx("p", {
              className:
                "text-[10px] tracking-widest uppercase text-black/40 mb-12",
              children: "Kind Words",
            }),
            x.jsx("div", {
              className:
                "relative h-[450px] sm:h-[350px] md:h-[300px] flex items-center justify-center",
              children: x.jsx(co, {
                mode: "wait",
                children: x.jsxs(
                  Ze.div,
                  {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { duration: 0.5, ease: "easeInOut" },
                    className:
                      "absolute inset-0 flex flex-col items-center justify-center",
                    children: [
                      x.jsxs("h2", {
                        className:
                          "text-xl md:text-3xl font-serif leading-relaxed italic mb-10 px-4",
                        children: ['"', o[a].text, '"'],
                      }),
                      x.jsxs("div", {
                        className: "flex flex-col items-center gap-4",
                        children: [
                          x.jsx("img", {
                            src: o[a].img,
                            alt: o[a].name,
                            className:
                              "w-16 h-16 rounded-full object-cover border border-black/10",
                          }),
                          x.jsxs("div", {
                            children: [
                              x.jsx("p", {
                                className: "text-sm tracking-widest uppercase",
                                children: o[a].name,
                              }),
                              x.jsx("p", {
                                className:
                                  "text-xs text-black/50 font-serif italic",
                                children: o[a].country,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  a,
                ),
              }),
            }),
            x.jsx("div", {
              className: "flex justify-center gap-3 mt-8",
              children: o.map((u, c) =>
                x.jsx(
                  "button",
                  {
                    onClick: () => l(c),
                    className: `w-2 h-2 rounded-full transition-all duration-300 ${c === a ? "bg-black w-8" : "bg-black/20 hover:bg-black/40"}`,
                    "aria-label": `Go to slide ${c + 1}`,
                  },
                  c,
                ),
              ),
            }),
          ],
        }),
      }),
    })
  );
}
function CA() {
  const [a, l] = G.useState(0),
    o = [
      {
        name: "Portugal",
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Porto",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Lisbon",
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "the Algarve",
        img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Northern Portugal",
        img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
      },
    ];
  return (
    G.useEffect(() => {
      const u = setInterval(() => {
        l((c) => (c + 1) % o.length);
      }, 3e3);
      return () => clearInterval(u);
    }, []),
    x.jsx("section", {
      className: "py-24 md:py-0 px-6 max-w-7xl mx-auto overflow-hidden",
      children: x.jsxs("div", {
        className:
          "grid grid-cols-1 md:grid-cols-2 gap-0 md:h-screen items-center",
        children: [
          x.jsx("div", {
            className:
              "order-2 md:order-1 flex flex-col justify-center pr-0 md:pr-20 py-12 md:py-0",
            children: x.jsxs(Bt, {
              children: [
                x.jsxs("h2", {
                  className:
                    "text-3xl md:text-4xl lg:text-5xl font-serif mb-10 leading-tight",
                  children: [
                    "Why",
                    " ",
                    x.jsx("span", {
                      className:
                        "inline-flex relative h-[1.2em] w-[180px] md:w-[260px] lg:w-[320px] overflow-hidden align-bottom justify-center",
                      children: x.jsx(co, {
                        mode: "popLayout",
                        children: x.jsx(
                          Ze.span,
                          {
                            initial: { y: 40, opacity: 0 },
                            animate: { y: 0, opacity: 1 },
                            exit: { y: -40, opacity: 0 },
                            transition: { duration: 0.5, ease: "easeInOut" },
                            className:
                              "absolute italic text-black/80 whitespace-nowrap",
                            children: o[a].name,
                          },
                          a,
                        ),
                      }),
                    }),
                    " ",
                    "is One of the Most Beautiful Places for a Destination Wedding",
                  ],
                }),
                x.jsxs("div", {
                  className:
                    "space-y-4 text-sm md:text-base text-black/70 font-light leading-relaxed",
                  children: [
                    x.jsxs("p", {
                      children: [
                        "From the terraced ",
                        x.jsx("span", {
                          className:
                            "font-serif font-bold text-[1.1em] text-black",
                          children: "Douro vineyards",
                        }),
                        " to historic cities like ",
                        x.jsx("span", {
                          className:
                            "font-serif font-bold text-[1.1em] text-black",
                          children: "Porto and Lisbon",
                        }),
                        ", Portugal offers an unmatched backdrop for your celebration.",
                      ],
                    }),
                    x.jsxs("p", {
                      children: [
                        "The dramatic ",
                        x.jsx("span", {
                          className:
                            "font-serif font-bold text-[1.1em] text-black",
                          children: "Algarve coastline",
                        }),
                        ", warm climate, and unique natural light create cinematic moments effortlessly.",
                      ],
                    }),
                    x.jsx("p", {
                      children:
                        "With easy travel from Europe and the US, it's the perfect gathering place for your loved ones.",
                    }),
                  ],
                }),
              ],
            }),
          }),
          x.jsx("div", {
            className:
              "order-1 md:order-2 h-[60vh] md:h-full w-full relative overflow-hidden",
            children: x.jsx(co, {
              mode: "wait",
              children: x.jsx(
                Ze.img,
                {
                  initial: { opacity: 0, scale: 1.05 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.8, ease: "easeInOut" },
                  src: o[a].img,
                  alt: o[a].name,
                  className: "absolute inset-0 w-full h-full object-cover",
                  referrerPolicy: "no-referrer",
                },
                a,
              ),
            }),
          }),
        ],
      }),
    })
  );
}
function wA() {
  const a = [
      {
        q: "Do you photograph weddings across Portugal?",
        a: "Yes, we travel throughout Portugal, including Porto, the Douro Valley, Lisbon, Sintra, and the Algarve.",
      },
      {
        q: "Can we book without visiting Portugal first?",
        a: "Absolutely. Most of our international couples book us before visiting. We handle everything via video calls and email to ensure a seamless process.",
      },
      {
        q: "Do you speak English?",
        a: "Yes, we are fluent in English and communicate seamlessly with couples and vendors from around the world.",
      },
      {
        q: "How far in advance should we book?",
        a: "We recommend booking 12 to 18 months in advance, especially for peak wedding season (May to October).",
      },
      {
        q: "What is included in your photography collections?",
        a: "Our collections are tailored to your needs, typically including full-day coverage, a curated online gallery, high-resolution images, and an optional engagement session or second photographer.",
      },
      {
        q: "How do payments work for international couples?",
        a: "We accept international bank transfers (via Wise or direct wire) and major credit cards, making the payment process simple and secure regardless of your location.",
      },
    ],
    [l, o] = G.useState(0);
  return x.jsxs("section", {
    className: "py-24 md:py-40 px-6 max-w-3xl mx-auto",
    children: [
      x.jsx(Bt, {
        children: x.jsxs("h2", {
          className: "text-3xl md:text-5xl font-serif text-center mb-16",
          children: [
            "Frequently Asked ",
            x.jsx("span", { className: "italic", children: "Questions" }),
          ],
        }),
      }),
      x.jsx("div", {
        className: "space-y-2",
        children: a.map((u, c) =>
          x.jsx(
            Bt,
            {
              delay: c * 0.1,
              children: x.jsxs("div", {
                className: "border-b border-black/10",
                children: [
                  x.jsxs("button", {
                    onClick: () => o(l === c ? null : c),
                    className:
                      "w-full py-6 flex justify-between items-center text-left focus:outline-none",
                    children: [
                      x.jsx("span", {
                        className: "font-serif text-lg md:text-xl pr-8",
                        children: u.q,
                      }),
                      l === c
                        ? x.jsx(dA, {
                            className: "w-5 h-5 text-black/50 shrink-0",
                          })
                        : x.jsx(gA, {
                            className: "w-5 h-5 text-black/50 shrink-0",
                          }),
                    ],
                  }),
                  x.jsx(co, {
                    children:
                      l === c &&
                      x.jsx(Ze.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        className: "overflow-hidden",
                        children: x.jsx("p", {
                          className:
                            "pb-6 text-sm text-black/60 font-light leading-relaxed",
                          children: u.a,
                        }),
                      }),
                  }),
                ],
              }),
            },
            c,
          ),
        ),
      }),
    ],
  });
}
function jA() {
  return x.jsx("section", {
    className: "py-24 md:py-32 bg-black text-white px-6 text-center",
    children: x.jsx("div", {
      className: "max-w-3xl mx-auto flex flex-col items-center",
      children: x.jsxs(Bt, {
        children: [
          x.jsxs("h2", {
            className: "text-3xl md:text-5xl font-serif mb-8 leading-tight",
            children: [
              "We Take on a Limited Number of ",
              x.jsx("br", { className: "hidden md:block" }),
              x.jsx("span", {
                className: "italic",
                children: "Destination Weddings Each Year",
              }),
            ],
          }),
          x.jsx("p", {
            className:
              "text-sm md:text-base text-white/70 font-light mb-12 max-w-xl mx-auto",
            children:
              "To ensure every couple receives our full attention, we accept a limited number of destination weddings annually.",
          }),
          x.jsx("a", {
            href: "#contact",
            className:
              "bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300",
            children: "Secure Your Date",
          }),
        ],
      }),
    }),
  });
}
function NA() {
  const [a, l] = G.useState(!1),
    [o, u] = G.useState(!1),
    [c, d] = G.useState("");
  const h = async (m) => {
    (m.preventDefault(), u(!0), d(""));
    const g = m.currentTarget,
      p = new FormData(g);
    try {
      const v = await fetch("https://formspree.io/f/mnjllbak", {
        method: "POST",
        body: p,
        headers: { Accept: "application/json" },
      });
      if (v.ok) (l(!0), g.reset());
      else {
        const b = await v.json().catch(() => null);
        d(
          b && b.errors && b.errors.length
            ? b.errors.map((S) => S.message).join(" ")
            : "Something went wrong. Please try again.",
        );
      }
    } catch {
      d("Something went wrong. Please try again.");
    } finally {
      u(!1);
    }
  };
  return x.jsxs("section", {
    id: "contact",
    className: "py-24 md:py-40 px-6 max-w-4xl mx-auto",
    children: [
      x.jsx(Bt, {
        children: x.jsxs("div", {
          className: "text-center mb-16",
          children: [
            x.jsxs("h2", {
              className: "text-3xl md:text-5xl font-serif mb-6",
              children: [
                "Let's Talk About Your ",
                x.jsx("br", { className: "hidden md:block" }),
                x.jsx("span", { className: "italic", children: "Wedding" }),
              ],
            }),
            x.jsx("p", {
              className: "text-sm text-black/60 font-light",
              children:
                "Fill out the form below and we'll get back to you within 48 hours.",
            }),
          ],
        }),
      }),
      x.jsxs(Bt, {
        delay: 0.2,
        children: [
          x.jsxs("form", {
            className: "space-y-8",
            onSubmit: h,
            children: [
              x.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                  x.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      x.jsx("label", {
                        className:
                          "text-[10px] tracking-widest uppercase text-black/60",
                        children: "Name",
                      }),
                      x.jsx("input", {
                        name: "name",
                        type: "text",
                        required: !0,
                        className:
                          "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors",
                      }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      x.jsx("label", {
                        className:
                          "text-[10px] tracking-widest uppercase text-black/60",
                        children: "Partner Name",
                      }),
                      x.jsx("input", {
                        name: "partner_name",
                        type: "text",
                        className:
                          "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors",
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                  x.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      x.jsx("label", {
                        className:
                          "text-[10px] tracking-widest uppercase text-black/60",
                        children: "Email",
                      }),
                      x.jsx("input", {
                        name: "email",
                        type: "email",
                        required: !0,
                        className:
                          "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors",
                      }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      x.jsx("label", {
                        className:
                          "text-[10px] tracking-widest uppercase text-black/60",
                        children: "Wedding Date",
                      }),
                      x.jsx("input", {
                        name: "wedding_date",
                        type: "text",
                        placeholder: "DD/MM/YYYY or Season",
                        className:
                          "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-black/20",
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                  x.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      x.jsx("label", {
                        className:
                          "text-[10px] tracking-widest uppercase text-black/60",
                        children: "Venue (if known)",
                      }),
                      x.jsx("input", {
                        name: "venue",
                        type: "text",
                        className:
                          "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors",
                      }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      x.jsx("label", {
                        className:
                          "text-[10px] tracking-widest uppercase text-black/60",
                        children: "Estimated Guest Count",
                      }),
                      x.jsx("input", {
                        name: "guest_count",
                        type: "text",
                        className:
                          "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors",
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [
                  x.jsx("label", {
                    className:
                      "text-[10px] tracking-widest uppercase text-black/60",
                    children: "Message",
                  }),
                  x.jsx("textarea", {
                    name: "message",
                    rows: 4,
                    required: !0,
                    placeholder:
                      "Tell us your story — we’d love to hear what matters most to you",
                    className:
                      "border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors resize-none placeholder:text-black/20",
                  }),
                ],
              }),
              x.jsx("input", {
                type: "hidden",
                name: "_subject",
                value: "New BH Destination Wedding Lead",
              }),
              x.jsxs("div", {
                className: "pt-8 text-center",
                children: [
                  x.jsx("button", {
                    type: "submit",
                    disabled: o,
                    className:
                      "bg-black text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-black/80 transition-colors duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed",
                    children: o
                      ? "Sending..."
                      : "Check Availability & Collections",
                  }),
                  a &&
                    x.jsx("p", {
                      className: "mt-4 text-sm text-black/60 font-light",
                      children:
                        "Thank you — your message has been sent successfully. We'll be in touch soon.",
                    }),
                  c &&
                    x.jsx("p", {
                      className: "mt-4 text-sm text-black/60 font-light",
                      children: c,
                    }),
                ],
              }),
            ],
          }),
          x.jsxs("div", {
            className: "mt-20 text-center border-t border-black/10 pt-12",
            children: [
              x.jsx("p", {
                className: "text-sm text-black/60 font-light mb-4",
                children: "Prefer something quick?",
              }),
              x.jsxs("a", {
                href: "https://wa.me/351911932129",
                className:
                  "inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-colors duration-300",
                children: [
                  x.jsx(S0, { className: "w-4 h-4" }),
                  " Chat with us on WhatsApp",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function zA() {
  return x.jsxs("footer", {
    className:
      "py-16 px-6 border-t border-black/10 text-center flex flex-col items-center gap-8 bg-white",
    children: [
      x.jsx("a", {
        href: "https://bhweddingphoto.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        children: x.jsx("img", {
          src: "https://bhweddingphoto.com/wp-content/uploads/2024/01/Untitled-design-2024-01-23T064322.326.png",
          alt: "BH Wedding Photo",
          className:
            "h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity",
          referrerPolicy: "no-referrer",
        }),
      }),
      x.jsxs("div", {
        className:
          "flex flex-wrap justify-center gap-6 text-[11px] tracking-widest uppercase text-black/60",
        children: [
          x.jsx("a", {
            href: "https://bhweddingphoto.com/sobre-nos/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "About Us",
          }),
          x.jsx("a", {
            href: "https://bhweddingphoto.com/foto-casamento/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Portfolio",
          }),
          x.jsx("a", {
            href: "https://bhweddingphoto.com/blog/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Galleries",
          }),
          x.jsx("a", {
            href: "https://bhweddingphoto.com/contacto/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Contact",
          }),
        ],
      }),
      x.jsxs("div", {
        className:
          "flex gap-6 text-[11px] tracking-widest uppercase text-black/60",
        children: [
          x.jsx("a", {
            href: "https://www.instagram.com/bhweddingphotography",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Instagram",
          }),
          x.jsx("a", {
            href: "https://www.facebook.com/bhphotosessions",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Facebook",
          }),
        ],
      }),
      x.jsxs("div", {
        className:
          "flex flex-wrap justify-center gap-4 text-[10px] text-black/40 uppercase tracking-widest mt-4",
        children: [
          x.jsx("a", {
            href: "https://bhweddingphoto.com/privacy-policy/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Privacy Policy",
          }),
          x.jsx("span", { className: "hidden md:inline", children: "|" }),
          x.jsx("a", {
            href: "https://bhweddingphoto.com/terms-and-conditions/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Terms & Conditions",
          }),
          x.jsx("span", { className: "hidden md:inline", children: "|" }),
          x.jsx("a", {
            href: "https://bhweddingphoto.com/cookies-policy/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-black transition-colors",
            children: "Cookie Policy",
          }),
        ],
      }),
      x.jsxs("p", {
        className: "text-[10px] text-black/40 uppercase tracking-widest mt-2",
        children: [
          "© ",
          new Date().getFullYear(),
          " BH Wedding Photo. All rights reserved.",
        ],
      }),
    ],
  });
}
function OA() {
  return x.jsx(Ze.a, {
    href: "https://wa.me/351911932129",
    target: "_blank",
    rel: "noopener noreferrer",
    animate: { scale: [1, 1.1, 1] },
    transition: { repeat: 1 / 0, duration: 2, ease: "easeInOut" },
    className:
      "fixed bottom-6 right-6 z-50 bg-[#D4A5A5] text-white p-4 rounded-full shadow-lg hover:bg-[#c49393] flex items-center justify-center",
    "aria-label": "Chat on WhatsApp",
    children: x.jsx(S0, { className: "w-6 h-6" }),
  });
}
function RA() {
  const [a, l] = G.useState(!1);
  return (
    typeof window < "u" &&
      window.addEventListener("scroll", () => {
        l(window.scrollY > 50);
      }),
    x.jsx("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${a ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`,
      children: x.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
        children: [
          x.jsx("a", {
            href: "#",
            className: "block",
            children: x.jsx("img", {
              src: "https://bhweddingphoto.com/wp-content/uploads/2024/01/Untitled-design-2024-01-23T064322.326.png",
              alt: "BH Wedding Photo",
              className: `h-[42px] md:h-[52px] w-auto object-contain transition-all duration-500 ${a ? "" : "brightness-0 invert"}`,
              referrerPolicy: "no-referrer",
            }),
          }),
          x.jsx("a", {
            href: "#contact",
            className: `text-[10px] tracking-[0.2em] uppercase border px-4 py-2 transition-colors duration-300 ${a ? "border-black text-black hover:bg-black hover:text-white" : "border-white text-white hover:bg-white hover:text-black"}`,
            children: "Inquire",
          }),
        ],
      }),
    })
  );
}
function VA() {
  return x.jsxs("div", {
    className: "min-h-screen selection:bg-black/10",
    children: [
      x.jsx(RA, {}),
      x.jsxs("main", {
        children: [
          x.jsx(xA, {}),
          x.jsx(SA, {}),
          x.jsx(TA, {}),
          x.jsx(AA, {}),
          x.jsx(EA, {}),
          x.jsx(MA, {}),
          x.jsx(DA, {}),
          x.jsx(CA, {}),
          x.jsx(wA, {}),
          x.jsx(jA, {}),
          x.jsx(NA, {}),
        ],
      }),
      x.jsx(zA, {}),
      x.jsx(OA, {}),
    ],
  });
}
tb.createRoot(document.getElementById("root")).render(
  x.jsx(G.StrictMode, { children: x.jsx(VA, {}) }),
);
