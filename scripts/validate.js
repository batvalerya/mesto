const configFormEdit ={
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__submit',
    elementOpenPopupSelector: '.profile__edit-button'
}

const configFormAdd ={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  elementOpenPopupSelector: '.profile__add-button'
}

class FormValidate {
  constructor(config, form) {
    this._elementOpenPopupSelector = config.elementOpenPopupSelector;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._form = form;
  }

  _getInputs() {
    const inputs = this._form.querySelectorAll(this._inputSelector);
    return inputs;
  }

  enableValidation() {
    this._getInputs().forEach((input) => {
      input.addEventListener('input', (event) => this._handleFormInput(event));
    })
    this._setEventListeners();
  }
  
  _handleFormInput(event) {
    const popupInput = event.target;
    this._showHideError(popupInput);
    this._toggleButton();
  }

  _showHideError(field) {
    const errorNode = document.querySelector(`#${field.id}-error`);
    if (field.validity.valid) {
      errorNode.textContent = '';
      field.classList.remove('popup__input_type_error');
    } else {
      field.classList.add('popup__input_type_error');
      errorNode.textContent = field.validationMessage;
    }
  }

  _toggleButton() {
    const button = this._form.querySelector(this._buttonSelector);
    button.disabled = !this._form.checkValidity();
    button.classList.toggle('popup__submit_inactive', !this._form.checkValidity());
  }

  _setEventListeners() {
    const handleElement = document.querySelector(this._elementOpenPopupSelector);
    handleElement.addEventListener('click', () => {
      this._toggleButton();
      this._getInputs().forEach((input) => {
        this._showHideError(input);
      });
    })
  }

}

const popupFormEdit = document.querySelector('.popup__form_type_edit');
const classEditFormValidate = new FormValidate(configFormEdit, popupFormEdit);
classEditFormValidate.enableValidation();

const popupFormAdd = document.querySelector('.popup__form_type_add');
const classAddFormValidate = new FormValidate(configFormAdd, popupFormAdd);
classAddFormValidate.enableValidation();

// const popupForms = document.querySelectorAll('.popup__form');
// popupForms.forEach((popupForm) => {
//   const classFormValidate = new FormValidate(configFormEdit, popupForm);
//   classFormValidate.enableValidation();
// })
