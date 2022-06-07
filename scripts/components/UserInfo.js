class UserInfo {
    constructor(authorNameSelector, aboutAuthorSelector) {
        this._authorNameSelector = authorNameSelector;
        this._aboutAuthorSelector =  aboutAuthorSelector;
    }

    getUserInfo() {
        this._authorNameSelector.textContent;
        this._aboutAuthorSelector.textContent
    }

    setUserInfo() {
        authorName.textContent = nameInput.value;
        profession.textContent = professionInput.value;
    }
}