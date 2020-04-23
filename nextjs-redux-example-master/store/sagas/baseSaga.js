
import { all, takeEvery, call } from 'redux-saga/effects';
import * as actions from 'store/actions';
import { createPromiseSaga } from 'libs/utils';
import{
  SAGA_TEST_SAGAS
} from 'store/actions';

const handleTest= createPromiseSaga({
  type:actions.SAGA_TEST_SAGAS,
  tag:'handleToken',
});


export default function* ListingSaga() {
  yield all([
    takeEvery(actions.SAGA_TEST_SAGAS.INDEX, handleTest)
  ])
}