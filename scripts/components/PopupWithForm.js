import { Popup } from './Popup.js'
import { UserInfo } from './UserInfo.js'

const userInfo = new UserInfo ('.author__name', '.author__profession');

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form') ;
    }

    _getInputValues() {
        const InputValues = {}
        const popupInputValues = this._popup.querySelectorAll('.popup__input');
        
        popupInputValues.forEach((popupInputValue) => {
            InputValues[popupInputValue.name] = popupInputValue.value;
        })

        return InputValues
    }


    setEventListeners() {
        this._closeButton.addEventListener('click', close);

        this._popup.addEventListener('click', (event)  => {
            if (event.target === event.currentTarget) {
                this.close();
            }
        })

        document.addEventListener('keydown',(event) => {
            this._handleEscClose(event);
        })

        this._popup.addEventListener('submit', () => {
            this._handleFormSubmit();
        })
    }

    open() {
        this._popup.classList.add('popup_is-opened');
        const popupInputValues = this._popup.querySelectorAll('.popup__input');
        popupInputValues.forEach((popupInputValue) => {
            popupInputValue.value = userInfo.getUserInfo()[popupInputValue.name];
        })
    }


    close() {
        this._popup.classList.remove('popup_is-opened');
        this._form.reset();
    }
}