import React from 'react'
import Pictures from './Pictures'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Pictures />)
})
