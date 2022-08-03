// popup
const popup = document.querySelector('.popup');

// openPopup button
const editProfileButton = document.querySelector('.profile__edit-button');

// closePopup buttons
const closeProfileButton = document.querySelector('.form__close-button');
const popupOverlay = document.querySelector('.popup__overlay');
const formSaveButton = document.querySelector('.form__save-button');

// profile
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');

// inputs
const inputName = document.querySelector('.form__input-name');
const inputRole = document.querySelector('.form__input-role');

// Functions
function getProfile() {
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
}

function editProfile() {
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup()
}

function calcScrollWidth() {
  const scrollOverlay = document.createElement("div");
  scrollOverlay.style.width = "50px";
  scrollOverlay.style.height = "50px";
  scrollOverlay.style.overflowY = "scroll";
  scrollOverlay.style.visibility = "hidden";

  document.body.appendChild(scrollOverlay);
  const result = scrollOverlay.offsetWidth - scrollOverlay.clientWidth;
  scrollOverlay.remove();

  return result
}

function openPopup() {
  popup.classList.add('popup_opened');
  document.body.style.overflow = 'hidden';
  document.body.style.borderRight = `${calcScrollWidth()}px solid black`;
  getProfile()
  addEventListeners();
}

function closePopup() {
  popup.classList.remove('popup_opened');
  document.body.style.overflow = 'auto';
  document.body.style.borderRight = `0px solid black`;
  removeEventListeners();
}

function closeOnEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
      closePopup();
  }
}

function addEventListeners() {
  closeProfileButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup);
  document.addEventListener('keyup', closeOnEsc);
  formSaveButton.addEventListener('click', editProfile)
}

function removeEventListeners() {
  closeProfileButton.removeEventListener('click', closePopup);
  popupOverlay.removeEventListener('click', closePopup);
  document.removeEventListener('keyup', closeOnEsc);
  formSaveButton.removeEventListener('click', editProfile)
}

editProfileButton.addEventListener('click', openPopup);
