import {handleActions} from 'redux-actions';
import * as types from 'store/types';
import produce from 'immer';

let initialState={
  isLogged:false,
  profile:{},
  login:{
    pending:false,
    success:false,
    failure:false,
    rememnber:null
  }
}

export default handleActions({
  // login, token
  [types.LOGIN_UPDATE.PENDING]:(state,{payload:diff})=>{
    console.log('>>> LOGIN_UPDATE PENDING');
    return produce(state,draft=>{
      draft.login.pending = true
    })
  },
  [types.LOGIN_UPDATE.SUCCESS]:(state,{payload:diff})=>{
    console.log('>>> LOGIN_UPDATE SUCCESS');
    return produce(state,draft=>{
      console.log(diff);
      draft.isLogged = true;
      draft.login.pending = false;
      draft.login.success = true;
      draft.login.failure = false;
      draft.profile = diff.profile;
    })
  },
  [types.LOGIN_UPDATE.FAILURE]:(state,{payload:diff})=>{
    console.log('>>> LOGIN_UPDATE FAILURE');
    return produce(state,draft=>{
      draft.isLogged = false;
      draft.login.pending = false;
      draft.login.success = false;
      draft.login.failure = true;
    })
  },

  // logout
  [types.LOGOUT_UPDATE.SUCCESS]:(state,{payload:diff})=>{
    console.log('>>> LOGIN_UPDATE FAILURE');
    return produce(state,draft=>{
      draft.isLogged = false;
      draft.profile={};
      draft.login.pending = false;
      draft.login.success = false;
      draft.login.failure = false;
    })
  },
},initialState)