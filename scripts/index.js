const initialCards = [
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


const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const createButton = document.querySelector('.popup__create-button');
const popupWindowEdit = document.querySelector('.popup_edit-profile');
const popupWindowAdd = document.querySelector('.popup_add-card');
const authorName = document.querySelector('.author__name');
const profession = document.querySelector('.author__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_description');
const newNameInput = document.querySelector('.popup__input_type_new-name');
const linkInput = document.querySelector('.popup__input_type_link');

const editForm = document.forms.aboutUser;
const addCardForm = document.forms.addCard;

const popupCard = document.querySelector('.popup_card');
const cardImage = document.querySelector('.photo-gallery__image');
const popupCardImg = document.querySelector('.popup__card-img');
const popupCardTitle = document.querySelector('.popup__card-title');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupOverlays = document.querySelectorAll('.popup');



// // СЛУШАТЕЛИ
editButton.addEventListener('click',  openPopupEdit);
addButton.addEventListener('click',  openPopupAdd);
editForm.addEventListener('submit', handleEditFormSubmit); 
addCardForm.addEventListener('submit', handleAddCardFormSubmit);



// // ФУНКЦИИ
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  addListenerEsc(document);
  addListenerOverlay(popupOverlays);
  closeButtons.forEach(function(item) {
    item.addEventListener('click', closePopup);
  });
  saveButton.addEventListener('click', closePopup);
  createButton.addEventListener('click', closePopup);
  editForm.addEventListener('submit', handleEditFormSubmit); 
  addCardForm.addEventListener('submit', handleAddCardFormSubmit);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_is-opened');
  openedPopup.classList.remove('popup_is-opened');
  removeListenerEsc(document);
  removeListenerOverlay(popupOverlays);
  closeButtons.forEach(function(item) {
    item.removeEventListener('click', closePopup);
  });
  saveButton.removeEventListener('click', closePopup);
  createButton.removeEventListener('click', closePopup);
}

function openPopupEdit() {
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
    openPopup(popupWindowEdit);
    getInputs(editForm, configForm).forEach(function(input){
      showHideError(input);
    });
    toggleButton(editForm, configForm);
}

function openPopupAdd() {
  addCardForm.reset();
  openPopup(popupWindowAdd);
  getInputs(addCardForm, configForm).forEach(function(input){
    showHideError(input);
  });
  toggleButton(addCardForm, configForm);
}

function addListenerOverlay(popupOverlays){
  popupOverlays.forEach(function(popupOverlay) {
    popupOverlay.addEventListener('click', closePopupOverlay);
  });
}

function removeListenerOverlay(popupOverlays){
  popupOverlays.forEach(function(popupOverlay) {
    popupOverlay.removeEventListener('click', closePopupOverlay);
  });
}

function closePopupOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  } 
}

function addListenerEsc(document) {
  document.addEventListener('keydown', closePopupEsc);
}

function removeListenerEsc(document) {
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(event) {
  if (event.key === 'Escape') {
    closePopup();
  } 
}

function handleEditFormSubmit(evt) {
    evt.preventDefault(); 
    authorName.textContent = nameInput.value;
    profession.textContent = professionInput.value;
}


function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const name = newNameInput.value
  const link = linkInput.value
  const newCardClass = new Card({name: name, link: link }, '.templateCard');

  const newCard = newCardClass.createCard();
  document.querySelector('.photo-gallery__items').prepend(newCard);
  

  addCardForm.removeEventListener('submit', handleAddCardFormSubmit);
}


class Card {
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


initialCards.forEach((initialCard) => {
  const cardClass = new Card(initialCard, '.templateCard');
  const card = cardClass.createCard();
  document.querySelector('.photo-gallery__items').append(card);
})





