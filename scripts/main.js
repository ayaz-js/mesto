// popup
const popup = document.querySelector('.popup');

// openPopup button
const editProfileButton = document.querySelector('.profile__edit-button');

// closePopup buttons
const closeProfileButton = document.querySelector('.form__close-button');
const popupOverlay = document.querySelector('.popup__overlay');

// Functions

function openPopup() {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
  addEventListeners();
}

function closePopup() {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
  removeEventListeners();
}

function closeOnEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
      closePopup(popup);
  }
}

function addEventListeners() {
  closeProfileButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup);
  document.addEventListener('keyup', closeOnEsc);
}

function removeEventListeners() {
  closeProfileButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup);
  document.addEventListener('keyup', closeOnEsc);
}

editProfileButton.addEventListener('click', openPopup);
