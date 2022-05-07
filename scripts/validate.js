const configForm ={
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__submit',
  }

function addEnableValidation() {
  enableValidation(config);
}
  
function getInputs(popupForm, config) {
    const inputs = popupForm.querySelectorAll(config.inputSelector);
    return inputs;
};
  
  
function enableValidation(config) {
    const popupForms = document.querySelectorAll(config.formSelector);
    popupForms.forEach(function(popupForm) {
      getInputs(popupForm, config).forEach((element) => {
        element.addEventListener('input', (event) => handleFormInput(event, popupForm, config));
      })
    })
};
  
enableValidation(configForm);
  
// обработать событие валидации поля
function handleFormInput(event, popupForm, config) {
    //получили поле формы, с которым будем работать 
    const popupInput = event.target;
    showHideError(popupInput);
    toggleButton(popupForm, config);
};
  
function showHideError(field) {
    const errorNode = document.querySelector(`#${field.id}-error`);
    if (field.validity.valid) {
      errorNode.textContent = '';
      field.classList.remove('popup__input_type_error');
    } else {
      field.classList.add('popup__input_type_error');
      errorNode.textContent = field.validationMessage;
    }
};
  
function toggleButton(popupForm, config) {
    const button = popupForm.querySelector(config.buttonSelector);
    button.disabled = !popupForm.checkValidity();
    button.classList.toggle('popup__submit_inactive', !popupForm.checkValidity());
};
  