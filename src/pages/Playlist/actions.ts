import { PLAYLIST_GETINITIALDATA, SET_STORE } from "./constant";
import { IStoreType } from "./storeType";

export interface ISetStoreAction {
  type: SET_STORE;
  data: IStoreType;
};

export interface IGetinitialDataAction {
  type: PLAYLIST_GETINITIALDATA;
}

export type actionType = ISetStoreAction | IGetinitialDataAction;

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