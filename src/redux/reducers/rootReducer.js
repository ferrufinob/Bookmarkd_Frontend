import { combineReducers } from "redux";
import pinsReducer from "./pinsReducer";

//state.pins.pins
export const reducer = combineReducers({ pins: pinsReducer });
