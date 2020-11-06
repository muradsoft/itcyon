
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



	function tasksReady(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$('.tasks-block').eq(i).css('display', 'none');
				let a = $('#span_tasks').text();
				let b = $('#span_ready').text();
				problem = $(this).text();
				if (problem == 'Отмена') {
					a++;
					b--;
				}
				else {
					a--;
					b++;
				}
				$('#span_tasks').text(a);
				$('#span_ready').text(b);
			});
		});
	};

	$('#regform_add').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '',
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val("");

			$('#regform_add').trigger('reset');
		})
		return false;
	});



	toggleWork('[data-btn=work]');
	toggleWorkers('[data-btn=worker]');
	selectForm('#select_cooperator');
	tasksReady('[data-btn=ready]')
	// tasksClose('[data-btn=close]')
});