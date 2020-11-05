
$(document).ready(function () {


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




	function selectForm(item) {

		$(item).on("click", function () {
			let a = $('#select_cooperator').val();
			if (a == 1) {
				$('#select_categories').css('display', 'none')
			}
			else if (a != 1) {
				$('#select_categories').css('display', 'block');
			}
		});
	};



	$('ul.tasks__tabs').on('click', 'li:not(tasks__tab_active)', function () {
		$(this)
			.addClass('tasks__tab_active').siblings().removeClass('tasks__tab_active')
			.closest('div.tasks__inner').find('div.tasks__content').removeClass('tasks__content_active').eq($(this).index()).addClass('tasks__content_active');
	});

	toggleWork('[data-btn=work]');
	toggleWorkers('[data-btn=worker]');
	selectForm('#select_cooperator');
});