
$(document).ready(function () {

  //анимация svg
  const icon1 = new Vivus('icon1', {
    duration: 300
  });
  const icon2 = new Vivus('icon2', {
    duration: 200
  });
  const icon3 = new Vivus('icon3', {
    duration: 200
  });

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

  /*показать часть формы*/
  const showFormBtn = document.querySelectorAll('.show-fields');
  //const showFormBtnMobile = document.querySelectorAll('.show-fields--mob');
  //const showFormBtnDesktop = document.querySelectorAll('.show-fields--desk');
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
  const RESIZE_SETPOINT = 768;
  let prevWidth = window.innerWidth;
  let setpointTriggered = false;

  window.addEventListener('resize', function () {
  })

})