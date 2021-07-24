onloadFunction = function(){
  setTimeout(run,2000);
}
run = function(){
  // Tien
  /*------------------------
           --> Slick Carousel
         ------------------------*/

  var $html = $('html');
  var $body = $('body');
  var $uptimoSlickSlider = $('.sb-slick-slider');

  /*For RTL*/
  if ($html.attr("dir") == "rtl" || $body.attr("dir") == "rtl") {
    $uptimoSlickSlider.attr("dir", "rtl");
  }

  $uptimoSlickSlider.each(function() {

    /*Setting Variables*/
    var $this = $(this),
      $setting = $this.data('slick-setting') ? $this.data('slick-setting') : '',
      $autoPlay = $setting.autoplay ? $setting.autoplay : false,
      $autoPlaySpeed = parseInt($setting.autoplaySpeed, 10) || 2000,
      $asNavFor = $setting.asNavFor ? $setting.asNavFor : null,
      $appendArrows = $setting.appendArrows ? $setting.appendArrows : $this,
      $appendDots = $setting.appendDots ? $setting.appendDots : $this,
      $arrows = $setting.arrows ? $setting.arrows : false,
      $prevArrow = $setting.prevArrow ? '<button class="' + ($setting.prevArrow.buttonClass ? $setting.prevArrow.buttonClass : 'slick-prev') + '"><i class="' + $setting.prevArrow.iconClass + '"></i></button>' : '<button class="slick-prev">previous</button>',
      $nextArrow = $setting.nextArrow ? '<button class="' + ($setting.nextArrow.buttonClass ? $setting.nextArrow.buttonClass : 'slick-next') + '"><i class="' + $setting.nextArrow.iconClass + '"></i></button>' : '<button class="slick-next">next</button>',
      $centerMode = $setting.centerMode ? $setting.centerMode : false,
      $centerPadding = $setting.centerPadding ? $setting.centerPadding : '50px',
      $dots = $setting.dots ? $setting.dots : false,
      $fade = $setting.fade ? $setting.fade : false,
      $focusOnSelect = $setting.focusOnSelect ? $setting.focusOnSelect : false,
      $infinite = $setting.infinite ? $setting.infinite : false,
      $pauseOnHover = $setting.pauseOnHover ? $setting.pauseOnHover : false,
      $rows = parseInt($setting.rows, 10) || 1,
      $slidesToShow = parseInt($setting.slidesToShow, 10) || 1,
      $slidesToScroll = parseInt($setting.slidesToScroll, 10) || 1,
      $swipe = $setting.swipe ? $setting.swipe : true,
      $swipeToSlide = $setting.swipeToSlide ? $setting.swipeToSlide : false,
      $variableWidth = $setting.variableWidth ? $setting.variableWidth : false,
      $vertical = $setting.vertical ? $setting.vertical : false,
      $verticalSwiping = $setting.verticalSwiping ? $setting.verticalSwiping : false,
      $rtl = $setting.rtl || $html.attr('dir="rtl"') || $body.attr('dir="rtl"') ? true : false;

    /*Responsive Variable, Array & Loops*/
    var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
      $responsiveSettingLength = $responsiveSetting.length,
      $responsiveArray = [];
    for (var i = 0; i < $responsiveSettingLength; i++) {
      $responsiveArray[i] = $responsiveSetting[i];
    }
    /*Slider Start*/
    $this.slick({
      autoplay: $autoPlay,
      autoplaySpeed: $autoPlaySpeed,
      asNavFor: $asNavFor,
      appendArrows: $appendArrows,
      appendDots: $appendDots,
      arrows: $arrows,
      dots: $dots,
      centerMode: $centerMode,
      centerPadding: $centerPadding,
      fade: $fade,
      focusOnSelect: $focusOnSelect,
      infinite: $infinite,
      pauseOnHover: $pauseOnHover,
      rows: $rows,
      slidesToShow: $slidesToShow,
      slidesToScroll: $slidesToScroll,
      swipe: $swipe,
      swipeToSlide: $swipeToSlide,
      variableWidth: $variableWidth,
      vertical: $vertical,
      verticalSwiping: $verticalSwiping,
      rtl: $rtl,
      prevArrow: $prevArrow,
      nextArrow: $nextArrow,
      responsive: $responsiveArray
    });

  });
  /*-------------------------------------
    --> Data Background Image
  ---------------------------------------*/
  function bgImageSettings() {
    $('.bg-image').each(function() {
      var $this = $(this),
        $image = $this.data('bg');

      $this.css({
        'background-image': 'url(' + $image + ')'
      });
    });
  }

  bgImageSettings();


  // $('#range-slider').rangeSlider({
  //     direction: 'horizontal',
  //     type: 'interval',
  //     skin: 'green',
  //     setting: false,
  //     bar: true,
  //     tip: true,
  //     scale: false
  // },
  // {
  //     min: 10,
  //     max: 50,
  //     step: 1,
  //     values: [20,40]
  // }
  // )
  // $("#range-slider").rangeSlider("onChange",(event) => console.log(event.detail.values[1]))

  // var x = 1000;
  // x = x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  // console.log(x);
  formatCurrency = function(amount){
    amount = amount.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
    return amount;
  }
  // $(".currency").map(function() {
  //   let price = $(this).text();
  //   price = parseInt(price);
  //   this.innerHTML = formatCurrency(price);
  //   console.log("có vào "+formatCurrency(price));
  // })
  // console.log(formatCurrency(50000));

  if ($("#slider-range").length !== 0) {
    $("#slider-range").slider({
      range: true,
      min: 10000,
      max: 4000000,
      values: [10000, 4000000],
      slide: function (event, ui) {
        $("#cost-from").text(formatCurrency(ui.values[0]));
        $("#cost-to").text(formatCurrency(ui.values[1]));
      }
    });
    $("#cost-from").text(formatCurrency($("#slider-range").slider("values", 0)));
    $("#cost-to").text(formatCurrency($("#slider-range").slider("values", 1)));
  }
  //Thy




  //Nhuan

  /*-----------------------
  --> Off Canvas Menu
  -------------------------*/
  /*Variables*/
  var $offCanvasNav = $('.off-canvas-nav'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fas fa-chevron-down"></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });

  // Off Canvas Open close
  $(".off-canvas-btn").on('click', function() {
    $(".off-canvas-wrapper").addClass('open');
  });

  $(".btn-close-off-canvas").on('click', function() {
    $(".off-canvas-wrapper").removeClass('open');
  });
  /**********************
   *Expand Category Menu
   ***********************/

  function categoryMenuExpand() {
    $(".hidden-menu-item").css('display', 'none');

    $(window).on({
      load: function() {
        var ww = $(window).width();
        if (ww <= 1200) {
          $(".hidden-lg-menu-item").css('display', 'none');
        }
      },
      resize: function() {

        var ww = $(window).width();
        if (ww <= 1200) {
          $(".hidden-lg-menu-item").css('display', 'none');
        }
      }
    });
    $(".js-expand-hidden-menu").on('click', function(e) {
      e.preventDefault();
      $(".hidden-menu-item").toggle(500);
      var window_width = $(window).width();
      if (window_width <= 1200) {
        $(".hidden-lg-menu-item").toggle(500);
      }
      var htmlAfter = "Close Categories";
      var htmlBefore = "More Categories";

      $(this).html($(this).text() == htmlAfter ? htmlBefore : htmlAfter);
      $(this).toggleClass("menu-close");
    });
  }
  /**********************
   *Expand Category Mobile Menu
   ***********************/

  function categoryMenuExpandInMobile() {
    $('.category-menu .has-children > a').on('click', function(e) {
      e.preventDefault();
      $(this).siblings('.sub-menu').slideToggle('500');
    });
  }
  categoryMenuExpand();
  categoryMenuExpandInMobile();

  /*------------------------
    --> Search PopUp
  ------------------------*/
  (function() {
    $(".search-trigger").on('click', function() {
      $(".search-wrapper").addClass('open');
    })
    $(".search-dismiss,body").on('click', function(e) {
      $(".search-wrapper").removeClass('open')
    })
    // $("body").on('click', function () {
    // 	$(".search-wrapper").removeClass('open')
    // })
    $(".search-box,.search-trigger").on('click', function(e) {
      e.stopPropagation();
    })
  })();

  $('.category-trigger').on('click', function(e) {
    $('.category-nav').toggleClass('show');
    e.stopPropagation();
  })

  /*------------------------
    --> Slick Carousel
  ------------------------*/

  var $html = $('html');
  var $body = $('body');
  var $uptimoSlickSlider = $('.sb-slick-slider');

  /*For RTL*/
  if ($html.attr("dir") == "rtl" || $body.attr("dir") == "rtl") {
    $uptimoSlickSlider.attr("dir", "rtl");
  }

  $uptimoSlickSlider.each(function() {

    /*Setting Variables*/
    var $this = $(this),
      $setting = $this.data('slick-setting') ? $this.data('slick-setting') : '',
      $autoPlay = $setting.autoplay ? $setting.autoplay : false,
      $autoPlaySpeed = parseInt($setting.autoplaySpeed, 10) || 2000,
      $asNavFor = $setting.asNavFor ? $setting.asNavFor : null,
      $appendArrows = $setting.appendArrows ? $setting.appendArrows : $this,
      $appendDots = $setting.appendDots ? $setting.appendDots : $this,
      $arrows = $setting.arrows ? $setting.arrows : false,
      $prevArrow = $setting.prevArrow ? '<button class="' + ($setting.prevArrow.buttonClass ? $setting.prevArrow.buttonClass : 'slick-prev') + '"><i class="' + $setting.prevArrow.iconClass + '"></i></button>' : '<button class="slick-prev">previous</button>',
      $nextArrow = $setting.nextArrow ? '<button class="' + ($setting.nextArrow.buttonClass ? $setting.nextArrow.buttonClass : 'slick-next') + '"><i class="' + $setting.nextArrow.iconClass + '"></i></button>' : '<button class="slick-next">next</button>',
      $centerMode = $setting.centerMode ? $setting.centerMode : false,
      $centerPadding = $setting.centerPadding ? $setting.centerPadding : '50px',
      $dots = $setting.dots ? $setting.dots : false,
      $fade = $setting.fade ? $setting.fade : false,
      $focusOnSelect = $setting.focusOnSelect ? $setting.focusOnSelect : false,
      $infinite = $setting.infinite ? $setting.infinite : false,
      $pauseOnHover = $setting.pauseOnHover ? $setting.pauseOnHover : false,
      $rows = parseInt($setting.rows, 10) || 1,
      $slidesToShow = parseInt($setting.slidesToShow, 10) || 1,
      $slidesToScroll = parseInt($setting.slidesToScroll, 10) || 1,
      $swipe = $setting.swipe ? $setting.swipe : true,
      $swipeToSlide = $setting.swipeToSlide ? $setting.swipeToSlide : false,
      $variableWidth = $setting.variableWidth ? $setting.variableWidth : false,
      $vertical = $setting.vertical ? $setting.vertical : false,
      $verticalSwiping = $setting.verticalSwiping ? $setting.verticalSwiping : false,
      $rtl = $setting.rtl || $html.attr('dir="rtl"') || $body.attr('dir="rtl"') ? true : false;

    /*Responsive Variable, Array & Loops*/
    var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
      $responsiveSettingLength = $responsiveSetting.length,
      $responsiveArray = [];
    for (var i = 0; i < $responsiveSettingLength; i++) {
      $responsiveArray[i] = $responsiveSetting[i];
    }
    /*Slider Start*/
    $this.slick({
      autoplay: $autoPlay,
      autoplaySpeed: $autoPlaySpeed,
      asNavFor: $asNavFor,
      appendArrows: $appendArrows,
      appendDots: $appendDots,
      arrows: $arrows,
      dots: $dots,
      centerMode: $centerMode,
      centerPadding: $centerPadding,
      fade: $fade,
      focusOnSelect: $focusOnSelect,
      infinite: $infinite,
      pauseOnHover: $pauseOnHover,
      rows: $rows,
      slidesToShow: $slidesToShow,
      slidesToScroll: $slidesToScroll,
      swipe: $swipe,
      swipeToSlide: $swipeToSlide,
      variableWidth: $variableWidth,
      vertical: $vertical,
      verticalSwiping: $verticalSwiping,
      rtl: $rtl,
      prevArrow: $prevArrow,
      nextArrow: $nextArrow,
      responsive: $responsiveArray
    });

  });
  /*---------------------------
    --> Dropdown Slide Item
  ----------------------------*/

  $(".slide-down--btn").on('click', function(e) {
    e.stopPropagation();
    $(this).siblings('.slide-down--item').slideToggle("400");
    $(this).siblings('.slide-down--item').toggleClass("show");
    var $selectClass = $(this).parents('.slide-wrapper').siblings().children('.slide-down--item');
    $(this).parents('.slide-wrapper').siblings().children('.slide-down--item').slideUp('400');
  })

  /*-------------------------------------
    --> Slideup While clicking On Dom
  ---------------------------------------*/
  function clickDom() {
    $('body').on('click', function(e) {
      $('.slide-down--item').slideUp('500');
    });
    $('.slide-down--item').on('click', function(e) {
      e.stopPropagation();
    })
  };

  clickDom();


  /*-------------------------------------
    --> Sticky Header
  ---------------------------------------*/
  function stickyHeader() {

    var headerHeight = $('.site-header')[0].getBoundingClientRect().height;
    $(window).on({
      resize: function() {
        var width = $(window).width();
        if ((width <= 991)) {
          $('.sticky-init').removeClass('fixed-header');
          if ($('.sticky-init').hasClass('sticky-header')) {
            $('.sticky-init').removeClass('sticky-header');
          }

        } else {
          $('.sticky-init').addClass('fixed-header');
        }
      },
      load: function() {
        var width = $(window).width();
        if ((width <= 991)) {
          $('.sticky-init').removeClass('fixed-header');
          if ($('.sticky-init').hasClass('sticky-header')) {
            $('.sticky-init').removeClass('sticky-header');
          }

        } else {
          $('.sticky-init').addClass('fixed-header');
        }
      }
    });
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= headerHeight) {
        $('.fixed-header').addClass('sticky-header');
      } else {
        $('.fixed-header').removeClass('sticky-header');
      }
    })


  }
  stickyHeader()
  /*-------------------------------------
    --> Range Slider
  ---------------------------------------*/
  $(function() {
    $(".sb-range-slider").slider({
      range: true,
      min: 0,
      max: 753,
      values: [80, 320],
      slide: function(event, ui) {
        $("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
      }
    });
    $("#amount").val("£" + $(".sb-range-slider").slider("values", 0) +
      " - £" + $(".sb-range-slider").slider("values", 1));
  });

  /*-------------------------------------
    --> Product View Mode
  ---------------------------------------*/
  $('.product-view-mode a').on('click', function(e) {
    e.preventDefault();

    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');

    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid list').addClass(viewMode);
    if (shopProductWrap.hasClass('grid')) {
      $('.pm-product').removeClass('product-type-list')
    } else {
      $('.pm-product').addClass('product-type-list')
    }
  })

  /*-------------------------------------
    --> Quantity
  ---------------------------------------*/
  $('.count-btn').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent('.count-input-btns').parent().find('input').val();
    if ($button.hasClass('inc-ammount')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent('.count-input-btns').parent().find('input').val(newVal);
  });
  /*-------------------------------------
    --> Shipping Form Toggle
  ---------------------------------------*/
  $('[data-shipping]').on('click', function() {
    if ($('[data-shipping]:checked').length > 0) {
      $('#shipping-form').slideDown();
    } else {
      $('#shipping-form').slideUp();
    }
  })
  /*-------------------------------------
    --> Add To Cart Animation
  ---------------------------------------*/
  $('.add-to-cart').on('click', function(e) {
    e.preventDefault();

    if ($(this).hasClass('added')) {
      $(this).removeClass('added').find('i').removeClass('ti-check').addClass('ti-shopping-cart').siblings('span').text('add to cart');
    } else {
      $(this).addClass('added').find('i').addClass('ti-check').removeClass('ti-shopping-cart').siblings('span').text('added');
    }
  });
  /*-------------------------------------
    --> Data Background Image
  ---------------------------------------*/
  function bgImageSettings() {
    $('.bg-image').each(function() {
      var $this = $(this),
        $image = $this.data('bg');

      $this.css({
        'background-image': 'url(' + $image + ')'
      });
    });
  }

  bgImageSettings();

}
