import { combineReducers } from 'redux'
import appReducer from './appReducer'

const reducers = combineReducers({
  appReducer // ..., anotherReducer, moreReducers
})

export default reducers
