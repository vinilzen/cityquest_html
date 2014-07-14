$(function() {
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

			video.src = 'img/Background_For_Quest.mp4';
			video.load();
		}
	}

	set_video_bgr();

	var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	window.addEventListener(orientationEvent, function() {
		set_video_bgr();

		$('#top_menu').appendTo('#top_menu_container');
		$('.modal-backdrop.fade.in').fadeOut();
	});


	$('#top_menu').on('show.bs.collapse', function(){
		$('body').append('<div class="modal-backdrop fade in"></div>');
		$(this).css({
			'position': 'absolute',
			'width': document.body.clientWidth,
			'height': $(window).height(),
			'overflow-y':'scroll',
			'z-index': 1041,
			'top': 0,
			'left': 0,
		}).appendTo('body');
	});

	$('#close_top_menu').click(function(){
		$('#top_menu').appendTo('#top_menu_container');
		$('.modal-backdrop.fade.in').fadeOut();
	});
});