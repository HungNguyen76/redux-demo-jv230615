// import { combineReducers } from 'redux'
import { createStore} from 'redux'
// import reducer from './counter/reducer'
import reducer from './todo/reducer'
export const store = createStore(reducer)
