export class Card {
    constructor(data, cardSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._card = this._getTemplate();
      this._buttonLike = this._card.querySelector('.like-button');
      this._handleCardClick = handleCardClick;
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
      this._cardImage = this._card.querySelector('.photo-gallery__image');
      this._cardImage.src = this._link;
      this._cardImage.setAttribute('alt', this._name);
      this._card.querySelector('.photo-gallery__title').textContent = this._name;
      this._setEventListeners();
      return this._card
    }
  
  
    _handleLikeButton() {
      this._buttonLike.classList.toggle('like-button_active');
    }
  
    
    _handleDeleteButton() {
      this._card.remove();
      this._card = null;
    }
  
  
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick();
      })
  
      this._card.querySelector('.photo-gallery__delete-button').addEventListener('click', () => {
        this._handleDeleteButton();
      })
      this._buttonLike.addEventListener('click', () => {
        this._handleLikeButton();
      })

    }

}

 
  

  