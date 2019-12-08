import {all, takeEvery,call} from 'redux-saga/effects';
import * as actions from 'store/actions';
import * as types from 'store/types';
import {storage,keys} from 'lib/utils';


function* handleLogin({payload}){
  console.log('>>> handleLogin');
  const {login_update} = actions;
  login_update.pending()
  const {data,error} =yield call(login_update.request,payload);
  if(data && data.result === 1 && !error){
    login_update.success(data);
    storage.set(`${keys.user}token`,data.token);
  }else{
    login_update.failure();
  }
}

function* handleLogout({payload}){
  console.log('>>handleLogout');
  const {logout_update} = actions
  logout_update.pending();
  const {data,error} =yield call(logout_update.request,payload);
  if(data && !error){
    logout_update.success(data);
    storage.remove(`${keys.user}token`);
  }else{
    logout_update.failure();
  }
}

function* handleToken({payload}){
  console.log('>>> handleToken');
  const {login_update} = actions
  login_update.pending();
  const {data,error} = yield call(login_update.request,payload);
  if(data && !error){
    console.log(data);
    login_update.success(data);
  }else{
    login_update.failure();
  }
}


export default function* AuthSaga(){
  yield all([
    takeEvery(types.LOGIN_UPDATE.INDEX,handleLogin),
    takeEvery(types.LOGOUT_UPDATE.INDEX,handleLogout),
    takeEvery(types.TOKEN_UPDATE.INDEX,handleToken),

  ])
}