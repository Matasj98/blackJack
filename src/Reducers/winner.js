const initialState = {
    winner: null
  };
  
  export const winner = (state = initialState, action) => {
    switch (action.type) {
      case "setWinner":
        return {
          ...state,
          winner: action.winner
        };
      default:
        return state;
    }
  };
  