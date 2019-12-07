  
import * as API from 'lib/api';
import * as types from 'store/types';
import {makeAsyncCreateActions} from 'store/actionCreators';
//실제로 일어나는 액션들이 정의됨
// export const setting_license_update = makeAsyncCreateActions(types.SETTING_LICENSE_UPDATE)(()=>{});

export const login_update = makeAsyncCreateActions(types.LOGIN_UPDATE)(API.postLogin);

