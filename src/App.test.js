import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
// run "npm install react-test-renderer --save-dev" and "npm install enzyme --save-dev" to install testing tools.

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('contains Header and Footer components', () => {
  const component = shallow(<App />);
  expect(component.find('Header')).toBeDefined();
  expect(component.find('Footer')).toBeDefined();
});