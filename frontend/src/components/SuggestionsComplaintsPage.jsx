import React, { useState } from 'react';
import './componentCss/suggestionsComplaintsPage.css';

const SuggestionsComplaintsPage = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to the backend server
    console.log('Employee Feedback:', { name, contactNumber, message });
    // Clear the form
    setName('');
    setContactNumber('');
    setMessage('');
  };

  return (
    <div className="suggestions-complaints-page">
      <h2>Submit Your Suggestions or Complaints</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Suggestion/Complaint:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SuggestionsComplaintsPage;