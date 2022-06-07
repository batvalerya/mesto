export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close-button');
        this._popupOverlay = this._popup.querySelector('.popup');
    }

    open() {
        this._popup.classList.add('popup_is-opened');
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
    }


    _handleEscClose() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                close();
            }
        })
    }
    

    setEventListeners() {
        this._closeButton.addEventListener('click', close);

        this._popupOverlay.addEventListener('click', (event)  => {
            if (event.target === event.currentTarget) {
                close();
            }
        })
    }
}