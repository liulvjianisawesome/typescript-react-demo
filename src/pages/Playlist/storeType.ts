export interface ICategories {
  "0": "语种";
  "1": "风格";
  "2": "场景";
  "3": "情感";
  "4": "主题";
}

interface ISub {
  category: number;
  hot: boolean;
  imgId: number;
  imgUrl: string;
  name: string;
  resourceCount: number;
  resourceType: number;
  type: number;
}

export type Sub = ISub[] | undefined;

export interface IStoreType {
  code: number;
  all: {
    category: number;
    hot: boolean;
    imgId: number;
    imgUrl: string;
    name: string;
    resourceCount: number;
    resourceType: number;
    type: number;
  };
  categories: ICategories;
  sub?: ISub[];
  tags: any;
};