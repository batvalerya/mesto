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
      this._setEventListeners();
      this._card.querySelector('.photo-gallery__image').src = this._link;
      this._card.querySelector('.photo-gallery__image').setAttribute('alt', this._name);
      this._card.querySelector('.photo-gallery__title').textContent = this._name;
      return this._card
    }


    _handleOpenPopup() {
      handleOpenPopup(this._name, this._link)
    }
  
  
    _handleLikeButton() {
      this._buttonLike.classList.toggle('like-button_active');
    }
  
    
    _handleDeleteButton() {
      this._card.remove();
      this._card = null;
    }
  
  
    _setEventListeners() {
      this._card.querySelector('.photo-gallery__image').addEventListener('click', () => {
        this._handleOpenPopup();
      })
  
      this._card.querySelector('.photo-gallery__delete-button').addEventListener('click', () => {
        this._handleDeleteButton();
      })
  
  
      this._buttonLike.addEventListener('click', () => {
        this._handleLikeButton();
      })
  
    }
  
}

 
  

  