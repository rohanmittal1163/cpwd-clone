$(document).ready(function(){
				$('nav li').hover(
					function() {
						$('ul', this).stop().slideDown(200);
					},
					function() {
						$('ul', this).stop().slideUp(200);
					}
					);

				var swiper = new Swiper(".mySwiper", {
					slidesPerView: 1,
					mousewheel: true,
					autoplay: {
						delay: 3500,
						disableOnInteraction: false,
					},
					spaceBetween: 30,
					loop: true,
					keyboard: {
						enabled: true,
					},

					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},

					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
					
				});


				var swiper = new Swiper(".mineSwiper", {
					slidesPerView: 1,
					mousewheel: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					spaceBetween: 30,
					loop: true,
					keyboard: {
						enabled: true,
					},
					
				});

				$('.icon').click(function(){
					$(window).scrollTop(0);

				});

				$(window).scroll(function(){
					var a= $(window).scrollTop();
					if(a >400){
						$('.icon').fadeIn();
					}else{
						$('.icon').fadeOut();
					}
				});
			});