
// const showHide = (contentClass,btnOpenClass,btnCloseClass,area,blur,closeArea) =>{
//   const content = document.querySelector(`.${contentClass}`);
//   const btnOpen = document.querySelector(`.${btnOpenClass}`);
//   const btnClose = document.querySelector(`.${btnCloseClass}`);
//   const areaBlur= document.querySelector(`.${area}`);
//   const menuBlur= document.querySelector(`.${blur}`);
//   const areaClose= document.querySelector(`.${closeArea}`);


//   btnOpen.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       content.classList.remove(`${contentClass}--hidden`);
//       menuBlur.classList.remove(`${blur}--hidden`);
//       areaBlur.classList.add(`${area}--true`);
//   });
//   btnClose.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       content.classList.add(`${contentClass}--hidden`);
//       menuBlur.classList.add(`${blur}--hidden`);
//       areaBlur.classList.remove(`${area}--true`);

//   });
//   areaClose.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     content.classList.add(`${contentClass}--hidden`);
//     menuBlur.classList.add(`${blur}--hidden`);
//     areaBlur.classList.remove(`${area}--true`);
// });
// }

// showHide('side-menu-wrapper','menu-button','menu-button-close','blur','side-menu-overlay','blur');

// showHide('modal-call-wrapper','call-button','menu-button-close','blur','side-menu-overlay','blur-close');


const sideMenu = document.querySelector(`.side-menu-wrapper`);
const btnOpen = document.querySelector(`.menu-button`);
const btnClose = document.querySelector(`.menu-button-close`);
const areaBlur= document.querySelector(`.blur`);
const menuBlur= document.querySelector(`.side-menu-overlay`);

const modalBlur = document.querySelector(`.modal-overlay`);
const modal = document.querySelector(`.modal-wrapper`);
const callBtn = document.querySelector(`.call-button`);
const messageBtn = document.querySelector(`.message-button`);
const modalBtnClose = document.querySelector(`.modal-button-close`);
const modalCall = document.querySelector(`.modal-call`);
const modalFeedback = document.querySelector(`.modal-feedback`);

const callBtnTab = document.querySelector(`.call-button-tablet`);
const messageBtnTab = document.querySelector(`.message-button-tablet`);

btnOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.remove(`side-menu-wrapper--hidden`);
  menuBlur.classList.remove(`side-menu-overlay--hidden`);
  areaBlur.classList.add(`blur--true`);
});
btnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.add(`side-menu-wrapper--hidden`);
  menuBlur.classList.add(`side-menu-overlay--hidden`);
  areaBlur.classList.remove(`blur--true`);

});
areaBlur.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.add(`side-menu-wrapper--hidden`);
  menuBlur.classList.add(`side-menu-overlay--hidden`);
  modalBlur.classList.add(`modal-overlay--hidden`);
  modal.classList.add(`modal-wrapper--hidden`);
  sideMenu.classList.remove(`side-menu-wrapper--blur`);
  areaBlur.classList.remove(`blur--true`);
});



callBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove(`modal-wrapper--hidden`);
  sideMenu.classList.add(`side-menu-wrapper--blur`);
  areaBlur.classList.add(`blur--true`);
  modalBlur.classList.remove(`modal-overlay--hidden`);
  modalFeedback.classList.add(`modal-feedback--hidden`);
  modalCall.classList.remove(`modal-call--hidden`);

});

callBtnTab.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove(`modal-wrapper--hidden`);
  sideMenu.classList.add(`side-menu-wrapper--blur`);
  areaBlur.classList.add(`blur--true`);
  modalBlur.classList.remove(`modal-overlay--hidden`);
  modalFeedback.classList.add(`modal-feedback--hidden`);
  modalCall.classList.remove(`modal-call--hidden`);

});



messageBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove(`modal-wrapper--hidden`);
  sideMenu.classList.add(`side-menu-wrapper--blur`);
  areaBlur.classList.add(`blur--true`);
  modalBlur.classList.remove(`modal-overlay--hidden`);
  modalFeedback.classList.remove(`modal-feedback--hidden`);
  modalCall.classList.add(`modal-call--hidden`);

});

messageBtnTab.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove(`modal-wrapper--hidden`);
  sideMenu.classList.add(`side-menu-wrapper--blur`);
  areaBlur.classList.add(`blur--true`);
  modalBlur.classList.remove(`modal-overlay--hidden`);
  modalFeedback.classList.remove(`modal-feedback--hidden`);
  modalCall.classList.add(`modal-call--hidden`);

});

modalBtnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.add(`side-menu-wrapper--hidden`);
  menuBlur.classList.add(`side-menu-overlay--hidden`);
  modal.classList.add(`modal-wrapper--hidden`);
  sideMenu.classList.remove(`side-menu-wrapper--blur`);
  modalBlur.classList.add(`modal-overlay--hidden`);
  areaBlur.classList.remove(`blur--true`);
});


