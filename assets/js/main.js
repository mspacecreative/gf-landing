(function( root, $, undefined ) {
	"use strict";

	$(function () {
		
		// SMOOTH SCROLL TO ANCHORS
		$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					//setTimeout(function(){	
					$('html,body').animate({
						scrollTop: target.offset().top
					},
					500);
					return false;
				}
			}
		});
		
		$(function() {
			
			var $document = $(document),
			viewportHeight = $('.splash').height() / 2;
			$document.scroll(function() {
				if ( $document.scrollTop() >= viewportHeight ) {
					$('.ghost').addClass('reveal');
					$('.header-transition > .inner_container').addClass('transition');
				} else {
				    $('.ghost').removeClass('reveal');
					$('.header-transition > .inner_container').removeClass('transition');
				} 
				if ( $document.scrollTop() >= viewportHeight + 100) {
					$('.header-transition > .inner_container').addClass('relative_positioning');
				} else {
				    $('.header-transition > .inner_container').removeClass('relative_positioning');
				}
				if ( $document.scrollTop() >= 100 ) {
					$('header').addClass('shrink');
				} else {
					$('header').removeClass('shrink');
				}
			});
			
			// ANIMATE ON SCROLL
			AOS.init();
			
			// SLICK CAROUSEL
			setTimeout(function() {
				
				$('.static_img, .blur_overlay').addClass('fade_out');
				$('.original').addClass('white-text');
				$('header').addClass('visible');
				
				$(".carousel").slick({
					autoplaySpeed: 3500,
					dots: false,
					arrows: false,
					autoplay: true,
					fade: true,
					speed: 5000,
					pauseOnHover: false,
					//adaptiveHeight: true,
					//appendDots: $('.slick-dot-anchor'),
					//customPaging : function(carousel, i) {
					//var thumb = $(carousel.$slides[i]).data();
					//return '<a class="deeper-dive-carousel-nav">'+(i+1)+'</a>';
					//},
				});
			}, 3000);
			
			/*
			// KEN BURNS
			var currentSlide = 0;
			$('.carousel_hero').on('afterChange', function(event, slick, newSlide) {
				var items = $('.carousel_hero .slick-slide');
				if(currentSlide != newSlide) {
				    currentSlide = newSlide;
				    items.removeClass('animated');
				    setTimeout(function(){
						items.addClass('animated');
				    });
				}
			});
			
			$('.deeper-dive-nav').slick({ // slick nav
			   asNavFor: '.carousel',
			   focusOnSelect: true,
			   arrows: false
			 });
			 */
			
		});
		
	});

} ( this, jQuery ));