import { Popup } from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardImg = this._popup.querySelector('.popup__card-img');
        this._popupCardTitle = this._popup.querySelector('.popup__card-title');
    }

    open(name, link) {
        const cardImgAlt = name;
        this._popupCardImg.src = link;
        this._popupCardTitle.textContent = name;
        this._popupCardImg.setAttribute('alt', cardImgAlt);
        this._popup.classList.add('popup_is-opened');
    }
}