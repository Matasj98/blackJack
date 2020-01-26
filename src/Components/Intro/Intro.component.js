import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="Intro">
      <h1>BLACKJACK</h1>
      <h4>
        Your goal is to have more points than enemy, BUT not exceeding 21 points
        OR you'll LOSE
      </h4>
      <h4>Press HIT to take another card and STAND to see RESULTS</h4>
    </div>
  );
};

export default Intro;
