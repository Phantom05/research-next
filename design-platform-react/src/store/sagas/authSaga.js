import {all, takeEvery,call} from 'redux-saga/effects';
import * as actions from 'store/actions';
import * as types from 'store/types';


function* handleLogin({payload}){
  console.log('>>> handleLogin');
  const {login_update} = actions;
  login_update.pending()
  const {data,error} =yield call(login_update.request,payload);
  if(data && data.result === 1 && !error){
    login_update.success(data);
    // storage.set(keys.user,data.token);
  }else{
    login_update.failure();
  }
}

// function* handleLogout({payload}){
//   console.log('handleLogout');
//   STATE_LOGOUT.pending();
//   const {data,error} =yield call(STATE_LOGOUT.request,payload);
//   if(data && !error){
//     STATE_LOGOUT.success(data);
//     storage.clear();
//   }else{
//     STATE_LOGOUT.failure();
//   }
// }

// function* handleToken({payload}){
//   console.log('>>> handleToken');
//   STATE_TOKEN.pending();
//   const {data,error} = yield call(STATE_TOKEN.request,payload);
//   if(data && !error){
//     console.log(data);
//     STATE_TOKEN.success(data);
//   }else{
//     STATE_TOKEN.failure();
//   }
// }


export default function* AuthSaga(){
  yield all([
    takeEvery(types.LOGIN_UPDATE.INDEX,handleLogin),
    // takeEvery(actions.AUTH_LOGOUT_REQUEST,handleLogout),
    // takeEvery(actions.AUTH_TOKEN_REQUEST,handleToken),

  ])
}