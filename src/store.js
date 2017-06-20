import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './reducers/index'

const reducer = combineReducers({ ...reducers })

export default createStore(reducer, applyMiddleware(thunk))
