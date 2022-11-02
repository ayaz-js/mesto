import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(selector, { callBack }) {
    super(selector);
    this._callBack = callBack;
    this._removeButton = this._popup.querySelector('.popup__remove-button');
    this._handlerCallBack = this._handlerCallBack.bind(this);
  }

  open() {
    super.open();
  }

  close() {
    super.close();
  }

  _handlerCallBack() {
    this._callBack(this.data);
  }

  setEventListeners() {
    super.setEventListeners();
    this._removeButton.addEventListener('click', this._handlerCallBack);
  }
}
