import { ActionTypes } from "./Action-types";

const initialState = {
  Stats: [{ name: "x", value: 0, min: 0 }],
};
export const statsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes:
      return state;
    case "FETCH":
      return { ...state, Stats: action.payload };
    default:
      return state;
  }
};
