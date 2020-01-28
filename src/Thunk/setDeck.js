import { setPlayerDeck, setEnemyDeck } from "../Actions/action";
import { setDeck as setDeckAction } from "../Actions/action";

export const setDeck = () => (disptach, getState) => {
  let cards = [];
  const deckCopy = [...getState().deckData.deck];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * deckCopy.length);
    cards.push(deckCopy[random]);
    deckCopy.splice(random, 1);
  }
  disptach(setPlayerDeck(cards.slice(0, 2)));
  disptach(setEnemyDeck(cards.slice(2, 4)));
  disptach(setDeckAction(deckCopy));
};
