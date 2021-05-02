/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function (t) {
  "use strict";
  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    3 < e[0]
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(),
  (function (n) {
    "use strict";
    n(function () {
      (n.support.transition = (function o() {
        var t = document.createElement("bootstrap"),
          e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          };
        for (var i in e) if (t.style[i] !== undefined) return { end: e[i] };
        return !1;
      })()),
        n.support.transition &&
          (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
          });
    });
  })(jQuery),
  (function (p) {
    "use strict";
    var c = function (t, e) {
      (this.$element = p(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = e),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", p.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", p.proxy(this.cycle, this));
    };
    function r(n) {
      return this.each(function () {
        var t = p(this),
          e = t.data("bs.carousel"),
          i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
          o = "string" == typeof n ? n : i.slide;
        e || t.data("bs.carousel", (e = new c(this, i))),
          "number" == typeof n
            ? e.to(n)
            : o
            ? e[o]()
            : i.interval && e.pause().cycle();
      });
    }
    (c.VERSION = "3.4.1"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (t) {}),
      (c.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              p.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (
          (("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o);
      }),
      (c.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            p.support.transition &&
            (this.$element.trigger(p.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.slide = function (t, e) {
        var i = this.$element.find(".item.active"),
          o = e || this.getItemForDirection(t, i),
          n = this.interval,
          s = "next" == t ? "left" : "right",
          a = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var r = o[0],
          l = p.Event("slide.bs.carousel", { relatedTarget: r, direction: s });
        if ((this.$element.trigger(l), !l.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), n && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var h = p(this.$indicators.children()[this.getItemIndex(o)]);
            h && h.addClass("active");
          }
          var d = p.Event("slid.bs.carousel", {
            relatedTarget: r,
            direction: s,
          });
          return (
            p.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(t),
                "object" == typeof o && o.length && o[0].offsetWidth,
                i.addClass(s),
                o.addClass(s),
                i
                  .one("bsTransitionEnd", function () {})
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (i.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(d)),
            n && this.cycle(),
            this
          );
        }
      });
    var t = p.fn.carousel;
    (p.fn.carousel = r),
      (p.fn.carousel.Constructor = c),
      (p.fn.carousel.noConflict = function () {});
    var e = function (t) {};
    p(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      p(window).on("load", function () {
        p('[data-ride="carousel"]').each(function () {
          var t = p(this);
          r.call(t, t.data());
        });
      });
  })(jQuery);
