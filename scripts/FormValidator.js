export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._activeSubmitButtonClass = config.activeSubmitButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._formList = Array.from(document.querySelectorAll(this._formSelector));
    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.remove(this._activeSubmitButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.add(this._activeSubmitButtonClass);
    }
  }

  _showInputError(inputElement) {
    const errorInput = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorInput.textContent = inputElement.validationMessage;
    errorInput.classList.add(this._errorClass);
    console.log(errorInput);
  }

  _hideInputError(inputElement) {
    const errorInput = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorInput.classList.remove(this._errorClass);
    errorInput.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setInputValidation() {
    this._toggleButtonState();

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formList.forEach(formElement => {

      this._setInputValidation(formElement);

      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });
    });
  }

  resetValidation() {
    this._inputList.forEach(inputElement => this._hideInputError(inputElement));
    this._toggleButtonState();
  }
}
