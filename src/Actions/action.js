export const setPlayerPoints = playerPoints => ({
  type: "setPlayerPoints",
  playerPoints
});

export const setEnemyPoints = enemyPoints => ({
  type: "setEnemyPoints",
  enemyPoints
});

export const setDeck = deck => ({
  type: "setDeck",
  deck
});

export const setPlayerDeck = playerDeck => ({
  type: "setPlayerDeck",
  playerDeck
});

export const setEnemyDeck = enemyDeck => ({
  type: "setEnemyDeck",
  enemyDeck
});

export const setWinner = winner => ({
  type: "setWinner",
  winner
});

export const resetApp = () => ({
  type: 'RESET_APP'
})
