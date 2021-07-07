// import * as actions from 'store/actions';
import * as actions from '../actions';
import { handleActions } from 'redux-actions';
import produce from 'immer';



export const initialState = {
  users:[],
  todo:{},
  user:{}
}


export default handleActions({
  // NOTE: Base
  [actions.GET_USERS]:(state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(diff,'users1');
      // draft.count++;
      draft.users = diff;
    })
  },
  [actions.GET_USER]:(state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(diff,'user');
      draft.user = diff;
    })
  },
  [actions.GET_TODO]:(state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(diff,'data');
      draft.todo = diff;
      // draft.count++;
    })
  },
}, initialState);

