//add variables for the classes - eg var $headerNav = $('.headerNav');

$(function() {
	// $('header')
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


	// $('.headerNav').on('transitionend', function() {
		
	// });
});