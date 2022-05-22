$(document).ready(function() {
  
	$('.overlay').click(function() {
		$('.popup').addClass('open')
	});
  
	$('.close').click(function() {
		$('.popup').removeClass('open')
	});
  
});
