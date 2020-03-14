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

  window.addEventListener('resize', function () {});

  /* Показать скрытые Завершенные Проекты страница О Компании*/
  const completProjectsWrapper = document.querySelector('.project-cards');
  const completProjectCard = completProjectsWrapper.querySelectorAll('.card-item');
  const btnMoreCards = document.querySelector('#moreProjects');

  if (btnMoreCards) {
    btnMoreCards.addEventListener('click', function () {

      this.classList.add('hide');
      for (let card of completProjectCard) {

        card.classList.remove('hide');
      }
    })
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

})