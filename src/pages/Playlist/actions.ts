import { SET_STORE } from "./constant";
import { IStoreType } from "./storeType";
import { Dispatch } from "redux";

export interface ISetStoreAction {
  type: SET_STORE;
  data: IStoreType;
};

export type PlaylistGetInitialData = (dispatch: Dispatch<actionType>) => void;

export type actionType = ISetStoreAction;

export function getSetStoreAction(data: IStoreType): ISetStoreAction {
  return {
    type: SET_STORE,
    data,
  };
};

export function getInitialData(): PlaylistGetInitialData {
  return (dispatch: Dispatch<actionType>) => {
    fetch("http://localhost:4000/playlist/catlist").then(res => res.json()).then(resJson => {
      resJson.type = "llj";
      dispatch(getSetStoreAction(resJson));
    });
  };
};