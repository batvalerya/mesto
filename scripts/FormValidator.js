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
      this._hideError(input);
    })
  }
  
  _handleFormInput(event) {
    const popupInput = event.target;
    if (popupInput.validity.valid) {
      this._hideError(popupInput);
    } else {
      this._showError(popupInput);
    }
  }

  _hideError(field) {
    this._getErrorNode(field).textContent = '';
    field.classList.remove('popup__input_type_error');
    this._toggleButton();
  }

  _showError(field) {
    field.classList.add('popup__input_type_error');
    this._getErrorNode(field).textContent = field.validationMessage;
    this._toggleButton();
  }

  _getErrorNode(field) {
    const errorNode = document.querySelector(`#${field.id}-error`);
    return errorNode
  }
  
  _toggleButton() {
    const button = this._form.querySelector(this._buttonSelector);
    button.disabled = !this._form.checkValidity();
    button.classList.toggle('popup__submit_inactive', !this._form.checkValidity());
  }
}


