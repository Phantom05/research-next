import { makeAsyncCreateActions, makeAsyncActions } from 'libs/utils';
import * as API from 'libs/api';

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const GET_TODO = "GET_TODO";
export const SAGA_TESTS = "SAGA_TESTS";

export const BASE_EXIT_LANDING = 'base/BASE_EXIT_LANDING';
export const BASE_ENTER_LANDING = 'base/BASE_ENTER_LANDING';

export const BASE_TEST = makeAsyncActions('base/BASE_TEST');
export const BASE_TEST_SAGAS = makeAsyncCreateActions(BASE_TEST)(API.postTest);
console.log('what!!');