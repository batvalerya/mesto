import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { configForm, initialCards, popupOverlays, popupCardImg, popupCardTitle, popupCard, photoGalleryItems } from '../utils/constants.js';
import { FormValidate } from '../components/FormValidator.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js'; 




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
// const editForm = document.forms.aboutUser;
const addCardForm = document.forms.addCard;
const popupFormAdd = document.querySelector('.popup__form_type_add');
const popupFormEdit = document.querySelector('.popup__form_type_edit');


const profileFormValidator = new FormValidate(configForm,popupFormEdit);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidate(configForm,popupFormAdd);
newCardFormValidator.enableValidation();



// СЛУШАТЕЛИ
// editButton.addEventListener('click',  openPopupEdit);
addButton.addEventListener('click',  openPopupAdd);
closeButtons.forEach(function(item) {
  item.addEventListener('click', closePopup);
});

saveButton.addEventListener('click', closePopup);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
createButton.addEventListener('click', closePopup);
 




// ФУНКЦИИ
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  addListenerEsc(document);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_is-opened');
  openedPopup.classList.remove('popup_is-opened');
  removeListenerEsc(document);
}

function openPopupEdit() {
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
    profileFormValidator.resetErrorsForm();
    openPopup(popupWindowEdit);
}

function openPopupAdd() {
  addCardForm.reset();
  newCardFormValidator.resetErrorsForm();
  openPopup(popupWindowAdd);
}

// function addListenerOverlay(popupOverlays){
//   popupOverlays.forEach(function(popupOverlay) {
//     popupOverlay.addEventListener('click', closePopupOverlay);
//   });
// }

// addListenerOverlay(popupOverlays);


// function closePopupOverlay(event) {
// //   if (event.target === event.currentTarget) {
// //     closePopup();
// //   } 
// // }

// function addListenerEsc(document) {
//   document.addEventListener('keydown', closePopupEsc);
// }

// function removeListenerEsc(document) {
//   document.removeEventListener('keydown', closePopupEsc);
// }

// function closePopupEsc(event) {
//   if (event.key === 'Escape') {
//     closePopup();
//   } 
// }

const editForm = new PopupWithForm('.popup_edit-profile', handleEditFormSubmit);

editButton.addEventListener('click', () => {
  editForm.open();
  editForm.setEventListeners();
});

saveButton.addEventListener('submit', close);


function handleEditFormSubmit(evt) {
    evt.preventDefault(); 
    // authorName.textContent = nameInput.value;
    // profession.textContent = professionInput.value;
}

function createCard(dataCards, cardSelector, handleCardClick) {
  const cardClass = new Card(dataCards, cardSelector, handleCardClick );
  const card = cardClass.createCard();
  return card;
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const name = newNameInput.value
  const link = linkInput.value
  const newCard = createCard({name: name, link: link }, '.templateCard');
  photoGalleryItems.prepend(newCard);
}


// export function handleOpenPopup (name,link) {
//   const cardImgAlt = name;
//   popupCardImg.src = link;
//   popupCardTitle.textContent = name;
//   popupCardImg.setAttribute('alt', cardImgAlt);
//   openPopup(popupCard);
// }

// initialCards.forEach((initialCard) => {
//   const card = createCard(initialCard, '.templateCard');
//   photoGalleryItems.append(card);
// })

const newCard = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const card = createCard(cardItem, '.templateCard', handleCardClick);
        newCard.addItem(card);
    },
 }, '.photo-gallery__items'
); 

newCard.renderItems();

function handleCardClick() {
  const popupWithImage = new PopupWithImage('.popup_card');
  popupWithImage.open(this._name, this._link);
}