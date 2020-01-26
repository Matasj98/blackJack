import { calculatePoints } from '../Helpers/calculateDeckPoints'

test("calculates deck points 5 + 4", () => {
  expect(
    calculatePoints([
      { number: 5, suit: "♠" },
      { number: 4, suit: "♥" }
    ])
  ).toBe(9);
});

test("calculates deck points A + 4", () => {
  expect(
    calculatePoints([
      { number: 'A', suit: "♠" },
      { number: 4, suit: "♥" }
    ])
  ).toBe(15);
});

test("calculates deck points 10 + 4 + A", () => {
  expect(
    calculatePoints([
      { number: 10, suit: "♠" },
      { number: 4, suit: "♥" },
      { number: 'A', suit: "♥" }
    ])
  ).toBe(15);
});
