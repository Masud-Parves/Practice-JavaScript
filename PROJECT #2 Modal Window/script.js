'use strict';

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModalWindow);
}

btnCloseModal.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});
