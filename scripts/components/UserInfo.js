export class UserInfo {
    constructor({authorNameSelector, aboutAuthorSelector}) {
        this._authorName = document.querySelector('.author__name');
        this._aboutAuthor =  document.querySelector('.author__profession');
    }

    getUserInfo() {
        const userInfo = {};
        console.log(this._authorName)
        console.log(this._authorName.textContent)
        userInfo.name = this._authorName.textContent;
        userInfo.about = this._aboutAuthor.textContent;
        
        return userInfo
    }

    setUserInfo(newName, newProfession) {
        this._authorName.textContent = newName;
        this._aboutAuthor.textContent = newProfession;
    }
}