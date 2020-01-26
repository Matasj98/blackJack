import React from "react";
import { calculatePoints } from "../../Helpers/calculateDeckPoints";
import "./card.css";

const Card = ({ deck, enemy }) => {
  return (
    <div className="Card">
      {enemy === false ? (
        <div>****</div>
      ) : (
        <div>Points: {calculatePoints(deck)}</div>
      )}
      <div className="CardBox">
        {deck.map((data, index) => {
          if (enemy === false && index === 1) {
            return (
              <div key={index} className="CardSize">
                * *
              </div>
            );
          }
          return (
            <div key={index} className="CardSize">
              {data.number}
              {data.suit}
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};

export default Card;
