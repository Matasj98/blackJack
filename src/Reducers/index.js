import { combineReducers } from "redux";
import { deckData } from "./deckData";
import { enemyData } from "./enemyData";
import { playerData } from "./playerData";
import { winner } from "./winner";

const appReducer = combineReducers({
  deckData,
  enemyData,
  playerData,
  winner
});

export const allReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};
