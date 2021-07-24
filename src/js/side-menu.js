const sideMenu = document.querySelector(`.side-menu-wrapper`);
const menuBlur= sideMenu.querySelector(`.side-menu-overlay`);
const btnClose = sideMenu.querySelector(`.menu-button-close`);
const btnOpen = document.querySelector(`.menu-button`);
const areaBlur= document.querySelector(`.blur`);

const modal = document.querySelector(`.modal-wrapper`);
const modalBlur = modal.querySelector(`.modal-overlay`);

const modalBtnClose = modal.querySelector(`.modal-button-close`);
const modalCall = modal.querySelector(`.modal-call`);
const modalFeedback = modal.querySelector(`.modal-feedback`);
const callBtn = sideMenu.querySelector(`.call-button`);
const messageBtn = sideMenu.querySelector(`.message-button`);
const callBtnTab = document.querySelector(`.call-button-tablet`);
const messageBtnTab = document.querySelector(`.message-button-tablet`);

/////////////////sideMenu open/////////////////////

const menuOpen = (evt) => {
  evt.preventDefault();
  sideMenu.classList.remove(`side-menu-wrapper--hidden`);
  menuBlur.classList.remove(`side-menu-overlay--hidden`);
  areaBlur.classList.add(`blur--true`);
}

/////////////////sideMenu close/////////////////////

const menuClose = (evt) => {
  evt.preventDefault();
  sideMenu.classList.add(`side-menu-wrapper--hidden`);
  menuBlur.classList.add(`side-menu-overlay--hidden`);
  areaBlur.classList.remove(`blur--true`);
}

/////////////////click on Blur close/////////////////////

const clickOnBlurClose = (evt) => {
  evt.preventDefault();
  sideMenu.classList.add(`side-menu-wrapper--hidden`);
  menuBlur.classList.add(`side-menu-overlay--hidden`);
  modalBlur.classList.add(`modal-overlay--hidden`);
  modal.classList.add(`modal-wrapper--hidden`);
  sideMenu.classList.remove(`side-menu-wrapper--blur`);
  areaBlur.classList.remove(`blur--true`);
}

/////////////////callModal open/////////////////////

const modalCallOpen = (evt) => {
  evt.preventDefault();
  modal.classList.remove(`modal-wrapper--none`);
  modal.classList.remove(`modal-wrapper--hidden`);
  sideMenu.classList.add(`side-menu-wrapper--blur`);
  areaBlur.classList.add(`blur--true`);
  modalBlur.classList.remove(`modal-overlay--hidden`);
  modalFeedback.classList.add(`modal-feedback--hidden`);
  modalCall.classList.remove(`modal-call--hidden`);
}

///////////////feedbackModal open/////////////////////

const modalFbOpen = (evt) => {
  evt.preventDefault();
  modal.classList.remove(`modal-wrapper--none`);
  modal.classList.remove(`modal-wrapper--hidden`);
  sideMenu.classList.add(`side-menu-wrapper--blur`);
  areaBlur.classList.add(`blur--true`);
  modalBlur.classList.remove(`modal-overlay--hidden`);
  modalFeedback.classList.remove(`modal-feedback--hidden`);
  modalCall.classList.add(`modal-call--hidden`);
}

////////////////////modal close//////////////////////////

const modalClose = (evt) => {
  evt.preventDefault();
  sideMenu.classList.add(`side-menu-wrapper--hidden`);
  menuBlur.classList.add(`side-menu-overlay--hidden`);
  modal.classList.add(`modal-wrapper--hidden`);
  sideMenu.classList.remove(`side-menu-wrapper--blur`);
  modalBlur.classList.add(`modal-overlay--hidden`);
  areaBlur.classList.remove(`blur--true`);
}


btnOpen.addEventListener('click', menuOpen);

btnClose.addEventListener('click', menuClose);

areaBlur.addEventListener('click', clickOnBlurClose);

callBtnTab.addEventListener('click', modalCallOpen);
callBtn.addEventListener('click', modalCallOpen);

messageBtnTab.addEventListener('click', modalFbOpen);
messageBtn.addEventListener('click', modalFbOpen);

modalBtnClose.addEventListener('click', modalClose);
