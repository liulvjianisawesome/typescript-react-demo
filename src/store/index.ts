import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import StoreType from "./storeType";
import ActionType from './actionType';
import rootReducer from './reducer';
import rootEpic from './epic';

const epicMiddleware = createEpicMiddleware<ActionType, ActionType, StoreType>();

const store = createStore<StoreType, ActionType, {}, {}>(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;