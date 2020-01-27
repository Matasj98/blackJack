import { setPlayerDeck, setDeck } from "../Actions/action";
import { calculatePoints } from "../Helpers/calculateDeckPoints";
import { stand } from "./stand";

export const hit = () => (dispatch, getState) => {
  const copyDeck = [...getState().gameData.deck];
  const random = Math.floor(Math.random() * (copyDeck.length - 1));
  copyDeck.splice(random, 1);
  dispatch(
    setPlayerDeck(getState().gameData.playerDeck.concat(copyDeck[random]))
  );
  dispatch(setDeck(copyDeck));

  if (calculatePoints(getState().gameData.playerDeck) > 21) {
    dispatch(stand());
  }
};
