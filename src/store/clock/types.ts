import type { Action } from "redux";

export type State = string;

export interface SetClockAction extends Action<"@clock/setClock"> {
  payload: State;
  [key: string]: any;
}

export type Actions = SetClockAction;
