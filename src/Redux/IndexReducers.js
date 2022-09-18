import { combineReducers } from "redux";
import { statsReducers } from "./Reducers";
export const reducers = combineReducers({
  allStats: statsReducers,
});
