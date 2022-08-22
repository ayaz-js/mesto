// popup
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('#edit-profile-popup');
const addCardPopup = document.querySelector('#add-card-popup');
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
const cardTemplate = document.querySelector('.element__template').content;

// functions
function formSubmitProfile (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup(profilePopup);
}

function formSubmitAddCard (event) {
  event.preventDefault();

  const cardData = {
    name: inputTitle.value,
    link: inputLink.value
  }

  const newCard = createCard(cardData);
  event.target.reset();
  cardsContainer.prepend(newCard);

  closePopup(addCardPopup);
}

function openProfilePopup() {
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
  editProfileButton.addEventListener('click', () => openPopup(profilePopup));
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
}

function closeOnClick() {
  popups.forEach( popup => {
    popup.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget || event.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
    });
  });
}

function addEventListeners() {
  closeOnClick();
  formElementEditProfile.addEventListener('submit', formSubmitProfile);
  formElementAddCard.addEventListener('submit', formSubmitAddCard);
}

function createCard({ name, link }) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardImage.src = link;
  cardImage.alt = `Фотография: ${name}`;
  cardTitle.textContent = name;

  cardImage.addEventListener('click', () => {
    openImagePopup(name, link);
  });

  cardElement.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('element__remove-button')) {
      cardElement.remove();
    }

    if(target.classList.contains('element__like-button')) {
      target.classList.toggle('element__like-button_active');
    }
  });

  return cardElement;
}

function openImagePopup(name, link) {
  image.src = link;
  image.alt = `Фотография: ${name}`;
  imageCaption.textContent = name;
  openPopup(imagePopup);
}

initialCards.forEach(item => cardsContainer.append(createCard(item)));
addCardButton.addEventListener('click', () => openPopup(addCardPopup));

openProfilePopup();
addEventListeners();
