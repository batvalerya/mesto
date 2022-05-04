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
  const card = createCard(item["name"], item["link"]);
  cardsContainer.append(card);
})

const popupOverlays = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const createButton = document.querySelector('.popup__create-button')
const popupWindowEdit = document.querySelector('.popup_edit-profile');
const popupWindowAdd = document.querySelector('.popup_add-card');
const authorName = document.querySelector('.author__name');
const profession = document.querySelector('.author__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_description');
const newNameInput = document.querySelector('.popup__input_type_new-name');
const linkInput = document.querySelector('.popup__input_type_link');
const cards = document.querySelectorAll('.photo-gallery__item');
const editForm = document.forms.aboutUser;
const addCardForm = document.forms.addCard;
const popupCard = document.querySelector('.popup_card');
const popupCardImg = document.querySelector('.popup__card-img');
const popupCardTitle = document.querySelector('.popup__card-title');


// СЛУШАТЕЛИ
editButton.addEventListener('click',  openPopupEdit);
addButton.addEventListener('click',  openPopupAdd);
saveButton.addEventListener('click', closePopup);
createButton.addEventListener('click', closePopup);
closeButtons.forEach(function(item) {
    item.addEventListener('click', closePopup);
});
editForm.addEventListener('submit', handleEditFormSubmit); 
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
popupOverlays.forEach(function(popupOver) {
  popupOver.addEventListener('click', closePopupOverlay);
});




// ФУНКЦИИ
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_is-opened');
  openedPopup.classList.remove('popup_is-opened');
}

function openPopupEdit() {
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
    openPopup(popupWindowEdit)
}

function openPopupAdd() {
  addCardForm.reset();
  openPopup(popupWindowAdd)
}

function closePopupOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  } 
}

function closePopupEsc(event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    closePopup();
  } 
}



function handleEditFormSubmit (evt) {
    evt.preventDefault(); 
    authorName.textContent = nameInput.value;
    profession.textContent = professionInput.value;
}

function createCard(title, image) {
  const cardElement = cardTemplate.querySelector('.photo-gallery__item').cloneNode(true);
  cardElement.querySelector('.photo-gallery__image').src = image;
  cardElement.querySelector('.photo-gallery__image').setAttribute('alt', title);
  cardElement.querySelector('.photo-gallery__title').textContent = title;
  addListenersCard(cardElement);
  return cardElement
}

function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); 
  newCard = createCard(newNameInput.value, linkInput.value);
  cardsContainer.prepend(newCard);
}

 
function addListenerImage(card){
  const cardImage = card.querySelector('.photo-gallery__image');
  cardImage.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
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


// функция Включить проверку 
function enableValidation(formSelector) {
  const popupForm = document.querySelector(formSelector);
  // popupForm.addEventListener('submit', (event) => handleFormSubmit(event, popupForm));
  popupForm.addEventListener('input', (event) => handleFormInput(event, formSelector));
};

// обработать событие валидации формы
// function handleFormSubmit(event, popupForm) {
//   event.preventDefault();
//   // проверяем на валидность элемент. на котором сработало событие - позволяет нам сказать в целом валидна ли наша форма
//   if (popupForm.checkValidity()) {
//     console.log('Форма валидна');
//   } else {
//     console.log('Форма не валидна');
//   } 
// };

// обработать событие валидации поля
function handleFormInput(event, formSelector) {
  console.log(event);
  //получили поле формы, с которым будем работать 
  const popupInput = event.target;
  //получили элемент ошибки к этому полю'
  const errorNode = document.querySelector(`#${popupInput.id}-error`);
  
  if (popupInput.validity.valid) {
    errorNode.textContent = '';
    popupInput.classList.remove('popup__input_type_error');
  } else {
    popupInput.classList.add('popup__input_type_error');
    errorNode.textContent = popupInput.validationMessage;
  }
  toggleButton(formSelector);
};

enableValidation('.popup__form');


function toggleButton(formSelector) {
  const popupForm = document.querySelector(formSelector);
  const button = popupForm.querySelector('.popup__submit');
  button.disabled = !popupForm.checkValidity();
  button.classList.toggle('popup__submit_inactive', !popupForm.checkValidity());
};














