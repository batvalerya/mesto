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
const editAvatarButton = document.querySelector('.profile__avatar');
const editAvatarForm = document.querySelector('.popup__form_type_avatar');

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

const popupEditAvatar = new PopupWithForm('.popup_edit-avatar', handleEditAvatarFormSubmit);
popupEditAvatar.setEventListeners();

const editAvatarFormValidator = new FormValidate(configForm,editAvatarForm);
editAvatarFormValidator.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result['name'], result['about']);
    userInfo.setUserAvatar(result['avatar']);
    userInfo.setUserId(result['_id']);
  })
  .then(() => {
    api.getInitialCards()
      .then((result) => {
        const newCard = new Section({
          items: result,
          renderer: (cardItem) => {
              const card = createCard(cardItem, '.templateCard', handleCardClick, 
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

//C????????????????
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

editAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open();
  editAvatarFormValidator.resetErrorsForm();
})

//??????????????

function handleEditFormSubmit(evt, inputValues) {
  evt.preventDefault();
  editForm.renderLoading(true);
  const name = inputValues['name'];
  const about = inputValues['description'];
  api.updateUserInfo({name, about})
    .then((userData) => {
      userInfo.setUserInfo(userData['name'], userData['about'])
    }) 
    .then (() => {
      editForm.close();
    })
    .finally(() => {
      editForm.renderLoading(false)
    })
}

function handleAddFormSubmit(evt, inputValues) {
  evt.preventDefault(); 
  addForm.renderLoading(true);
  api.addNewCard({
    name: inputValues['name'],
    link: inputValues['link']
  })
    .then((newCardData) => {
      const newCard = createCard(newCardData,'.templateCard',handleCardClick, openPopupConfirmDelete,  putLike, removeLike);
      photoGalleryItems.prepend(newCard.createCard());
      newCard.likes();
    })
    .then(() => {
      addForm.close()
    })
    .finally(() => {
      addForm.renderLoading(false)
    })
}

function handleEditAvatarFormSubmit(evt, inputValues) {
  evt.preventDefault(); 
  popupEditAvatar.renderLoading(true);
  const avatar = inputValues['link'];
  api.editProfileAvatar(avatar)
    .then((userData) => {
      userInfo.setUserAvatar(userData['avatar'])
    })
    .then (() => {
      popupEditAvatar.close();
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false)
    })
}

function handleConfirmFormSubmit(evt, card, addButton) {
  evt.preventDefault();
  popupConfirm.renderLoading(true);
  card.handleDeleteButton();
  api.removeCard(card.getCardId())
    .then(() => {
      popupConfirm.close();
    })
    .finally(() => {
      popupConfirm.renderLoading(false)
    })
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function openPopupConfirmDelete(card) {
  popupConfirm.open();
  popupConfirm.setDataCard(card);
}

function putLike(card) {
  api
    .addLike(card.getCardId())
    .catch(() => {
      console.log('????????????')
    })
}

function removeLike(card) {
  api
  .removeLike(card.getCardId())
  .catch(() => {
    console.log('????????????')
  })
}

function createCard(data, cardSelector, handleCardClick, handleTrashButton, putLike, removeLike) {
  const card = new Card(data, cardSelector, handleCardClick, handleTrashButton, putLike, removeLike);
  return card
}










