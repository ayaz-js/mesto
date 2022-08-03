// popup
const popup = document.querySelector('.popup');

// openPopup button
const editProfileButton = document.querySelector('.profile__edit-button');

// closePopup buttons
const closeProfileButton = document.querySelector('.form__close-button');
const popupOverlay = document.querySelector('.popup__overlay');

// Functions
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
