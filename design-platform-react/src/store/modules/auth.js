import {handleActions} from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';

let initialState={
  isLogged:false,
  profile:{
    userType:1
  }
}

export default handleActions({
  [actions.COUNTER_INCREASE]:(state,{payload:diff})=>{
    return produce(state,draft=>{
      draft.number++
    })
  },
},initialState)