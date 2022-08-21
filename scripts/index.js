// popup
const editProfilePopup = document.querySelector('#edit-profile-popup');
const addCardPopup = document.querySelector('#add-card-popup');

// openPopup button
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

// closePopup buttons
const closeProfileButton = document.querySelector('.popup__close-button_popup_profile');
const closeAddCardButton = document.querySelector('.popup__close-button_popup_add-card');

// profile
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');

// inputs
const formElementEditProfile = document.querySelector('[name="edit-profile"]');
const inputName = formElementEditProfile.querySelector('.form__input_type_name');
const inputRole = formElementEditProfile.querySelector('.form__input_type_role');

const formElementAddCard = document.querySelector('[name="add-card"]');
const inputTitle = formElementAddCard.querySelector('.form__input_type_title');
const inputLink = formElementAddCard.querySelector('.form__input_type_link');

// elements
const elements = document.querySelector('.elements');

// card array
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// functions
function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup(editProfilePopup);
}

function formSubmitAddCard (event) {
  event.preventDefault();

  const newCard = renderCard(inputLink.value, inputTitle.value);
  event.target.reset();
  elements.prepend(newCard);

  closePopup(addCardPopup);
}

function getProfile() {
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
  getProfile();
  addEventListeners();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
  removeEventListeners();
}

function closeOnOverlay(event) {
  const target = event.target
  if(target && target.classList.contains('popup_opened')) {
    closePopup(target);
  }
}

function addEventListeners() {
  closeProfileButton.addEventListener('click', () => closePopup(editProfilePopup));
  closeAddCardButton.addEventListener('click', () => closePopup(addCardPopup));
  editProfilePopup.addEventListener('click', closeOnOverlay);
  addCardPopup.addEventListener('click', closeOnOverlay);
  formElementEditProfile.addEventListener('submit', formSubmitHandler);
  formElementAddCard.addEventListener('submit', formSubmitAddCard);
}

function removeEventListeners() {
  closeProfileButton.removeEventListener('click', () => closePopup(editProfilePopup));
  closeAddCardButton.removeEventListener('click', () => closePopup(addCardPopup));
  editProfilePopup.removeEventListener('click', closeOnOverlay);
  addCardPopup.removeEventListener('click', closeOnOverlay);
  formElementEditProfile.removeEventListener('submit', formSubmitHandler);
  formElementAddCard.removeEventListener('submit', formSubmitAddCard);
}

function renderCard(name, link) {
  const cardTemplate = document.querySelector('.element__template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardImage.src = link;
  cardImage.alt = `Фотография: ${name}`;
  cardTitle.textContent = name;

  return cardElement;
}

initialCards.forEach(item => elements.append(renderCard(item.name, item.link)));

editProfileButton.addEventListener('click', () => openPopup(editProfilePopup));
addCardButton.addEventListener('click', () => openPopup(addCardPopup));

elements.addEventListener('click', (event) => {
  const target = event.target;
  const element = document.querySelector('.element');

  if(target && target.classList.contains('element__remove-button')) {
    element.remove();
  }
});

elements.addEventListener('click', (event) => {
  const target = event.target;

  if(target && target.classList.contains('element__like-button')) {
    target.classList.toggle('element__like-button_active');
  }
});
