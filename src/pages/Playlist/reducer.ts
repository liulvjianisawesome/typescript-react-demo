import { actionType } from "./actions";
import { IStoreType } from "./storeType";
import { SET_STORE } from "./constant";

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

export default function reducer(state: IStoreType = initialState, action: actionType): IStoreType {
  switch (action.type) {
    case SET_STORE:
      return {
        ...action.data,
      }
  }
  return state;
}