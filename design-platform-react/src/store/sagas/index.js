import {all,fork} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import authSaga from './authSaga';
// import wsSetSaga from './wsSetSaga'; 
// import wsSaga from './wsSaga'; 
// import authSaga from './authSaga';

export default function* rootSaga(){
  yield all([
    fork(homeSaga),
    fork(authSaga),
    // fork(wsSetSaga),
    // fork(wsSaga),
    // fork(authSaga),
  ])
}