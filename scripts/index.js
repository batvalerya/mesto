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
const cardTemplate = document.querySelector('#photo-gallery__item').content;
const cardsContainer = document.querySelector('.photo-gallery__items');
initialCards.forEach(function(item) {
  const card = cardTemplate.querySelector('.photo-gallery__item').cloneNode(true);
  const title = item["name"]
  const image = item["link"]
  card.querySelector('.photo-gallery__image').src = image;
  card.querySelector('.photo-gallery__title').textContent = title;
  cardsContainer.append(card);
})
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupWindowEdit = document.querySelector('.popup_edit-profile');
const popupWindowAdd = document.querySelector('.popup_add-card');
let authorName = document.querySelector('.author__name');
let profession = document.querySelector('.author__profession');
let nameInput = document.querySelector('.popup__input_type_name');
let professionInput = document.querySelector('.popup__input_type_description');
const cards = document.querySelectorAll('.photo-gallery__item');
let formElement = document.querySelector('.popup__form');

// СЛУШАТЕЛИ
editButton.addEventListener('click',  togglePopupEdit);
addButton.addEventListener('click',  togglePopupAdd);
closeButtons.forEach(function(item) {
    item.addEventListener('click', togglePopupClose);
});
cards.forEach(function (card) {
  addListenersCard(card)
});
formElement.addEventListener('submit', formSubmitHandler); 
document.forms.addCard.addEventListener('submit', addCadrFormSubmitHandler);

// ФУНКЦИИ
function togglePopup(popupWindow) {
    popupWindow.classList.toggle('popup_is-opened');
}

function togglePopupEdit() {
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
    togglePopup(popupWindowEdit)
}

function togglePopupAdd() {
    togglePopup(popupWindowAdd)
}

function togglePopupClose(evt) {
    const eventTarget = evt.target;
    togglePopup(eventTarget.parentElement.parentElement)
}

// function popupWindowClose(event) {
//     if (event.target === event.currentTarget) {
//         togglePopup();
//     } 
// }

function formSubmitHandler (evt) {

    evt.preventDefault(); 
    authorName.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    togglePopup(popupWindowEdit)
}

function addCadrFormSubmitHandler (evt) {
  const card = cardTemplate.querySelector('.photo-gallery__item').cloneNode(true);
  let newNameInput = document.querySelector('.popup__input_type_new-name');
  let linkInput = document.querySelector('.popup__input_type_link');
  evt.preventDefault(); 
  card.querySelector('.photo-gallery__image').src = linkInput.value;
  card.querySelector('.photo-gallery__title').textContent = newNameInput.value;
  cardsContainer.prepend(card);
  togglePopup(popupWindowAdd);
  addListenersCard(card);
}
 
function addListenerImage(card){
  const cardImage = card.querySelector('.photo-gallery__image');
  cardImage.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    const popupCard = document.querySelector('.popup_card');
    let popupCardImg = document.querySelector('.popup__card-img');
    let popupCardTitle = document.querySelector('.popup__card-title');
    popupCardImg.src = eventTarget.src;
    popupCardTitle.textContent = eventTarget.parentElement.querySelector('.photo-gallery__title').textContent;
    popupCard.classList.toggle('popup_is-opened');
  });
}

function addListenerDeleteButton(card){
  const deleteButton = card.querySelector('.photo-gallery__delete-button');
  deleteButton.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    const card = eventTarget.closest('.photo-gallery__item');
    card.remove();
  });
}

function addListenerLikeButton(card){
  const likeButton = card.querySelector('.like-button');
  likeButton.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('like-button_active');
  });
}

function addListenersCard(card) {
  addListenerImage(card);
  addListenerLikeButton(card);
  addListenerDeleteButton(card);
}

