import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import listingReducer from "./listingReducer";
import baseReducer from "./baseReducer";

export default combineReducers({
  usersReducer,
  authReducer,
  listingReducer,
  baseReducer
});
