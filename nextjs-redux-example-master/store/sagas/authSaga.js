
import {all, takeEvery,call, take} from 'redux-saga/effects';
// import {storage} from 'libs/library';
// import { createPromiseSaga } from 'libs/utils';
// import { ENV_MODE_DEV } from 'libs/setting';
// import {Actions} from 'store/actionCreators';
// import {
//   AUTH_SIGNIN_SAGAS,
//   AUTH_TOKEN_SAGAS,
//   AUTH_LOGOUT_SAGAS,
// } from 'store/actions';


/**
 * 
 * @param {*} param0 
 */
// const handleSignIn= createPromiseSaga({
//   type:AUTH_SIGNIN_SAGAS,
//   tag:'handleSignIn',
//   success:({payload})=>{
//     storage.set('token',payload.email);
//     storage.set('email',payload.email);
//     storage.set('password',payload.password);
//   }
// });


// const handleToken= createPromiseSaga({
//   type:AUTH_TOKEN_SAGAS,
//   tag:'handleToken',
//   success:()=>{
//     Actions.base_exit_landing();
//   }
// });

// const handleLogout= createPromiseSaga({
//   type:AUTH_LOGOUT_SAGAS,
//   tag:'handleLogout',
//   success:({payload})=>{
//     storage.remove('token',payload.email);
//   }
// });


export default function* AuthSaga(){
  yield all([
    // takeEvery(AUTH_SIGNIN_SAGAS.index,handleSignIn),
    // takeEvery(AUTH_TOKEN_SAGAS.index,handleToken),
    // takeEvery(AUTH_LOGOUT_SAGAS.index,handleLogout),
  ])
}