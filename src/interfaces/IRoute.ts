/// Name the interface with I prefix: e.g INameHere {}

import React from 'react';

export declare interface IDefaultRouter {
  path: string;
  name: string;
  component?: React.LazyExoticComponent<any>;
  exact?: boolean;
};
