import React from 'react';
import ContactForm from '../forms/ContactForm';

const Contact = () => {
  return {
    render: () => {
      return (
        <div className="App-content-width">
          <article>
            <h2>Contact</h2>
            <p>You will be able to contact me from this page.</p>
            <ContactForm />
          </article>
        </div>
      );
    }
  }
}

export default Contact;