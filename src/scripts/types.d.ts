/**
 * 相談役を表現するインターフェース
 */
export interface Mediator {
  colleagueChanged: () => void
}

export interface Colleague {
  setColleagueEnabled: (enabled: boolean) => void
}
export {}
