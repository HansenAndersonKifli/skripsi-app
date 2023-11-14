import React from 'react';
import { IDefaultRouter } from '../../interfaces';

/**
 * import this route to src > config > Router.ts to make the path accessible from address bar
 * If you want this path accessible from side menu, go to src > config > SideBarMenu.ts and add the path
 * Further information lies in SideBarMenu.ts
 */

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes: IDefaultRouter[] = [
  {
    path: '/home',
    exact: true,
    name: 'Example Module',
    component: React.lazy(() => import('./App')),
  },
];

export default routes;