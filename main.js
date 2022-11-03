(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i){var a=t.name,u=t.link,c=t.likes,l=t._id,s=t.owner,f=t.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=a,this._link=u,this._likes=c,this._userId=f,this._cardId=l,this._ownerId=s._id,this._templateSelector=n,this._handleCardClick=r,this._handleRemoveCard=o,this._handleLikeClick=i,this._isLiked=Boolean(this._likes.find((function(t){return t._id===f})))}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleClickCardImage",value:function(){this._handleCardClick({name:this._name,link:this._link})}},{key:"_handleClickLikeButton",value:function(){this._handleLikeClick(this._isLiked)}},{key:"_deleteButtonClick",value:function(){var t={card:this._cardElement,cardId:this._cardId};this._handleRemoveCard(t)}},{key:"_setEventListeners",value:function(){var t=this;this._cardLikeButton=this._cardElement.querySelector(".element__like-button"),this._likeCountElement=this._cardElement.querySelector(".element__like-count"),this._cardDeleteButton=this._cardElement.querySelector(".element__remove-button"),this._cardImage=this._cardElement.querySelector(".element__image"),this._cardLikeButton.addEventListener("click",(function(){return t._handleClickLikeButton()})),this._userId===this._ownerId&&this._cardDeleteButton.addEventListener("click",(function(){t._deleteButtonClick()})),this._isLiked&&this.addLike(this._likes.length),this._cardImage.addEventListener("click",(function(){return t._handleClickCardImage()}))}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._setEventListeners(),this._cardTitle=this._cardElement.querySelector(".element__title"),this._cardDeleteButton.style.display=this._userId===this._ownerId?"block":"none",this._cardImage.src=this._link,this._cardImage.alt="Фотография: ".concat(this._name),this._cardTitle.textContent=this._name,this._likeCountElement.textContent=this._likes.length,this._cardElement}},{key:"addLike",value:function(t){this._cardLikeButton.classList.toggle("element__like-button_active"),this._likeCountElement.textContent=t,this._isLiked=!0}},{key:"removeLike",value:function(t){this._cardLikeButton.classList.toggle("element__like-button_active"),this._likeCountElement.textContent=t,this._isLiked=!1}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._activeSubmitButtonClass=e.activeSubmitButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.remove(this._activeSubmitButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.add(this._activeSubmitButtonClass))}},{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_setInputValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setInputValidation(this._formElement)}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){return t._hideInputError(e)})),this._toggleButtonState()}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"!==t.key&&"Esc"!==t.key||this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.body.style.overflow="hidden",document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.body.style.overflow="auto",document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=l(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},c.apply(this,arguments)}function l(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function f(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(o){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._imageCaption=e._popup.querySelector(".popup__image-caption"),e}return e=a,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;c(p(a.prototype),"open",this).call(this),this._image.src=n,this._image.alt="Фотография: ".concat(e),this._imageCaption.textContent=e}},{key:"close",value:function(){c(p(a.prototype),"close",this).call(this),this._image.src="",this._image.alt="",this._imageCaption.textContent=""}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(i);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=m(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function b(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return b(this,t)});function a(t,e){var n,r=e.submit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleSubmit=r,n._formElement=n._popup.querySelector(".form"),n._inputList=Array.from(n._formElement.querySelectorAll(".form__input")),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){t[e.name]&&(e.value=t[e.name])}))}},{key:"setEventListeners",value:function(){var t=this;_(k(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}},{key:"getFormElement",value:function(){return this._formElement}},{key:"close",value:function(){_(k(a.prototype),"close",this).call(this),this._formElement.reset()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(i);function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this._clear(),t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var C=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(e),this._aboutElement=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._nameElement.textContent=e,this._aboutElement.textContent=n}},{key:"setAvatar",value:function(t){this._profileAvatar.src=t}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.serverUrl,this._token=e.token}var e,n;return e=t,(n=[{key:"_requestResult",value:function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: Ошибка ".concat(t.status," - ").concat(t.statusText))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"editProfile",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._requestResult(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._requestResult(t)}))}},{key:"addCardLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"deleteCardLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._requestResult(t)}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=B(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function B(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return T(t)}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function a(t,e){var n,r=e.callBack;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callBack=r,n._removeButton=n._popup.querySelector(".popup__remove-button"),n._handlerCallBack=n._handlerCallBack.bind(T(n)),n}return e=a,(n=[{key:"open",value:function(){I(x(a.prototype),"open",this).call(this)}},{key:"close",value:function(){I(x(a.prototype),"close",this).call(this)}},{key:"_handlerCallBack",value:function(){this._callBack(this.data)}},{key:"setEventListeners",value:function(){I(x(a.prototype),"setEventListeners",this).call(this),this._removeButton.addEventListener("click",this._handlerCallBack)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(i),U={inputSelector:".form__input",submitButtonSelector:".form__save-button",activeSubmitButtonClass:"form__save-button_active",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},D=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),z=document.querySelector(".profile__avatar"),N=document.querySelectorAll(".form__save-button");function F(t){N.forEach((function(e){e.textContent=t?"Сохранение..":"Сохранить"}))}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){$(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var G=new j({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-52/",token:"4313ac51-7853-47ce-b5c6-6d8de79244e3"}),K=new A("#confirm-popup",{callBack:function(t){G.deleteCard(t.cardId).then((function(){t.card.remove(),K.close()})).catch((function(t){return console.log(t)}))}}),Q=function(t){K.data=t,K.open()},W=null,X=[G.getUserInfo(),G.getInitialCards()],Y=new C(".profile__name",".profile__role",".profile__avatar-image"),Z=new g("#edit-profile-popup",{submit:function(t){var e=t.name,n=t.about;F(!0),G.editProfile({name:e,about:n}).then((function(t){var e=t.name,n=t.about;Y.setUserInfo({name:e,about:n}),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){return F(!1)}))}}),tt=new g("#avatar-popup",{submit:function(t){F(!0),G.editAvatar({avatar:t.link}).then((function(){Y.setAvatar(t.link),tt.close()})).catch((function(t){return console.log(t)})).finally((function(){return F(!1)}))}}),et=new g("#add-card-popup",{submit:function(t){F(!0),G.addNewCard(t).then((function(t){ot.addItem(rt(t)),et.close()})).catch((function(t){return console.log(t)})).finally((function(){return F(!1)}))}}),nt=new h("#image-popup");function rt(t){var n=new e(M(M({},t),{},{userId:W}),".template",nt.open.bind(nt),Q,(function(e){e?G.deleteCardLike(t._id).then((function(t){return n.removeLike(t.likes.length)})).catch((function(t){return console.log(t)})):G.addCardLike(t._id).then((function(t){return n.addLike(t.likes.length)})).catch((function(t){return console.log(t)}))}));return n.generateCard()}var ot=new w((function(t){return ot.addItem(rt(t))}),".elements"),it=new r(U,tt.getFormElement()),at=new r(U,et.getFormElement()),ut=new r(U,Z.getFormElement());V.addEventListener("click",(function(){et.open(),at.resetValidation()})),D.addEventListener("click",(function(){Z.open();var t=Y.getUserInfo(),e=t.name,n=t.about;Z.setInputValues({name:e,about:n}),ut.resetValidation()})),z.addEventListener("click",(function(){tt.open(),it.resetValidation()})),it.enableValidation(),at.enableValidation(),ut.enableValidation(),nt.setEventListeners(),Z.setEventListeners(),et.setEventListeners(),tt.setEventListeners(),K.setEventListeners(),Promise.all(X).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o),Y.setAvatar(o.avatar),W=o._id,ot.renderItems(i.reverse())})).catch((function(t){return console.log(t)}))})();