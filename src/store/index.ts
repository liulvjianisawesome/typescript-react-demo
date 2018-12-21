import { createStore, applyMiddleware } from "redux";
import storeType from "./storeType";
import actionType from './actionType';
import rootReducer from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';

const epicMiddleware = createEpicMiddleware<actionType, actionType, storeType>();

const store = createStore<storeType, actionType, {}, {}>(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;