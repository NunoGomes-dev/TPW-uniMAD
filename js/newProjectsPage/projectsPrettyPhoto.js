(function ($) {
  $.prettyPhoto = { version: "3.1.6" };

  $.fn.prettyPhoto = function (pp_settings) {
    pp_settings = jQuery.extend(
      {
        hook: "rel",
        animation_speed: "fast",
        ajaxcallback: function () {},
        slideshow: 5000,
        autoplay_slideshow: false,
        opacity: 0.8,
        show_title: true,
        allow_resize: true,
        allow_expand: true,
        default_width: 500,
        default_height: 344,
        counter_separator_label: "/",
        theme: "pp_default",
        horizontal_padding: 20,
        hideflash: false,
        wmode: "opaque",
        autoplay: true,
        modal: false,
        deeplinking: true,
        overlay_gallery: true,
        overlay_gallery_max: 30,
        keyboard_shortcuts: true,
        changepicturecallback: function () {},
        callback: function () {},
        ie6_fallback: true,
        markup:
          '<div class="pp_pic_holder"> \
                          <div class="ppt">&nbsp;</div> \
                          <div class="pp_top"> \
                              <div class="pp_left"></div> \
                              <div class="pp_middle"></div> \
                              <div class="pp_right"></div> \
                          </div> \
                          <div class="pp_content_container"> \
                              <div class="pp_left"> \
                              <div class="pp_right"> \
                                  <div class="pp_content"> \
                                      <div class="pp_loaderIcon"></div> \
                                      <div class="pp_fade"> \
                                          <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                          <div class="pp_hoverContainer"> \
                                              <a class="pp_next" href="#">next</a> \
                                              <a class="pp_previous" href="#">previous</a> \
                                          </div> \
                                          <div id="pp_full_res"></div> \
                                          <div class="pp_details"> \
                                              <div class="pp_nav"> \
                                                  <a href="#" class="pp_arrow_previous">Previous</a> \
                                                  <p class="currentTextHolder">0/0</p> \
                                                  <a href="#" class="pp_arrow_next">Next</a> \
                                              </div> \
                                              <p class="pp_description"></p> \
                                              <div class="pp_social">{pp_social}</div> \
                                              <a class="pp_close" href="#">Close</a> \
                                          </div> \
                                      </div> \
                                  </div> \
                              </div> \
                              </div> \
                          </div> \
                          <div class="pp_bottom"> \
                              <div class="pp_left"></div> \
                              <div class="pp_middle"></div> \
                              <div class="pp_right"></div> \
                          </div> \
                      </div> \
                      <div class="pp_overlay"></div>',
        gallery_markup:
          '<div class="pp_gallery"> \
                                  <a href="#" class="pp_arrow_previous">Previous</a> \
                                  <div> \
                                      <ul> \
                                          {gallery} \
                                      </ul> \
                                  </div> \
                                  <a href="#" class="pp_arrow_next">Next</a> \
                              </div>',
        image_markup: '<img id="fullResImage" src="{path}" />',
        flash_markup:
          '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
        quicktime_markup:
          '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
        iframe_markup:
          '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
        inline_markup: '<div class="pp_inline">{content}</div>',
        custom_markup: "",
        social_tools:
          '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */,
      },
      pp_settings
    );
    var matchedObjects = this,
      percentBased = false,
      pp_dimensions,
      pp_open,
      pp_contentHeight,
      pp_contentWidth,
      pp_containerHeight,
      pp_containerWidth,
      windowHeight = $(window).height(),
      windowWidth = $(window).width(),
      pp_slideshow;
    (doresize = true), (scroll_pos = _get_scroll());
    $(window)
      .unbind("resize.prettyphoto")
      .bind("resize.prettyphoto", function () {});
    if (pp_settings.keyboard_shortcuts) {
      $(document)
        .unbind("keydown.prettyphoto")
        .bind("keydown.prettyphoto", function (e) {});
    }
    $.prettyPhoto.initialize = function () {};
    $.prettyPhoto.open = function (event) {};
    $.prettyPhoto.changePage = function (direction) {};
    $.prettyPhoto.changeGalleryPage = function (direction) {};
    $.prettyPhoto.startSlideshow = function () {};
    $.prettyPhoto.stopSlideshow = function () {};
    $.prettyPhoto.close = function () {};
    function _get_scroll() {
      if (self.pageYOffset) {
        return { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset };
      } else if (
        document.documentElement &&
        document.documentElement.scrollTop
      ) {
        return {
          scrollTop: document.documentElement.scrollTop,
          scrollLeft: document.documentElement.scrollLeft,
        };
      } else if (document.body) {
        return {
          scrollTop: document.body.scrollTop,
          scrollLeft: document.body.scrollLeft,
        };
      }
    }
    if (!pp_alreadyInitialized && getHashtag()) {
      pp_alreadyInitialized = true;
      hashIndex = getHashtag();
      hashRel = hashIndex;
      hashIndex = hashIndex.substring(
        hashIndex.indexOf("/") + 1,
        hashIndex.length - 1
      );
      hashRel = hashRel.substring(0, hashRel.indexOf("/"));
      setTimeout(function () {}, 50);
    }

    return this.unbind("click.prettyphoto").bind(
      "click.prettyphoto",
      $.prettyPhoto.initialize
    );
  };

  function getHashtag() {
    var url = location.href;
    hashtag =
      url.indexOf("#prettyPhoto") !== -1
        ? decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length))
        : false;
    if (hashtag) {
      hashtag = hashtag.replace(/<|>/g, "");
    }
    return hashtag;
  }
})(jQuery);

var pp_alreadyInitialized = false;
