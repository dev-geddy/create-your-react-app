import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
// run "npm install react-test-renderer --save-dev" and "npm install enzyme --save-dev" to install testing tools.

import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('contains Header and Footer components', () => {
  const component = shallow(<App />);
  expect(component.find('Header')).toBeDefined();
  expect(component.find('Footer')).toBeDefined();
});

it('renders correct routes', () => {
  const wrapper = shallow(<App />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['/']).toBe(Home);
  expect(pathMap['/contact']).toBe(Contact);
});