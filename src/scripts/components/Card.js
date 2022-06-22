export class Card {
    constructor(data, cardSelector, handleCardClick, handleDeleteButton) {
      this._data = data;
      this._cardSelector = cardSelector;
      this._card = this._getTemplate();
      this._buttonLike = this._card.querySelector('.like-button');
      this._handleCardClick = handleCardClick;
      this._handleDeleteButton = handleDeleteButton;
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
      this._cardImage.src = this._data.link;
      this._cardImage.setAttribute('alt', this._data.name);
      this._card.querySelector('.photo-gallery__title').textContent = this._data.name;
      this._setEventListeners();
      return this._card
    }
  
  
    _handleLikeButton() {
      this._buttonLike.classList.toggle('like-button_active');
    }
  
    
    // _handleDeleteButton() {
    //   this._card.remove();
    //   this._card = null;
    // }
  
  
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._data.name, this._data.link);
      })
  
      this._card.querySelector('.photo-gallery__delete-button').addEventListener('click', () => {
        this._handleDeleteButton();
      })
      this._buttonLike.addEventListener('click', () => {
        this._handleLikeButton();
      })

    }

    removeDeleteButton() {
      this._card.querySelector('.photo-gallery__delete-button').remove();
    }

    getOwnerId() {
      return this._data['owner']['_id']
    }

}

