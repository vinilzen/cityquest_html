$(function() {


	$('.ico-pay').tooltip();

	if ($('#bgr_video').length){
		
		function set_video_bgr(){
			if (document.body.clientWidth < 1025) {
				$('#bgr_video').hide();
			} else {
				var w = $('.jumbotron').outerWidth(),
					video = document.getElementById('bgr_video');

				video.addEventListener('loadeddata', function() {
					$('.jumbotron').css('backgroud','none');
					$('#bgr_video')
						.css({
							width: w,
							height: 'auto',
							display: 'block',
						});
				}, false);

				video.src = 'img/Quest_BG_V_3.mp4';
				video.load();
			}
		}

		set_video_bgr();
	}

	var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	window.addEventListener(orientationEvent, function() {

		if ($('#bgr_video').length){
			set_video_bgr();
		}


		// $('.modal-backdrop.fade.in').fadeOut();
		if (document.body.clientWidth < 1024) {
			$('#top_menu').appendTo('#top_menu_container');
			$('#top_menu').hide();

			if (document.body.clientWidth > 767) {

				if ($('#for-login-pl').text() == '') {
					$('.ico-lock').appendTo('#for-login-pl').show();
					$('#for-login').html('');
				}
				if ($('#for-city').text() == '') {
					$('.city-select').appendTo('#for-city').css('display','inline-block');
					$('#for-select-city').html('');
				}
			} else {
				$('.city-select, .ico-lock').hide();
			}
		}
		
		$('#myModalMenu').modal('hide');
	});


	$('#show-menu').click(function() {

		if (document.body.clientWidth < 768) {
			if ($('#for-select-city').text() == '') {
				$('.city-select').show().appendTo('#for-select-city');
				$('#for-city').html('');
			}

			if ($('#for-login').text() == '') {
				$('.ico-lock').show().css('display','inline-block').appendTo('#for-login');
				$('#for-login-pl').html('');
			}
		} else {
			if ($('#for-login-pl').text() == '') {
				$('.ico-lock').hide().appendTo('#for-login-pl');
				$('#for-login').html('')
			}
			if ($('#for-city').text() == '') {
				$('.city-select').hide().appendTo('#for-city');
				$('#for-select-city').html('');
			}
		}

		if ($('#myModalMenu #for-menu').text() == '') {
			$('#top_menu').show().appendTo('#myModalMenu #for-menu');
		}

		$('#myModalMenu').modal('toggle');
	});


	$('.curent_date').click(function(){
		$('.curent_date').removeClass('active');
		$(this).addClass('active');
	});

});