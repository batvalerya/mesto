export class UserInfo {
    constructor({authorNameSelector, aboutAuthorSelector}) {
        this._authorName = document.querySelector(authorNameSelector);
        this._aboutAuthor =  document.querySelector(aboutAuthorSelector);
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._authorName.textContent;
        userInfo.about = this._aboutAuthor.textContent;
        
        return userInfo
    }

    setUserInfo(newName, newProfession) {
        this._authorName.textContent = newName;
        this._aboutAuthor.textContent = newProfession;
    }
}