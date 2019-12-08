import {createAction} from 'redux-actions';
import {makeAsyncActions} from 'lib/utils';

// 객체형식의 타입들만 정의됨
const test = createAction('con/sg')

export const SETTING_LICENSE_UPDATE = makeAsyncActions('setting/SETTING_LICENSE_UPDATE');
export const LOGIN_UPDATE           = makeAsyncActions('login/LOGIN_UPDATE');
export const LOGOUT_UPDATE          = makeAsyncActions('logout/LOGOUT_UPDATE');
export const TOKEN_UPDATE           = makeAsyncActions('token/TOKEN_UPDATE');