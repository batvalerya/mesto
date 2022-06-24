import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._card = null;
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
}