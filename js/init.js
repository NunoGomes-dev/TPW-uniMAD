$(window).load(function () {
  "use strict";
  var portfolio_selectors = $(".portfolio-filter li a");
  if (portfolio_selectors != "undefined") {
    var portfolio = $(".portfolio-items");
    portfolio.isotope({
      itemSelector: "li",
      layoutMode: "fitRows",
    });
    portfolio_selectors.on("click", function () {
      portfolio_selectors.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      portfolio.isotope({ filter: selector });
      return false;
    });
  }
});
jQuery(function ($) {
  "use strict";
  $(".tile-progress .tile-header").matchHeight();
  var footerHeight = jQuery("#footer-wrapper").outerHeight();
  jQuery("#content-wrapper").css("margin-bottom", footerHeight);
  var windowsHeight = jQuery(window).height();
  var navHeight = jQuery("navbar-fixed-top").outerHeight();
  var newHeight = windowsHeight - navHeight + 30;
  jQuery("#main-slider").css("height", newHeight + "px");
  jQuery("#single-page-slider").css("min-height", windowsHeight / 3 + "px");
  $(".gototop").click(function (event) {});
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false,
    theme: "light_square",
  });

  jQuery(".prevbg").click(function (x) {});
  jQuery(".nextbg").click(function (x) {});
});
$(window).scroll(function () {});

jQuery(document).ready(function ($) {
  "use strict";
  var windowsHeight = $(window).height();
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > windowsHeight) {
    $(".navbar-fixed-top").removeClass("opaqued");
  } else {
    $(".navbar-fixed-top").addClass("opaqued");
  }
  if (
    $(document).height() - $(window).height() - $(window).scrollTop() <
    1000
  ) {
    $("#footer-wrapper").css("z-index", "4");
  } else {
    $("#footer-wrapper").css("z-index", "1");
  }
});
jQuery(document).ready(function ($) {
  "use strict";
  jQuery("#search-wrapper, #search-wrapper input").hide();
  jQuery("span.search-trigger").click(function () {});

  $("#main-slider .carousel-content").flexVerticalCenter({
    cssAttribute: "padding-top",
  });
});
jQuery(document).ready(function ($) {
  "use strict";
  jQuery(".fade-up, .fade-down, .bounce-in, .flip-in").addClass("no-display");
  jQuery(".bounce-in").one("inview", function () {});
  jQuery(".flip-in").one("inview", function () {});
  jQuery(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  jQuery(".fade-up").one("inview", function () {
    jQuery(this).addClass("animated fadeInUp appear");
  });
  jQuery(".fade-down").one("inview", function () {
    jQuery(this).addClass("animated fadeInDown appear");
  });
});

$(function () {
  "use strict";
  $("a[href*=#]:not([href=#])").click(function () {});
});

$(document).ready(function () {
  "use strict";
  $("#quote-carousel").carousel({
    pause: true,
    interval: 4000,
  });
  $("#scroller").carousel({
    pause: true,
    interval: 4000,
  });
});
jQuery(document).ready(function ($) {
  "use strict";
  $("#contactform").submit(function () {});
});
jQuery(document).ready(function ($) {
  "use strict";
  $(window).load(function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
});
