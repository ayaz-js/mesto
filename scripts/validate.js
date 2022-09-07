const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, activeSubmitButtonSelector) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.remove(activeSubmitButtonSelector);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.add(activeSubmitButtonSelector);
  }
}

const showInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorInput = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorInput.textContent = inputElement.validationMessage;
  errorInput.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorInput = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorInput.classList.remove(errorClass);
  errorInput.textContent = '';
}

const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
}

const setInputVlidation = (formElement, { inputSelector, submitButtonSelector, activeSubmitButtonSelector, ...args }) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  toggleButtonState(inputList, buttonElement, activeSubmitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, args);
      toggleButtonState(inputList, buttonElement, activeSubmitButtonSelector);
    });
  });
}

const enableValidation = ( {formSelector, ...args} ) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    const fieldSet = Array.from(formElement.querySelectorAll('.form__set'));

    fieldSet.forEach(fieldSet => setInputVlidation(fieldSet, args));

  });

  return function (formElement) {
    const { inputSelector, submitButtonSelector, activeSubmitButtonSelector } = args;
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach(inputElement => hideInputError(formElement, inputElement, args));

    toggleButtonState(inputList, buttonElement, activeSubmitButtonSelector);
  };

}

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  activeSubmitButtonSelector: 'form__save-button_active',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const resetValidation = enableValidation(config);
