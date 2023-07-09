(function($) {
	
	"use strict";
	var project_masonry_js = function($scope, $) {
		
		if ($('.sortable-masonry').length) {
			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');
			$container.isotope({
				filter: '.all',
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});
			// Isotope Filter 
			$filter.find('li').on('click', function() {
				var selector = $(this).attr('data-filter');
				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {}
				return false;
			});
			winDow.on('resize', function() {
				var selector = $filter.find('li.active').attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
				$container.isotope()
			});
			var filterItemA = $('.filter-btns li');
			filterItemA.on('click', function() {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
			$container.isotope("on", "layoutComplete", function(a, b) {
                var a = b.length,
                pcn = $(".filters .count");
                pcn.html(a);
            }); 
		}
		
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/buildnox_masonary_projects.default', project_masonry_js);
    });	

})(window.jQuery);