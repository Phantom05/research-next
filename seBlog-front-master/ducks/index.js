import { combineReducers } from 'redux'
import category from './category'
import blog from './blog'
import event from './event'
import blogList from './blogList'
import user from './user'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  category,
  blog,
  event,
  blogList,
  user,
  pender: penderReducer,
})
