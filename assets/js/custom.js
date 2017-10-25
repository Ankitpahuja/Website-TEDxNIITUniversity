$(document).ready(function(e) {	
	
/* Google Map Section ----------------------------------------------*/	

	//GoogleMapinitialize();
	// var height_w = $(window).height();
	// $('.intro').height(height_w);

	var width_w = $(window).width();
	isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/);
/* Header OnScroll Section ----------------------------------------------*/

	 $(window).scroll(function () {
        if ($('.fixed-header').offset().top > 50) { 
            $('.fixed-header').addClass("hamburger-header");
        } else {
            $('.fixed-header').removeClass("hamburger-header");
        }
    });
	
/* Countdown Section ----------------------------------------------*/

	$("#defaultCountdown").countdown({ 
		//Time set = Year, Month,Date; Starts from 0-jan month
    	until: new Date(2018, 0, 14)
    }); 

/* Accordian Section ----------------------------------------------*/
	
	
	$('li.more').each(function() {
		$(this).find('i').click(function() { 
			$(this).toggleClass('minus');
			$(this).parents('ul').siblings('.more-text').slideToggle('slow');
		})
	});

	

/* Svg Function ----------------------------------------------*/

	
	$('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if ( typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if ( typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	
/* Mobile Menu Toggle ----------------------------------------------*/	
	
	$('.toggle-menu').click(function() {

		$('#header nav').slideToggle('slow');
		$(this).toggleClass('open-menu');
	}); 
$('#header nav li').click(function(){
	if(width_w < 767){
	$('.toggle-menu').trigger('click')
	}
	
});


	 
/* ScrollTop ----------------------------------------------*/

	$('.scrollTop, .logo').click(function() {
		$('body, html').animate({
			scrollTop : 0
		}, 2000);
		
		$('.active_nav').removeClass('active_nav');
		return false;
	});
	
	
	
	$(window).load(function() {
		$('html,body').animate({
			scrollTop : 0
		}, 50);
		$('#header nav li').removeClass('active');
		
		 
		$('.flexslider').flexslider({
			animation : "fade",
			easing : "swing",
			animationSpeed : 1500,
			slideshowSpeed : 10000,
			controlNav : false,
			directionNav : false
		}); 

	});

	
/* FullPage Menu Click Event ----------------------------------------------*/	


$(window).scroll(function() {
		var abc = $(this).scrollTop()
		var position_holder = new Array();
		var i = 0;
		$('.anchorlink').each(function() {
			position_holder[i] = $(this).attr('name');
			i++;
		});

		var curr_pos_win = $(this).scrollTop() + $('.header-inner').offset().top + $('.header-inner').height() - $(window).scrollTop();

		for ( i = (position_holder.length) - 1; i >= 0; i--) {
			if ($(position_holder[i]).offset().top < curr_pos_win) {
				$('.anchorlink').each(function() {
					if ($(this).attr('name') == position_holder[i]) {
						var classCheck = $(this).attr('class');
						if (classCheck.indexOf("active") > -1) {

						} else {
							$('.anchorlink').removeClass('active_nav'); {
								$(this).addClass('active_nav');

							}

						}
					}
				});

				break;
			}
		}
		
		
		var scroll_top = $(window).scrollTop();
		if (scroll_top > 0) {
		} else {
			$('.active_nav').removeClass('active_nav');
		}


	});

	$('[name^="#"]').bind('click.smoothscroll', function(e) {
		e.preventDefault();

		var target = $(this).attr("name");
		$target = $(target);
		goto = parseInt($target.offset().top) - parseInt(70)
		$('html, body').stop().animate({
			'scrollTop' : goto
		}, 500, 'swing', function() {

		});
	});
		
	if(isMobile){
		$('[name^="#"]').bind('click.smoothscroll', function(e) { 
		e.preventDefault();

		var target = $(this).attr("name");
		$target = $(target);
		goto = parseInt($target.offset().top) - parseInt(40)
		$('html, body').stop().animate({
			'scrollTop' : goto
		}, 500, 'swing', function() {

		});
	});
	}

	
/* More Event Toggle Section ----------------------------------------------*/	
	
	
	$('.more-event-btn').click(function() {
		$('.more-event-toggle-section').slideToggle('slow');
		$(this).text(function(i, v){
            return v === 'View More' ? 'View Less' : 'View More'
       });
	}); 

/* Lightbox Section ----------------------------------------------*/	

	
	$('.fancybox-buttons').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

	});


/* Parallex Effect ----------------------------------------------*/	

	
	var parallax = function(id, val) {
		if ($(window).scrollTop() > id.offset().top - $(window).height() && $(window).scrollTop() < id.offset().top + id.outerHeight()) {
			var px = parseInt($(window).scrollTop() - (id.offset().top - $(window).height()))
			px *= -val;
			id.css({
				'background-position' : 'center ' + px + 'px'
			})
		}
	}

	
	
	$(window).load(function() {
			if ($('.parallax').length) {
				$('.parallax').each(function() {
					parallax($(this), 0.1);
				})
			}
		})
		$(window).scroll(function() {
			if ($('.parallax').length) {
				$('.parallax').each(function() {
					parallax($(this), 0.1);
				})
			}
		})
		$('.map-view').on('click',function(){
			$('.map-overlay').fadeOut();
			$('.back-btn').fadeIn();
			
			return false;
		})
		
	$('.back-btn').on('click',function(){
		$('.back-btn').fadeOut();
			$('.map-overlay').fadeIn();
			
			return false;
		})


//Custom Map

			if ($('#map-canvas').length) {
				var map = new GMaps({
					div : '#map-canvas',
					lat : 27.962866,
					lng : 76.403188,
					disableDefaultUI : true,
					zoom : 17,
					scrollwheel : true,
					draggable: true
				});
				


				map.drawOverlay({
					lat : map.getCenter().lat(),
					lng : map.getCenter().lng(),
					content : '<a href="#" class="mapmarker"><i class="fa fa-map-marker"></i></a>',
					verticalAlign : 'top',
					horizontalAlign : 'center'
				});

				if ($(window).width() >= 1200) {
					map.setOptions({
						styles : Site.styles,
						center : new google.maps.LatLng(41.401836, -74.329801),
					});
				} else if ($(window).width() >= 992) {
					map.setOptions({
						styles : Site.styles,
						center : new google.maps.LatLng(41.401836, -74.331801),
					});
				} else if ($(window).width() >= 768) {
					map.setOptions({
						styles : Site.styles,
						center : new google.maps.LatLng(41.401836, -74.329801),
					});
				} else {
					map.setOptions({
						styles : Site.styles,
						center : new google.maps.LatLng(41.400136, -74.332562),
					});
				}
			}






	
		
});





