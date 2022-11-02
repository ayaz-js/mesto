import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm";
import renderLoading from "../utils/utils";

import {
  validationConfig,
  buttonEditProfile,
  buttonChangeAvatar,
  buttonAddCard,
} from '../utils/constants.js';



const api = new Api({
  serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-52/',
  token: '4313ac51-7853-47ce-b5c6-6d8de79244e3',
});

// Попап удаления карточки
const popupWithConfirm = new PopupWithConfirm('#confirm-popup', {
    callBack: (data) => {
      api.deleteCard(data.cardId)
        .then(() => {
          data.card.remove();
          popupWithConfirm.close();
        })
        .catch((error) => console.log(error))
    },
  }
)

const deleteCard = (data) => {
  popupWithConfirm.data = data;
  popupWithConfirm.open();
};

let userId = null;

const initialData = [api.getUserInfo(), api.getInitialCards()];

const userInfo = new UserInfo('.profile__name', '.profile__role', '.profile__avatar-image');

// Попап редактирования профиля
const profilePopup = new PopupWithForm('#edit-profile-popup', {
  submit: ({name, about}) => {
    renderLoading(true)
      api.editProfile({ name, about })
      .then(({ name, about }) => userInfo.setUserInfo({ name, about }))
      .catch((error) => console.log(error))
      .finally(() => renderLoading(false))
    }
  }
);

// Попап редактирования аватарки
const avatarPopup = new PopupWithForm('#avatar-popup', {
  submit: (values) => {
    renderLoading(true)
    api.editAvatar({ avatar: values.link })
      .then(userInfo.setAvatar(values.link))
      .catch((error) => console.log(error))
      .finally(() => renderLoading(false))
    }
  }
)

// Попап добавления карточки
const cardPopup = new PopupWithForm('#add-card-popup', {
  submit: (values) => {
    renderLoading(true)
      api.addNewCard(values)
      .then((data) => cardsSection.addItem(createCard(data)))
      .catch((error) => console.log(error))
      .finally(() => renderLoading(false))
    }
  }
);

const popupWithImage = new PopupWithImage('#image-popup');

// Создание карточки
function createCard(data) {
  const card = new Card(
    { ...data, userId } ,
    '.template',
    popupWithImage.open.bind(popupWithImage),
    deleteCard,
    (isLiked) => {
      if (isLiked) {
        api.deleteCardLike(data._id)
          .then((data) => card.removeLike(data.likes.length))
          .catch((error) => console.log(error));
      } else {
        api.addCardLike(data._id)
          .then((data) => card.addLike(data.likes.length))
          .catch((error) => console.log(error));
      }
    })

  return card.generateCard();
}

// Генерация карточек
const cardsSection = new Section(
    (item) => cardsSection.addItem(createCard(item)),
    '.elements',
);

function openProfilePopup() {
  profilePopup.open();
  const userInfoData = userInfo.getUserInfo();

  const {
    name,
    about
  } = userInfoData

  profilePopup.setInputValues({
    name,
    about
  });

  formEditProfileValidator.resetValidation();
}

function openAvatarPopup() {
  avatarPopup.open();
  formAvatarValidator.resetValidation();
}

function openCardPopup() {
  cardPopup.open();
  formAddCardValidator.resetValidation();
}

// Создание классов валидации
const formAvatarValidator = new FormValidator(
  validationConfig,
  avatarPopup.getFormElement()
);

const formAddCardValidator = new FormValidator(
  validationConfig,
  cardPopup.getFormElement()
);

const formEditProfileValidator = new FormValidator(
  validationConfig,
  profilePopup.getFormElement()
);

// Установка слушателей
buttonAddCard.addEventListener('click', openCardPopup);
buttonEditProfile.addEventListener('click', openProfilePopup);
buttonChangeAvatar.addEventListener('click', openAvatarPopup);

// Активация валидации
formAvatarValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();

// Установка слушателей
popupWithImage.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
avatarPopup.setEventListeners();
popupWithConfirm.setEventListeners();

// Запрос данных сервера для превой отрисовки страницы
Promise.all(initialData)
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData.avatar);
    userId = userData._id;
    cardsSection.renderItems(cards.reverse());
  })
  .catch((error) => console.log(error))
