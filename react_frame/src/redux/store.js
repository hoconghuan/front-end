import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import countReducer from './count_reduce';

export default createStore(countReducer, applyMiddleware(thunk))
