// import addButton  from '../../images/add-button.jpg'
import '../../pages/index.css';

import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { configForm, initialCards, photoGalleryItems } from '../utils/constants.js';
import { FormValidate } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js'; 
import { UserInfo } from '../components/UserInfo.js';




const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const authorName = document.querySelector('.author__name');
const profession = document.querySelector('.author__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_description');
const newNameInput = document.querySelector('.popup__input_type_new-name');
const linkInput = document.querySelector('.popup__input_type_link');
const popupFormAdd = document.querySelector('.popup__form_type_add');
const popupFormEdit = document.querySelector('.popup__form_type_edit');


const editFormValidator = new FormValidate(configForm,popupFormEdit);
editFormValidator.enableValidation();

const newCardFormValidator = new FormValidate(configForm,popupFormAdd);
newCardFormValidator.enableValidation();



// СЛУШАТЕЛИ

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  authorName.textContent = editForm._getInputValues()['name'];
  profession.textContent = editForm._getInputValues()['description'];
  editForm.close();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault(); 
  const name = newNameInput.value
  const link = linkInput.value
  const newCard = createCard({name: name, link: link }, '.templateCard', handleCardClick);
  photoGalleryItems.prepend(newCard);
  addForm.close();

}

function createCard(dataCards, cardSelector, handleCardClick) {
  const cardClass = new Card(dataCards, cardSelector, handleCardClick );
  const card = cardClass.createCard();
  return card;
}

function handleCardClick() {
  const popupWithImage = new PopupWithImage('.popup_card');
  popupWithImage.open(this._name, this._link);
  popupWithImage.setEventListeners();
}



const editForm = new PopupWithForm('.popup_edit-profile', handleEditFormSubmit);
editForm.setEventListeners();
const userInfo = new UserInfo({authorNameSelector:'.author__name', aboutAuthorSelector:'.author__profession'});

editButton.addEventListener('click', () => {
  editForm.open();
  nameInput.value = userInfo.getUserInfo()['name'];
  professionInput.value = userInfo.getUserInfo()['about'];
  editFormValidator.resetErrorsForm();
});


const addForm = new PopupWithForm('.popup_add-card', handleAddFormSubmit);
addForm.setEventListeners();
addButton.addEventListener('click', () => {
  addForm.open();
  newCardFormValidator.resetErrorsForm();
});





const newCard = new Section({
  items: initialCards,
  renderer: (cardItem) => {
      const card = createCard(cardItem, '.templateCard', handleCardClick);
      newCard.addItem(card);
  },
}, '.photo-gallery__items'
); 

newCard.renderItems();


