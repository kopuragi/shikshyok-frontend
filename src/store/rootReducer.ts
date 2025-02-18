import { combineReducers } from "redux";
import * as Clock from "./clock";
import * as Counter from "./counter";
export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: Counter.reducer,
});
