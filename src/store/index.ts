import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import storeType from "./storeType";
import actionType from './actionType';
import rootReducer from './reducer';

const store = createStore<storeType, actionType, {}, {}>(rootReducer, applyMiddleware(thunk));

export default store;