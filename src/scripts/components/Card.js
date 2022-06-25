export class Card {
    constructor(data, cardSelector, handleCardClick, handleTrashButton, putLike, removeLike) {
      this._data = data;
      this._cardSelector = cardSelector;
      this._card = this._getTemplate();
      this._buttonLike = this._card.querySelector('.like-button');
      this._counterLike = this._card.querySelector('.photo-gallery__counter-number')
      this._handleCardClick = handleCardClick;
      this._handleTrashButton = handleTrashButton;
      this._putLike = putLike;
      this._removeLike = removeLike;
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
  
    handleLikeButton() {
      this._buttonLike.classList.toggle('like-button_active');
    }

    counterLike(likes) {
      this._counterLike.textContent = likes;
    }
    
    handleDeleteButton() {
      this._card.remove();
      this._card = null;
    }

    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._data.name, this._data.link);
      })
  
      this._card.querySelector('.photo-gallery__delete-button').addEventListener('click', () => {
        this._handleTrashButton(this);
      })

      this._buttonLike.addEventListener('click', () => {
        this.handleLikeButton();

        if (this._buttonLike.classList.contains('like-button_active')){
          this._putLike(this);
          this._data.likes.push(this);
          this._counterLike.textContent = this._data.likes.length;
        } else {
          this._removeLike(this);
          this._data.likes.pop(this);
          this._counterLike.textContent = this._data.likes.length;
        }
      })

    }

    removeDeleteButton() {
      this._card.querySelector('.photo-gallery__delete-button').remove();
    }

    getOwnerId() {
      return this._data['owner']['_id'];
    }

    getCardId() {
      return this._data['_id'];
    }

    getArrayLikes() {
      return this._data['likes']
    }

    getLikes() {
      return this._data['likes']['length'];
    }

    likes() {
      this._counterLike.textContent = '0';
    }

}

