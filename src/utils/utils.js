import { buttonSave } from "./constants";

export default function renderLoading(isLoading) {
  buttonSave.forEach((button) => {
    if (isLoading) {
      button.textContent = 'Сохранение..';
    } else {
      button.textContent = 'Сохранить';
    }
  })
}
