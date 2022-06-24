export class UserInfo {
    constructor({authorNameSelector, aboutAuthorSelector, avatarAuthorSelector}) {
        this._authorName = document.querySelector(authorNameSelector);
        this._aboutAuthor =  document.querySelector(aboutAuthorSelector);
        this._authorAvatar = document.querySelector(avatarAuthorSelector);
        this._userId = null;
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._authorName.textContent;
        userInfo.about = this._aboutAuthor.textContent;
        return userInfo
    }

    setUserInfo(newName, newProfession, avatar) {
        this._authorName.textContent = newName;
        this._aboutAuthor.textContent = newProfession;
        this._authorAvatar.style.backgroundImage = `url(${avatar})`
    }

    setUserId(userId) {
        this._userId = userId
    }

    getUserId() {
        return this._userId
    }
}