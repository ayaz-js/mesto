import {initialCards} from './cards.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

// popup
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('#edit-profile-popup');
const popupAddCard = document.querySelector('#add-card-popup');
const imagePopup = document.querySelector('#image-popup');

const image = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__image-caption');

// openPopup button
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

// profile
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');

// inputs
const formElementEditProfile = document.querySelector('[name="edit-profile"]');
const inputName = formElementEditProfile.querySelector('.form__input_type_name');
const inputRole = formElementEditProfile.querySelector('.form__input_type_role');

const formElementAddCard = document.querySelector('[name="add-card"]');
const inputTitle = formElementAddCard.querySelector('.form__input_type_title');
const inputLink = formElementAddCard.querySelector('.form__input_type_url');

// cards
const cardsContainer = document.querySelector('.elements');

const config = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  activeSubmitButtonClass: 'form__save-button_active',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const formAddValidator = new FormValidator(config, formElementAddCard);
const formEditValidator = new FormValidator(config, formElementEditProfile);

// functions
function editProfile(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup(profilePopup);
}

function addCard(event) {
  event.preventDefault();

  const cardData = {
    name: inputTitle.value,
    link: inputLink.value
  }

  const newCard = createCard(cardData);
  event.target.reset();
  cardsContainer.prepend(newCard);

  closePopup(popupAddCard);
}

function openProfilePopup() {
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
  formEditValidator.resetValidation();
  openPopup(profilePopup);
}

function clickAddCardButton() {
  formAddValidator.resetValidation();
  openPopup(popupAddCard)
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keyup', closeOnEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
  document.removeEventListener('keyup', closeOnEsc);
}

function closeOnClick() {
  popups.forEach(popup => {
    popup.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget || event.target.classList.contains('popup__close-button')) {
        closePopup(event.currentTarget);
      }
    });
  });
}

function closeOnEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function createCard({name, link}) {
  const card = new Card({name, link}, '.template', openImagePopup);

  return card.generateCard();
}

function openImagePopup(name, link) {
  image.src = link;
  image.alt = `Фотография: ${name}`;
  imageCaption.textContent = name;
  openPopup(imagePopup);
}

initialCards.forEach(item => cardsContainer.append(createCard(item)));
buttonAddCard.addEventListener('click', clickAddCardButton);
buttonEditProfile.addEventListener('click', openProfilePopup);

closeOnClick();
formElementEditProfile.addEventListener('submit', editProfile);
formElementAddCard.addEventListener('submit', addCard);

formAddValidator.enableValidation();
formEditValidator.enableValidation();
