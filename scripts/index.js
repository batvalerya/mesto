const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupWindow = document.querySelector('.popup');
const popupWindowAdd = document.querySelector('.popup__add-card');
let authorName = document.querySelector('.author__name');
let profession = document.querySelector('.author__profession');



function togglePopup(popupWindow) {
    popupWindow.classList.toggle('popup_is-opened');
}

function togglePopupEdit() {
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
    togglePopup(popupWindow)
}

function togglePopupAdd() {
    togglePopup(popupWindowAdd)
}

function togglePopupClose(evt) {
    const eventTarget = evt.target;
    togglePopup(eventTarget.parentElement.parentElement)
}

editButton.addEventListener('click',  togglePopupEdit);
addButton.addEventListener('click',  togglePopupAdd);
closeButtons.forEach(function(item) {
    item.addEventListener('click', togglePopupClose);
})


// function togglePopup() {
    // if (!popupWindow.classList.contains('popup_is-opened')) {
        // nameInput.value = authorName.textContent;
        // professionInput.value = profession.textContent;
        // }
//     popupWindow.classList.toggle('popup_is-opened');
// }


// function popupWindowClose(event) {
//     if (event.target === event.currentTarget) {
//         togglePopup();
//     } 
// }

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let professionInput = document.querySelector('.popup__input_type_description');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    authorName.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    togglePopup(popupWindow)
}

formElement.addEventListener('submit', formSubmitHandler); 



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

  const photoGalleryItemTemplate = document.querySelector('#photo-gallery__item').content;
  const photoGalleryItems = document.querySelector('.photo-gallery__items');

  initialCards.forEach(function(item) {
    const photoGalleryItem = photoGalleryItemTemplate.querySelector('.photo-gallery__item').cloneNode(true);
    const photoGalleryTitle = item["name"]
    const photoGalleryImage = item["link"]
    photoGalleryItem.querySelector('.photo-gallery__image').src = photoGalleryImage;
    photoGalleryItem.querySelector('.photo-gallery__title').textContent = photoGalleryTitle;
    photoGalleryItems.append(photoGalleryItem);
  })

  const likeButton = document.querySelectorAll('.like-button');


  likeButton.forEach(function (item) {
      item.addEventListener('click', function (evt) {
          const eventTarget = evt.target;
          eventTarget.classList.toggle('like-button_active');
      });
  });


  let newNameInput = document.querySelector('.popup__input_type_new-name');
  let linkInput = document.querySelector('.popup__input_type_link');
  let formAdd = document.forms.addCard
  
  function renderingNewCard () {
    const photoGalleryItem = photoGalleryItemTemplate.querySelector('.photo-gallery__item').cloneNode(true);
    photoGalleryItem.querySelector('.photo-gallery__image').src = initialCards[0].link;
    photoGalleryItem.querySelector('.photo-gallery__title').textContent = initialCards[0].name;
    photoGalleryItems.prepend(photoGalleryItem);
  }
  
  
  function addCadrFormSubmitHandler (evt) {
    evt.preventDefault(); 
    let newCard = new Object();
    newCard.name = newNameInput.value;
    newCard.link = linkInput.value;
    initialCards.unshift(newCard)
    togglePopup(popupWindowAdd)
    renderingNewCard()
}
formAdd.addEventListener('submit', addCadrFormSubmitHandler); 
 

const deleteButton = document.querySelectorAll('.photo-gallery__delete-button');

deleteButton.forEach(function (item) {
    item.addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        const photoGalleryItem = eventTarget.closest('.photo-gallery__item');
        photoGalleryItem.remove();
    });
});



const photoGalleryImages = document.querySelectorAll('.photo-gallery__image');
const popupCard = document.querySelector('.popup__card');
let popupCardImg = document.querySelector('.popup__card-img');
let popupCardTitle = document.querySelector('.popup__card-title');
let photoGalleryTitle = document.querySelector('.photo-gallery__title')
let photoGalleryImage = document.querySelector('.photo-gallery__image')

photoGalleryImages.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    popupCardImg.src = eventTarget.src;
    popupCardTitle.textContent = eventTarget.parentElement.querySelector('.photo-gallery__title').textContent;
    popupCard.classList.toggle('popup_is-opened');
  });
});

