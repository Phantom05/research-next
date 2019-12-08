import {combineReducers} from 'redux';
import home from './home';
import auth from './auth';
import base from './base';
export default combineReducers({
  home,
  auth,
  base
})