import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('has h1 title', () => {
  const component = shallow(<Header />);
  expect(component.find('h1').text()).toContain("My React Site");
});

it('contains x2 NavLink (menu items)', () => {
  const component = shallow(<Header />);
  expect(component.find('li > NavLink').length).toEqual(2);
});

it('navigation has correct links', () => {
  const component = shallow(<Header />);
  expect(component.find('li > NavLink').at(0).props().children).toContain("Home");
  expect(component.find('li > NavLink').at(0).props().to).toEqual("/");
  expect(component.find('li > NavLink').at(1).props().children).toContain("Contact");
  expect(component.find('li > NavLink').at(1).props().to).toEqual("/contact");
});