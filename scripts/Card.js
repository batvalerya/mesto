import { popupCloseButtons, popupOverlays } from './utils.js'; 
import { handleOpenPopup } from './index.js'; 

export class Card {
    constructor(data, cardSelector ){
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._card = this._getTemplate();
      this._buttonLike = this._card.querySelector('.like-button');
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
      // this._card = this._getTemplate();
      this._setEventListeners();
      this._card.querySelector('.photo-gallery__image').src = this._link;
      this._card.querySelector('.photo-gallery__image').setAttribute('alt', this._name);
      this._card.querySelector('.photo-gallery__title').textContent = this._name;
      return this._card
    }


    _handleOpenPopup() {
      handleOpenPopup(this._name, this._link)
    }
  
    // _handleClosePopup() {
    //   // const cardImgAlt = '';
    //   // popupCardImg.src = '';
    //   // popupCardTitle.textContent = '';
    //   // popupCardImg.setAttribute('alt', cardImgAlt);
    //   popupCard.classList.remove('popup_is-opened');
    // }
  
    _handleLikeButton() {
      this._buttonLike.classList.toggle('like-button_active');
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
  
      // popupCloseButtons.forEach((popupCloseButton) => {
      //   popupCloseButton.addEventListener('click', () => {
      //     this._handleClosePopup();
      //   })
      // })
  
      // document.addEventListener('keydown', () => {
      //   this._handleClosePopup();
      // })
  
      this._buttonLike.addEventListener('click', () => {
        this._handleLikeButton();
      })
  
  
      // popupOverlays.forEach((popupOverlay) => {
      //   popupOverlay.addEventListener('click', (event) => {
      //     if (event.target === event.currentTarget) {
      //       this._handleClosePopup();
      //     }
      //   })
      // })
    }
  
}

 
  

  