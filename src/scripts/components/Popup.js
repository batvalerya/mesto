export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }

    open() {
        this._popup.classList.add('popup_is-opened');
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
    }


    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
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
    }
}