import axios from "../../libs/axios";
import Axios from 'axios';
import * as actions from './index';

export const getUsers = async dispatch => {
  const users = await axios.get("/users");
  return dispatch({ type: actions.GET_USERS, payload: users.data });
}

export const getUser = async dispatch => {
  const user = await axios.get(`/users/${id}`);
  return dispatch({ type: actions.GET_USER, payload: user.data });
}

export const getTest = async dispatch => {
  const users = await axios.get("/users");
  return dispatch({ type: actions.GET_USERS, payload: users.data });
}
export const getTodo =async dispatch => {
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  const { data } = await Axios.get(url);
  return dispatch({ type: actions.GET_TODO, payload: data });
}


// export const getUser = id => async dispatch => {
//   const user = await axios.get(`/users/${id}`);
//   return dispatch({ type: actions.GET_USER, payload: user.data });
// };

// export const getTodo = () => async dispatch => {
//   const url = `https://jsonplaceholder.typicode.com/todos/1`;
//   const { data } = await Axios.get(url);
//   return dispatch({ type: actions.GET_TODO, payload: data });
// }
// export const getUsers =  () => async dispatch => {
//   const users = await axios.get("/users");
//   return dispatch({ type: actions.GET_USERS, payload: users.data });
// };