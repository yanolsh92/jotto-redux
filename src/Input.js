import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.state = { currentGuess: null };

    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  /**
   * Run `guessWord` action on the submitted word (if it's not empty)
   * @method submitGuessedWord
   * @param {Event} evt - Event that triggered the call.
   * @returns {undefined}
   */
  submitGuessedWord(evt) {
    evt.preventDefault();

    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
        />
        <button
          data-test='submit-button'
          type='submit'
          className='btn btn-primary mb-2'
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test='component-input'>{contents}</div>;
  }
}
const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
