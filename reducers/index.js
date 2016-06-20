import messages from './messages';
import typers from './typers';
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  messages,
  typers,
  formReducer
})

export default rootReducer
