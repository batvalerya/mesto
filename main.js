(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._cardSelector=n,this._card=this._getTemplate(),this._buttonLike=this._card.querySelector(".like-button"),this._counterLike=this._card.querySelector(".photo-gallery__counter-number"),this._handleCardClick=r,this._handleTrashButton=o,this._putLike=i,this._removeLike=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photo-gallery__item").cloneNode(!0)}},{key:"createCard",value:function(){return this._cardImage=this._card.querySelector(".photo-gallery__image"),this._cardImage.src=this._data.link,this._cardImage.setAttribute("alt",this._data.name),this._card.querySelector(".photo-gallery__title").textContent=this._data.name,this._setEventListeners(),this._card}},{key:"handleLikeButton",value:function(){this._buttonLike.classList.toggle("like-button_active")}},{key:"counterLike",value:function(e){this._counterLike.textContent=e}},{key:"handleDeleteButton",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data.name,e._data.link)})),this._card.querySelector(".photo-gallery__delete-button").addEventListener("click",(function(){e._handleTrashButton(e)})),this._buttonLike.addEventListener("click",(function(){e.handleLikeButton(),e._buttonLike.classList.contains("like-button_active")?(e._putLike(e),e._data.likes.push(e),e._counterLike.textContent=e._data.likes.length):(e._removeLike(e),e._data.likes.pop(e),e._counterLike.textContent=e._data.likes.length)}))}},{key:"removeDeleteButton",value:function(){this._card.querySelector(".photo-gallery__delete-button").remove()}},{key:"getOwnerId",value:function(){return this._data.owner._id}},{key:"getCardId",value:function(){return this._data._id}},{key:"getArrayLikes",value:function(){return this._data.likes}},{key:"getLikes",value:function(){return this._data.likes.length}},{key:"likes",value:function(){this._counterLike.textContent="0"}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__submit"},i=(document.querySelector(".popup_card"),document.querySelector(".photo-gallery__image"),document.querySelector(".popup__card-img"),document.querySelector(".popup__card-title"),document.querySelectorAll(".popup__close-button"),document.querySelectorAll(".popup"),document.querySelector(".photo-gallery__items"));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._buttonSelector=t.buttonSelector,this._form=n,this._inputs=this._getInputs(),this._button=this._form.querySelector(this._buttonSelector)}var t,n;return t=e,(n=[{key:"_getInputs",value:function(){return this._form.querySelectorAll(this._inputSelector)}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(t){return e._handleFormInput(t)}))}))}},{key:"_handleFormInput",value:function(e){var t=e.target;t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_hideError",value:function(e){this._getErrorNode(e).textContent="",e.classList.remove("popup__input_type_error"),this._toggleButtonState()}},{key:"_showError",value:function(e){e.classList.add("popup__input_type_error"),this._getErrorNode(e).textContent=e.validationMessage,this._toggleButtonState()}},{key:"_getErrorNode",value:function(e){return document.querySelector("#".concat(e.id,"-error"))}},{key:"_toggleButtonState",value:function(){this._button.disabled=!this._form.checkValidity(),this._button.classList.toggle("popup__submit_inactive",!this._form.checkValidity())}},{key:"resetErrorsForm",value:function(){var e=this;this._inputs.forEach((function(t){e._hideError(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"renderLoading",value:function(e){this._submit.textContent=e?"Сохранение...":this._submitInitialText}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupCardImg=t._popup.querySelector(".popup__card-img"),t._popupCardTitle=t._popup.querySelector(".popup__card-title"),t}return t=a,(n=[{key:"open",value:function(e,t){f(_(a.prototype),"open",this).call(this);var n=e;this._popupCardImg.src=t,this._popupCardTitle.textContent=e,this._popupCardImg.setAttribute("alt",n)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._popupInputs=n._form.querySelectorAll(".popup__input"),n._submit=n._popup.querySelector('button[type="submit"]'),n._submitInitialText=n._submit.textContent,n}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._popupInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;g(O(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._submit)}))}},{key:"close",value:function(){g(O(a.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.authorNameSelector,r=t.aboutAuthorSelector,o=t.avatarAuthorSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._authorName=document.querySelector(n),this._aboutAuthor=document.querySelector(r),this._authorAvatar=document.querySelector(o),this._userId=null}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._authorName.textContent,e.about=this._aboutAuthor.textContent,e}},{key:"setUserInfo",value:function(e,t){this._authorName.textContent=e,this._aboutAuthor.textContent=t}},{key:"setUserAvatar",value:function(e){this._authorAvatar.style.backgroundImage="url(".concat(e,")")}},{key:"setUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"_request",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers}).then(this._handleServerResponse)}},{key:"getUserInfo",value:function(){return this._request("/users/me")}},{key:"getInitialCards",value:function(){return this._request("/cards")}},{key:"updateUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._handleServerResponse)}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._handleServerResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleServerResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleServerResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleServerResponse)}},{key:"editProfileAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleServerResponse)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function A(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._card=null,n._submit=n._popup.querySelector('button[type="submit"]'),n._submitInitialText=n._submit.textContent,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;R(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._card)}))}},{key:"getPopupConfirmationDeleteButton",value:function(){return this._popup.querySelector(".popup__confirm-button")}},{key:"setDataCard",value:function(e){this._card=e}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s),D=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),V=document.querySelector(".popup__input_type_name"),F=document.querySelector(".popup__input_type_description"),J=document.querySelector(".popup__form_type_add"),H=document.querySelector(".popup__form_type_edit"),z=document.querySelector(".profile__avatar"),M=document.querySelector(".popup__form_type_avatar"),G=new u(o,H);G.enableValidation();var K=new u(o,J);K.enableValidation();var Q=new E(".popup_edit-profile",(function(e){e.preventDefault(),Q.renderLoading(!0);var t=Q.getInputValues().name,n=Q.getInputValues().description;te.updateUserInfo({name:t,about:n}).then((function(e){W.setUserInfo(e.name,e.about)})).finally((function(){Q.renderLoading(!1)})),Q.close()}));Q.setEventListeners();var W=new C({authorNameSelector:".author__name",aboutAuthorSelector:".author__profession",avatarAuthorSelector:".profile__avatar"}),X=new v(".popup_card");X.setEventListeners();var Y=new E(".popup_add-card",(function(e){e.preventDefault(),Y.renderLoading(!0);var n=this.getInputValues();te.addNewCard({name:n.name,link:n.link}).then((function(e){var n=new t(e,".templateCard",ne,re,oe,ie);i.prepend(n.createCard()),n.likes()})).finally((function(){Y.renderLoading(!1)})),Y.close()}));Y.setEventListeners();var Z=new B(".popup_confirm",(function(e,t,n){e.preventDefault(),Z.renderLoading(!0),t.handleDeleteButton(),Z.close(),te.removeCard(t.getCardId()).finally((function(){Z.renderLoading(!1)}))}));Z.setEventListeners();var $=new E(".popup_edit-avatar",(function(e){e.preventDefault(),$.renderLoading(!0);var t=$.getInputValues().link;te.editProfileAvatar(t).then((function(e){W.setUserInfo(e.name,e.about,e.avatar)})).finally((function(){$.renderLoading(!1)})),$.close()}));$.setEventListeners();var ee=new u(o,M);ee.enableValidation();var te=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"1dbd9da5-77e9-4a35-93ab-318f7b7209f2","Content-Type":"application/json"}});function ne(e,t){X.open(e,t)}function re(e){Z.open(),Z.setDataCard(e)}function oe(e){te.addLike(e.getCardId())}function ie(e){te.removeLike(e.getCardId())}te.getUserInfo().then((function(e){W.setUserInfo(e.name,e.about),W.setUserAvatar(e.avatar),W.setUserId(e._id)})).then((function(){te.getInitialCards().then((function(e){var n=new r({items:e,renderer:function(e){var r=new t(e,".templateCard",ne,re,oe,ie);n.addItem(r.createCard()),W.getUserId()!==r.getOwnerId()&&r.removeDeleteButton(),r.counterLike(r.getLikes()),r.getArrayLikes().forEach((function(e){e._id===W.getUserId()&&r.handleLikeButton()}))}},".photo-gallery__items");n.renderItems()})).catch((function(e){console.log(e)}))})),D.addEventListener("click",(function(){Q.open(),V.value=W.getUserInfo().name,F.value=W.getUserInfo().about,G.resetErrorsForm()})),N.addEventListener("click",(function(){Y.open(),K.resetErrorsForm()})),z.addEventListener("click",(function(){$.open(),ee.resetErrorsForm()}))})();