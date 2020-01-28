import { calculatePoints } from "../Helpers/calculateDeckPoints";
import { setWinner } from "../Actions/action";

export const stand = () => (dispatch, getState) => {
  const enemyDeck = calculatePoints(getState().enemyData.enemyDeck);
  const playerDeck = calculatePoints(getState().playerData.playerDeck);
  if (
    (enemyDeck < playerDeck && playerDeck <= 21) ||
    (enemyDeck > 21 && playerDeck <= 21)
  ) {
    dispatch(setWinner("You Won!"));
  } else if (enemyDeck === playerDeck) {
    dispatch(setWinner("DRAW!"));
  } else if (enemyDeck > 21 && playerDeck > 21) {
    dispatch(setWinner("Both Lost..."));
  } else {
    dispatch(setWinner("You Lost..."));
  }
};
