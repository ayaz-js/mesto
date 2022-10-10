export default class UserInfo {
  constructor(nameSelector, roleSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._roleElement = document.querySelector(roleSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      role: this._roleElement.textContent,
    };
  }

  setUserInfo({name, role}) {
    this._nameElement.textContent = name;
    this._roleElement.textContent = role;
  }
}
