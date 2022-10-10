export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
  }

  _clickCardImage() {
    this._handleCardClick(this._name, this._link);
  }

  _clickLikeButton() {
    this._cardLikeButton.classList.toggle('element__like-button_active');
  }

  _deleteCard() {
   this._cardElement.remove();
  }

  _setEventListeners() {
    this._cardLikeButton = this._cardElement.querySelector('.element__like-button');
    this._cardDeleteButton = this._cardElement.querySelector('.element__remove-button');
    this._cardImage = this._cardElement.querySelector('.element__image');

    this._cardLikeButton.addEventListener('click', () =>
      this._clickLikeButton()
    );

    this._cardDeleteButton.addEventListener('click', () =>
      this._deleteCard()
    );

    this._cardImage.addEventListener('click', () =>
      this._clickCardImage()
    );
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._setEventListeners();

    this._cardTitle = this._cardElement.querySelector('.element__title');

    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография: ${this._name}`;
    this._cardTitle.textContent = this._name;

    return this._cardElement;
  }
}
