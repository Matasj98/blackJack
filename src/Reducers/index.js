import { combineReducers } from "redux";
import { gameData } from "./gameData";

// export const allReducer = combineReducers({
//     gameData
// })

const appReducer = combineReducers({
  gameData
});

export const allReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};
