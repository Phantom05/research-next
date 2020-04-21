
import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { createPromiseSaga } from 'libs/utils';
// import{
//   BASE_TEST_SAGAS
// } from 'store/actions';

// const handleTest= createPromiseSaga({
//   type:actions.SAGA_TEST,
//   tag:'handleToken',
// });




export default function* ListingSaga() {
  yield all([
    // takeEvery(actions.SAGA_TEST.INDEX, handleTest)
  ])
}