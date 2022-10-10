import './index.css';

import { initialCards } from "../utils/cards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  config,
  buttonEditProfile,
  buttonAddCard,
} from '../utils/constants.js';

const userInfo = new UserInfo('.profile__name', '.profile__role');

const editProfilePopup = new PopupWithForm('#edit-profile-popup', ({name, role}) => {
  userInfo.setUserInfo({name, role});
});

const addCardPopup = new PopupWithForm('#add-card-popup', (values) => {
    section.addItem(createCards(values))
  }
);

const popupWithImage = new PopupWithImage('#image-popup');

function createCards({ name, link }) {
  const card = new Card({ name, link },
    '.template',
    popupWithImage.open.bind(popupWithImage))

  return card.generateCard();
}

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => section.addItem(createCards(item)),
  },
  '.elements'
);

function openProfilePopup() {
  editProfilePopup.open();
  const userInfoData = userInfo.getUserInfo();

  const {
    name,
    role
  } = userInfoData

  editProfilePopup.setInputValues({
    name,
    role,
  });

  formEditProfileValidator.resetValidation();
}

function addCard() {
  addCardPopup.open();
  formAddCardValidator.resetValidation();
}

const formAddCardValidator = new FormValidator(
  config,
  addCardPopup.getFormElement()
);

const formEditProfileValidator = new FormValidator(
  config,
  editProfilePopup.getFormElement()
);

buttonAddCard.addEventListener('click', addCard);
buttonEditProfile.addEventListener('click', openProfilePopup);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();

popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();

section.renderItems();
