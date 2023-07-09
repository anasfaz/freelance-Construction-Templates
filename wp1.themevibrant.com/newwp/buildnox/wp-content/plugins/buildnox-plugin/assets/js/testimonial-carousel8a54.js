(function($) {
	
	"use strict";
	var testimonial_carousel_js = function($scope, $) {
		
		if ($('.two-item-carousel').length) {
			var slider_attr = $('#yt-slider').data('slider');
			var twoItemCarousel = new Swiper('.two-item-carousel', {
				preloadImages: false,
				loop: slider_attr.loop,
				grabCursor: true,
				centeredSlides: false,
				resistance: true,
				resistanceRatio: 0.6,
				slidesPerView: slider_attr.slidesperview,
				speed: 1400,
				spaceBetween: slider_attr.spacebetween,
				parallax: false,
				effect: "slide",
				active: 'active',
				autoplay: {
					delay: 8000,
					disableOnInteraction: false
				},
				pagination: {
				  el: '.slider__pagination',
				  clickable: true,
				},
				navigation: {
					nextEl: '.slider-button-next2',
					prevEl: '.slider-button-prev2',
				},
				breakpoints: {
					991: {
					  slidesPerView: 1,
					},
					640: {
					  slidesPerView: 1,
					}, 
				}
			});
		}
		
		// Single item Carousel 
		if ($('.single-item-carousel').length) {
			var singleItemCarousel = new Swiper('.single-item-carousel', {
				preloadImages: false,
				loop: true,
				grabCursor: true,
				centeredSlides: false,
				resistance: true,
				resistanceRatio: 0.6,
				speed: 1400,
				spaceBetween: 0,
				parallax: false,
				effect: "slide",
				pagination: {
					el: '.slider__pagination',
					clickable: true,
				  },
				autoplay: {
					delay: 8000,
					disableOnInteraction: false
				},
				navigation: {
					nextEl: '.slider-button-next',
					prevEl: '.slider-button-prev',
				},
			});
		}	
	};
	
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/buildnox_testimonial_carousel.default', testimonial_carousel_js);
    });	
	

})(window.jQuery);