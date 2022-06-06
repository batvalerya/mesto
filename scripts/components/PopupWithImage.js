class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardImg = document.querySelector('.popup__card-img');
        this._popupCardTitle = document.querySelector('.popup__card-title');
    }

    open() {
        const cardImgAlt = ;
        this._popupCardImg.src = ;
        this._popupCardTitlee.textContent = ;
        this._popupCardImg.setAttribute('alt', cardImgAlt);
        this._popupSelector.classList.add('popup_is-opened');
    }
}