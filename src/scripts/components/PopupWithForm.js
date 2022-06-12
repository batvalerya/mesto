import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._popupInputs = this._form.querySelectorAll('.popup__input');
    }

    getInputValues() {
        const inputValues = {}
        
        this._popupInputs.forEach((popupInput) => {
            inputValues[popupInput.name] = popupInput.value;
        })

        return inputValues
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (event) => {
            this._handleFormSubmit(event);
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}