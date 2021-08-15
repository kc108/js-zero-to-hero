'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// We are not using the 'event' at this time, but we will use later
// this will provide info about what key is pressed
document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  // LOGGED to see what is in the 'e'.
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if the modal class does NOT contain the hidden class
    // if this.. and if this (latter first then the first one)
    closeModal();
  }
});
