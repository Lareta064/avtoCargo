$(document).ready(function () {

	/*выбор селекта в форме*/
	const selectBlock = document.querySelectorAll('.select-block')

	for (let i = 0; i < selectBlock.length; i++) {

		selectBlock[i].addEventListener('click', function (e) {

			const outInput = selectBlock[i].querySelector('.filters-form-input')
			const itemOptions = selectBlock[i].querySelectorAll('.select-option')
			let optionsDrop = selectBlock[i].querySelector('.select-block-drop')
			let arrowOpenDrop = selectBlock[i].querySelector('.input-arrow')

			// console.log(e.target)
			if (e.target == outInput || e.target == arrowOpenDrop) {
				e.stopPropagation()

				for (let j = 0; j < selectBlock.length; j++) {
					if (j != i) {
						selectBlock[j].querySelector('.select-block-drop').classList.add('hide')
						selectBlock[j].querySelector('.input-arrow').classList.remove('rotate')
					}
				}

				if (optionsDrop.classList.contains('hide')) {

					arrowOpenDrop.classList.add('rotate')
					optionsDrop.classList.remove('hide')

				} else {

					optionsDrop.classList.add('hide')
					arrowOpenDrop.classList.remove('rotate')
				}

			}

			const itemOptionsArray = Array.from(itemOptions)

			for (let i = 0; i < itemOptionsArray.length; i++) {

				if (e.target == itemOptionsArray[i]) {
					e.stopPropagation()

					const selectValue = itemOptionsArray[i].textContent
					outInput.value = selectValue
					optionsDrop.classList.add('hide')
					arrowOpenDrop.classList.remove('rotate')
				}
			}
		})
	}

	/*показать скрытую часть формы Рассчитать стоимость*/
	const showFormBtn = document.querySelectorAll('.show-fields');
	const formPart = document.querySelector('#form-part');

	for (let i = 0; i < showFormBtn.length; i++) {
		showFormBtn[i].addEventListener('click', function () {
			for (item of showFormBtn) {
				item.classList.add('hide');
			}
			formPart.classList.remove('hide');

		});
	}

	/* при ресайзе экарна */

	window.addEventListener('resize', function () { });

	/* Показать скрытые Завершенные Проекты страница О Компании*/
	// const completProjectsWrapper = document.querySelector('.project-cards');
	const completProjectCard = document.querySelectorAll('.project-cards .card-item');
	const btnMoreCards = document.querySelector('#moreProjects');

	if (btnMoreCards) {
		btnMoreCards.addEventListener('click', function () {

			this.classList.add('hide');
			for (let card of completProjectCard) {

				card.classList.remove('hide');
			}
		});
	}


	/* Галерея работ */
	//magnifyk
	$(".card-item").magnificPopup({
		delegate: 'a',
		type: 'image',

		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
	});
	$('.partners-slider').owlCarousel({
		items: 1,
		dots: false,
		loop: true,
		autoplaySpeed: 800,
		autoplay: true,
		nav: true,
		navSpeed: 500,
		navText: ['<span class="slider-arrow slider-arrow-left">	&larr;</span>', '<span class="slider-arrow slider-arrow-right">&rarr;</span>'],

		responsive: {

			580: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	})

	/*  Toggle Tranportation-types */
	const transportTypes = document.querySelectorAll('.transportation-types-item');
	const transportTypesInfo = document.querySelectorAll('.transportation-types-description');

	if (transportTypes) {

		for (let i = 0; i < transportTypes.length; i++) {
			transportTypes[i].addEventListener('click', function () {

				let thisData = this.getAttribute('data-card');

				for (let j = 0; j < transportTypesInfo.length; j++) {

					transportTypesInfo[j].classList.remove('show');
					const textData = transportTypesInfo[j].getAttribute('data-info');

					if (textData == thisData) {
						transportTypesInfo[i].classList.add('show');
					}
				}

			})
		}

	}
	/* FORM VALIDATE*/
	// $('.calc-form').validate({
	// 	rules: {
	// 		userName: {
	// 			required: true
	// 		},
	// 		userPhone: {
	// 			required: true
	// 		},
	// 		city_from: {
	// 			required: true
	// 		},
	// 		city_where: {
	// 			required: true
	// 		},
	// 		wt: {
	// 			required: true
	// 		},
	// 		volume: {
	// 			required: true
	// 		},
	// 		carType: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		userName: {
	// 			required: 'не заполнено'
	// 		},
	// 		userPhone: {
	// 			required: 'не заполнено'
	// 		},
	// 		city_from: {
	// 			required: 'не заполнено'
	// 		},
	// 		city_where: {
	// 			required: 'не заполнено'
	// 		},
	// 		wt: {
	// 			required: 'не заполнено'
	// 		},
	// 		volume: {
	// 			required: 'не заполнено'
	// 		},
	// 		carType: {
	// 			required: 'не заполнено'
	// 		}

	// 	}
	// })


})