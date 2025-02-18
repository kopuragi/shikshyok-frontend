import * as Clock from "./clock";
import * as Counter from "./counter";
export interface AppState {
  clock: Clock.State;
  counter: Counter.State;
}
