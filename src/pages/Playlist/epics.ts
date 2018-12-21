import { Epic, ofType } from 'redux-observable';
import { actionType, ISetStoreAction, getSetStoreAction } from './actions';
import { IStoreType } from './storeType';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators'
import { PLAYLIST_GETINITIALDATA } from './constant';

export const pingEpic: Epic<actionType, actionType, IStoreType> = (action$) => action$.pipe(
  ofType(PLAYLIST_GETINITIALDATA),
  mergeMap(() =>
    ajax.getJSON(`http://localhost:4000/playlist/catlist`).pipe(
      map<IStoreType, ISetStoreAction>(response => getSetStoreAction(response))
    )
  )
);
