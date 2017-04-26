import React, {Component} from 'react';
import './ContactForm.css';

export class ContactForm extends Component {

  defaultState = {
    name: '',
    email: '',
    message: ''
  }

  state = {
    ...this.defaultState
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit, form data is: ", this.state);
  }

  handleChange = (event) => {
    console.log(`onChange for ${event.target.id}: ${event.target.value}`);
    const {id, value} = event.target;
    if (this.defaultState[id] !== undefined) {
      let newState = {
        ...this.state
      };
      newState[id] = value;
      this.setState(newState);
    }
  }

  resetForm = (event) => {
    event.preventDefault();
    this.setState({...this.defaultState});
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
          <button type="reset" onClick={this.resetForm}>Reset</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;