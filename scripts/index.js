import { Card } from './Card.js';
import { configFormEdit, configFormAdd, initialCards, popupOverlays, popupCardImg, popupCardTitle, popupCard } from './utils.js';
import { FormValidate } from './FormValidator.js';




const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const createButton = document.querySelector('.popup__create-button');
const popupWindowEdit = document.querySelector('.popup_edit-profile');
const popupWindowAdd = document.querySelector('.popup_add-card');
const authorName = document.querySelector('.author__name');
const profession = document.querySelector('.author__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_description');
const newNameInput = document.querySelector('.popup__input_type_new-name');
const linkInput = document.querySelector('.popup__input_type_link');
const editForm = document.forms.aboutUser;
const addCardForm = document.forms.addCard;




// СЛУШАТЕЛИ
editButton.addEventListener('click',  openPopupEdit);
addButton.addEventListener('click',  openPopupAdd);
editForm.addEventListener('submit', handleEditFormSubmit); 
addCardForm.addEventListener('submit', handleAddCardFormSubmit);



// ФУНКЦИИ
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  addListenerEsc(document);
  addListenerOverlay(popupOverlays);
  closeButtons.forEach(function(item) {
    item.addEventListener('click', closePopup);
  });
  saveButton.addEventListener('click', closePopup);
  createButton.addEventListener('click', closePopup);
  editForm.addEventListener('submit', handleEditFormSubmit); 
  addCardForm.addEventListener('submit', handleAddCardFormSubmit);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_is-opened');
  openedPopup.classList.remove('popup_is-opened');
  removeListenerEsc(document);
  removeListenerOverlay(popupOverlays);
  closeButtons.forEach(function(item) {
    item.removeEventListener('click', closePopup);
  });
  saveButton.removeEventListener('click', closePopup);
  createButton.removeEventListener('click', closePopup);
}

function openPopupEdit() {
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
    openPopup(popupWindowEdit);
}

function openPopupAdd() {
  addCardForm.reset();
  openPopup(popupWindowAdd);
}

function addListenerOverlay(popupOverlays){
  popupOverlays.forEach(function(popupOverlay) {
    popupOverlay.addEventListener('click', closePopupOverlay);
  });
}

function removeListenerOverlay(popupOverlays){
  popupOverlays.forEach(function(popupOverlay) {
    popupOverlay.removeEventListener('click', closePopupOverlay);
  });
}

function closePopupOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  } 
}

function addListenerEsc(document) {
  document.addEventListener('keydown', closePopupEsc);
}

function removeListenerEsc(document) {
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(event) {
  if (event.key === 'Escape') {
    closePopup();
  } 
}

function handleEditFormSubmit(evt) {
    evt.preventDefault(); 
    authorName.textContent = nameInput.value;
    profession.textContent = professionInput.value;
}


function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const name = newNameInput.value
  const link = linkInput.value
  const newCardClass = new Card({name: name, link: link }, '.templateCard');
  const newCard = newCardClass.createCard();
  document.querySelector('.photo-gallery__items').prepend(newCard);
  addCardForm.removeEventListener('submit', handleAddCardFormSubmit);
}



initialCards.forEach((initialCard) => {
  const cardClass = new Card(initialCard, '.templateCard');
  const card = cardClass.createCard();
  document.querySelector('.photo-gallery__items').append(card);
})

const popupFormEdit = document.querySelector('.popup__form_type_edit');
const classEditFormValidate = new FormValidate(configFormEdit, popupFormEdit);
classEditFormValidate.enableValidation();

const popupFormAdd = document.querySelector('.popup__form_type_add');
const classAddFormValidate = new FormValidate(configFormAdd, popupFormAdd);
classAddFormValidate.enableValidation();

// const popupForms = document.querySelectorAll('.popup__form');
// popupForms.forEach((popupForm) => {
//   const classFormValidate = new FormValidate(configFormEdit, popupForm);
//   classFormValidate.enableValidation();
// })



export function handleOpenPopup (name,link) {
  const cardImgAlt = name;
  popupCardImg.src = link;
  popupCardTitle.textContent = name;
  popupCardImg.setAttribute('alt', cardImgAlt);
  openPopup(popupCard);
}

// function handleClosePopup() {
//   // const cardImgAlt = '';
//   // popupCardImg.src = '';
//   // popupCardTitle.textContent = '';
//   // popupCardImg.setAttribute('alt', cardImgAlt);
//   popupCard.classList.remove('popup_is-opened');
// }