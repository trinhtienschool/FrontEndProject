onloadFunction = function(){
  setTimeout(run,1000);
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
}
