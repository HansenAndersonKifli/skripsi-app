import React from 'react';
import * as ReactDOM from 'react-dom';
import Example from './BackNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Example />,div);
});
