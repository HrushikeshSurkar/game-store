import { combineReducers } from "redux";
import layoutReducer from "./layout/reducer";
import theWarriorReducer from "./TheWarrior/reducer";

const rootReducer = combineReducers({
  layout: layoutReducer,
  theWarrior: theWarriorReducer,
});

export default rootReducer;
