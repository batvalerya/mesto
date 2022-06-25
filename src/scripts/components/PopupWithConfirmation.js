import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._card = null;
        this._submit = this._popup.querySelector('button[type="submit"]');
        this._submitInitialText = this._submit.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            this._handleFormSubmit(event, this._card);
        })
    }

    getPopupConfirmationDeleteButton() {
        return this._popup.querySelector('.popup__confirm-button')
    }

    setDataCard(card) {
        this._card = card;
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submit.textContent = 'Сохранение...';
        } else (
            this._submit.textContent = this._submitInitialText
        )
    }
}