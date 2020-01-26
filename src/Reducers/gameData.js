const initialState = {
  playerPoints: null,
  enemyPoints: null,
  deck: [],
  playerDeck: [],
  enemyDeck: [],
  winner: null
};

export const gameData = (state = initialState, action) => {
  switch (action.type) {
    case "setPlayerPoints":
      return {
        ...state,
        playerPoints: action.playerPoints
      };
    case "setEnemyPoints":
      return {
        ...state,
        enemyPoints: action.enemyPoints
      };
    case "setDeck":
      return {
        ...state,
        deck: action.deck
      };
    case "setPlayerDeck":
      return {
        ...state,
        playerDeck: action.playerDeck
      };
    case "setEnemyDeck":
      return {
        ...state,
        enemyDeck: action.enemyDeck
      };
    case "setWinner":
      return {
        ...state,
        winner: action.winner
      };
    default:
      return state;
  }
};
