
const showHide = (contentClass,btnOpenClass,btnCloseClass) =>{
  const content = document.querySelector(`.${contentClass}`);
  const btnOpen = document.querySelector(`.${btnOpenClass}`);
  const btnClose = document.querySelector(`.${btnCloseClass}`);

  btnOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      content.classList.add(`${contentClass}--open`);
      btnOpen.classList.add('hidden');
      btnClose.classList.remove('hidden');
  });
  btnClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      content.classList.remove(`${contentClass}--open`);
      btnOpen.classList.remove('hidden');
      btnClose.classList.add('hidden');
  });
}

showHide('gallary-brands','button-show-brands','button-hide-brands');
showHide('gallary-repair-type','button-show-repair-type','button-hide-repair-type');
showHide('about__text','show-btn','hide-btn');


