const initialState = {
  playerPoints: null,
  playerDeck: []
};

export const playerData = (state = initialState, action) => {
  switch (action.type) {
    case "setPlayerPoints":
      return {
        ...state,
        playerPoints: action.playerPoints
      };

    case "setPlayerDeck":
      return {
        ...state,
        playerDeck: action.playerDeck
      };
    default:
      return state;
  }
};
