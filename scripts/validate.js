const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, activeSubmitButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.remove(activeSubmitButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.add(activeSubmitButtonClass);
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

const setInputValidation = (formElement, { inputSelector, submitButtonSelector, activeSubmitButtonClass, ...args }) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  toggleButtonState(inputList, buttonElement, activeSubmitButtonClass);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, args);
      toggleButtonState(inputList, buttonElement, activeSubmitButtonClass);
    });
  });
}

const enableValidation = ( {formSelector, formFieldSelector, ...args} ) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(formElement => {
    setInputValidation(formElement, args);

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  });

  return function (formElement) {
    const { inputSelector, submitButtonSelector, activeSubmitButtonClass } = args;
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach(inputElement => hideInputError(formElement, inputElement, args));

    toggleButtonState(inputList, buttonElement, activeSubmitButtonClass);
  };

}

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  activeSubmitButtonClass: 'form__save-button_active',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const resetValidation = enableValidation(config);
