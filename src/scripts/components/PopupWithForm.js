import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._popupInputs = this._form.querySelectorAll('.popup__input');
        this._submit = this._popup.querySelector('button[type="submit"]');
        this._submitInitialText = this._submit.textContent;
    }

    _getInputValues() {
        const inputValues = {}
        this._popupInputs.forEach((popupInput) => {
            inputValues[popupInput.name] = popupInput.value;
        })
        return inputValues
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (event) => {
            this._handleFormSubmit(event, this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submit.textContent = 'Сохранение...';
        } else (
            this._submit.textContent = this._submitInitialText
        )
    }
}