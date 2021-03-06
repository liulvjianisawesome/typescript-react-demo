import { ActionType } from "./actions";
import { IStoreType } from "./storeType";
import { SET_STORE } from "./constant";

const initialState: IStoreType = {
  code: 0,
  all: {
    category: 1,
    hot: false,
    imgId: 1,
    imgUrl: "a",
    name: "a",
    resourceCount: 1,
    resourceType: 1,
    type: 1,
  },
  categories: {
    0: "语种",
    1: "风格",
    2: "场景",
    3: "情感",
    4: "主题",
  },
  tags: {

  },
};

export default function reducer(state: IStoreType = initialState, action: ActionType): IStoreType {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        ...action.data,
      }
  }
  return state;
}