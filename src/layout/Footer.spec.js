import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Footer />)
})

it('contains 2017 in the text', () => {
  const component = shallow(<Footer />)
  expect(component.text()).toContain("2017")
})
