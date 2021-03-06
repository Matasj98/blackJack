import { generateDeck } from "../Helpers/generateDeck";

const expectedDeck = [
  { number: 2, suit: "♦" },
  { number: 2, suit: "♣" },
  { number: 2, suit: "♥" },
  { number: 2, suit: "♠" },
  { number: 3, suit: "♦" },
  { number: 3, suit: "♣" },
  { number: 3, suit: "♥" },
  { number: 3, suit: "♠" },
  { number: 4, suit: "♦" },
  { number: 4, suit: "♣" },
  { number: 4, suit: "♥" },
  { number: 4, suit: "♠" },
  { number: 5, suit: "♦" },
  { number: 5, suit: "♣" },
  { number: 5, suit: "♥" },
  { number: 5, suit: "♠" },
  { number: 6, suit: "♦" },
  { number: 6, suit: "♣" },
  { number: 6, suit: "♥" },
  { number: 6, suit: "♠" },
  { number: 7, suit: "♦" },
  { number: 7, suit: "♣" },
  { number: 7, suit: "♥" },
  { number: 7, suit: "♠" },
  { number: 8, suit: "♦" },
  { number: 8, suit: "♣" },
  { number: 8, suit: "♥" },
  { number: 8, suit: "♠" },
  { number: 9, suit: "♦" },
  { number: 9, suit: "♣" },
  { number: 9, suit: "♥" },
  { number: 9, suit: "♠" },
  { number: 10, suit: "♦" },
  { number: 10, suit: "♣" },
  { number: 10, suit: "♥" },
  { number: 10, suit: "♠" },
  { number: "J", suit: "♦" },
  { number: "J", suit: "♣" },
  { number: "J", suit: "♥" },
  { number: "J", suit: "♠" },
  { number: "Q", suit: "♦" },
  { number: "Q", suit: "♣" },
  { number: "Q", suit: "♥" },
  { number: "Q", suit: "♠" },
  { number: "K", suit: "♦" },
  { number: "K", suit: "♣" },
  { number: "K", suit: "♥" },
  { number: "K", suit: "♠" },
  { number: "A", suit: "♦" },
  { number: "A", suit: "♣" },
  { number: "A", suit: "♥" },
  { number: "A", suit: "♠" }
];

test("calculates deck points", () => {
  expect(generateDeck()).toStrictEqual(expectedDeck);
});
