import '../../pages/index.css';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { configForm, initialCards, photoGalleryItems } from '../utils/constants.js';
import { FormValidate } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js'; 
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';




const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_description');
const popupFormAdd = document.querySelector('.popup__form_type_add');
const popupFormEdit = document.querySelector('.popup__form_type_edit');


const editFormValidator = new FormValidate(configForm,popupFormEdit);
editFormValidator.enableValidation();

const newCardFormValidator = new FormValidate(configForm,popupFormAdd);
newCardFormValidator.enableValidation();

const editForm = new PopupWithForm('.popup_edit-profile', handleEditFormSubmit);
editForm.setEventListeners();

const userInfo = new UserInfo({authorNameSelector:'.author__name', aboutAuthorSelector:'.author__profession'});

const popupWithImage = new PopupWithImage('.popup_card');
popupWithImage.setEventListeners();

// const newCard = new Section({
//   items: initialCards,
//   renderer: (cardItem) => {
//       const card = createCard(cardItem, '.templateCard', handleCardClick);
//       newCard.addItem(card);
//   },
// }, '.photo-gallery__items'
// ); 
// newCard.renderItems();

const addForm = new PopupWithForm('.popup_add-card', handleAddFormSubmit);
addForm.setEventListeners();

const api = new Api();
api.getInitialCards()
  .then((result) => {
    const newCard = new Section({
      items: result,
      renderer: (cardItem) => {
          const card = createCard(cardItem, '.templateCard', handleCardClick);
          newCard.addItem(card);
      },
    }, '.photo-gallery__items'
    ); 
    newCard.renderItems();
})
  .catch((err) => {
    console.log(err);
})

// api.getUserInfo() {

// }


//Cлушатели

editButton.addEventListener('click', () => {
  editForm.open();
  nameInput.value = userInfo.getUserInfo()['name'];
  professionInput.value = userInfo.getUserInfo()['about'];
  editFormValidator.resetErrorsForm();
});

addButton.addEventListener('click', () => {
  addForm.open();
  newCardFormValidator.resetErrorsForm();
});


//функции
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(editForm.getInputValues()['name'], editForm.getInputValues()['description'])
  editForm.close();
}


function handleAddFormSubmit(evt) {
  evt.preventDefault(); 
  const inputValues = this.getInputValues();
  const newCard = createCard({
    name: inputValues['name'],
    link: inputValues['link'] 
  },'.templateCard',handleCardClick);
  photoGalleryItems.prepend(newCard);
  addForm.close();

}

function createCard(dataCards, cardSelector, handleCardClick) {
  const cardClass = new Card(dataCards, cardSelector, handleCardClick );
  const card = cardClass.createCard();
  return card;
}

function handleCardClick() {
  popupWithImage.open(this._name, this._link);
}

//проверка git vs code











