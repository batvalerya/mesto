import { popupCard, popupCardImg, popupCardTitle, popupCloseButtons, popupOverlays} from './index.js'; 

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

export class Card {
    constructor(data, cardSelector ){
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-gallery__item')
      .cloneNode(true);
      return cardElement
    }
  
    createCard(){
      this._card = this._getTemplate();
      this._setEventListeners();
      this._card.querySelector('.photo-gallery__image').src = this._link;
      this._card.querySelector('.photo-gallery__image').setAttribute('alt', this._name);
      this._card.querySelector('.photo-gallery__title').textContent = this._name;
      return this._card
    }

    _handleOpenPopup() {
      const cardImgAlt = this._name;
      popupCardImg.src = this._link;
      popupCardTitle.textContent = this._name;
      popupCardImg.setAttribute('alt', cardImgAlt);
      popupCard.classList.add('popup_is-opened');
    }
  
    _handleClosePopup() {
      // const cardImgAlt = '';
      // popupCardImg.src = '';
      // popupCardTitle.textContent = '';
      // popupCardImg.setAttribute('alt', cardImgAlt);
      popupCard.classList.remove('popup_is-opened');
    }
  
    _handleLikeButton() {
      const likeButton = this._card.querySelector('.like-button');
      likeButton.classList.toggle('like-button_active');
    }
  
    _handleDeleteButton() {
      this._card.remove();
    }
  
    _setEventListeners() {
      this._card.querySelector('.photo-gallery__image').addEventListener('click', () => {
        this._handleOpenPopup();
      })
  
      this._card.querySelector('.photo-gallery__delete-button').addEventListener('click', () => {
        this._handleDeleteButton();
      })
  
      popupCloseButtons.forEach((popupCloseButton) => {
        popupCloseButton.addEventListener('click', () => {
          this._handleClosePopup();
        })
      })
  
      document.addEventListener('keydown', () => {
        this._handleClosePopup();
      })
  
      this._card.querySelector('.like-button').addEventListener('click', () => {
        this._handleLikeButton();
      })
  
  
      popupOverlays.forEach((popupOverlay) => {
        popupOverlay.addEventListener('click', (event) => {
          if (event.target === event.currentTarget) {
            this._handleClosePopup();
          }
        })
      })
    }
  
}

 
  

  