import { combineReducers } from "redux";
import pinsReducer from "./pinsReducer";
import userReducer from "./userReducer";
import boardsReducer from "./boardsReducer";

//state.pins.pins
export const rootReducer = combineReducers({
  pins: pinsReducer,
  user: userReducer,
  boards: boardsReducer,
});
