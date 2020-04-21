// import * as actions from 'store/actions';
import * as actions from '../actions';
import { handleActions } from 'redux-actions';
import produce from 'immer';



export const initialState = {
  profile:{}
}

// console.log(actions.BASE_TEST,'actions.BASE_TEST');
// console.log(actions.BASE_EXIT_LANDING);
export default handleActions({
  // NOTE: BASE
  // [actions.BASE_TEST.PENDING]:(state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log(diff,'PENDING');

  //   })
  // },
  // [actions.BASE_TEST.SUCCESS]:(state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log(diff,'SUCCESS');

  //   })
  // },
  // [actions.BASE_TEST.FAILURE]:(state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log(diff,'FAILURE');

  //   })
  // },

}, initialState);

