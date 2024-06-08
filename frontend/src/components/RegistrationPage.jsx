import React, { useState } from 'react';
import './componentCss/registrationPage.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to the backend server
    console.log('Employee Registered:', { name, contactNumber });
  };

  return (
    <div className="registration-page">
      <h2>Employee Registration for Carpooling</h2>
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
        <div className="wrapper"><button type="submit">Register</button></div>
      </form>
    </div>
  );
};

export default RegistrationPage;
