
const showHide = (contentClass,btnOpenClass,btnCloseClass,area,closeArea) =>{
  const content = document.querySelector(`.${contentClass}`);
  const btnOpen = document.querySelector(`.${btnOpenClass}`);
  const btnClose = document.querySelector(`.${btnCloseClass}`);
  const areaBlur= document.querySelector(`.${area}`);
  const areaClose= document.querySelector(`.${closeArea}`);


  btnOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      content.classList.remove(`${contentClass}--hidden`);
      areaBlur.classList.add(`${area}--true`);
      // btnOpen.classList.add('hidden');
      // btnClose.classList.remove('hidden');
  });
  btnClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      content.classList.add(`${contentClass}--hidden`);
      areaBlur.classList.remove(`${area}--true`);
      // btnOpen.classList.remove('hidden');
      // btnClose.classList.add('hidden');
  });
  areaClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    content.classList.add(`${contentClass}--hidden`);
    areaBlur.classList.remove(`${area}--true`);
    // btnOpen.classList.remove('hidden');
    // btnClose.classList.add('hidden');
});
}

showHide('side-menu-wrapper','menu-button','menu-button-close','blur','blur-close');


