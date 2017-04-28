import React from 'react';
import ContactForm from './ContactForm';
import { shallow, mount } from 'enzyme';

const formFields = [{
  id: 'name',
  value: 'John'
},{
  id: 'email',
  value: 'email@somedomain.com'
},{
  id: 'message',
  value: 'Hello world!'
}];

const mockFormData = {
  name: 'John',
  email: 'someone@some123domain.com',
  message: 'Hello world!'
};

it('should render without crashing', () => {
  shallow(<ContactForm />);
});

it('should contain all inputs', () => {
  const component = shallow(<ContactForm />);
  expect(component.find('input').length).toEqual(2);
  expect(component.find('textArea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

describe('all inputs should update on change', () => {
  formFields.forEach((formField) => {
    it(`input "${formField.id}" should update the state`, () => {
      const component = mount(<ContactForm />);
      const mockChangeEvent = {
        target: {...formField}
      };
      component.find(`#${formField.id}`).at(0).simulate("change", mockChangeEvent);
      expect(component.state()[formField.id]).toEqual(mockChangeEvent.target.value);
    });
  });
});

it('form submit should call handleFormSubmit function', () => {
  const component = mount(<ContactForm />);
  const mockEvent = {
    preventDefault: jest.fn()
  };
  spyOn(component.nodes[0], 'handleFormSubmit').and.callThrough();
  component.setState({...mockFormData});
  component.find('form').at(0).simulate("submit", mockEvent);
  expect(component.nodes[0].handleFormSubmit).toBeCalled();
  expect(mockEvent.preventDefault).toBeCalled();
});

it('reset button should clear the form', () => {
  const component = mount(<ContactForm />);
  const mockEvent = {
    preventDefault: jest.fn()
  };
  spyOn(component.nodes[0], 'resetForm').and.callThrough();
  component.setState({...mockFormData});
  component.find('button').at(1).simulate("click", mockEvent);
  expect(component.nodes[0].resetForm).toBeCalled();
  expect(component.state()).not.toEqual(mockFormData);
});