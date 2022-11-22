import { Colleague, Mediator } from "./types"

/**
 * ボタン
 */
export class ColleagueButton implements Colleague {
  constructor(readonly mediator: Mediator, public enabled: boolean) {}

  setColleagueEnabled(enabled: boolean) {
    this.enabled = enabled
  }
}

/**
 * テキストフィールド
 */
export class ColleagueTextField implements Colleague {
  enabled: boolean = true
  text: string = ""

  get hasInput(): boolean {
    return this.text.length > 0
  }

  get backgroundColor(): string {
    return this.enabled ? "gray" : "white"
  }

  constructor(readonly mediator: Mediator) {}

  setColleagueEnabled(enabled: boolean) {
    this.enabled = enabled
  }

  textValueChanged() {
    console.log("changed")
    this.mediator?.colleagueChanged()
  }
}

/**
 * チェックボックス
 */
export class ColleagueRadioButton implements Colleague {
  enabled: boolean = false

  constructor(
    readonly mediator: Mediator,
    public value: "on" | "off" = "off"
  ) {}

  setColleagueEnabled(enabled: boolean) {
    this.enabled = enabled
  }

  itemStateChanged(event: any) {
    console.log("itemStateChanged")
    this.toggleValue()
    this.mediator?.colleagueChanged()
  }

  toggleValue() {
    this.value = this.value === "on" ? "off" : "on"
  }
}
