import React, {Component} from 'react';
import './ContactForm.css';

export class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("handleFormSubmit, form data is: ", this.state);
  }

  handleChange = (event) => {
    console.log(`onChange for ${event.target.id}: ${event.target.value}`);
    const { id, value } = event.target;
    let newState = {
      ...this.state
    };
    if (newState[id] !== undefined) {
      newState[id] = value;
    }
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="ContactForm-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>
        </div>
        <div className="ContactForm-row">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={this.handleChange}/>
        </div>
        <div className="ContactForm-row">
          <label htmlFor="message">Message:</label>
          <textArea id="message" onChange={this.handleChange}/>
        </div>
        <div className="ContactForm-row">
          <button type="submit">Send it!</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;