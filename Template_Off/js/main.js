jQuery(document).ready(function($) {
    (function($){
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
    })(jQuery);
    })