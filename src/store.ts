import { createStore } from "redux";
import { IStoreType } from "./pages/Playlist/types";
import { actionType } from './pages/Playlist/actions';
import reducer from './pages/Playlist/reducer';


const initialState: IStoreType = {
  all: {
    category: 1,
    hot: false,
    imgId: 1,
    imgUrl: "a",
    name: "a",
    resourceCount: 1,
    resourceType: 1,
    type: 1,
  }
};

const store = createStore<IStoreType, actionType, {}, {}>(reducer, initialState);

export default store;