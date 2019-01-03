import { Epic, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators'
import { PLAYLIST_GETINITIALDATA, PLAYLIST_GETHOT } from './constant';
import { actionType, ISetStoreAction, getSetStoreAction } from './actions';
import { IStoreType } from './storeType';
import RootStoreType from '../../store/storeType';

export const getInitialDataEpic: Epic<actionType, actionType, RootStoreType> = (action$) => action$.pipe(
  ofType(PLAYLIST_GETINITIALDATA),
  mergeMap(() =>
    ajax.getJSON(`http://localhost:4000/playlist/catlist`).pipe(
      map<IStoreType, ISetStoreAction>(response => getSetStoreAction(response))
    )
  )
);

export const getHotEpic: Epic<actionType, actionType, RootStoreType> = (action$) => action$.pipe(
  ofType(PLAYLIST_GETHOT),
  mergeMap(() =>
    ajax.getJSON(`http://localhost:4000/playlist/hot`).pipe(
      map<IStoreType, ISetStoreAction>(response => getSetStoreAction(response))
    )
  )
);