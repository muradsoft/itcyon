
//slider
$(document).ready(function () {

	// $("[data-btn=work]").on('click', function (e) {
	// 	$('.add-block').toggleClass('add-block__active');
	// 	$('[data-btn=work]').toggleClass('btn-addgreen_close')
	// });

	// $("[data-btn=worker]").on('click', function (e) {
	// 	$('.chooseworker').toggleClass('chooseworker__active');
	// 	$('[data-btn=worker]').toggleClass('btn-addgreen_close')
	// });

	//catalog descr

	function toggleWork(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$('.add-block').eq(i).toggleClass('add-block__active');
				$('[data-btn=work]').eq(i).toggleClass('btn-add_close')
			});
		});
	};

	function toggleWorkers(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$('.chooseworker').eq(i).toggleClass('chooseworker__active');
				$('[data-btn=worker]').eq(i).toggleClass('btn-add_close')
			});
		});
	};
	toggleWork('[data-btn=work]');
	toggleWorkers('[data-btn=worker]');
	// 		});
	// 	});
	// };
	// toggleSlide(".catalog-item__link");
	// toggleSlide(".catalog-item__back");

	// function modalClose(item) {
	// 	$(item).on('click', () => {
	// 		$('.overlay, #consultation, #order, #thanks').fadeOut();
	// 	});
	// };
	// modalClose('.modal__close');

});