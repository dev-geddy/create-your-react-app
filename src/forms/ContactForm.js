import React, {Component} from 'react';

export class ContactForm extends Component {

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("handleFormSubmit()")
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name"/><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email"/><br />
        <label htmlFor="message">Message:</label><br />
        <textArea id="message" /><br />
        <button type="submit">Send it!</button>
      </form>
    );
  }
}

export default ContactForm;