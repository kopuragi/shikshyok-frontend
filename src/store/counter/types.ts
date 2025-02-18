import type { Action } from "redux";

export type State = number;
export interface SetCounterAction extends Action<"@counter/setCounter"> {
  payload: State;
  [key: string]: any;
}
export type Actions = SetCounterAction;
