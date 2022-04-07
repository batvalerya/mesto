let editButton = document.querySelector('.button_action_edit');
let closeButton = document.querySelector('.button_action_close');
let popupWindow = document.querySelector('.popup');

editButton.addEventListener('click', popupToggle);
closeButton.addEventListener('click', popupToggle);
popupWindow.addEventListener('click', popupWindowClose);

function popupToggle() {
    popupWindow.classList.toggle('popup_action_opened');
}
function popupWindowClose(event) {
    if (event.target === event.currentTarget) {
        popupToggle();
    } 
}

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let professionInput = document.querySelector('.popup__input_description');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let name = document.querySelector('.author__name');
    let profession = document.querySelector('.author__profession');

    name.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    popupToggle()
}

formElement.addEventListener('submit', formSubmitHandler); 
