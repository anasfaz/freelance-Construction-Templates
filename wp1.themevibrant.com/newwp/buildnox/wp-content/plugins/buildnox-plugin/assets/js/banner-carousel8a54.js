(function($) {
	
	"use strict";
	var banner_carousels_js = function($scope, $) {
		
		//Script V2
		if ($(".banner-slider-2").length > 0) {
			var slider_attr = $('.banner-slider-2').data('slider');
			var bannerSlider2 = new Swiper('.banner-slider-2', {
				preloadImages: false,
				loop: slider_attr.loop,
				grabCursor: true,
				centeredSlides: false,
				resistance: true,
				resistanceRatio: 0.6,
				slidesPerView: slider_attr.slidesperview,
				speed: 2400,
				spaceBetween: slider_attr.spacebetween,
				parallax: false,
				effect: "fade",
				autoplay: {
					delay: 8000,
					disableOnInteraction: false
				},
				pagination: {
				  el: '.slider__pagination',
				  clickable: true,
				},
				navigation: {
					nextEl: '.banner-slider-button-next',
					prevEl: '.banner-slider-button-prev',
				},
			});
		}
		
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/buildnox_banner_carousel.default', banner_carousels_js);
    });	

})(window.jQuery);