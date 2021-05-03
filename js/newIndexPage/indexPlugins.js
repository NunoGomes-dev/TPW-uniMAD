(function (a, b, c) {
  "use strict";
  var d = a.document,
    e = a.Modernizr,
    f = function (a) {},
    g = "Moz Webkit O Ms".split(" "),
    h = function (a) {
      var b = d.documentElement.style,
        c;
      if (typeof b[a] == "string") return a;
      a = f(a);
      for (var e = 0, h = g.length; e < h; e++) {
        c = g[e] + a;
        if (typeof b[c] == "string") return c;
      }
    },
    i = h("transform"),
    j = h("transitionProperty"),
    k = {
      csstransforms: function () {
        return !!i;
      },
      csstransforms3d: function () {
        var a = !!h("perspective");
        if (a) {
          var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
            d = "@media (" + c.join("transform-3d),(") + "modernizr)",
            e = b(
              "<style>" + d + "{#modernizr{height:3px}}" + "</style>"
            ).appendTo("head"),
            f = b('<div id="modernizr" />').appendTo("html");
          (a = f.height() === 3), f.remove(), e.remove();
        }
        return a;
      },
      csstransitions: function () {
        return !!j;
      },
    },
    l;
  if (e) for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
  else {
    e = a.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };
    var m = " ",
      n;
    for (l in k) (n = k[l]()), (e[l] = n), (m += " " + (n ? "" : "no-") + l);
    b("html").addClass(m);
  }
  if (e.csstransforms) {
    (b.cssNumber.scale = !0),
      (b.cssHooks.scale = {}),
      (b.fx.step.scale = function (a) {}),
      (b.cssNumber.translate = !0),
      (b.cssHooks.translate = {});
  }
  var q, r;
  e.csstransitions &&
    ((q = {
      WebkitTransitionProperty: "webkitTransitionEnd",
      MozTransitionProperty: "transitionend",
      OTransitionProperty: "oTransitionEnd otransitionend",
      transitionProperty: "transitionend",
    }[j]),
    (r = h("transitionDuration")));
  var s = b.event,
    t = b.event.handle ? "handle" : "dispatch",
    u;
  (s.special.smartresize = {}),
    (b.fn.smartresize = function (a) {}),
    (b.Isotope = function (a, c, d) {});
  var v = ["width", "height"],
    w = b(a);
  (b.Isotope.settings = {
    resizable: !0,
    layoutMode: "masonry",
    containerClass: "isotope",
    itemClass: "isotope-item",
    hiddenClass: "isotope-hidden",
    hiddenStyle: { opacity: 0, scale: 0.001 },
    visibleStyle: { opacity: 1, scale: 1 },
    containerStyle: { position: "relative", overflow: "hidden" },
    animationEngine: "best-available",
    animationOptions: { queue: !1, duration: 800 },
    sortBy: "original-order",
    sortAscending: !0,
    resizesContainer: !0,
    transformsEnabled: !0,
    itemPositionDataEnabled: !1,
  }),
    (b.Isotope.prototype = {}),
    (b.fn.imagesLoaded = function (a) {});
  b.fn.isotope = function (a, c) {};
})(window, jQuery);
(function () {
  var t = [].indexOf || function (t) {},
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {});
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || a)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {});
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {});
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function () {};
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i;
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false,
    };
    h = {
      refresh: function () {
        return n.each(c, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}.call(this));
(function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function () {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length)
              setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);
(function (b) {
  function t() {
    var e,
      a = { height: k.innerHeight, width: k.innerWidth };
    a.height ||
      (!(e = l.compatMode) && b.support.boxModel) ||
      ((e = "CSS1Compat" === e ? f : l.body),
      (a = { height: e.clientHeight, width: e.clientWidth }));
    return a;
  }
  function u() {
    var e = b(),
      g,
      q = 0;
    b.each(m, function (a, b) {
      var c = b.data.selector,
        d = b.$element;
      e = e.add(c ? d.find(c) : d);
    });
    if ((g = e.length))
      for (
        d = d || t(),
          a = a || {
            top: k.pageYOffset || f.scrollTop || l.body.scrollTop,
            left: k.pageXOffset || f.scrollLeft || l.body.scrollLeft,
          };
        q < g;
        q++
      )
        if (b.contains(f, e[q])) {
          var h = b(e[q]),
            n = h.height(),
            p = h.width(),
            c = h.offset(),
            r = h.data("inview");
          if (!a || !d) break;
          c.top + n > a.top &&
          c.top < a.top + d.height &&
          c.left + p > a.left &&
          c.left < a.left + d.width
            ? ((p =
                a.left > c.left
                  ? "right"
                  : a.left + d.width < c.left + p
                  ? "left"
                  : "both"),
              (n =
                a.top > c.top
                  ? "bottom"
                  : a.top + d.height < c.top + n
                  ? "top"
                  : "both"),
              (c = p + "-" + n),
              (r && r === c) ||
                h.data("inview", c).trigger("inview", [!0, p, n]))
            : r && h.data("inview", !1).trigger("inview", [!1]);
        }
  }
  var m = {},
    d,
    a,
    l = document,
    k = window,
    f = l.documentElement,
    s = b.expando,
    g;
  b.event.special.inview = {
    add: function (a) {
      m[a.guid + "-" + this[s]] = { data: a, $element: b(this) };
      g || b.isEmptyObject(m) || (g = setInterval(u, 250));
    },
  };
  b(k).bind("scroll resize", function () {
    d = a = null;
  });
  !f.addEventListener &&
    f.attachEvent &&
    f.attachEvent("onfocusin", function () {});
})(jQuery);
(function (e) {
  "function" === typeof define && define.amd
    ? define(["jquery"], e)
    : e(jQuery);
})(function (e) {
  var y = !1,
    C = !1,
    J = 5e3,
    K = 2e3,
    x = 0,
    F = ["ms", "moz", "webkit", "o"],
    s = window.requestAnimationFrame || !1,
    v = window.cancelAnimationFrame || !1;
  if (!s)
    for (var L in F) {
      var D = F[L];
      s || (s = window[D + "RequestAnimationFrame"]);
      v ||
        (v =
          window[D + "CancelAnimationFrame"] ||
          window[D + "CancelRequestAnimationFrame"]);
    }
  var z = window.MutationObserver || window.WebKitMutationObserver || !1,
    G = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "5px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 60,
      mousescrollstep: 24,
      touchbehavior: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: (function () {
        var e = document.getElementsByTagName("script"),
          e = e[e.length - 1].src.split("?")[0];
        return 0 < e.split("/").length
          ? e.split("/").slice(0, -1).join("/") + "/"
          : "";
      })(),
    },
    w = e.fn.scrollTop;
  e.cssHooks.pageYOffset = {};
  e.fn.scrollTop = function (g) {
    if ("undefined" == typeof g) {
      var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
      return b && b.ishwscroll ? b.getScrollTop() : w.call(this);
    }
    return this.each(function () {});
  };
  var A = e.fn.scrollLeft;
  e.cssHooks.pageXOffset = {};
  e.fn.scrollLeft = function (g) {
    if ("undefined" == typeof g) {
      var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
      return b && b.ishwscroll ? b.getScrollLeft() : A.call(this);
    }
    return this.each(function () {});
  };
  var B = function (g) {
    var b = this;
    this.length = 0;
    this.name = "nicescrollarray";
    if (g)
      for (var h = 0; h < g.length; h++) {
        var k = e.data(g[h], "__nicescroll") || !1;
        k && ((this[this.length] = k), this.length++);
      }
    return this;
  };
  (function (e, b, h) {
    for (var k = 0; k < b.length; k++) h(e, b[k]);
  })(
    B.prototype,
    "show hide toggle onResize resize remove stop doScrollPos".split(" "),
    function (e, b) {}
  );
  e.fn.getNiceScroll = function (g) {};
  e.extend(e.expr[":"], {
    nicescroll: function (g) {},
  });
  e.fn.niceScroll = function (g, b) {};
  window.NiceScroll = {
    getjQuery: function () {},
  };
  e.nicescroll || ((e.nicescroll = new B()), (e.nicescroll.options = G));
});
(function (b) {
  b.fn.matchHeight = function (a) {
    if (1 >= this.length) return this;
    a = "undefined" !== typeof a ? a : !0;
    b.fn.matchHeight._groups.push({ elements: this, byRow: a });
    b.fn.matchHeight._apply(this, a);
    return this;
  };
  b.fn.matchHeight._apply = function (a, d) {};
  b.fn.matchHeight._applyDataApi = function () {
    var a = {};
    b("[data-match-height], [data-mh]").each(function () {});
    b.each(a, function () {});
  };
  b.fn.matchHeight._groups = [];
  var g = -1;
  b.fn.matchHeight._update = function (a) {
    if (a && "resize" === a.type) {
      a = b(window).width();
      if (a === g) return;
      g = a;
    }
    b.each(b.fn.matchHeight._groups, function () {});
  };
  b(b.fn.matchHeight._applyDataApi);
  b(window).bind("load resize orientationchange", b.fn.matchHeight._update);
})(jQuery);

(function (a, d, p) {
  a.fn.backstretch = function (c, b) {
    (c === p || 0 === c.length) &&
      a.error("No images were supplied for Backstretch");
    0 === a(d).scrollTop() && d.scrollTo(0, 0);
    return this.each(function () {
      var d = a(this),
        g = d.data("backstretch");
      if (g) {
        if ("string" == typeof c && "function" == typeof g[c]) {
          g[c](b);
          return;
        }
        b = a.extend(g.options, b);
        g.destroy(!0);
      }
      g = new q(this, c, b);
      d.data("backstretch", g);
    });
  };
  a.backstretch = function (c, b) {};
  a.expr[":"].backstretch = function (c) {};
  a.fn.backstretch.defaults = {
    centeredX: !0,
    centeredY: !0,
    duration: 5e3,
    fade: 0,
  };
  var r = {
      left: 0,
      top: 0,
      overflow: "hidden",
      margin: 0,
      padding: 0,
      height: "100%",
      width: "100%",
      zIndex: -999999,
    },
    s = {
      position: "absolute",
      display: "none",
      margin: 0,
      padding: 0,
      border: "none",
      width: "auto",
      height: "auto",
      maxHeight: "none",
      maxWidth: "none",
      zIndex: -999999,
    },
    q = function (c, b, e) {
      this.options = a.extend({}, a.fn.backstretch.defaults, e || {});
      this.images = a.isArray(b) ? b : [b];
      a.each(this.images, function () {
        a("<img />")[0].src = this;
      });
      this.isBody = c === document.body;
      this.$container = a(c);
      this.$root = this.isBody ? (l ? a(d) : a(document)) : this.$container;
      c = this.$container.children(".backstretch").first();
      this.$wrap = c.length
        ? c
        : a('<div class="backstretch"></div>').css(r).appendTo(this.$container);
      this.isBody ||
        ((c = this.$container.css("position")),
        (b = this.$container.css("zIndex")),
        this.$container.css({
          position: "static" === c ? "relative" : c,
          zIndex: "auto" === b ? 0 : b,
          background: "none",
        }),
        this.$wrap.css({ zIndex: -999998 }));
      this.$wrap.css({ position: this.isBody && l ? "fixed" : "absolute" });
      this.index = 0;
      this.show(this.index);
      a(d)
        .on("resize.backstretch", a.proxy(this.resize, this))
        .on(
          "orientationchange.backstretch",
          a.proxy(function () {}, this)
        );
    };
  q.prototype = {
    resize: function () {
      try {
        var a = { left: 0, top: 0 },
          b = this.isBody ? this.$root.width() : this.$root.innerWidth(),
          e = b,
          g = this.isBody
            ? d.innerHeight
              ? d.innerHeight
              : this.$root.height()
            : this.$root.innerHeight(),
          j = e / this.$img.data("ratio"),
          f;
        j >= g
          ? ((f = (j - g) / 2),
            this.options.centeredY && (a.top = "-" + f + "px"))
          : ((j = g),
            (e = j * this.$img.data("ratio")),
            (f = (e - b) / 2),
            this.options.centeredX && (a.left = "-" + f + "px"));
        this.$wrap
          .css({ width: b, height: g })
          .find("img:not(.deleteable)")
          .css({ width: e, height: j })
          .css(a);
      } catch (h) {}
      return this;
    },
    show: function (c) {
      if (!(Math.abs(c) > this.images.length - 1)) {
        var b = this,
          e = b.$wrap.find("img").addClass("deleteable"),
          d = { relatedTarget: b.$container[0] };
        b.$container.trigger(a.Event("backstretch.before", d), [b, c]);
        this.index = c;
        clearInterval(b.interval);
        b.$img = a("<img />")
          .css(s)
          .bind("load", function (f) {
            var h = this.width || a(f.target).width();
            f = this.height || a(f.target).height();
            a(this).data("ratio", h / f);
            a(this).fadeIn(b.options.speed || b.options.fade, function () {
              e.remove();
              b.paused || b.cycle();
              a(["after", "show"]).each(function () {
                b.$container.trigger(a.Event("backstretch." + this, d), [b, c]);
              });
            });
            b.resize();
          })
          .appendTo(b.$wrap);
        b.$img.attr("src", b.images[c]);
        return b;
      }
    },
    next: function () {
      return this.show(
        this.index < this.images.length - 1 ? this.index + 1 : 0
      );
    },
    cycle: function () {
      1 < this.images.length &&
        (clearInterval(this.interval),
        (this.interval = setInterval(
          a.proxy(function () {
            this.paused || this.next();
          }, this),
          this.options.duration
        )));
      return this;
    },
  };
  var l,
    f = navigator.userAgent,
    m = navigator.platform,
    e = f.match(/AppleWebKit\/([0-9]+)/),
    e = !!e && e[1],
    h = f.match(/Fennec\/([0-9]+)/),
    h = !!h && h[1],
    n = f.match(/Opera Mobi\/([0-9]+)/),
    t = !!n && n[1],
    k = f.match(/MSIE ([0-9]+)/),
    k = !!k && k[1];
  l = !(
    ((-1 < m.indexOf("iPhone") ||
      -1 < m.indexOf("iPad") ||
      -1 < m.indexOf("iPod")) &&
      e &&
      534 > e) ||
    (d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini)) ||
    (n && 7458 > t) ||
    (-1 < f.indexOf("Android") && e && 533 > e) ||
    (h && 6 > h) ||
    ("palmGetResource" in d && e && 534 > e) ||
    (-1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0")) ||
    (k && 6 >= k)
  );
})(jQuery, window);
!(function (a) {
  (a.fn.gMap = function (b, c) {
    switch (b) {
      case "addMarker":
        return a(this).trigger("gMap.addMarker", [
          c.latitude,
          c.longitude,
          c.content,
          c.icon,
          c.popup,
        ]);
      case "centerAt":
        return a(this).trigger("gMap.centerAt", [
          c.latitude,
          c.longitude,
          c.zoom,
        ]);
      case "clearMarkers":
        return a(this).trigger("gMap.clearMarkers");
    }
    var d = a.extend({}, a.fn.gMap.defaults, b);
    return this.each(function () {});
  }),
    (a.fn.gMap.defaults = {
      address: "",
      latitude: 0,
      longitude: 0,
      zoom: 1,
      markers: [],
      controls: [],
      scrollwheel: !1,
      doubleclickzoom: !0,
      maptype: "ROADMAP",
      html_prepend: '<div class="gmap_marker">',
      html_append: "</div>",
      icon: {
        image: "http://www.google.com/mapfiles/marker.png",
        shadow: "http://www.google.com/mapfiles/shadow50.png",
        iconsize: [20, 34],
        shadowsize: [37, 34],
        iconanchor: [9, 34],
        shadowanchor: [6, 34],
      },
    });
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (a, b, c, d, e) {
    return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
  },
  easeOutQuad: function (a, b, c, d, e) {
    return -d * (b /= e) * (b - 2) + c;
  },
});
(function ($) {
  $.fn.flexVerticalCenter = function (options) {
    var settings = $.extend(
      {
        cssAttribute: "margin-top",
        verticalOffset: 0,
        parentSelector: null,
        debounceTimeout: 25,
        deferTilWindowLoad: false,
      },
      options || {}
    );
    return this.each(function () {
      var $this = $(this);
      var debounce;
      var resizer = function () {
        var parentHeight =
          settings.parentSelector &&
          $this.parents(settings.parentSelector).length
            ? $this.parents(settings.parentSelector).first().height()
            : $this.parent().height();
        $this.css(
          settings.cssAttribute,
          (parentHeight - $this.height()) / 2 +
            parseInt(settings.verticalOffset)
        );
        if (settings.complete !== undefined) {
          settings.complete();
        }
      };
      $(window).resize(function () {
        clearTimeout(debounce);
        debounce = setTimeout(resizer, settings.debounceTimeout);
      });
      if (!settings.deferTilWindowLoad) {
        resizer();
      }
      $(window).load(function () {
        resizer();
      });
    });
  };
})(jQuery);
