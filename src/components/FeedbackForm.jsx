import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h3>Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
