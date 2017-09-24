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
		$('body,html').animate({scrollTop: 0}, 1200);	//0 - margin-top; 1200 - scrolling speed
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


	//попап окно с формой обратной связи
	$('button').magnificPopup({
		// closeBtnInside: true,
		items: {
				src: $('#callback'),
				type: 'inline'
		},
		mainClass: 'mfp-forms'
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