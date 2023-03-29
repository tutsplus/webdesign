$(document).ready(function() {
	$('a.contains-sub').click(function() {
		if($(this).siblings('ul').hasClass('open')){
			$(this).siblings('ul').removeClass('open');
		} else {
			$(this).siblings('ul').addClass('open');
		}
		return false;
	});

	$('ul.submenu a.contains-sub').click(function() {
		//if($(this).offsetParent('ul').hasClass('open')){
			$(this).offsetParent('ul').removeClass('open');
		//} else {
			//$(this).offsetParent('ul').addClass('open');
		//}
		return false;
	});
});