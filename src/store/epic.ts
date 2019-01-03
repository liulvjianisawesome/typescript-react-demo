import { combineEpics } from 'redux-observable';

import { getInitialDataEpic, getHotEpic } from '../pages/Playlist/epics';

export default combineEpics(
  getInitialDataEpic,
  getHotEpic,
);