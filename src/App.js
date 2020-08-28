import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSecretWord, resetGame } from './actions';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import TotalGuesses from './TotalGuesses';
import NewWordButton from './NewWordButton';
export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <NewWordButton
          display={this.props.success}
          resetAction={this.props.resetGame}
        />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses guessCount={this.props.guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
const actions = { getSecretWord, resetGame };

export default connect(mapStateToProps, actions)(UnconnectedApp);
