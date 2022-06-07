class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
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

        this._popupOverlay.addEventListener('click', (event)  => {
            if (event.target === event.currentTarget) {
                close();
            }
        })

        this._popup.addEventListener('submit', () => {
            this._handleFormSubmit();
        })
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        this._popup.reset();
    }
}