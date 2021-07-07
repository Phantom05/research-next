import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { SERVER } from '../constants'

const initialState = {
  userId: null,
  jwtToken: null,
  isLogin: false,
  isLoginSuccess: false,
  isSignupSuccess: false,
  message: null,
}

const USER_SIGNIN = 'user/USER_SIGNIN'
const USER_SIGNUP = 'user/USER_SIGNUP'

export const userSignin = createAction(USER_SIGNIN, params => {
  return axios.post(`${SERVER}/api/login`, params)
})

export const userSignup = createAction(USER_SIGNUP, params => {
  return axios.post(`${SERVER}/api/signup`, params)
})

export default handleActions(
  {
    ...pender({
      type: USER_SIGNIN,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
          isLoginSuccess: true,
          isLogin: true,
        }
      },
      onFailure: (state, action) => {
        return {
          ...state,
          isLoginSuccess: false,
          isLogin: false,
        }
      },
    }),
    ...pender({
      type: USER_SIGNUP,
      onSuccess: (state, action) => {
        return {
          ...state,
          message: action.payload.data,
          isSignupSuccess: true,
        }
      },
    }),
  },
  initialState,
)
