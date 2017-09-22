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
	// ------------------------------------------

		//Карусель в блоке comments
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: '',
		autoplay : true,
		autoplayHoverPause : false,
		loop: true
	});







	// E-mail Ajax Send
	$(".mail").submit(function() { 	//Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 				//Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваше сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});
