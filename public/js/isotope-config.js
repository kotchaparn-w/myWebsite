function Maheraz_Custom_JS() {
			var windowS = $(window),
				windowH = windowS.height(),
				projecthoverS = $('.portfolio-hover'),
				projecthoverH = projecthoverS.height(),
				proejectdevide = (projecthoverH / 2);
				projecthoverS.css({
				marginTop: -proejectdevide,
			});
		}; 

		Maheraz_Custom_JS();	
		
			$('.portfolio-nav ul li').on('click', function() {
			$(".portfolio-nav ul li").removeClass("active");
			$(this).addClass("active");

			var selector = $(this).attr('data-filter');
			$(".isotop-active").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easeInOutQuart',
					queue: false,
				}
			});
			return false;
		});

		$(".isotop-active").isotope({
			filter: '*',
		});