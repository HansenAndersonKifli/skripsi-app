import React from 'react';
import * as ReactDOM from 'react-dom';
import PageHeaderWrapper from './PageHeaderWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageHeaderWrapper />,div);
});
