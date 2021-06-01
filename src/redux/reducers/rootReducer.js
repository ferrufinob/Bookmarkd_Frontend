import { combineReducers } from "redux";
import pinsReducer from "./pinsReducer";
import userReducer from "./userReducer";

//state.pins.pins
export const rootReducer = combineReducers({
  pins: pinsReducer,
  user: userReducer,
});
