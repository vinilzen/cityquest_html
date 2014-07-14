$(function() {
	function set_video_bgr(){
		if (document.body.clientWidth < 1025) {
			$('#bgr_video, #bgr_video_footer').hide();
		} else {
			var w = $('.jumbotron').outerWidth(),
				video1 = document.getElementById('bgr_video');
				video2 = document.getElementById('bgr_video_footer');

			video1.addEventListener('loadeddata', function() {
				console.log('loadded');
				$('.jumbotron').css('backgroud','none');
				$('#bgr_video, #bgr_video_footer')
					.css({
						width: w,
						height: 'auto',
						display: 'block',
					});
			}, false);

			video1.src = video2.src = 'img/000800394_main_xl.mp4';
			video1.load();
			video2.load();
		}

	}

	set_video_bgr();

	var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	window.addEventListener(orientationEvent, function() {
		set_video_bgr();
	});
});