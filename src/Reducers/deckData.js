const initialState = {
  deck: []
};

export const deckData = (state = initialState, action) => {
  switch (action.type) {
    case "setDeck":
      return {
        ...state,
        deck: action.deck
      };
    default:
      return state;
  }
};
