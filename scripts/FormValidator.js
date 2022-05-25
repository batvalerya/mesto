export class FormValidate {
  constructor(config, form) {
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
  }
  
  _handleFormInput(event) {
    const popupInput = event.target;
    this._showHideError(popupInput);
    this.toggleButton();
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

  toggleButton() {
    const button = this._form.querySelector(this._buttonSelector);
    button.disabled = !this._form.checkValidity();
    button.classList.toggle('popup__submit_inactive', !this._form.checkValidity());
  }
}


