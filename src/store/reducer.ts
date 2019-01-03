import { combineReducers } from 'redux';
import playlistReducer from '../pages/Playlist/reducer';

export default combineReducers({
  playlist: playlistReducer,
});