import React from 'react';

function ContactForm() {
  return (
    <div>
      <h3>Contact Us</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
