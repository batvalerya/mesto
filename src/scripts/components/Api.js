export class Api {
    constructor(options) {
      // тело конструктора
    }

    getUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
            headers: {
                authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }



    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
          headers: {
            authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2'
          }
        })
          

        handleServerResponse() {
            then(res => {
                if (res.ok) {
                  return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
        }
    }


  
 


  


    // другие методы работы с API
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
      authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2',
      'Content-Type': 'application/json'
    }
}); 




// fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
//   headers: {
//     authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     userInfo.setUserInfo(result['name'], result['about'])
// });

//   .then(res => res.json())
//   .then((result) => {
//     const newCard = new Section({
//       items: result,
//       renderer: (cardItem) => {
//           const card = createCard(cardItem, '.templateCard', handleCardClick);
//           newCard.addItem(card);
//       },
//     }, '.photo-gallery__items'); 
//     newCard.renderItems();
// })


// fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
//     method: 'PATCH',
//     headers: {
//         authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2',
//         'Content-Type': 'application/json'
//       },
//     body: JSON.stringify({
//         name: name,
//         about: about
//       })
// })