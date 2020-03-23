
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();


$('.main-slider').slick({
	dots: true,
	arrows: false
});


$('.slider').slick({
	dots: false,
	arrows: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 515,
			settings: {
				slidesToShow: 1
			}
		}
	]
});