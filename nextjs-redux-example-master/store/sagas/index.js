import {all,fork} from 'redux-saga/effects';
import baseSaga from './baseSaga';
import authSaga from './authSaga';
// import infoSaga from './infoSaga';
// import listingSaga from './listingSaga';
// import commonSaga from './commonSaga';


export default function* rootSaga(){
  yield all([
    fork(baseSaga),
    fork(authSaga),
    // fork(infoSaga),
    // fork(listingSaga),
    // fork(commonSaga),
    // fork(wsSaga),
    // fork(homeSaga),
  ])
}