import { Mediator } from "./types"
import {
  ColleagueButton,
  ColleagueRadioButton,
  ColleagueTextField,
} from "./colleagues"
export class LoginFrame implements Mediator {
  radioGuest: ColleagueRadioButton
  radioLogin: ColleagueRadioButton
  textUser: ColleagueTextField
  textPass: ColleagueTextField
  buttonOk: ColleagueButton
  buttonCancel: ColleagueButton

  constructor() {
    this.radioGuest = new ColleagueRadioButton(this, "off")
    this.radioLogin = new ColleagueRadioButton(this, "off")
    this.textUser = new ColleagueTextField(this)
    this.textPass = new ColleagueTextField(this)
    this.buttonOk = new ColleagueButton(this, false)
    this.buttonCancel = new ColleagueButton(this, true)
  }
  colleagueChanged() {
    console.log("colleague changed")
    // ゲストログインが選べれているときには、ユーザー名とパスワードを無効状態にして、文字列が入力できないようにする
    if (this.radioGuest.value === "on") {
      this.textUser.enabled = false
      this.textPass.enabled = false
    }

    // ユーザーログインが選ばれているときには、ユーザー名は有効状態になり、文字列を入力できるようにする
    if (this.radioLogin.value === "on") {
      this.textUser.enabled = true
      this.textPass.enabled = true
    }

    console.log("this.radioLogin.value", this.radioLogin.value)
    console.log("this.radioGuest.value", this.radioGuest.value)

    // ユーザー名に1文字も入っていない場合は、パスワードは無効状態になる
    if (!this.textUser.hasInput) {
      this.textPass.enabled = false
    }

    // ユーザー名に文字が1文字でも入っていたら、パスワードは有効状態になる
    if (this.textUser.hasInput) {
      this.textPass.enabled = true
    }
    console.log("this.textPass", this.textPass.enabled)

    // ユーザー名とパスワードの両方に文字が1文字でも入っていればOkボタンは有効状態になる。どちらか一方でも入っていなければ無効
    if (this.textUser.hasInput && this.textPass.hasInput) {
      this.buttonOk.enabled = true
    } else {
      this.buttonOk.enabled = false
    }

    // キャンセルボタンは常に有効状態
  }
}
