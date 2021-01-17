$('.slider').slick({
    arrows: true,
    autoplay: true,
    speed: 500
});

new WOW().init();

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
	anchor.addEventListener('click', function(e){
		e.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior:'smooth',
			block:'start'
		})
	})
}
jQuery(function($){
	$('#tel').mask('+7 (999) 999-99-99');
})
$("#form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Thank you!");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
});