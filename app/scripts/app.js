import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import  slick from 'slick-carousel';
import AOS from 'aos';

(function ($) {
	svg4everybody();

	var styles = [
		'padding: 0 9px',
		'background: #fff',
		'color: #000',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.4',
		'text-align: left',
		'font-size: 12px',
		'font-weight: 400'
	].join(';');

	console.log('%c заказать html верстку', styles);
	console.log('%c gorlov35@gmail.com', styles);

	$(function() {

		let videoHeight = $('.video').outerHeight();
		let hBottom = $('.header__bottom').outerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > videoHeight ) {
				$('.header').css('paddingTop', hBottom);
				$('.header__bottom').addClass('header__bottom_fixed');
			} else {
				$('.header').css('paddingTop', 0);
				$('.header__bottom').removeClass('header__bottom_fixed');

			}
		});

		$(window).resize(function () {
			hBottom = $('.header__bottom').outerHeight();
			$(window).scroll(function () {
				if ($(window).scrollTop() >= videoHeight ) {
					$('.header').css('paddingTop', hBottom);
					$('.header__bottom').addClass('header__bottom_fixed');
				} else {
					$('.header').css('paddingTop', 0);
					$('.header__bottom').removeClass('header__bottom_fixed');

				}
			});
		});



		const $hUser = $('.h-user');
		const $hUserControls = $('.h-user__controls');
		// $hUser.on('click', function () {
		// 	$hUserControls.toggleClass('h-user__controls_active');
		// });
		$hUser.hover(function () {
			$hUserControls.toggleClass('h-user__controls_active');
		});

		const vid = document.querySelector(".video__object");
		const pauseButton = document.querySelector(".video__control");

		if (window.matchMedia('(prefers-reduced-motion)').matches) {
			vid.removeAttribute("autoplay");
			vid.pause();
			pauseButton.innerHTML = "Paused";
		}

		// function vidFade() {
		// 	vid.classList.add("stopfade");
		// }

		vid.addEventListener('ended', function()
		{
		// only functional if "loop" is removed
		vid.pause();
		// to capture IE10
		// vidFade();
		});


		pauseButton.addEventListener("click", function() {
			pauseButton.classList.toggle("video__control_pause");
			if (vid.paused) {
				vid.play();
				pauseButton.innerHTML = "Воспроизведение";
			} else {
				vid.pause();
				pauseButton.innerHTML = "Пауза";
			}
		})

		 AOS.init();


		$('.header__button-down').on('click', function(e) {
			e.preventDefault();
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top }, 800);
			}
		});

		$('.buy__list').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
					{
					breakpoint: 1344,
						settings: {
						  slidesToShow: 3
						}
					},
					{
					breakpoint: 991,
						settings: {
						  slidesToShow: 2
						}
					},
					{
					breakpoint: 768,
						settings: {
						  slidesToShow: 1
						}
					}

				]

		});

		// width 1344px


		// function pageWidget(pages) {
		// 	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
		// 	widgetWrap.prependTo("body");
		// 	for (var i = 0; i < pages.length; i++) {
		// 		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
		// 	}
		// 	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
		// 	widgetStilization.prependTo(".widget_wrap");
		// }

		// pageWidget(['index', 'card', 'categories', 'subcategories', 'service-1', 'service-2']);

	});

})(jQuery);
