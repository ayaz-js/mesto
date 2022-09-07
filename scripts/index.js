// popup
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('#edit-profile-popup');
const popupAddCard = document.querySelector('#add-card-popup');
const imagePopup = document.querySelector('#image-popup');

const image = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__image-caption');

// openPopup button
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

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
const cardTemplate = document.querySelector('.template').content;

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
  resetValidation(profilePopup);
  openPopup(profilePopup);
}

function clickAddCardButton() {
  resetValidation(popupAddCard);
  openPopup(popupAddCard)
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
  hangEventListeners();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
  deleteEventListeners();
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

function hangEventListeners() {
  closeOnClick();
  document.addEventListener('keyup', closeOnEsc);
  formElementEditProfile.addEventListener('submit', editProfile);
  formElementAddCard.addEventListener('submit', addCard);
}

function deleteEventListeners() {
  document.removeEventListener('keyup', closeOnEsc);
}


function createCard({name, link}) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  const cardLikeButton = cardElement.querySelector('.element__like-button');
  const cardDeleteButton = cardElement.querySelector('.element__remove-button');

  cardImage.src = link;
  cardImage.alt = `Фотография: ${name}`;
  cardTitle.textContent = name;

  cardImage.addEventListener('click', () => {
    openImagePopup(name, link);
  });

  cardLikeButton.addEventListener('click', () => cardLikeButton.classList.toggle('element__like-button_active'));
  cardDeleteButton.addEventListener('click', () => cardElement.remove());

  return cardElement;
}

function openImagePopup(name, link) {
  image.src = link;
  image.alt = `Фотография: ${name}`;
  imageCaption.textContent = name;
  openPopup(imagePopup);
}

initialCards.forEach(item => cardsContainer.append(createCard(item)));
addCardButton.addEventListener('click', clickAddCardButton);
editProfileButton.addEventListener('click', openProfilePopup);
