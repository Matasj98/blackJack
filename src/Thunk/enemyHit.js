import { calculatePoints } from "../Helpers/calculateDeckPoints";
import { setEnemyDeck, setDeck as setDeckAction } from "../Actions/action";

export const enemyHit = () => (dispatch, getState) => {
  let randomChoice = Math.random() >= 0.5 ? 1 : 0;
  const copyDeck = [...getState().gameData.deck];
  const copyEnemyDeck = [...getState().gameData.enemyDeck];
  while (randomChoice !== 1) {
    const randomCard = Math.floor(Math.random() * copyDeck.length);
    copyDeck.splice(randomCard, 1);
    copyEnemyDeck.push(copyDeck[randomCard]);

    if (calculatePoints(copyEnemyDeck) >= 19) {
      randomChoice = 1;
    } else {
      randomChoice = Math.random() >= 0.5 ? 1 : 0;
    }
  }

  dispatch(setEnemyDeck(copyEnemyDeck));
  dispatch(setDeckAction(copyDeck));
};
