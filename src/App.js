import React from "react";
import "./App.css";
import Card from "./Components/Card/Card.component";
import Intro from "./Components/Intro/Intro.component";
import Button from "./Components/Button/Button.component";
import { connect } from "react-redux";
import { setDeck, resetApp } from "./Actions/action";
import { setDeck as setDeckThunk } from "./Thunk/setDeck";
import { hit } from "./Thunk/hit";
import { enemyHit } from "./Thunk/enemyHit";
import { stand } from "./Thunk/stand";
import { generateDeck } from "./Helpers/generateDeck";

class App extends React.Component {
  componentDidMount() {
    this.start();
  }

  start = () => {
    this.props.onSetGenerateDeck(generateDeck());
    this.props.onSetDecks();
  };

  reset = () => {
    this.props.onReset();
    this.start();
  };

  stand = () => {
    this.props.onEnemyHit();
    this.props.onStand();
  };

  render() {
    return (
      <div className="App">
        <Intro />
        <div className="u-textAlignCenter">
          {this.props.winner === null ? (
            <div>
              <Button click={this.props.onHit} text="Hit" />
              <Button click={this.stand} text="Stand" />
            </div>
          ) : null}
          <p>YOU</p>
          <Card deck={this.props.playerDeck} />
          <p>ENEMY</p>
          <Card
            deck={this.props.enemyDeck}
            enemy={this.props.winner === null ? false : true}
          />
        </div>
        <h1>{this.props.winner}</h1>
        <Button click={this.reset} text="New Game" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerDeck: state.gameData.playerDeck,
  enemyDeck: state.gameData.enemyDeck,
  winner: state.gameData.winner
});

const mapDispatchToProps = dispatch => ({
  onSetGenerateDeck: deck => dispatch(setDeck(deck)),
  onSetDecks: () => dispatch(setDeckThunk()),
  onHit: () => dispatch(hit()),
  onEnemyHit: () => dispatch(enemyHit()),
  onStand: () => dispatch(stand()),
  onReset: () => dispatch(resetApp())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
