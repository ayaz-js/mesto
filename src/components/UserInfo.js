export default class UserInfo {
  constructor(nameSelector, aboutSelector, profileAvatar) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._profileAvatar = document.querySelector(profileAvatar);;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  setUserInfo({name, about}) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }

  setAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }
}
