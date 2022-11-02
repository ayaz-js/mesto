export default class Card {
  constructor({ name, link, likes, _id, owner, userId }, templateSelector, handleCardClick, handleRemoveCard, handleLikeClick,) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._userId = userId
    this._cardId = _id;
    this._ownerId = owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard
    this._handleLikeClick = handleLikeClick
    this._isLiked = Boolean(this._likes.find(like => like._id === userId));
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
  }

  _handleClickCardImage() {
    this._handleCardClick({
      name: this._name,
      link: this._link
    });
  }

  _handleClickLikeButton() {
    this._handleLikeClick(this._isLiked);
  }

  _setEventListeners() {
    this._cardLikeButton = this._cardElement.querySelector('.element__like-button');
    this._likeCountElement = this._cardElement.querySelector('.element__like-count');
    this._cardDeleteButton = this._cardElement.querySelector('.element__remove-button');
    this._cardImage = this._cardElement.querySelector('.element__image');

    this._cardLikeButton.addEventListener('click', () =>
      this._handleClickLikeButton()
    );

    if(this._userId === this._ownerId) {
      this._cardDeleteButton.addEventListener('click', () => {
        this._deleteButtonClick()
      });
    }

    if (this._isLiked) {
      this.addLike(this._likes.length);
    }

    this._cardImage.addEventListener('click', () =>
      this._handleClickCardImage()
    );
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._setEventListeners();

    this._cardTitle = this._cardElement.querySelector('.element__title');

    this._cardDeleteButton.style.display = (this._userId === this._ownerId) ? 'block' : 'none';
    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография: ${this._name}`;
    this._cardTitle.textContent = this._name;
    this._likeCountElement.textContent = this._likes.length;

    return this._cardElement;
  }

  addLike(count) {
    this._cardLikeButton.classList.toggle('element__like-button_active');
    this._likeCountElement.textContent = count;
    this._isLiked = true;
  }

  removeLike(count) {
    this._cardLikeButton.classList.toggle('element__like-button_active');
    this._likeCountElement.textContent = count;
    this._isLiked = false;
  }

  _deleteButtonClick() {
    const data = {
      card: this._cardElement,
      cardId: this._cardId,
    };
    this._handleRemoveCard(data);
  }
}
