export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const configFormEdit ={
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__submit',
    elementOpenPopupSelector: '.profile__edit-button'
}

export const configFormAdd ={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  elementOpenPopupSelector: '.profile__add-button'
}

export const popupCard = document.querySelector('.popup_card');
export const cardImage = document.querySelector('.photo-gallery__image');
export const popupCardImg = document.querySelector('.popup__card-img');
export const popupCardTitle = document.querySelector('.popup__card-title');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');
export const popupOverlays = document.querySelectorAll('.popup');