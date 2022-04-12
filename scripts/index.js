const editButton = document.querySelector('.edit-button');
const closeButton = document.querySelector('.close-button');
const popupWindow = document.querySelector('.popup');
let authorName = document.querySelector('.author__name');
let profession = document.querySelector('.author__profession');

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
// popupWindow.addEventListener('click', popupWindowClose);

function togglePopup() {
    popupWindow.classList.toggle('popup_action_opened');
    nameInput.value = authorName.textContent;
    professionInput.value = profession.textContent;
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
