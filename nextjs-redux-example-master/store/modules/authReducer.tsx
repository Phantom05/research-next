import * as actions from 'store/actions';
import { handleActions } from 'redux-actions';
// import * as actions from 'store/actions';
import produce from 'immer';



export const initialState = {
  profile:{}
}


export default handleActions({
  // NOTE: Auth
  // [actions.GET_USERS]:(state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     console.log(diff,'users');
  //     // draft.count++;
  //     draft.users = diff;
  //   })
  // },

}, initialState);

