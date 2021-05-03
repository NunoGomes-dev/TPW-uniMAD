/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
  var n,
    r,
    i = typeof t,
    o = e.location,
    a = e.document,
    s = a.documentElement,
    l = e.jQuery,
    u = e.$,
    c = {},
    p = [],
    f = "1.10.2",
    d = p.concat,
    h = p.push,
    g = p.slice,
    m = p.indexOf,
    y = c.toString,
    v = c.hasOwnProperty,
    b = f.trim,
    x = function (e, t) {
      return new x.fn.init(e, t, r);
    },
    w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = /\S+/g,
    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    E = /^[\],:{}\s]*$/,
    S = /(?:^|:|,)(?:\s*\[)+/g,
    A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    D = /^-ms-/,
    L = /-([\da-z])/gi,
    H = function (e, t) {
      return t.toUpperCase();
    },
    q = function (e) {
      (a.addEventListener ||
        "load" === e.type ||
        "complete" === a.readyState) &&
        (_(), x.ready());
    },
    _ = function () {
      a.addEventListener
        ? (a.removeEventListener("DOMContentLoaded", q, !1),
          e.removeEventListener("load", q, !1))
        : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
    };
  (x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function (e, n, r) {
      var i, o;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          ((i =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : N.exec(e)),
          !i || (!i[1] && n))
        )
          return !n || n.jquery
            ? (n || r).find(e)
            : this.constructor(n).find(e);
        if (i[1]) {
          if (
            ((n = n instanceof x ? n[0] : n),
            x.merge(
              this,
              x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)
            ),
            k.test(i[1]) && x.isPlainObject(n))
          )
            for (i in n)
              x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }
        if (((o = a.getElementById(i[2])), o && o.parentNode)) {
          if (o.id !== i[2]) return r.find(e);
          (this.length = 1), (this[0] = o);
        }
        return (this.context = a), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : x.isFunction(e)
        ? r.ready(e)
        : (e.selector !== t &&
            ((this.selector = e.selector), (this.context = e.context)),
          x.makeArray(e, this));
    },
    selector: "",
    length: 0,
    toArray: function () {
      return g.call(this);
    },
    get: function (e) {
      return null == e
        ? this.toArray()
        : 0 > e
        ? this[this.length + e]
        : this[e];
    },
    pushStack: function (e) {
      var t = x.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    first: function () {
      return this.eq(0);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    push: h,
    sort: [].sort,
    splice: [].splice,
  }),
    (x.fn.init.prototype = x.fn),
    (x.extend = x.fn.extend = function () {
      var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;
      for (
        "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (l = 2)),
          "object" == typeof s || x.isFunction(s) || (s = {}),
          u === l && ((s = this), --l);
        u > l;
        l++
      )
        if (null != (o = arguments[l]))
          for (i in o)
            (e = s[i]),
              (r = o[i]),
              s !== r &&
                (c && r && (x.isPlainObject(r) || (n = x.isArray(r)))
                  ? (n
                      ? ((n = !1), (a = e && x.isArray(e) ? e : []))
                      : (a = e && x.isPlainObject(e) ? e : {}),
                    (s[i] = x.extend(c, a, r)))
                  : r !== t && (s[i] = r));
      return s;
    }),
    x.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        if (e === !0 ? !--x.readyWait : !x.isReady) {
          if (!a.body) return setTimeout(x.ready);
          (x.isReady = !0),
            (e !== !0 && --x.readyWait > 0) ||
              (n.resolveWith(a, [x]),
              x.fn.trigger && x(a).trigger("ready").off("ready"));
        }
      },
      isFunction: function (e) {
        return "function" === x.type(e);
      },
      isArray: Array.isArray || function (e) {},
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? c[y.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function (e) {
        var n;
        if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !v.call(e, "constructor") &&
            !v.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (r) {
          return !1;
        }
        if (x.support.ownLast) for (n in e) return v.call(e, n);
        for (n in e);
        return n === t || v.call(e, n);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || a);
        var r = k.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = x.buildFragment([e], t, i)),
            i && x(i).remove(),
            x.merge([], r.childNodes));
      },
      noop: function () {},
      camelCase: function (e) {
        return e.replace(D, "ms-").replace(L, H);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var r,
          i = 0,
          o = e.length,
          a = M(e);
        if (n) {
          if (a) {
            for (; o > i; i++) if (((r = t.apply(e[i], n)), r === !1)) break;
          } else for (i in e) if (((r = t.apply(e[i], n)), r === !1)) break;
        } else if (a) {
          for (; o > i; i++) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
        } else for (i in e) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
        return e;
      },
      trim:
        b && !b.call("\ufeff\u00a0")
          ? function (e) {
              return null == e ? "" : b.call(e);
            }
          : "",
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (M(Object(e))
              ? x.merge(n, "string" == typeof e ? [e] : e)
              : h.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (m) return m.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, n) {
        var r = n.length,
          i = e.length,
          o = 0;
        if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
        else while (n[o] !== t) e[i++] = n[o++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        var r,
          i = [],
          o = 0,
          a = e.length;
        for (n = !!n; a > o; o++) (r = !!t(e[o], o)), n !== r && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];
        if (a)
          for (; o > i; i++)
            (r = t(e[i], i, n)), null != r && (s[s.length] = r);
        else for (i in e) (r = t(e[i], i, n)), null != r && (s[s.length] = r);
        return d.apply([], s);
      },
      guid: 1,
      proxy: function (e, n) {
        var r, i, o;
        return (
          "string" == typeof n && ((o = e[n]), (n = e), (e = o)),
          x.isFunction(e)
            ? ((r = g.call(arguments, 2)),
              (i = function () {
                return e.apply(n || this, r.concat(g.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || x.guid++),
              i)
            : t
        );
      },
      access: function (e, n, r, i, o, a, s) {
        var l = 0,
          u = e.length,
          c = null == r;
        if ("object" === x.type(r)) {
          o = !0;
          for (l in r) x.access(e, n, l, r[l], !0, a, s);
        } else if (
          i !== t &&
          ((o = !0),
          x.isFunction(i) || (s = !0),
          c &&
            (s
              ? (n.call(e, i), (n = null))
              : ((c = n), (n = function (e, t, n) {}))),
          n)
        )
          for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
        return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
      },
      now: function () {
        return new Date().getTime();
      },
      swap: function (e, t, n, r) {
        var i,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
      },
    }),
    (x.ready.promise = function (t) {
      if (!n)
        if (((n = x.Deferred()), "complete" === a.readyState))
          setTimeout(x.ready);
        else if (a.addEventListener)
          a.addEventListener("DOMContentLoaded", q, !1),
            e.addEventListener("load", q, !1);
        else {
          a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
          var r = !1;
          try {
            r = null == e.frameElement && a.documentElement;
          } catch (i) {}
        }
      return n.promise(t);
    }),
    x.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function M(e) {
    var t = e.length,
      n = x.type(e);
    return x.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
      ? !0
      : "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
  }
  (r = x(a)),
    (function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle" + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function (e, t) {
          return e === t ? ((S = !0), 0) : 0;
        },
        j = typeof t,
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf,
        B =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ =
          "\\[" +
          P +
          "*(" +
          R +
          ")" +
          P +
          "*(?:([*^$|!~]?=)" +
          P +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          W +
          ")|)|)" +
          P +
          "*\\]",
        I =
          ":(" +
          R +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          $.replace(3, 8) +
          ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = {
          ID: RegExp("^#(" + R + ")"),
          CLASS: RegExp("^\\.(" + R + ")"),
          TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + $),
          PSEUDO: RegExp("^" + I),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              P +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              P +
              "*(?:([+-]|)" +
              P +
              "*(\\d+)|))" +
              P +
              "*\\)|)",
            "i"
          ),
          bool: RegExp("^(?:" + B + ")$", "i"),
          needsContext: RegExp(
            "^" +
              P +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              P +
              "*((?:-\\d)?\\d*)" +
              P +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function (e, t, n) {};
      try {
        M.apply((H = O.call(w.childNodes)), w.childNodes),
          H[w.childNodes.length].nodeType;
      } catch (ot) {}
      function at(e, t, n, i) {
        var o, a, s, l, u, c, d, m, y, x;
        if (
          ((t ? t.ownerDocument || t : w) !== f && p(t),
          (t = t || f),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (l = t.nodeType) && 9 !== l) return [];
        if (h && !i) {
          if ((o = Z.exec(e)))
            if ((s = o[1])) {
              if (9 === l) {
                if (((a = t.getElementById(s)), !a || !a.parentNode)) return n;
                if (a.id === s) return n.push(a), n;
              } else if (
                t.ownerDocument &&
                (a = t.ownerDocument.getElementById(s)) &&
                v(t, a) &&
                a.id === s
              )
                return n.push(a), n;
            } else {
              if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
              if (
                (s = o[3]) &&
                r.getElementsByClassName &&
                t.getElementsByClassName
              )
                return M.apply(n, t.getElementsByClassName(s)), n;
            }
          if (r.qsa && (!g || !g.test(e))) {
            if (
              ((m = d = b),
              (y = t),
              (x = 9 === l && e),
              1 === l && "object" !== t.nodeName.toLowerCase())
            ) {
              (c = mt(e)),
                (d = t.getAttribute("id"))
                  ? (m = d.replace(nt, "\\$&"))
                  : t.setAttribute("id", m),
                (m = "[id='" + m + "'] "),
                (u = c.length);
              while (u--) c[u] = m + yt(c[u]);
              (y = (V.test(e) && t.parentNode) || t), (x = c.join(","));
            }
            if (x)
              try {
                return M.apply(n, y.querySelectorAll(x)), n;
              } catch (T) {
              } finally {
                d || t.removeAttribute("id");
              }
          }
        }
        return kt(e.replace(z, "$1"), t, n, i);
      }
      function st() {
        var e = [];
        function t(n, r) {
          return (
            e.push((n += " ")) > o.cacheLength && delete t[e.shift()],
            (t[n] = r)
          );
        }
        return t;
      }
      function lt(e) {
        return (e[b] = !0), e;
      }
      function ut(e) {
        var t = f.createElement("div");
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function ft(e) {}
      function dt(e) {}
      (s = at.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1;
      }),
        (r = at.support = {}),
        (p = at.setDocument = function (e) {
          var n = e ? e.ownerDocument || e : w,
            i = n.defaultView;
          return n !== f && 9 === n.nodeType && n.documentElement
            ? ((f = n),
              (d = n.documentElement),
              (h = !s(n)),
              i &&
                i.attachEvent &&
                i !== i.top &&
                i.attachEvent("onbeforeunload", function () {}),
              (r.attributes = ut(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (r.getElementsByTagName = ut(function (e) {
                return (
                  e.appendChild(n.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (r.getElementsByClassName = ut(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
              (r.getById = ut(function (e) {
                return (
                  (d.appendChild(e).id = b),
                  !n.getElementsByName || !n.getElementsByName(b).length
                );
              })),
              r.getById
                ? ((o.find.ID = function (e, t) {}),
                  (o.filter.ID = function (e) {}))
                : (delete o.find.ID, (o.filter.ID = function (e) {})),
              (o.find.TAG = r.getElementsByTagName
                ? function (e, n) {
                    return typeof n.getElementsByTagName !== j
                      ? n.getElementsByTagName(e)
                      : t;
                  }
                : ""),
              (o.find.CLASS = r.getElementsByClassName),
              (m = []),
              (g = []),
              (r.qsa = K.test(n.querySelectorAll)) &&
                (ut(function (e) {
                  (e.innerHTML =
                    "<select><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length ||
                      g.push("\\[" + P + "*(?:value|" + B + ")"),
                    e.querySelectorAll(":checked").length || g.push(":checked");
                }),
                ut(function (e) {
                  var t = n.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("t", ""),
                    e.querySelectorAll("[t^='']").length &&
                      g.push("[*^$]=" + P + "*(?:''|\"\")"),
                    e.querySelectorAll(":enabled").length ||
                      g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:");
                })),
              (r.matchesSelector = K.test(
                (y =
                  d.webkitMatchesSelector ||
                  d.mozMatchesSelector ||
                  d.oMatchesSelector ||
                  d.msMatchesSelector)
              )) &&
                ut(function (e) {
                  (r.disconnectedMatch = y.call(e, "div")),
                    y.call(e, "[s!='']:x"),
                    m.push("!=", I);
                }),
              (g = g.length && RegExp(g.join("|"))),
              (m = m.length && RegExp(m.join("|"))),
              (v =
                K.test(d.contains) || d.compareDocumentPosition
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : ""),
              (A = d.compareDocumentPosition
                ? function (e, t) {
                    if (e === t) return (S = !0), 0;
                    var i =
                      t.compareDocumentPosition &&
                      e.compareDocumentPosition &&
                      e.compareDocumentPosition(t);
                    return i
                      ? 1 & i ||
                        (!r.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === n || v(w, e)
                          ? -1
                          : t === n || v(w, t)
                          ? 1
                          : c
                          ? F.call(c, e) - F.call(c, t)
                          : 0
                        : 4 & i
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : ""),
              n)
            : f;
        }),
        (at.matches = function (e, t) {
          return at(e, null, null, t);
        }),
        (at.matchesSelector = function (e, t) {
          if (
            ((e.ownerDocument || e) !== f && p(e),
            (t = t.replace(Y, "='$1']")),
            !(!r.matchesSelector || !h || (m && m.test(t)) || (g && g.test(t))))
          )
            try {
              var n = y.call(e, t);
              if (
                n ||
                r.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (i) {}
          return at(t, f, null, [e]).length > 0;
        }),
        (at.contains = function (e, t) {
          return (e.ownerDocument || e) !== f && p(e), v(e, t);
        }),
        (at.attr = function (e, n) {
          (e.ownerDocument || e) !== f && p(e);
          var i = o.attrHandle[n.toLowerCase()],
            a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
          return a === t
            ? r.attributes || !h
              ? e.getAttribute(n)
              : (a = e.getAttributeNode(n)) && a.specified
              ? a.value
              : null
            : a;
        }),
        (at.error = function (e) {}),
        (at.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            o = 0;
          if (
            ((S = !r.detectDuplicates),
            (c = !r.sortStable && e.slice(0)),
            e.sort(A),
            S)
          ) {
            while ((t = e[o++])) t === e[o] && (i = n.push(o));
            while (i--) e.splice(n[i], 1);
          }
          return e;
        }),
        (a = at.getText = function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r]); r++) n += a(t);
          return n;
        }),
        (o = at.selectors = {
          cacheLength: 50,
          createPseudo: lt,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(rt, it)),
                (e[3] = (e[4] || e[5] || "").replace(rt, it)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {},
            PSEUDO: function (e) {
              var n,
                r = !e[5] && e[2];
              return Q.CHILD.test(e[0])
                ? null
                : (e[3] && e[4] !== t
                    ? (e[2] = e[4])
                    : r &&
                      J.test(r) &&
                      (n = mt(r, !0)) &&
                      (n = r.indexOf(")", r.length - n) - r.length) &&
                      ((e[0] = e[0].slice(0, n)), (e[2] = r.slice(0, n))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {},
            CLASS: function (e) {
              var t = N[e + " "];
              return (
                t ||
                ((t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                  N(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== j &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = at.attr(r, e);
                return null == i
                  ? "!=" === t
                  : t
                  ? ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && i.indexOf(n) > -1
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + i + " ").indexOf(n) > -1
                      : "|=" === t
                      ? i === n || i.slice(0, n.length + 1) === n + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (e, t, n, r, i) {},
            PSEUDO: function (e, t) {
              var n,
                r =
                  o.pseudos[e] ||
                  o.setFilters[e.toLowerCase()] ||
                  at.error("unsupported pseudo: " + e);
              return r[b] ? r(t) : r.length > 1 ? "" : r;
            },
          },
          pseudos: {
            not: lt(function (e) {
              var t = [],
                n = [],
                r = l(e.replace(z, "$1"));
              return r[b]
                ? ""
                : function (e, i, o) {
                    return (t[0] = e), r(t, null, o, n), !n.pop();
                  };
            }),
          },
        }),
        (o.pseudos.nth = o.pseudos.eq);
      for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        o.pseudos[n] = ft(n);
      for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n);
      function gt() {}
      (gt.prototype = o.filters = o.pseudos), (o.setFilters = new gt());
      function mt(e, t) {
        var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);
        (s = e), (l = []), (u = o.preFilter);
        while (s) {
          (!n || (r = X.exec(s))) &&
            (r && (s = s.slice(r[0].length) || s), l.push((i = []))),
            (n = !1),
            (r = U.exec(s)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(z, " ") }),
              (s = s.slice(n.length)));
          for (a in o.filter)
            !(r = Q[a].exec(s)) ||
              (u[a] && !(r = u[a](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: a, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
      }
      function yt(e) {
        var t = 0,
          n = e.length,
          r = "";
        for (; n > t; t++) r += e[t].value;
        return r;
      }
      function vt(e, t, n) {
        var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;
      }
      function bt(e) {
        return e.length > 1
          ? function (t, n, r) {
              var i = e.length;
              while (i--) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }

      function Tt(e) {
        var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = vt(function (e) {}, s, !0),
          p = vt(function (e) {}, s, !0),
          f = [
            function (e, n, r) {
              return (
                (!a && (r || n !== u)) ||
                ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
              );
            },
          ];
        for (; i > l; l++)
          if ((n = o.relative[e[l].type])) f = [vt(bt(f), n)];
          else {
            if (((n = o.filter[e[l].type].apply(null, e[l].matches)), n[b])) {
              for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
              return wt(
                l > 1 && bt(f),
                l > 1 &&
                  yt(
                    e
                      .slice(0, l - 1)
                      .concat({ value: " " === e[l - 2].type ? "*" : "" })
                  ).replace(z, "$1"),
                n,
                r > l && Tt(e.slice(l, r)),
                i > r && Tt((e = e.slice(r))),
                i > r && yt(e)
              );
            }
            f.push(n);
          }
        return bt(f);
      }
      function Ct(e, t) {
        var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function (s, l, c, p, d) {
            var h,
              g,
              m,
              y = [],
              v = 0,
              b = "0",
              x = s && [],
              w = null != d,
              C = u,
              N = s || (a && o.find.TAG("*", (d && l.parentNode) || l)),
              k = (T += null == C ? 1 : Math.random() || 0.1);
            for (w && ((u = l !== f && l), (i = n)); null != (h = N[b]); b++) {
              if (a && h) {
                g = 0;
                while ((m = e[g++]))
                  if (m(h, l, c)) {
                    p.push(h);
                    break;
                  }
                w && ((T = k), (i = ++n));
              }
              r && ((h = !m && h) && v--, s && x.push(h));
            }
            if (((v += b), r && b !== v)) {
              g = 0;
              while ((m = t[g++])) m(x, y, l, c);
              if (s) {
                if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
                y = xt(y);
              }
              M.apply(p, y),
                w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
            }
            return w && ((T = k), (u = C)), x;
          };
        return r ? lt(s) : s;
      }
      l = at.compile = function (e, t) {
        var n,
          r = [],
          i = [],
          o = E[e + " "];
        if (!o) {
          t || (t = mt(e)), (n = t.length);
          while (n--) (o = Tt(t[n])), o[b] ? r.push(o) : i.push(o);
          o = E(e, Ct(i, r));
        }
        return o;
      };

      function kt(e, t, n, i) {
        var a,
          s,
          u,
          c,
          p,
          f = mt(e);
        if (!i && 1 === f.length) {
          if (
            ((s = f[0] = f[0].slice(0)),
            s.length > 2 &&
              "ID" === (u = s[0]).type &&
              r.getById &&
              9 === t.nodeType &&
              h &&
              o.relative[s[1].type])
          ) {
            if (
              ((t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0]), !t)
            )
              return n;
            e = e.slice(s.shift().value.length);
          }
          a = Q.needsContext.test(e) ? 0 : s.length;
          while (a--) {
            if (((u = s[a]), o.relative[(c = u.type)])) break;
            if (
              (p = o.find[c]) &&
              (i = p(
                u.matches[0].replace(rt, it),
                (V.test(s[0].type) && t.parentNode) || t
              ))
            ) {
              if ((s.splice(a, 1), (e = i.length && yt(s)), !e))
                return M.apply(n, i), n;
              break;
            }
          }
        }
        return l(e, f)(i, t, !h, n, V.test(e)), n;
      }
      (r.sortStable = b.split("").sort(A).join("") === b),
        (r.detectDuplicates = S),
        p(),
        (r.sortDetached = ut(function (e) {
          return 1 & e.compareDocumentPosition(f.createElement("div"));
        })),
        ut(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) || ct("type|href|height|width", function (e, n, r) {}),
        (r.attributes &&
          ut(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          ct("value", function (e, n, r) {}),
        ut(function (e) {
          return null == e.getAttribute("disabled");
        }) || ct(B, function (e, n, r) {}),
        (x.find = at),
        (x.expr = at.selectors),
        (x.expr[":"] = x.expr.pseudos),
        (x.unique = at.uniqueSort),
        (x.text = at.getText),
        (x.isXMLDoc = at.isXML),
        (x.contains = at.contains);
    })(e);
  var O = {};
  function F(e) {
    var t = (O[e] = {});
    return (
      x.each(e.match(T) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  (x.Callbacks = function (e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
    var n,
      r,
      i,
      o,
      a,
      s,
      l = [],
      u = !e.once && [],
      c = function (t) {
        for (
          r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0;
          l && o > a;
          a++
        )
          if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            r = !1;
            break;
          }
        (n = !1),
          l && (u ? u.length && c(u.shift()) : r ? (l = []) : p.disable());
      },
      p = {
        add: function () {
          if (l) {
            var t = l.length;
            (function i(t) {
              x.each(t, function (t, n) {
                var r = x.type(n);
                "function" === r
                  ? (e.unique && p.has(n)) || l.push(n)
                  : n && n.length && "string" !== r && i(n);
              });
            })(arguments),
              n ? (o = l.length) : r && ((s = t), c(r));
          }
          return this;
        },
        disable: function () {
          return (l = u = r = t), this;
        },
        lock: function () {
          return (u = t), r || p.disable(), this;
        },
        fireWith: function (e, t) {
          return (
            !l ||
              (i && !u) ||
              ((t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              n ? u.push(t) : c(t)),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
      };
    return p;
  }),
    x.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", x.Callbacks("once memory"), "resolved"],
            ["reject", "fail", x.Callbacks("once memory"), "rejected"],
            ["notify", "progress", x.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },

            promise: function (e) {
              return null != e ? x.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          x.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0] + "With"] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
    }),
    (x.support = (function (t) {
      var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement("div");
      if (
        (d.setAttribute("className", "t"),
        (d.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = d.getElementsByTagName("*") || []),
        (r = d.getElementsByTagName("a")[0]),
        !r || !r.style || !n.length)
      )
        return t;
      (s = a.createElement("select")),
        (u = s.appendChild(a.createElement("option"))),
        (o = d.getElementsByTagName("input")[0]),
        (r.style.cssText = "top:1px;float:left;opacity:.5"),
        (t.getSetAttribute = "t" !== d.className),
        (t.leadingWhitespace = 3 === d.firstChild.nodeType),
        (t.tbody = !d.getElementsByTagName("tbody").length),
        (t.htmlSerialize = !!d.getElementsByTagName("link").length),
        (t.style = /top/.test(r.getAttribute("style"))),
        (t.hrefNormalized = "/a" === r.getAttribute("href")),
        (t.opacity = /^0.5/.test(r.style.opacity)),
        (t.cssFloat = !!r.style.cssFloat),
        (t.checkOn = !!o.value),
        (t.optSelected = u.selected),
        (t.enctype = !!a.createElement("form").enctype),
        (t.html5Clone =
          "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML),
        (t.inlineBlockNeedsLayout = !1),
        (t.shrinkWrapBlocks = !1),
        (t.pixelPosition = !1),
        (t.deleteExpando = !0),
        (t.noCloneEvent = !0),
        (t.reliableMarginRight = !0),
        (t.boxSizingReliable = !0),
        (o.checked = !0),
        (t.noCloneChecked = o.cloneNode(!0).checked),
        (s.disabled = !0),
        (t.optDisabled = !u.disabled);
      try {
        delete d.test;
      } catch (h) {
        t.deleteExpando = !1;
      }
      (o = a.createElement("input")),
        o.setAttribute("value", ""),
        (t.input = "" === o.getAttribute("value")),
        (o.value = "t"),
        o.setAttribute("type", "radio"),
        (t.radioValue = "t" === o.value),
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        (l = a.createDocumentFragment()),
        l.appendChild(o),
        (t.appendChecked = o.checked),
        (t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked),
        d.attachEvent,
        d.cloneNode(!0).click();
      for (f in { submit: !0, change: !0, focusin: !0 })
        d.setAttribute((c = "on" + f), "t"),
          (t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1);
      (d.style.backgroundClip = "content-box"),
        (d.cloneNode(!0).style.backgroundClip = ""),
        (t.clearCloneStyle = "content-box" === d.style.backgroundClip);
      for (f in x(t)) break;
      return (
        (t.ownLast = "0" !== f),
        x(function () {
          var n,
            r,
            o,
            s =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            l = a.getElementsByTagName("body")[0];
          l &&
            ((n = a.createElement("div")),
            (n.style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            l.appendChild(n).appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (o = d.getElementsByTagName("td")),
            (o[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (p = 0 === o[0].offsetHeight),
            (o[0].style.display = ""),
            (o[1].style.display = "none"),
            (t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight),
            (d.innerHTML = ""),
            (d.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
              t.boxSizing = 4 === d.offsetWidth;
            }),
            e.getComputedStyle &&
              ((t.pixelPosition =
                "1%" !== (e.getComputedStyle(d, null) || {}).top),
              (t.boxSizingReliable =
                "4px" ===
                (e.getComputedStyle(d, null) || { width: "4px" }).width),
              (r = d.appendChild(a.createElement("div"))),
              (r.style.cssText = d.style.cssText = s),
              (r.style.marginRight = r.style.width = "0"),
              (d.style.width = "1px"),
              (t.reliableMarginRight = !parseFloat(
                (e.getComputedStyle(r, null) || {}).marginRight
              ))),
            typeof d.style.zoom !== i &&
              ((d.innerHTML = ""),
              (d.style.cssText =
                s + "width:1px;padding:1px;display:inline;zoom:1"),
              (t.inlineBlockNeedsLayout = 3 === d.offsetWidth),
              (d.style.display = "block"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (t.shrinkWrapBlocks = 3 !== d.offsetWidth),
              t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            (n = d = o = r = null));
        }),
        (n = s = l = u = r = o = null),
        t
      );
    })({}));
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    P = /([A-Z])/g;
  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
        a,
        s = x.expando,
        l = e.nodeType,
        u = l ? x.cache : e,
        c = l ? e[s] : e[s] && s;
      if ((c && u[c] && (i || u[c].data)) || r !== t || "string" != typeof n)
        return (
          c || (c = l ? (e[s] = p.pop() || x.guid++) : s),
          u[c] || (u[c] = l ? {} : { toJSON: x.noop }),
          ("object" == typeof n || "function" == typeof n) &&
            (i
              ? (u[c] = x.extend(u[c], n))
              : (u[c].data = x.extend(u[c].data, n))),
          (a = u[c]),
          i || (a.data || (a.data = {}), (a = a.data)),
          r !== t && (a[x.camelCase(n)] = r),
          "string" == typeof n
            ? ((o = a[n]), null == o && (o = a[x.camelCase(n)]))
            : (o = a),
          o
        );
    }
  }
  function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? x.cache : e,
        s = o ? e[x.expando] : x.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t)
            ? (t = t.concat(x.map(t, x.camelCase)))
            : t in r
            ? (t = [t])
            : ((t = x.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
            (i = t.length);
          while (i--) delete r[t[i]];
          if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, I(a[s]))) &&
          (o
            ? x.cleanData([e], !0)
            : x.support.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = null));
      }
    }
  }
  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        (e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]), !!e && !I(e)
      );
    },
    data: function (e, t, n) {
      return R(e, t, n);
    },
    _data: function (e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return W(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || (t !== !0 && e.getAttribute("classid") === t);
    },
  }),
    x.fn.extend({
      data: function (e, n) {
        var r,
          i,
          o = null,
          a = 0,
          s = this[0];
        if (e === t) {
          if (
            this.length &&
            ((o = x.data(s)), 1 === s.nodeType && !x._data(s, "parsedAttrs"))
          ) {
            for (r = s.attributes; r.length > a; a++)
              (i = r[a].name),
                0 === i.indexOf("data-") &&
                  ((i = x.camelCase(i.slice(5))), $(s, i, o[i]));
            x._data(s, "parsedAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? ""
          : arguments.length > 1
          ? this.each(function () {
              x.data(this, e, n);
            })
          : s
          ? $(s, e, x.data(s, e))
          : null;
      },
    });
  function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      if (((r = e.getAttribute(i)), "string" == typeof r)) {
        try {
          r =
            "true" === r
              ? !0
              : "false" === r
              ? !1
              : "null" === r
              ? null
              : +r + "" === r
              ? +r
              : B.test(r)
              ? x.parseJSON(r)
              : r;
        } catch (o) {}
        x.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function I(e) {
    var t;
    for (t in e)
      if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  x.extend({
    queue: function (e, n, r) {
      var i;
      return e
        ? ((n = (n || "fx") + "queue"),
          (i = x._data(e, n)),
          r &&
            (!i || x.isArray(r)
              ? (i = x._data(e, n, x.makeArray(r)))
              : i.push(r)),
          i || [])
        : t;
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = x.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = x._queueHooks(e, t);
      "inprogress" === i && ((i = n.shift()), r--),
        i &&
          ("fx" === t && n.unshift("inprogress"),
          delete o.stop,
          i.call(e, a, o)),
        !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return (
        x._data(e, n) ||
        x._data(e, n, {
          empty: x.Callbacks("once memory").add(function () {
            x._removeData(e, t + "queue"), x._removeData(e, n);
          }),
        })
      );
    },
  }),
    x.fn.extend({
      queue: function (e, n) {
        var r = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), r--),
          r > arguments.length
            ? x.queue(this[0], e)
            : n === t
            ? this
            : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
              })
        );
      },
    });
  var z,
    X,
    U = /[\t\r\n\f]/g,
    V = /\r/g,
    Y = /^(?:input|select|textarea|button|object)$/i,
    J = /^(?:a|area)$/i,
    G = /^(?:checked|selected)$/i,
    Q = x.support.getSetAttribute,
    K = x.support.input;
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        l = "string" == typeof e && e;
      if (l)
        for (t = (e || "").match(T) || []; s > a; a++)
          if (
            ((n = this[a]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(U, " ") : " ")))
          ) {
            o = 0;
            while ((i = t[o++])) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        l = 0 === arguments.length || ("string" == typeof e && e);

      if (l)
        for (t = (e || "").match(T) || []; s > a; a++)
          if (
            ((n = this[a]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(U, " ") : "")))
          ) {
            o = 0;
            while ((i = t[o++]))
              while (r.indexOf(" " + i + " ") >= 0)
                r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : "";
          }
      return this;
    },
    hasClass: function (e) {
      var t = " " + e + " ",
        n = 0,
        r = this.length;
      for (; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  }),
    x.extend({
      valHooks: {},
      attr: function (e, n, r) {
        var o,
          a,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return typeof e.getAttribute === i
            ? x.prop(e, n, r)
            : ((1 === s && x.isXMLDoc(e)) ||
                ((n = n.toLowerCase()),
                (o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z))),
              r === t
                ? o && "get" in o && null !== (a = o.get(e, n))
                  ? a
                  : ((a = x.find.attr(e, n)), null == a ? t : a)
                : null !== r
                ? o && "set" in o && (a = o.set(e, r, n)) !== t
                  ? a
                  : (e.setAttribute(n, r + ""), r)
                : (x.removeAttr(e, n), t));
      },

      attrHooks: {},
      propFix: { for: "htmlFor", class: "className" },

      propHooks: {},
    }),
    (X = {}),
    x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
      var r = x.expr.attrHandle[n] || x.find.attr;
      x.expr.attrHandle[n] = (K && Q) || !G.test(n) ? "" : "";
    }),
    (K && Q) || (x.attrHooks.value = {}),
    Q ||
      ((z = {}),
      (x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (
        e,
        n,
        r
      ) {}),
      (x.valHooks.button = {
        set: z.set,
      }),
      (x.attrHooks.contenteditable = {}),
      x.each(["width", "height"], function (e, n) {})),
    x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {}),
    x.support.style || (x.attrHooks.style = {}),
    x.support.optSelected || (x.propHooks.selected = {}),
    x.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function () {
      (x.valHooks[this] = {}),
        x.support.checkOn || (x.valHooks[this].get = function (e) {});
    });
  var Z = /^(?:input|select|textarea)$/i,
    et = /^key/,
    tt = /^(?:mouse|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/,
    rt = /^([^.]*)(?:\.(.+)|)$/;
  function ot() {
    return !1;
  }
  (x.event = {
    global: {},
    add: function (e, n, r, o, a) {
      var s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v = x._data(e);
      if (v) {
        r.handler && ((c = r), (r = c.handler), (a = c.selector)),
          r.guid || (r.guid = x.guid++),
          (l = v.events) || (l = v.events = {}),
          (f = v.handle) ||
            ((f = v.handle = function (e) {
              return typeof x === i || (e && x.event.triggered === e.type)
                ? t
                : x.event.dispatch.apply(f.elem, arguments);
            }),
            (f.elem = e)),
          (n = (n || "").match(T) || [""]),
          (u = n.length);
        while (u--)
          (s = rt.exec(n[u]) || []),
            (g = y = s[1]),
            (m = (s[2] || "").split(".").sort()),
            g &&
              ((p = x.event.special[g] || {}),
              (g = (a ? p.delegateType : p.bindType) || g),
              (p = x.event.special[g] || {}),
              (d = x.extend(
                {
                  type: g,
                  origType: y,
                  data: o,
                  handler: r,
                  guid: r.guid,
                  selector: a,
                  needsContext: a && x.expr.match.needsContext.test(a),
                  namespace: m.join("."),
                },
                c
              )),
              (h = l[g]) ||
                ((h = l[g] = []),
                (h.delegateCount = 0),
                (p.setup && p.setup.call(e, o, m, f) !== !1) ||
                  (e.addEventListener
                    ? e.addEventListener(g, f, !1)
                    : e.attachEvent && e.attachEvent("on" + g, f))),
              p.add &&
                (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
              a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
              (x.event.global[g] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m = x.hasData(e) && x._data(e);
      if (m && (c = m.events)) {
        (t = (t || "").match(T) || [""]), (u = t.length);
        while (u--)
          if (
            ((s = rt.exec(t[u]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (p = x.event.special[d] || {}),
              (d = (r ? p.delegateType : p.bindType) || d),
              (f = c[d] || []),
              (s =
                s[2] &&
                RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (l = o = f.length);
            while (o--)
              (a = f[o]),
                (!i && g !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  p.remove && p.remove.call(e, a));
            l &&
              !f.length &&
              ((p.teardown && p.teardown.call(e, h, m.handle) !== !1) ||
                x.removeEvent(e, d, m.handle),
              delete c[d]);
          } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, o) {
      var s,
        l,
        u,
        c,
        p,
        f,
        d,
        h = [i || a],
        g = v.call(n, "type") ? n.type : n,
        m = v.call(n, "namespace") ? n.namespace.split(".") : [];
      if (
        ((u = f = i = i || a),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !nt.test(g + x.event.triggered) &&
          (g.indexOf(".") >= 0 &&
            ((m = g.split(".")), (g = m.shift()), m.sort()),
          (l = 0 > g.indexOf(":") && "on" + g),
          (n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n)),
          (n.isTrigger = o ? 2 : 3),
          (n.namespace = m.join(".")),
          (n.namespace_re = n.namespace
            ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = t),
          n.target || (n.target = i),
          (r = null == r ? [n] : x.makeArray(r, [n])),
          (p = x.event.special[g] || {}),
          o || !p.trigger || p.trigger.apply(i, r) !== !1))
      ) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (
            c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            h.push(u), (f = u);
          f === (i.ownerDocument || a) &&
            h.push(f.defaultView || f.parentWindow || e);
        }
        d = 0;
        while ((u = h[d++]) && !n.isPropagationStopped())
          (n.type = d > 1 ? c : p.bindType || g),
            (s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle")),
            s && s.apply(u, r),
            (s = l && u[l]),
            s &&
              x.acceptData(u) &&
              s.apply &&
              s.apply(u, r) === !1 &&
              n.preventDefault();
        if (
          ((n.type = g),
          !o &&
            !n.isDefaultPrevented() &&
            (!p._default || p._default.apply(h.pop(), r) === !1) &&
            x.acceptData(i) &&
            l &&
            i[g] &&
            !x.isWindow(i))
        ) {
          (f = i[l]), f && (i[l] = null), (x.event.triggered = g);
          try {
            i[g]();
          } catch (y) {}
          (x.event.triggered = t), f && (i[l] = f);
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = x.event.fix(e);
      var n,
        r,
        i,
        o,
        a,
        s = [],
        l = g.call(arguments),
        u = (x._data(this, "events") || {})[e.type] || [],
        c = x.event.special[e.type] || {};
      if (
        ((l[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || c.preDispatch.call(this, e) !== !1)
      ) {
        (s = x.event.handlers.call(this, e, u)), (n = 0);
        while ((o = s[n++]) && !e.isPropagationStopped()) {
          (e.currentTarget = o.elem), (a = 0);
          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
              ((e.handleObj = i),
              (e.data = i.data),
              (r = (
                (x.event.special[i.origType] || {}).handle || i.handler
              ).apply(o.elem, l)),
              r !== t &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
        i,
        o,
        a,
        s = [],
        l = n.delegateCount,
        u = e.target;
      if (l && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; l > a; a++)
              (i = n[a]),
                (r = i.selector + " "),
                o[r] === t &&
                  (o[r] = i.needsContext
                    ? x(r, this).index(u) >= 0
                    : x.find(r, this, null, [u]).length),
                o[r] && o.push(i);
            o.length && s.push({ elem: u, handlers: o });
          }
      return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
    },
    fix: function (e) {
      if (e[x.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      s ||
        (this.fixHooks[i] = s = tt.test(i)
          ? this.mouseHooks
          : et.test(i)
          ? this.keyHooks
          : {}),
        (r = s.props ? this.props.concat(s.props) : this.props),
        (e = new x.Event(o)),
        (t = r.length);
      while (t--) (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = o.srcElement || a),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        s.filter ? s.filter(e, o) : e
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (e, n) {
        var r,
          i,
          o,
          s = n.button,
          l = n.fromElement;
        return (
          null == e.pageX &&
            null != n.clientX &&
            ((i = e.target.ownerDocument || a),
            (o = i.documentElement),
            (r = i.body),
            (e.pageX =
              n.clientX +
              ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              n.clientY +
              ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
              ((o && o.clientTop) || (r && r.clientTop) || 0))),
          !e.relatedTarget &&
            l &&
            (e.relatedTarget = l === e.target ? n.toElement : l),
          e.which ||
            s === t ||
            (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        delegateType: "focusin",
      },
      blur: {
        delegateType: "focusout",
      },
      click: {},
      beforeunload: {},
    },
  }),
    (x.removeEvent = a.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : ""),
    (x.Event = function (e, n) {
      return this instanceof x.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                e.returnValue === !1 ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? it
                  : ot))
            : (this.type = e),
          n && x.extend(this, n),
          (this.timeStamp = (e && e.timeStamp) || x.now()),
          (this[x.expando] = !0),
          t)
        : new x.Event(e, n);
    }),
    (x.Event.prototype = {
      isDefaultPrevented: ot,
      isPropagationStopped: ot,
      isImmediatePropagationStopped: ot,
    }),
    x.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        x.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (!i || (i !== r && !x.contains(r, i))) &&
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    x.support.submitBubbles || (x.event.special.submit = {}),
    x.support.changeBubbles || (x.event.special.change = {}),
    x.support.focusinBubbles ||
      x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          r = function (e) {};
        x.event.special[t] = {};
      }),
    x.fn.extend({
      on: function (e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
          "string" != typeof n && ((r = r || n), (n = t));
          for (a in e) this.on(a, n, r, e[a], o);
          return this;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = t))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = t))
                : ((i = r), (r = n), (n = t))),
          i === !1)
        )
          i = ot;
        else if (!i) return this;
        return (
          1 === o &&
            ((s = i),
            (i = function (e) {
              return x().off(e), s.apply(this, arguments);
            }),
            (i.guid = s.guid || (s.guid = x.guid++))),
          this.each(function () {
            x.event.add(this, e, i, r, n);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, n, r) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            x(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, n, e[o]);
          return this;
        }
        return (
          (n === !1 || "function" == typeof n) && ((r = n), (n = t)),
          r === !1 && (r = ot),
          this.each(function () {
            x.event.remove(this, e, r, n);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          x.event.trigger(e, t, this);
        });
      },
    });
  var st = /^.[^:#\[\.,]*$/,
    lt = /^(?:parents|prev(?:Until|All))/,
    ut = x.expr.match.needsContext,
    ct = { children: !0, contents: !0, next: !0, prev: !0 };
  x.fn.extend({
    find: function (e) {
      var t,
        n = [],
        r = this,
        i = r.length;

      for (t = 0; i > t; t++) x.find(e, r[t], n);
      return (
        (n = this.pushStack(i > 1 ? x.unique(n) : n)),
        (n.selector = this.selector ? this.selector + " " + e : e),
        n
      );
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? x.inArray(this[0], x(e))
          : x.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? x(e, t)
            : x.makeArray(e && e.nodeType ? [e] : e),
        r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
  });
  x.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      children: function (e) {
        return x.sibling(e.firstChild);
      },
    },
    function (e, t) {
      x.fn[e] = function (n, r) {
        var i = x.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = x.filter(r, i)),
          this.length > 1 &&
            (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())),
          this.pushStack(i)
        );
      };
    }
  ),
    x.extend({
      filter: function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? x.find.matchesSelector(r, e)
              ? [r]
              : []
            : x.find.matches(
                e,
                x.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      },

      sibling: function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });

  function dt(e) {
    var t = ht.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }
  var ht =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gt = / jQuery\d+="(?:null|\d+)"/g,
    mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
    yt = /^\s+/,
    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bt = /<([\w:]+)/,
    xt = /<tbody/i,
    wt = /<|&#?\w+;/,
    Tt = /<(?:script|style|link)/i,
    Ct = /^(?:checkbox|radio)$/i,
    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^$|\/(?:java|ecma)script/i,
    Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    At = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    jt = dt(a),
    Dt = jt.appendChild(a.createElement("div"));
  (At.optgroup = At.option),
    (At.tbody = At.tfoot = At.colgroup = At.caption = At.thead),
    (At.th = At.td),
    x.fn.extend({
      text: function (e) {
        return x.access(
          this,
          function (e) {
            return e === t
              ? x.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || a).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Lt(this, e);
            t.appendChild(e);
          }
        });
      },

      remove: function (e, t) {
        var n,
          r = e ? x.filter(e, this) : this,
          i = 0;
        for (; null != (n = r[i]); i++)
          t || 1 !== n.nodeType || x.cleanData(Ft(n)),
            n.parentNode &&
              (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        var e,
          t = 0;
        for (; null != (e = this[t]); t++) {
          1 === e.nodeType && x.cleanData(Ft(e, !1));
          while (e.firstChild) e.removeChild(e.firstChild);
          e.options && x.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      domManip: function (e, t, n) {
        e = d.apply([], e);
        var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);
        if (
          g ||
          (!(1 >= c || "string" != typeof h || x.support.checkClone) &&
            Nt.test(h))
        );
        if (
          c &&
          ((l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this)),
          (r = l.firstChild),
          1 === l.childNodes.length && (l = r),
          r)
        ) {
          for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)
            (i = l),
              u !== f &&
                ((i = x.clone(i, !0, !0)), o && x.merge(a, Ft(i, "script"))),
              t.call(this[u], i, u);
          if (o)
            for (
              s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0;
              o > u;
              u++
            )
              (i = a[u]),
                kt.test(i.type || "") &&
                  !x._data(i, "globalEval") &&
                  x.contains(s, i) &&
                  (i.src
                    ? x._evalUrl(i.src)
                    : x.globalEval(
                        (i.text || i.textContent || i.innerHTML || "").replace(
                          St,
                          ""
                        )
                      ));
          l = r = null;
        }
        return this;
      },
    });
  function Lt(e, t) {
    return x.nodeName(e, "table") &&
      x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function Ht(e) {}
  function qt(e) {}
  function _t(e, t) {}
  x.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (e, t) {
      x.fn[e] = function (e) {
        var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;
        for (; a >= r; r++)
          (n = r === a ? this : this.clone(!0)),
            x(o[r])[t](n),
            h.apply(i, n.get());
        return this.pushStack(i);
      };
    }
  );
  function Ft(e, n) {
    var r,
      o,
      a = 0,
      s =
        typeof e.getElementsByTagName !== i
          ? e.getElementsByTagName(n || "*")
          : typeof e.querySelectorAll !== i
          ? e.querySelectorAll(n || "*")
          : t;
    if (!s)
      for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)
        !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    return n === t || (n && x.nodeName(e, n)) ? x.merge([e], s) : s;
  }
  function Bt(e) {}
  x.extend({
    buildFragment: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        l,
        u,
        c,
        p = e.length,
        f = dt(t),
        d = [],
        h = 0;
      for (; p > h; h++)
        if (((o = e[h]), o || 0 === o))
          if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
          else if (wt.test(o)) {
            (s = s || f.appendChild(t.createElement("div"))),
              (l = (bt.exec(o) || ["", ""])[1].toLowerCase()),
              (c = At[l] || At._default),
              (s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2]),
              (i = c[0]);
            while (i--) s = s.lastChild;
            if (
              (!x.support.leadingWhitespace &&
                yt.test(o) &&
                d.push(t.createTextNode(yt.exec(o)[0])),
              !x.support.tbody)
            ) {
              (o =
                "table" !== l || xt.test(o)
                  ? "<table>" !== c[1] || xt.test(o)
                    ? 0
                    : s
                  : s.firstChild),
                (i = o && o.childNodes.length);
              while (i--)
                x.nodeName((u = o.childNodes[i]), "tbody") &&
                  !u.childNodes.length &&
                  o.removeChild(u);
            }
            x.merge(d, s.childNodes), (s.textContent = "");
            while (s.firstChild) s.removeChild(s.firstChild);
            s = f.lastChild;
          } else d.push(t.createTextNode(o));
      s && f.removeChild(s),
        x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
        (h = 0);
      while ((o = d[h++]))
        if (
          (!r || -1 === x.inArray(o, r)) &&
          ((a = x.contains(o.ownerDocument, o)),
          (s = Ft(f.appendChild(o), "script")),
          a && _t(s),
          n)
        ) {
          i = 0;
          while ((o = s[i++])) kt.test(o.type || "") && n.push(o);
        }
      return (s = null), f;
    },
    cleanData: function (e, t) {
      var n,
        r,
        o,
        a,
        s = 0,
        l = x.expando,
        u = x.cache,
        c = x.support.deleteExpando,
        f = x.event.special;
      for (; null != (n = e[s]); s++)
        if ((t || x.acceptData(n)) && ((o = n[l]), (a = o && u[o]))) {
          if (a.events)
            for (r in a.events)
              f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          u[o] &&
            (delete u[o],
            c
              ? delete n[l]
              : typeof n.removeAttribute !== i
              ? n.removeAttribute(l)
              : (n[l] = null),
            p.push(o));
        }
    },
  }),
    x.fn.extend({});
  var Pt,
    Rt,
    Wt,
    $t = /alpha\([^)]*\)/i,
    It = /opacity\s*=\s*([^)]*)/,
    zt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/,
    Ut = /^margin/,
    Vt = RegExp("^(" + w + ")(.*)$", "i"),
    Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
    Jt = RegExp("^([+-])=(" + w + ")", "i"),
    Gt = { BODY: "block" },
    Qt = { position: "absolute", visibility: "hidden", display: "block" },
    Kt = { letterSpacing: 0, fontWeight: 400 },
    Zt = ["Top", "Right", "Bottom", "Left"],
    en = ["Webkit", "O", "Moz", "ms"];
  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = en.length;
    while (i--) if (((t = en[i] + n), t in e)) return t;
    return r;
  }
  function nn(e, t) {
    return (
      (e = t || e),
      "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    );
  }
  function rn(e, t) {
    var n,
      r,
      i,
      o = [],
      a = 0,
      s = e.length;
    for (; s > a; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = x._data(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[a] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                nn(r) &&
                (o[a] = x._data(r, "olddisplay", ln(r.nodeName))))
            : o[a] ||
              ((i = nn(r)),
              ((n && "none" !== n) || !i) &&
                x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    for (a = 0; s > a; a++)
      (r = e[a]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  x.fn.extend({
    css: function (e, n) {
      return x.access(
        this,
        function (e, n, r) {
          var i,
            o,
            a = {},
            s = 0;
          if (x.isArray(n)) {
            for (o = Rt(e), i = n.length; i > s; s++)
              a[n[s]] = x.css(e, n[s], !1, o);
            return a;
          }
          return r !== t ? x.style(e, n, r) : x.css(e, n);
        },
        e,
        n,
        arguments.length > 1
      );
    },
    show: function () {
      return rn(this, !0);
    },
    hide: function () {
      return rn(this);
    },
  }),
    x.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Wt(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: x.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;
          if (
            ((n = x.cssProps[l] || (x.cssProps[l] = tn(u, l))),
            (s = x.cssHooks[n] || x.cssHooks[l]),
            r === t)
          )
            return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
          if (
            ((a = typeof r),
            "string" === a &&
              (o = Jt.exec(r)) &&
              ((r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n))),
              (a = "number")),
            !(
              null == r ||
              ("number" === a && isNaN(r)) ||
              ("number" !== a || x.cssNumber[l] || (r += "px"),
              x.support.clearCloneStyle ||
                "" !== r ||
                0 !== n.indexOf("background") ||
                (u[n] = "inherit"),
              s && "set" in s && (r = s.set(e, r, i)) === t)
            ))
          )
            try {
              u[n] = r;
            } catch (c) {}
        }
      },
      css: function (e, n, r, i) {
        var o,
          a,
          s,
          l = x.camelCase(n);
        return (
          (n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l))),
          (s = x.cssHooks[n] || x.cssHooks[l]),
          s && "get" in s && (a = s.get(e, !0, r)),
          a === t && (a = Wt(e, n, i)),
          "normal" === a && n in Kt && (a = Kt[n]),
          "" === r || r
            ? ((o = parseFloat(a)), r === !0 || x.isNumeric(o) ? o || 0 : a)
            : a
        );
      },
    }),
    e.getComputedStyle
      ? ((Rt = function (t) {
          return e.getComputedStyle(t, null);
        }),
        (Wt = function (e, n, r) {
          var i,
            o,
            a,
            s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
          return (
            s &&
              ("" !== l ||
                x.contains(e.ownerDocument, e) ||
                (l = x.style(e, n)),
              Yt.test(l) &&
                Ut.test(n) &&
                ((i = u.width),
                (o = u.minWidth),
                (a = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = l),
                (l = s.width),
                (u.width = i),
                (u.minWidth = o),
                (u.maxWidth = a))),
            l
          );
        }))
      : a.documentElement.currentStyle &&
        ((Rt = function (e) {}), (Wt = function (e, n, r) {}));
  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
      a = 0;
    for (; 4 > o; o += 2)
      "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
        r
          ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n &&
              (a -= x.css(e, "border" + Zt[o] + "Width", !0, i)))
          : ((a += x.css(e, "padding" + Zt[o], !0, i)),
            "padding" !== n &&
              (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
    return a;
  }
  function sn(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Rt(e),
      a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (
        ((i = Wt(e, t, o)),
        (0 > i || null == i) && (i = e.style[t]),
        Yt.test(i))
      )
        return i;
      (r = a && (x.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function ln(e) {}
  x.each(["height", "width"], function (e, n) {
    x.cssHooks[n] = {
      get: function (e, r, i) {
        return r
          ? 0 === e.offsetWidth && Xt.test(x.css(e, "display"))
            ? x.swap(e, Qt, function () {})
            : sn(e, n, i)
          : t;
      },
      set: function (e, t, r) {
        var i = r && Rt(e);
        return on(
          e,
          t,
          r
            ? an(
                e,
                n,
                r,
                x.support.boxSizing &&
                  "border-box" === x.css(e, "boxSizing", !1, i),
                i
              )
            : 0
        );
      },
    };
  }),
    x.support.opacity || (x.cssHooks.opacity = {}),
    x(function () {
      x.support.reliableMarginRight || (x.cssHooks.marginRight = {}),
        !x.support.pixelPosition &&
          x.fn.position &&
          x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {};
          });
    }),
    x.expr &&
      x.expr.filters &&
      ((x.expr.filters.hidden = function (e) {}),
      (x.expr.filters.visible = function (e) {})),
    x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (x.cssHooks[e + t] = {}), Ut.test(e) || (x.cssHooks[e + t].set = on);
    });
  x.fn.extend({}), (x.param = function (e, n) {});
  x.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
      " "
    ),
    function (e, t) {
      x.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }
  ),
    x.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
    });
  var mn,
    yn,
    vn = x.now(),
    bn = /\?/,
    xn = /#.*$/,
    wn = /([?&])_=[^&]*/,
    Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Nn = /^(?:GET|HEAD)$/,
    kn = /^\/\//,
    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Sn = x.fn.load,
    An = {},
    jn = {},
    Dn = "*/".concat("*");
  try {
    yn = o.href;
  } catch (Ln) {
    (yn = a.createElement("a")), (yn.href = ""), (yn = yn.href);
  }
  mn = En.exec(yn.toLowerCase()) || [];
  function Hn(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function qn(e, n, r, i) {}
  function _n(e, n) {
    var r,
      i,
      o = x.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && x.extend(!0, e, r), e;
  }
  (x.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
      o,
      a,
      s = this,
      l = e.indexOf(" ");
    return (
      l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
      x.isFunction(n)
        ? ((r = n), (n = t))
        : n && "object" == typeof n && (a = "POST"),
      s.length > 0 &&
        x
          .ajax({ url: e, type: a, dataType: "html", data: n })
          .done(function (e) {})
          .complete(),
      this
    );
  }),
    x.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {}
    ),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: yn,
        type: "GET",
        isLocal: Cn.test(mn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Dn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": x.parseJSON,
          "text xml": x.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
      },
      ajaxPrefilter: Hn(An),
      ajaxTransport: Hn(jn),
    }),
    x.each(["get", "post"], function (e, n) {
      x[n] = function (e, r, i, o) {};
    });
  x.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
  }),
    x.ajaxPrefilter("script", function (e) {}),
    x.ajaxTransport("script", function (e) {});
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {},
  }),
    x.ajaxPrefilter("json jsonp", function (n, r, i) {});
  var Pn,
    Rn,
    Wn = 0,
    $n = e.ActiveXObject && function () {};
  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function zn() {}
  (x.ajaxSettings.xhr = e.ActiveXObject ? function () {} : In),
    (Rn = x.ajaxSettings.xhr()),
    (x.support.cors = !!Rn && "withCredentials" in Rn),
    (Rn = x.support.ajax = !!Rn),
    Rn && x.ajaxTransport(function (n) {});
  var Xn,
    Un,
    Vn = /^(?:toggle|show|hide)$/,
    Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
    Jn = /queueHooks$/,
    Gn = [nr],
    Qn = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = Yn.exec(t),
            o = (i && i[3]) || (x.cssNumber[e] ? "" : "px"),
            a =
              (x.cssNumber[e] || ("px" !== o && +r)) &&
              Yn.exec(x.css(n.elem, e)),
            s = 1,
            l = 20;
          if (a && a[3] !== o) {
            (o = o || a[3]), (i = i || []), (a = +r || 1);
            do (s = s || ".5"), (a /= s), x.style(n.elem, e, a + o);
            while (s !== (s = n.cur() / r) && 1 !== s && --l);
          }
          return (
            i &&
              ((a = n.start = +a || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
  function Kn() {
    return (
      setTimeout(function () {
        Xn = t;
      }),
      (Xn = x.now())
    );
  }
  function Zn(e, t, n) {
    var r,
      i = (Qn[t] || []).concat(Qn["*"]),
      o = 0,
      a = i.length;
    for (; a > o; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function er(e, t, n) {
    var r,
      i,
      o = 0,
      a = Gn.length,
      s = x.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;
        for (; l > a; a++) u.tweens[a].run(o);
        return (
          s.notifyWith(e, [u, o, n]),
          1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Xn || Kn(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = x.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
      }),
      c = u.props;
    for (tr(c, u.opts.specialEasing); a > o; o++)
      if ((r = Gn[o].call(u, e, c, u.opts))) return r;
    return (
      x.map(c, Zn, u),
      x.isFunction(u.opts.start) && u.opts.start.call(e, u),
      x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function tr(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = x.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        x.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = x.cssHooks[r]),
        a && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  x.Animation = x.extend(er, {});
  function nr(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      l,
      u = this,
      c = {},
      p = e.style,
      f = e.nodeType && nn(e),
      d = x._data(e, "fxshow");
    n.queue ||
      ((s = x._queueHooks(e, "fx")),
      null == s.unqueued &&
        ((s.unqueued = 0), (l = s.empty.fire), (s.empty.fire = function () {})),
      s.unqueued++,
      u.always(function () {})),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        "inline" === x.css(e, "display") &&
          "none" === x.css(e, "float") &&
          (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      n.overflow &&
        ((p.overflow = "hidden"),
        x.support.shrinkWrapBlocks || u.always(function () {}));
    for (r in t)
      if (((i = t[r]), Vn.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (f ? "hide" : "show"))
        )
          continue;
        c[r] = (d && d[r]) || x.style(e, r);
      }
    if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : (d = x._data(e, "fxshow", {})),
        o && (d.hidden = !f),
        f
          ? x(e).show()
          : u.done(function () {
              x(e).hide();
            }),
        u.done(function () {
          var t;
          x._removeData(e, "fxshow");
          for (t in c) x.style(e, t, c[t]);
        });
      for (r in c)
        (a = Zn(f ? d[r] : 0, r, u)),
          r in d ||
            ((d[r] = a.start),
            f &&
              ((a.end = a.start),
              (a.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }
  (x.Tween = rr),
    (rr.prototype = {
      constructor: rr,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (x.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = rr.propHooks[this.prop];
        return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = rr.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? x.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : rr.propHooks._default.set(this),
          this
        );
      },
    }),
    (rr.prototype.init.prototype = rr.prototype),
    (rr.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = x.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop])
            ? x.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {}),
    x.each(["toggle", "show", "hide"], function (e, t) {
      var n = x.fn[t];
      x.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ir(t, !0), e, r, i);
      };
    }),
    x.fn.extend({
      animate: function (e, t, n, r) {
        var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function () {
            var t = er(this, x.extend({}, e), o);
            (i || x._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        );
      },
    });
  function ir(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      (n = Zt[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  x.each(
    {
      slideDown: ir("show"),
      slideUp: ir("hide"),
      slideToggle: ir("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" },
    },
    function (e, t) {
      x.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }
  ),
    (x.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? x.extend({}, e)
          : {
              complete: n || (!n && t) || (x.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !x.isFunction(t) && t),
            };
      return (
        (r.duration = x.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in x.fx.speeds
          ? x.fx.speeds[r.duration]
          : x.fx.speeds._default),
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue);
        }),
        r
      );
    }),
    (x.easing = {}),
    (x.timers = []),
    (x.fx = rr.prototype.init),
    (x.fx.tick = function () {
      var e,
        n = x.timers,
        r = 0;
      for (Xn = x.now(); n.length > r; r++)
        (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
      n.length || x.fx.stop(), (Xn = t);
    }),
    (x.fx.timer = function (e) {
      e() && x.timers.push(e) && x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function () {
      Un || (Un = setInterval(x.fx.tick, x.fx.interval));
    }),
    (x.fx.stop = function () {
      clearInterval(Un), (Un = null);
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fx.step = {}),
    x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {}),
    (x.fn.offset = function (e) {
      if (arguments.length) return e === t ? this : this.each(function (t) {});
      var n,
        r,
        o = { top: 0, left: 0 },
        a = this[0],
        s = a && a.ownerDocument;
      if (s)
        return (
          (n = s.documentElement),
          x.contains(n, a)
            ? (typeof a.getBoundingClientRect !== i &&
                (o = a.getBoundingClientRect()),
              (r = or(s)),
              {
                top:
                  o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left:
                  o.left +
                  (r.pageXOffset || n.scrollLeft) -
                  (n.clientLeft || 0),
              })
            : o
        );
    }),
    (x.offset = {}),
    x.fn.extend({}),
    x.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
          return x.access(
            this,
            function (e, i, o) {
              var a = or(e);
              return o === t
                ? a
                  ? n in a
                    ? a[n]
                    : a.document.documentElement[i]
                  : e[i]
                : (a
                    ? a.scrollTo(
                        r ? x(a).scrollLeft() : o,
                        r ? o : x(a).scrollTop()
                      )
                    : (e[i] = o),
                  t);
            },
            e,
            i,
            arguments.length,
            null
          );
        };
      }
    );
  function or(e) {
    return x.isWindow(e)
      ? e
      : 9 === e.nodeType
      ? e.defaultView || e.parentWindow
      : !1;
  }
  x.each({ Height: "height", Width: "width" }, function (e, n) {
    x.each(
      { padding: "inner" + e, content: n, "": "outer" + e },
      function (r, i) {
        x.fn[i] = function (i, o) {
          var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (i === !0 || o === !0 ? "margin" : "border");
          return x.access(
            this,
            function (n, r, i) {
              var o;
              return x.isWindow(n)
                ? n.document.documentElement["client" + e]
                : 9 === n.nodeType
                ? ((o = n.documentElement),
                  Math.max(
                    n.body["scroll" + e],
                    o["scroll" + e],
                    n.body["offset" + e],
                    o["offset" + e],
                    o["client" + e]
                  ))
                : i === t
                ? x.css(n, r, s)
                : x.style(n, r, i, s);
            },
            n,
            a ? i : t,
            a,
            null
          );
        };
      }
    );
  }),
    (x.fn.size = function () {}),
    (x.fn.andSelf = x.fn.addBack),
    "object" == typeof module && module && "object" == typeof module.exports
      ? (module.exports = x)
      : ((e.jQuery = e.$ = x),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {}));
})(window);
