import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers/index'

const reducer = combineReducers({ ...reducers })

export default createStore(reducer, applyMiddleware(thunk))
