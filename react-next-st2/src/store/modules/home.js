import {handleActions} from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';
import {protocol} from 'config';

let initialState={
  number:0
}

export default handleActions({
  [actions.BASE_EXIT_LANDING]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.landing = false;
    })
  },
  
  
},initialState)

