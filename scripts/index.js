const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupWindow = document.querySelector('.popup');
let authorName = document.querySelector('.author__name');
let profession = document.querySelector('.author__profession');

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
// popupWindow.addEventListener('click', popupWindowClose);

function togglePopup() {
    if (!popupWindow.classList.contains('popup_is-opened')) {
        nameInput.value = authorName.textContent;
        professionInput.value = profession.textContent;
        }
    popupWindow.classList.toggle('popup_is-opened');
}


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
    togglePopup()
}

formElement.addEventListener('submit', formSubmitHandler); 
