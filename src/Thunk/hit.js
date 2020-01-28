import { setPlayerDeck, setDeck } from "../Actions/action";
import { calculatePoints } from "../Helpers/calculateDeckPoints";
import { stand } from "./stand";

export const hit = () => (dispatch, getState) => {
  const copyDeck = [...getState().deckData.deck];
  const random = Math.floor(Math.random() * (copyDeck.length - 1));
  copyDeck.splice(random, 1);
  dispatch(
    setPlayerDeck(getState().playerData.playerDeck.concat(copyDeck[random]))
  );
  dispatch(setDeck(copyDeck));

  if (calculatePoints(getState().playerData.playerDeck) > 21) {
    dispatch(stand());
  }
};
