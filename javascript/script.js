$(function() {
	$('.headerNavContent').hover(

		function () {
 			$('.headerNav').addClass('headerNavHoverEffect');
 			setTimeout(function() {
				$('.headerNavText').addClass('displayInline');
			}, 100);
		}, 

		function () {
 			$('.headerNav').removeClass('headerNavHoverEffect');
 			$('.headerNavText').removeClass('displayInline');
		}
	);
});