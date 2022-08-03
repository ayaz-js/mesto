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

// Functions
function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;
  closePopup()
}

function getProfile() {
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
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
  document.body.style.borderRight = ``;
  removeEventListeners();
}

function closeOnEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
      closePopup();
  }
}

function addEventListeners() {
  closeProfileButton.addEventListener('click', closePopup);
  document.addEventListener('keyup', closeOnEsc);
  formElement.addEventListener('submit', formSubmitHandler);
}

function removeEventListeners() {
  closeProfileButton.removeEventListener('click', closePopup);
  document.removeEventListener('keyup', closeOnEsc);
  formElement.removeEventListener('submit', formSubmitHandler);
}

editProfileButton.addEventListener('click', openPopup);
