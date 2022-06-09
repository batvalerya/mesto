import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        const InputValues = {}
        const popupInputs = this._form.querySelectorAll('.popup__input');
        
        popupInputs.forEach((popupInput) => {
            InputValues[popupInput.name] = popupInput.value;
        })

        return InputValues
    }


    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('click', (event)  => {
            if (event.target === event.currentTarget) {
                this.close();
            }
        })

        document.addEventListener('keydown',(event) => {
            this._handleEscClose(event);
        })

        this._form.addEventListener('submit', (event) => {
            this._handleFormSubmit(event);
        })
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        this._form.reset();
    }
}