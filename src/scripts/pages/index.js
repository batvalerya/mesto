import '../../pages/index.css';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { configForm, initialCards, photoGalleryItems } from '../utils/constants.js';
import { FormValidate } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js'; 
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'




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

const userInfo = new UserInfo({authorNameSelector:'.author__name', aboutAuthorSelector:'.author__profession',avatarAuthorSelector:'.profile__avatar' });

const popupWithImage = new PopupWithImage('.popup_card');
popupWithImage.setEventListeners();

const addForm = new PopupWithForm('.popup_add-card', handleAddFormSubmit);
addForm.setEventListeners();

const popupConfirm = new PopupWithConfirmation('.popup_confirm', handleConfirmFormSubmit);
popupConfirm.setEventListeners();

const popupConfirmDeleteButton = popupConfirm.getPopupConfirmationDeleteButton();
// popupConfirmDeleteButton.addEventListener('click', (() => {
  
// }))


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result['name'], result['about'], result['avatar']);
    userInfo.setUserId(result['_id'])
  })
  .then(() => {
    api.getInitialCards()
      .then((result) => {
        const newCard = new Section({
          items: result,
          renderer: (cardItem) => {
              const card =  new Card(cardItem, '.templateCard', handleCardClick, 
              openPopupConfirmDelete, putLike, removeLike);

              newCard.addItem(card.createCard());

              if(userInfo.getUserId() !== card.getOwnerId()) {
                card.removeDeleteButton();
              }

              card.counterLike(card.getLikes());

              card.getArrayLikes().forEach((item) => {
                if (item['_id'] === userInfo.getUserId()) {
                  card.handleLikeButton();
                }
              }) 

          },
        }, '.photo-gallery__items'); 
        newCard.renderItems();
      })
      .catch((err) => {
        console.log(err);
      })
})

// const avatar = document.querySelector('.profile__avatar')
// console.log(getComputedStyle(avatar)['background'])



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
  const name = editForm.getInputValues()['name'];
  const about = editForm.getInputValues()['description'];
  api.updateUserInfo({name, about, avatar})
    .then((userData) => {
      userInfo.setUserInfo(userData['name'], userData['about'], userData['avatar'])
    }) 
  editForm.close();
}


function handleAddFormSubmit(evt) {
  evt.preventDefault(); 
  const inputValues = this.getInputValues();
  api.addNewCard({
    name: inputValues['name'],
    link: inputValues['link']
  })
    .then((newCardData) => {
      const newCard = new Card({
        name: newCardData['name'],
        link: newCardData['link'] 
      },'.templateCard',handleCardClick, openPopupConfirmDelete,  putLike);
      photoGalleryItems.prepend(newCard.createCard());
    })
  
  addForm.close();
}

function handleConfirmFormSubmit(evt, card) {
  evt.preventDefault();
  card.handleDeleteButton();
  popupConfirm.close();
  api.removeCard(card.getCardId())
}

// function createCard(dataCards, cardSelector, handleCardClick, handleDeleteButton) {
//   const cardClass = new Card(dataCards, cardSelector, handleCardClick, handleDeleteButton);
//   const card = cardClass.createCard();
//   return card;
// }

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function openPopupConfirmDelete(card) {
  popupConfirm.open();
  popupConfirm.setDataCard(card);
}

//получила id card и отправила запрос 
function putLike(card) {
  api
    .addLike(card.getCardId())
}

function removeLike(card) {
  api
  .removeLike(card.getCardId());
}












