import React from 'react';
import ContactForm from './ContactForm';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<ContactForm />);
});

it('has all inputs', () => {
  const component = shallow(<ContactForm />);
  expect(component.find('input').length).toEqual(2);
  expect(component.find('textArea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

it('name input updates the state', () => {
  const component = mount(<ContactForm />);
  const mockChangeEvent = {
    target: {
      id: "name",
      value: "John"
    }
  };
  component.find('input').at(0).simulate("change", mockChangeEvent);
  expect(component.state().name).toEqual(mockChangeEvent.target.value);
});

it('email input updates the state', () => {
  const component = mount(<ContactForm />);
  const mockChangeEvent = {
    target: {
      id: "email",
      value: "email@somedomain.com"
    }
  };
  component.find('input').at(1).simulate("change", mockChangeEvent);
  expect(component.state().email).toEqual(mockChangeEvent.target.value);
});

it('message textarea updates the state', () => {
  const component = mount(<ContactForm />);
  const mockChangeEvent = {
    target: {
      id: "message",
      value: "Hello world!"
    }
  };
  component.find('textArea').at(0).simulate("change", mockChangeEvent);
  expect(component.state().message).toEqual(mockChangeEvent.target.value);
});

it('form submit will call handleFormSubmit function', () => {
  const component = mount(<ContactForm />);
  const mockEvent = {
    preventDefault: jest.fn()
  };
  const mockFormData = {
    name: 'John',
    email: 'someone@some123domain.com',
    message: 'Hello world'
  };
  spyOn(component.nodes[0], 'handleFormSubmit');
  component.setState({...mockFormData});
  component.find('form').at(0).simulate("submit", mockEvent);
  expect(component.nodes[0].handleFormSubmit).toBeCalled();
});