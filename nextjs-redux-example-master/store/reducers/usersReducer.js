import actions from "../actions";
import { handleActions } from 'redux-actions';
// import * as actions from 'store/actions';
import produce from 'immer';



export const initialState = {
  users:[],
  todo:{}
}


export default handleActions({
  // NOTE: Base
  [actions.GET_USERS]:(state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(diff,'users');
      // draft.count++;
      draft.users = diff;
    })
  },
  [actions.GET_USER]:(state, { payload: diff }) => {
    return produce(state, draft => {
      console.log(diff,'user');
      // draft.count++;
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

