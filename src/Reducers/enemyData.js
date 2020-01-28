const initialState = {
  enemyPoints: null,
  enemyDeck: []
};

export const enemyData = (state = initialState, action) => {
  switch (action.type) {
    case "setEnemyPoints":
      return {
        ...state,
        enemyPoints: action.enemyPoints
      };
    case "setEnemyDeck":
      return {
        ...state,
        enemyDeck: action.enemyDeck
      };
    default:
      return state;
  }
};
