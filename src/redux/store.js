import { createStore, applyMiddleware, combineReducers } from 'redux';
import greetingReducer from './greetingReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
		greeting: greetingReducer,
});

const store = createStore( rootReducer, applyMiddleware(thunk) );

export default store;
