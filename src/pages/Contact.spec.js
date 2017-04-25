import React from 'react';
import Contact from './Contact';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Contact />);
});