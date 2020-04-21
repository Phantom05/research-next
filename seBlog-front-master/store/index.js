import { createStore, applyMiddleware } from 'redux'
import reducers from '../ducks'

import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import penderReducer from 'redux-pender'

const logger = createLogger({})
const store = createStore(reducers, applyMiddleware(logger, ReduxThunk, penderReducer()))

export default store
