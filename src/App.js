import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import TotalGuesses from './TotalGuesses';

import NewWordButton from './NewWordButton';

import SecretWordReveal from './SecretWordReveal';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

import { getSecretWord, resetGame } from './actions';

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />

        <SecretWordReveal
          display={this.props.gaveUp}
          secretWord={this.props.secretWord}
        />

        <NewWordButton
          display={this.props.success || this.props.gaveUp}
          resetAction={this.props.resetGame}
        />

        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />

        <TotalGuesses guessCount={this.props.guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord, gaveUp }) => {
  return { success, guessedWords, secretWord, gaveUp };
};

const actions = { getSecretWord, resetGame };

export default connect(mapStateToProps, actions)(UnconnectedApp);
