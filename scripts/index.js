import { Card } from './Card.js';
import { configForm, initialCards, popupOverlays, popupCardImg, popupCardTitle, popupCard, photoGalleryItems } from './utils.js';
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
const popupFormAdd = document.querySelector('.popup__form_type_add');
const popupFormEdit = document.querySelector('.popup__form_type_edit');



// СЛУШАТЕЛИ
editButton.addEventListener('click',  openPopupEdit);
addButton.addEventListener('click',  openPopupAdd);
 




// ФУНКЦИИ
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  addListenerEsc(document);
  addListenerOverlay(popupOverlays);
  closeButtons.forEach(function(item) {
    item.addEventListener('click', closePopup);
  });
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_is-opened');
  openedPopup.classList.remove('popup_is-opened');
  removeListenerEsc(document);

  //если не удалять слушатели ниже, то в консоли появляется ошибка при двойном клике https://skr.sh/sE7aAlOUewk
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
    editForm.addEventListener('submit', handleEditFormSubmit);
    saveButton.addEventListener('click', closePopup);
    openPopup(popupWindowEdit);
    enableValidation(configForm,popupFormEdit);
}

function openPopupAdd() {
  addCardForm.reset();
  addCardForm.addEventListener('submit', handleAddCardFormSubmit);
  createButton.addEventListener('click', closePopup);
  openPopup(popupWindowAdd);
  enableValidation(configForm,popupFormAdd);
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

function createCard(dataCards, cardSelector) {
  const cardClass = new Card(dataCards, cardSelector);
  const card = cardClass.createCard();
  return card;
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const name = newNameInput.value
  const link = linkInput.value
  const newCard = createCard({name: name, link: link }, '.templateCard');
  photoGalleryItems.prepend(newCard);
  addCardForm.removeEventListener('submit', handleAddCardFormSubmit);
}



initialCards.forEach((initialCard) => {
  const card = createCard(initialCard, '.templateCard');
  photoGalleryItems.append(card);
})


function enableValidation(configForm,popupForm) {
  const classFormValidate = new FormValidate(configForm, popupForm);
  classFormValidate.enableValidation();
  classFormValidate.toggleButton()
}

export function handleOpenPopup (name,link) {
  const cardImgAlt = name;
  popupCardImg.src = link;
  popupCardTitle.textContent = name;
  popupCardImg.setAttribute('alt', cardImgAlt);
  openPopup(popupCard);
}