export class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _handleServerResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
          return Promise.reject(`Ошибка: ${res.status}`);
      }
    }

    _request(path) {
      return fetch(`${this._baseUrl}${path}`, {
            headers: this._headers,
        })
        .then(this._handleServerResponse);
    }

    getUserInfo() {
        return this._request('/users/me');
    }


    getInitialCards() {
        return this._request('/cards');
    }

    updateUserInfo({name, about}) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name,
            about,
          })
      })
      .then(this._handleServerResponse)
    }

    addNewCard({name, link}) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link,
        })
      })
      .then(this._handleServerResponse)
    }

    addLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(this._handleServerResponse)
    }

    removeLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._handleServerResponse)
    }

    removeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._handleServerResponse)
    }

    editProfileAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar,
          })
      })
      .then(this._handleServerResponse)
    }

}
  