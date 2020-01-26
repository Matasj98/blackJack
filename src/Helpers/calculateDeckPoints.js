export const calculatePoints = deck => {
    let total = 0;
    deck.map(deck => {
      if (Number.isInteger(deck.number)) {
        return (total += deck.number);
      } else if (deck.number !== "A") {
        return (total += 10);
      } else {
        if (total + 11 <= 21) {
          return (total += 11);
        } else {
          return (total += 1);
        }
      }
    });
    return total;
  };