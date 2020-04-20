import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import authRouter from "./authRouter";

export default combineReducers({
  usersReducer,
  authRouter
});
