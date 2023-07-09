(function($) {
	
	"use strict";
	var funfacts_carousel_js = function($scope, $) {
		
		if ($(".odometer").length) {
			var odo = $(".odometer");
			odo.each(function () {
			  $(this).appear(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			  });
			});
		}		
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/buildnox_funfact.default', funfacts_carousel_js);
    });	

})(window.jQuery);