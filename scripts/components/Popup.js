const closeButtons = document.querySelectorAll('.popup__close-button');
const popupOverlays = document.querySelectorAll('.popup');

export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_is-opened');
    }

    close() {
        this._popupSelector.classList.remove('popup_is-opened');
    }


    _handleEscClose() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                close();
            }
        })
    }
    

    setEventListeners() {
        closeButtons.forEach(function(closeButton) {
            closeButton.addEventListener('click', close);
        });

        popupOverlays.forEach(function(popupOverlay) {
            popupOverlay.addEventListener('click', (event)  => {
                if (event.target === event.currentTarget) {
                    close();
                  }
            })
        });
    }
}