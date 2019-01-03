import { PLAYLIST_GETINITIALDATA, PLAYLIST_GETHOT, SET_STORE } from "./constant";
import { IStoreType } from "./storeType";

export interface ISetStoreAction {
  type: SET_STORE;
  data: IStoreType;
};

export interface IGetinitialDataAction {
  type: PLAYLIST_GETINITIALDATA;
}

export interface IGetHotAction {
  type: PLAYLIST_GETHOT;
}

export type ActionType = ISetStoreAction | IGetinitialDataAction | IGetHotAction;

export function getSetStoreAction(data: IStoreType): ISetStoreAction {
  return {
    type: SET_STORE,
    data,
  };
};

export function getInitialDataAction(): IGetinitialDataAction {
  return {
    type: PLAYLIST_GETINITIALDATA,
  };
};

export function getHotAction(): IGetHotAction {
  return {
    type: PLAYLIST_GETHOT,
  };
};