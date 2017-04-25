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
    const {id, value} = event.target;
    let newState = {
      ...this.state
    };
    if (newState[id] !== undefined) {
      newState[id] = value;
    }
    this.setState(newState);
  }

  resetForm = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    const {name, email, message} = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="ContactForm-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} value={name}/>
        </div>
        <div className="ContactForm-row">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={this.handleChange} value={email}/>
        </div>
        <div className="ContactForm-row">
          <label htmlFor="message">Message:</label>
          <textArea id="message" onChange={this.handleChange} value={message}/>
        </div>
        <div className="ContactForm-row">
          <button type="submit">Send it!</button>
          <button onClick={this.resetForm}>Reset</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;