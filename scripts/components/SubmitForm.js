class SubmitForm {
    constructor({formSelector}) {
        this._formSelector = formSelector;
    }

    _getTemplate(){
            const formElement = document
            .querySelector(this._formSelector)
            .content
            .querySelector('.popup__form')
            .cloneNode(true);
        return formElement
    }

    _setEventListeners() {
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._element.reset();
          })
    }
}