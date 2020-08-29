import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import gaveUp from './gaveUpReducer';
import userEnter from './userEnterReducer';
// Challenge #5: Server Error
import serverError from './serverErrorReducer';
// END: Challenge #5: Server Error

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  gaveUp,
  userEnter,
  serverError,
});
