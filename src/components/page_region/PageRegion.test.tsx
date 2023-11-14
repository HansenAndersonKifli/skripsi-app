import React from 'react';
import * as ReactDOM from 'react-dom';
import PageRegion from './PageRegion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageRegion />,div);
});
