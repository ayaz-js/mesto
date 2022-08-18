// popup
const popup = document.querySelector('.popup');

// openPopup button
const editProfileButton = document.querySelector('.profile__edit-button');

// closePopup buttons
const closeProfileButton = document.querySelector('.popup__close-button');
const formSaveButton = document.querySelector('.form__save-button');

// profile
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');

// inputs
const formElement = document.querySelector('.form')
const inputName = formElement.querySelector('.form__input_type_name');
const inputRole = formElement.querySelector('.form__input_type_role');

// Elements
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

// Functions
function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup();
}

function getProfile() {
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function openPopup() {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
  getProfile();
  addEventListeners();
}

function closePopup() {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
  removeEventListeners();
}

function closeOnEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
      closePopup();
  }
}

function closeOnOverlay(event) {
  const target = event.target
  if(target && target.classList.contains('popup_opened')) {
    closePopup();
  }
}

function addEventListeners() {
  closeProfileButton.addEventListener('click', closePopup);
  document.addEventListener('keyup', closeOnEsc);
  formElement.addEventListener('submit', formSubmitHandler);
  popup.addEventListener('click', closeOnOverlay);
}

function removeEventListeners() {
  closeProfileButton.removeEventListener('click', closePopup);
  document.removeEventListener('keyup', closeOnEsc);
  formElement.removeEventListener('submit', formSubmitHandler);
  popup.removeEventListener('click', closeOnOverlay);
}

function renderCard(image, title) {
  const cardTemplate = document.querySelector('.element__template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardImage.src = image;
  cardImage.alt = `Фотография: ${title}`
  cardTitle.textContent = title;

  elements.append(cardElement);
}

initialCards.forEach(item => renderCard(item.link, item.name));

editProfileButton.addEventListener('click', openPopup);

elements.addEventListener('click', (event)=> {
  const target = event.target;

  if(target && target.classList.contains('element__like-button')) {
    target.classList.toggle('element__like-button_active');
  }
})
