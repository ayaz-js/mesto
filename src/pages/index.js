import './index.css';

import { initialCards } from "../utils/cards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  validationConfig,
  buttonEditProfile,
  buttonAddCard,
} from '../utils/constants.js';

const userInfo = new UserInfo('.profile__name', '.profile__role');

const profilePopup = new PopupWithForm('#edit-profile-popup', ({name, role}) => {
  userInfo.setUserInfo({name, role});
});

const cardPopup = new PopupWithForm('#add-card-popup', (values) => {
  cardsSection.addItem(createCard(values))
  }
);

const popupWithImage = new PopupWithImage('#image-popup');

function createCard({ name, link }) {
  const card = new Card(
    { name, link },
    '.template',
    popupWithImage.open.bind(popupWithImage))

  return card.generateCard();
}

const cardsSection = new Section(
  {
    items: initialCards.reverse(),
    renderer: (item) => cardsSection.addItem(createCard(item)),
  },
  '.elements'
);

function openProfilePopup() {
  profilePopup.open();
  const userInfoData = userInfo.getUserInfo();

  const {
    name,
    role
  } = userInfoData

  profilePopup.setInputValues({
    name,
    role,
  });

  formEditProfileValidator.resetValidation();
}

function openCardPopup() {
  cardPopup.open();
  formAddCardValidator.resetValidation();
}

const formAddCardValidator = new FormValidator(
  validationConfig,
  cardPopup.getFormElement()
);

const formEditProfileValidator = new FormValidator(
  validationConfig,
  profilePopup.getFormElement()
);

buttonAddCard.addEventListener('click', openCardPopup);
buttonEditProfile.addEventListener('click', openProfilePopup);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();

popupWithImage.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();

cardsSection.renderItems();
