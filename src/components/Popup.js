export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.body.style.overflow = 'auto';
    document.removeEventListener("keyup", this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      if (
        event.target === event.currentTarget ||
        event.target.classList.contains('popup__close-button')
      ) {
        this.close();
      }
    });
  }
}
