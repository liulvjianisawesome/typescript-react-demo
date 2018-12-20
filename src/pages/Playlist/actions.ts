import { PLAYLIST_GETINITIALDATA } from "./constant";

export interface IPlaylistGetInitialData {
  type: PLAYLIST_GETINITIALDATA;
};

export type actionType = IPlaylistGetInitialData;

export function getInitialData(): IPlaylistGetInitialData {
  return {
    type: PLAYLIST_GETINITIALDATA
  };
};