  
import * as API from 'lib/api';
import * as types from 'store/types';
import {makeAsyncCreateActions} from 'store/actionCreators';
//실제로 일어나는 액션들이 정의됨
// export const setting_license_update = makeAsyncCreateActions(types.SETTING_LICENSE_UPDATE)(()=>{});

export const login_update  = makeAsyncCreateActions(types.LOGIN_UPDATE)(API.postLogin);
export const logout_update = makeAsyncCreateActions(types.LOGOUT_UPDATE)(API.postLogout);
export const token_update  = makeAsyncCreateActions(types.TOKEN_UPDATE)(API.getToken);

