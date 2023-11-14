/// Name the interface with I prefix: e.g INameHere {}

import { IBaseProperty } from "../base/Base.interfaces";

export declare interface IPageRegionProps extends React.HTMLAttributes<HTMLElement>, Partial<IBaseProperty> {
  autoOverflowX?: boolean;
  autoOverflowY?: boolean;
  autoOverflow?: boolean;

  useMargin?: boolean;
};
export declare interface IPageRegionState {};
