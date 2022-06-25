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

    setUserInfo(newName, newProfession) {
        if(newName, newProfession) {
            this._authorName.textContent = newName;
            this._aboutAuthor.textContent = newProfession;
        } 
    }

    setUserAvatar(avatar) {
        if(avatar) {
            this._authorAvatar.style.backgroundImage = `url(${avatar})`
        }
    }

    setUserId(userId) {
        if(userId) {
            this._userId = userId
        }
    }

    getUserId() {
        return this._userId
    }
}