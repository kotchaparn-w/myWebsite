
(function ($) {
	"use strict";
    $(document).ready(function(){
		
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
		
		/*====================================
		//  Onepage Nav
		======================================*/ 
		if ($.fn.onePageNav) {
			$('.mainmenu .nav').onePageNav({
				currentClass: 'active',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		/*====================================
		// 	Mobile Menu
		======================================*/
		 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
		});
		
		/*====================================
		// Isotop Active
		======================================*/
		// $(window).on('load', function() {
			Maheraz_Custom_JS();		
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });
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
            }
		// });
		
		
		/*====================================
		// Blog Carousel
		======================================*/ 	
		$(".blog-carousel").owlCarousel({
			loop:true,
			autoplay:false,
			autoplayTimeout:4000,
			smartSpeed: 600,
			margin:15,
			nav:false,
			dots:true,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});	
		
		/*====================================
		// Blog Slider
		======================================*/ 	
		$("#blog .slide").owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3500,
			smartSpeed: 600,
			mouseDrag: true,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:true,
			responsive:{
				320: {
					items: 1,
					dots:false,
					nav:false,
				},
				480: {
					items: 1,
					dots:false,
					nav:false,
				},
				768: {
					items: 1,
				},
				1170: {
					items: 1,
				},
			}
		});	
		
		
		/*====================================
		// clients Carousel
		======================================*/ 	
		$(".clients-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 600,
			margin:30,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1170: {
					items: 5,
				},
			}
		});	
		
		/*====================================
			Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*======================================
		// Parallax JS
		======================================*/ 
		 $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
		
		
		/*====================================
		// 	Side Navigation
		======================================*/ 	
		$('.side-icon a').on( "click", function(){
			$('#header').toggleClass('active');
		});
		
		/*====================================
		// Personal Slider
		======================================*/ 	
		$(".personal-main.slide").owlCarousel({
			loop:true,
			autoplay:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 600,
			autoplayTimeout:4000,
			mouseDrag: false,
			margin:30,
			nav:false,
			dots:true,
			items: 1,
		});	
		
		/*====================================
		// Portfolio Single
		======================================*/ 	
		$(".portfolio-single.slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			margin:30,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items: 1,
		});	
		
		/*====================================
		// Related Portfolio
		======================================*/ 
		$(".portfolio-related").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			nav:false,
			dots:false,
			items: 1,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});	

		
		/*====================================
		Extra JS
		======================================*/
		$('.arrow a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		
    });
	
	/*======================================
	// Preloader
	======================================*/ 	
		$(window).on("load",function(){
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
})(jQuery);	