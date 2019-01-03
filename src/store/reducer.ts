import { combineReducers } from 'redux';
import playlistReducer from '../pages/Playlist/reducer';
import StoreType from "./storeType";
import ActionType from './actionType';

export default combineReducers<StoreType, ActionType>({
  playlist: playlistReducer,
});