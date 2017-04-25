import React, {Component} from 'react';

export class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    message: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("handleFormSubmit, form data is: ", this.state);
  }

  handleChange = (event) => {
    console.log(`onChange for ${event.target.id}: ${event.target.value}`);
    let newState = {
      ...this.state
    };
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" onChange={this.handleChange}/><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" onChange={this.handleChange}/><br />
        <label htmlFor="message">Message:</label><br />
        <textArea id="message" onChange={this.handleChange}/><br />
        <button type="submit">Send it!</button>
      </form>
    );
  }
}

export default ContactForm;