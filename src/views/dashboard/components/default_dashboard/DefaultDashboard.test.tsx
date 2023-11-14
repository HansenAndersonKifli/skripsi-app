import React from 'react';
import * as ReactDOM from 'react-dom';
import DefaultDashboard from './DefaultDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultDashboard />,div);
});
