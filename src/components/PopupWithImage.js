import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._popup.querySelector('.popup__image');
    this._imageCaption = this._popup.querySelector('.popup__image-caption');
  }

  open(name, link) {
    super.open();
    this._image.src = link;
    this._image.alt = `Фотография: ${name}`;
    this._imageCaption.textContent = name;
  }

  close() {
    super.close();
    this._image.src = '';
    this._image.alt = '';
    this._imageCaption.textContent = '';
  }
}
