$(function() {

	//Появление кнопки "вверх" и плавный скроллинг к верху страницы
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {			//100-отступ от верхнего края страницы при котором появится кнопка
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);	//0 - margin-top; 300 - scrolling speed
		 return false;
		 });	

});
