import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import appData from './reducers/demoAction';

let rootReducer = combineReducers({
	appData
})

export default function configureStore() {
	return createStore(  rootReducer,
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
};