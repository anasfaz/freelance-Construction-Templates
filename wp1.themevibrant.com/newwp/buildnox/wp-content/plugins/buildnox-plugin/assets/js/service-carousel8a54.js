(function($) {
	
	"use strict";
	var service_carousel_js = function($scope, $) {
		
		if ($('.four-item-services-carousel').length) {
			var slider_attr = $('.four-item-services-carousel').data('slider');
			var twoItemCarousel = new Swiper('.four-item-services-carousel', {
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
					delay: 80000,
					disableOnInteraction: false
				},
				pagination: {
				  el: ".services-pagination",
				  clickable: true,
				},
				navigation: {
					nextEl: '.slider-button-next4',
					prevEl: '.slider-button-prev4',
				},
				breakpoints: {
					1400: {
						slidesPerView: 3,
					},
					991: {
					  slidesPerView: 2,
					},
					640: {
					  slidesPerView: 1,
					}, 
				}
			});
		}				
				
	};
	
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/buildnox_service_carousel.default', service_carousel_js);
    });	
	

})(window.jQuery);