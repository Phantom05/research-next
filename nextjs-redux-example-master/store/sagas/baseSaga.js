
import { all, takeEvery, call } from 'redux-saga/effects';
import actions from 'store/actions';
import { createPromiseSaga } from 'libs/utils';
// import{
//   BASE_TEST_SAGAS
// } from 'store/actions';

// const handleTest= createPromiseSaga({
//   type:BASE_TEST_SAGAS,
//   tag:'handleToken',
// });

function* handleTest(){
  console.log('handleTest');
}



export default function* ListingSaga() {
  yield all([
    // takeEvery("GET_TODO", handleTest)
  ])
}